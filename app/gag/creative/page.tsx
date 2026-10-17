import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SourceDocument } from '@/components/ui/SourceDocument';
import { frameworkRanges, getGagSection } from '@/lib/gag-sections';

const range = frameworkRanges['fw-16'];
const lines = getGagSection(range.start, range.end);

export default function CreativeHubPage() {
  return (
    <main className="document-page creative-page min-h-screen">
      <header className="document-page__hero"><div className="document-page__inner"><Link href="/gag" className="document-page__back"><ArrowLeft size={16} /> Back to GAG overview</Link><p className="document-page__eyebrow">GAG · Creative economy</p><h1>Creative, Animation &amp; Gaming Hub</h1><p>Verbatim framework section from the GAG Initiative document: Africa-owned storytelling, animation, gaming, interactive media, training, production, and distribution.</p></div></header>
      <section className="document-page__body"><div className="document-page__inner corridor-page__layout"><div className="corridor-page__source"><SourceDocument lines={lines} /></div><aside className="corridor-page__aside"><p>Extracted directly from the source document. The framework describes a proposed creative economy engine.</p><Link href="/framework#fw-16" className="corridor-page__return">View framework summary <ArrowUpRight size={15} /></Link></aside></div></section>
    </main>
  );
}

