import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SourceDocument } from '@/components/ui/SourceDocument';
import { corridorRanges, getGagSection } from '@/lib/gag-sections';

const corridorImages: Record<string, { src: string; alt: string }> = {
  transport: { src: '/documents/sample%20images/transportcoridor.png', alt: 'Transport corridor concept' },
  industrial: { src: '/documents/sample%20images/corridor%202.png', alt: 'Industrial and manufacturing corridor concept' },
  energy: { src: '/documents/sample%20images/energy%20corridor.png', alt: 'Energy corridor concept' },
  digital: { src: '/documents/sample%20images/digital%20corridor.png', alt: 'Digital corridor concept' },
  payments: { src: '/documents/sample%20images/The%20Great%20African%20Grid.png', alt: 'Great African Grid payment concept' },
  services: { src: '/documents/sample%20images/jowih%20healthcare.png', alt: 'Jowih services corridor concept' },
  space: { src: '/documents/sample%20images/HEROGAG.png.png', alt: 'Great African Grid space corridor concept' },
};

export function generateStaticParams() {
  return Object.keys(corridorRanges).map((corridor) => ({ corridor }));
}

export default async function CorridorPage({ params }: { params: { corridor: string } }) {
  const corridor = corridorRanges[params.corridor];
  if (!corridor) notFound();

  const lines = getGagSection(corridor.start, corridor.end);
  const image = corridorImages[params.corridor];

  return (
    <main className="document-page corridor-page min-h-screen">
      <header className="document-page__hero">
        <div className="document-page__inner">
          <Link href="/gag" className="document-page__back"><ArrowLeft size={16} /> Back to GAG overview</Link>
          <p className="document-page__eyebrow">Great African Grid · Source paper</p>
          <h1>{corridor.title}</h1>
        </div>
      </header>
      <section className="document-page__body">
        <div className="document-page__inner corridor-page__layout">
          <div className="corridor-page__source"><SourceDocument lines={lines} /></div>
          <aside className="corridor-page__aside">
            {image ? <Image src={image.src} alt={image.alt} width={900} height={600} sizes="(max-width: 900px) 100vw, 34vw" /> : null}
            <Link href="/gag" className="corridor-page__return">View all seven corridors <ArrowUpRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
