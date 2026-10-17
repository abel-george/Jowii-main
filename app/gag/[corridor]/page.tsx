import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SourceDocument } from '@/components/ui/SourceDocument';

const source = fs.readFileSync(path.join(process.cwd(), 'public/documents/gag-initiative.txt'), 'utf8');

const corridors = {
  transport: { title: 'Transport Corridor', start: 'CORRIDOR 1: TRANSPORT CORRIDOR', end: 'CORRIDOR 2: INDUSTRIAL & MANUFACTURING CORRIDOR', image: '/documents/sample%20images/transportcoridor.png', imageAlt: 'Illustrative transport corridor concept' },
  industrial: { title: 'Industrial & Manufacturing Corridor', start: 'CORRIDOR 2: INDUSTRIAL & MANUFACTURING CORRIDOR', end: 'CORRIDOR 3: ENERGY CORRIDOR', image: '/documents/sample%20images/corridor%202.png', imageAlt: 'Illustrative industrial corridor concept' },
  energy: { title: 'Energy Corridor', start: 'CORRIDOR 3: ENERGY CORRIDOR', end: 'CORRIDOR 4: DIGITAL CORRIDOR', image: '/documents/sample%20images/energy%20corridor.png', imageAlt: 'Illustrative energy corridor concept' },
  digital: { title: 'Digital Corridor', start: 'CORRIDOR 4: DIGITAL CORRIDOR', end: 'CORRIDOR 5: PAYMENT CORRIDOR', image: '/documents/sample%20images/digital%20corridor.png', imageAlt: 'Illustrative digital corridor concept' },
  payments: { title: 'Payment Corridor', start: 'CORRIDOR 5: PAYMENT CORRIDOR', end: 'CORRIDOR 6: SERVICE CORRIDOR', image: '/documents/sample%20images/The%20Great%20African%20Grid.png', imageAlt: 'Illustrative Great African Grid concept' },
  services: { title: 'Service Corridor', start: 'CORRIDOR 6: SERVICE CORRIDOR', end: 'CORRIDOR 7: SPACE CORRIDOR', image: '/documents/sample%20images/jowih%20healthcare.png', imageAlt: 'Illustrative Jowih services concept' },
  space: { title: 'Space Corridor', start: 'CORRIDOR 7: SPACE CORRIDOR', end: 'NEW DAWN CITY', image: '/documents/sample%20images/HEROGAG.png.png', imageAlt: 'Illustrative Great African Grid concept' },
} as const;

export function generateStaticParams() {
  return Object.keys(corridors).map((corridor) => ({ corridor }));
}

function getSection(start: string, end: string) {
  const startIndex = source.indexOf(start, 20000);
  const endIndex = source.indexOf(end, startIndex + start.length);
  if (startIndex === -1) return [];
  return source.slice(startIndex, endIndex === -1 ? source.length : endIndex)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export default async function CorridorPage({ params }: { params: { corridor: string } }) {
  const corridor = corridors[params.corridor as keyof typeof corridors];
  if (!corridor) notFound();

  const lines = getSection(corridor.start, corridor.end);

  return (
    <main className="document-page corridor-page min-h-screen">
      <header className="document-page__hero">
        <div className="document-page__inner">
          <Link href="/gag" className="document-page__back"><ArrowLeft size={16} /> Back to GAG overview</Link>
          <p className="document-page__eyebrow">Great African Grid · Source paper</p>
          <h1>{corridor.title}</h1>
          <p>Extracted from the Great African Grid Initiative document and presented as a dedicated corridor brief.</p>
        </div>
      </header>
      <section className="document-page__body">
        <div className="document-page__inner corridor-page__layout">
          <div className="corridor-page__source"><SourceDocument lines={lines} /></div>
          <aside className="corridor-page__aside">
            <Image src={corridor.image} alt={corridor.imageAlt} width={900} height={600} sizes="(max-width: 900px) 100vw, 34vw" />
            <p>Illustrative concept image. The source document describes proposed frameworks, not completed projects.</p>
            <Link href="/gag" className="corridor-page__return">View all seven corridors <ArrowUpRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
