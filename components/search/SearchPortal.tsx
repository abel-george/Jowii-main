'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Search as SearchIcon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export interface SearchEntry {
  title: string;
  type: string;
  href: string;
  text: string;
  source?: string;
}

export function SearchPortal({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const normalized = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!normalized) return [];
    return entries.filter((entry) => `${entry.title} ${entry.type} ${entry.text}`.toLowerCase().includes(normalized)).slice(0, 40);
  }, [entries, normalized]);
  const selected = matches.find((entry) => `${entry.type}-${entry.href}-${entry.title}` === selectedKey) || matches[0];
  const suggestions = useMemo(() => {
    if (!selected) return [];
    const words = `${selected.title} ${selected.text}`.toLowerCase().match(/[a-z]{5,}/g) || [];
    const terms = new Set(words);
    return entries.filter((entry) => entry !== selected && [...terms].some((term) => `${entry.title} ${entry.text}`.toLowerCase().includes(term))).slice(0, 4);
  }, [entries, selected]);

  useEffect(() => {
    if (matches.length && !matches.some((entry) => `${entry.type}-${entry.href}-${entry.title}` === selectedKey)) {
      setSelectedKey(`${matches[0].type}-${matches[0].href}-${matches[0].title}`);
    }
    if (!matches.length) setSelectedKey('');
  }, [matches, selectedKey]);

  const choose = (entry: SearchEntry) => setSelectedKey(`${entry.type}-${entry.href}-${entry.title}`);

  return <main className="search-portal">
    <header className="search-portal__hero">
      <div className="search-portal__brand"><span className="search-portal__mark">J</span><div><strong>Jowih knowledge</strong><small>Public source archive</small></div></div>
      <p className="document-page__eyebrow">Jowih search</p>
      <h1>Search the Jowih record.</h1>
      <p>Find a page, framework, corridor, or source section. Select a result to read its focused entry.</p>
      <form className="search-portal__form" onSubmit={(event) => event.preventDefault()}>
        <SearchIcon size={20} aria-hidden="true" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Jowih documents and pages" aria-label="Search Jowih documents and pages" />
        <button type="submit">Search</button>
      </form>
    </header>

    {!normalized ? <section className="search-portal__landing">
      <div className="search-portal__landing-heading"><div><p className="document-page__eyebrow">Explore the archive</p><h2>Start with a subject</h2></div><span>{entries.length} indexed pages and source sections</span></div>
      <div className="search-portal__browse">{entries.filter((entry) => entry.type !== 'Source section').slice(0, 12).map((entry) => <Link className="search-browse-card" href={entry.href} key={`${entry.type}-${entry.href}`}><span>{entry.type}</span><strong>{entry.title}</strong><ArrowUpRight size={15} /></Link>)}</div>
    </section> : <section className="search-portal__workspace">
      <aside className="search-portal__results-list"><div className="search-portal__results-heading"><h2>{matches.length} results</h2><span>Choose an entry</span></div>{matches.length ? matches.map((entry) => { const key = `${entry.type}-${entry.href}-${entry.title}`; return <button type="button" className={`search-result${selected && key === selectedKey ? ' is-active' : ''}`} onClick={() => choose(entry)} key={key}><span>{entry.type}</span><strong>{entry.title}</strong><small>{entry.text}</small></button>; }) : <p className="search-portal__empty">No matching pages or source sections found.</p>}</aside>
      <article className="search-portal__article">{selected ? <><p className="document-page__eyebrow">{selected.type}</p><h2>{selected.title}</h2><p className="search-portal__lead">{selected.text}</p><div className="search-portal__article-rule" /><p>This entry is part of the Jowih public knowledge archive. Use the source link to continue reading the complete page in context.</p><Link className="search-portal__read" href={selected.href}>Read this entry <ArrowUpRight size={16} /></Link></> : <p className="search-portal__empty">Select a result to read it here.</p>}</article>
      <aside className="search-portal__context"><p className="document-page__eyebrow">About this result</p>{selected ? <><h3>{selected.title}</h3><dl><div><dt>Category</dt><dd>{selected.type}</dd></div><div><dt>Archive</dt><dd>{selected.source || 'Jowih public pages'}</dd></div></dl><Link href={selected.href}><ArrowLeft size={15} /> Open source page</Link><div className="search-portal__suggestions"><p className="document-page__eyebrow">Related entries</p>{suggestions.length ? suggestions.map((entry) => <button type="button" onClick={() => choose(entry)} key={`${entry.type}-${entry.href}-${entry.title}`}><span>{entry.type}</span><strong>{entry.title}</strong></button>) : <p>No close matches.</p>}</div></> : <p>Search results will appear here with their source and category.</p>}</aside>
    </section>}
  </main>;
}
