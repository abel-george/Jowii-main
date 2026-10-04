'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export function InstitutionalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
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
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={pathname === item.href ? 'is-active' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="institutional-header__actions">
            <Link className="institutional-header__donate" href="/donate">
              Donate <ArrowUpRight aria-hidden="true" size={15} />
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
            Pre-launch donations <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <Link className="institutional-mobile-menu__donate" href="/ticket" onClick={() => setMobileMenuOpen(false)} style={{ background: 'var(--ink)', color: 'var(--white)' }}>
            Book Ticket <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <Link className="institutional-mobile-menu__donate" href="/waitlist" onClick={() => setMobileMenuOpen(false)} style={{ background: 'var(--brass)', color: 'var(--ink)' }}>
            Join Waitlist <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <p>Donations only. No investment return, equity or ownership is offered in the pre-launch.</p>
        </div>
      )}
    </>
  );
}