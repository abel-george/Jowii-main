'use client';

import React, { useState, useEffect } from 'react';
import { siteData } from '@/lib/site-data';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate?: string;
  className?: string;
}

export function Countdown({
  targetDate = siteData.config.eventDate,
  className = '',
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) {
    return (
      <div className={`grid grid-cols-4 gap-2 max-w-md ${className}`}>
        {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label) => (
          <div
            key={label}
            className="bg-black/60 border border-white/15 px-3 py-2.5 text-center backdrop-blur-sm"
          >
            <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-white">
              --
            </span>
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div
      className={`grid grid-cols-4 gap-2 sm:gap-3 max-w-lg ${className}`}
      aria-label="Launch countdown"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="bg-black/80 border border-white/20 p-2.5 sm:p-3 text-center transition-[border-color] duration-150 [transition-timing-function:var(--ease-out)] hover:border-[#FF5000]"
        >
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-mono font-extrabold text-white tracking-tight">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-neutral-400 uppercase block mt-0.5">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
