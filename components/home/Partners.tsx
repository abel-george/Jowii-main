import React from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/site-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function Partners() {
  // Multiply partners for a seamless infinite loop
  const marqueeItems = [
    ...siteData.partners,
    ...siteData.partners,
    ...siteData.partners,
    ...siteData.partners,
  ];

  return (
    <section className="bg-white text-black py-20 lg:py-28 border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          eyebrow="06 / 2026 PARTNERS"
          title="Brands Building Alongside Jowih"
          description="We partner with organisations that use the launch to reach founders, institutions, and operators that matter to them."
          align="center"
          theme="light"
        />
      </div>

      {/* Infinite Logo Marquee */}
      <div className="w-full relative py-6 border-y border-black/10 bg-neutral-50 overflow-hidden">
        {/* Left & Right Gradient Mask */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center gap-4 group shrink-0 px-4 py-2 hover:bg-white rounded-none border border-transparent hover:border-black/10 transition-all"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="h-12 sm:h-14 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-tight text-neutral-900 font-mono">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center CTA */}
      <div className="mt-12 flex justify-center gap-4">
        <Button
          href="/partner"
          variant="dark"
          size="md"
          icon="arrow"
        >
          Become a Partner
        </Button>
        <Button
          href="/partners"
          variant="light"
          size="md"
          icon="arrow"
          className="border border-black"
        >
          Explore All Partners
        </Button>
      </div>
    </section>
  );
}
