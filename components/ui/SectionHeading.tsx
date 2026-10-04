import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
  highlight?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'dark',
  className,
  highlight,
}: SectionHeadingProps) {
  const isLight = theme === 'light';

  return (
    <div
      className={cn(
        'max-w-4xl mb-12 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-[11px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase mb-3.5',
            isLight ? 'text-neutral-500' : 'text-[#FF5000]'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.04] mb-4',
          isLight ? 'text-black' : 'text-white'
        )}
      >
        {title}
        {highlight && (
          <span className="text-[#FF5000] block mt-1">{highlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
            isLight ? 'text-neutral-600' : 'text-neutral-400'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
