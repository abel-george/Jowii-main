'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Agenda() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const currentTrack = siteData.agenda.tracks[activeTrackIndex];

  return (
    <section id="agenda" className="bg-neutral-50 text-black py-20 lg:py-28 border-b border-black/10 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 / EVENING LAUNCH FLOW"
          title={siteData.agenda.title}
          description={siteData.agenda.copy}
          align="center"
          theme="light"
        />

        {/* Track Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {siteData.agenda.tracks.map((track, idx) => {
            const isActive = activeTrackIndex === idx;
            return (
              <button
                key={track.name}
                type="button"
                onClick={() => setActiveTrackIndex(idx)}
                className={`px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all select-none border ${
                  isActive
                    ? 'bg-black text-white border-black shadow-md'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black'
                }`}
              >
                <span>{track.name}</span>
                <span className="ml-2 text-[10px] opacity-60">
                  ({track.items.length} sessions)
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Agenda Items List */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrack.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="space-y-6 divide-y divide-neutral-100"
            >
              {currentTrack.items.map((item, idx) => (
                <div
                  key={`${item.time}-${idx}`}
                  className={`pt-6 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-start`}
                >
                  {/* Time Badge */}
                  <div className="md:col-span-3 flex items-center gap-2 font-mono">
                    <div className="p-1.5 bg-black text-white text-xs font-extrabold px-3 py-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FF5000]" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-semibold uppercase">
                      EAT
                    </span>
                  </div>

                  {/* Title & Detail */}
                  <div className="md:col-span-9 space-y-1.5">
                    <h4 className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Note Box */}
        <div className="mt-8 p-4 bg-neutral-200/60 border border-neutral-300 text-xs font-mono text-neutral-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF5000] shrink-0" />
            <span>
              All registered ticket holders & livestream viewers receive full session recordings post-event.
            </span>
          </div>
          <span className="font-bold uppercase tracking-wider text-black">
            Kisii University · Oct 29
          </span>
        </div>
      </div>
    </section>
  );
}
