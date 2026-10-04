'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Countdown } from './Countdown';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black text-white pt-24 pb-12 sm:pb-16 lg:pb-20">
      {/* Background Video with Clean Architectural Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/jowih-hero.png"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        {/* Clean dual-tone gradient without synthetic noise or dots */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow & Status Badge (Clean solid indicator, no flickering) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 border border-white/20 text-neutral-200 text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5000]" />
              <span>Continental Pre-Launch</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#FF5000]" />
              <span>Kisii, Kenya</span>
              <span className="text-neutral-600">·</span>
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>29 Oct 2026</span>
              <span className="text-neutral-600">·</span>
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>8:00 PM EAT</span>
            </div>
          </div>

          {/* Oversized Festival / Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] uppercase text-white mb-6">
            <span className="block text-white">
              {siteData.hero.statementLine1}
            </span>
            <span className="block text-[#FF5000]">
              {siteData.hero.statementLine2}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-300 tracking-tight normal-case mt-3 font-sans">
              {siteData.hero.title}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8 font-normal">
            {siteData.hero.copy}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
            <Button
              href="/waitlist"
              variant="primary"
              size="lg"
              icon="arrow"
              className="text-xs tracking-widest font-black"
            >
              Join the Waitlist
            </Button>
            <Button
              href="/ticket"
              variant="light"
              size="lg"
              icon="ticket"
              className="text-xs tracking-widest font-black"
            >
              Book a Ticket
            </Button>
            <Button
              href="/partner"
              variant="outlined"
              size="lg"
              icon="arrow"
              className="text-xs tracking-widest font-bold hidden sm:inline-flex"
            >
              Become a Partner
            </Button>
            <Button
              href="/investor"
              variant="ghost"
              size="lg"
              icon="arrow"
              className="text-xs tracking-widest font-bold hidden md:inline-flex"
            >
              Become Investor
            </Button>
          </div>

          {/* Launch Countdown Box */}
          <div className="pt-4 border-t border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FF5000] font-bold mb-2">
                  Time Until Launch Assembly
                </p>
                <Countdown targetDate={siteData.config.eventDate} />
              </div>
              <div className="hidden lg:flex flex-col items-end text-right text-xs font-mono text-neutral-400">
                <span className="text-white font-bold">Kisii University Auditorium</span>
                <span>Physical Seating & Worldwide Telecast</span>
                <span className="text-[#FF5000] font-semibold mt-1">#JOWIHKENYA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
