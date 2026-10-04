import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

          {/* Phase 2: Grid Bond */}
          <section className="space-y-6" style={{ borderTop: '1px solid var(--line-light)', paddingTop: '3rem' }}>
            <h2 className="text-2xl sm:text-3xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Phase 2: The Grid Bond - One-Time Activation Capital
            </h2>

            <div className="space-y-4" style={{ color: 'var(--ink-soft)' }}>
              <p className="leading-relaxed font-bold">
                The Grid Bond is the one-time activation capital for the Great African Grid Initiative. It is not an ongoing instrument. It is the starting fuel.
              </p>

              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-tight">Purpose</h3>
                <p className="leading-relaxed">
                  Activate the system at scale. Fund foundational infrastructure, strategic acquisitions, country pots, CRT, STEM education, R&D centers, health framework, Air Jowih, Animation & Gaming Hub, exchange programs, space capability, and New Dawn City.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-tight">Structure</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Two classes: Digital Ecosystem Bond (15-year term) and Infrastructure Bond (20-year term)</li>
                  <li>First payouts strategically deferred to Year 4–5</li>
                  <li>Target return: 5.0%–5.6%</li>
                  <li>Duration: 6-month open window</li>
                  <li>One issuance only. Not repeated.</li>
                  <li>Total target: $50B–$100B</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-tight">Participation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>African citizens</li>
                  <li>African diaspora (coordinated through a selected ambassador)</li>
                  <li>Global participants (allocated in final phase)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-tight">Exclusions</h3>
                <p className="leading-relaxed">
                  Institutions, banks, and pension funds are excluded from this phase by design. This prevents concentrated influence at the foundation stage. If a bondholder must sell, they may sell only to the Foundation or another individual — strictly not to companies, institutions, pension funds, or banks.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-tight">Cap</h3>
                <p className="leading-relaxed">
                  $1M per participant across all series and classes. This mirrors the Tier 2 donation cap and prevents undue influence.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold uppercase tracking-tight">Repayment Sources</h3>
                <p className="leading-relaxed">
                  Project revenue, operating company revenue, Tier 1 and Tier 2 donations, and any other mission-aligned revenue stream. Donations are a permitted backup.
                </p>
              </div>

              <div className="p-6 space-y-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
                <h3 className="font-bold uppercase tracking-tight">Key Distinction</h3>
                <p className="leading-relaxed">
                  The Grid Bond is not the Ecosystem Fund. The Grid Bond builds the foundation. The Ecosystem Fund is participation in the commercial Ecosystem that follows.
                </p>
              </div>
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
