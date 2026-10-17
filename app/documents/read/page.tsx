import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { getArchiveDocuments } from '@/lib/archive';

export default function OnlineDocumentsIndex() {
  const documents = getArchiveDocuments();
  return <main className="document-page online-index min-h-screen"><header className="document-page__hero"><div className="document-page__inner"><Link href="/documents" className="document-page__back">← Back to document library</Link><p className="document-page__eyebrow">Online archive</p><h1>Read online</h1><p>Choose a source document and browse its article structure with search and section navigation.</p></div></header><section className="document-page__body"><div className="document-page__inner online-index__grid">{documents.map((document) => <Link className="online-index__card" href={`/documents/read/${document.slug}`} key={document.slug}><BookOpen size={20} /><strong>{document.title}</strong><span>Open source reader <ArrowUpRight size={14} /></span></Link>)}</div></section></main>;
}
