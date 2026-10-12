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
        <section id="asta-os" className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-black">
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
                <span className="text-[10px] font-mono font-bold text-black">
                  LAYER {layer.id}
                </span>
                <p className="text-xs font-bold uppercase text-black">{layer.title}</p>
                <p className="text-[10px] leading-relaxed text-neutral-600">{layer.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Asta Super App Hero Section (Dotkom Interface) */}
        <section id="super-app" className="space-y-8">
          {/* Hero Image Banner - Full Width */}
          <div
            className="relative w-full overflow-hidden flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-neutral-100 mx-0"
          >
            <Image
              src={ecosystem.asta.superApp.image}
              alt="Dotkom — Flagship Consumer Interface for Asta OS"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
            <p className="absolute bottom-2.5 sm:bottom-3 right-4 sm:right-6 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-500 z-10 pointer-events-none block">
              {ecosystem.asta.superApp.imageNote}
            </p>
          </div>

          {/* Super App Narrative & Services Content */}
          <div className="space-y-8">
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-black text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
                  BRAND · {ecosystem.asta.superApp.brand}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
                  {ecosystem.asta.superApp.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl uppercase tracking-tight text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                {ecosystem.asta.superApp.title}
              </h2>

              {/* MVP Status Box */}
              <div className="p-6 sm:p-8 border-2 border-black bg-neutral-50 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Status: Minimum Viable Product (MVP) Already Exists
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-black font-sans">
                  {ecosystem.asta.superApp.message}
                </p>
                <p className="text-xs sm:text-sm font-mono text-neutral-700 pt-2 border-t border-neutral-300">
                  The Super App MVP already exists as an operational build of the Dotkom interface.
                </p>
              </div>
            </div>

            {/* Principal First-Party Services Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-black">
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
                    className="p-5 flex flex-col justify-between space-y-3 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wide text-black">{svc.name}</h4>
                        <span className="text-[9px] font-mono px-2 py-0.5 bg-neutral-100 text-black font-semibold uppercase">
                          First-Party
                        </span>
                      </div>
                      <p className="text-xs font-semibold mb-2 text-black">{svc.role}</p>
                      <p className="text-[11px] leading-relaxed text-neutral-600">{svc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note & Brand Callout */}
            <div className="pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span>Super App is one expression of ASTA OS · Functions alongside wider physical & digital systems</span>
              </div>
              <div className="text-neutral-500">
                Consumer-facing brand: <strong className="text-neutral-900">Dotkom from back golden days</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Super App Sample Screenshots */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-black">
              VISUAL PROOF
            </span>
            <h2 className="text-3xl sm:text-4xl uppercase tracking-tight text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Super App Sample Screenshots
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
              Live screenshots from the operational Dotkom interface demonstrating the Super App MVP functionality across all integrated services.
            </p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-4">
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
                '/assets/super app/Screenshot from 2026-10-09 18-41-00.png',
              ].map((src, index) => (
                <div key={index} className="relative aspect-[3/2] overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <LightboxImage src={src} alt={`Super App Screenshot ${index + 1}`} className="w-full h-full cursor-pointer">
                    <Image
                      src={src}
                      alt={`Super App Screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      className="object-cover transition-transform hover:scale-[1.025]"
                    />
                  </LightboxImage>
                </div>
              ))}
            </div>
        </section>

        {/* Super App Mobile Screenshots (mobile-first portrait captures) */}
        <section id="super-app-mobile" className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-black">
              MOBILE-FIRST INTERFACE
            </span>
            <h2 className="text-3xl sm:text-4xl uppercase tracking-tight text-black" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Super App on Mobile
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
              Portrait captures from the mobile-first build of the Dotkom interface, showing the Super App MVP as it runs
              on a phone across messaging, marketplace, wallet and social surfaces.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4">
            {[
              '/assets/screenshots/Screenshot from 2026-10-12 09-57-08.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-34-29.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-34-37.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-35-05.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-35-53.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-36-03.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-36-23.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-36-33.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-36-55.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-37-05.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-37-19.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-38-06.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-38-20.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-38-40.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-38-52.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-39-08.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-39-20.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-39-41.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-40-29.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-40-42.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-41-01.png',
              '/assets/screenshots/Screenshot from 2026-10-12 10-41-26.png',
            ].map((src, index) => (
              <div key={index} className="relative aspect-[9/16] overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-neutral-400 transition-colors">
                <LightboxImage src={src} alt={`Super App Mobile Screenshot ${index + 1}`} className="w-full h-full cursor-pointer">
                  <Image
                    src={src}
                    alt={`Super App Mobile Screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform hover:scale-[1.025]"
                  />
                </LightboxImage>
              </div>
            ))}
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
                className="p-6 flex flex-col justify-between transition-colors bg-white border border-neutral-200 hover:border-neutral-400"
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
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-black">
              ENGAGEMENT RULES
            </span>
            <h2 className="text-3xl sm:text-4xl uppercase tracking-tight mt-1 mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Three Ways In
            </h2>
            <p className="text-sm max-w-2xl text-neutral-600">
              Clean separation of powers. Utility, technical integration, and capital allocation have strictly guarded interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystem.paths.map((path) => (
              <div
                key={path.name}
                className="p-8 flex flex-col justify-between transition-all group bg-white border border-neutral-200 hover:border-neutral-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 font-bold bg-black text-white">
                      {path.badge}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase text-neutral-500">
                      {path.kicker}
                    </span>
                  </div>

                  <h3 className="text-3xl uppercase tracking-tight mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    {path.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6 text-neutral-600">
                    {path.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 mb-8 border-t border-neutral-300">
                    {path.points.map((point) => (
                      <li key={point} className="text-xs flex items-start gap-2 text-neutral-600">
                        <span className="font-bold text-black">—</span>
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
