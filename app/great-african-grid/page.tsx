import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Move,
  Factory,
  Zap,
  Cpu,
  CreditCard,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Globe2,
} from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Button } from '@/components/ui/Button';

export default function GreatAfricanGridPage() {
  const { gag } = siteData;

  const iconMap: Record<string, React.ReactNode> = {
    Transport: <Move className="w-6 h-6 text-[#FF5000]" />,
    Industrial: <Factory className="w-6 h-6 text-[#FF5000]" />,
    Energy: <Zap className="w-6 h-6 text-[#FF5000]" />,
    Digital: <Cpu className="w-6 h-6 text-[#FF5000]" />,
    Payments: <CreditCard className="w-6 h-6 text-[#FF5000]" />,
    Services: <HeartHandshake className="w-6 h-6 text-[#FF5000]" />,
    Space: <Rocket className="w-6 h-6 text-[#FF5000]" />,
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 sm:pt-32 pb-20">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-white/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF5000]" />
          <span>Back to Home</span>
        </Link>

        <span className="text-xs font-mono font-bold text-[#FF5000] tracking-[0.2em] uppercase block mb-3">
          02 / CONTINENTAL BACKBONE
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.98] max-w-5xl">
          {gag.title}
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-300 max-w-3xl mt-6 leading-relaxed font-sans">
          {gag.lead}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-400 border-t border-white/10 pt-8">
          {gag.what.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* 4 Constitutional Principles */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Guiding Principles
            </h2>
            <span className="text-xs font-mono text-[#FF5000]">
              FOUR CONSTITUTIONAL PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gag.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="p-6 bg-neutral-950 border border-white/15 hover:border-[#FF5000] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF5000]">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white mt-2 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 7 Corridors Detailed */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              The Seven Infrastructure Corridors
            </h2>
            <span className="text-xs font-mono text-[#FF5000]">
              CONTINENTAL ARTERIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gag.corridors.map((c) => (
              <div
                key={c.id}
                className="p-8 bg-neutral-950 border border-white/15 hover:border-[#FF5000] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest">
                      CORRIDOR {c.id}
                    </span>
                    <div className="p-2 bg-white/5 border border-white/10 group-hover:bg-[#FF5000]/20 transition-colors">
                      {iconMap[c.title] || <Zap className="w-6 h-6 text-[#FF5000]" />}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#FF5000] transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                    {c.body}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Pan-African Standard</span>
                  <span className="text-neutral-400 font-bold">Corridor {c.id}</span>
                </div>
              </div>
            ))}

            {/* Special Callout: ADFA */}
            <div className="p-8 bg-gradient-to-br from-[#FF5000]/20 via-neutral-950 to-neutral-950 border border-[#FF5000]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
                  SOVEREIGN ACCELERATION
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-3 mb-3">
                  ADFA Agreements
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Accelerated Development Framework Agreements allow member states to legally dock national transport, energy, and digital master plans into the GAG without compromising sovereign autonomy.
                </p>
              </div>

              <div className="pt-6">
                <Button href="/partner" variant="primary" size="sm" icon="arrow" className="w-full">
                  Partner with GAG
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* African Union Partnership Framework (PARF) */}
        <section className="p-8 sm:p-12 bg-neutral-950 border border-white/20 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-[0.2em] uppercase block">
              {gag.parf.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {gag.parf.title}
            </h2>
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
              {gag.parf.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <Button href="/partner" variant="light" icon="arrow">
              Institutional Partnership Request
            </Button>
            <Button href="/documents" variant="outlined" icon="arrow">
              Read GAG Master Summary
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
