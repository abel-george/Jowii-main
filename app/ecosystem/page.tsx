import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Button } from '@/components/ui/Button';
import { LightboxImage } from '@/components/ui/ImageLightbox';

export default function EcosystemPage() {
  const { ecosystem } = siteData;

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="pt-36 sm:pt-40 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
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
            03 / TECHNICAL OPERATING STACK
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            {ecosystem.title}
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            {ecosystem.lead} These services and interfaces describe the technical architecture and operating rails.
          </p>
        </div>
      </div>

      <div className="py-16 pb-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ASTA OS Section */}
        <section id="asta-os" className="p-8 sm:p-12 space-y-6 shadow-2xl relative bg-neutral-50 border-2 border-neutral-200">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF5000]">
              {ecosystem.asta.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              {ecosystem.asta.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
              {ecosystem.asta.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-neutral-300">
            {ecosystem.asta.coreLayers.map((layer) => (
              <div key={layer.id} className="p-4 space-y-2 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors">
                <span className="text-[10px] font-mono font-bold text-[#FF5000]">
                  LAYER {layer.id}
                </span>
                <p className="text-xs font-bold uppercase text-black">{layer.title}</p>
                <p className="text-[10px] leading-relaxed text-neutral-600">{layer.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Asta Super App Hero Section (Dotkom Interface) */}
        <section id="super-app" className="shadow-2xl relative overflow-hidden bg-white border-2 border-neutral-200">
          {/* Hero Image Banner with Background Blending */}
          <div
            className="relative w-full overflow-hidden flex items-center justify-center h-[260px] sm:h-[380px] md:h-[480px] lg:h-[520px] bg-neutral-100"
          >
            <Image
              src={ecosystem.asta.superApp.image}
              alt="Dotkom — Flagship Consumer Interface for Asta OS"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
            <p className="absolute bottom-2.5 sm:bottom-3 right-4 sm:right-6 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-500 z-10 pointer-events-none block">
              {ecosystem.asta.superApp.imageNote}
            </p>
          </div>

          {/* Super App Narrative & Services Content */}
          <div className="p-8 sm:p-12 relative z-10 space-y-8 border-t border-neutral-200">
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#FF5000] text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
                  BRAND · {ecosystem.asta.superApp.brand}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
                  {ecosystem.asta.superApp.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl uppercase tracking-tight text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                {ecosystem.asta.superApp.title}
              </h2>

              {/* Exact user-requested message */}
              <div className="p-6 sm:p-8 rounded-none border-2 border-emerald-500 bg-emerald-50 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500 text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Status: Minimum Viable Product (MVP) Already Exists
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-emerald-900 font-sans">
                  {ecosystem.asta.superApp.message}
                </p>
                <p className="text-xs sm:text-sm font-mono text-emerald-700 pt-2 border-t border-emerald-300">
                  The Super App MVP already exists as an operational build of the Dotkom interface.
                </p>
              </div>
            </div>

            {/* Principal First-Party Services Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#FF5000]">
                  Principal First-Party Services on ASTA OS
                </h3>
                <span className="text-[11px] font-mono text-neutral-500">
                  Operates on Shared ASTA Rails
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystem.asta.superApp.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="p-5 flex flex-col justify-between space-y-3 bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wide text-black">{svc.name}</h4>
                        <span className="text-[9px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-700 font-semibold uppercase">
                          First-Party
                        </span>
                      </div>
                      <p className="text-xs font-semibold mb-2 text-[#FF5000]">{svc.role}</p>
                      <p className="text-[11px] leading-relaxed text-neutral-600">{svc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note & Brand Callout */}
            <div className="pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Super App is one expression of ASTA OS · Functions alongside wider physical & digital systems</span>
              </div>
              <div className="text-neutral-500">
                Consumer-facing brand: <strong className="text-neutral-900">Dotkom from back golden days</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Super App Sample Screenshots */}
        <section className="shadow-2xl relative bg-white border-2 border-neutral-200">
          <div className="p-8 sm:p-12 space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF5000]">
                VISUAL PROOF
              </span>
              <h2 className="text-3xl sm:text-4xl uppercase tracking-tight text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                Super App Sample Screenshots
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                Live screenshots from the operational Dotkom interface demonstrating the Super App MVP functionality across all integrated services.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-4">
              {[
                '/assets/super app/Screenshot from 2026-10-09 18-31-54.png',
                '/assets/super app/Screenshot from 2026-10-09 18-32-30.png',
                '/assets/super app/Screenshot from 2026-10-09 18-32-53.png',
                '/assets/super app/Screenshot from 2026-10-09 18-33-16.png',
                '/assets/super app/Screenshot from 2026-10-09 18-33-26.png',
                '/assets/super app/Screenshot from 2026-10-09 18-33-50.png',
                '/assets/super app/Screenshot from 2026-10-09 18-34-29.png',
                '/assets/super app/Screenshot from 2026-10-09 18-35-04.png',
                '/assets/super app/Screenshot from 2026-10-09 18-35-54.png',
                '/assets/super app/Screenshot from 2026-10-09 18-36-39.png',
                '/assets/super app/Screenshot from 2026-10-09 18-37-38.png',
                '/assets/super app/Screenshot from 2026-10-09 18-38-05.png',
                '/assets/super app/Screenshot from 2026-10-09 18-38-14.png',
                '/assets/super app/Screenshot from 2026-10-09 18-38-54.png',
                '/assets/super app/Screenshot from 2026-10-09 18-39-09.png',
                '/assets/super app/Screenshot from 2026-10-09 18-39-22.png',
                '/assets/super app/Screenshot from 2026-10-09 18-39-33.png',
                '/assets/super app/Screenshot from 2026-10-09 18-39-48.png',
                '/assets/super app/Screenshot from 2026-10-09 18-40-21.png',
                '/assets/super app/Screenshot from 2026-10-09 18-40-37.png',
              ].map((src, index) => (
                <div key={index} className="relative aspect-[9/16] overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <LightboxImage src={src} alt={`Super App Screenshot ${index + 1}`} className="w-full h-full cursor-pointer">
                    <Image
                      src={src}
                      alt={`Super App Screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </LightboxImage>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Participants */}
        <section className="space-y-6 pb-16 border-b border-neutral-300">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-300">
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Ecosystem Participants
            </h2>
            <span className="text-xs font-mono text-neutral-500">
              ASTA ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystem.asta.ecosystemParticipants.map((participant, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col justify-between transition-colors bg-neutral-50 border border-neutral-200 hover:border-neutral-400"
              >
                <div>
                  <h3 className="text-lg uppercase tracking-tight mt-2 mb-2 text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    {participant.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-600">
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
