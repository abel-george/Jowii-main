'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-white/10"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span>{siteData.languages.find(l => l.code === currentLang)?.label || 'EN'}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 bg-white border border-gray-200 shadow-lg min-w-[180px]">
            {siteData.languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium">{lang.native}</span>
                <span className="text-gray-500 ml-2 text-xs">({lang.label})</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
