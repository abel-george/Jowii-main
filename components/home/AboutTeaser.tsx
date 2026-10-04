import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Button } from '@/components/ui/Button';

export function AboutTeaser() {
  const { founder } = siteData.about;

  return (
    <section className="bg-white text-black py-20 lg:py-28 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Founder Portrait with Festival / Editorial Styling */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden border-2 border-black shadow-xl">
              <img
                src={founder.portrait}
                alt={founder.name}
                className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <span className="text-[10px] font-mono text-[#FF5000] tracking-widest uppercase font-bold block">
                  FOUNDER & STEWARD PRESIDENT
                </span>
                <span className="text-xl font-extrabold">{founder.name}</span>
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FF5000]" />
                  <span>{founder.location}</span>
                </div>
              </div>
            </div>

            {/* Accent badge underneath */}
            <div className="mt-4 p-4 bg-neutral-100 border border-neutral-300">
              <p className="text-xs font-mono text-neutral-600 leading-relaxed italic">
                &ldquo;{founder.lead}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#FF5000] uppercase">
              <span>02 / THE STEWARDSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] text-black">
              Conceived at Kisii University. Built for all 54 African nations.
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              {siteData.about.intro}
            </p>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed pt-2">
              <p>
                Reuben Oduk designed the Foundation, the Great African Grid, and ASTA OS over two years as a Computer Science student at Kisii University. The ecosystem pre-launch in October 2026 brings together university faculty, students, regional innovators, sovereign institutions, and international partners.
              </p>
              <p>
                On launch night, the room is not asked to dwell on a solitary biography. It is asked to step into a shared physical and digital infrastructure that guarantees African data sovereignty, industrial corridors, and economic self-determination.
              </p>
            </div>

            {/* Key Governance Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="p-4 bg-neutral-50 border border-neutral-200">
                <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
                  STRUCTURE
                </span>
                <p className="text-sm font-bold text-black mt-1">
                  Purpose Trust & Family Trust
                </p>
                <p className="text-xs text-neutral-600 mt-1">
                  Prevents commercial mission drift with statutory asset lock and dual-trust oversight.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 border border-neutral-200">
                <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
                  REINVESTMENT
                </span>
                <p className="text-sm font-bold text-black mt-1">
                  90% Commercial Reinvestment
                </p>
                <p className="text-xs text-neutral-600 mt-1">
                  Profits from operating companies directly fuel sovereign African development.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                href="/about"
                variant="dark"
                icon="arrow"
              >
                Read Full Governance & Leadership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
