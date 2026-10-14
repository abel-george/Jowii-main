'use client';

import { useState } from 'react';
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

  return (
    <>
      {/* Top Announcement Strip - Separate */}
      <div className="bg-black text-white py-3 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono font-bold uppercase tracking-wider">
            Discuss · Improve · Pre-Launch the Initiative Together
          </p>
        </div>
      </div>

      {/* Logo and Brand Area - Separate Section with Breathing Room */}
      <div className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-4" aria-label="Jowih Foundation home">
              <Image
                src="/assets/foundation%20logo.png"
                alt="Jowih Foundation logo"
                width={76}
                height={76}
                priority
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, color: '#6e0b23' }}>
                  Jowih Foundation
                </span>
                <span className="text-sm font-semibold text-neutral-600 tracking-wider uppercase">
                  The Crossing
                </span>
              </div>
            </Link>

            {/* Second identity mark — sits between the name and the language switcher */}
            <div className="flex-1 hidden md:flex items-center justify-center">
              <Image
                src="/assets/buffalo.png"
                alt="Jowih buffalo mark"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="hidden md:flex items-center gap-8">
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
                    className={`text-sm font-bold uppercase tracking-wider text-white hover:text-[#2dd4bf] transition-colors py-5 ${pathname === item.href ? 'text-[#2dd4bf]' : ''}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3 ml-1 inline" />}
                  </Link>
                  
                  {item.children && hoveredItem === item.href && (
                    <div className="absolute top-full left-0 mt-0 w-80 bg-white border-2 border-neutral-300 shadow-xl z-50">
                      <div className="p-4">
                        <p className="text-sm text-black mb-3 font-semibold">{item.description}</p>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-black font-medium hover:bg-neutral-100 transition-colors"
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
        <div className="md:hidden bg-white border-b border-neutral-200 fixed top-[184px] left-0 right-0 z-30 overflow-y-auto max-h-[calc(100vh-184px)]">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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