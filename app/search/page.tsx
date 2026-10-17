import fs from 'node:fs';
import path from 'node:path';
import { SearchPortal, type SearchEntry } from '@/components/search/SearchPortal';
import { siteData } from '@/lib/site-data';

const sources = [
  ['Foundation Constitution', 'foundation.txt', '/documents/read/foundation'],
  ['Governance Register', 'governance.txt', '/documents/read/governance'],
  ['ASTA OS Architecture', 'asta-os.txt', '/documents/read/asta-os'],
  ['Jowih Credits', 'credits.txt', '/documents/read/credits'],
  ['Investment Architecture', 'investment-architecture.txt', '/documents/read/investment'],
  ['GAG Initiative', 'gag-initiative.txt', '/documents/read/gag'],
] as const;

function sourceEntries(): SearchEntry[] {
  return sources.flatMap(([title, file, href]) => {
    const lines = fs.readFileSync(path.join(process.cwd(), 'public/documents', file), 'utf8').split(/\r?\n/);
    const entries: SearchEntry[] = [{ title, type: 'Document', href, text: lines.slice(0, 12).join(' ') }];
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (/^(ARTICLE|SECTION|CHAPTER)\s+/i.test(trimmed) || (file === 'foundation.txt' && /^19\.\d+\s+/.test(trimmed))) entries.push({ title: trimmed, type: 'Source section', href: `${href}#${file}-${index}`, text: lines.slice(index + 1, index + 5).join(' ') });
    });
    return entries;
  });
}

export default function SearchPage() {
  const pages: SearchEntry[] = siteData.nav.map((item) => ({ title: item.label, type: 'Website page', href: item.href, text: item.description || '' }));
  const corridors: SearchEntry[] = siteData.gag.corridors.map((corridor) => ({ title: `${corridor.title} Corridor`, type: 'GAG corridor', href: `/gag/${corridor.slug}`, text: corridor.body }));
  const frameworks: SearchEntry[] = siteData.gag.frameworks.map((framework) => ({ title: framework.title, type: 'Framework', href: `/framework/${framework.id}`, text: framework.detail }));
  return <SearchPortal entries={[...pages, ...corridors, ...frameworks, ...sourceEntries()]} />;
}
