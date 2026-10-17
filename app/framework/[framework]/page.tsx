import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SourceDocument } from '@/components/ui/SourceDocument';

const source = fs.readFileSync(path.join(process.cwd(), 'public/documents/gag-initiative.txt'), 'utf8');
const ranges: Record<string, { title: string; start: string; end: string }> = {
  'fw-01': { title: 'Accelerated Development Framework Agreement', start: 'ACCELERATED DEVELOPMENT FRAMEWORK AGREEMENT (ADFA)', end: 'THE AU PARTNERSHIP FRAMEWORK - OBSERVATORY & COORDINATION' },
  'fw-02': { title: 'AU Partnership Framework', start: 'THE AU PARTNERSHIP FRAMEWORK - OBSERVATORY & COORDINATION', end: 'THE SIX CORRIDORS' },
  'fw-03': { title: 'New Dawn City Blueprint', start: 'NEW DAWN CITY ( TND~City )', end: 'THE SIX MULTIPLIERS' },
  'fw-04': { title: 'Country Pots Scale Allocation', start: 'COUNTRY POTS AT SCALE ALLOCATION FROM MISSION FUND OVER YEARS', end: 'EXCHANGE PROGRAM AND CO-DEVELOPMENT (ADAPT STRATEGY)' },
  'fw-05': { title: 'Exchange Programs and Co-Development', start: 'EXCHANGE PROGRAM AND CO-DEVELOPMENT (ADAPT STRATEGY)', end: 'JOWIH URBAN HOUSING AND RAPID URBANIZATION FRAMEWORK' },
  'fw-06': { title: 'Urban Housing and Urbanization', start: 'JOWIH URBAN HOUSING AND RAPID URBANIZATION FRAMEWORK', end: 'JOWIH AFRICA HEALTH FUND Framework (AHF)' },
  'fw-07': { title: 'Jowih Africa Health Fund', start: 'JOWIH AFRICA HEALTH FUND Framework (AHF)', end: 'JOWIH INFRASTRUCTURE EXECUTION BLUEPRINT' },
  'fw-08': { title: 'Infrastructure Execution', start: 'JOWIH INFRASTRUCTURE EXECUTION BLUEPRINT', end: 'AFRICA SOVEREIGN SPACE CAPABILTY FRAMEWORK' },
  'fw-09': { title: 'Africa Sovereign Space Capability', start: 'AFRICA SOVEREIGN SPACE CAPABILTY FRAMEWORK', end: 'JOWIH EDUCATION FRAMEWORK' },
  'fw-10': { title: 'Jowih Education Framework', start: 'JOWIH EDUCATION FRAMEWORK', end: 'JOWIH CRT – THE AFRICAN CAPSULE RAPID TRANSIT SYSTEM' },
  'fw-11': { title: 'Capsule Rapid Transit', start: 'JOWIH CRT – THE AFRICAN CAPSULE RAPID TRANSIT SYSTEM', end: 'JOWIH MOBILE HEALTH FRAMEWORK' },
  'fw-12': { title: 'Jowih Mobile Health', start: 'JOWIH MOBILE HEALTH FRAMEWORK', end: 'AIR JOWIH & AIRPORT SEZ FRAMEWORK' },
  'fw-13': { title: 'Air Jowih and Airport SEZs', start: 'AIR JOWIH & AIRPORT SEZ FRAMEWORK', end: 'AFRICA CONNECT ALLIANCE FRAMEWORK' },
  'fw-14': { title: 'Africa Connect Alliance', start: 'AFRICA CONNECT ALLIANCE FRAMEWORK', end: 'ENVIRONMENTAL CLEANLINESS FRAMEWORK' },
  'fw-15': { title: 'Environmental Cleanliness', start: 'ENVIRONMENTAL CLEANLINESS FRAMEWORK', end: 'JOWIH AFRICAN ANIMATION & GAMING FRAMEWORK' },
  'fw-16': { title: 'African Animation and Gaming', start: 'JOWIH AFRICAN ANIMATION & GAMING FRAMEWORK', end: 'NEW DAWN CITY:' },
};

export function generateStaticParams() { return Object.keys(ranges).map((framework) => ({ framework })); }

export default function FrameworkSourcePage({ params }: { params: { framework: string } }) {
  const range = ranges[params.framework];
  if (!range) notFound();
  const startIndex = source.indexOf(range.start);
  const endIndex = source.indexOf(range.end, startIndex + range.start.length);
  const lines = source.slice(startIndex, endIndex === -1 ? source.length : endIndex).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return <main className="document-page framework-source-page min-h-screen"><header className="document-page__hero"><div className="document-page__inner"><Link href="/framework" className="document-page__back"><ArrowLeft size={16} /> Back to frameworks</Link><p className="document-page__eyebrow">GAG source document · Full framework</p><h1>{range.title}</h1><p>Source-extracted framework content, presented with the original structure and without summary compression.</p></div></header><section className="document-page__body"><div className="document-page__inner framework-source-page__content"><SourceDocument lines={lines} /></div></section></main>;
}
