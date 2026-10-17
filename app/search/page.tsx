import fs from 'node:fs';
import path from 'node:path';
import { SearchPortal, type SearchEntry } from '@/components/search/SearchPortal';
import { siteData } from '@/lib/site-data';
import { getArchiveDocuments } from '@/lib/archive';

function isSourceHeading(line: string) {
  const value = line.trim().replace(/^#\s+/, '');
  return /^(ARTICLE|SECTION|CHAPTER)\s+/i.test(value)
    || /^\d+(?:\.\d+)+\s+\S/.test(value)
    || (/^[A-Z0-9][A-Z0-9 &()'./–—-]{8,}$/.test(value) && value.length <= 110);
}

function sourceEntries(): SearchEntry[] {
  return getArchiveDocuments().flatMap((document) => {
    const lines = fs.readFileSync(path.join(process.cwd(), 'public', document.textFile), 'utf8').split(/\r?\n/);
    const href = `/documents/read/${document.slug}`;
    const entries: SearchEntry[] = [{ title: document.title, type: 'Document', href, text: lines.slice(0, 12).join(' '), body: lines.slice(0, 80).join('\n'), source: document.source }];
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      const isHeading = isSourceHeading(trimmed);
      if (isHeading) {
        const nextHeading = lines.slice(index + 1).findIndex((candidate) => isSourceHeading(candidate));
        const end = nextHeading === -1 ? lines.length : index + 1 + nextHeading;
        entries.push({ title: `${document.title} · ${trimmed}`, type: 'Source section', href: `${href}#${document.slug}-${index}`, text: lines.slice(index + 1, index + 6).join(' '), body: lines.slice(index + 1, end).join('\n'), source: document.source });
      }
    });
    return entries;
  });
}

const corridorSourceRanges: Record<string, [string, string]> = {
  transport: ['CORRIDOR 1: TRANSPORT CORRIDOR', 'CORRIDOR 2: INDUSTRIAL & MANUFACTURING CORRIDOR'], industrial: ['CORRIDOR 2: INDUSTRIAL & MANUFACTURING CORRIDOR', 'CORRIDOR 3: ENERGY CORRIDOR'], energy: ['CORRIDOR 3: ENERGY CORRIDOR', 'CORRIDOR 4: DIGITAL CORRIDOR'], digital: ['CORRIDOR 4: DIGITAL CORRIDOR', 'CORRIDOR 5: PAYMENT CORRIDOR'], payments: ['CORRIDOR 5: PAYMENT CORRIDOR', 'CORRIDOR 6: SERVICE CORRIDOR'], services: ['CORRIDOR 6: SERVICE CORRIDOR', 'CORRIDOR 7: SPACE CORRIDOR'], space: ['CORRIDOR 7: SPACE CORRIDOR', 'NEW DAWN CITY'],
};

function corridorBody(slug: string) {
  const source = fs.readFileSync(path.join(process.cwd(), 'public/documents/gag-initiative.txt'), 'utf8');
  const range = corridorSourceRanges[slug];
  if (!range) return '';
  const start = source.indexOf(range[0], 20000); const end = source.indexOf(range[1], start + range[0].length);
  return source.slice(start, end === -1 ? source.length : end).trim();
}

export default function SearchPage() {
  const pages: SearchEntry[] = siteData.nav.map((item) => ({ title: item.label, type: 'Website page', href: item.href, text: item.description || '', source: 'Jowih website' }));
  const archiveDocuments: SearchEntry[] = siteData.documents.map((document) => ({ title: document.title, type: 'Archive document', href: `/documents${document.anchor ? `#${document.anchor}` : ''}`, text: `${document.description} ${document.highlights.join(' ')}`, body: document.highlights.join('\n'), source: document.file }));
  const corridors: SearchEntry[] = siteData.gag.corridors.map((corridor) => ({ title: `${corridor.title} Corridor`, type: 'GAG corridor', href: `/gag/${corridor.slug}`, text: corridor.body, body: corridorBody(corridor.slug), source: 'The GAG initiative .docx' }));
  const frameworks: SearchEntry[] = siteData.gag.frameworks.map((framework) => ({ title: framework.title, type: 'Framework', href: `/framework/${framework.id}`, text: framework.detail, source: 'The GAG initiative .docx' }));
  return <SearchPortal entries={[...pages, ...archiveDocuments, ...corridors, ...frameworks, ...sourceEntries()]} />;
}
