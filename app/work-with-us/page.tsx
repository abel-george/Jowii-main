import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Code, Building, Heart, ArrowRight } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export default function WorkWithUsPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return Users;
      case 'code': return Code;
      case 'building': return Building;
      case 'heart': return Heart;
      default: return ArrowRight;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-6 border-b" style={{ borderColor: 'var(--line-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(21, 33, 30, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: 'var(--brass)' }}>
              GET INVOLVED
            </span>
            <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
              Work With Us
            </h1>
            <p className="text-lg mt-4" style={{ color: 'var(--ink-soft)' }}>
              The Jowih Foundation offers exciting opportunities to get involved in determining continental policies and implementing development programmes that impact the lives of African citizens everywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.workWithUs.map((opportunity) => {
            const Icon = getIcon(opportunity.icon);
            return (
              <article
                key={opportunity.href}
                className="flex flex-col p-8 transition-all hover:shadow-lg"
                style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3" style={{ background: 'var(--sage)' }}>
                    <Icon className="w-8 h-8" style={{ color: 'var(--brass)' }} />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-tight">
                    {opportunity.title}
                  </h2>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
                  {opportunity.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={opportunity.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: 'var(--brass)' }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Resources Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Key Documents</h3>
            <ul className="space-y-2">
              {siteData.resources.keyDocuments.map((doc) => (
                <li key={doc.href}>
                  <Link
                    href={doc.href}
                    className="text-sm hover:underline"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Publications</h3>
            <ul className="space-y-2">
              {siteData.resources.publications.map((pub) => (
                <li key={pub.href}>
                  <Link
                    href={pub.href}
                    className="text-sm hover:underline"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    {pub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 text-center" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
          <h2 className="text-2xl uppercase tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--ink-soft)' }}>
            Join our partnership community or subscribe to our newsletter to stay updated on opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors"
              style={{ background: 'var(--ink)', color: 'var(--white)' }}
            >
              Become Partner <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider border transition-colors"
              style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
            >
              Join Waitlist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
