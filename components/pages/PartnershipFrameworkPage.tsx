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