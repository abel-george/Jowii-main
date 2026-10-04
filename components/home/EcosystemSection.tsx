import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Check } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function EcosystemSection() {
  const { asta, paths } = siteData.ecosystem;

  return (
    <section className="bg-white text-black py-20 lg:py-28 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / DIGITAL ARCHITECTURE"
          title="ASTA OS & The Ecosystem"
          highlight="One Coordinated Stack"
          description="Using Jowih does not make you an owner. Integrating with Jowih does not make you an owner. Investing in eligible commercial assets does not give you control of the Foundation."
          align="left"
          theme="light"
        />

        {/* ASTA OS Deep Dive Card */}
        <div className="p-8 lg:p-10 bg-neutral-950 text-white border-2 border-black mb-12 shadow-xl relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-mono font-bold tracking-widest uppercase">
                <Cpu className="w-3.5 h-3.5 text-[#FF5000]" />
                <span>{asta.subtitle}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                {asta.title} — The Continental Interoperability Rail
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                {asta.body}
              </p>
            </div>

            <div className="lg:col-span-5 bg-black/60 p-6 border border-white/15 space-y-3">
              <span className="text-[11px] font-mono text-[#FF5000] font-bold tracking-widest uppercase block">
                CORE PROTOCOL MODULES
              </span>
              <ul className="space-y-2">
                {asta.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-2.5 text-xs text-neutral-200 font-mono">
                    <Check className="w-4 h-4 text-[#FF5000] shrink-0" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <Button
                  href="/ecosystem"
                  variant="outlined"
                  size="sm"
                  icon="arrow"
                  className="w-full text-center"
                >
                  View Full Operating Layers
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Ways In: Use / Integrate / Invest */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#FF5000]">
                ENGAGEMENT PATHWAYS
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
                Three Distinct Ways In
              </h3>
            </div>
            <Link
              href="/ecosystem"
              className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 hover:text-black flex items-center gap-1"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path) => (
              <div
                key={path.name}
                className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-black transition-[border-color] duration-150 [transition-timing-function:var(--ease-out)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-black text-white font-bold">
                      {path.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-bold uppercase">
                      {path.kicker}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-black mb-3 group-hover:text-[#FF5000] transition-colors duration-150">
                    {path.name}
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-sans">
                    {path.description}
                  </p>

                  <ul className="space-y-2 border-t border-neutral-200 pt-4 mb-8">
                    {path.points.map((point) => (
                      <li
                        key={point}
                        className="text-xs text-neutral-700 flex items-start gap-2"
                      >
                        <span className="text-[#FF5000] font-bold">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={path.href}
                  variant="dark"
                  size="sm"
                  icon="arrow"
                  className="w-full text-center"
                >
                  {path.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
