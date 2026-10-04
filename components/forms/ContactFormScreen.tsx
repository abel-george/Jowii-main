'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { submitContactRequest } from '@/lib/waitlist';

export interface FormScreenProps {
  kicker: string;
  title: string;
  copy: string;
  defaultInterest: string;
}

export function ContactFormScreen({
  kicker,
  title,
  copy,
  defaultInterest,
}: FormScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: defaultInterest,
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [requestReference, setRequestReference] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    try {
      setStatus('loading');
      const res = await submitContactRequest(formData);
      setRequestReference(res.referenceId || '');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'The request could not be completed. Please try again later.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF5000]" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-neutral-950 border border-white/20 p-8 sm:p-12 shadow-2xl">
          <div className="border-b border-white/10 pb-6 mb-8">
            <span className="text-xs font-mono font-bold text-[#FF5000] tracking-[0.2em] uppercase block mb-2">
              {kicker}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl">
              {copy}
            </p>
          </div>

          {status === 'success' ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#FF5000]/20 border border-[#FF5000] text-[#FF5000] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                Enquiry Received
              </h2>
              <p className="text-sm text-neutral-300 font-mono max-w-md mx-auto leading-relaxed">
                Your enquiry was accepted by the configured Jowih contact service. This does not constitute a partnership, appointment or financial commitment.
              </p>
              {requestReference && (
                <p className="text-xs text-neutral-500 font-mono">Reference: {requestReference}</p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      interest: defaultInterest,
                      message: '',
                    });
                  }}
                  className="px-8 py-3.5 bg-neutral-900 border border-white/20 text-neutral-300 font-mono font-bold text-xs uppercase tracking-wider hover:text-white"
                >
                  Submit Another Note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block text-xs font-mono font-bold text-neutral-300">
                  <span className="block mb-2 uppercase tracking-wider">Full Name *</span>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Reuben Oduk"
                    className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                  />
                </label>

                <label className="block text-xs font-mono font-bold text-neutral-300">
                  <span className="block mb-2 uppercase tracking-wider">Email Address *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.africa"
                    className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                  />
                </label>
              </div>

              <label className="block text-xs font-mono font-bold text-neutral-300">
                <span className="block mb-2 uppercase tracking-wider">Interest Category</span>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                >
                  {siteData.contactInterests.map((interest) => (
                    <option key={interest} value={interest} className="bg-neutral-900">
                      {interest}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-xs font-mono font-bold text-neutral-300">
                <span className="block mb-2 uppercase tracking-wider">Message / Details *</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your requirements, questions, or affiliation..."
                  className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] focus:ring-1 focus:ring-[#FF5000] transition-colors"
                />
              </label>

              {status === 'error' && (
                <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-98 transition-colors disabled:opacity-50 select-none cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] font-mono text-neutral-500">
                  Enquiries are sent through the configured contact service.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
