import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InstitutionalExpandable } from '@/components/ui/InstitutionalExpandable';
import { holdingsCompanyLines } from '@/lib/holdings-company';
import { SourceDocument } from '@/components/ui/SourceDocument';

const list = (items: string[]) => <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;

function HoldingsText() {
  return <SourceDocument lines={holdingsCompanyLines} />;
}

export default function JowihGroupPage() {
  return (
    <main className="document-page group-page min-h-screen">
      <header className="document-page__hero"><div className="document-page__inner"><Link href="/" className="document-page__back"><ArrowLeft size={16} /> Back to home</Link><p className="document-page__eyebrow">Commercial architecture</p><h1>Commerce</h1><p>The commercial and operational structure for turning the Foundation&apos;s mission into coordinated systems, companies, and delivery capacity.</p></div></header>
      <section className="document-page__body"><div className="document-page__inner"><InstitutionalExpandable items={[
        { id: 'holdings', number: '01', title: 'Jowih Holdings Company', summary: 'Commercial ownership, control, integration, accountability, and mission protection.', body: <HoldingsText /> },
        { id: 'structure', number: '02', title: 'Jowih Group structure', summary: 'The brain of execution — not governance.', body: <><div className="group-structure-map"><strong>Jowih Group structure</strong>{list(['Group Executive Office', 'Corridor Clusters (6 Core + 1 Advanced)', 'Shared Infrastructure Layer', 'Strategic Platforms (Cross-Corridor)'])}</div><p><strong>Important:</strong> This is the brain of execution, not governance.</p><h3>Core roles</h3>{list(['Group CEO / Executive Director', 'Chief Corridor Integration Officer', 'Chief Infrastructure Officer', 'Chief Financial Flow Officer (not a bank role — system flow logic)', 'Chief Partner Ecosystem Officer', 'Chief Technology & Systems Officer'])}</> },
        { id: 'companies', number: '03', title: 'Mobility and industrial systems', summary: 'Physical systems, manufacturing, research, and construction capacity.', body: <><h3>Jowih Mobility Systems Ltd</h3>{list(['Jowih CRT Systems Ltd (Capsule Rapid Transit)', 'Jowih Autonomous Mobility Ltd (Robotaxis, Robovans)', 'Jowih Logistics Grid Ltd', 'Jowih Air Integration Ltd (Air Jowih APIs)', 'Jowih Infrastructure Deployment Ltd (tracks, roads, tunnels)'])}<h3>Jowih Industrial Systems Ltd</h3>{list(['Jowih Manufacturing Group Ltd', 'Jowih R&D Centers Ltd (6 sector-based centers)', 'Jowih Spin-off Ventures Ltd (30+ companies)', 'Jowih Materials & Processing Ltd', 'Jowih Construction Systems Ltd (modular housing, infra)'])}</> },
        { number: '04', title: 'Energy and digital systems', summary: 'The energy, technology, cloud, connectivity, and developer layers.', body: <><h3>Jowih Energy Systems Ltd</h3>{list(['Jowih Renewable Energy Ltd (solar, wind, geo)', 'Jowih Grid & Storage Ltd', 'Jowih Microgrid Systems Ltd', 'Jowih Battery Systems Ltd', 'Jowih Energy Infrastructure Ltd'])}<h3>Jowih Digital Systems Ltd</h3>{list(['Jowih Technologies Ltd (Jowih Asta — core engine)', 'Jowih Cloud & Data Infrastructure Ltd', 'Jowih Devices & Hardware Ltd', 'Jowih Connectivity Systems Ltd (telco partnerships)', 'Jowih Developer Platform Ltd (mini apps ecosystem)'])}</> },
        { number: '05', title: 'Financial and human development systems', summary: 'Financial infrastructure and the services that develop people.', body: <><h3>Jowih Financial Systems Ltd</h3>{list(['Jowih Credit Systems Ltd (ISSUANCE ONLY)', 'Jowih Settlement Infrastructure Ltd', 'Jowih FX Routing Systems Ltd (auto-convert logic)'])}<h3>Jowih Treasury Interface Ltd (NOT a bank)</h3><p>Does not onboard users, custody retail funds, or act as a PSP. It interfaces with banks, PSPs, FX market makers, and related partners.</p><h3>Jowih Human Development Systems Ltd</h3>{list(['Jowih Health Systems Ltd', 'Jowih Education Systems Ltd', 'Jowih Workforce Systems Ltd (Comrade Hub execution)', 'Jowih Social Infrastructure Ltd'])}</> },
        { number: '06', title: 'Advanced systems', summary: 'Frontier capability for the next generation of African infrastructure.', body: <><h3>Jowih Advanced Systems Ltd</h3>{list(['Jowih Space Systems Ltd', 'Jowih AI & Compute Infrastructure Ltd', 'Jowih Quantum & Frontier Tech Ltd'])}</> },
      ]} /></div></section>
    </main>
  );
}
