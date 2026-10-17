'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, Search as SearchIcon, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SourceDocument } from '@/components/ui/SourceDocument';

export interface SearchEntry {
  title: string;
  type: string;
  href: string;
  text: string;
  body?: string;
  source?: string;
}

function tokenize(value: string) { return value.toLowerCase().match(/[a-z0-9]{2,}/g) || []; }

function editDistance(left: string, right: string) {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 1; i <= left.length; i += 1) {
    let diagonal = row[0]; row[0] = i;
    for (let j = 1; j <= right.length; j += 1) {
      const above = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (left[i - 1] === right[j - 1] ? 0 : 1));
      diagonal = above;
    }
  }
  return row[right.length];
}

export function SearchPortal({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [showTypeahead, setShowTypeahead] = useState(false);
  const [mobileResultsOpen, setMobileResultsOpen] = useState(false);
  const articleRef = useRef<HTMLElement>(null);
  const normalized = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!normalized) return [];
    const terms = tokenize(normalized);
    const ranked = entries.map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${title} ${entry.type} ${entry.text} ${entry.body || ''}`.toLowerCase();
      const score = (title === normalized ? 2000 : 0) + (title.includes(normalized) ? 900 : 0) + (haystack.includes(normalized) ? 250 : 0) + terms.reduce((total, term) => total + (title.includes(term) ? 120 : haystack.includes(term) ? 20 : 0), 0);
      return { entry, score, matchesAll: terms.every((term) => haystack.includes(term)) };
    }).filter((result) => result.score > 0 && result.matchesAll).sort((left, right) => right.score - left.score);
    const titleResults = ranked.filter((result) => terms.every((term) => result.entry.title.toLowerCase().includes(term)));
    return (titleResults.length ? titleResults : ranked).map((result) => result.entry).slice(0, 40);
  }, [entries, normalized]);
  const selected = matches.find((entry) => `${entry.type}-${entry.href}-${entry.title}` === selectedKey) || matches[0];
  const suggestions = useMemo(() => {
    if (!selected) return [];
    const words = `${selected.title} ${selected.text}`.toLowerCase().match(/[a-z]{5,}/g) || [];
    const terms = new Set(words);
    return entries.filter((entry) => entry !== selected && [...terms].some((term) => `${entry.title} ${entry.text}`.toLowerCase().includes(term))).slice(0, 4);
  }, [entries, selected]);
  const closeMatches = useMemo(() => {
    if (!normalized || matches.length) return [];
    const terms = tokenize(normalized);
    return entries.map((entry) => {
      const words = tokenize(entry.title);
      const score = terms.reduce((total, term) => total + Math.max(...words.map((word) => word.startsWith(term) || term.startsWith(word) ? 2 : editDistance(term, word) <= Math.max(1, Math.floor(word.length * .35)) ? 1 : 0), 0), 0);
      return { entry, score };
    }).filter((result) => result.score > 0).sort((left, right) => right.score - left.score).slice(0, 3).map((result) => result.entry);
  }, [entries, matches.length, normalized]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') || '');
    setSelectedKey(params.get('entry') || '');
  }, []);

  useEffect(() => {
    if (matches.length && !matches.some((entry) => `${entry.type}-${entry.href}-${entry.title}` === selectedKey)) {
      setSelectedKey(`${matches[0].type}-${matches[0].href}-${matches[0].title}`);
    }
    if (!matches.length) setSelectedKey('');
  }, [matches, selectedKey]);

  const choose = (entry: SearchEntry) => {
    const key = `${entry.type}-${entry.href}-${entry.title}`;
    setSelectedKey(key);
    setShowTypeahead(false);
    setMobileResultsOpen(false);
    requestAnimationFrame(() => articleRef.current?.scrollTo({ top: 0, behavior: 'smooth' }));
    window.history.replaceState(null, '', `/search?q=${encodeURIComponent(query)}&entry=${encodeURIComponent(key)}`);
  };
  const searchFor = (entry: SearchEntry) => { setQuery(entry.title); setSelectedKey(''); window.history.replaceState(null, '', `/search?q=${encodeURIComponent(entry.title)}`); };

  return <main className="search-portal">
    <header className="search-portal__hero">
      <div className="search-portal__brand"><span className="search-portal__mark">J</span><div><strong>Jowih knowledge</strong><small>Public source archive</small></div></div>
      <p className="document-page__eyebrow">Jowih search</p>
      <h1>Search the Jowih record.</h1>
      <p>Find a page, framework, corridor, or source section. Select a result to read its focused entry.</p>
      <form className="search-portal__form" onSubmit={(event) => event.preventDefault()}>
        <SearchIcon size={20} aria-hidden="true" />
        <input value={query} onFocus={() => setShowTypeahead(true)} onChange={(event) => { setQuery(event.target.value); setShowTypeahead(true); }} placeholder="Search Jowih documents and pages" aria-label="Search Jowih documents and pages" />
        <button type="submit" onClick={() => setShowTypeahead(false)}>Search</button>
      </form>
      {showTypeahead && normalized && matches.length ? <div className="search-portal__typeahead" role="listbox" aria-label="Matching archive entries">{matches.slice(0, 8).map((entry) => <button type="button" onClick={() => choose(entry)} key={`${entry.type}-${entry.href}-${entry.title}`}><span>{entry.type}</span><strong>{entry.title}</strong></button>)}</div> : null}
    </header>

    {!normalized ? <section className="search-portal__landing">
      <div className="search-portal__landing-heading"><div><p className="document-page__eyebrow">Explore the archive</p><h2>Start with a subject</h2></div><span>{entries.length} indexed pages and source sections</span></div>
      <div className="search-portal__browse">{entries.filter((entry) => entry.type !== 'Source section').slice(0, 12).map((entry) => <Link className="search-browse-card" href={entry.href} key={`${entry.type}-${entry.href}`}><span>{entry.type}</span><strong>{entry.title}</strong><ArrowUpRight size={15} /></Link>)}</div>
    </section> : <section className="search-portal__workspace">
      <div className="search-portal__mobile-toolbar"><button type="button" onClick={() => setMobileResultsOpen((open) => !open)} aria-expanded={mobileResultsOpen}><span>{mobileResultsOpen ? <X size={17} /> : <Menu size={17} />}</span>{mobileResultsOpen ? 'Close results' : 'Browse results'}<strong>{matches.length}</strong></button></div>
      <aside className={`search-portal__results-list${mobileResultsOpen ? ' is-open' : ''}`}><div className="search-portal__results-heading"><h2>{matches.length} results</h2><span>Choose an entry</span></div>{matches.length ? matches.map((entry) => { const key = `${entry.type}-${entry.href}-${entry.title}`; return <button type="button" className={`search-result${selected && key === selectedKey ? ' is-active' : ''}`} onClick={() => choose(entry)} key={key}><span>{entry.type}</span><strong>{entry.title}</strong><small>{entry.text}</small></button>; }) : <div className="search-portal__empty"><p>No exact result found.</p>{closeMatches.length ? <><strong>Did you mean:</strong>{closeMatches.map((entry) => <button type="button" className="search-portal__did-you-mean" onClick={() => searchFor(entry)} key={`${entry.type}-${entry.href}-${entry.title}`}>{entry.title}</button>)}</> : <p>Try a broader keyword or a document name.</p>}</div>}</aside>
      <article ref={articleRef} className="search-portal__article">{selected ? <><p className="document-page__eyebrow">{selected.type}</p><h2>{selected.title}</h2><p className="search-portal__lead">{selected.text}</p>{selected.body ? <SourceDocument lines={selected.body.split(/\r?\n/).filter(Boolean)} /> : null}</> : <p className="search-portal__empty">Select a result to read it here.</p>}</article>
      <aside className="search-portal__context"><p className="document-page__eyebrow">About this result</p>{selected ? <><h3>{selected.title}</h3><dl><div><dt>Category</dt><dd>{selected.type}</dd></div><div><dt>Archive</dt><dd>{selected.source || 'Jowih public pages'}</dd></div></dl><div className="search-portal__suggestions"><p className="document-page__eyebrow">Related entries</p>{suggestions.length ? suggestions.map((entry) => <button type="button" onClick={() => choose(entry)} key={`${entry.type}-${entry.href}-${entry.title}`}><span>{entry.type}</span><strong>{entry.title}</strong></button>) : <p>No close matches.</p>}</div></> : <p>Search results will appear here with their source and category.</p>}</aside>
    </section>}
  </main>;
}
