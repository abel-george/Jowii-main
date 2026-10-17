import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SourceDocument } from '@/components/ui/SourceDocument';
import { corridorRanges, getGagSection } from '@/lib/gag-sections';

export function generateStaticParams() {
  return Object.keys(corridorRanges).map((corridor) => ({ corridor }));
}

export default async function CorridorPage({ params }: { params: { corridor: string } }) {
  const corridor = corridorRanges[params.corridor];
  if (!corridor) notFound();

  const lines = getGagSection(corridor.start, corridor.end);

  return (
    <main className="document-page corridor-page min-h-screen">
      <header className="document-page__hero">
        <div className="document-page__inner">
          <Link href="/gag" className="document-page__back"><ArrowLeft size={16} /> Back to GAG overview</Link>
          <p className="document-page__eyebrow">Great African Grid · Source paper</p>
          <h1>{corridor.title}</h1>
          <p>Verbatim section from the Great African Grid Initiative document, including its original tables and figures.</p>
        </div>
      </header>
      <section className="document-page__body">
        <div className="document-page__inner corridor-page__layout">
          <div className="corridor-page__source"><SourceDocument lines={lines} /></div>
          <aside className="corridor-page__aside">
            <p>Extracted directly from the source document. The source describes proposed frameworks, not completed projects.</p>
            <Link href="/gag" className="corridor-page__return">View all seven corridors <ArrowUpRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
