import { notFound } from 'next/navigation';
import { OnlineDocumentReader, type OnlineDocumentSection } from '@/components/documents/OnlineDocumentReader';
import { getArchiveDocument, getArchiveDocuments, readArchiveDocument } from '@/lib/archive';

const aliases: Record<string, string> = {
  foundation: 'jowih-foundation-constitution',
  governance: 'jowih-governance-appointment-register',
  'asta-os': 'asta-os-architecture',
  credits: 'jowih-credits',
  investment: 'jowih-ecosystem-investment-architecture',
  gag: 'the-gag-initiative',
};

function parseSections(text: string, documentKey: string): OnlineDocumentSection[] {
  const sections: OnlineDocumentSection[] = [];
  const intro: string[] = [];
  let current: OnlineDocumentSection | null = null;
  text.split(/\r?\n/).forEach((line, index) => {
    const trimmedLine = line.trim();
    const headingText = trimmedLine.replace(/^#\s+/, '');
    const heading = headingText.match(/^ARTICLE\s+(.+)$/i)
      || headingText.match(/^(?:SECTION|CHAPTER)\s+(.+)$/i)
      || headingText.match(/^\d+(?:\.\d+)+\s+\S.+$/)
      || (headingText.length <= 110 && /^[A-Z0-9][A-Z0-9 &()'./–—-]{8,}$/.test(headingText));
    if (heading) {
      current = { id: `${documentKey}-${index}`, heading: Array.isArray(heading) ? heading[1] || headingText : headingText, lines: [] };
      sections.push(current);
    } else if (trimmedLine && current) {
      current.lines.push(trimmedLine);
    } else if (trimmedLine) {
      intro.push(trimmedLine);
    }
  });
  if (intro.length && sections.length) sections.unshift({ id: `${documentKey}-intro`, heading: 'Introduction', lines: intro });
  if (!sections.length) return [{ id: `${documentKey}-document`, heading: 'Document', lines: text.split(/\r?\n/).filter(Boolean) }];
  return sections;
}

export function generateStaticParams() {
  const slugs = [...getArchiveDocuments().map((document) => document.slug), ...Object.keys(aliases)];
  return [...new Set(slugs)].map((document) => ({ document }));
}

export default function OnlineDocumentPage({ params }: { params: { document: string } }) {
  const document = getArchiveDocument(aliases[params.document] || params.document);
  if (!document) notFound();
  const text = readArchiveDocument(document);
  return <OnlineDocumentReader title={document.title} sourceLabel={`${document.sourceType} source: ${document.source}`} sections={parseSections(text, document.slug)} />;
}
