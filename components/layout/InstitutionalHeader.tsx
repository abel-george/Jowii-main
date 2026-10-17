'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { SocialIcon } from '@/components/icons/SocialIcons';
import { siteData } from '@/lib/site-data';
import { LanguageSwitcher } from './LanguageSwitcher';

export function InstitutionalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Announcement Strip - Separate */}
      <div className="bg-black text-white py-3 text-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-mono font-bold uppercase tracking-wider">
            Discuss · Improve · Pre-Launch the Initiative Together
          </p>
        </div>
      </div>

      {/* Logo and Brand Area - Separate Section with Breathing Room */}
      <div className="bg-white border-b border-neutral-200 py-6">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            <Link href="/" className="flex items-center gap-3 sm:gap-4" aria-label="Jowih Foundation home">
              <Image
                src="/assets/foundation%20logo.png"
                alt="Jowih Foundation logo"
                width={76}
                height={76}
                priority
                className="h-12 w-12 sm:h-[76px] sm:w-[76px] object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--green-deep)' }}>
                  Jowih Foundation
                </span>
                <span className="text-sm font-semibold text-neutral-600 tracking-wider uppercase">
                  The Crossing
                </span>
              </div>
            </Link>

            {/* Second identity mark — sits between the name and the language switcher */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/assets/buffalo.png"
                alt="Jowih buffalo mark"
                width={112}
                height={112}
                className="h-12 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 object-contain"
              />
            </div>

            {/* Language Switcher and Actions - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link className="px-4 py-2 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors" href="/donate">
                Support
              </Link>
              <Link className="px-4 py-2 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors" href="/ticket">
                Book Ticket
              </Link>
              <Link className="px-4 py-2 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors" href="/waitlist">
                Join Waitlist
              </Link>
              <Link
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1eb257] transition-colors"
                href={siteData.config.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name="whatsapp" size={14} /> Join WhatsApp Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Separate Dark Green Bar */}
      <nav className="bg-[#1a4d2e] sticky top-0 z-40">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10">
          <div className="relative flex h-16 items-center justify-center">
            <div className="hidden md:flex w-full items-center justify-center gap-5 xl:gap-6 whitespace-nowrap">
              {siteData.nav.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={`text-sm font-bold tracking-wide text-white hover:text-[#2dd4bf] transition-colors py-5 ${pathname === item.href ? 'text-[#2dd4bf]' : ''}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3 ml-1 inline" />}
                  </Link>
                  
                  {item.children && hoveredItem === item.href && (
                    <div className="absolute top-full left-0 mt-0 min-w-[20rem] max-w-[min(30rem,calc(100vw-2rem))] bg-[#292929] border border-[#4a4a4a] shadow-xl z-50 text-white">
                      <div className="p-4">
                        <p className="text-sm text-white/75 mb-3 font-semibold leading-relaxed">{item.description}</p>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-white font-medium leading-snug whitespace-normal hover:bg-white/10 transition-colors"
                              onClick={() => setHoveredItem(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="ml-auto md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-white pb-[env(safe-area-inset-bottom)]">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-[#1a4d2e] px-6 py-4 text-white">
            <span className="text-xs font-mono font-bold uppercase tracking-widest">Navigation</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-white/30"
              aria-label="Close navigation menu"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav className="w-full px-6 sm:px-8 py-4">
            <div className="mb-4">
              <LanguageSwitcher />
            </div>
            {siteData.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-base font-bold text-black border-b border-neutral-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link href="/donate" onClick={() => setMobileMenuOpen(false)} className="block w-full py-2 text-center bg-black text-white text-xs font-mono font-bold uppercase">
                Support
              </Link>
              <Link href="/ticket" onClick={() => setMobileMenuOpen(false)} className="block w-full py-2 text-center bg-black text-white text-xs font-mono font-bold uppercase">
                Book Ticket
              </Link>
              <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)} className="block w-full py-2 text-center bg-black text-white text-xs font-mono font-bold uppercase">
                Join Waitlist
              </Link>
              <Link
                href={siteData.config.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2 text-center bg-[#25D366] text-black text-xs font-mono font-bold uppercase"
              >
                <SocialIcon name="whatsapp" size={13} /> Join WhatsApp Community
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
