import fs from 'node:fs';
import path from 'node:path';
import { SearchPortal, type SearchEntry } from '@/components/search/SearchPortal';
import { siteData } from '@/lib/site-data';
import { getArchiveDocuments } from '@/lib/archive';
import { corridorRanges, frameworkRanges, frameworkAliases, getGagSection } from '@/lib/gag-sections';

function isSourceHeading(line: string) {
  const value = line.trim().replace(/^#\s+/, '');
  return /^(ARTICLE|SECTION|CHAPTER)\s+/i.test(value)
    || /^\d+(?:\.\d+)+\s+\S/.test(value)
    || (/^[A-Z0-9][A-Z0-9 &()'./–—-]{8,}$/.test(value) && value.length <= 110);
}

function headingValue(line: string) { return line.trim().replace(/^#\s+/, ''); }

function isMajorHeading(line: string) {
  const value = headingValue(line);
  return /^(ARTICLE|SECTION|CHAPTER)\s+/i.test(value)
    || /^\d+\s+\S/.test(value)
    || (/^[A-Z0-9][A-Z0-9 &()'./–—-]{8,}$/.test(value) && value.length <= 110);
}

function sourceEntries(): SearchEntry[] {
  return getArchiveDocuments().flatMap((document) => {
    const lines = fs.readFileSync(path.join(process.cwd(), 'public', document.textFile), 'utf8').split(/\r?\n/);
    const href = `/documents/read/${document.slug}`;
    const headings = lines.map((line, index) => ({ line: line.trim(), index })).filter(({ line }) => isSourceHeading(line));
    // Document preview: the intro before the first section (or the full text
    // for documents without sections) — continuation into sections happens via
    // the prev/next chain instead of cutting at an arbitrary line count.
    const introLines = headings.length ? lines.slice(0, headings[0].index) : lines;
    const entries: SearchEntry[] = [{ title: document.title, type: 'Document', href, text: lines.slice(0, 12).join(' '), body: introLines.join('\n'), source: document.source }];
    const majorHeadings = headings.filter(({ line }) => isMajorHeading(line));
    const sectionEntries = headings.map(({ line, index }, headingIndex) => {
      const nextHeading = headings[headingIndex + 1]?.index ?? lines.length;
      const major = [...majorHeadings].reverse().find((candidate) => candidate.index <= index);
      const nextMajor = major ? majorHeadings.find((candidate) => candidate.index > major.index)?.index ?? lines.length : lines.length;
      const title = `${document.title} · ${headingValue(line)}`;
      const bodyEnd = major?.index === index ? nextMajor : nextHeading;
      const entry: SearchEntry = { title, type: 'Source section', href: `${href}#${document.slug}-${index}`, text: lines.slice(index + 1, index + 6).join(' '), body: lines.slice(index + 1, bodyEnd).join('\n'), source: document.source };
      return entry;
    });
    entries.push(...sectionEntries);
    // Continuation chain: the document preview flows into its sections in
    // order, so readers can step prev/next instead of being cut off mid-way.
    const keyOf = (entry: SearchEntry) => `${entry.type}-${entry.href}-${entry.title}`;
    if (sectionEntries.length) {
      entries[0].nextKey = keyOf(sectionEntries[0]);
      sectionEntries.forEach((entry, index) => {
        entry.prevKey = index === 0 ? keyOf(entries[0]) : keyOf(sectionEntries[index - 1]);
        if (index < sectionEntries.length - 1) entry.nextKey = keyOf(sectionEntries[index + 1]);
      });
    }
    const entryByIndex = new Map(sectionEntries.map((entry, index) => [headings[index].index, entry]));
    sectionEntries.forEach((entry, index) => {
      const major = [...majorHeadings].reverse().find((candidate) => candidate.index <= headings[index].index);
      if (major && major.index !== headings[index].index) entry.parentKey = `${entryByIndex.get(major.index)?.type}-${entryByIndex.get(major.index)?.href}-${entryByIndex.get(major.index)?.title}`;
    });
    return entries;
  });
}

function sectionBody(range: { start: string; end: string } | undefined) {
  if (!range) return '';
  return getGagSection(range.start, range.end).join('\n');
}

export default function SearchPage() {
  const pages: SearchEntry[] = siteData.nav.map((item) => ({ title: item.label, type: 'Website page', href: item.href, text: item.description || '', source: 'Jowih website' }));
  const archiveDocuments: SearchEntry[] = siteData.documents.map((document) => ({ title: document.title, type: 'Archive document', href: `/documents${document.anchor ? `#${document.anchor}` : ''}`, text: `${document.description} ${document.highlights.join(' ')}`, body: document.highlights.join('\n'), source: document.file }));
  const corridors: SearchEntry[] = siteData.gag.corridors.map((corridor) => ({ title: `${corridor.title} Corridor`, type: 'GAG corridor', href: `/gag/${corridor.slug}`, text: corridor.body, body: sectionBody(corridorRanges[corridor.slug]), source: 'The GAG initiative .docx' }));
  const frameworks: SearchEntry[] = siteData.gag.frameworks.map((framework) => ({ title: framework.title, type: 'Framework', href: `/framework/${framework.id}`, text: framework.detail, body: sectionBody(frameworkRanges[frameworkAliases[framework.id]]), source: 'The GAG initiative .docx' }));
  return <SearchPortal entries={[...pages, ...archiveDocuments, ...corridors, ...frameworks, ...sourceEntries()]} />;
}
