'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { subscribeToNewsletter } from '@/lib/waitlist';

export function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status !== 'idle') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    try {
      setStatus('loading');
      await subscribeToNewsletter(formData);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-neutral-950 text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#FF5000] font-bold block">
              09 / COMMUNIQUÉS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {siteData.newsletter.title}
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans">
              {siteData.newsletter.copy}
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              Dispatched directly from the Steward Office · Kisii, Kenya
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-black p-6 sm:p-8 border border-white/15">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF5000]/20 border border-[#FF5000]/40 text-[#FF5000] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  You are registered on the dispatch list.
                </h3>
                <p className="text-xs text-neutral-400 font-mono max-w-md mx-auto">
                  Confirmation logged for {formData.email}. Key briefings, launch credentials, and ASTA OS release notes will arrive in your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ firstName: '', lastName: '', email: '' });
                  }}
                  className="text-xs font-mono text-[#FF5000] underline uppercase tracking-wider hover:text-white"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block text-xs font-mono font-bold text-neutral-300">
                    <span className="block mb-1.5 uppercase tracking-wider">
                      First Name *
                    </span>
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Reuben"
                      className="w-full bg-neutral-900 border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                    />
                  </label>

                  <label className="block text-xs font-mono font-bold text-neutral-300">
                    <span className="block mb-1.5 uppercase tracking-wider">
                      Last Name *
                    </span>
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Oduk"
                      className="w-full bg-neutral-900 border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                    />
                  </label>
                </div>

                <label className="block text-xs font-mono font-bold text-neutral-300">
                  <span className="block mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.africa"
                    className="w-full bg-neutral-900 border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                  />
                </label>

                {status === 'error' && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-98 transition-colors disabled:opacity-50 select-none cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-neutral-500">
                    Your address is sent to the configured subscription service.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
