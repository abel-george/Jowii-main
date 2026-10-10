import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GovernancePage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="pt-36 sm:pt-40 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
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
            FROM GOVERNANCE DOCUMENT
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl">
            Jowih Governance & Appointment Master Register
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            Consolidated Institutional Structure for the JOWIH Organization
          </p>
        </div>
      </div>

      <div className="py-16 pb-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-8 leading-relaxed">
              
              <p className="text-sm italic" style={{ color: 'var(--muted)' }}>
                Dd JOWIH GOVERNANCE & APPOINTMENT MASTER REGISTER
              </p>

              <h2 className="text-2xl uppercase tracking-tight">I. STEWARDSHIP & FOUNDER-ERA ADVISORY STRUCTURE</h2>

              <h3 className="text-lg uppercase tracking-tight mt-6">1. Founder & Steward President</h3>
              <p>The Founder & Steward President serves as the principal constitutional steward of the JOWIH Mission, exercising the strategic, protective, and reserved powers established by the Constitution.</p>

              <h3 className="text-lg uppercase tracking-tight mt-6">2. Founder's Council - Founder Era</h3>
              <p>The Founder's Council is the Founder-era advisory structure chaired by the Founder & Steward President.</p>
              <p>It consists of the Founder and persons invited by the Founder like special advisers to provide strategic counsel.</p>
              <p>The Council is not a separate operating or executive authority and does not exercise independent management powers.</p>

              <h3 className="text-lg uppercase tracking-tight mt-6">3. Special Advisors to the Steward President</h3>
              <p>Special Advisors are individual appointments serving directly at the discretion of the Steward President. They may participate in the Founder's Council when invited by the Founder.</p>
              <p>The initial advisory portfolio may include:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Special Advisor -- Development & Infrastructure</li>
                <li>Special Advisor -- Strategic Partnerships & Acquisitions</li>
                <li>Special Advisor -- Finance & Jowih Credits</li>
                <li>Special Advisor -- Technology & Innovation</li>
                <li>Special Advisor -- Legal & Compliance</li>
                <li>Special Advisor -- Diplomatic & Public Relations</li>
                <li>Special Advisor -- Economics</li>
                <li>Additional Special Advisors as required.</li>
              </ul>

              <h3 className="text-lg uppercase tracking-tight mt-6">4. Foundation Advisory Council — Successor Era</h3>
              <p>Upon transition from the Founder era, the Founder's Council shall transition into the Foundation Advisory Council in accordance with the Constitution.</p>
              <p>The Foundation Advisory Council shall serve as the successor Steward President's advisory structure.</p>
              <p>The Founder's Council and Foundation Advisory Council are therefore successive forms of the same constitutional advisory architecture and shall not operate concurrently as separate councils.</p>

              <h2 className="text-2xl uppercase tracking-tight mt-12">II. JOWIH FOUNDATION GOVERNANCE</h2>

              <h3 className="text-lg uppercase tracking-tight mt-6">5. Board of Governors</h3>
              <p>The Board of Governors constitutes the principal governing body of the Jowih Foundation and exercises the governance, fiduciary, oversight, and strategic responsibilities assigned to it by the Constitution.</p>

              <h3 className="text-lg uppercase tracking-tight mt-6">6. Permanent Board Committees</h3>
              <p>The permanent Foundation Board committee structure includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Audit Committee</li>
                <li>Ethics & Oversight Committee</li>
                <li>Nominations Committee</li>
                <li>Remuneration Committee</li>
              </ul>
              <p>These committees perform governance and oversight functions and do not constitute executive management departments.</p>

              <h2 className="text-2xl uppercase tracking-tight mt-12">III. INDEPENDENT FOUNDATION OVERSIGHT</h2>

              <h3 className="text-lg uppercase tracking-tight mt-6">7. Independent Auditor General</h3>
              <p>The Independent Auditor General serves as the Foundation's , profit and non-profit independent audit authority.</p>

              <h3 className="text-lg uppercase tracking-tight mt-6">8. Independent Oversight Committee</h3>
              <p>An independent oversight mechanism responsible for designated governance and accountability functions.</p>

              <h3 className="text-lg uppercase tracking-tight mt-6">9. External Audit Firm</h3>
              <p>An independent rotating professional audit firm appointed in accordance with the Constitution.</p>
              <p>The External Audit Firm is an external professional service provider and is not a permanent JOWIH executive appointment.</p>

              <h3 className="text-lg uppercase tracking-tight mt-6">10. Specialist External Professional Firms</h3>
              <p>Where required, the Foundation may retain:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>external legal counsel;</li>
                <li>specialist arbitration counsel;</li>
                <li>forensic auditors;</li>
            <li>specialist governance advisers;</li>
            <li>tax and corporate advisers;</li>
            <li>other professional firms authorized under the applicable governance framework.</li>
          </ul>
          <p>These are professional service engagements and are not permanent institutional offices.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">IV. FOUNDATION EXECUTIVE MANAGEMENT</h2>

          <p>The Foundation shall maintain a lean executive structure focused on mission governance, continental coordination, funding, integrity, programs, and institutional administration.</p>
          <p>The Foundation shall not duplicate the operational management of Jowih Holdings Limited, Jowih Group, or the Operating Companies.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">11. Foundation Chief Executive Officer</h3>
          <p>Responsible for the day-to-day administration and execution of the Foundation within the authority established by the Constitution.</p>
          <p>The Foundation CEO does not exercise operational command over:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Jowih Holdings Limited;</li>
            <li>Jowih Group;</li>
            <li>Operating Companies; or</li>
            <li>New Dawn City.</li>
          </ul>

          <h3 className="text-lg uppercase tracking-tight mt-6">12. Chief Finance & Allocation Officer</h3>
          <p>Responsible for Foundation financial allocation and administration, including:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Foundation budgeting;</li>
            <li>Mission Fund administration;</li>
            <li>Country Budget Pots;</li>
            <li>grants and program allocations;</li>
            <li>Foundation reserves; and</li>
            <li>Other Foundation financial functions.</li>
          </ul>
          <p>The CFAO is distinct from the Group Chief Financial Officer.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">13. Chief Integrity & Compliance Officer</h3>
          <p>Responsible for Foundation-wide integrity, compliance, ethics, internal controls, and related reporting.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">14. Secretary-General</h3>
          <p>Responsible for:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>constitutional administration;</li>
            <li>institutional records;</li>
            <li>Secretariat functions;</li>
            <li>formal coordination; and</li>
            <li>official documentation.</li>
          </ul>

          <h3 className="text-lg uppercase tracking-tight mt-6">15. Lead Program Director</h3>
          <p>Responsible for Foundation mission programs, program implementation, monitoring, and coordination.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">16. Country Coordination Lead</h3>
          <p>Responsible for coordinating the Foundation's country-level implementation and support structures.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">V. REGIONAL FOUNDATION COORDINATION</h2>

          <p>The Foundation shall maintain five Regional Executive positions:</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">17. Regional Executive — North Africa</h3>
          <h3 className="text-lg uppercase tracking-tight mt-6">18. Regional Executive — West Africa</h3>
          <h3 className="text-lg uppercase tracking-tight mt-6">19. Regional Executive — East Africa</h3>
          <h3 className="text-lg uppercase tracking-tight mt-6">20. Regional Executive — Central Africa</h3>
          <h3 className="text-lg uppercase tracking-tight mt-6">21. Regional Executive — Southern Africa</h3>

          <p className="mt-4">Regional Executives coordinate Foundation mission implementation within their respective regions and support the continental and country coordination framework.</p>
          <p>They do not exercise operational command over Jowih Group or its Operating Companies.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">VI. CONTINENTAL AND COUNTRY PARTICIPATION STRUCTURE</h2>

          <p>The following structures form part of the Foundation's continental development and participation architecture:</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">22. PAN-Ambassadors</h3>
          <p>Country-level representatives within the continental Foundation network.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">23. Country Executive Directors</h3>
          <p>Country-level Foundation implementation leadership.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">24. Continental Development Assembly</h3>
          <p>The continental assembly mechanism formed through the applicable Foundation country-representation structure.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">25. Diaspora Representative</h3>
          <p>The designated Diaspora representation within the Continental Development Assembly.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">26. County Development Assemblies</h3>
          <p>County-level participatory development structures.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">27. Beneficiary and Community Structures</h3>
          <p>Including, where established:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Beneficiary Advisory Councils;</li>
            <li>Community Steering Assemblies</li>
            <li>Citizen participation structures; and</li>
            <li>Comrade Hub structures.</li>
          </ul>
          <p>These bodies are participation and development structures and are not Foundation corporate executive positions.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">VII. JOWIH PURPOSE TRUST</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">28. Purpose Trust Trustees</h3>
          <p>The Purpose Trust shall maintain its constitutionally established trustee structure.</p>
          <p>The current structure comprises:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Trustee 1</li>
            <li>Trustee 2</li>
            <li>Trustee 3</li>
            <li>Trustee 4</li>
            <li>Trustee 5</li>
          </ul>
          <p>The Purpose Trust is an ownership and mission-protection institution and does not conduct the day-to-day operations of the Foundation or Jowih Group.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">VIII. FOUNDER FAMILY TRUST</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">29. Founder Family Trust Trustees</h3>
          <p>The Founder Family Trust shall maintain its constitutionally established trustee structure, including:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Senior Family Trustee 1</li>
            <li>Senior Family Trustee 2</li>
            <li>Junior Family Trustee</li>
            <li>Independent Legal Trustee</li>
            <li>Family Trainee / Observer</li>
          </ul>

          <h2 className="text-2xl uppercase tracking-tight mt-12">IX. COMBINED TRUSTS GOVERNANCE</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">30. Combined Trusts Board</h3>
          <p>The Combined Trusts Board provides the joint governance mechanism through which the Purpose Trust and Founder Family Trust exercise their constitutionally assigned powers.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">X. TRUSTEE OVERSIGHT</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">31. Trustees Oversight Committee / Enforcer</h3>
          <p>The Trustees Oversight Committee shall comprise:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>3 external governance experts; and</li>
            <li>2 Foundation representatives.</li>
          </ul>
          <p>The Committee performs trustee oversight and related accountability functions established by the Constitution.</p>
          <p>It is an independent oversight mechanism and not an executive management department.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XI. JOWIH HOLDINGS LIMITED</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">32. Holding Company Board</h3>
          <p>The Holding Company Board shall comprise the constitutionally established directors, including:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>4 Purpose Trust-appointed Directors;</li>
            <li>3 Founder Family Trust-appointed Directors; and</li>
            <li>2 Independent Directors where one shall be the Chairperson.</li>
          </ul>
          <p>Total: 9 Directors.</p>
          <p>The Holding Company Board governs Jowih Holdings Limited and provides corporate governance over the Group and its Operating Companies.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XII. JOWIH GROUP EXECUTIVE STRUCTURE</h2>

          <p>Jowih Group constitutes the principal operational and commercial execution structure under Jowih Holdings Limited.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">33. Group Chief Executive Officer — GCEO</h3>
          <p>Responsible for overall Group strategy, execution, integration, performance, and subsidiary leadership.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">34. Group Chief Operating Officer — GCOO</h3>
          <p>Responsible for Group-wide operational coordination and execution.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">35. Group Chief Financial Officer — GCFO</h3>
          <p>Responsible for Group financial management, commercial treasury, capital allocation, corporate finance, and subsidiary financial performance.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">36. Group Chief Research & Innovation Officer</h3>
          <p>Responsible for:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>continental R&D Centers;</li>
            <li>research strategy;</li>
            <li>technology development;</li>
            <li>innovation programs;</li>
            <li>technology transfer;</li>
            <li>commercialization;</li>
            <li>intellectual property development;</li>
            <li>research partnerships; and</li>
            <li>creation and development of technology spin-offs.</li>
          </ul>

          <h3 className="text-lg uppercase tracking-tight mt-6">37. Group Chief Technology Officer</h3>
          <p>Responsible for Group-wide technology architecture, digital systems, technology implementation, and technological integration.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">38. Group General Counsel / Chief Legal Officer</h3>
          <p>Responsible for Group corporate legal affairs, transactions, contracts, regulatory matters, intellectual property, and commercial disputes.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">39. Group Strategy & Corporate Development Executive</h3>
          <p>Responsible for Group portfolio strategy, corporate development, acquisitions, expansion, and strategic integration.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">40. Group Risk Executive</h3>
          <p>Responsible for enterprise risk, operational risk, business continuity, and Group-wide risk management.</p>

          <p className="mt-4 font-bold">Group Executive Principle</p>
          <p>The Group Executive Structure shall remain distinct from the leadership of individual Operating Companies.</p>
          <p>Group executives provide Group-wide leadership and integration; Operating Company CEOs manage their respective businesses.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XIII. CORE OPERATING SUBSIDIARIES</h2>

          <p>The Group shall establish and operate a limited number of Core Operating Subsidiaries corresponding to the actual corporate businesses approved under the Group structure.</p>

          <p className="font-bold">Operating principle</p>
          <p>One Core Operating Subsidiary - One CEO - Multiple related businesses, divisions, and operating units.</p>

          <p>The existence of a particular GAG project, technology, product, or service does not automatically create a separate subsidiary or CEO position.</p>

          <p>Accordingly:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>CRT does not automatically require a separate CRT CEO;</li>
            <li>robotaxis do not automatically require a separate Robotaxi CEO;</li>
            <li>robovans do not automatically require a separate Robovan CEO;</li>
            <li>individual R&D Centers do not require separate CEOs;</li>
            <li>individual products or platforms do not automatically constitute subsidiaries.</li>
          </ul>
          <p>Where appropriate, such activities shall operate as divisions, business units, projects, or subsidiaries under the relevant Core Operating Company.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XIV. JOWIH PROTECTIVE SERVICES</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">41. Jowih Protective Services Chief Executive Officer</h3>
          <p>The Jowih Protective Services CEO is a distinct operating-company leadership position.</p>
          <p>The CEO is responsible for Jowih Protective Services operations, including authorized:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>protective services;</li>
            <li>guarding;</li>
            <li>access control;</li>
            <li>mobile patrol;</li>
            <li>rapid response;</li>
            <li>electronic security;</li>
            <li>VIP protection; and</li>
            <li>security services for JOWIH assets and authorized third parties.</li>
          </ul>
          <p>The JPS CEO shall operate within the governance and reporting framework established by the Constitution.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XV. NEW DAWN CITY TND CITY</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">42. New Dawn City Administrator</h3>
          <p>New Dawn City is a distinct governance domain.</p>
          <p>The New Dawn City Administrator is responsible for the administration and execution of TND City.</p>
          <p>The Administrator:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>reports directly to the Steward President;</li>
            <li>is not part of the Foundation CEO's executive team;</li>
            <li>is not subordinate to the Jowih Group CEO; and</li>
            <li>operates under the special constitutional governance framework applicable to New Dawn City.</li>
          </ul>

          <p className="font-bold mt-4">No separate Jowih Cities structure</p>
          <p>There shall be:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>no Jowih Cities CEO;</li>
            <li>no Jowih Cities subsidiary;</li>
            <li>no Group Cities CEO.</li>
          </ul>
          <p>New Dawn City is governed through its own constitutional administrative structure.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XVI. R&D CENTER STRUCTURE</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">43. Continental R&D Centers</h3>
          <p>The R&D Centers shall operate under the Jowih Group's Research & Innovation structure.</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Group Chief Research & Innovation Officer</li>
            <li>Continental R&D Centers</li>
            <li>R&D Center Directors / Heads</li>
            <li>Research and technical teams</li>
          </ul>
          <p>R&D Center Directors are operational/research leadership positions and are not separate subsidiary CEOs.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XVII. OPERATING COMPANY GOVERNANCE</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">44. Operating Company Boards</h3>
          <p>Each incorporated Operating Company shall maintain its applicable Board or governing body.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">45. Operating Company CEOs</h3>
          <p>Each actual Core Operating Subsidiary shall have one CEO.</p>
          <p>The CEO is responsible for the complete business of that subsidiary, including all divisions and operating units assigned to it.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">46. Mission Compliance Officers</h3>
          <p>Each Operating Company shall maintain the required Mission Compliance function in accordance with the Constitution.</p>
          <p>Mission Compliance Officers do not constitute additional corporate CEOs.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XVIII. AD-HOC AND ACTIVATED BODIES</h2>

          <p>The following shall not form part of the permanent appointment roster:</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">47. Acquisition Review Panel</h3>
          <p>Established only when required for applicable acquisition reviews.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">48. Technology Ethics Council</h3>
          <p>Part-time/ad-hoc expert body activated as required.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">49. Whistleblower & Ethics Investigation Committee</h3>
          <p>Activated for designated investigations and matters requiring independent review.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">50. Emergency Council</h3>
          <p>Activated under the constitutional emergency framework when the applicable emergency threshold is reached.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">51. Temporary Investigation and Review Panels</h3>
          <p>Established only where required for a defined mandate.</p>

          <p className="mt-4">These bodies remain constitutionally available where required but do not constitute permanent executive positions.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XIX. APPOINTMENT CATEGORIES</h2>

          <p>For purposes of the JOWIH appointment process, every position shall be classified into one of the following categories:</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">A. Constitutional Office</h3>
          <p>Permanent office expressly established by the Constitution.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">B. Governance Appointment</h3>
          <p>Board, trustee, director, or standing governance committee appointment.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">C. Executive Appointment</h3>
          <p>Permanent executive position responsible for institutional or commercial management.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">D. Operating Company Appointment</h3>
          <p>CEO or executive position within an incorporated Operating Company.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">E. Advisory Appointment</h3>
          <p>Special Advisor or equivalent advisory appointment.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">F. Oversight Appointment</h3>
          <p>Independent audit, integrity, trustee oversight, or similar appointment.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">G. Ad-Hoc Appointment</h3>
          <p>Temporary appointment created for a defined mandate.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">H. External Professional Engagement</h3>
          <p>Law firms, auditors, consultants, specialist advisers, and other contracted professional providers.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">XX. STRUCTURAL SEPARATION PRINCIPLE</h2>

          <p>The JOWIH institutional architecture shall maintain the following separation:</p>

          <div className="p-6 mt-4" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
            <p className="font-bold">STEWARDSHIP</p>
            <p>Founder & Steward PresidentFounder's Council / Successor Foundation Advisory Council- Special Advisers</p>

            <p className="font-bold mt-4">FOUNDATION</p>
            <p>Mission → Governance → Funding → Standards → Continental Coordination → Program Oversight</p>

            <p className="font-bold mt-4">TRUSTS</p>
            <p>Ownership → Mission Protection → Reserved Governance Powers</p>

            <p className="font-bold mt-4">HOLDING COMPANY</p>
            <p>Ownership Governance → Corporate Oversight → Capital Governance</p>

            <p className="font-bold mt-4">JOWIH GROUP</p>
            <p>Strategy → Integration → R&D → Technology → Commercial Execution</p>

            <p className="font-bold mt-4">OPERATING COMPANIES</p>
            <p>Businesses → Infrastructure → Services → Products → Operations</p>

            <p className="font-bold mt-4">NEW DAWN CITY</p>
            <p>Separate City Governance → New Dawn City Administrator → Steward President</p>

            <p className="font-bold mt-4">JOWIH PROTECTIVE SERVICES</p>
            <p>Separate Operating Company → JPS CEO</p>
          </div>

          <p className="mt-4">This structure prevents duplication of executive authority while preserving the constitutional separation between mission stewardship, ownership, governance, commercial execution, and New Dawn City administration.</p>

          <h2 className="text-2xl uppercase tracking-tight mt-12">JOWIH MASTER ECOSYSTEM FUND — VCC SECTION</h2>

          <p className="text-sm italic">For Inclusion in the JOWIH Governance & Appointment Master Register</p>

          <h2 className="text-2xl uppercase tracking-tight mt-8">XXI. JOWIH MASTER ECOSYSTEM FUND — VCC GOVERNANCE</h2>

          <h3 className="text-lg uppercase tracking-tight mt-6">52. The Fund as a Distinct Governance Domain</h3>
          <p>The Jowih Master Ecosystem Fund ("Master Fund") is a Foundation-established investment vehicle structured as a Mauritius Variable Capital Company (VCC).</p>
          <p>The Master Fund:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>is established by the Jowih Foundation;</li>
            <li>is a separate legal entity from Jowih Holdings Limited;</li>
            <li>is not under the operational control of Jowih Holdings Limited;</li>
            <li>operates under its own governance framework;</li>
            <li>provides regulated economic participation to permitted investors; and</li>
            <li>does not exercise governance over the Jowih Foundation, Jowih Holdings, Jowih Group, or the Operating Companies.</li>
          </ul>
          <p>The Master Fund is a distinct governance domain within the JOWIH institutional architecture.</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">53. VCC Board of Directors</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Element</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Central Board</td>
                  <td className="p-3">VCC Board of Directors</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Board Appointment</td>
                  <td className="p-3">Appointed by the Steward President of the Jowih Foundation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Board Responsibilities</td>
                  <td className="p-3">Appoints auditor, custodian and fund administrator; oversees valuation policy; approves new asset admissions; ensures regulatory compliance; approves sub-fund establishment; approves unit pricing; exercises voting rights of vaulted shares in the best interest of the Fund and its unit holders</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Relationship to Foundation</td>
                  <td className="p-3">The Fund is a Foundation-established vehicle. The Foundation retains mission protection. The Fund does not control the Foundation.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Relationship to Holdings</td>
                  <td className="p-3">The Fund is separate from Jowih Holdings. Holdings governs the commercial operating companies. The Fund provides economic participation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg uppercase tracking-tight mt-6">54. VCC Central Administration — Economies of Scale</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Function</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Fund Administrator</td>
                  <td className="p-3">Single central fund administrator for the entire VCC framework</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Auditor</td>
                  <td className="p-3">Single central auditor for the entire VCC framework</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Custodian</td>
                  <td className="p-3">Single central custodian for the entire VCC framework</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Economies of Scale</td>
                  <td className="p-3">One umbrella VCC structure means one administrator, one auditor, one custodian — significantly reducing operational costs across all sub-funds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Sub-Fund Administration: Each sub-fund maintains separate accounting, valuation and reporting within the central framework</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">55. VCC Sub-Fund Cells</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Element</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Structure</td>
                  <td className="p-3">Segregated cells within a single VCC legal entity</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Asset Isolation</td>
                  <td className="p-3">Assets and liabilities of one sub-fund cannot attach to another</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Scalability</td>
                  <td className="p-3">Permits additional investment cells as the ecosystem expands</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Compartment-Level Administration</td>
                  <td className="p-3">Permits portfolio-specific accounting, valuation and reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Regulatory Compliance: Enables implementation within the applicable Mauritius regulatory framework</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">56. Regulatory Architecture — ADFA</h3>
          <p>The Master Fund operates within the regulatory framework established by the Jowih Foundation and the Accelerated Development Framework Agreement (ADFA) with participating governments.</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Element</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Regulatory Basis</td>
                  <td className="p-3">Accelerated Development Framework Agreement (ADFA)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Framework Provider</td>
                  <td className="p-3">Jowih Foundation and participating governments</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Scope</td>
                  <td className="p-3">Cross-border operations, land settlement, regulatory recognition in host jurisdictions</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Host Jurisdiction Compliance</td>
                  <td className="p-3">Applicable local securities, exchange control, tax and land laws</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Mauritius Framework</td>
                  <td className="p-3">VCC licensing and regulatory oversight under applicable Mauritius law</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Listing Framework</td>
                  <td className="p-3">NSE and other regulated African securities exchanges</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Grid Bond: Operates under its own separate framework; not governed by this Blueprint</p>

          <h3 className="text-lg uppercase tracking-tight mt-6">57. Foreign Exchange & Currency Controls</h3>
          <p>Cross-border capital flows, currency conversion, and foreign exchange management shall be handled through the Jowih Credits framework, subject to applicable exchange-control regulations in each host jurisdiction.</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Element</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">FX Management</td>
                  <td className="p-3">Jowih Credits framework</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Scope</td>
                  <td className="p-3">Cross-border settlement, unit subscriptions, distributions, land-settlement transactions</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Compliance</td>
                  <td className="p-3">Subject to applicable exchange-control regulations in each host jurisdiction</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Design Objective</td>
                  <td className="p-3">Compliant, transparent, and efficient cross-border capital movement</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg uppercase tracking-tight mt-6">58. Stewardship and Voting</h3>

          <h4 className="text-base uppercase tracking-tight mt-4">58.1 The Fund as Legal Owner of Vaulted Shares</h4>
          <p>The Fund, through its applicable VCC sub-fund compartments, is the legal owner of the vaulted shares deposited by partners.</p>
          <p>As legal owner, the Fund holds the voting rights attached to those shares.</p>
          <p>Unit holders have economic exposure to the Fund's NAV and distributable performance. Unit holders do not have direct voting rights over the vaulted shares. Unit holders do not have governance rights over the underlying companies or over the Jowih Foundation.</p>
          <p>This structure preserves the absolute decoupling of downstream economic rights from upstream control rights.</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Element</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Vaulted Shares</td>
                  <td className="p-3">Held by Fund</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Voting Rights</td>
                  <td className="p-3">Held by Fund as legal owner</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Unit Holders</td>
                  <td className="p-3">Economic exposure only; no direct voting rights</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Fund's Exercise of Voting Rights</td>
                  <td className="p-3">In the best interest of the Fund and its unit holders</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Foundation Governance</td>
                  <td className="p-3">Unit holders have zero rights</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Stewardship</td>
                  <td className="p-3">Fund exercises voting rights as owner of vaulted shares</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-base uppercase tracking-tight mt-6">58.2 Jowih Stewardship Principles</h4>
          <p>The Fund shall exercise voting rights in accordance with the Jowih Stewardship Principles, which shall be published and applied consistently across all vaulted shares.</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Principle</th>
                  <th className="text-left p-3 uppercase tracking-tight">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Long-Term Value Creation</td>
                  <td className="p-3">Vote in favor of proposals that promote long-term value creation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Board Accountability</td>
                  <td className="p-3">Vote against boards that fail to meet governance standards</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Executive Compensation</td>
                  <td className="p-3">Vote against excessive or misaligned compensation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Environmental & Social Responsibility</td>
                  <td className="p-3">Vote in favor of proposals that promote sustainability</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Shareholder Rights</td>
                  <td className="p-3">Vote in favor of proposals that protect shareholder rights</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Transparency</td>
                  <td className="p-3">Vote in favor of proposals that increase transparency</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Mission Alignment</td>
                  <td className="p-3">Vote in favor of proposals that align with the Jowih mission</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-base uppercase tracking-tight mt-6">58.3 Jowih Proxy Voting Guidelines</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Category</th>
                  <th className="text-left p-3 uppercase tracking-tight">Guideline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Board Elections</td>
                  <td className="p-3">Vote in favor of directors who meet independence, diversity, and competence criteria</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Executive Compensation</td>
                  <td className="p-3">Vote against packages that are excessive or misaligned with performance</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Mergers & Acquisitions</td>
                  <td className="p-3">Vote in favor of transactions that create long-term value</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Capital Structure</td>
                  <td className="p-3">Vote in favor of proposals that maintain a sound capital structure</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Environmental & Social</td>
                  <td className="p-3">Vote in favor of proposals that promote sustainability and social responsibility</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Shareholder Proposals</td>
                  <td className="p-3">Vote in favor of proposals that promote shareholder rights and transparency</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-base uppercase tracking-tight mt-6">58.4 Jowih Escalation Framework</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Level</th>
                  <th className="text-left p-3 uppercase tracking-tight">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Level 1</td>
                  <td className="p-3">Private engagement with company management</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Level 2</td>
                  <td className="p-3">Public statement of concern</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Level 3</td>
                  <td className="p-3">Vote against board or management proposals</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Level 4</td>
                  <td className="p-3">Collaborate with other institutional investors</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Level 5</td>
                  <td className="p-3">Public campaign for change</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Level 6</td>
                  <td className="p-3">Consider removal of company from the Index</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-base uppercase tracking-tight mt-6">58.5 VCC Stewardship Committee</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Element</th>
                  <th className="text-left p-3 uppercase tracking-tight">Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Composition</td>
                  <td className="p-3">Independent directors, Fund executives, external experts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Appointment</td>
                  <td className="p-3">Appointed by the VCC Board</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Authority</td>
                  <td className="p-3">Voting decisions on vaulted shares</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Reporting</td>
                  <td className="p-3">Annual Jowih Stewardship Report</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Transparency</td>
                  <td className="p-3">Public voting dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Responsibilities:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Developing and maintaining the Jowih Stewardship Principles</li>
            <li>Overseeing voting decisions on vaulted shares</li>
            <li>Engaging with company management where necessary</li>
            <li>Managing conflicts of interest</li>
            <li>Reporting to unit holders</li>
            <li>Ensuring compliance with applicable regulations</li>
          </ul>

          <h4 className="text-base uppercase tracking-tight mt-6">58.6 Jowih Stewardship Team</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Role</th>
                  <th className="text-left p-3 uppercase tracking-tight">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Head of Stewardship</td>
                  <td className="p-3">Leads the stewardship team</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Stewardship Analysts</td>
                  <td className="p-3">Monitor companies and prepare voting recommendations</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Engagement Specialists</td>
                  <td className="p-3">Engage with company management</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Data & Reporting Analysts</td>
                  <td className="p-3">Maintain voting records and reports</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Compliance Officers</td>
                  <td className="p-3">Ensure regulatory compliance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Estimated Annual Cost: US$3.5–8M (negligible compared to Fund NAV)</p>

          <h4 className="text-base uppercase tracking-tight mt-6">58.7 Conflict-of-Interest Policy</h4>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Conflict</th>
                  <th className="text-left p-3 uppercase tracking-tight">Management</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Fund vs. Company</td>
                  <td className="p-3">Independent review by VCC Stewardship Committee</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Fund vs. Unit Holders</td>
                  <td className="p-3">Disclosure and independent review</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Research vs. Foundation</td>
                  <td className="p-3">Foundation outside investable plane; no conflict</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Fund vs. Partners</td>
                  <td className="p-3">Partners retain economic interest; no conflict</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-base uppercase tracking-tight mt-6">58.8 Public Voting Dashboard</h4>
          <p>The Fund shall maintain a public voting dashboard showing:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>How the Fund voted on each proposal</li>
            <li>The rationale for each vote</li>
            <li>The outcome of each vote</li>
            <li>Engagement activities</li>
            <li>Escalation activities</li>
          </ul>

          <h4 className="text-base uppercase tracking-tight mt-6">58.9 Annual Jowih Stewardship Report</h4>
          <p>The Fund shall publish an annual Jowih Stewardship Report covering:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Voting activities</li>
            <li>Engagement activities</li>
            <li>Escalation activities</li>
            <li>Conflicts of interest</li>
            <li>Compliance</li>
            <li>Impact on long-term value creation</li>
          </ul>

          <h3 className="text-lg uppercase tracking-tight mt-6">59. Appointment Categories — VCC</h3>
          <p>For purposes of the JOWIH appointment process, the following VCC positions shall be classified as follows:</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-light)' }}>
                  <th className="text-left p-3 uppercase tracking-tight">Position</th>
                  <th className="text-left p-3 uppercase tracking-tight">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">VCC Board Director</td>
                  <td className="p-3">Governance Appointment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">VCC Stewardship Committee Member</td>
                  <td className="p-3">Governance Appointment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Head of Stewardship</td>
                  <td className="p-3">Executive Appointment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Stewardship Analyst</td>
                  <td className="p-3">Executive Appointment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Engagement Specialist</td>
                  <td className="p-3">Executive Appointment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Compliance Officer</td>
                  <td className="p-3">Executive Appointment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Fund Administrator</td>
                  <td className="p-3">External Professional Engagement</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Auditor</td>
                  <td className="p-3">External Professional Engagement</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-light)' }}>
                  <td className="p-3 font-bold">Custodian</td>
                  <td className="p-3">External Professional Engagement</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Legal Counsel</td>
                  <td className="p-3">External Professional Engagement</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg uppercase tracking-tight mt-6">60. Structural Separation — VCC</h3>
          <p>The VCC shall maintain the following separation within the JOWIH institutional architecture:</p>

          <div className="p-6 mt-4 space-y-2" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)', fontFamily: 'monospace', fontSize: '0.875rem' }}>
            <div>STEWARDSHIP</div>
            <div>Founder & Steward President</div>
            <div>↓</div>
            <div>VCC BOARD</div>
            <div>Appointed by Steward President</div>
            <div>↓</div>
            <div>VCC STEWARDSHIP COMMITTEE</div>
            <div>Stewardship Principles, Proxy Voting Guidelines, Escalation Framework</div>
            <div>↓</div>
            <div>JOWIH STEWARDSHIP TEAM</div>
            <div>Day-to-day voting and engagement</div>
            <div>↓</div>
            <div>UNIT HOLDERS</div>
            <div>Economic exposure only; no direct voting rights</div>
            <div className="mt-4">Governance Flow</div>
            <div>STEWARD PRESIDENT</div>
            <div>│</div>
            <div>├── Steward's Council/</div>
            <div>├── Special Advisers</div>
            <div>│</div>
            <div>├── JOWIH FOUNDATION</div>
            <div>│   │</div>
            <div>│   ├── Board of Governors</div>
            <div>│   ├── IAG / Independent Oversight</div>
            <div>│   │</div>
            <div>│   ├── Foundation CEO</div>
            <div>│   │   ├── CFAO</div>
            <div>│   │   ├── CICO</div>
            <div>│   │   ├── Secretary-General</div>
            <div>│   │   ├── Lead Program Director</div>
            <div>│   │   ├── Country Coordination Lead</div>
            <div>│   │   └── Regional Executives ×5</div>
            <div>│   │</div>
            <div>│   └── AU JOINT COUNCIL / Continental / Country Participation Network</div>
            <div>│</div>
            <div>├── JOWIH PURPOSE TRUST</div>
            <div>│   └── Trustees</div>
            <div>│</div>
            <div>├── FOUNDER FAMILY TRUST</div>
            <div>│   └── Trustees</div>
            <div>│</div>
            <div>├── COMBINED TRUSTS BOARD</div>
            <div>│</div>
            <div>├── JOWIH HOLDINGS LIMITED</div>
            <div>│   └── Holding Company Board</div>
            <div>│   │</div>
            <div>│   └── JOWIH GROUP</div>
            <div>│       │</div>
            <div>│       ├── GCEO</div>
            <div>│       ├── GCOO</div>
            <div>│       ├── GCFO</div>
            <div>│       ├── Group Research & Innovation</div>
            <div>│       ├── Group Technology</div>
            <div>│       ├── Group Strategy</div>
            <div>│       ├── Group General Counsel</div>
            <div>│       ├── Group Risk</div>
            <div>│       │</div>
            <div>│       └── Core Operating Subsidiaries</div>
            <div>│           ├── Subsidiary CEO</div>
            <div>│           ├── Subsidiary CEO</div>
            <div>│           ├── Subsidiary CEO</div>
            <div>│           └── etc.</div>
            <div>│</div>
            <div>├── JOWIH PROTECTIVE SERVICES</div>
            <div>│   └── JPS CEO</div>
            <div>│</div>
            <div>├── NEW DAWN CITY</div>
            <div>│   └── New Dawn City Administrator</div>
            <div>│       └── City Executive Structure</div>
            <div>│</div>
            <div>└── JOWIH MASTER ECOSYSTEM FUND (VCC)</div>
            <div>    │</div>
            <div>    ├── VCC Board of Directors</div>
            <div>    │   └── Appointed by Steward President</div>
            <div>    │</div>
            <div>    ├── VCC Stewardship Committee</div>
            <div>    │</div>
            <div>    ├── Jowih Stewardship Team</div>
            <div>    │</div>
            <div>    ├── Fund Administrator (external)</div>
            <div>    ├── Auditor (external)</div>
            <div>    ├── Custodian (external)</div>
            <div>    │</div>
            <div>    └── Sub-Fund Cells</div>
            <div>        ├── Jowih Core Sub-Fund</div>
            <div>        ├── Ecosystem Partner Sub-Fund</div>
            <div>        ├── Neutral Reserve Sub-Fund</div>
            <div>        └── Specialized Sub-Funds</div>
          </div>
          </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Navigation */}
              <div className="sticky top-24 p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                  On This Page
                </h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Stewardship Structure
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Foundation Governance
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Independent Oversight
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Executive Management
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Regional Coordination
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Jowih Holdings
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Jowih Group
                  </a>
                  <a href="#" className="block text-neutral-700 hover:text-black transition-colors py-1">
                    Master Ecosystem Fund
                  </a>
                </nav>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                  Quick Links
                </h3>
                <nav className="space-y-2">
                  <Link href="/about" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Foundation Overview
                  </Link>
                  <Link href="/documents" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Source Documents
                  </Link>
                  <Link href="/gag" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    Great African Grid
                  </Link>
                  <Link href="/ecosystem" className="block text-sm text-neutral-700 hover:text-black transition-colors py-1">
                    ASTA OS
                  </Link>
                </nav>
              </div>

              {/* Key Documents */}
              <div className="p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
                  Key Documents
                </h3>
                <div className="space-y-3">
                  <Link href="/documents" className="block text-sm text-neutral-700 hover:text-black transition-colors py-2 border-b border-neutral-200">
                    Governance & Appointment Master Register
                  </Link>
                  <Link href="/documents" className="block text-sm text-neutral-700 hover:text-black transition-colors py-2 border-b border-neutral-200">
                    Foundation Constitution
                  </Link>
                  <Link href="/documents" className="block text-sm text-neutral-700 hover:text-black transition-colors py-2 border-b border-neutral-200">
                    Trust Structure Documents
                  </Link>
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-6 bg-black text-white">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Get Involved
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/partner"
                    className="block w-full py-2 px-4 text-center text-sm font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors"
                  >
                    Become Partner
                  </Link>
                  <Link
                    href="/waitlist"
                    className="block w-full py-2 px-4 text-center text-sm font-mono font-bold uppercase tracking-wider border border-white hover:bg-white hover:text-black transition-colors"
                  >
                    Join Waitlist
                  </Link>
                  <Link
                    href="/donate"
                    className="block w-full py-2 px-4 text-center text-sm font-mono font-bold uppercase tracking-wider bg-[#FF5000] text-white hover:bg-[#e64000] transition-colors"
                  >
                    Support Pre-Launch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
