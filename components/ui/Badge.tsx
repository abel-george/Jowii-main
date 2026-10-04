import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'dark' | 'light' | 'orange' | 'outline';
}

export function Badge({
  className,
  variant = 'outline',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    outline: 'border border-white/20 text-neutral-300 bg-white/5',
    dark: 'bg-neutral-900 border border-neutral-800 text-neutral-200',
    light: 'bg-black/5 border border-black/15 text-neutral-800',
    orange: 'bg-[#FF5000]/15 border border-[#FF5000]/40 text-[#FF5000]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 select-none font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
