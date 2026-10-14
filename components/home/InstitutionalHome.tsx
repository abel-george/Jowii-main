import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  Check,
  CircleDollarSign,
  Code,
  FileText,
  Globe,
  Globe2,
  HeartPulse,
  HeartHandshake,
  Landmark,
  Network,
  Newspaper,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  Waypoints,
} from 'lucide-react';
import { InstitutionalNewsletter } from '@/components/home/InstitutionalNewsletter';
import { InstitutionalNews } from '@/components/home/InstitutionalNews';
import { InstitutionalExpandable, type ExpandableItem } from '@/components/ui/InstitutionalExpandable';
import { InstitutionalHeroSlideshow } from '@/components/home/InstitutionalHeroSlideshow';
import { LightboxImage } from '@/components/ui/ImageLightbox';

const pillars = [
  {
    number: '01',
    title: 'Communities & essential services',
    text: 'Community-led priorities across health, education, food systems, clean water, housing and local infrastructure.',
    icon: HeartPulse,
  },
  {
    number: '02',
    title: 'Digital opportunity & youth',
    text: 'Skills pathways, access to digital tools, scholarships, developer participation and opportunities for young people.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Research & African innovation',
    text: 'Applied research, knowledge exchange and African-led capacity in technology, health, energy, water and industry.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Long-horizon capabilities',
    text: 'A future-facing agenda spanning advanced manufacturing, resilient cities, AI, mobility and space capability.',
    icon: Globe2,
  },
];

const corridors = [
  { number: '01', name: 'Transport', detail: 'Connect people, freight and logistics through interoperable transport systems.' },
  { number: '02', name: 'Industry & manufacturing', detail: 'Grow production capability, industrial partnerships and technology transfer.' },
  { number: '03', name: 'Energy', detail: 'Coordinate generation, storage, transmission and resilient local power.' },
  { number: '04', name: 'Digital', detail: 'Connect services and infrastructure through shared digital rails.' },
  { number: '05', name: 'Payments', detail: 'Support cross-border value movement through licensed payment partners.' },
  { number: '06', name: 'Human services', detail: 'Strengthen health, education, skills and community development.' },
  { number: '07', name: 'Space capability', detail: 'Build African participation in communications, observation and space industry.' },
];

const layers = [
  ['Mission', 'The Jowih Foundation and its proposed constitutional framework', '/about#mission'],
  ['Protection', 'Purpose and Founder Family Trusts, with distinct proposed roles', '/about#structure'],
  ['Ownership', 'Jowih Holdings as the proposed commercial holding structure', '/about#structure'],
  ['Execution', 'Jowih Group and operating companies, subject to establishment', '/about#leadership'],
  ['Continental framework', 'The Great African Grid and its seven corridors', '/gag#gag-corridors'],
  ['Digital infrastructure', 'ASTA OS interoperability, APIs and partner integrations', '/ecosystem#asta-os'],
  ['State partnership', 'Voluntary, bilateral Accelerated Development Framework Agreements', '/gag#adfa'],
  ['Participation', 'Use, integrate and, later, regulated economic participation', '/ecosystem#participation'],
  ['Funding', 'Pre-launch support now; separate proposed instruments later', '/documents#funding-architecture'],
];

const prelaunchSteps = [
  ['Month 1', 'Public pre-launch', 'Present the architecture, invite support contributions, select independent legal firms and begin registrations.'],
  ['Months 1–2', 'Parallel structural setup', 'The intended five-firm team coordinates legal work and oversight while support contributions remain held under the proposed trust arrangement.'],
  ['Month 3', 'Full launch target', 'A public launch is planned after registrations, leadership appointments and compliance work are complete.'],
];

const visualProjects = [
  {
    title: 'A connected continental grid',
    area: 'Great African Grid',
    image: '/documents/sample%20images/The%20Great%20African%20Grid.png',
    alt: 'Illustrative overview of proposed Great African Grid infrastructure concepts',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Mobility & logistics corridors',
    area: 'Transport',
    image: '/documents/sample%20images/airjowih2.png',
    alt: 'AI-assisted concept illustration of proposed African air travel and airport logistics infrastructure',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Education & skills pathways',
    area: 'Education',
    image: '/documents/sample%20images/jowih%20education%20framework.png',
    alt: 'Concept illustration of proposed education and skills infrastructure',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Community health access',
    area: 'Health',
    image: '/documents/sample%20images/jowih%20healthcare.png',
    alt: 'Concept illustration of proposed mobile and community health services',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Digital infrastructure',
    area: 'ASTA OS',
    image: '/documents/sample%20images/digital%20corridor.png',
    alt: 'Concept illustration of proposed digital connectivity infrastructure',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Energy systems',
    area: 'Energy',
    image: '/documents/sample%20images/energy%20corridor.png',
    alt: 'Concept illustration of proposed renewable energy infrastructure',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Continental development vision',
    area: 'Africa',
    image: '/documents/sample%20images/africa.png',
    alt: 'Illustrative Africa-focused development concept artwork',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Air Jowih concept',
    area: 'Aviation',
    image: '/documents/sample%20images/airjowih1.png',
    alt: 'Concept artwork for a proposed African aviation service',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Integrated corridor concept',
    area: 'Infrastructure',
    image: '/documents/sample%20images/corridor%202.png',
    alt: 'Concept illustration of proposed integrated infrastructure corridors',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Education framework',
    area: 'Education',
    image: '/documents/sample%20images/edujowih.png',
    alt: 'Concept artwork for proposed Jowih education programs',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Environmental framework',
    area: 'Environment',
    image: '/documents/sample%20images/environmental%20framework.png',
    alt: 'Concept artwork for proposed environmental and community systems',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Game development concept',
    area: 'Creative economy',
    image: '/documents/sample%20images/gameon.jpeg',
    alt: 'Illustrative gaming and creative-economy artwork',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Gaming framework',
    area: 'Creative economy',
    image: '/documents/sample%20images/gaming.png',
    alt: 'Concept artwork for proposed African gaming initiatives',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Animation & gaming hub',
    area: 'Creative economy',
    image: '/documents/sample%20images/gaminghub.png',
    alt: 'Concept illustration of a proposed animation and gaming hub',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Africa Health Fund',
    area: 'Health',
    image: '/documents/sample%20images/jowih%20africa%20health%20fund.png',
    alt: 'Concept artwork for the proposed Africa Health Fund',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Community Development Enterprises',
    area: 'Community',
    image: '/documents/sample%20images/jowihCDEs.png',
    alt: 'Illustrative framework graphic for proposed Community Development Enterprises',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Capsule transit in Africa',
    area: 'Transport',
    image: '/documents/sample%20images/jowihcrtafrica.png',
    alt: 'Concept rendering of a proposed Jowih capsule rapid transit system in Africa',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Capsule rapid transit program',
    area: 'Transport',
    image: '/documents/sample%20images/jowihcrtprogram.png',
    alt: 'Concept graphic for the proposed Capsule Rapid Transit program',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Zairo creative concept',
    area: 'Creative economy',
    image: '/documents/sample%20images/jowihcrtzairo.png',
    alt: 'Illustrative creative artwork associated with the proposed Zairo story concept',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Jowih identity mark',
    area: 'Identity',
    image: '/assets/foundation%20logo.png',
    alt: 'Jowih Foundation identity mark — Africa cradled by hands beneath three stars',
    disclosure: 'Brand asset',
  },
  {
    title: 'Robovan mobility concept',
    area: 'Transport',
    image: '/documents/sample%20images/jowihrobovan.png',
    alt: 'Concept rendering of a proposed Jowih electric robovan',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'Powered by Jowih identity',
    area: 'Identity',
    image: '/documents/sample%20images/powered%20by%20jowih.png',
    alt: 'Powered by Jowih identity graphic supplied with the source materials',
    disclosure: 'Brand asset',
  },
  {
    title: 'Transport corridor concept',
    area: 'Transport',
    image: '/documents/sample%20images/transportcoridor.png',
    alt: 'Concept rendering of a proposed transport corridor',
    disclosure: 'AI-assisted concept image',
  },
  {
    title: 'African Sovereign Space Capability Blueprint',
    area: 'Space capability',
    image: '/documents/sample%20images/picture5.png',
    alt: 'AI-assisted GAG source illustration describing a proposed African Sovereign Space Capability Blueprint',
    disclosure: 'AI-assisted source-document concept board',
  },
  {
    title: 'Jowih flag',
    area: 'Foundation identity',
    image: '/documents/sample%20images/jowih%20flag.png',
    alt: 'Jowih flag supplied with the source materials',
    disclosure: 'Brand asset',
  },
];

const legalFirms = [
  ['Mauritius', 'One firm', 'Foundation, VCC and licensing pathway'],
  ['Singapore', 'One firm', 'IP vault and technology holding structure'],
  ['Mainland Africa', 'Three firms', 'ADFA coordination and host-jurisdiction compliance'],
];

const structuralUses = [
  'Jowih Foundation and constitutional registration',
  'Purpose Trust, Founder Family Trust and Combined Trusts Board',
  'Jowih Holdings Limited and Jowih Group setup',
  'Proposed Master Ecosystem Fund / Mauritius VCC legal work',
  'Core operating subsidiaries and Jowih Protective Services',
  'New Dawn City and related project-entity structures',
  'Legal, regulatory and registration fees across the relevant jurisdictions',
  'Initial professional, compliance and structural setup costs',
];

// Priority areas, presented AU/UN-style as click-to-open expandable columns.
const priorityAreas: ExpandableItem[] = [
  {
    number: '01',
    title: 'Institutional & Legal Architecture',
    summary: 'Constitution, trusts, holdings and the proposed Mauritius VCC — registered before any invitation to invest.',
    body: (
      <>
        <p>
          The pre-launch work establishes the constitutional, trust and corporate layers that hold the ecosystem
          together: the Foundation and its governance, a Purpose Trust and Founder Family Trust, Jowih Holdings
          Limited and its operating Group, and the proposed Master Ecosystem Fund structured as a Mauritius Variable
          Capital Company (VCC).
        </p>
        <p>
          These instruments are drafted to separate stewardship from economic interest, so that mission control and
          commercial return never blur into one another. Registration is completed across the relevant jurisdictions
          before investment is invited.
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'Infrastructure & the Great African Grid',
    summary: 'A proposed coordination framework for energy, logistics and digital corridors across the continent.',
    body: (
      <>
        <p>
          The Great African Grid (GAG) is a proposed infrastructure and economic coordination framework — not a
          supranational authority. Its seven corridors are intended to run in parallel with national systems and
          existing operators, connecting energy, logistics, data and settlement.
        </p>
        <ul>
          <li>Voluntary participation by states through bilateral agreements</li>
          <li>Delivery may be state-funded, foundation-funded or jointly funded</li>
          <li>Ownership and responsibilities defined per agreement under local law</li>
        </ul>
      </>
    ),
  },
  {
    number: '03',
    title: 'Digital Public Infrastructure (ASTA OS)',
    summary: 'The operating layer underneath first-party services and authorised external applications.',
    body: (
      <>
        <p>
          ASTA OS is the shared technical infrastructure on which the first-party services operate — Dotkom
          Messenger, Dotkom Marketplace, Asta Wallet, Dotkom Social, Asta Store and Asta Search — and the same
          infrastructure made available to authorised external developers.
        </p>
        <p>
          The Super App is one expression of ASTA OS, not the whole of it. It functions alongside a wider digital and
          physical ecosystem, and remains optional rather than the only entry point.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Capital Formation & the Master Ecosystem Fund',
    summary: 'A proposed VCC fund separating downstream economic rights from upstream control rights.',
    body: (
      <>
        <p>
          The proposed Master Ecosystem Fund holds vaulted shares through VCC sub-fund compartments. The Fund, as legal
          owner, holds the attached voting rights; unit holders carry economic exposure only, with no direct voting or
          governance rights over the underlying companies or the Foundation.
        </p>
        <p>
          Cross-border settlement is designed to remain compliant with exchange-control regulations in each host
          jurisdiction. All structures remain proposals until registered and independently verified.
        </p>
      </>
    ),
  },
  {
    number: '05',
    title: 'Continental Coordination & Participation',
    summary: 'Regional foundation coordination and a voluntary participation framework for participating states.',
    body: (
      <>
        <p>
          Regional coordination is planned through Foundation offices and a voluntary framework — ADFA — under which
          participating states engage by agreement rather than by delegated authority.
        </p>
        <p>
          Participation is intended to complement, not displace, national institutions and existing regional bodies,
          keeping the Foundation&apos;s role coordinating rather than governing.
        </p>
      </>
    ),
  },
];

/**
 * Small table renderer for the "What Jowih Is" content, matching the table
 * markup used elsewhere in the site (see app/governance/page.tsx).
 */
function WhatJowihTable({
  headers,
  rows,
  boldFirstColumn = false,
}: {
  headers: string[];
  rows: string[][];
  boldFirstColumn?: boolean;
}) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
            {headers.map((header, headerIndex) => (
              <th key={headerIndex} className="text-left p-3 uppercase tracking-tight">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid var(--line-light)' }}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`p-3${boldFirstColumn && cellIndex === 0 ? ' font-bold' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * "What Jowih Is" — content extracted verbatim from the document
 * "What Jowih Is.docx" (Documents). One collapsed item per heading so the
 * section stays compact on the home page until a heading is opened.
 */
const whatJowihIs: ExpandableItem[] = [
  {
    number: '01',
    title: 'What Jowih Is',
    summary: 'A development-focused organization complementing the African Union and national governments with execution capacity.',
    body: (
      <>
        <p>
          Jowih is a development-focused organization designed to complement the African Union and national governments
          by providing execution capacity in areas where frameworks and policies already exist but require structured
          implementation support.
        </p>
        <p>
          The African Union operates primarily as a political,development and policy body. It sets frameworks,
          coordinates member states, and represents the continent on the global stage. These are essential functions.
          They provide the direction and legitimacy that continental development requires.
        </p>
        <p>
          What Africa has often needed alongside these frameworks is a partner dedicated specifically to execution — an
          organization that can work with the AU, national governments, and the private sector to help translate
          continental frameworks like AfCFTA and Agenda 2063 into tangible projects and measurable outcomes. It does
          this by reinvesting 90% of its revenue to developments and 54 country pots yearly.
        </p>
        <p>
          Jowih is designed to serve that complementary role. It does not replace the AU. It does not replace national
          governments. It works alongside them — mobilizing capital, coordinating delivery partners, and building the
          infrastructure and systems through which shared development goals can be realized.
        </p>
        <p>That is what Jowih is. Not a competitor. A partner in execution.</p>
      </>
    ),
  },
  {
    number: '02',
    title: 'How Jowih Works With the AU',
    summary: 'Shares the goals of the AU — complementing rather than competing with or replacing it.',
    body: (
      <>
        <p>
          Jowih shares the AU&apos;s goals. It does not compete with the AU. It does not replace the AU. It complements
          the AU.
        </p>
        <WhatJowihTable
          headers={['The AU Provides', 'Jowih Provides']}
          rows={[
            ['Political, development coordination', 'Execution capacity'],
            ['Policy frameworks', 'Project delivery'],
            ['Continental representation', 'Capital mobilization'],
            ['Agenda 2063', 'Implementation alongside The GAG initiative'],
            ['AfCFTA', 'Trade infrastructure'],
          ]}
        />
        <p>
          Jowih is designed to work hand in hand with the African Union — accelerating AfCFTA, supporting Agenda 2063,
          and turning frameworks into physical and economic reality.
        </p>
      </>
    ),
  },
  {
    number: '03',
    title: 'How Jowih Works With National Governments',
    summary: 'Sovereign partnership through the Accelerated Development Framework Agreement (ADFA).',
    body: (
      <>
        <p>Jowih works with sovereign African states through the Accelerated Development Framework Agreement (ADFA).</p>
        <p>
          ADFA is a bilateral or multilateral agreement with the State as a perpetual legal entity — not with any
          particular government, administration, ministry, or official. It endures beyond elections, coups, revolutions,
          and constitutional reforms. The Foundation invests in nations, not administrations.
        </p>
        <p>
          ADFA is structured for 20-year cycles, renewed automatically on agreements, aligned with the Jowih 2045
          Horizon.
        </p>
        <p>
          <strong>ADFA provides three execution models:</strong>
        </p>
        <WhatJowihTable
          headers={['Model', 'Who Funds', 'Who Owns']}
          rows={[
            ['Model A — State-Funded', 'The participating state', 'The state'],
            ['Model B — Foundation-Funded', 'The Jowih Foundation', 'The Foundation under Asset Lock'],
            ['Model C — Joint-Funded', 'State and Foundation jointly', 'Per agreed structure'],
          ]}
          boldFirstColumn
        />
        <p>Each country participates according to its own priorities, fiscal capacity, and legal requirements.</p>
      </>
    ),
  },
  {
    number: '04',
    title: 'How Jowih Is Structured',
    summary: 'Three layers: governance, execution and financial.',
    body: (
      <>
        <p>Jowih operates through three layers:</p>
        <WhatJowihTable
          headers={['Layer', 'Function']}
          rows={[
            [
              'Governance Layer',
              'The JOWIH Foundation, Purpose Trust, Founder Family Trust, Jowih Holdings and the Asset Lock. Mission protection.',
            ],
            [
              'Execution Layer',
              'Jowih Group, the Great African Grid, the seven corridors, and the Pool of Companies. Project delivery.',
            ],
            [
              'Financial Layer',
              'The Grid Bond, the Mission Fund,Jowih Credits and the Jowih Ecosystem Fund. Capital mobilization.',
            ],
          ]}
          boldFirstColumn
        />
      </>
    ),
  },
  {
    number: '05',
    title: 'Project Execution',
    summary: 'Jowih Group, the commercial execution arm, across the seven corridors of the Great African Grid.',
    body: (
      <>
        <p>
          Project execution is delivered through Jowih Group, the commercial execution arm of the Jowih ecosystem,
          operating under the strategic direction of Jowih Holdings.
        </p>
        <p>
          Jowih Group builds, operates, and manages the commercial subsidiaries across the Great African Grid&apos;s
          seven corridors:
        </p>
        <WhatJowihTable
          headers={['#', 'Corridor', 'Function']}
          rows={[
            ['1', 'Transport', 'Moving people and goods'],
            ['2', 'Industrial & Manufacturing', "Building Africa's production capacity"],
            ['3', 'Energy', 'Powering everything'],
            ['4', 'Digital', 'Connecting everyone and powering the digital economy'],
            ['5', 'Payment', 'Moving value'],
            ['6', 'Service', 'Health, education, and empowerment'],
            ['7', 'Space Capability', 'Building African capability in space innovation'],
          ]}
        />
      </>
    ),
  },
  {
    number: '06',
    title: 'How Jowih Is Funded',
    summary: 'Initial capital from the African diaspora through the one-time Grid Bond activation instrument.',
    body: (
      <>
        <p>The initial capital comes from the African diaspora and Africans at large.</p>
        <p>
          The African diaspora represents a combined net worth of approximately US$1 trillion. This is one of the
          largest pools of African capital in the world. It is also one of the least structured when it comes to
          long-term continental development.
        </p>
        <p>
          The diaspora also sends over US$100 billion in remittances to Africa every year. Most of it is consumed. Some
          of it is invested. But none of it is structured as long-term development capital.
        </p>
        <p>
          Jowih&apos;s proposition is simple: if the diaspora can be shown a credible, well-governed, long-term
          development architecture, they may be willing to invest roughly US$100 billion into the Grid Bond.
        </p>
        <p>
          <strong>The Grid Bond is a one-time activation capital instrument. It is designed to fund:</strong>
        </p>
        <ul>
          <li>Strategic acquisitions</li>
          <li>Strategic stakes in global companies per corridor</li>
          <li>Technology transfer and licenses.</li>
          <li>Exchange programs and workforce training</li>
          <li>Research and Development Centers</li>
          <li>Major STEM university</li>
          <li>Initial Phase of Propose New Dawn City. The economic powerhouse of Africa. Shenzhen capabilities.</li>
          <li>The initial phase of the Great African Grid</li>
          <li>Initial Country Pot allocations for development</li>
        </ul>
      </>
    ),
  },
  {
    number: '07',
    title: 'The Grid Bond',
    summary: 'Interest deferred for the first four-five years while the ecosystem is built and revenue created.',
    body: (
      <>
        <p>The Grid Bond is structured with interest payments (5.0 - 5.4 )deferred for the first four-five years.</p>
        <p>During those five years, Jowih focuses on building and revenue creation.</p>
        <p>
          Meanwhile, the Mission Fund continues to receive revenue from acquisitions, stakes, new companies, and
          ecosystem activity. By Year 5, the Mission Fund is projected to receive approximately US$44 billion per year
          across its ecosystem in the continent and globally.
        </p>
        <p>That is more than enough to cover the first interest payments on the Grid Bond by a wide margin.</p>
      </>
    ),
  },
  {
    number: '08',
    title: 'Project Execution',
    summary: 'The Pool of Companies — pre-qualified private sector developers across three project tiers.',
    body: (
      <>
        <p>
          Most project execution is delivered through the Pool of Companies — a pre-qualified, pre-vetted pool of
          private sector developers across the continent.
        </p>
        <p>
          <strong>The Pool of Companies operates across three tiers:</strong>
        </p>
        <WhatJowihTable
          headers={['Tier', 'Scope']}
          rows={[
            ['Tier 1', 'Continental Defining Projects'],
            ['Tier 2', 'National Strategic Projects'],
            ['Tier 3', 'Local / CDE Projects'],
          ]}
          boldFirstColumn
        />
        <p>
          Pre-qualification eliminates tendering delays. Competition is maintained with pools. Market balance is
          preserved — Foundation projects are additional, not substitutional.
        </p>
      </>
    ),
  },
  {
    number: '09',
    title: 'The Jowih Ecosystem Fund',
    summary: 'The regulated investment vehicle through which citizens and the diaspora participate in the commercial ecosystem.',
    body: (
      <>
        <p>
          The Grid Bond builds the foundation. The Jowih Ecosystem Fund is participation in the commercial ecosystem
          that follows.
        </p>
        <p>
          The Jowih Ecosystem Fund is the regulated investment vehicle through which African citizens and the diaspora
          participate economically in eligible Jowih commercial enterprises. It is organized around the Jowih 100 → 500
          Index — the definitive index of the top eligible companies in Africa, including Jowih&apos;s own operating
          companies and qualified ecosystem partners.
        </p>
        <WhatJowihTable
          headers={['Bucket', 'Weight', 'Composition']}
          rows={[
            ['Jowih Core', '30%', 'Qualified Jowih Group companies and Jowih-origin commercial enterprises'],
            [
              'Ecosystem Partners',
              '70%',
              'Qualified third-party African enterprises across logistics, energy, fintech, agritech, utilities, infrastructure, manufacturing, healthcare, and education',
            ],
          ]}
          boldFirstColumn
        />
        <p>
          The Fund vaults qualifying assets, issues regulated non-voting investment units, and provides NAV exposure to
          the Index.
        </p>
      </>
    ),
  },
  {
    number: '10',
    title: 'What the Ecosystem Fund Is Not',
    summary: 'Using, integrating or investing does not grant ownership or constitutional authority over the Foundation.',
    body: (
      <>
        <p>
          Using a Jowih service does not make you an owner of the Foundation. Integrating a business with Jowih does
          not give that business control of the Foundation. Investing in eligible commercial assets does not grant
          constitutional authority over the mission.
        </p>
        <p>The mission layer is protected. The commercial layer is investable. The two are separated by design.</p>
      </>
    ),
  },
  {
    number: '11',
    title: 'How the Fund Works',
    summary: 'Allocation follows the value of qualifying assets vaulted, with a separately capped Neutral Reserve.',
    body: (
      <>
        <p>
          Capital allocation follows the independently established dollar value of qualifying assets vaulted — not the
          nominal equity percentage deposited. A 5% stake in a US$1B company may receive more allocation than a 49%
          stake in a US$20M company.
        </p>
        <p>
          The Fund also includes a separately capped Neutral Reserve — up to 10% of total Fund NAV — for qualifying
          neutral assets such as land. Land in the Neutral Reserve appreciates when development happens around it.
          Because no new units are minted, the appreciation flows directly to NAV per unit. Unit holders&apos; units
          appreciate without dilution.
        </p>
      </>
    ),
  },
  {
    number: '12',
    title: 'The Difference Between the Two',
    summary: 'The Grid Bond and the Ecosystem Fund compared side by side.',
    body: (
      <>
        <WhatJowihTable
          headers={['', 'Grid Bond', 'Ecosystem Fund']}
          rows={[
            ['Purpose', 'Activation capital', 'Ongoing economic participation'],
            ['Type', 'One-time instrument', 'Regulated investment vehicle'],
            ['When', 'Before the ecosystem is built', 'After the ecosystem is operational'],
            ['Who', 'Citizens, diaspora, global participants', 'Citizens, diaspora, permitted investors'],
            ['Return', 'Defined bond return (5.0–5.6%)', 'NAV exposure and distributions'],
            ['Governance', 'None', 'None'],
          ]}
          boldFirstColumn
        />
        <p>
          The Grid Bond activates the system. The Ecosystem Fund is how citizens and the diaspora participate in its
          long-term economic performance.
        </p>
      </>
    ),
  },
  {
    number: '13',
    title: 'The Horizon',
    summary: 'From Year 5 onward — scaling infrastructure and moving toward First World Africa by 2045.',
    body: (
      <>
        <p>
          From Year 5 onward, Jowih moves into the next phase of the 2045 Horizon — scaling infrastructure, expanding
          the corridors, deepening continental integration, and moving toward First World Africa.
        </p>
        <p>The vision extends beyond 2045. But the first milestone is 2045.</p>
      </>
    ),
  },
];

export function InstitutionalHome() {
  return (
    <div className="institutional-home">
      <section className="institutional-hero" aria-labelledby="institutional-title">
        <InstitutionalHeroSlideshow />
      </section>

      <section className="institutional-hero-content" aria-labelledby="institutional-title">
        <div className="institutional-container">
          <div className="institutional-eyebrow institutional-eyebrow--light">
            <span className="institutional-status-dot" />
            A continental development framework
          </div>
          <p className="institutional-hero__overline">JOWIH FOUNDATION · GREAT AFRICAN GRID · ASTA OS</p>
          <h1 id="institutional-title">A connected foundation for Africa&apos;s next era of development.</h1>
          <p className="institutional-hero__intro">
            Jowih is designed to connect infrastructure, services, capital and technology through a mission-led,
            sovereignty-respecting framework. It is a plan for cooperation and delivery, not a government or a single project.
          </p>
          <div className="institutional-hero__actions">
            <Link className="institutional-button institutional-button--gold" href="/donate">
              Pre-launch support <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
            <Link className="institutional-button institutional-button--outline" href="/documents">
              Read the documents <FileText aria-hidden="true" size={17} />
            </Link>
            <Link className="institutional-button institutional-button--outline" href="/partner">
              Partner / sponsor the launch <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <p className="institutional-hero__note">Support contributions, not investments. No financial return or ownership is offered.</p>
        </div>
      </section>

      <section className="institutional-principles" aria-label="Institutional principles">
        <div className="institutional-container institutional-principles__grid">
          <span><ShieldCheck aria-hidden="true" /> Sovereignty remains with participating states</span>
          <span><Network aria-hidden="true" /> Integrate and enable existing systems</span>
          <span><Landmark aria-hidden="true" /> Mission separated from commercial execution</span>
          <span><Check aria-hidden="true" /> Plans and status stated transparently</span>
        </div>
      </section>

      <InstitutionalNews />

      <section className="institutional-section institutional-section--paper" id="priorities" aria-label="Priority areas">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div>
              <p className="institutional-eyebrow">01 / PRIORITY AREAS</p>
              <h2>Five interconnected workstreams.</h2>
            </div>
            <p>
              The Foundation&apos;s work is organised into five priority areas that advance together. Select any area to
              read how it is structured and how it relates to the wider mission.
            </p>
          </div>
          <InstitutionalExpandable items={priorityAreas} />
        </div>
      </section>

      <section className="institutional-section institutional-section--paper" id="prelaunch">
        <div className="institutional-container">
          <div className="institutional-section-heading">
            <p className="institutional-eyebrow">001 / PRE-LAUNCH PHASE</p>
            <h2>Building the Institution</h2>
          </div>

          <div className="space-y-8">
            <InstitutionalExpandable items={whatJowihIs} />

            <div className="p-6" style={{ background: 'var(--ink)', color: 'var(--white)', border: '2px solid var(--line-light)' }}>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">See Jowih from its documents</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
                What is summarised above is set out in full in the Jowih documents — the Foundation, the Great African
                Grid, ADFA, the Grid Bond and the Jowih Ecosystem Fund. To understand Jowih properly, read it at its
                source.
              </p>
              <Link href="/documents" className="institutional-button institutional-button--gold">
                Open the documents <FileText aria-hidden="true" size={17} />
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Three Interconnected Institutional Components</h3>
              <div className="space-y-4">
                <div className="p-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
                  <p className="font-bold mb-1">The Great African Grid (GAG)</p>
                  <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                    The continental development and infrastructure framework, operating across seven strategic corridors: Transport, Industrial & Manufacturing, Energy, Digital, Payment, Service, and Space Capability.
                  </p>
                </div>
                <div className="p-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
                  <p className="font-bold mb-1">Jowih Continental OS (Asta)</p>
                  <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                    The continental digital infrastructure and orchestration layer designed to enable interoperable digital activity among people, businesses, governments, developers, financial institutions, technology platforms, service providers, and physical infrastructure.
                  </p>
                </div>
                <div className="p-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
                  <p className="font-bold mb-1">The JOWIH Foundation</p>
                  <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                    The mission-locked institutional foundation, structured to protect the long-term development mandate and coordinate the wider ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Supporting Components</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brass)' }}>•</span>
                  <span><strong>Jowih Credits</strong> — the settlement layer for cross-border exchange.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brass)' }}>•</span>
                  <span><strong>ADFA (Accelerated Development Framework Agreement)</strong> — the framework for structured cooperation with 54 African states.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brass)' }}>•</span>
                  <span><strong>The Jowih Ecosystem Fund</strong> — the regulated investment vehicle for citizens and the diaspora.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brass)' }}>•</span>
                  <span><strong>The Mission Fund</strong> — where 90% of designated ecosystem revenue flows, financing development across the continent. Not debt. Development budgets.</span>
                </li>
              </ul>
            </div>

            <div className="p-6" style={{ background: 'var(--ink)', color: 'var(--white)', border: '2px solid var(--line-light)' }}>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">The Pre-Launch Phase</h3>
              <p className="text-base leading-relaxed mb-4">
                The pre-launch phase is defined as a donation-only period. It is not an investment offer, and it does not constitute a solicitation of capital in exchange for equity, ownership, or financial return.
              </p>
              <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--brass)' }}>
                Its stated purpose is fourfold:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--brass)', color: 'var(--ink)' }}>1</span>
                  <span>To present the proposed architecture publicly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--brass)', color: 'var(--ink)' }}>2</span>
                  <span>To invite scrutiny, debate, and challenge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--brass)', color: 'var(--ink)' }}>3</span>
                  <span>To select legal counsel across the relevant jurisdictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--brass)', color: 'var(--ink)' }}>4</span>
                  <span>To fund the registration and structural setup work required to establish the planned entities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="institutional-donation-banner">
            <div className="institutional-donation-banner__icon"><CircleDollarSign aria-hidden="true" size={26} /></div>
            <div>
              <h3>Support contributions fund structural setup. They do not buy a stake.</h3>
              <p>
                No return, interest, equity, voting rights or ownership is promised. The requested model is for contributions to
                be held by one independent, publicly supported law trust, with public reporting and accountable administration,
                until structures are registered. The arrangement remains subject to legal advice and execution.
              </p>
            </div>
            <Link href="/donate" aria-label="Read about pre-launch support"><ArrowRight aria-hidden="true" /></Link>
          </div>

          <div className="institutional-timeline">
            {prelaunchSteps.map(([time, title, text], index) => (
              <article className="institutional-timeline__step" key={time}>
                <span className="institutional-timeline__number">0{index + 1}</span>
                <p className="institutional-timeline__time">{time}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="institutional-legal-grid">
            <div className="institutional-legal-grid__intro">
              <p className="institutional-eyebrow">PROPOSED LEGAL COORDINATION</p>
              <h3>Five firms. Three jurisdictions. One coordinated setup.</h3>
              <p>These are the intended appointments, not firms already selected or engaged.</p>
            </div>
            {legalFirms.map(([region, count, role]) => (
              <div className="institutional-legal-grid__item" key={region}>
                <Landmark aria-hidden="true" size={19} />
                <span>{region}</span>
                <strong>{count}</strong>
                <p>{role}</p>
              </div>
            ))}
          </div>

          <div className="institutional-counsel-note">
            <p className="institutional-eyebrow">COUNSEL SELECTION · MAURITIUS OUTREACH</p>
            <h3>Written approach to Mauritius counsel</h3>
            <p>
              In furtherance of the pre-launch mandate to establish the proposed structures before any invitation to
              support, the Foundation has dispatched written correspondence to the three principal law firms in the
              Republic of Mauritius. The correspondence sets out the Foundation&apos;s interest in each firm&apos;s
              capabilities and invites them to advise on the Mauritius pathway — specifically the foundation vehicle,
              the Variable Capital Company (VCC) sub-fund architecture, and the associated licensing considerations.
            </p>
            <p>
              Such correspondence constitutes an expression of interest only. It is not, and shall not be construed as,
              an instruction to proceed. No firm has been formally retained, engaged or appointed, and no retainer,
              engagement letter or mandate has been executed. Any appointment remains conditional upon competitive
              evaluation, conflicts clearance, due diligence, and the execution of formal engagement terms on
              mutually agreed instructions.
            </p>
            <p className="institutional-counsel-note__meta">
              Status: Expression of interest dispatched · No engagement executed · Subject to contract
            </p>
          </div>

          <p className="institutional-legal-note">
            The five-firm structure and law-trust support holding arrangement are proposed pre-launch plans. They are not
            evidence of incorporation, appointment, licensing or an active trust account. Support instructions will only be
            published after the receiving structure and account are independently verified.
          </p>

          <div className="institutional-uses">
            <div className="institutional-uses__heading">
              <p className="institutional-eyebrow">INTENDED USE OF PRE-LAUNCH SUPPORT</p>
              <h3>Register the structures before inviting investment.</h3>
              <p>These are intended setup categories from the pre-launch plan, not proof of completed registration or an authorization to collect funds today.</p>
            </div>
            <ul>
              {structuralUses.map((use, index) => (
                <li key={use}><span>{String(index + 1).padStart(2, '0')}</span>{use}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--ink">
        <div className="institutional-container institutional-architecture">
          <div className="institutional-section-heading institutional-section-heading--light">
            <p className="institutional-eyebrow institutional-eyebrow--gold">02 / INSTITUTIONAL ARCHITECTURE</p>
            <h2>Distinct roles. A shared mission.</h2>
            <p>
              The constitutional draft separates mission stewardship, trust protection, company ownership, operations,
              infrastructure, digital rails, state agreements, participation and funding.
            </p>
          </div>
          <div className="institutional-layer-list">
            {layers.map(([title, text, href], index) => (
              <Link className="institutional-layer" href={href} key={title} aria-label={`Learn more about ${title}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            ))}
          </div>
          <div className="institutional-caveat institutional-caveat--dark">
            <ShieldCheck aria-hidden="true" />
            <p>Constitution, trusts, holding company, fund and leadership structures shown here are proposed and subject to legal establishment.</p>
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--paper">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div>
              <p className="institutional-eyebrow">03 / DEVELOPMENT MANDATE</p>
              <h2>Four pillars, planned to advance together.</h2>
            </div>
            <p>The Foundation draft organizes its development objectives around essential services, human capability, innovation and future readiness.</p>
          </div>
          <div className="institutional-pillar-grid">
            {pillars.map(({ number, title, text, icon: Icon }) => (
              <article className="institutional-pillar" key={number}>
                <div className="institutional-pillar__top"><span>{number}</span><Icon aria-hidden="true" size={23} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--sage">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div>
              <p className="institutional-eyebrow">04 / THE GREAT AFRICAN GRID</p>
              <h2>Seven corridors. One coordinating framework.</h2>
            </div>
            <p>
              The GAG is a proposed infrastructure and economic coordination framework, not a supranational authority. Its
              corridors are intended to operate in parallel and complement national systems and existing operators.
            </p>
          </div>
          <div className="institutional-corridor-layout">
            <div className="institutional-corridor-list">
              {corridors.map((corridor) => (
                <article className="institutional-corridor" key={corridor.number}>
                  <span>{corridor.number}</span>
                  <div><h3>{corridor.name}</h3><p>{corridor.detail}</p></div>
                  <ArrowUpRight aria-hidden="true" size={17} />
                </article>
              ))}
            </div>
            <figure className="institutional-corridor-figure">
              <Image
                src="/documents/sample%20images/The%20Great%20African%20Grid.png"
                alt="AI-assisted concept illustration showing proposed Great African Grid projects and corridors"
                width={1200}
                height={800}
                sizes="(max-width: 800px) 100vw, 45vw"
              />
              <figcaption><span>Illustrative concept</span> AI-assisted visual; projects and facilities shown are proposed, not represented as built or operating.</figcaption>
            </figure>
          </div>
          <div className="institutional-adfa-strip">
            <div><Waypoints aria-hidden="true" /><h3>ADFA: a voluntary framework with participating states</h3></div>
            <p>
              The draft proposes bilateral agreements with states that choose to participate. Project delivery may be state-funded,
              foundation-funded or jointly funded, with ownership and responsibilities defined in each agreement and under local law.
            </p>
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--ink">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div>
              <p className="institutional-eyebrow institutional-eyebrow--gold">PARTNERSHIP & COMMUNITY</p>
              <h2>Build the ecosystem together.</h2>
            </div>
            <p>The Jowih ecosystem is built on partnership and community. Whether you want to sponsor an event, contribute your skills as a developer, or bring your organization into the ecosystem, there&apos;s a place for you.</p>
          </div>
          <div className="institutional-partnership-grid">
            {[
              {
                title: 'Support Pre-Launch',
                description: 'Support the pre-launch structural setup. Your contribution helps fund legal registration, trust establishment, and initial organizational costs to build the Foundation\'s independent governance structure.',
                type: 'Contribution',
                icon: CircleDollarSign,
                href: '/donate'
              },
              {
                title: 'Sponsor the Launch',
                description: 'Support pre-launch and full launch events through financial sponsorship, in-kind contributions, venue provision, production support, or media collaboration. Sponsorship provides visibility and helps create impactful launch experiences.',
                type: 'Sponsorship',
                icon: Award,
                href: '/partner/sponsor'
              },
              {
                title: 'Founding Supporters',
                description: 'Recognition for early supporters who contribute during the pre-launch phase. Founding supporters are acknowledged for their role in establishing the independent governance structures and foundational systems.',
                type: 'Recognition',
                icon: ShieldCheck,
                href: '/donate'
              },
              {
                title: 'Partner Community',
                description: 'Join the ecosystem partnership community and submit your capabilities to help build Africa\'s next chapter. Whether you offer infrastructure, technology, financial services, research, or expertise—your contribution can accelerate continental development.',
                type: 'Partnership',
                icon: Users,
                href: '/partner/community'
              },
              {
                title: 'Developer Community',
                description: 'Technical community for developers who want to build on ASTA OS, GAG infrastructure, and Jowih platforms. Contribute your skills to create APIs, applications, digital systems, and the technology infrastructure that will serve millions across Africa.',
                type: 'Technical',
                icon: Code,
                href: '/partner/developer'
              },
              {
                title: 'Diaspora Network',
                description: 'African diaspora organizations and individuals looking to connect and contribute from abroad. Your global perspective, resources, and networks can help bridge continents and accelerate development in your home countries.',
                type: 'Engagement',
                icon: Globe,
                href: '/partner/diaspora'
              },
              {
                title: 'Institutional Partnership',
                description: 'Universities, research institutions, ADFA states, and development organizations for collaboration and integration. Academic partnerships drive R&D, while state partnerships enable the Accelerated Development Framework Agreement.',
                type: 'Partnership',
                icon: Building2,
                href: '/partner/institutional'
              },
              {
                title: 'Investor Community (Future)',
                description: 'Register interest in future bond and fund structures. The proposed Master Ecosystem Fund and Grid Bond are investment vehicles subject to legal establishment, regulatory approval, and market conditions. Interest registration begins the conversation.',
                type: 'Future Investment',
                icon: Rocket,
                href: '/investor'
              },
              {
                title: 'Volunteers',
                description: 'Contribute your time and skills to help build the ecosystem. Whether you\'re a researcher, educator, professional, or student—your volunteer time can support various aspects of planning, outreach, and community engagement.',
                type: 'Volunteer',
                icon: HeartHandshake,
                href: '/partner/volunteer'
              },
              {
                title: 'CDE Participation',
                description: 'Participate through Community Development Enterprises. CDEs are locally-led enterprises that deliver essential services—health, education, water, agriculture—while remaining accountable to their communities and the Foundation\'s mission.',
                type: 'Community',
                icon: Building2,
                href: '/partner/cde'
              },
              {
                title: 'Landowners',
                description: 'Participate through the Land Acquisition & Settlement Facility. Landowners can contribute land for development projects in exchange for Master Fund Units or cash, enabling infrastructure while respecting property rights and sovereignty.',
                type: 'Participation',
                icon: Landmark,
                href: '/partner/land'
              },
              {
                title: 'Media',
                description: 'Journalists, content creators, and media organizations can help tell the story of Africa\'s development. Accurate, thoughtful coverage builds public understanding and supports transparent communication about the ecosystem\'s progress.',
                type: 'Media',
                icon: Newspaper,
                href: '/partner/media'
              }
            ].map(({ title, description, type, icon: Icon, href }) => (
              <Link href={href} key={title} className="institutional-partnership-card">
                <div className="institutional-partnership-card__icon"><Icon aria-hidden="true" size={24} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="institutional-partnership-card__type">{type}</span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            ))}
          </div>
          <div className="institutional-partnership-cta">
            <Link href="/partner" className="institutional-button institutional-button--gold">
              Explore all partnership pathways <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--paper">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div>
              <p className="institutional-eyebrow">05 / PEOPLE & LOCAL DELIVERY</p>
              <h2>Community participation is part of the operating model.</h2>
            </div>
            <p>Country and community priorities are intended to shape project selection; implementation and funds remain subject to review, verification and applicable law.</p>
          </div>
          <div className="institutional-cde-grid">
            {[
              ['01', 'Education & scholarship', 'Local learning, training and access to opportunity.'],
              ['02', 'Agriculture & food security', 'Productivity, food systems, storage and market access.'],
              ['03', 'Health & wellness', 'Community health access and locally relevant services.'],
              ['04', 'Infrastructure & energy', 'Essential local infrastructure and resilient energy.'],
              ['05', 'Digital & innovation', 'Connectivity, digital skills and community innovation.'],
            ].map(([number, title, text]) => (
              <article className="institutional-cde" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="institutional-accountability">
            <div><ShieldCheck aria-hidden="true" /><h3>Controls are part of the design.</h3></div>
            <ul>
              <li>Proposed direct, milestone-based disbursements to verified vendors and beneficiaries.</li>
              <li>Community consultation, local adaptation and safeguarding obligations.</li>
              <li>Independent audit and public reporting structures in the draft constitution.</li>
              <li>Data minimization, consent, security and jurisdictional compliance for ASTA services.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--sage">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div><p className="institutional-eyebrow">06 / PROPOSED IMPLEMENTATION PORTFOLIO</p><h2>Programs connect the corridors to daily life.</h2></div>
            <p>The source papers describe these as frameworks and long-term plans. Scope, sequencing and feasibility depend on funding, partners, jurisdiction and approval.</p>
          </div>
          <div className="institutional-program-grid">
            {[
              ['Mobility & logistics', 'Capsule Rapid Transit, urban and intercity corridors, air travel integration, airport zones and last-mile logistics.'],
              ['Energy & resilience', 'Renewable generation, storage, micro-grids, connectivity to industrial and community services.'],
              ['Education & workforce', 'STEM labs, schools in underserved areas, teaching support, training and exchange pathways.'],
              ['Health access', 'Mobile clinics, proposed health-financing support, county facilities and referral pathways.'],
              ['Housing & urbanization', 'Community consultation, modular housing concepts, local infrastructure and proposed New Dawn City planning.'],
              ['Research & industry', 'Six proposed R&D areas: health; water and agriculture; energy; AI, technology and robotics; infrastructure; and mining.'],
              ['Creative economy', 'Animation, gaming, African intellectual property, training and distribution opportunities.'],
              ['Digital inclusion', 'ASTA interoperability, partner connectivity and essential digital services, subject to provider and regulatory readiness.'],
              ['Space capability', 'Long-term African participation in Earth observation, communications, navigation and related industry.'],
            ].map(([title, text], index) => (
              <article className="institutional-program" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="institutional-section institutional-section--ink">
        <div className="institutional-container institutional-digital">
          <div className="institutional-digital__copy">
            <p className="institutional-eyebrow institutional-eyebrow--gold">07 / DIGITAL INFRASTRUCTURE</p>
            <h2>ASTA OS is the infrastructure beneath the applications.</h2>
            <p>
              ASTA is designed as an interoperability layer for identity, trust, communication, commerce, payments, mobility,
              logistics, data and developer services. The super app is one proposed interface, not the whole system.
            </p>
            <Link href="/ecosystem" className="institutional-text-link">Explore the digital architecture <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
          <div className="institutional-digital__diagram" aria-label="ASTA connects independent institutions and services through shared interfaces">
            <div className="institutional-digital__node institutional-digital__node--center"><Network aria-hidden="true" /><span>ASTA OS</span><small>Proposed interoperability layer</small></div>
            <span className="institutional-digital__satellite institutional-digital__satellite--one">Governments</span>
            <span className="institutional-digital__satellite institutional-digital__satellite--two">Businesses</span>
            <span className="institutional-digital__satellite institutional-digital__satellite--three">Developers</span>
            <span className="institutional-digital__satellite institutional-digital__satellite--four">Service partners</span>
            <span className="institutional-digital__satellite institutional-digital__satellite--five">People</span>
          </div>
        </div>

        {/* Asta Super App / Dotkom Showcase Banner */}
        <div className="institutional-container" style={{ marginTop: '50px' }}>
          <div className="shadow-2xl relative overflow-hidden" style={{ borderRadius: '0', background: '#060b08', border: '1px solid rgba(255, 254, 250, 0.15)' }}>
            {/* Hero Image Banner with Background Blending */}
            <div
              className="relative w-full overflow-hidden flex items-center justify-center h-[260px] sm:h-[380px] md:h-[460px] lg:h-[500px]"
              style={{ background: '#060b08' }}
            >
              <Image
                src="/assets/asta-super-app.jpg"
                alt="Dotkom — Flagship Consumer Interface for Asta OS"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background:
                    'radial-gradient(ellipse at center, transparent 35%, rgba(6, 11, 8, 0.5) 70%, #060b08 96%), linear-gradient(to bottom, #060b08 0%, transparent 10%, transparent 90%, #060b08 100%), linear-gradient(to right, #060b08 0%, transparent 8%, transparent 92%, #060b08 100%)',
                }}
              />
              <p className="absolute bottom-2.5 sm:bottom-3 right-4 sm:right-6 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-white/70 z-10 pointer-events-none block">
                ASTA SUPER APP EXISTING MINIMUM VIABLE PRODUCT
              </p>
            </div>

            {/* Content & User Message */}
            <div className="p-6 sm:p-10 relative z-10 space-y-6" style={{ borderTop: '1px solid rgba(255, 254, 250, 0.1)' }}>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="superapp-hero-showcase__brand-pill">
                    BRAND · DOTKOM
                  </span>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/60">
                    CONSUMER INTERFACE · FIRST-PARTY ENTRY POINT
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                  Asta Super App
                </h3>
              </div>

              <div className="p-5 sm:p-6 border border-emerald-500/20 bg-emerald-950/20 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Status: Minimum Viable Product (MVP) Already Exists
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-sans">
                  The Asta Super App is the flagship consumer interface to Asta OS. It is an optional unified entry point, not the only entry point. The Super App Minimum Viable Product (MVP) already exists. Through the Super App, users access the principal first-party services: Dotkom Messenger for communication and business interaction, Dotkom Marketplace for commerce and logistics, Asta Wallet for partnered financial access and payments, Dotkom Social Media for content and community, Asta Store for application and service distribution, and Asta Search for information and service discovery. These services operate on Asta OS infrastructure, the same infrastructure made available to authorized external applications. The Super App is one expression of Asta OS, not the whole of it, because Asta OS also functions through wider digital and physical ecosystem . Within the Super App&apos;s internal ecosystem, the consumer-facing brand is Dotkom from back golden days .
                </p>
                <p className="text-xs sm:text-sm font-mono text-emerald-300/90 pt-2 border-t border-emerald-500/20">
                  The Super App MVP already exists as an operational build of the Dotkom interface.
                </p>
              </div>

              <div className="p-5 sm:p-6 border border-amber-500/20 bg-amber-950/20 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-500/20 text-amber-300 font-mono text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Live Demonstration · Availability Notice
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-sans">
                  Because the Super App MVP is built on a large containerised architecture — dozens of independent
                  services including the API gateway, authentication, messaging, marketplace, wallet, feeds, media
                  processing, search, moderation and the supporting data layer — it is too resource-intensive to run
                  continuously on free-tier hosting. It is therefore demonstrated through a live link generated on an
                  occasional, on-demand basis rather than hosted as a permanent public deployment.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-white/90 font-sans">
                  This is a working MVP shown to evidence that the architecture is achievable. It is not the finished
                  product. Certain areas remain incomplete or under active development, and full production hardening,
                  security review, load testing and completion of the wider feature set are reserved for the engineering
                  team to be appointed at full launch. Viewing is by demonstration link; refresh access is provided
                  while a session is live.
                </p>
                <p className="text-xs sm:text-sm font-mono text-amber-300/90 pt-2 border-t border-amber-500/20">
                  Demonstration link (valid while the session is hosted):{" "}
                  <a
                    href="https://craig-raised-potatoes-favorite.trycloudflare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-200 break-all"
                  >
                    craig-raised-potatoes-favorite.trycloudflare.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>One expression of ASTA OS · Wider digital and physical ecosystem</span>
                </div>
                <Link href="/ecosystem#super-app" className="institutional-text-link">
                  View Super App Architecture <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="institutional-container institutional-finance-note">
          <CircleDollarSign aria-hidden="true" />
          <p><strong>Jowih Credits are not being offered here.</strong> The documents describe a proposed non-speculative bridge model requiring licensed partners and regulatory approvals. No wallet, conversion service or credit issuance is represented as currently available.</p>
        </div>
      </section>

      <section className="institutional-section institutional-section--gallery">
        <div className="institutional-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div><p className="institutional-eyebrow">08 / PROJECT VISUALS</p><h2>Concepts under development.</h2></div>
            <p>These visuals are supplied as illustrative material for the proposed frameworks. They are not evidence of completed projects or signed partnerships.</p>
          </div>
          <div className="institutional-gallery">
            {visualProjects.map((project) => (
              <figure className="institutional-gallery__item" key={project.title}>
                <div className="institutional-gallery__image">
                  <LightboxImage src={project.image} alt={project.alt} className="w-full h-full">
                    <Image src={project.image} alt={project.alt} width={1200} height={800} sizes="(max-width: 700px) 100vw, 33vw" />
                  </LightboxImage>
                </div>
                <figcaption><span>{project.area}</span><strong>{project.title}</strong><small>{project.disclosure}</small></figcaption>
              </figure>
            ))}
          </div>
          <p className="institutional-image-disclosure"><Sparkles aria-hidden="true" size={15} /> Image disclosure: The supplied project renderings are AI-assisted conceptual illustrations. They depict proposals, not built or operational assets.</p>
        </div>
      </section>

      <section className="institutional-founder">
        <div className="institutional-container institutional-founder__inner">
          <div><p className="institutional-eyebrow institutional-eyebrow--gold">A NOTE ON ORIGIN</p><h2>One founder&apos;s story. A larger institutional ambition.</h2></div>
          <div>
            <p>
              Jowih began with Reuben Oduk&apos;s experience as a student, builder and researcher in Kenya. His story informs the
              initiative&apos;s concern with access and opportunity; the work is intended to grow beyond any one biography through
              governance, partnerships and community participation.
            </p>
            <Link href="/about" className="institutional-text-link">About the Foundation <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>

      <InstitutionalNewsletter />

      <section className="institutional-section institutional-section--cta">
        <div className="institutional-container institutional-cta-row">
          <div><p className="institutional-eyebrow">READ THE SOURCE MATERIAL</p><h2>Review the proposals in their original form.</h2></div>
          <div className="institutional-cta-row__actions">
            <Link className="institutional-button institutional-button--dark" href="/documents">Institutional archive <ArrowUpRight aria-hidden="true" size={17} /></Link>
            <Link className="institutional-button institutional-button--light" href="/waitlist">Receive updates <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}