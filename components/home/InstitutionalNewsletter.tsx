'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { subscribeToNewsletter } from '@/lib/waitlist';

export function InstitutionalNewsletter() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      await subscribeToNewsletter({ firstName, lastName, email });
      setStatus('success');
      setMessage('Your subscription was received by the configured service.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'The subscription could not be completed. Please try again later.');
    }
  };

  return (
    <section className="institutional-subscribe" aria-labelledby="institutional-subscribe-title">
      <div className="institutional-container institutional-subscribe__inner">
        <div>
          <p className="institutional-eyebrow">INSTITUTIONAL UPDATES</p>
          <h2 id="institutional-subscribe-title">Receive the next public briefing.</h2>
          <p>Occasional updates on source papers, structural milestones and the donation-led pre-launch.</p>
        </div>
        {status === 'success' ? (
          <div className="institutional-subscribe__result" role="status">
            <CheckCircle2 aria-hidden="true" />
            <p>{message}</p>
          </div>
        ) : (
          <form className="institutional-subscribe__form" onSubmit={handleSubmit}>
            <div className="institutional-subscribe__name-row">
              <label><span>First name</span><input autoComplete="given-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required maxLength={80} /></label>
              <label><span>Last name</span><input autoComplete="family-name" value={lastName} onChange={(event) => setLastName(event.target.value)} required maxLength={80} /></label>
            </div>
            <label><span>Email address</span><input autoComplete="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required maxLength={254} /></label>
            {status === 'error' && <p className="institutional-subscribe__error" role="alert">{message}</p>}
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? <>Submitting <LoaderCircle className="is-spinning" aria-hidden="true" size={16} /></> : <>Subscribe <ArrowRight aria-hidden="true" size={16} /></>}
            </button>
            <p className="institutional-subscribe__note">Subscriptions are sent to the configured newsletter provider. No browser-only signup is recorded.</p>
          </form>
        )}
      </div>
    </section>
  );
}