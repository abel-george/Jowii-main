'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleDollarSign, ExternalLink, Landmark, LockKeyhole, ShieldCheck } from 'lucide-react';
import { createDonationIntent } from '@/lib/waitlist';

type Availability = 'checking' | 'closed' | 'open';

export function DonationIntake() {
  const [availability, setAvailability] = useState<Availability>('checking');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(25);
  const [currency, setCurrency] = useState('USD');
  const [acknowledged, setAcknowledged] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    fetch('/api/donations/status', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) throw new Error('Status unavailable');
        return response.json() as Promise<{ accepting: boolean }>;
      })
      .then((result) => {
        if (active) setAvailability(result.accepting ? 'open' : 'closed');
      })
      .catch(() => {
        if (active) setAvailability('closed');
      });
    return () => { active = false; };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setBusy(true);
    try {
      const result = await createDonationIntent({ name, email, amount, currency });
      window.location.assign(result.checkoutUrl);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Checkout could not be opened. No payment has been taken.');
      setBusy(false);
    }
  };

  return (
    <main className="donation-page">
      <section className="donation-page__intro">
        <div className="donation-container">
          <p className="institutional-eyebrow">PRE-LAUNCH · STRUCTURAL SETUP</p>
          <h1>Support the work of establishing the institution.</h1>
          <p className="donation-page__lead">
            The pre-launch asks for donations to support legal registration and structural setup. It is not an investment round,
            and it does not offer a financial return, ownership or governance rights.
          </p>
          <div className="donation-page__classification">
            <span><CircleDollarSign aria-hidden="true" /> Donation</span>
            <span><ShieldCheck aria-hidden="true" /> No return</span>
            <span><Landmark aria-hidden="true" /> Structure-first</span>
          </div>
        </div>
      </section>

      <section className="donation-page__body">
        <div className="donation-container donation-page__grid">
          <div className="donation-page__details">
            <p className="institutional-eyebrow">THE PROPOSED ARRANGEMENT</p>
            <h2>Accountability before collection.</h2>
            <p>
              The stated pre-launch plan is for contributions to be held by one independent law trust while the planned
              organizational structures are registered. The receiving trust, bank account, oversight and reporting process
              must be verified and published before donations can be accepted online.
            </p>

            <div className="donation-page__principles">
              <article><span>01</span><div><h3>Purpose</h3><p>Registration, legal fees and initial structural setup costs.</p></div></article>
              <article><span>02</span><div><h3>Custody</h3><p>Proposed independent law-trust custody pending completed registration.</p></div></article>
              <article><span>03</span><div><h3>Public record</h3><p>Public reporting and accountable administration are part of the stated model.</p></div></article>
              <article><span>04</span><div><h3>No participation rights</h3><p>A donation is not a bond, fund unit, loan, equity or promise of repayment.</p></div></article>
            </div>

            <div className="donation-page__rationale">
              <h3>Why Pre-Launch Donations Matter</h3>
              <p>
                Pre-launch donations enable the organization's independence from any influence. The collective will that a better Africa is possible drives this model—allowing the Foundation to establish itself without owing anybody anything in return.
              </p>
              <p>
                Once citizens have decided on the 5 law firms and the trust to handle donations, the formal giving process will be activated. Until then, this page provides information about the proposed arrangement.
              </p>
            </div>

            <div className="donation-page__legal-note">
              <LockKeyhole aria-hidden="true" />
              <p>Do not transfer funds to personal accounts or unverified payment details. No tax deductibility or charitable status is implied by this page.</p>
            </div>
          </div>

          <div className="donation-page__checkout">
            {availability === 'checking' && (
              <div className="donation-page__status" role="status">
                <LockKeyhole aria-hidden="true" />
                <h2>Checking contribution availability</h2>
                <p>The payment service is checked directly before any contribution details are requested.</p>
              </div>
            )}

            {availability === 'closed' && (
              <div className="donation-page__status" role="status">
                <LockKeyhole aria-hidden="true" />
                <p className="institutional-eyebrow">ONLINE GIVING NOT OPEN</p>
                <h2>No payment will be taken.</h2>
                <p>
                  The donation trust and payment-provider endpoint have not been configured for this website. Contribution
                  instructions will be published only after the receiving structure and account are independently verified.
                </p>
                <Link href="/waitlist" className="institutional-text-link">Request a launch update <ArrowRight aria-hidden="true" size={17} /></Link>
              </div>
            )}

            {availability === 'open' && (
              <>
                <div className="donation-page__checkout-heading">
                  <p className="institutional-eyebrow">SECURE CONTRIBUTION</p>
                  <h2>Donation details</h2>
                  <p>You will continue to the configured payment provider to review and complete your donation.</p>
                </div>
                <form className="donation-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Full name</span>
                    <input autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required maxLength={160} />
                  </label>
                  <label>
                    <span>Email address</span>
                    <input autoComplete="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required maxLength={254} />
                  </label>
                  <div className="donation-form__amount-row">
                    <label>
                      <span>Amount</span>
                      <select value={amount} onChange={(event) => setAmount(Number(event.target.value))}>
                        {[10, 25, 50, 100, 250, 500, 1000].map((value) => <option key={value} value={value}>{value.toLocaleString()}</option>)}
                      </select>
                    </label>
                    <label>
                      <span>Currency</span>
                      <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                        {['USD', 'KES', 'GBP', 'EUR', 'CAD', 'AUD'].map((value) => <option key={value}>{value}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="donation-form__acknowledgement">
                    <input type="checkbox" checked={acknowledged} onChange={(event) => setAcknowledged(event.target.checked)} required />
                    <span>I understand this is a donation, not an investment, and carries no promised return or ownership rights.</span>
                  </label>
                  {error && <p className="donation-form__error" role="alert">{error}</p>}
                  <button className="donation-form__submit" type="submit" disabled={busy || !acknowledged}>
                    {busy ? 'Connecting to payment provider…' : 'Continue to secure checkout'}
                    {!busy && <ExternalLink aria-hidden="true" size={16} />}
                  </button>
                  <p className="donation-form__fine-print">No payment details are collected or stored by this website.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}