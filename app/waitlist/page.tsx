'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
  MapPin,
  Calendar,
} from 'lucide-react';
import { submitWaitlist, INTEREST_OPTIONS, WaitlistFormData } from '@/lib/waitlist';

export default function WaitlistPage() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    role: '',
    country: 'Kenya',
    interestCategory: 'Founder / Builder',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceCode, setReferenceCode] = useState('');

  const africanCountries = [
    'Kenya',
    'Nigeria',
    'South Africa',
    'Ghana',
    'Rwanda',
    'Uganda',
    'Tanzania',
    'Ethiopia',
    'Egypt',
    'Senegal',
    'Côte d’Ivoire',
    'Morocco',
    'Zambia',
    'Zimbabwe',
    'United Kingdom (Diaspora)',
    'United States (Diaspora)',
    'Canada (Diaspora)',
    'Germany (Diaspora)',
    'Other African Nation',
    'International Partner',
  ];

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

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.organisation.trim()
    ) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    try {
      setStatus('loading');
      const res = await submitWaitlist(formData);
      setReferenceCode(res.referenceId || 'RECEIVED');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'The request could not be completed. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            style={{ color: 'rgba(255, 254, 250, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            /* Exciting Event Success State */
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-800 p-8 sm:p-14 text-center shadow-2xl relative"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(189, 147, 83, 0.15)', border: '1px solid var(--brass)', color: 'var(--brass)' }}>
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest mb-4" style={{ background: 'rgba(255, 254, 250, 0.1)', color: 'var(--brass)' }}>
                <span>UPDATE REQUEST RECEIVED</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
                THANK YOU.
              </h1>

              <p className="text-xl sm:text-2xl text-neutral-200 font-bold mb-4">
                Your interest has been recorded.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed mb-8 font-sans">
                Your request for updates was accepted by the configured service. This is not an event ticket, reserved seat, platform account or access credential. Updates will be sent to{' '}
                <strong className="text-white font-mono">{formData.email}</strong>.
              </p>

              {/* Reference Badge */}
              <div className="p-4 bg-black border border-white/15 inline-block text-left mb-8 max-w-md w-full">
                <div className="flex justify-between items-center text-xs font-mono border-b pb-2 mb-2" style={{ color: 'rgba(255, 254, 250, 0.4)', borderBottom: '1px solid rgba(255, 254, 250, 0.1)' }}>
                  <span>REQUEST REFERENCE</span>
                  <span className="font-bold" style={{ color: 'var(--brass)' }}>{referenceCode}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-neutral-500 block">ATTENDEE</span>
                    <span className="text-white font-semibold">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">AREA OF INTEREST</span>
                    <span className="text-white font-semibold">
                      {formData.interestCategory}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-black tracking-tight font-mono mb-8" style={{ color: 'var(--brass)' }}>
                #JOWIHKENYA
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.97] transition-all duration-150 w-full sm:w-auto"
                >
                  Return to Home
                </Link>
                <Link
                  href="/documents"
                  className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black active:scale-[0.97] transition-all duration-150 w-full sm:w-auto"
                >
                  Read Briefing Papers
                </Link>
              </div>
            </motion.div>
          ) : (
            /* Registration Form Experience */
            <motion.div
              key="form-screen"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Dramatic Waitlist Manifesto Hero */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase" style={{ background: 'rgba(255, 254, 250, 0.1)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'rgba(255, 254, 250, 0.8)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brass)' }} />
                  <span>OFFICIAL WAITLIST</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-mono uppercase tracking-widest" style={{ color: 'rgba(255, 254, 250, 0.4)' }}>
                    JOWIH ECOSYSTEM
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.95]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    THE NEXT CHAPTER <span style={{ color: 'var(--brass)' }}>STARTS HERE.</span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg leading-relaxed font-sans" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
                  Be among the first people to experience what we are building for Africa. Access the ASTA OS continental operating framework, corridor frameworks, and launch room credentials.
                </p>

                {/* Event Metadata card */}
                <div className="p-6 space-y-4 font-mono text-xs" style={{ background: 'var(--ink-soft)', border: '1px solid rgba(255, 254, 250, 0.15)' }}>
                  <div className="flex items-center gap-3" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                    <MapPin className="w-4 h-4 shrink-0" style={{ color: 'var(--brass)' }} />
                    <span>Jowih Foundation · Institutional updates</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                    <Calendar className="w-4 h-4 shrink-0" style={{ color: 'var(--brass)' }} />
                    <span>Pre-launch: donations for structural setup</span>
                  </div>
                  <div className="flex items-center gap-3" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                    <Shield className="w-4 h-4 shrink-0" style={{ color: 'var(--brass)' }} />
                    <span>Proposed structures remain subject to registration and legal review</span>
                  </div>
                </div>

                <div className="p-4" style={{ borderLeft: '2px solid var(--brass)', background: 'var(--ink-soft)' }}>
                  <p className="text-xs italic font-sans" style={{ color: 'rgba(255, 254, 250, 0.6)' }}>
                    The Great African Grid is intended to partner, integrate, empower, complement, accelerate and enable.
                  </p>
                  <span className="text-[11px] font-mono block mt-1" style={{ color: 'rgba(255, 254, 250, 0.4)' }}>
                    A principle stated in the GAG source papers
                  </span>
                </div>
              </div>

              {/* Right Column: Multi-Field Form */}
              <div className="lg:col-span-7 p-6 sm:p-10 shadow-xl relative" style={{ background: 'var(--ink-soft)', border: '1px solid rgba(255, 254, 250, 0.15)' }}>
                <div className="pb-4 mb-6" style={{ borderBottom: '1px solid rgba(255, 254, 250, 0.1)' }}>
                  <h2 className="text-2xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                    Request institutional updates
                  </h2>
                  <p className="text-xs font-mono mt-1" style={{ color: 'rgba(255, 254, 250, 0.5)' }}>
                    Share how you would like to hear about the proposed architecture and pre-launch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        First Name *
                      </span>
                      <input
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Reuben"
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      />
                    </label>

                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Last Name *
                      </span>
                      <input
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Oduk"
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      />
                    </label>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="oduk@university.ac.ke"
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      />
                    </label>

                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Phone Number (WhatsApp)
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      />
                    </label>
                  </div>

                  {/* Organisation & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Organisation / University *
                      </span>
                      <input
                        name="organisation"
                        type="text"
                        required
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="e.g. Kisii University"
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      />
                    </label>

                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Role / Title
                      </span>
                      <input
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Lead Engineer / Founder"
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      />
                    </label>
                  </div>

                  {/* Country & What brings you to Jowih? */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Country
                      </span>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      >
                        {africanCountries.map((country) => (
                          <option key={country} value={country} style={{ background: 'var(--ink-soft)' }}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                      <span className="block mb-1.5 uppercase tracking-wider">
                        What brings you to Jowih?
                      </span>
                      <select
                        name="interestCategory"
                        value={formData.interestCategory}
                        onChange={handleChange}
                        className="w-full text-sm px-4 py-3 transition-colors"
                        style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                      >
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} style={{ background: 'var(--ink-soft)' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Optional Notes */}
                  <label className="block text-xs font-mono font-bold" style={{ color: 'rgba(255, 254, 250, 0.7)' }}>
                    <span className="block mb-1.5 uppercase tracking-wider">
                      Brief Message or Collaboration Interest (Optional)
                    </span>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Share any specific initiatives, projects, or questions you would like addressed..."
                      className="w-full text-sm px-4 py-3 transition-colors"
                      style={{ background: 'var(--ink)', border: '1px solid rgba(255, 254, 250, 0.2)', color: 'var(--white)' }}
                    />
                  </label>

                  {status === 'error' && (
                    <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest transition-all duration-150 shadow-lg disabled:opacity-50 select-none cursor-pointer"
                      style={{ background: 'var(--brass)', color: 'var(--white)' }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Securing Priority Queue...</span>
                        </>
                      ) : (
                        <>
                          <span>Join the Waitlist</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-center pt-2" style={{ color: 'rgba(255, 254, 250, 0.4)' }}>
                    Guaranteed data confidentiality. Connected to Jowih Pre-Launch Dispatch Layer.
                  </p>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
