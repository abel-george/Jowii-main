'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function WaitlistCTA() {
  return (
    <section className="bg-black text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow - Clean, no sparkle icons */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-neutral-200 text-xs font-mono font-bold tracking-[0.2em] uppercase">
            <span>08 / CONTINENTAL INVITATION</span>
          </div>

          {/* Dramatic Typography */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.92]">
            <span className="block text-neutral-400">Ready to be part</span>
            <span className="block text-white">of what&apos;s next?</span>
            <span className="block text-[#FF5000] mt-2">
              Join the Jowih Waitlist.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Be among the first founders, investors, engineers, and citizens to access ASTA OS, corridor integration frameworks, and the Kisii launch room.
          </p>

          {/* Action CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 bg-[#FF5000] hover:bg-[#E04600] active:scale-[0.97] text-white text-sm sm:text-base font-black tracking-widest uppercase transition-[transform,background-color] duration-150 [transition-timing-function:var(--ease-out)] shadow-lg group border border-transparent select-none"
            >
              <span>Join the Waitlist</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-150 [transition-timing-function:var(--ease-out)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Button
              href="/ticket"
              variant="outlined"
              size="lg"
              icon="ticket"
              className="w-full sm:w-auto text-sm sm:text-base py-5"
            >
              Book Citizen Ticket
            </Button>
          </div>

          {/* Assurances */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#FF5000]" />
              <span>Sovereign Asset Lock</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#FF5000]" />
              <span>Priority Auditorium & Livestream Queue</span>
            </div>
            <span>·</span>
            <span className="text-neutral-500">No spam. Mission only.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
