import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SourceDocument } from '@/components/ui/SourceDocument';
import { siteData } from '@/lib/site-data';

const source = fs.readFileSync(path.join(process.cwd(), 'public/documents/gag-initiative.txt'), 'utf8');
const ranges: Record<string, { title: string; start: string; end: string }> = {
  'fw-01': { title: 'Accelerated Development Framework Agreement', start: 'ACCELERATED DEVELOPMENT FRAMEWORK AGREEMENT (ADFA)', end: 'THE PARALLEL STRATEGY' },
  'fw-02': { title: 'AU Partnership Framework', start: 'THE AU PARTNERSHIP FRAMEWORK - OBSERVATORY & COORDINATION', end: 'GALLERY' },
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
  'fw-16': { title: 'African Animation and Gaming', start: 'JOWIH AFRICAN ANIMATION & GAMING FRAMEWORK', end: 'THE COMPLETE 2045 HORIZON ARC' },
};

const aliases: Record<string, string> = {
  adfa: 'fw-01', 'au-parf': 'fw-02', 'new-dawn-city': 'fw-03', 'country-pots-cdes': 'fw-04', 'adn-assemblies': 'fw-04',
  'education-framework': 'fw-10', 'health-ahf': 'fw-07', 'housing-urbanization': 'fw-06', 'environmental-cleanliness': 'fw-15',
  'infrastructure-execution': 'fw-08', crt: 'fw-11', 'asta-connect': 'fw-14', 'animation-gaming': 'fw-16',
  'air-jowih': 'fw-13', 'space-capability': 'fw-09', 'exchange-programs': 'fw-05',
};

export function generateStaticParams() { return [...Object.keys(ranges), ...Object.keys(aliases), ...siteData.gag.frameworks.map((framework) => framework.id)].map((framework) => ({ framework })); }

export default function FrameworkSourcePage({ params }: { params: { framework: string } }) {
  const range = ranges[params.framework] || ranges[aliases[params.framework]];
  const summary = siteData.gag.frameworks.find((framework) => framework.id === params.framework);
  if (!range && !summary) notFound();
  if (!range && summary) return <main className="document-page framework-source-page min-h-screen"><header className="document-page__hero"><div className="document-page__inner"><Link href="/framework" className="document-page__back"><ArrowLeft size={16} /> Back to frameworks</Link><p className="document-page__eyebrow">Jowih framework</p><h1>{summary.title}</h1><p>{summary.detail}</p></div></header><section className="document-page__body"><div className="document-page__inner framework-source-page__content"><Link href="/search" className="framework-source-link">SEARCH THE ARCHIVE <span aria-hidden="true">↗</span></Link></div></section></main>;
  const startIndex = source.indexOf(range.start);
  const endIndex = source.indexOf(range.end, startIndex + range.start.length);
  const lines = source.slice(startIndex, endIndex === -1 ? source.length : endIndex).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return <main className="document-page framework-source-page min-h-screen"><header className="document-page__hero"><div className="document-page__inner"><Link href="/framework" className="document-page__back"><ArrowLeft size={16} /> Back to frameworks</Link><p className="document-page__eyebrow">Great African Grid initiative</p><h1>{range.title}</h1></div></header><section className="document-page__body"><div className="document-page__inner framework-source-page__content"><SourceDocument lines={lines} /></div></section></main>;
}
