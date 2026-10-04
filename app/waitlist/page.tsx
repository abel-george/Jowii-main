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
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5000]" />
            <span>Back to Jowih Ecosystem</span>
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
              <div className="w-14 h-14 rounded-full bg-[#FF5000]/15 border border-[#FF5000] text-[#FF5000] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-xs font-mono font-bold uppercase tracking-widest text-[#FF5000] mb-4">
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
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400 border-b border-white/10 pb-2 mb-2">
                  <span>REQUEST REFERENCE</span>
                  <span className="text-[#FF5000] font-bold">{referenceCode}</span>
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

              <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#FF5000] font-mono mb-8">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-neutral-200 text-xs font-mono font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5000]" />
                  <span>OFFICIAL WAITLIST</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
                    JOWIH ECOSYSTEM
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                    THE NEXT CHAPTER <span className="text-[#FF5000]">STARTS HERE.</span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                  Be among the first people to experience what we are building for Africa. Access the ASTA OS continental operating framework, corridor frameworks, and launch room credentials.
                </p>

                {/* Event Metadata card */}
                <div className="p-6 bg-neutral-950 border border-white/15 space-y-4 font-mono text-xs">
                  <div className="flex items-center gap-3 text-neutral-300">
                    <MapPin className="w-4 h-4 text-[#FF5000] shrink-0" />
                    <span>Jowih Foundation · Institutional updates</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <Calendar className="w-4 h-4 text-[#FF5000] shrink-0" />
                    <span>Pre-launch: donations for structural setup</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <Shield className="w-4 h-4 text-[#FF5000] shrink-0" />
                    <span>Proposed structures remain subject to registration and legal review</span>
                  </div>
                </div>

                <div className="p-4 border-l-2 border-[#FF5000] bg-neutral-950">
                  <p className="text-xs text-neutral-400 italic font-sans">
                    The Great African Grid is intended to partner, integrate, empower, complement, accelerate and enable.
                  </p>
                  <span className="text-[11px] font-mono text-neutral-500 block mt-1">
                    A principle stated in the GAG source papers
                  </span>
                </div>
              </div>

              {/* Right Column: Multi-Field Form */}
              <div className="lg:col-span-7 bg-neutral-950 border border-white/15 p-6 sm:p-10 shadow-xl relative">
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                    Request institutional updates
                  </h2>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Share how you would like to hear about the proposed architecture and pre-launch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name row */}
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
                        placeholder="Reuben"
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
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
                        placeholder="Oduk"
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
                      />
                    </label>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="oduk@university.ac.ke"
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
                      />
                    </label>

                    <label className="block text-xs font-mono font-bold text-neutral-300">
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Phone Number (WhatsApp)
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
                      />
                    </label>
                  </div>

                  {/* Organisation & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-mono font-bold text-neutral-300">
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
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
                      />
                    </label>

                    <label className="block text-xs font-mono font-bold text-neutral-300">
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Role / Title
                      </span>
                      <input
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Lead Engineer / Founder"
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
                      />
                    </label>
                  </div>

                  {/* Country & What brings you to Jowih? */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-mono font-bold text-neutral-300">
                      <span className="block mb-1.5 uppercase tracking-wider">
                        Country
                      </span>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#FF5000] transition-colors"
                      >
                        {africanCountries.map((country) => (
                          <option key={country} value={country} className="bg-neutral-900">
                            {country}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block text-xs font-mono font-bold text-neutral-300">
                      <span className="block mb-1.5 uppercase tracking-wider">
                        What brings you to Jowih?
                      </span>
                      <select
                        name="interestCategory"
                        value={formData.interestCategory}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#FF5000] transition-colors"
                      >
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Optional Notes */}
                  <label className="block text-xs font-mono font-bold text-neutral-300">
                    <span className="block mb-1.5 uppercase tracking-wider">
                      Brief Message or Collaboration Interest (Optional)
                    </span>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Share any specific initiatives, projects, or questions you would like addressed..."
                      className="w-full bg-black border border-white/20 text-white text-sm px-4 py-3 placeholder-neutral-600 focus:outline-none focus:border-[#FF5000] transition-colors"
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
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5000] hover:bg-[#E04600] active:scale-[0.97] text-white font-mono font-bold text-sm uppercase tracking-widest transition-all duration-150 shadow-lg disabled:opacity-50 select-none cursor-pointer"
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

                  <p className="text-[11px] font-mono text-neutral-500 text-center pt-2">
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
