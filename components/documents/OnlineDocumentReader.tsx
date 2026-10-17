'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Menu, Search, X } from 'lucide-react';

export interface OnlineDocumentSection { id: string; heading: string; lines: string[]; }

export function OnlineDocumentReader({ title, sourceLabel, sections }: { title: string; sourceLabel: string; sections: OnlineDocumentSection[] }) {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(sections[0]?.id || '');
  const [backHref, setBackHref] = useState('/documents');
  const [backLabel, setBackLabel] = useState('Back to document library');
  const [mobileContentsOpen, setMobileContentsOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const normalized = query.trim().toLowerCase();
  const matches = useMemo(() => normalized ? sections.filter((section) => `${section.heading} ${section.lines.join(' ')}`.toLowerCase().includes(normalized)) : sections, [normalized, sections]);
  const selected = matches.find((section) => section.id === selectedId) || matches[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('from') === 'search') {
      setBackHref(`/search?q=${encodeURIComponent(params.get('q') || '')}&entry=${encodeURIComponent(params.get('entry') || '')}`);
      setBackLabel('Back to search results');
    }
    const hash = window.location.hash.slice(1);
    const hashSection = sections.find((section) => section.id === hash);
    if (hashSection) setSelectedId(hashSection.id);
  }, [sections]);

  useEffect(() => {
    if (matches.length && !matches.some((section) => section.id === selectedId)) setSelectedId(matches[0].id);
  }, [matches, selectedId]);

  const select = (id: string) => {
    setSelectedId(id);
    setMobileContentsOpen(false);
    window.history.replaceState(null, '', `#${id}`);
    requestAnimationFrame(() => contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  return <main className="online-reader">
    <header className="online-reader__hero"><div className="document-page__inner"><Link href={backHref} className="document-page__back"><ArrowLeft size={16} /> {backLabel}</Link><p className="document-page__eyebrow">Jowih online archive</p><h1>{title}</h1><p>{sourceLabel} · Select a section to read it in context.</p></div></header>
    <div className="online-reader__layout document-page__inner">
      <button className="online-reader__mobile-toggle" type="button" onClick={() => setMobileContentsOpen((open) => !open)} aria-expanded={mobileContentsOpen}><span>{mobileContentsOpen ? <X size={17} /> : <Menu size={17} />}</span>{mobileContentsOpen ? 'Close contents' : 'Browse contents'}<strong>{matches.length}</strong></button>
      <aside className={`online-reader__sidebar${mobileContentsOpen ? ' is-open' : ''}`}><label className="online-reader__search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this document" aria-label="Search this document" /></label><p className="online-reader__count">{matches.length} of {sections.length} sections</p><nav className={mobileContentsOpen ? 'is-open' : ''} aria-label="Document contents">{matches.map((section, index) => <button className={selected?.id === section.id ? 'is-active' : ''} type="button" onClick={() => select(section.id)} key={section.id}><span>{String(index + 1).padStart(2, '0')}</span>{section.heading}</button>)}</nav></aside>
      <article ref={contentRef} className="online-reader__content">{selected ? <section className="online-reader__section"><p className="online-reader__section-label">{selected.heading}</p><h2>{selected.heading}</h2>{selected.lines.map((line, index) => <p key={`${index}-${line}`}>{line}</p>)}</section> : <p className="online-reader__empty">No matching sections found.</p>}</article>
      <aside className="online-reader__context"><p className="document-page__eyebrow">Article details</p><h2>{selected?.heading || 'No selection'}</h2><dl><div><dt>Document</dt><dd>{title}</dd></div><div><dt>Sections</dt><dd>{sections.length}</dd></div><div><dt>View</dt><dd>Source text</dd></div></dl>{selected ? <a href={`#${selected.id}`}><ArrowUpRight size={15} /> Copy section link</a> : null}</aside>
    </div>
  </main>;
}
