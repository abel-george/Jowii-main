import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InstitutionalExpandable } from '@/components/ui/InstitutionalExpandable';
import { SourceDocument } from '@/components/ui/SourceDocument';

const source = fs.readFileSync(path.join(process.cwd(), 'public/documents/foundation.txt'), 'utf8');

function extractSection(start: string, end: string) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  return source.slice(startIndex + start.length, endIndex === -1 ? source.length : endIndex)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^ARTICLE\s+/i.test(line));
}

export default function ComradesPage() {
  const community = extractSection('ARTICLE XXIII - COMMUNITY PARTICIPATION & WORKFORCE', 'ARTICLE XXIV - DEVELOPMENT ACCELERATION FRAMEWORK');
  const funding = extractSection('ARTICLE LIII - PHASED FUNDING & DIRECT DISBURSEMENT MODEL', 'ARTICLE LIV - AFRICA DEVELOPMENT NETWORK (ADN)');
  const network = extractSection('ARTICLE LIV - AFRICA DEVELOPMENT NETWORK (ADN)', 'ARTICLE LVI - MISSION-ALIGNED BOND INSTRUMENTS');

  return (
    <main className="document-page comrades-page min-h-screen">
      <header className="document-page__hero">
        <div className="document-page__inner">
          <Link href="/" className="document-page__back"><ArrowLeft size={16} /> Back to home</Link>
          <p className="document-page__eyebrow">Community and workforce</p>
          <h1>Comrades Hub</h1>
          <p>Participation, skills, funding, and continental coordination from the Jowih Foundation source document.</p>
        </div>
      </header>
      <section className="document-page__body">
        <div className="document-page__inner">
          <InstitutionalExpandable items={[
            { id: 'network', number: '01', title: 'Africa Development Network', summary: 'The complete source section, presented without constitutional numbering.', body: <SourceDocument lines={network} /> },
            { id: 'funding', number: '02', title: 'Phased funding and distribution model', summary: 'The complete source section, presented without constitutional numbering.', body: <SourceDocument lines={funding} /> },
            { id: 'community', number: '03', title: 'Community participation and workforce', summary: 'The complete source section, presented without constitutional numbering.', body: <SourceDocument lines={community} /> },
          ]} />
        </div>
      </section>
    </main>
  );
}
