import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SocialIcon } from '@/components/icons/SocialIcons';
import { siteData } from '@/lib/site-data';

export function InstitutionalFooter() {
  return (
    <footer className="institutional-footer">
      <div className="institutional-footer__main">
        <div className="institutional-footer__identity">
          <Link className="institutional-brand institutional-brand--footer" href="/">
            <Image
              className="institutional-brand__flag"
              src="/documents/sample%20images/jowih%20flag.png"
              alt="Jowih Foundation flag"
              width={90}
              height={60}
            />
            <span className="institutional-brand__text"><strong>Jowih</strong><small>Foundation</small></span>
          </Link>
          <p>A proposed mission-led framework for connecting African infrastructure, services, capital and technology.</p>
          <a href={`mailto:${siteData.config.fallbackEmail}`}><Mail aria-hidden="true" size={15} />{siteData.config.fallbackEmail}</a>
          <div className="institutional-footer__social" aria-label="Social media">
            {siteData.socialMedia.map((social) => (
              <a key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}>
                <SocialIcon name={social.icon} size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="institutional-footer__column">
          <h2>Framework</h2>
          <Link href="/about">The Foundation</Link>
          <Link href="/gag">Great African Grid</Link>
          <Link href="/ecosystem">ASTA OS</Link>
          <Link href="/documents">Institutional archive</Link>
        </div>

        <div className="institutional-footer__column">
          <h2>Engage</h2>
          <Link href="/donate">Pre-launch donations <ArrowUpRight aria-hidden="true" size={13} /></Link>
          <Link href="/waitlist">Receive updates</Link>
          <Link href={siteData.config.whatsappCommunity} target="_blank" rel="noopener noreferrer">Join WhatsApp community <ArrowUpRight aria-hidden="true" size={13} /></Link>
          <Link href="/partner">Launch-event sponsorship</Link>
        </div>

        <div className="institutional-footer__notice">
          <h2>Public status</h2>
          <p>The constitutional, trust, fund, bond and credit structures described on this site are proposals unless explicitly identified as established.</p>
          <p>Pre-launch contributions are donations, not investments. No return or ownership is offered.</p>
        </div>
      </div>
      <div className="institutional-footer__base">
        <span>© {new Date().getFullYear()} Jowih</span>
        <span>Institutional proposals · Source papers available online</span>
        <Link href="/documents">Review the documents <ArrowUpRight aria-hidden="true" size={13} /></Link>
      </div>
    </footer>
  );
}