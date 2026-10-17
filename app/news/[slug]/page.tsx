'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { newsSlug, NewsStory } from '@/lib/news';

export default function NewsStoryPage({ params }: { params: { slug: string } }) {
  const [story, setStory] = useState<NewsStory | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const seeded = siteData.news.find((item) => newsSlug(item.title) === params.slug);
    fetch('/api/news', { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Unable to load news'))))
      .then((data) => {
        const live = Array.isArray(data.posts)
          ? data.posts.find((item: NewsStory) => newsSlug(item.title) === params.slug)
          : undefined;
        setStory(live || seeded || null);
      })
      .catch(() => setStory(seeded || null))
      .finally(() => setLoaded(true));
  }, [params.slug]);

  if (!loaded) return <div className="min-h-screen bg-white px-6 pb-20 pt-40" />;
  if (!story) {
    return (
      <div className="min-h-screen bg-white px-6 pb-20 pt-40 text-black">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#1a4d2e]">News archive</p>
          <h1 className="text-4xl font-bold">Story not found</h1>
          <Link href="/news" className="mt-6 inline-flex underline">Return to news</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white px-6 pb-20 pt-36 text-black sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/news" className="mb-10 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-600">
          <ArrowLeft className="h-4 w-4 text-[#1a4d2e]" /> Back to news
        </Link>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500">
          <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {story.date}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1"><Tag className="h-4 w-4" /> {story.category}</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">{story.title}</h1>
        {story.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={story.image} alt="" className="mt-10 max-h-[32rem] w-full object-cover" />
        ) : null}
        <p className="mt-10 text-xl leading-relaxed text-neutral-700">{story.excerpt}</p>
        {story.body ? <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-neutral-800">{story.body}</div> : null}
      </div>
    </article>
  );
}
