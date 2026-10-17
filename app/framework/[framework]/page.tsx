import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SourceDocument } from '@/components/ui/SourceDocument';
import { siteData } from '@/lib/site-data';
import { frameworkRanges, frameworkAliases, getGagSection } from '@/lib/gag-sections';

export function generateStaticParams() { return [...Object.keys(frameworkRanges), ...Object.keys(frameworkAliases), ...siteData.gag.frameworks.map((framework) => framework.id)].map((framework) => ({ framework })); }

export default function FrameworkSourcePage({ params }: { params: { framework: string } }) {
  const range = frameworkRanges[params.framework] || frameworkRanges[frameworkAliases[params.framework]];
  const summary = siteData.gag.frameworks.find((framework) => framework.id === params.framework);
  if (!range && !summary) notFound();
  if (!range && summary) return <main className="document-page framework-source-page min-h-screen"><header className="document-page__hero"><div className="document-page__inner"><Link href="/framework" className="document-page__back"><ArrowLeft size={16} /> Back to frameworks</Link><p className="document-page__eyebrow">Jowih framework</p><h1>{summary.title}</h1><p>{summary.detail}</p></div></header><section className="document-page__body"><div className="document-page__inner framework-source-page__content"><Link href="/search" className="framework-source-link">SEARCH THE ARCHIVE <span aria-hidden="true">↗</span></Link></div></section></main>;
  const lines = getGagSection(range.start, range.end);
  return <main className="document-page framework-source-page min-h-screen"><header className="document-page__hero"><div className="document-page__inner"><Link href="/framework" className="document-page__back"><ArrowLeft size={16} /> Back to frameworks</Link><p className="document-page__eyebrow">Great African Grid initiative · Source section</p><h1>{range.title}</h1></div></header><section className="document-page__body"><div className="document-page__inner framework-source-page__content"><SourceDocument lines={lines} /></div></section></main>;
}
