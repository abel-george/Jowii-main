import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export default function NewsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-6 border-b" style={{ borderColor: 'var(--line-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(21, 33, 30, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: 'var(--brass)' }}>
              NEWS & UPDATES
            </span>
            <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
              Latest from Jowih Foundation
            </h1>
            <p className="text-lg mt-4" style={{ color: 'var(--ink-soft)' }}>
              Stay informed about our progress, milestones, and continental development initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.news.map((item) => (
            <article
              key={item.id}
              className="flex flex-col p-6 transition-all hover:shadow-lg"
              style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}
            >
              <div className="flex items-center gap-2 text-xs font-mono mb-3" style={{ color: 'var(--muted)' }}>
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
                <span>·</span>
                <Tag className="w-4 h-4" />
                <span>{item.category}</span>
              </div>

              <h2 className="text-lg font-bold uppercase tracking-tight mb-3">
                {item.title}
              </h2>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-soft)' }}>
                {item.excerpt}
              </p>

              <div className="mt-auto">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider"
                  style={{ color: 'var(--brass)' }}
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 text-center" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
          <h2 className="text-2xl uppercase tracking-tight mb-4">Stay Updated</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--ink-soft)' }}>
            Join our waitlist to receive the latest news, updates, and launch announcements.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors"
            style={{ background: 'var(--ink)', color: 'var(--white)' }}
          >
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
