'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MapPin, Calendar, Mail } from 'lucide-react';
import { siteData } from '@/lib/site-data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const allRoutes = [
    { label: 'Home', href: '/' },
    { label: 'About Jowih', href: '/about' },
    { label: 'Great African Grid', href: '/great-african-grid' },
    { label: 'Ecosystem & ASTA OS', href: '/ecosystem' },
    { label: '2026 Partners', href: '/partners' },
    { label: 'Documents & Briefings', href: '/documents' },
    { label: 'Frameworks', href: '/framework' },
    { label: 'Horizon 2045', href: '/horizon-2045' },
    { label: 'Jowih Credits', href: '/credits' },
    { label: 'Join the Waitlist', href: '/waitlist', highlight: true },
    { label: 'Launch Tickets', href: '/ticket' },
    { label: 'Become a Partner', href: '/partner' },
    { label: 'Investor Briefing', href: '/investor' },
    { label: 'Support / Donate', href: '/donate' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#050505] text-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 group"
            >
              <img
                src="/assets/foundation%20logo.png"
                alt="Jowih Foundation emblem"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  Jowih
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  Ecosystem
                </span>
              </div>
            </Link>

            <button
              onClick={onClose}
              className="p-2 border border-white/20 hover:border-white text-white rounded-none hover:bg-white/10 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-3">
            <p className="text-[11px] font-mono text-[#FF5000] tracking-widest uppercase mb-4">
              Navigation & Frameworks
            </p>
            <nav className="flex flex-col space-y-2">
              {allRoutes.map((route, idx) => (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.2 }}
                >
                  <Link
                    href={route.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-2 text-xl sm:text-2xl font-bold tracking-tight hover:text-[#FF5000] transition-colors border-b border-white/5 ${
                      route.highlight ? 'text-[#FF5000]' : 'text-neutral-200'
                    }`}
                  >
                    <span>{route.label}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Bottom Event Meta */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF5000]" />
              <span>Kisii University · Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FF5000]" />
              <span>29 October 2026 · 8:00 PM EAT</span>
            </div>
            <a
              href={`mailto:${siteData.config.fallbackEmail}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{siteData.config.fallbackEmail}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
