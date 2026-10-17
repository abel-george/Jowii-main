'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { newsHref } from '@/lib/news';

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
  video?: string;
}

interface FeedItem {
  key: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  video?: string;
  href?: string;
  body?: string;
}

function formatDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// The seven Great African Grid corridors, listed in the section sidebar.
const CORRIDORS: { name: string; href: string }[] = [
  { name: '01 · Transport Corridor', href: '/gag#transport' },
  { name: '02 · Industrial Corridor', href: '/gag#industrial' },
  { name: '03 · Energy Corridor', href: '/gag#energy' },
  { name: '04 · Digital Corridor', href: '/gag#digital' },
  { name: '05 · Payments Corridor', href: '/gag#payments' },
  { name: '06 · Services Corridor', href: '/gag#services' },
  { name: '07 · Space Capability Corridor', href: '/gag#space' },
];

// Framed fallback artwork shown when a post has no uploaded image, so the
// Latest section never renders an empty green block. Uploaded images always
// take priority; these rotate through existing site imagery.
const FALLBACK_IMAGES = [
  '/documents/sample%20images/The%20Great%20African%20Grid.png',
  '/documents/sample%20images/HEROGAG.png.png',
  '/documents/sample%20images/Jowih%20Ecossytem.png',
  '/documents/sample%20images/asta-super-app-dotkom.jpg',
];

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
      video: post.video,
      body: post.body,
      href: newsHref(post),
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
              {featured.video ? (
                <video className="institutional-news__featured-img" src={featured.video} controls preload="metadata" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="institutional-news__featured-img" src={featured.image || FALLBACK_IMAGES[0]} alt="" />
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
              {rest.map((item, index) => (
                <article key={item.key} className="institutional-news__item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="institutional-news__thumb"
                    src={item.image || FALLBACK_IMAGES[(index + 1) % FALLBACK_IMAGES.length]}
                    alt=""
                  />
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

            <aside className="institutional-news__sidebar" aria-label="Great African Grid corridors">
              <div className="institutional-news__panel">
                <h3>Corridors</h3>
                <ul>
                  {CORRIDORS.map((corridor) => (
                    <li key={corridor.name}>
                      <Link href={corridor.href}>{corridor.name}</Link>
                    </li>
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
