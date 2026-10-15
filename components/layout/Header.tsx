'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,padding,box-shadow] duration-200 [transition-timing-function:var(--ease-out)] ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Left */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Jowih Ecosystem Home"
          >
            <div className="relative">
              <img
                src="/assets/foundation%20logo.png"
                alt="Jowih Foundation emblem"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-150 [transition-timing-function:var(--ease-out)] group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#FF5000] rounded-full" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#FF5000] transition-colors duration-150">
                Jowih
              </span>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                Ecosystem
              </span>
            </div>
          </Link>

          {/* Center Location Indicator (Desktop) - Clean solid dot, no flickering */}
          <div className="hidden 2xl:flex items-center gap-2.5 px-3 py-1.5 rounded-none border border-white/15 bg-white/5 text-xs font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5000]" />
            <span className="text-white font-semibold">Kisii</span>
            <span className="text-neutral-500">·</span>
            <span>Kenya</span>
            <span className="text-neutral-500">·</span>
            <span className="text-[#FF5000] font-semibold">OCT 2026</span>
          </div>

          {/* Right Navigation & CTAs */}
          <div className="hidden md:flex items-center gap-4 xl:gap-6 min-w-0 flex-1 justify-end">
            <nav className="flex items-center gap-3 xl:gap-4 2xl:gap-5 text-xs font-bold uppercase tracking-wider font-mono whitespace-nowrap">
              {siteData.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-1 relative transition-colors duration-150 ${
                      isActive
                        ? 'text-white font-extrabold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5000]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5 pl-2 border-l border-white/10 shrink-0">
              <Button
                href="/waitlist"
                variant="primary"
                size="sm"
                icon="arrow"
                className="hidden xl:inline-flex"
              >
                Join Waitlist
              </Button>
              <Button
                href="/ticket"
                variant="light"
                size="sm"
                icon="ticket"
              >
                Get Ticket
              </Button>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <Button
              href="/waitlist"
              variant="primary"
              size="sm"
              className="text-[10px] px-3 py-2 min-h-0"
            >
              Waitlist
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 border border-white/20 hover:border-white text-white bg-black/60 rounded-none transition-colors duration-150"
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
