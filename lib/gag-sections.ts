import fs from 'node:fs';
import path from 'node:path';

// The properly re-extracted GAG source (with [[IMAGE:]] and [[TABLE]] markers).
// The older /public/documents/gag-initiative.txt extraction had no tables or
// image markers and must not be used for section rendering.
const source = fs.readFileSync(
  path.join(process.cwd(), 'public', 'documents', 'archive', 'the-gag-initiative.txt'),
  'utf8',
);

export const frameworkRanges: Record<string, { title: string; start: string; end: string }> = {
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

export const frameworkAliases: Record<string, string> = {
  adfa: 'fw-01', 'au-parf': 'fw-02', 'new-dawn-city': 'fw-03', 'country-pots-cdes': 'fw-04', 'adn-assemblies': 'fw-04',
  'education-framework': 'fw-10', 'health-ahf': 'fw-07', 'housing-urbanization': 'fw-06', 'environmental-cleanliness': 'fw-15',
  'infrastructure-execution': 'fw-08', crt: 'fw-11', 'asta-connect': 'fw-14', 'animation-gaming': 'fw-16',
  'air-jowih': 'fw-13', 'space-capability': 'fw-09', 'exchange-programs': 'fw-05',
};

export const corridorRanges: Record<string, { title: string; start: string; end: string }> = {
  transport: { title: 'Transport Corridor', start: 'CORRIDOR 1: TRANSPORT CORRIDOR', end: 'CORRIDOR 2: INDUSTRIAL & MANUFACTURING CORRIDOR' },
  industrial: { title: 'Industrial & Manufacturing Corridor', start: 'CORRIDOR 2: INDUSTRIAL & MANUFACTURING CORRIDOR', end: 'CORRIDOR 3: ENERGY CORRIDOR' },
  energy: { title: 'Energy Corridor', start: 'CORRIDOR 3: ENERGY CORRIDOR', end: 'CORRIDOR 4: DIGITAL CORRIDOR' },
  digital: { title: 'Digital Corridor', start: 'CORRIDOR 4: DIGITAL CORRIDOR', end: 'CORRIDOR 5: PAYMENT CORRIDOR' },
  payments: { title: 'Payment Corridor', start: 'CORRIDOR 5: PAYMENT CORRIDOR', end: 'CORRIDOR 6: SERVICE CORRIDOR' },
  services: { title: 'Service Corridor', start: 'CORRIDOR 6: SERVICE CORRIDOR', end: 'CORRIDOR 7: SPACE CORRIDOR' },
  space: { title: 'Space Corridor', start: 'CORRIDOR 7: SPACE CORRIDOR', end: 'NEW DAWN CITY' },
};

// Line-anchored heading search: the heading must start a line, so mid-sentence
// mentions (e.g. the ADFA name inside the introduction) never hijack a section
// start, and bulleted table-of-contents lines ("• CORRIDOR 1: ...") are skipped.
function findHeading(heading: string, fromIndex = 0) {
  let offset = 0;
  for (const line of source.split('\n')) {
    if (offset >= fromIndex && line.trimStart().startsWith(heading)) return offset;
    offset += line.length + 1;
  }
  return -1;
}

export function getGagSection(start: string, end: string): string[] {
  const startIndex = findHeading(start);
  if (startIndex === -1) return [];
  const endIndex = findHeading(end, startIndex + start.length);
  return source
    .slice(startIndex, endIndex === -1 ? source.length : endIndex)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}
