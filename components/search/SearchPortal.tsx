'use client';

import Link from 'next/link';
import { Search as SearchIcon, ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';

export interface SearchEntry { title: string; type: string; href: string; text: string; }

export function SearchPortal({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState('');
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return entries.filter((entry) => `${entry.title} ${entry.type} ${entry.text}`.toLowerCase().includes(normalized)).slice(0, 30);
  }, [entries, query]);

  return <main className="search-portal"><section className="search-portal__hero"><div className="search-portal__brand"><span className="search-portal__mark">J</span><div><strong>Jowih knowledge</strong><small>Open source archive</small></div></div><p className="document-page__eyebrow">Search the Jowih ecosystem</p><h1>Find the source.</h1><p>Explore the Foundation, Great African Grid, ASTA OS, governance, frameworks, corridors, and public updates.</p><form className="search-portal__form" onSubmit={(event) => event.preventDefault()}><SearchIcon size={20} aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Jowih documents and pages" aria-label="Search Jowih documents and pages" /><button type="submit">Search</button></form></section><section className="search-portal__results"><div className="search-portal__results-heading"><h2>{query ? `${matches.length} results` : 'Browse the archive'}</h2><span>{entries.length} indexed pages and source sections</span></div>{query ? (matches.length ? matches.map((entry) => <Link className="search-result" href={entry.href} key={`${entry.type}-${entry.href}-${entry.title}`}><span>{entry.type}</span><h3>{entry.title}</h3><p>{entry.text}</p><ArrowUpRight size={16} /></Link>) : <p className="search-portal__empty">No matching pages or source sections found.</p>) : <div className="search-portal__browse">{entries.filter((entry) => entry.type !== 'Source section').slice(0, 12).map((entry) => <Link className="search-browse-card" href={entry.href} key={`${entry.type}-${entry.href}`}><span>{entry.type}</span><strong>{entry.title}</strong><ArrowUpRight size={15} /></Link>)}</div>}</section></main>;
}
