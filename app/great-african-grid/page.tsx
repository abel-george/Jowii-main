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
} from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Button } from '@/components/ui/Button';
import { GagFrameworkIndex } from '@/components/pages/GagFrameworkIndex';

export default function GreatAfricanGridPage() {
  const { gag } = siteData;

  const iconMap: Record<string, React.ReactNode> = {
    Transport: <Move className="w-6 h-6" style={{ color: 'var(--green)' }} />,
    Industrial: <Factory className="w-6 h-6" style={{ color: 'var(--green)' }} />,
    Energy: <Zap className="w-6 h-6" style={{ color: 'var(--green)' }} />,
    Digital: <Cpu className="w-6 h-6" style={{ color: 'var(--green)' }} />,
    Payments: <CreditCard className="w-6 h-6" style={{ color: 'var(--green)' }} />,
    Services: <HeartHandshake className="w-6 h-6" style={{ color: 'var(--green)' }} />,
    Space: <Rocket className="w-6 h-6" style={{ color: 'var(--green)' }} />,
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b" style={{ borderColor: 'var(--line)' }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft className="w-4 h-4" style={{ color: 'var(--green)' }} />
          <span>Back to Home</span>
        </Link>

        <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--green)' }}>
          02 / CONTINENTAL BACKBONE
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.98] max-w-5xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
          {gag.title}
        </h1>
        <p className="text-lg sm:text-2xl max-w-3xl mt-6 leading-relaxed font-sans" style={{ color: 'var(--ink-soft)' }}>
          {gag.lead}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm border-t pt-8" style={{ color: 'var(--muted)', borderColor: 'var(--line)' }}>
          {gag.what.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <GagFrameworkIndex />

        {/* 4 Constitutional Principles */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--line)' }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Guiding Principles
            </h2>
            <span className="text-xs font-mono" style={{ color: 'var(--green)' }}>
              FOUR CONSTITUTIONAL PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gag.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="p-6 border transition-colors flex flex-col justify-between"
                style={{ background: 'var(--white)', borderColor: 'var(--line)' }}
              >
                <div>
                  <span className="text-xs font-mono font-bold" style={{ color: 'var(--green)' }}>
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight mt-2 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 7 Corridors Detailed */}
        <section id="gag-corridors" className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--line)' }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              The Seven Infrastructure Corridors
            </h2>
            <span className="text-xs font-mono" style={{ color: 'var(--green)' }}>
              CONTINENTAL ARTERIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gag.corridors.map((c) => (
              <Link
                key={c.id}
                href={`/gag/${c.slug}`}
                className="p-8 border transition-all flex flex-col justify-between group"
                style={{ background: 'var(--white)', borderColor: 'var(--line)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest" style={{ color: 'var(--green)' }}>
                      CORRIDOR {c.id}
                    </span>
                    <div className="p-2 border transition-colors" style={{ background: 'var(--sage)', borderColor: 'var(--line)' }}>
                      {iconMap[c.title] || <Zap className="w-6 h-6" style={{ color: 'var(--green)' }} />}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[var(--green)] transition-colors" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    {c.title}
                  </h3>

                  <p className="text-sm leading-relaxed font-sans" style={{ color: 'var(--muted)' }}>
                    {c.body}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
                  <span>Pan-African Standard</span>
                  <span className="font-bold" style={{ color: 'var(--ink-soft)' }}>Corridor {c.id}</span>
                </div>
              </Link>
            ))}

            {/* Special Callout: ADFA */}
            <div id="adfa" className="p-8 border flex flex-col justify-between" style={{ background: 'var(--sage)', borderColor: 'var(--green)' }}>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--green)' }}>
                  SOVEREIGN ACCELERATION
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight mt-3 mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                  ADFA Agreements
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
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
        <section className="p-8 sm:p-12 border relative" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block" style={{ color: 'var(--green)' }}>
              {gag.parf.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {gag.parf.title}
            </h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed pt-2" style={{ color: 'var(--ink-soft)' }}>
              {gag.parf.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t flex flex-wrap gap-4" style={{ borderColor: 'var(--line)' }}>
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
