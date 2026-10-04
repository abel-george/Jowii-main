import React from 'react';

export function HashtagBanner() {
  return (
    <section
      aria-hidden="true"
      className="bg-black text-white overflow-hidden py-8 sm:py-12 border-b border-white/10 select-none"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase px-6 text-white/90 hover:text-[#FF5000] transition-colors"
          >
            #JOWIHKENYA <span className="text-[#FF5000]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
