import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Button } from '@/components/ui/Button';

export default function EcosystemPage() {
  const { ecosystem } = siteData;

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-black text-white pt-28 sm:pt-32 pb-16 sm:pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5000]" />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs font-mono font-bold text-[#FF5000] tracking-[0.2em] uppercase block mb-3">
            03 / PROPOSED OPERATING STACK
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.02] max-w-4xl">
            {ecosystem.title}
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mt-6 leading-relaxed">
            {ecosystem.lead} These services and interfaces describe a proposed architecture; they are not represented as currently available.
          </p>
        </div>
      </div>

      <div className="bg-white text-black py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ASTA OS Section */}
        <section className="p-8 sm:p-12 bg-neutral-950 text-white border-2 border-black space-y-6 shadow-2xl relative">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
              {ecosystem.asta.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {ecosystem.asta.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {ecosystem.asta.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-white/15">
            {ecosystem.asta.pillars.map((pillar, idx) => (
              <div key={pillar} className="p-4 bg-black border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-[#FF5000] font-bold">
                  MOD 0{idx + 1}
                </span>
                <p className="text-xs font-bold text-white uppercase">{pillar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The 5 Coordinated Layers */}
        <section className="space-y-6 border-b border-neutral-200 pb-16">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
              Ten Proposed Architectural Layers
            </h2>
            <span className="text-xs font-mono text-neutral-500">
              LAYER PROTOCOL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.layers.map((layer) => (
              <div
                key={layer.id}
                className="p-6 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest">
                    LAYER {layer.id}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mt-2 mb-2">
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

        {/* Three Ways In: Use, Integrate, Invest */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
              ENGAGEMENT RULES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mt-1 mb-2">
              Three Ways In
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl">
              Clean separation of powers. Utility, technical integration, and capital allocation have strictly guarded interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystem.paths.map((path) => (
              <div
                key={path.name}
                className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:border-black transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-black text-white font-bold">
                      {path.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-bold uppercase">
                      {path.kicker}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-3 group-hover:text-[#FF5000] transition-colors">
                    {path.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {path.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-neutral-200 pt-4 mb-8">
                    {path.points.map((point) => (
                      <li key={point} className="text-xs text-neutral-700 flex items-start gap-2">
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={path.href} variant="dark" size="md" icon="arrow" className="w-full text-center">
                  {path.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);
}
