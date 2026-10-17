import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { OnlineDocumentReader, type OnlineDocumentSection } from '@/components/documents/OnlineDocumentReader';

const sources: Record<string, { title: string; file: string }> = {
  foundation: { title: 'Jowih Foundation · Draft Constitution', file: 'foundation.txt' },
  governance: { title: 'Governance & Appointment Register', file: 'governance.txt' },
  'asta-os': { title: 'ASTA OS · System Architecture', file: 'asta-os.txt' },
  credits: { title: 'Jowih Credits · Operational Framework', file: 'credits.txt' },
  investment: { title: 'Ecosystem Investment Architecture', file: 'investment-architecture.txt' },
  gag: { title: 'The GAG Initiative · Continental Framework', file: 'gag-initiative.txt' },
};

function parseSections(text: string, documentKey: string): OnlineDocumentSection[] {
  const sections: OnlineDocumentSection[] = [];
  let current: OnlineDocumentSection | null = null;
  text.split(/\r?\n/).forEach((line, index) => {
    const trimmedLine = line.trim();
    const heading = trimmedLine.match(/^ARTICLE\s+(.+)$/i)
      || (documentKey !== 'foundation' && trimmedLine.match(/^(?:SECTION|CHAPTER)\s+(.+)$/i))
      || (documentKey === 'foundation' && trimmedLine.match(/^19\.\d+(?:\.\d+)?\s+(.+)$/));
    if (heading) {
      current = { id: `${documentKey}-${index}`, heading: heading[1], lines: [] };
      sections.push(current);
    } else if (trimmedLine && current) {
      current.lines.push(trimmedLine);
    }
  });
  if (!sections.length) return [{ id: `${documentKey}-document`, heading: 'Document', lines: text.split(/\r?\n/).filter(Boolean) }];
  return sections;
}

export function generateStaticParams() {
  return Object.keys(sources).map((document) => ({ document }));
}

export default function OnlineDocumentPage({ params }: { params: { document: string } }) {
  const source = sources[params.document];
  if (!source) notFound();
  const text = fs.readFileSync(path.join(process.cwd(), 'public/documents', source.file), 'utf8');
  return <OnlineDocumentReader title={source.title} sourceLabel="Jowih public document archive" sections={parseSections(text, params.document)} />;
}
