'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '@/lib/site-data';

// AU.int-style "Latest" section: featured story + headline list + institutional
// sidebar (Departments, Flagship Projects). Live posts come from /api/news
// (published via /admin/news); seeded fallback items keep the section populated
// before the first admin post exists.

interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body?: string;
  image?: string;
}

interface FeedItem {
  key: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  href?: string;
  body?: string;
}

// Sidebar for the Latest section - Using Jowih's actual frameworks
const FRAMEWORKS: { name: string; href: string }[] = [
  { name: 'Foundation Charter & Mission', href: '/about' },
  { name: 'Governance Framework', href: '/governance' },
  { name: 'Great African Grid — 7 Corridors', href: '/gag' },
  { name: 'ASTA OS Technical Architecture', href: '/ecosystem' },
  { name: 'ADFA — Accelerated Development Framework Agreement', href: '/gag#adfa' },
  { name: 'Mission Lock — Constitutional Protection', href: '/documents' },
  { name: 'Jowih Credits — Settlement Layer', href: '/funding' },
  { name: 'Ecosystem Fund — Investment Vehicle', href: '/funding' },
  { name: 'Jowih Continental OS (Asta)', href: '/ecosystem' },
  { name: 'Institutional Source Papers', href: '/documents' },
];

const FLAGSHIP_PROJECTS = [
  'Great African Grid — Seven Corridors',
  'ASTA OS Continental Digital Layer',
  'Asta Super App — Dotkom Services',
  'Jowih Source Papers & Charter',
  'Institutional Pre-Launch · October 2026',
];

function formatDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function InstitutionalNews() {
  const [livePosts, setLivePosts] = useState<NewsPost[] | null>(null); // null = still loading
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/news', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('news fetch failed'))))
      .then((data) => {
        if (!cancelled) setLivePosts(Array.isArray(data.posts) ? data.posts : []);
      })
      .catch(() => {
        if (!cancelled) setLivePosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const items = useMemo<FeedItem[]>(() => {
    const live: FeedItem[] = (livePosts || []).map((post) => ({
      key: `live-${post.id}`,
      title: post.title,
      date: post.date,
      category: post.category || 'Announcement',
      excerpt: post.excerpt || '',
      image: post.image,
      body: post.body,
    }));
    const seed: FeedItem[] = siteData.news.map((item) => ({
      key: `seed-${item.id}`,
      title: item.title,
      date: item.date,
      category: item.category,
      excerpt: item.excerpt,
      href: item.href,
    }));
    return [...live, ...seed].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, [livePosts]);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );
  const filtered = filter === 'All' ? items : items.filter((item) => item.category === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section className="institutional-news" id="news" aria-label="Latest news and announcements">
      <div className="institutional-container">
        <div className="institutional-section-heading institutional-section-heading--split">
          <div>
            <p className="institutional-eyebrow">LATEST / NEWS &amp; EVENTS</p>
            <h2>Latest from the Foundation.</h2>
          </div>
          <div className="institutional-news__tabs" role="tablist" aria-label="Filter news by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={filter === category ? 'is-active' : undefined}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="institutional-news__empty">
            No announcements yet in this category — check back soon. Launch notes and statements will appear here.
          </p>
        ) : (
          <div className="institutional-news__grid">
            <article className="institutional-news__featured">
              {featured.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="institutional-news__featured-img" src={featured.image} alt="" />
              ) : (
                <div className="institutional-news__featured-placeholder" aria-hidden="true">
                  <span>JOWIH FOUNDATION</span>
                </div>
              )}
              <p className="institutional-news__meta">
                <span>{featured.category}</span> · <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </p>
              <h3>{featured.title}</h3>
              <p className="institutional-news__excerpt">{featured.excerpt}</p>
              {featured.body ? (
                <details className="institutional-news__details">
                  <summary>Read full statement</summary>
                  <p>{featured.body}</p>
                </details>
              ) : null}
              {featured.href ? (
                <Link className="institutional-news__more" href={featured.href}>
                  More <ArrowUpRight aria-hidden="true" size={13} />
                </Link>
              ) : null}
            </article>

            <div className="institutional-news__list">
              {rest.map((item) => (
                <article key={item.key} className="institutional-news__item">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="institutional-news__thumb" src={item.image} alt="" />
                  ) : (
                    <span className="institutional-news__thumb institutional-news__thumb--placeholder" aria-hidden="true" />
                  )}
                  <div>
                    <p className="institutional-news__meta">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </p>
                    <h3>
                      {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
                    </h3>
                    <p className="institutional-news__excerpt">{item.excerpt}</p>
                    {item.body ? (
                      <details className="institutional-news__details">
                        <summary>Read more</summary>
                        <p>{item.body}</p>
                      </details>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <aside className="institutional-news__sidebar" aria-label="Institutional directories">
              <div className="institutional-news__panel">
                <h3>Frameworks</h3>
                <ul>
                  {FRAMEWORKS.map((framework) => (
                    <li key={framework.name}>
                      <Link href={framework.href}>{framework.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="institutional-news__panel institutional-news__panel--maroon">
                <h3>Flagship Projects</h3>
                <ul>
                  {FLAGSHIP_PROJECTS.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

