import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CollapsibleAccordion, CollapsibleAccordionItem } from '@/components/ui/CollapsibleAccordion';

/** Table renderer for the Grid Bond document content — matches the site table style. */
function GridBondTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
            {headers.map((header, headerIndex) => (
              <th key={headerIndex} className="text-left p-3 uppercase tracking-tight align-top">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid var(--line-light)' }}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`p-3 align-top${cellIndex === 0 ? ' font-bold' : ''}`}>
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

export default function FundingPage() {
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
            FUNDING MODEL
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Funding Architecture
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            Donations for Pre-Launch → Grid Bond (One-Time Activation) → Ecosystem Long-Term Participation
          </p>
        </div>
      </div>

      <div className="py-16 pb-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Phase 1: Donations for Pre-Launch */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Phase 1: Donations for Pre-Launch
            </h2>

            <div className="space-y-4" style={{ color: 'var(--ink-soft)' }}>
              <p className="leading-relaxed">
                The pre-launch asks for donations to support legal registration and structural setup. It is not an investment round, and it does not offer a financial return, ownership or governance rights.
              </p>

              <p className="leading-relaxed">
                The stated pre-launch plan is for contributions to be held by one independent law trust while the planned organizational structures are registered. The receiving trust, bank account, oversight and reporting process must be verified and published before donations can be accepted online.
              </p>

              <div className="p-6 space-y-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
                <h3 className="font-bold uppercase tracking-tight">Purpose</h3>
                <p className="text-sm">Registration, legal fees and initial structural setup costs.</p>

                <h3 className="font-bold uppercase tracking-tight">Custody</h3>
                <p className="text-sm">Proposed independent law-trust custody pending completed registration.</p>

                <h3 className="font-bold uppercase tracking-tight">Public record</h3>
                <p className="text-sm">Public reporting and accountable administration are part of the stated model.</p>

                <h3 className="font-bold uppercase tracking-tight">No participation rights</h3>
                <p className="text-sm">A donation is not a bond, fund unit, loan, equity or promise of repayment.</p>
              </div>
            </div>
          </section>

          {/* Phase 2: Grid Bond — content from "The GRid Bond.docx" */}
          <section className="space-y-6" style={{ borderTop: '1px solid var(--line-light)', paddingTop: '3rem' }}>
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Phase 2: The Grid Bond - One-Time Activation Capital
            </h2>

            <p className="leading-relaxed font-bold" style={{ color: 'var(--ink-soft)' }}>
              The Grid Bond is the one-time activation capital for the Great African Grid Initiative. It is not an ongoing instrument. It is the starting fuel.
            </p>

            <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase pt-2" style={{ color: 'var(--brass)' }}>
              THE COMPLETE GRID BOND ALLOCATION ($50-100BN)
            </p>

            <CollapsibleAccordion defaultOpenId="gb-01">
              <CollapsibleAccordionItem
                id="gb-01"
                number="01"
                title="Section 1: Overview"
                summary="6-month open window · two bond classes · $100BN total target"
              >
                <p className="leading-relaxed">
                  The Grid Bond is the one-time activation capital for the Great African Grid Initiative. It is raised
                  from African citizens, the African diaspora, and global citizens through a 6-month open window. The
                  bond is structured as two classes:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>DigitalEcosystem Bond: 15-year term, 5.0-5.4% interest, first payment Year 5</li>
                  <li>Infrastructure Bond: 20-year term, 5.1-5.4% interest, first payment Year 5</li>
                  <li>Total target: $100BN</li>
                </ul>
              </CollapsibleAccordionItem>
              <CollapsibleAccordionItem
                id="gb-02"
                number="02"
                title="Section 2: Complete Allocation Table For Target $100-110B"
                summary="Thirteen allocations — strategic acquisitions, country pots, CRT, STEM, health, space and reserve"
              >
                <GridBondTable
                  headers={['Allocation', 'Bond Amount', 'Purpose']}
                  rows={[
                    ['Strategic Acquisitions & Stakes', '$40-50B', '100% ownership of African industrial assets + minority stakes in global technology leaders. Immediate revenue, technology transfer, dividends, and market presence.'],
                    ['Country Pots (CDEs)', '$5B', 'Phase 1 .Allocated to ADFA signatory states based on population needs, development indices, and impact potential. CDEs begin grassroots development according to CDE type. 70% for community development projects. 30% for community-owned businesses (profits → Jowih Care Fund).'],
                    ['JOWIH CRT', '$5-8B', 'Catalytic amount for CRT company diversified research and manufacturing.High Speed rail Research & Engineering phase 1 in partnerships.'],
                    ['STEM Education', '$5B', 'Catalytic amount for Education framework phase 1. STEM labs in every JSC school. Jowih International Primary Schools. Jowih International High Schools. Broadcast teaching infrastructure, Continental Teaching Hub.'],
                    ['Jowih Venture Capital', '$5B', 'Initial amount to Seed startups across fintech, hardware, AI, logistics, healthtech, edtech, agritech, energy, mobility in Africa and globally creating JowihEcosystem .Returns flow to Mission Fund.'],
                    ['New Dawn City & Jowih Citadel HQ', '$20B', 'Catalytic amount to begin Core infrastructure construction and hq construction.'],
                    ['R&D Centers (6)', '$2B', 'Additional amount for Health, Water & Agriculture, Energy, AI & Technology & Robotics, Infrastructure, Mining. Spin-off companies. IP ownership. Long-term innovation. Most tech,licenses and some operations have been absorbed by strategic acquisition and stakes and workforce from exchange program reducing budget in phase 1 for R&D'],
                    ['AHF & Health Framework', '$10B', '- The initial $8B goes to AHF which will in turn fund piloting of the mobile health frameworkThe remaining 2B begin the construction of 3 mega ultimate referral hospitals across three regions of Africa- Hospital 1 (North or West Africa): Cardiology, Oncology, General Surgery- Hospital 2 (East or Central Africa): Neurology, Neurosurgery, Infectious Diseases- Hospital 3 (Southern Africa): Trauma, Emergency, Pediatrics, Maternal Health'],
                    ['Air Jowih & Airport SEZs', '$2B', 'Catalytic amount for Air Jowih platform & First two Airport SEZ selected (Nairobi, Accra, Kigali, Lagos, Addis Ababa). Cargo villages, logistics parks, free trade zones, commercial zones.'],
                    ['Animation & Gaming Hub', '$500M', 'Initial ring-fenced budget for the Four animation studios, two gaming platforms, manga/manhwa/comic/webtoon production. Talent pipeline across Africa and diaspora. Revenue from game sales, streaming, licensing, merchandising, esports.'],
                    ['Exchange Programs', '$1B', 'Target budget for 2,500 trainees per year sent abroad for global expertise. Return as researcher in R&Ds ,trainers, supervisors, and skilled workforce for ADFA projects, R&D Centers, CRT manufacturing, and CDEs. Co-development agreements tied to exchange partnerships.'],
                    ['Space Capability', '$5B', 'As the catalyst fund for Space collaboration framework with adfa states and african private sectors'],
                    ['Reserve & Contingency', '$5-8B', 'Unforeseencosts, market fluctuations, rapid scaling opportunities.'],
                  ]}
                />
              </CollapsibleAccordionItem>
              <CollapsibleAccordionItem
                id="gb-03"
                number="03"
                title="Section 3: Strategic Acquisitions & Stakes - Detailed"
                summary="Acquisition categories, fallen giants and global technology stake targets"
              >
                <h3 className="font-bold uppercase tracking-tight mt-4">3.1 Strategic Acquisitions (100% Ownership)</h3>
                <GridBondTable
                  headers={['Category', 'Examples', 'Revenue Impact', 'Tech/Capability']}
                  rows={[
                    ['Infrastructure', 'Civil works, roads, bridges, buildings', 'Immediate (existing contracts)', 'Execution capacity for Foundation Infra Company'],
                    ['High-Level Technology', 'Robotics, AI, Quantum, Semiconductors, Computer Vision, NLP', 'Immediate (existing IP, contracts, licensing)', 'Proprietary IP and engineering talent'],
                    ['Energy', 'Solar installers, grid management, battery suppliers', 'Immediate (existing clients, contracts)', 'Energy R&D and deployment'],
                    ['Agriculture', 'Seed companies, irrigation equipment, food processing', 'Immediate (existing sales, distribution)', 'Water & Agriculture R&D'],
                    ['Healthcare', 'Clinics, diagnostic labs, pharmaceutical distributors', 'Immediate (existing patients, revenue)', 'Health R&D and hospital network'],
                    ['Mining', 'Mineral processing, safety equipment, environmental remediation', 'Immediate (existing mine contracts)', 'Mining R&D'],
                    ['Manufacturing', 'Electronics assembly, consumer goods, packaging', 'Immediate (existing production lines)', 'Jowih Technologies production'],
                  ]}
                />
                <h3 className="font-bold uppercase tracking-tight mt-4">3.2 Fallen Giants (Specific Targeted Additional Acquisitions)</h3>
                <GridBondTable
                  headers={['Target', 'Why']}
                  rows={[
                    ['Webuye Paper Mills', 'Symbolic. Strategic for packaging, education materials.'],
                    ['Kaduna Textiles', 'Strategic industry. Uniforms. Jobs. Brand identity.'],
                    ['ZISCO (Zimbabwe)', 'Steel foundation for CRT guideways.'],
                    ['Ajaokuta Steel (Nigeria)', 'Largest steel complex in Africa. Strategic asset.'],
                    ['Delta Steel (Nigeria)', 'Regional steel production.'],
                    ['Tema Steel (Ghana)', 'West African steel hub.'],
                    ['Bata Shoe Factory (Senegal)', 'Symbolic. Industrial revival.'],
                  ]}
                />
                <p className="leading-relaxed mt-2">
                  All acquisitions are 100% Foundation-owned, asset-locked, and cannot be sold.
                </p>
                <h3 className="font-bold uppercase tracking-tight mt-4">3.3 Strategic Stakes (Minority Stakes, Global Tech)</h3>
                <GridBondTable
                  headers={['Category', 'Targets']}
                  rows={[
                    ['Space & Orbital', 'Starlink, OneWeb, China Satcom, IRIS²'],
                    ['Semiconductors', 'NVIDIA, HiSilicon, SMIC, Graphcore'],
                    ['Hyperscale Data Centers', 'Teraco, AWS, Alibaba, Azure, Google Cloud, OVHcloud'],
                    ['Climate & Water', 'ClimaCell, China Meteorological Administration, ECMWF'],
                    ['Metaverse & Digital Twins', 'NVIDIA Omniverse, Baidu XiRang'],
                    ['Quantum Technologies', 'IBM Quantum, D-Wave, USTC, QuantumCTek, IQM'],
                    ['Biocomputing & Neurotechnology', 'Final, Altos Labs, Synchron, Neuralink, NeuroXess, NeuroElectrics'],
                    ['Artificial Intelligence', 'OpenAI, Anthropic, Google DeepMind, Baidu, Alibaba DAMO Academy, SenseTime, DeepSeek, Aleph Alpha'],
                  ]}
                />
                <p className="leading-relaxed mt-2">These stakes provide:</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>Dividends flow to Mission Fund</li>
                  <li>Technology transfer</li>
                  <li>Board representation</li>
                  <li>Market intelligence and presence</li>
                  <li>Multiple sources</li>
                </ul>
              </CollapsibleAccordionItem>

              <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase pt-4" style={{ color: 'var(--brass)' }}>
                THE $40 - $50BN DEPLOYMENT STRATEGY
              </p>
              <p className="text-sm italic pb-2" style={{ color: 'var(--ink-soft)' }}>
                A Comprehensive Acquisitions &amp; Stakes Framework
              </p>

              <CollapsibleAccordionItem
                id="gb-04"
                  number="04"
                  title="Section 1: Strategic Overview"
                  summary="Core thesis, the allocation and why this allocation"
                >
                  <h3 className="font-bold uppercase tracking-tight mt-2">1.1 The Core Thesis</h3>
                  <p className="leading-relaxed">We acquire to build anEcosystem - not because things are cheap, but because ownership gives us control, integration, and compounding value. We stake to gain influence, technology access, and strategic alignment with the companies shaping the future.</p>
                  <h3 className="font-bold uppercase tracking-tight mt-4">1.2 The Allocation</h3>
                  <GridBondTable
                    headers={['Allocation', 'Amount', 'Purpose']}
                    rows={[
                      ['Acquisitions', '$35BN', '100% ownership of strategic companies - African and global'],
                      ['Stakes', '$10BN', 'Minority positions in giants and strategic partners'],
                      ['Total', '$45BN', '-'],
                    ]}
                  />
                  <h3 className="font-bold uppercase tracking-tight mt-4">1.3 Why This Allocation</h3>
                  <GridBondTable
                    headers={['Reason', 'Explanation']}
                    rows={[
                      ['Control buildsEcosystems', '100% ownership gives full strategic direction, integration, and revenue compounding'],
                      ['Acquisitions create immediate value', 'Revenue, IP, talent, and market position from Day 1'],
                      ['Stakes provide influence', 'Board access, technology transfer, dividends, and strategic alignment'],
                      ['Stakes are phased', 'Starting with one per category, expand as Mission Fund grows'],
                    ]}
                  />
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-05"
                  number="05"
                  title="Section 2: Acquisitions ($3-35BN)"
                  summary="African acquisitions $10-15BN and global acquisitions $15-20BN"
                >
                  <h3 className="font-bold uppercase tracking-tight mt-2">2.1 African Acquisitions ($10-15BN)</h3>
                  <GridBondTable
                    headers={['Category', 'Targets', 'Estimatedcost', 'Why Acquire']}
                    rows={[
                      ['Fallen Giants', 'Ajaokuta Steel, ZISCO, Webuye Paper, Kaduna Textiles, Tema Steel, Delta Steel, Bata Shoe, and others', '$2-4BN', 'Industrial revival. CRT guideways. Jobs. Symbolic restoration. Foundation-owned. Asset-locked.'],
                      ['Infrastructure & Construction (Major International)', 'One major international infrastructure/construction company', '$2-5BN', 'Immediate execution capacity and New Dawn City projects. Existing contracts, workforce, equipment.'],
                      ['Manufacturing', 'Electronics assembly, consumer goods, packaging, industrial manufacturing', '$2-4BN', 'Jowih Technologies production capacity. Immediate revenue from existing production lines.'],
                      ['Energy', 'Solar installers, grid management, battery suppliers', '$1-3BN', 'Energy R&D deployment. Immediate contracts and clients.'],
                      ['Agriculture', 'Seed companies, irrigation equipment, food processing', '$1-2BN', 'Water & Agriculture R&D. Food security. Existing sales and distribution.'],
                      ['Healthcare', 'Diagnostic labs, pharmaceutical distributors, clinic chains', '$1-2BN', 'Health R&D acceleration. Immediate patients and revenue.'],
                      ['Mining', 'Mineral processing, safety equipment, environmental remediation', '$1-2BN', 'Mining R&D. Existing mine contracts.'],
                      ['Total African Acquisitions', '', '$10-15BN', ''],
                    ]}
                  />
                  <p className="font-bold mt-2">Note: PSPs, banks, and mobile money operators are partners, not acquisitions. They remain the default face of the Jowih Wallet. Our investment in them is through integration, partnership agreements, and revenue sharing not ownership but that doesn’t limit the Foundation from owning a bank,mobile money or fintech as a subsidiary.This does not replace the partners as default providers in the Jowih Asta  wallet.</p>
                  <h3 className="font-bold uppercase tracking-tight mt-4">2.2 Global Acquisitions ($15-20BN)</h3>
                  <GridBondTable
                    headers={['Category', 'Targets', 'Estimatedcost', 'Why Acquire']}
                    rows={[
                      ['AI Companies (Mid-Tier)', '2-3 AI companies with proprietary IP and talent', '$3-6BN', 'Own AI talent and IP. Feed into R&D Centers. Avoid dependency.'],
                      ['Quantum Computing', '1-2 quantum startups with working prototypes', '$1-3BN', 'Own quantum IP. Feed into R&D Centers. Future-proof.'],
                      ['Robotics', '2-3 robotics companies (industrial, service, medical)', '$2-4BN', 'Own robotics manufacturing. Feed into CRT, health, industrial.'],
                      ['Semiconductor Design', '1-2 chip design houses', '$3-6BN', 'Own chip design capability. Feed into Jowih Technologies.'],
                      ['Space Tech', '1-2 satellite/launch companies', '$1-3BN', 'Own space capability. Feed into Space Framework.'],
                      ['Health Tech', 'Diagnostics, medical devices, pharmaceutical companies', '$2-4BN', 'Own health IP. Feed into Health Framework.'],
                      ['Consumer Electronics', '1-2 device manufacturers', '$1-3BN', 'Own manufacturing. Feed into Jowih Technologies.'],
                      ['Total Global Acquisitions', '-', '$13-29BN', '-'],
                    ]}
                  />
                  <p className="leading-relaxed mt-2">Target: $15-20BN for 8-12 companies.</p>
                  <p className="font-bold mt-2">2.3 Total Acquisitions: $25-35BN (target $30BN)</p>
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-06"
                  number="06"
                  title="Section 3: Stakes ($10BN)"
                  summary="Guiding principles and Phase 1 stakes totalling $10BN"
                >
                  <h3 className="font-bold uppercase tracking-tight mt-2">3.1 Guiding Principles</h3>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Stakes are minority positions , typically 1-5%</li>
                    <li>Investment per stake: $1-2BN (flexible based on opportunity)</li>
                    <li>We take one stake per category in Phase 1</li>
                    <li>Phase 2 stakes will be funded by Mission Fund as it grows</li>
                    <li>Stakes provide: board observation, technology transfer, dividends, strategic alignment</li>
                  </ul>
                  <h3 className="font-bold uppercase tracking-tight mt-4">3.2 Phase 1 Stakes ($10BN Total)</h3>
                  <GridBondTable
                    headers={['Category', 'Target', 'Estimated Investment', 'Est. Stake %', 'Why']}
                    rows={[
                      ['AI / AGI', 'OpenAI,Deepseek or Anthropic', '$1-2BN', '1-4%', 'AGI access. Board observation. Technology transfer.'],
                      ['Semiconductors', 'NVIDIA', '$1-2BN', '<1%', 'AI chip access. Dividends. Influence.'],
                      ['Space / Satellite', 'Starlink / SpaceX or China equivalent', '$1-2BN', '1-2%', 'Satellite connectivity. Space access. Dividends. Strategic alignment with Space framework'],
                      ['ART and HSR', 'BYD,Chinese Railway Company(If feasible)', '1-2BN1-2BN', '<1--?', 'Strategic alignment with Jowih CRT,Robovans ,Robotaxis,Robotics and future HSR'],
                      ['Gaming Platform', 'One major gaming platform (e.g., Epic Games, Roblox, or similar)', '$1-2BN', '1-5%', 'Strategic alignment with Jowih Animation & Gaming Hub. Distribution, IP access, cross-platform opportunities.'],
                      ['Total Phase 1 Stakes', '', '$6-12BN', '', ''],
                    ]}
                  />
                  <p className="leading-relaxed mt-2">Target: $10BN (approximately $1-2BN per stake).</p>
                  <h3 className="font-bold uppercase tracking-tight mt-4">3.3 Phase 2 Stakes (Future - Funded by Mission Fund)</h3>
                  <GridBondTable
                    headers={['Category', 'Targets', 'Why Later']}
                    rows={[
                      ['Quantum', 'IBM Quantum, D-Wave, USTC', 'Once quantum matures'],
                      ['Neurotechnology', 'Neuralink, Synchron', 'Once medical applications are proven'],
                      ['Additional Card Networks', "The one you didn't pick in Phase 1", 'Expansion'],
                      ['Additional AI', 'DeepMind, Baidu, Alibaba DAMO', 'Expansion'],
                      ['Additional Fintech', 'Stripe,PayPal', 'Expansion'],
                      ['Additional Gaming', 'Other major platforms', 'Expansion'],
                    ]}
                  />
                  <p className="font-bold mt-2">3.4 Total Stakes: $10-12BN (Phase 1)</p>
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-07"
                  number="07"
                  title="Section 4: The Complete Deployment Table"
                  summary="Acquisitions, stakes and reserve — $40-45BN total"
                >
                  <GridBondTable
                    headers={['Category', 'Amount', 'Model', 'Targets']}
                    rows={[
                      ['African Acquisitions', '$10-15BN', '100% Ownership', 'Fallen giants, infrastructure company, manufacturing, energy, agriculture, healthcare, mining'],
                      ['Global Acquisitions', '$15-20BN', '100% Ownership', 'AI, quantum, robotics, semiconductor, space, health tech, consumer electronics'],
                      ['Total Acquisitions', '$25-35BN', '', ''],
                      ['Stakes (Phase 1)', '$6-12BN', 'Minority (1-5%)', ''],
                      ['Reserve', '$1-5BN', '', 'Flexibility, opportunistic acquisitions'],
                      ['Total', '$40-45BN', '', ''],
                    ]}
                  />
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-08"
                  number="08"
                  title="Section 5: What We Do Not Acquire"
                  summary="Partners instead of acquisitions — PSPs, banks, card networks"
                >
                  <GridBondTable
                    headers={['Category', "Why We Don't Acquire(Unless needed)"]}
                    rows={[
                      ['PSPs (M-Pesa, MTN Money, etc.)', 'They are core partners. They remain the default face of the Jowih Wallet. We partner and integrate, not acquire.'],
                      ['Banks', 'They are core partners. They keep their customers, their data, and their brand. We earn through transaction fees.'],
                      ['Card Networks (Mastercard, Visa)', 'We stake them - not acquire. They are strategically important as partners.'],
                      ['Mobile Money Operators', 'We partner with them. They are the backbone of African payments. We complement, not replace.'],
                    ]}
                  />
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-09"
                  number="09"
                  title="Section 6: The Phased Stakes Approach"
                  summary="Phase 1 funded by Grid Bond; Phases 2-3 funded by Mission Fund"
                >
                  <GridBondTable
                    headers={['Phase', 'Stakes', 'Asta t', 'Source']}
                    rows={[
                      ['Phase 1 (Now)', '-', '$6-12BN', 'Grid Bond'],
                      ['Phase 2 (Year 5-10)', 'Quantum, Neurotechnology, Additional AI, Additional Fintech, Additional Gaming', '$5-15BN', 'Mission Fund'],
                      ['Phase 3 (Year 10-20)', 'All remaining critical categories', '$10-20BN', 'Mission Fund'],
                    ]}
                  />
                  <p className="font-bold mt-2">Why this works:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>We don&apos;t tie up all capital upfront</li>
                    <li>Annual Jowih Holding flowing to Mission Fund grows to a targeted $600BN+  by Year 10</li>
                    <li>We can be patient and wait for the right opportunities</li>
                    <li>We maintain flexibility</li>
                  </ul>
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-10"
                  number="10"
                  title="Section 4: How Acquisitions & Stakes Feed the Ecosystem"
                  summary="What each R&D Center and each CDE type receives"
                >
                  <h3 className="font-bold uppercase tracking-tight mt-2">4.1 Feed into R&D Centers</h3>
                  <GridBondTable
                    headers={['R&D Center', 'What It Gets from Acquisitions/Stakes']}
                    rows={[
                      ['AI, Technology & Robotics', 'NVIDIA stakes, AI partnerships, semiconductor IP from acquisitions'],
                      ['Health', 'Healthcare acquisitions, diagnostics labs, pharmaceutical distributors'],
                      ['Water & Agriculture', 'Seed companies, irrigation equipment, food processing acquisitions'],
                      ['Energy', 'Solar installers, grid management, battery suppliers acquisitions'],
                      ['Infrastructure', 'Construction companies, civil works, engineering firms'],
                      ['Mining', 'Mineral processing, safety equipment, environmental remediation acquisitions'],
                    ]}
                  />
                  <h3 className="font-bold uppercase tracking-tight mt-4">4.2 Feed into CDEs</h3>
                  <GridBondTable
                    headers={['CDE Type', 'What It Gets']}
                    rows={[
                      ['Agriculture & Food Security', 'Seed companies, irrigation equipment, food processing acquisitions'],
                      ['Health & Wellness', 'Clinics, diagnostic labs, pharmaceutical distributors'],
                      ['Infrastructure & Energy', 'Construction companies, solar installers, grid management'],
                      ['Digital & Innovation', 'Technology acquisitions, software tools, manufacturing capacity'],
                      ['Education & Scholarship', 'Tablets, laptops, learning materials from manufacturing acquisitions'],
                    ]}
                  />
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-11"
                  number="11"
                  title="Section 5: The 30% CDE Business Model (As in Article LIII)"
                  summary="Community-owned businesses — profits reinvested, 30% to Jowih Care Fund"
                >
                  <p className="leading-relaxed">From Article LIII:</p>
                  <blockquote className="border-l-2 pl-4 italic leading-relaxed mt-2" style={{ borderColor: 'var(--brass)' }}>
                    &quot;Thirty percent (30%) for community-owned businesses to ensure long-term sustainability, with profit reinvestment requirements.&quot;
                  </blockquote>
                  <GridBondTable
                    headers={['CDE Business', 'How It Works', 'Revenue']}
                    rows={[
                      ['Education CDE', 'Affordable private schools, textbook publishing, e-learning centers', 'Profits reinvested'],
                      ['Agriculture CDE', 'Commercial farming, processing plants, export contracts', 'Profits reinvested'],
                      ['Health CDE', 'Pharmaceutical distribution, medical equipment leasing, health insurance', 'Profits reinvested'],
                      ['Infrastructure CDE', 'Solar micro-grids, water purification, construction materials', 'Profits reinvested'],
                      ['Digital CDE', 'ISP operations, device leasing, software development, animation studios', 'Profits reinvested'],
                    ]}
                  />
                  <p className="font-bold mt-2">30% of net profits flow to Jowih Care Fund quarterly.</p>
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-12"
                  number="12"
                  title="Section 6: Total Allocation Range"
                  summary="Conservative $50B · Mid-range $75B · Upside $100B"
                >
                  <GridBondTable
                    headers={['Scenario', 'Total']}
                    rows={[
                      ['Conservative Low End', '$50B'],
                      ['Target Mid-Range', '$75B'],
                      ['Upside High End - Targeted', '$100B'],
                    ]}
                  />
                </CollapsibleAccordionItem>
                <CollapsibleAccordionItem
                  id="gb-13"
                  number="13"
                  title="Section 7: Execution Sequence (Phase 1)"
                  summary="Fifteen Phase 1 priorities in execution order"
                >
                  <GridBondTable
                    headers={['Priority', 'What Happens', 'Why']}
                    rows={[
                      ['1', 'Strategic Acquisitions & Stakes', 'Immediate revenue. Technology. Capability.'],
                      ['2', 'AU,ADFA and all other HGA,Bilateral Agreements', 'Early planning with states on priority projects,executions and private sector partnership into pool of companies.'],
                      ['3', 'JOWIH CRT Company', 'Strategic Manufacturing . High Speed Rail Research'],
                      ['4', 'STEM Education & Exchange Programs', 'Builds the workforce and innovation pipeline.'],
                      ['5', 'Country Pots & CDEs', 'Grassroots development. Community-owned businesses.'],
                      ['6', 'Jowih VC', 'EAsta ystem diversification. Returns to Mission Fund.'],
                      ['7', 'Jowih Citadel', 'The seat of governance.'],
                      ['8', 'R&D Centers', 'Long-term innovation. Spin-offs. 30+ companies.'],
                      ['9', 'Health Framework', 'Better Health care system.- Hospital 1 (North or West Africa): Cardiology, Oncology, General Surgery- Hospital 2 (East or Central Africa): Neurology, Neurosurgery, Infectious Diseases- Hospital 3 (Southern Africa): Trauma, Emergency, Pediatrics, Maternal Health'],
                      ['10', 'Air Jowih & Airport SEZs', 'Air travel marketplace. Logistics hubs.'],
                      ['11', 'Animation & Gaming Hub', 'Cultural and economic engine. IP creation.'],
                      ['12', 'Reserve & Contingency', 'Buffer. Flexibility. Rapid scaling.'],
                      ['13', 'New Dawn City', 'The hub of future economy'],
                      ['14', 'Space Capability', 'Immediate innovation into the space race'],
                      ['15', 'Urbanization framework', 'Immediate rapid urbanization'],
                      ['', '', ''],
                    ]}
                  />
                </CollapsibleAccordionItem>
            </CollapsibleAccordion>

            <div className="p-6 space-y-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
              <h3 className="font-bold uppercase tracking-tight">Key Distinction</h3>
              <p className="leading-relaxed">
                The Grid Bond is not the Ecosystem Fund. The Grid Bond builds the foundation. The Ecosystem Fund is participation in the commercial Ecosystem that follows.
              </p>
            </div>
          </section>

          {/* Phase 3: Ecosystem Long-Term Participation */}
          <section className="space-y-6" style={{ borderTop: '1px solid var(--line-light)', paddingTop: '3rem' }}>
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Phase 3: Ecosystem Long-Term Participation
            </h2>

            <div className="space-y-4" style={{ color: 'var(--ink-soft)' }}>
              <p className="leading-relaxed">
                The Jowih Master Ecosystem Fund is the definitive regulated economic-participation and asset-capital layer of the Jowih commercial ecosystem.
              </p>

              <p className="leading-relaxed">
                The Master Fund is designed to aggregate qualifying commercial assets, establish independently determined valuations, issue regulated non-voting investment units, and provide permitted investors with economic exposure to defined Fund portfolios without providing governance access to the Jowih Foundation, its constitutional mission, or its protected governance architecture.
              </p>

              <p className="leading-relaxed">
                The architecture establishes a permanent separation between mission governance, commercial ownership and strategic control, operational execution, and regulated economic participation.
              </p>

              <p className="leading-relaxed">
                The Master Fund begins with the Jowih 100—an initial qualifying universe of up to 100 eligible commercial enterprises—and is designed to expand progressively toward the Jowih 500 as qualifying enterprises, sectors, geographic coverage, and underlying asset value increase.
              </p>

              <p className="leading-relaxed">
                The principal commercial allocation is: 30% Jowih Core / 70% Ecosystem Partners
              </p>

              <p className="leading-relaxed">
                A separate Neutral Reserve accommodates qualifying assets that do not belong to either Core or Partner category, with land serving as the principal contemplated example.
              </p>

              <p className="leading-relaxed">
                Separately, the Land Acquisition & Settlement Facility provides an approved mechanism through which qualifying projects may, where legally permissible, combine cash consideration with Master Fund Units when acquiring land required for development.
              </p>

              <p className="leading-relaxed">
                The architecture therefore creates two distinct functions: Asset Participation (Eligible assets are vaulted into the Fund and represented through regulated economic participation) and Development Settlement (Approved projects may use Fund Units as part of legally permissible consideration for qualifying land transactions).
              </p>

              <p className="leading-relaxed font-bold" style={{ color: 'var(--green)' }}>
                Neither mechanism transfers governance of the Jowih Foundation to Fund participants.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
