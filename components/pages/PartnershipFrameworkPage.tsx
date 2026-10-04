import Link from 'next/link';
import { ArrowRight, Building2, FileCheck2, GraduationCap, Handshake, Network, ShieldCheck } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const pathways = [
  {
    number: '01',
    title: 'Public institutions',
    text: 'Explore voluntary bilateral discussions around priorities, regulatory context, land, project models and local responsibilities.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Universities & research',
    text: 'Potential collaboration areas include technical review, applied research, training, talent pathways and knowledge exchange.',
    icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Infrastructure & service operators',
    text: 'The frameworks describe future delivery, technology transfer and integration roles for qualified African and global operators.',
    icon: Network,
  },
  {
    number: '04',
    title: 'Technology & payment providers',
    text: 'ASTA and the proposed Credits model are designed around API integration with independent, appropriately licensed providers.',
    icon: Handshake,
  },
];

const operationalRoles = [
  ['Pool of Companies', 'Proposed Tier 1 continental, Tier 2 national and Tier 3 local/CDE delivery network for infrastructure and service projects. Partners serve as executioners across all seven GAG corridors.'],
  ['ASTA developers & technology providers', 'Build and connect independent applications and institutional services through proposed APIs, SDKs and partner gateways.'],
  ['Banks, PSPs & mobile money operators', 'Connect existing accounts and payment rails; licensed partners are intended to execute Jowih Credits conversions.'],
  ['GAG corridor operators', 'Airlines, logistics, energy, transport, telecom, health and education operators contribute specialist services across the seven corridors.'],
  ['Host states & local authorities', 'Voluntary ADFA partners set jurisdictional terms, local priorities, permits and project responsibilities under applicable law.'],
];

const corridorPartnerships = [
  {
    corridor: 'Transport',
    partners: ['Airlines & aviation operators', 'Logistics & freight companies', 'Rail & road infrastructure providers', 'CRT capsule transit systems'],
  },
  {
    corridor: 'Industrial',
    partners: ['Manufacturing facilities', 'Industrial park operators', 'Technology transfer partners', 'Equipment suppliers'],
  },
  {
    corridor: 'Energy',
    partners: ['Power generation companies', 'Grid operators', 'Renewable energy providers', 'Storage solution providers'],
  },
  {
    corridor: 'Digital',
    partners: ['Telecom operators', 'Data center providers', 'Cloud infrastructure partners', 'Network equipment suppliers'],
  },
  {
    corridor: 'Payments',
    partners: ['Licensed banks', 'Payment service providers', 'Mobile money operators', 'Financial technology partners'],
  },
  {
    corridor: 'Services',
    partners: ['Healthcare providers', 'Educational institutions', 'Training organizations', 'Community service operators'],
  },
  {
    corridor: 'Space',
    partners: ['Satellite operators', 'Launch service providers', 'Ground station operators', 'Space technology developers'],
  },
];

export function PartnershipFrameworkPage() {
  const { partnersPage } = siteData;
  return (
    <main className="partnership-page">
      <section className="partnership-page__hero">
        <div className="document-container">
          <p className="institutional-eyebrow institutional-eyebrow--gold">{partnersPage.kicker}</p>
          <h1>{partnersPage.title}</h1>
          <p>{partnersPage.lead}</p>
          <div className="partnership-page__status"><ShieldCheck aria-hidden="true" /> Partnership discussions and appointments are not represented as complete.</div>
        </div>
      </section>

      <div className="partner-marquee" aria-label="Become a listed launch-event partner">
        <div className="partner-marquee__track">
          <div className="partner-marquee__set">
            <Link href="/partner">BECOME A LISTED PARTNER NOW <span aria-hidden="true">✳</span> LAUNCH EVENT SPONSORSHIP <span aria-hidden="true">✳</span></Link>
            <Link href="/partner" aria-hidden="true" tabIndex={-1}>BECOME A LISTED PARTNER NOW <span aria-hidden="true">✳</span> LAUNCH EVENT SPONSORSHIP <span aria-hidden="true">✳</span></Link>
          </div>
          <div className="partner-marquee__set" aria-hidden="true">
            <Link href="/partner" tabIndex={-1}>BECOME A LISTED PARTNER NOW <span aria-hidden="true">✳</span> LAUNCH EVENT SPONSORSHIP <span aria-hidden="true">✳</span></Link>
            <Link href="/partner" tabIndex={-1}>BECOME A LISTED PARTNER NOW <span aria-hidden="true">✳</span> LAUNCH EVENT SPONSORSHIP <span aria-hidden="true">✳</span></Link>
          </div>
        </div>
      </div>
      <p className="partner-marquee__disclosure">Listing and sponsorship are subject to eligibility review, due diligence, approval and written terms. An enquiry does not create a partnership.</p>

      <section className="partnership-page__body">
        <div className="document-container">
          <div className="institutional-section-heading">
            <p className="institutional-eyebrow">POTENTIAL PARTNERSHIP PATHWAYS</p>
            <h2>Separate capabilities. Clear agreements.</h2>
            <p>These are proposed participation areas drawn from the source papers, not an active-partner directory.</p>
          </div>
          <div className="partnership-page__pathways">
            {pathways.map(({ number, title, text, icon: Icon }) => (
              <article key={number}>
                <span>{number}</span><Icon aria-hidden="true" size={23} /><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>

          <section className="partnership-operations">
            <div className="partnership-operations__intro">
              <p className="institutional-eyebrow">CORE TO DELIVERY</p>
              <h2>Partnerships are part of the operating model.</h2>
              <p>The source papers assign delivery, integration and regulated financial execution to a broad partner network. These are planned roles, not completed appointments.</p>
            </div>
            <div className="partnership-operations__list">
              {operationalRoles.map(([name, detail], index) => (
                <article key={name}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{name}</h3><p>{detail}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="partnership-corridors">
            <div className="partnership-operations__intro">
              <p className="institutional-eyebrow">EXECUTION ACROSS CORRIDORS</p>
              <h2>Partners as executioners across all seven corridors.</h2>
              <p>The GAG framework envisions a pool of qualified companies operating as executioners across transport, industry, energy, digital, payments, services, and space corridors.</p>
            </div>
            <div className="partnership-corridors__grid">
              {corridorPartnerships.map((corridor) => (
                <article key={corridor.corridor} className="partnership-corridor-card">
                  <h3>{corridor.corridor}</h3>
                  <ul>
                    {corridor.partners.map((partner) => (
                      <li key={partner}>{partner}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="partnership-page__process">
            <div><p className="institutional-eyebrow">PROPOSED REVIEW PROCESS</p><h2>Interest is not an appointment.</h2></div>
            <ol>
              <li><span>01</span><div><h3>Describe the capability</h3><p>Identify the organization, jurisdiction, project area and relevant experience.</p></div></li>
              <li><span>02</span><div><h3>Review and due diligence</h3><p>Legal status, capacity, compliance, safeguarding and conflicts require review.</p></div></li>
              <li><span>03</span><div><h3>Agree scope in writing</h3><p>Any relationship depends on authorized agreements and applicable procurement and regulatory requirements.</p></div></li>
            </ol>
          </section>

          <div className="partnership-page__cta">
            <div><FileCheck2 aria-hidden="true" /><div><h2>Launch-event sponsorship</h2><p>For the event-specific sponsorship and support enquiry form. Submitting an enquiry does not create a partnership or guarantee follow-up.</p></div></div>
            <Link href="/partner">Partner or sponsor the event <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <p className="partnership-page__archive-link"><Link href="/documents">Read the governance and GAG source papers <ArrowRight aria-hidden="true" size={15} /></Link></p>
        </div>
      </section>
    </main>
  );
}