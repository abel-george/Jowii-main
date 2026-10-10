'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, ChevronDown, Share2, MessageCircle, Play, Camera } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { LanguageSwitcher } from './LanguageSwitcher';

export function InstitutionalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Top Announcement Strip */}
      <div className="bg-[#FF5000] text-white py-2 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono font-bold uppercase tracking-wider">
            Discuss · Improve · Pre-Launch the Initiative Together
          </p>
        </div>
      </div>

      <header className="institutional-header">
        <div className="institutional-header__inner">
          <Link href="/" className="institutional-brand" aria-label="Jowih Foundation home">
            <Image
              className="institutional-brand__flag"
              src="/documents/sample%20images/jowih%20flag.png"
              alt="Jowih Foundation flag"
              width={90}
              height={60}
              priority
            />
            <span className="institutional-brand__text">
              <strong>Jowih</strong>
              <small>Foundation · Continental Framework</small>
            </span>
          </Link>

          <nav className="institutional-nav" aria-label="Primary navigation">
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
                  className={pathname === item.href ? 'is-active' : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 ml-1 inline" />}
                </Link>
                
                {item.children && hoveredItem === item.href && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg z-50">
                    <div className="p-4">
                      <p className="text-xs text-gray-600 mb-3">{item.description}</p>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm hover:bg-gray-100 transition-colors"
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
          </nav>

          <div className="institutional-header__actions">
            <LanguageSwitcher />
            
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center gap-2">
              {siteData.socialMedia.map((social) => {
                const Icon = social.icon === 'facebook' ? Share2 : 
                           social.icon === 'linkedin' ? Share2 :
                           social.icon === 'youtube' ? Play :
                           social.icon === 'instagram' ? Camera : ArrowUpRight;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <Link className="institutional-header__donate" href="/donate">
              Support <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            <Link className="institutional-header__donate" href="/ticket" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              Book Ticket <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            <Link className="institutional-header__donate" href="/waitlist" style={{ background: 'var(--brass)', color: 'var(--ink)' }}>
              Join Waitlist <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            <button
              className="institutional-header__menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="institutional-mobile-menu">
          <nav aria-label="Mobile navigation">
            {siteData.nav.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, '0')}</span>{item.label}<ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </nav>
          <Link className="institutional-mobile-menu__donate" href="/donate" onClick={() => setMobileMenuOpen(false)}>
            Support Pre-Launch <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <Link className="institutional-mobile-menu__donate" href="/ticket" onClick={() => setMobileMenuOpen(false)} style={{ background: 'var(--ink)', color: 'var(--white)' }}>
            Book Ticket <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <Link className="institutional-mobile-menu__donate" href="/waitlist" onClick={() => setMobileMenuOpen(false)} style={{ background: 'var(--brass)', color: 'var(--ink)' }}>
            Join Waitlist <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <p>Support is for pre-launch setup only. No investment return, equity or ownership is offered.</p>
        </div>
      )}
    </>
  );
}