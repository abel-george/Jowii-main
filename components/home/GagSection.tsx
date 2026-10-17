import React from 'react';
import Link from 'next/link';
import {
  Move,
  Factory,
  Zap,
  Cpu,
  CreditCard,
  HeartHandshake,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function GagSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Transport: <Move className="w-5 h-5 text-[#FF5000]" />,
    Industrial: <Factory className="w-5 h-5 text-[#FF5000]" />,
    Energy: <Zap className="w-5 h-5 text-[#FF5000]" />,
    Digital: <Cpu className="w-5 h-5 text-[#FF5000]" />,
    Payments: <CreditCard className="w-5 h-5 text-[#FF5000]" />,
    Services: <HeartHandshake className="w-5 h-5 text-[#FF5000]" />,
    Space: <Rocket className="w-5 h-5 text-[#FF5000]" />,
  };

  return (
    <section className="bg-black text-white py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="03 / INFRASTRUCTURE BACKBONE"
          title="The Great African Grid"
          highlight="Seven Interconnected Corridors"
          description="The GAG does not seek to disrupt, replace, compete, extract, or control. It seeks to partner, integrate, empower, complement, accelerate, and enable."
          align="left"
          theme="dark"
        />

        {/* 7 Corridors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {siteData.gag.corridors.map((corridor) => (
            <Link
              key={corridor.id}
              href={`/gag/${corridor.slug}`}
              className="p-6 bg-neutral-950 border border-white/15 hover:border-[#FF5000] hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest">
                    CORRIDOR {corridor.id}
                  </span>
                  <div className="p-2 bg-white/5 border border-white/10 group-hover:bg-[#FF5000]/20 group-hover:border-[#FF5000]/50 transition-colors">
                    {iconMap[corridor.title] || <Zap className="w-5 h-5 text-[#FF5000]" />}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#FF5000] transition-colors">
                  {corridor.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {corridor.body}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500 group-hover:text-neutral-300">
                <span>GAG Protocol Rail</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5000]" />
              </div>
            </Link>
          ))}

          {/* 8th Special Card: Framework Overview */}
          <div className="p-6 bg-gradient-to-br from-[#FF5000]/20 via-black to-black border border-[#FF5000]/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF5000] tracking-widest uppercase">
                INTEGRATION
              </span>
              <h3 className="text-xl font-extrabold text-white mt-3 mb-2">
                Accelerated Development (ADFA)
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Framework agreements enable sovereign member states to invite targeted Grid projects into their national development plans with verified transparency.
              </p>
            </div>

            <div className="pt-6">
              <Button
                href="/great-african-grid"
                variant="primary"
                size="sm"
                icon="arrow"
                className="w-full text-center"
              >
                Explore Full Grid
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Core Principles Row */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#FF5000] mb-6">
            Four Constitutional Principles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.gag.principles.map((p, idx) => (
              <div key={p.title} className="space-y-2">
                <span className="text-[10px] font-mono text-neutral-500 font-bold">
                  RULE 0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  {p.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
