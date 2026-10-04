import React from 'react';
import { siteData, Speaker } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

export function Speakers() {
  return (
    <section className="bg-black text-white py-20 lg:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 / VOICES"
          title="Launch Speakers"
          description="Hover a portrait to bring it into colour. More names are confirmed as the auditorium room is locked."
          align="left"
          theme="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.speakers.map((speaker, idx) => (
            <div
              key={speaker.name}
              className="bg-neutral-950 border border-white/15 hover:border-[#FF5000] transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Image or Avatar with Grayscale to Color Effect */}
              <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden">
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-black text-neutral-400 group-hover:text-white transition-colors">
                    <span className="text-4xl lg:text-5xl font-mono font-black text-neutral-600 group-hover:text-[#FF5000] transition-colors">
                      {speaker.initials}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-2">
                      Auditorium Panel
                    </span>
                  </div>
                )}

                {/* Speaker Category Tag */}
                {speaker.tag && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="orange">{speaker.tag}</Badge>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#FF5000] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-1 font-sans">
                    {speaker.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#FF5000]">
                  <span>{speaker.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
