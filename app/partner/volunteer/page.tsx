import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Construction, Clock } from 'lucide-react';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <div className="pt-28 sm:pt-32 pb-16 border-b" style={{ borderColor: 'var(--line-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/partner"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(21, 33, 30, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Partnership Options</span>
          </Link>

          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: 'var(--brass)' }}>
            UNDER MAINTENANCE
          </span>
          <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
            Volunteers
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-8" style={{ background: 'var(--sage)' }}>
          <Construction className="w-10 h-10" style={{ color: 'var(--brass)' }} />
        </div>

        <h2 className="text-2xl uppercase tracking-tight mb-4">Page Under Development</h2>
        <p className="text-lg mb-8" style={{ color: 'var(--ink-soft)' }}>
          The volunteer portal is currently under development. In the meantime, please use the partner community form to express your interest in contributing your time and skills.
        </p>

        <Link
          href="/partner/community"
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors"
          style={{ background: 'var(--ink)', color: 'var(--white)' }}
        >
          Contact Partnership Team
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </div>
    </div>
  );
}
