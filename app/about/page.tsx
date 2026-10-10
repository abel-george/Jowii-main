import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, GraduationCap, ShieldCheck, Check } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  const { about } = siteData;

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="pt-44 sm:pt-48 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6 hover:text-white transition-colors"
            style={{ color: 'rgba(255, 254, 250, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--brass)' }}>
            01 / INSTITUTION
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            {about.title}
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            {about.intro}
          </p>
        </div>
      </div>

      <div className="bg-white text-black py-16 sm:py-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-20">
              {/* Founder Section */}
              <section className="border-b border-neutral-200 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <div className="aspect-square bg-neutral-900 border-2 border-black overflow-hidden shadow-xl">
                      <img
                        src={about.founder.portrait}
                        alt={about.founder.name}
                        className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="p-4 bg-neutral-100 border border-neutral-300 mt-4 space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider block" style={{ color: 'var(--green)' }}>
                        FOUNDER ERA
                      </span>
                      <p className="text-lg font-bold text-black">{about.founder.name}</p>
                      <p className="text-xs text-neutral-600 font-mono">{about.founder.role}</p>
                      <p className="text-xs text-neutral-500 font-mono">{about.founder.location}</p>
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-6">
                    <div className="p-4 bg-neutral-900 text-white font-mono text-sm border-l-4" style={{ borderColor: 'var(--green)' }}>
                      &ldquo;{about.founder.lead}&rdquo;
                    </div>

                    <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                      {about.founder.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Foundation & 4 Strategic Pillars */}
              <section id="mission" className="space-y-10 border-b border-neutral-200 pb-16">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--green)' }}>
                    THE REINVESTMENT ENGINE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mt-1 mb-4">
                    {about.foundation.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-700 leading-relaxed text-sm">
                    {about.foundation.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-6">
                    Four Strategic Transformation Pillars
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {about.foundation.pillars.map((pillar) => (
                      <div
                        key={pillar.id}
                        className="p-6 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors"
                      >
                        <span className="text-xs font-mono font-bold" style={{ color: 'var(--green)' }}>
                          PILLAR {pillar.id}
                        </span>
                        <h4 className="text-base font-bold text-black mt-2 mb-2">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 9-Layer Institutional Structure */}
              <section id="structure" className="space-y-8 border-b border-neutral-200 pb-16">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--green)' }}>
                    GOVERNANCE ARCHITECTURE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mt-1 mb-2">
                    {about.structure.title}
                  </h2>
                  <p className="text-sm text-neutral-600">
                    {about.structure.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {about.structure.layers.map((layer, idx) => (
                    <div
                      key={layer.title}
                      className="p-6 bg-neutral-50 border border-neutral-200 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold tracking-widest" style={{ color: 'var(--green)' }}>
                          LAYER 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-black mt-1 mb-2">
                          {layer.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {layer.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Leadership & Oversight Groups */}
              <section id="leadership" className="space-y-8 border-b border-neutral-200 pb-16">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--green)' }}>
                    OVERSIGHT
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mt-1">
                    {about.leadership.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {about.leadership.groups.map((group) => (
                    <div
                      key={group.name}
                      className="p-6 bg-neutral-50 border border-neutral-200 space-y-4"
                    >
                      <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
                        <ShieldCheck className="w-4 h-4" style={{ color: 'var(--green)' }} />
                        <h3 className="text-base font-bold uppercase tracking-tight text-black">
                          {group.name}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="text-xs text-neutral-700 flex items-start gap-2"
                          >
                            <span style={{ color: 'var(--green)' }} className="font-bold">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Foundation Constitutional Locks */}
              <section id="foundation-locks" className="space-y-8 border-b border-neutral-200 pb-16">
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
                    CONSTITUTIONAL SAFEGUARDS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mt-1">
                    Mission Lock & Asset Lock
                  </h2>
                  <p className="text-sm text-neutral-600 max-w-3xl mt-2">
                    The Foundation draft includes permanent constitutional locks designed to preserve mission integrity and ensure resources remain dedicated to African development.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-neutral-50 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-4">
                      <ShieldCheck className="w-6 h-6 text-[#FF5000]" />
                      <h3 className="text-xl font-bold text-black">Mission Lock</h3>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                      The Foundation's constitutional purpose is permanently locked to accelerate development through the Great African Grid framework. This mission cannot be altered or diverted to unrelated purposes.
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>Constitutional amendment requires supermajority approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>Mission statement cannot be changed without legal process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>Leadership appointments must uphold constitutional mission</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-neutral-50 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Check className="w-6 h-6 text-[#FF5000]" />
                      <h3 className="text-xl font-bold text-black">Asset Lock</h3>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                      A permanent asset lock ensures that distributable value from commercial operations cannot be extracted as private profit. Instead, it must be reinvested into the Foundation's development mission.
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>90% of economic interest in Holdings locked to Foundation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>Dividend distributions flow to Mission Fund for reinvestment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>Asset lock cannot be removed or reduced by future leadership</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-black text-white mt-8">
                  <p className="text-xs text-neutral-400 font-mono mb-2">CONSTITUTIONAL FRAMEWORK</p>
                  <p className="text-sm leading-relaxed">
                    These locks are proposed constitutional mechanisms in the Foundation draft. They would be established through legal registration and would be enforceable under applicable law. The specific legal implementation requires independent legal counsel and jurisdictional compliance.
                  </p>
                </div>
              </section>

              {/* Bottom CTA */}
              <div className="p-8 bg-black text-white border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">
                    Read the Full Foundation Constitution
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Available as a free download in the institutional briefing documents library.
                  </p>
                </div>
                <Button href="/documents" variant="light" icon="arrow">
                  Download Constitution
                </Button>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Navigation */}
              <div className="sticky top-24 p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                  On This Page
                </h3>
                <nav className="space-y-2">
                  <a href="#mission" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Mission & Reinvestment
                  </a>
                  <a href="#structure" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Governance Structure
                  </a>
                  <a href="#leadership" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Leadership & Oversight
                  </a>
                  <a href="#foundation-locks" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Constitutional Safeguards
                  </a>
                </nav>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                  Quick Links
                </h3>
                <nav className="space-y-2">
                  <Link href="/documents" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Source Documents
                  </Link>
                  <Link href="/gag" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Great African Grid
                  </Link>
                  <Link href="/ecosystem" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    ASTA OS
                  </Link>
                  <Link href="/governance" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Governance
                  </Link>
                </nav>
              </div>

              {/* Key Documents */}
              <div className="p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                  Key Documents
                </h3>
                <div className="space-y-3">
                  {siteData.resources.keyDocuments.map((doc) => (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      className="block text-sm text-neutral-700 hover:text-black transition-colors py-2 border-b border-neutral-200"
                    >
                      {doc.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-6 bg-black text-white">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Get Involved
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/partner"
                    className="block w-full py-2 px-4 text-center text-sm font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors"
                  >
                    Become Partner
                  </Link>
                  <Link
                    href="/waitlist"
                    className="block w-full py-2 px-4 text-center text-sm font-mono font-bold uppercase tracking-wider border border-white hover:bg-white hover:text-black transition-colors"
                  >
                    Join Waitlist
                  </Link>
                  <Link
                    href="/donate"
                    className="block w-full py-2 px-4 text-center text-sm font-mono font-bold uppercase tracking-wider bg-[#FF5000] text-white hover:bg-[#e64000] transition-colors"
                  >
                    Support Pre-Launch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
