import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { CollapsibleAccordion, CollapsibleAccordionItem } from '@/components/ui/CollapsibleAccordion';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(255, 254, 250, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--brass)' }}>
            FROM THE GAG INITIATIVE DOCUMENT
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Jowih Frameworks
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            Sixteen continental implementation frameworks &mdash; from the ADFA to Air Jowih &mdash; as set out in The GAG Initiative document.
          </p>
        </div>
      </div>

      <div className="py-16 pb-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Intro & Download */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Implementation Frameworks
            </h2>
            <p className="leading-relaxed">
              Each framework below is a pillar of the Great African Grid &mdash; the agreements, systems, and programs through which the Foundation executes on the ground. Expand any framework for its brief introduction; the full concept of every framework is set out in The GAG Initiative document.
            </p>
            <a
              href="/documents/The%20GAG%20initiative%20.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-5 py-3 border transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
            >
              <Download className="w-4 h-4" />
              <span>Download The GAG Initiative document &mdash; full concept</span>
            </a>
          </section>

          {/* Frameworks Accordion */}
          <CollapsibleAccordion defaultOpenId="fw-01">
              <CollapsibleAccordionItem
                id="fw-01"
                number="01"
                title="Accelerated Development Framework Agreement (ADFA)"
                summary="A perpetual State-Foundation partnership for accelerated development"
              >
                <p className="leading-relaxed">The ADFA is a bilateral or multilateral agreement with the State as a perpetual legal entity, not with any particular government, administration, ministry, or official. The Foundation enters into the ADFA with the understanding that the State endures beyond elections, coups, revolutions, and constitutional reforms.</p>
                <p className="leading-relaxed">The Framework is opened for signature by any African state from Day 1. Signing is voluntary. Non-signatory states are not excluded from Foundation activities but receive standard processing timelines. Its initial term milestone ends with the completion of the 2045 Horizon, renewing automatically for successive twenty-year horizons such as Horizon 2065 and Horizon 2085.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Model A (State-Funded), Model B (Foundation-Funded) and Model C (Joint-Funded) project models</li>
                  <li>No loans to states - funding is structured as grants, challenge grants, co-investment, or output-based disbursements through country pots</li>
                  <li>States may contribute land, regulatory facilitation, permits, data, or local labor</li>
                  <li>ADFA projects serve as massive employment grounds for certified Comrades and exchange program graduates</li>
                </ul>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-02"
                number="02"
                title="AU Partnership Framework"
                summary="Strategic partnership with the African Union - Agenda 2063 alignment"
              >
                <p className="leading-relaxed">This Framework establishes a strategic partnership between the JOWIH Foundation and the African Union to align the Great African Grid Initiative with continental priorities including Agenda 2063, and to provide observatory and coordination functions at the continental level.</p>
                <p className="leading-relaxed">It enables regional integration and policy alignment across Member States and Regional Economic Communities, ensuring transparency, visibility, and cooperation without compromising JOWIH operational independence or mission integrity. It strengthens and complements the African Union continental coordination mandate - it does not duplicate or replace it.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Partnership, Not Subordination - both act within their mandates</li>
                  <li>Observatory, Not Oversight - the AU receives visibility, monitoring, and coordination functions only</li>
                  <li>Advisory, Not Binding - JOWIH retains final decision authority</li>
                  <li>Aggregated Data, Not Individual Access - proprietary data remains under JOWIH control</li>
                </ul>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-03"
                number="03"
                title="New Dawn City Blueprint"
                summary="The Shenzhen of Africa - the first complete version of the future economy"
              >
                <p className="leading-relaxed">New Dawn City is the physical manifestation of the Great African Grid Initiative. It is a compact, high-density, futuristic smart economic zone designed to be the richest and most productive city in Africa - the Shenzhen of Africa.</p>
                <p className="leading-relaxed">It is not a pilot. It is the first complete version of the future economy: a self-reinforcing, high-density, high-efficiency system where manufacturing, production, STEM education, innovation, logistics, finance, and consumption exist in one continuous loop - designed to generate, retain, and multiply value at unmatched speed. The objective is not demonstration. The objective is dominance.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-04"
                number="04"
                title="Country Pots Scale Allocation From Mission Fund Framework"
                summary="Mission Fund allocation to signatory states through Country Pots"
              >
                <p className="leading-relaxed">This Framework establishes the scale allocation from the Mission Fund to Country Pots over the years. Each signatory state receives annual allocations based on population needs, development indices, and impact potential.</p>
                <p className="leading-relaxed">In Phase 1 (Years 1-5) funding is modest, focused on setting up CDEs, training local leaders, and piloting community projects. By the end of Year 5, CDEs are operational in thousands of communities. Across the scale-up, Country Pots absorb 10-15% of the Mission Fund ($80-120B) for grassroots development and community-owned businesses.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-05"
                number="05"
                title="Exchange Programs And Co-Development Framework"
                summary="Global training paired with co-development and technology transfer"
              >
                <p className="leading-relaxed">The exchange program is the primary vehicle for the Adapt strategy. Trainees sent abroad learn from global leaders and return with skills, relationships, and technology transfer agreements.</p>
                <p className="leading-relaxed">When trainees are sent to a country or company, the Foundation negotiates co-development or technology transfer agreements. The partner gains access to African talent and markets. The Foundation gains access to technology, training, and joint intellectual property. By the end of Year 5, 12,500 exchange program graduates have returned with global-standard qualifications to become the core workforce for co-development projects.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-06"
                number="06"
                title="Jowih Urban Housing &amp; Urbanization Frameworks"
                summary="Slums to asset-locked housing communities - a self-sustaining urbanization system"
              >
                <p className="leading-relaxed">This Framework establishes the Foundation approach to rapid urbanization across African countries. It enables the transformation of slums and informal settlements into dignified, asset-locked housing communities at unprecedented speed, leveraging three funding sources: citizen deposits, Foundation capital, and developer investment.</p>
                <p className="leading-relaxed">It is designed not as a housing program, but as a self-sustaining urbanization system capable of continuous, compounding expansion across multiple countries simultaneously - with no displacement, two housing models, escrow protection, and asset-locked permanence under Article XXV.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-07"
                number="07"
                title="Jowih Africa Health Fund (AHF)"
                summary="A continental health financing stabilizer - no one denied care for inability to pay"
              >
                <p className="leading-relaxed">The Africa Health Fund (AHF) is a continental health financing mechanism that complements existing national health insurance systems. It ensures that no African is denied healthcare due to inability to pay, while preserving and strengthening government health insurance programs.</p>
                <p className="leading-relaxed">AHF is not insurance. It is a continental financial stabilizer for healthcare access. It absorbs system gaps, delays, inequality, and liquidity problems without replacing the system itself.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-08"
                number="08"
                title="Jowih Infrastructure Execution Framework"
                summary="A pre-qualified standing army of developers for rapid parallel delivery"
              >
                <p className="leading-relaxed">This Blueprint establishes the Foundation infrastructure execution model across African countries. It enables the rapid, parallel delivery of infrastructure projects through a pre-qualified standing army of private sector developers - the Pool of Companies - ensuring speed, quality, and competition without bureaucratic delays.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Three-tier execution: continental-defining projects, national strategic projects, and local CDE/community projects</li>
                  <li>Asset Lock applies to Foundation-funded projects (Models B and C); escrow protection on all funds</li>
                  <li>Projects execute in parallel across all ADFA signatory states - no country waits for another</li>
                  <li>International developers must transfer technology and knowledge to local developers and workforce</li>
                </ul>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-09"
                number="09"
                title="Africa Sovereign Space Capability Framework"
                summary="Independent African access to satellites, launch, and space industry"
              >
                <p className="leading-relaxed">This framework defines the structure, implementation pathway, and operational model for establishing a sovereign African space capability, including satellite systems, launch infrastructure, ground systems, and industrial ecosystems. The objective is to achieve independent African access to space-based services and infrastructure.</p>
                <p className="leading-relaxed">The Foundation acts as the sole coordinating and execution authority, deploying catalytic funding of $5B alongside gap funding, and delivering continental earth observation, communications, navigation and positioning, security and early warning, and a pan-African aerospace sector.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-10"
                number="10"
                title="Jowih Education Framework"
                summary="STEM education added to national systems - one continental standard"
              >
                <p className="leading-relaxed">Pillar II Implementation: Digital Opportunity &amp; Youth Advancement. The Foundation shall not disrupt existing national education systems. It adds infrastructure (STEM labs) and schools where none exist - it does not replace teachers, curricula, or national examinations.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Do No Harm - standard primary schools receive no intervention unless requested by government</li>
                  <li>Virtual as a Tool, Not the System - broadcast teaching only for selected STEM subjects</li>
                  <li>Continental Standardization for STEM - one continental timetable for science, technology, engineering, and mathematics</li>
                  <li>National Curricula Remain - students sit national examinations; no parallel system is created</li>
                </ul>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-11"
                number="11"
                title="Jowih Capsule Rapid Transit Network &amp; HSR"
                summary="A new category of transit for African cities - capsules and strategic HSR"
              >
                <p className="leading-relaxed">JOWIH CRT - the African Capsule Rapid Transit System. Built in Africa. For Africa. Owned by Africa. African cities cannot copy the 19th century: trains, BRT, and subways fail on cost, power, and reliability constraints across the continent.</p>
                <p className="leading-relaxed">African cities do not need a cheaper version of a London Underground. They need a new category of transit: dedicated guideways with modular, electric, autonomous-ready capsules designed to coexist with matatus and informal transport rather than displace them - complemented by strategic high-speed rail corridors: Lagos-Accra-Abidjan, Nairobi-Mombasa, Cairo-Alexandria, and Johannesburg-Pretoria.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-12"
                number="12"
                title="Jowih Mobile Health Framework"
                summary="Healthcare comes to the people through mobile health capsules"
              >
                <p className="leading-relaxed">Pillar I Implementation: Empower Communities &amp; Basic Needs. The Foundation shall not build hospitals as the primary model. Instead, healthcare shall be delivered through mobile health capsules that travel to villages, towns, and remote settlements.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Permanent Level 3 district hospital in every county - routine care, basic surgery, maternal health</li>
                  <li>Level 5/6 mobile surgical platoons temporarily upgrade county hospitals for advanced surgery and intensive care</li>
                  <li>Three static world-class hospitals as ultimate referral centers: West, East, and Southern Africa</li>
                  <li>Predictable rotation schedules, integrated with existing systems, scalable across Africa</li>
                </ul>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-13"
                number="13"
                title="Air Jowih &amp; Airport SEZ Network"
                summary="Africa-owned air travel marketplace with Airport SEZs across the continent"
              >
                <p className="leading-relaxed">Air Jowih is the Foundation strategic Africa-global air travel marketplace, integrated into the Jowih Asta Ecosystem. Its mandate is to solve intra-African air travel affordability and accessibility while creating a global distribution platform owned by Africa.</p>
                <p className="leading-relaxed">Air Jowih works in tandem with Airport SEZs developed in partnership with host governments - cargo villages, logistics parks, free trade zones, and commercial zones around existing airports. Strategic goals include reducing intra-African airfare costs by approximately 50%, connecting all 54 African nations, and generating transaction-fee revenue to support the Mission Fund through Jowih Credits settlement.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-14"
                number="14"
                title="Africa Connect Alliance Framework"
                summary="Digital inclusion for every African - free essential access, sustainable market"
              >
                <p className="leading-relaxed">The Africa Connect Alliance is the Foundation digital inclusion framework. It ensures that every African, regardless of income or location, has access to essential digital services while creating a sustainable market for internet connectivity.</p>
                <p className="leading-relaxed">The Alliance is not charity. It is a market expansion strategy that benefits telcos, ISPs, governments, citizens, CDEs, and the Foundation. Leave No One Behind: text-based communication, education portals, health information, and government services are available to all citizens at no cost, with telcos remaining the default face and premium Tier 2 access keeping the Alliance self-sustaining.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-15"
                number="15"
                title="Environmental Cleanliness Framework"
                summary="Community-led cleanliness and sustainable waste management"
              >
                <p className="leading-relaxed">This Framework establishes the Foundation approach to environmental cleanliness across African communities. It ensures that every region maintains dignified, clean, and healthy public spaces through community-led employment and sustainable waste management, complementing existing government and county council efforts rather than replacing them.</p>
                <p className="leading-relaxed">Execution is CDE-led: each county five CDEs divide the region into five sub-regions, each employing dedicated full-time cleanliness workers, backed by a ring-fenced minimum allocation of $1 million per county annually for the first five years from the Country Pot.</p>
              </CollapsibleAccordionItem>

              <CollapsibleAccordionItem
                id="fw-16"
                number="16"
                title="Jowih Creative, African Animation &amp; Gaming Framework"
                summary="African stories, games, and IP - a continental creative economy engine"
              >
                <p className="leading-relaxed">This Framework establishes the Foundation approach to developing, financing, producing, distributing, and supporting African animation, gaming, and related creative industries - a continental creative economy capable of producing high-quality African stories, characters, intellectual property, games, and interactive experiences for African and international audiences.</p>
                <p className="leading-relaxed">Foundation-owned anchor capabilities and independent African creator and studio participation combine into one ecosystem. Core principles include African Creative Ownership, Build the Core Enable the Ecosystem, Creation Not Displacement, Cultural Authenticity, and Commercial Sustainability.</p>
              </CollapsibleAccordionItem>
          </CollapsibleAccordion>
        </div>
      </div>
    </div>
  );
}