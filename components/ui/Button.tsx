import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'light' | 'outlined' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'ticket' | 'none';
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon = 'none',
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    // Emil Kowalski craft: tactile scale(0.97) on active, sub-200ms ease-out, explicit GPU transform
    const baseStyles =
      'inline-flex items-center justify-center font-bold tracking-wider uppercase text-xs select-none group focus-visible:outline-2 focus-visible:outline-offset-2 transition-[transform,background-color,border-color,color] duration-150 [transition-timing-function:var(--ease-out)] active:scale-[0.97] cursor-pointer';

    const variants = {
      primary:
        'bg-[#FF5000] text-white hover:bg-[#E04600] border border-transparent shadow-sm',
      light:
        'bg-white text-black hover:bg-neutral-200 border border-white',
      outlined:
        'bg-transparent text-white border border-white/70 hover:bg-white hover:text-black',
      dark:
        'bg-black text-white hover:bg-neutral-900 border border-neutral-800',
      ghost:
        'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm',
    };

    const sizes = {
      sm: 'px-4 py-2 text-[11px] gap-2 min-h-[2.4rem]',
      md: 'px-6 py-3.5 text-xs gap-2.5 min-h-[3rem]',
      lg: 'px-8 py-4 text-sm gap-3 min-h-[3.5rem]',
    };

    const iconContent = icon === 'arrow' ? (
      <ArrowUpRight className="w-4 h-4 transition-transform duration-150 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : icon === 'ticket' ? (
      <Ticket className="w-4 h-4 transition-transform duration-150 [transition-timing-function:var(--ease-out)] group-hover:rotate-6" />
    ) : null;

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            <span>{children}</span>
            {iconContent}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          <span>{children}</span>
          {iconContent}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <span>{children}</span>
        {iconContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
