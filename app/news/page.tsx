import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="pt-36 sm:pt-40 pb-6 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6 text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5000]" />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2 text-[#FF5000]">
              NEWS & UPDATES
            </span>
            <h1 className="text-3xl sm:text-4xl uppercase tracking-tight text-black">
              Latest from Jowih Foundation
            </h1>
            <p className="text-lg mt-4 text-neutral-700">
              Stay informed about our progress, milestones, and continental development initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {siteData.news.map((item) => (
            <article
              key={item.id}
              className="flex flex-col bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-mono mb-3 text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                  <span>·</span>
                  <Tag className="w-4 h-4" />
                  <span>{item.category}</span>
                </div>

                <h2 className="text-base font-bold uppercase tracking-tight mb-3 text-black">
                  {item.title}
                </h2>

                <p className="text-sm leading-relaxed mb-4 text-neutral-600 flex-1">
                  {item.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5000] hover:text-black transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 text-center bg-neutral-100 border-2 border-neutral-300">
          <h2 className="text-2xl uppercase tracking-tight mb-4 text-black">Stay Updated</h2>
          <p className="text-sm mb-6 text-neutral-700">
            Join our waitlist to receive the latest news, updates, and launch announcements.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
