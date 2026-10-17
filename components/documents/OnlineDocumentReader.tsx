'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export interface OnlineDocumentSection {
  id: string;
  heading: string;
  lines: string[];
}

export function OnlineDocumentReader({ title, sourceLabel, sections }: { title: string; sourceLabel: string; sections: OnlineDocumentSection[] }) {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const visibleSections = useMemo(() => normalizedQuery
    ? sections.filter((section) => `${section.heading} ${section.lines.join(' ')}`.toLowerCase().includes(normalizedQuery))
    : sections, [normalizedQuery, sections]);

  return (
    <main className="online-reader">
      <header className="online-reader__hero">
        <div className="document-page__inner">
          <Link href="/documents" className="document-page__back"><ArrowLeft size={16} /> Back to document library</Link>
          <p className="document-page__eyebrow">Online source reader</p>
          <h1>{title}</h1>
          <p>{sourceLabel} · Searchable text view with section navigation.</p>
        </div>
      </header>
      <div className="online-reader__layout document-page__inner">
        <aside className="online-reader__sidebar">
          <label className="online-reader__search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this document" aria-label="Search this document" /></label>
          <p className="online-reader__count">{visibleSections.length} of {sections.length} sections</p>
          <nav aria-label="Document sections">{visibleSections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}</nav>
        </aside>
        <article className="online-reader__content">
          {visibleSections.length === 0 ? <p className="online-reader__empty">No matching sections found.</p> : visibleSections.map((section) => <section id={section.id} className="online-reader__section" key={section.id}><h2>{section.heading}</h2>{section.lines.map((line, index) => <p key={`${index}-${line}`}>{line}</p>)}</section>)}
        </article>
      </div>
    </main>
  );
}
