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
      <div className="bg-black text-white pt-28 sm:pt-32 pb-16 sm:pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5000]" />
            <span>Back to Ecosystem</span>
          </Link>

          <span className="text-xs font-mono font-bold text-[#FF5000] tracking-[0.2em] uppercase block mb-3">
            01 / INSTITUTION
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.02] max-w-4xl">
            {about.title}
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mt-6 leading-relaxed">
            {about.intro}
          </p>
        </div>
      </div>

      <div className="bg-white text-black py-16 sm:py-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Founder Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-neutral-200 pb-16">
          <div className="lg:col-span-4">
            <div className="aspect-square bg-neutral-900 border-2 border-black overflow-hidden shadow-xl">
              <img
                src={about.founder.portrait}
                alt={about.founder.name}
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4 bg-neutral-100 border border-neutral-300 mt-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#FF5000] uppercase tracking-wider block">
                FOUNDER ERA
              </span>
              <p className="text-lg font-bold text-black">{about.founder.name}</p>
              <p className="text-xs text-neutral-600 font-mono">{about.founder.role}</p>
              <p className="text-xs text-neutral-500 font-mono">{about.founder.location}</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-4 bg-neutral-900 text-white font-mono text-sm border-l-4 border-[#FF5000]">
              &ldquo;{about.founder.lead}&rdquo;
            </div>

            <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
              {about.founder.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Foundation & 4 Strategic Pillars */}
        <section className="space-y-10 border-b border-neutral-200 pb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
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
                  <span className="text-xs font-mono font-bold text-[#FF5000]">
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
        <section className="space-y-8 border-b border-neutral-200 pb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
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
                  <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest">
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
        <section className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
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
                  <ShieldCheck className="w-4 h-4 text-[#FF5000]" />
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
                      <span className="text-[#FF5000] font-bold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
    </div>
  </div>
);
}
