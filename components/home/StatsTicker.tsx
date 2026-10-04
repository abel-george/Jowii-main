import React from 'react';
import { siteData } from '@/lib/site-data';

export function StatsTicker() {
  return (
    <section
      aria-label="Jowih key metrics"
      className="bg-black border-y border-white/10 text-white relative z-20 overflow-x-auto"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 min-w-[640px] md:min-w-0">
        {siteData.stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="p-6 lg:p-8 hover:bg-white/[0.03] transition-colors group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-[#FF5000] tracking-widest uppercase">
                0{idx + 1} // METRIC
              </span>
            </div>

            <div>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white group-hover:text-[#FF5000] transition-colors">
                {stat.value}
              </span>
              <h3 className="text-sm font-bold tracking-wide uppercase text-neutral-200 mt-1">
                {stat.label}
              </h3>
              {stat.detail && (
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                  {stat.detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
