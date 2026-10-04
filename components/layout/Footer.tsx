import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <img
                src="/assets/logo.png"
                alt="Jowih emblem"
                className="w-9 h-9 object-contain bg-white p-0.5"
              />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Jowih
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#FF5000] uppercase">
                  Ecosystem
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              The launch room for the Jowih Foundation, the Great African Grid, ASTA OS, and a continental operating framework built to partner, integrate, empower, complement, accelerate, and enable.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF5000]" />
                <span>Kisii University · Kisii, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF5000]" />
                <a
                  href={`mailto:${siteData.config.fallbackEmail}`}
                  className="hover:text-white underline underline-offset-4 decoration-white/20 transition-colors"
                >
                  {siteData.config.fallbackEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF5000] uppercase">
              Frameworks
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  The Foundation
                </Link>
              </li>
              <li>
                <Link href="/great-african-grid" className="hover:text-white transition-colors">
                  Great African Grid (GAG)
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-white transition-colors">
                  ASTA OS Architecture
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  2026 Partners
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-white transition-colors">
                  Briefing Papers & Constitution
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagement */}
          <div className="space-y-3">
            <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF5000] uppercase">
              Engagement
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/waitlist" className="hover:text-white text-white font-semibold flex items-center gap-1">
                  <span>Join Waitlist</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5000]" />
                </Link>
              </li>
              <li>
                <Link href="/ticket" className="hover:text-white transition-colors">
                  Launch Tickets
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/investor" className="hover:text-white transition-colors">
                  Investor Briefing
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donate to Mission Fund
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Details */}
          <div className="space-y-3">
            <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF5000] uppercase">
              Pre-Launch
            </p>
            <div className="bg-neutral-950 p-4 border border-white/10 space-y-2 text-xs font-mono">
              <p className="text-white font-bold">29 October 2026</p>
              <p className="text-neutral-400">8:00 PM – 1:00 AM EAT</p>
              <p className="text-neutral-500">Auditorium & Virtual Live Stream</p>
              <div className="pt-2">
                <span className="inline-block px-2 py-0.5 bg-[#FF5000]/20 text-[#FF5000] text-[10px] font-bold">
                  #JOWIHKENYA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} Jowih Foundation. All rights reserved. Sovereign Asset Lock.</p>
          <div className="flex items-center gap-6">
            <span>Kisii, Kenya</span>
            <span>·</span>
            <Link href="/documents" className="hover:text-neutral-300 transition-colors">
              Institutional Documents
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
