import Link from 'next/link';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export default function InvestorPage() {
  return (
    <main className="investor-status-page">
      <div className="investor-status-page__inner">
        <p className="institutional-eyebrow">FUTURE CAPITAL ARCHITECTURE</p>
        <h1>No investment offer is open.</h1>
        <p className="investor-status-page__lead">
          The pre-launch is for donations to support structural registration and setup. It is not an investment round.
        </p>
        <div className="investor-status-page__notice">
          <ShieldAlert aria-hidden="true" />
          <p>
            The source papers describe a future Grid Bond and a proposed regulated Ecosystem Fund. Neither is offered here.
            No bond, fund unit, security, financial return or investment subscription is available through this website.
            Any future offer would require final documentation, independent legal review and all required regulatory approvals.
          </p>
        </div>
        <div className="investor-status-page__actions">
          <Link href="/documents">Review the proposed investment paper <ArrowRight aria-hidden="true" size={17} /></Link>
          <Link href="/donate">Read pre-launch donation terms <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </div>
    </main>
  );
}
