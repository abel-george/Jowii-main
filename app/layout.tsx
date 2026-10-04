import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { InstitutionalHeader } from '@/components/layout/InstitutionalHeader';
import { InstitutionalFooter } from '@/components/layout/InstitutionalFooter';

const editorialSerif = localFont({
  src: '../public/fonts/noto-serif-display-regular.ttf',
  variable: '--font-editorial',
  display: 'swap',
});

const institutionalSans = localFont({
  src: [
    { path: '../public/fonts/noto-sans-display-regular.ttf', weight: '400' },
    { path: '../public/fonts/noto-sans-display-bold.ttf', weight: '700' },
  ],
  variable: '--font-institutional',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jowih.africa'),
  title: 'Jowih Foundation | A Continental Development Framework',
  description:
    'Explore the proposed Jowih Foundation, Great African Grid and ASTA OS architecture, including its donation-led structural pre-launch and institutional source papers.',
  keywords: [
    'Jowih',
    'Jowih Ecosystem',
    'Great African Grid',
    'ASTA OS',
    'Kisii Kenya',
    'African Technology',
    'Continental Infrastructure',
  ],
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  openGraph: {
    title: 'Jowih Foundation | A Continental Development Framework',
    description:
      'A proposed mission-led framework connecting infrastructure, services, capital and technology across Africa.',
    images: ['/assets/jowih-hero.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${editorialSerif.variable} ${institutionalSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#b88a4a] selection:text-white">
        <a
          href="#main-content"
          className="fixed top-[-100px] left-4 z-50 px-4 py-2 bg-white text-black font-bold uppercase text-xs focus:top-4 transition-all"
        >
          Skip to content
        </a>
        <InstitutionalHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
