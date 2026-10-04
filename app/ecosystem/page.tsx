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
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(255, 254, 250, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--brass)' }}>
            03 / PROPOSED OPERATING STACK
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            {ecosystem.title}
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            {ecosystem.lead} These services and interfaces describe a proposed architecture; they are not represented as currently available.
          </p>
        </div>
      </div>

      <div className="py-16 pb-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ASTA OS Section */}
        <section id="asta-os" className="p-8 sm:p-12 space-y-6 shadow-2xl relative" style={{ background: 'var(--ink)', color: 'var(--white)', border: '2px solid var(--line-light)' }}>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--brass)' }}>
              {ecosystem.asta.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {ecosystem.asta.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
              {ecosystem.asta.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4" style={{ borderTop: '1px solid rgba(255, 254, 250, 0.15)' }}>
            {ecosystem.asta.coreLayers.map((layer) => (
              <div key={layer.id} className="p-4 space-y-2" style={{ background: 'var(--ink-soft)', border: '1px solid rgba(255, 254, 250, 0.1)' }}>
                <span className="text-[10px] font-mono font-bold" style={{ color: 'var(--brass)' }}>
                  LAYER {layer.id}
                </span>
                <p className="text-xs font-bold uppercase">{layer.title}</p>
                <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.6)' }}>{layer.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ecosystem Participants */}
        <section className="space-y-6 pb-16" style={{ borderBottom: '1px solid var(--line-light)' }}>
          <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--line-light)' }}>
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Ecosystem Participants
            </h2>
            <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
              ASTA ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystem.asta.ecosystemParticipants.map((participant, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col justify-between transition-colors"
                style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}
              >
                <div>
                  <h3 className="text-lg uppercase tracking-tight mt-2 mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    {participant.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {participant.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Three Ways In: Use, Integrate, Invest */}
        <section id="participation" className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--brass)' }}>
              ENGAGEMENT RULES
            </span>
            <h2 className="text-3xl sm:text-4xl uppercase tracking-tight mt-1 mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Three Ways In
            </h2>
            <p className="text-sm max-w-2xl" style={{ color: 'var(--muted)' }}>
              Clean separation of powers. Utility, technical integration, and capital allocation have strictly guarded interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystem.paths.map((path) => (
              <div
                key={path.name}
                className="p-8 flex flex-col justify-between transition-all group"
                style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 font-bold" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
                      {path.badge}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase" style={{ color: 'var(--muted)' }}>
                      {path.kicker}
                    </span>
                  </div>

                  <h3 className="text-3xl uppercase tracking-tight mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    {path.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                    {path.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 mb-8" style={{ borderTop: '1px solid var(--line-light)' }}>
                    {path.points.map((point) => (
                      <li key={point} className="text-xs flex items-start gap-2" style={{ color: 'var(--ink-soft)' }}>
                        <span style={{ color: 'var(--brass)' }} className="font-bold">—</span>
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
