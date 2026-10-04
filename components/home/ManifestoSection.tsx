import React from 'react';
import { ShieldCheck, Globe, Zap } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { Button } from '@/components/ui/Button';

export function ManifestoSection() {
  return (
    <section className="bg-neutral-950 text-white py-20 lg:py-32 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-16">
          {/* Left: Oversized Statement */}
          <div className="lg:w-7/12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#FF5000] uppercase mb-6">
              <span>{siteData.manifesto.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-8">
              <span className="block text-white">
                {siteData.manifesto.quoteLine1}
              </span>
              <span className="block text-[#FF5000] mt-2">
                {siteData.manifesto.quoteLine2}
              </span>
            </h2>

            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-xl">
              {siteData.manifesto.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/about"
                variant="light"
                icon="arrow"
              >
                Read the Foundation Thesis
              </Button>
              <Button
                href="/great-african-grid"
                variant="outlined"
                icon="arrow"
              >
                Explore the 7 Corridors
              </Button>
            </div>
          </div>

          {/* Right: Asymmetric Editorial Pillars */}
          <div className="lg:w-5/12 space-y-4">
            <div className="p-6 bg-black border border-white/15">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#FF5000]">
                  01 / SOVEREIGN NON-INTERFERENCE
                </span>
                <ShieldCheck className="w-5 h-5 text-[#FF5000]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Sovereignty Preserved
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                No supranational authority. Jowih does not replace any national government, central bank, or sovereign legal framework. It serves as an infrastructure coordination layer.
              </p>
            </div>

            <div className="p-6 bg-black border border-white/15">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#FF5000]">
                  02 / ASSET-LOCK REINVESTMENT
                </span>
                <Zap className="w-5 h-5 text-[#FF5000]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                90% Commercial Flow to Mission
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ninety percent of net commercial operating profits from Jowih Holdings are locked into the Mission Fund for continental public health, education, energy, and digital opportunity.
              </p>
            </div>

            <div className="p-6 bg-black border border-white/15">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#FF5000]">
                  03 / CONTINENTAL RAILS
                </span>
                <Globe className="w-5 h-5 text-[#FF5000]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                AfCFTA & AU Partnership Framework
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Working in tandem with the African Union and AfCFTA to unlock frictionless cross-border logistics, unified payments through Jowih Credits, and sovereign digital interoperability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
