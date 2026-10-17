import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SourceDocument } from '@/components/ui/SourceDocument';

const source = fs.readFileSync(path.join(process.cwd(), 'public/documents/gag-initiative.txt'), 'utf8');
const start = source.indexOf('JOWIH AFRICAN ANIMATION & GAMING FRAMEWORK');
const end = source.indexOf('NEW DAWN CITY:', start);
const lines = source.slice(start, end).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

export default function CreativeHubPage() {
  return (
    <main className="document-page creative-page min-h-screen">
      <header className="document-page__hero"><div className="document-page__inner"><Link href="/gag" className="document-page__back"><ArrowLeft size={16} /> Back to GAG overview</Link><p className="document-page__eyebrow">GAG · Creative economy</p><h1>Creative, Animation &amp; Gaming Hub</h1><p>Africa-owned storytelling, animation, gaming, interactive media, training, production, and distribution.</p></div></header>
      <section className="document-page__body"><div className="document-page__inner corridor-page__layout"><div className="corridor-page__source"><SourceDocument lines={lines} /></div><aside className="corridor-page__aside"><Image src="/documents/sample%20images/gaminghub.png" alt="Illustrative creative and gaming hub concept" width={900} height={600} sizes="(max-width: 900px) 100vw, 34vw" /><p>Illustrative concept image. The source framework describes a proposed creative economy engine.</p><Link href="/framework#fw-16" className="corridor-page__return">View framework summary <ArrowUpRight size={15} /></Link></aside></div></section>
    </main>
  );
}
