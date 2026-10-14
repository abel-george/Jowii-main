'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Building2, Code, Globe, Award, CheckCircle2, Loader2, ArrowRight, Handshake, Target, Lightbulb, Heart } from 'lucide-react';

export default function PartnerCommunityPage() {
  const [step, setStep] = useState<'welcome' | 'details' | 'confirmation'>('welcome');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    country: '',
    email: '',
    phone: '',
    website: '',
    partnershipAreas: [] as string[],
    contributionType: '',
    message: '',
    additionalInfo: '',
  });

  const partnershipAreas = [
    {
      id: 'gag-transport',
      name: 'GAG Transport Corridor',
      icon: '🚆',
      description: 'Rail, road, air, and maritime logistics infrastructure and operations'
    },
    {
      id: 'gag-industrial',
      name: 'GAG Industrial Corridor',
      icon: '🏭',
      description: 'Manufacturing, processing, and industrial production facilities'
    },
    {
      id: 'gag-energy',
      name: 'GAG Energy Corridor',
      icon: '⚡',
      description: 'Renewable energy, power generation, and energy distribution systems'
    },
    {
      id: 'gag-digital',
      name: 'GAG Digital Corridor',
      icon: '💻',
      description: 'Digital infrastructure, connectivity, and technology platforms'
    },
    {
      id: 'gag-payments',
      name: 'GAG Payments Corridor',
      icon: '💳',
      description: 'Financial services, payment systems, and fintech integration'
    },
    {
      id: 'gag-services',
      name: 'GAG Services Corridor',
      icon: '🏥',
      description: 'Healthcare, education, and social service delivery infrastructure'
    },
    {
      id: 'asta-infrastructure',
      name: 'ASTA OS Infrastructure',
      icon: '🌐',
      description: 'Physical infrastructure, connectivity, compute, and edge layer development'
    },
    {
      id: 'asta-developer',
      name: 'ASTA OS Developer',
      icon: '👨‍💻',
      description: 'API development, SDKs, integration tools, and technical documentation'
    },
    {
      id: 'asta-applications',
      name: 'ASTA OS Applications',
      icon: '📱',
      description: 'Building applications and services on the ASTA OS platform'
    },
    {
      id: 'land-development',
      name: 'Land & Settlement',
      icon: '🏗️',
      description: 'Land acquisition, settlement facilities, and development project support'
    },
    {
      id: 'rd-innovation',
      name: 'R&D & Innovation',
      icon: '🔬',
      description: 'Research centers, innovation labs, and technology development'
    },
    {
      id: 'education-training',
      name: 'Education & Training',
      icon: '🎓',
      description: 'STEM education, vocational training, and capacity building programs'
    }
  ];

  const contributionTypes = [
    'Infrastructure Development',
    'Technology & Software',
    'Financial Services & Investment',
    'Professional Services (Legal, Consulting, etc.)',
    'Research & Development',
    'Manufacturing & Production',
    'Logistics & Supply Chain',
    'Healthcare & Medical Services',
    'Education & Training',
    'Media & Communications',
    'Other (please specify)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          partnerType: formData.type,
          name: formData.name,
          email: formData.email,
          country: formData.country,
          phone: formData.phone,
          website: formData.website,
          partnershipAreas: formData.partnershipAreas.join(', '),
          contributionType: formData.contributionType,
          message: formData.message,
          additionalInfo: formData.additionalInfo,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStep('confirmation');
      } else {
        alert('Failed to submit: ' + result.message);
      }
    } catch (error) {
      alert('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-6 border-b" style={{ borderColor: 'var(--line-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/partner"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(21, 33, 30, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Partnership Options</span>
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: 'var(--brass)' }}>
                PARTNER COMMUNITY
              </span>
              <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
                Join the Ecosystem Partnership Community
              </h1>
            </div>
            <div className="hidden sm:block">
              <Users className="w-8 h-8" style={{ color: 'var(--brass)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 'welcome' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl uppercase tracking-tight mb-4">Build the Ecosystem Together</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
                The Jowih ecosystem is a continental infrastructure project spanning 7 GAG corridors, ASTA OS layers, and development programs across 54 African states. We&apos;re building a community of partners who can contribute their expertise, resources, and capabilities to help make this vision a reality.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Tell us what you can offer—whether it&apos;s infrastructure development, technology, financial services, research, education, or any other capability that can accelerate African development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6" style={{ color: 'var(--green)' }} />
                  <h3 className="font-bold uppercase tracking-tight">Ecosystem Impact</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Your contributions directly support infrastructure and programs that serve millions across Africa.
                </p>
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6" style={{ color: 'var(--green)' }} />
                  <h3 className="font-bold uppercase tracking-tight">Shared Mission</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Join a community aligned with the mission of accelerating African development through cooperation.
                </p>
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6" style={{ color: 'var(--green)' }} />
                  <h3 className="font-bold uppercase tracking-tight">90% Reinvestment</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  90% of returns flow back into African development, creating sustainable impact for partners.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep('details')}
                className="inline-flex items-center gap-3 px-10 py-4 text-white font-mono font-bold text-sm uppercase tracking-wider transition-colors"
                style={{ background: 'var(--brass)' }}
              >
                Submit Partnership Contribution
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 'details' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl uppercase tracking-tight">Your Partnership Contribution</h2>
              <button
                onClick={() => setStep('welcome')}
                className="text-sm font-mono uppercase tracking-wider"
                style={{ color: 'var(--muted)' }}
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Organization or Individual Name *
                </label>
                <input
                  type="text"
                  placeholder="Your name or organization name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                >
                  <option value="">Select type</option>
                  <option value="individual">Individual</option>
                  <option value="corporation">Corporation</option>
                  <option value="sme">SME / Small Business</option>
                  <option value="nonprofit">Non-profit / NGO</option>
                  <option value="university">University / Research</option>
                  <option value="government">Government Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="Your country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+254 XXX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://your-site.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-4">
                Partnership Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {partnershipAreas.map((area) => (
                  <label key={area.id} className="flex items-start gap-3 cursor-pointer p-3 hover:bg-gray-50 transition-colors" style={{ background: 'var(--sage)' }}>
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 mt-1 shrink-0"
                      checked={formData.partnershipAreas.includes(area.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, partnershipAreas: [...formData.partnershipAreas, area.id] });
                        } else {
                          setFormData({ ...formData, partnershipAreas: formData.partnershipAreas.filter((id: string) => id !== area.id) });
                        }
                      }}
                    />
                    <div>
                      <span className="text-sm font-bold block">{area.icon} {area.name}</span>
                      <span className="text-xs block mt-1" style={{ color: 'var(--ink-soft)' }}>{area.description}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-4">
                What Can You Offer? (Contribution Type)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {contributionTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4"
                      checked={formData.contributionType === type}
                      onChange={(e) => {
                        setFormData({ ...formData, contributionType: e.target.checked ? type : '' });
                      }}
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                Describe Your Contribution in Detail *
              </label>
              <textarea
                rows={6}
                placeholder="Please describe in detail what you can offer to help build the Jowih ecosystem. Include specific capabilities, resources, expertise, scale, timeline, and any other relevant information. The more detail you provide, the better we can understand how to integrate your contribution."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border focus:outline-none"
                style={{ borderColor: 'var(--line-light)' }}
              />
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                Additional Information
              </label>
              <textarea
                rows={3}
                placeholder="Any other information you'd like to share about your organization, background, or partnership vision"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full px-4 py-3 border focus:outline-none"
                style={{ borderColor: 'var(--line-light)' }}
              />
            </div>

            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-white font-mono font-bold text-sm uppercase tracking-wider transition-colors disabled:opacity-50"
                style={{ background: 'var(--brass)' }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin inline mr-2" />
                    Processing Application...
                  </>
                ) : (
                  <>
                    Submit Partnership Contribution
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="max-w-2xl mx-auto text-center space-y-8 py-12">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: 'var(--green)', color: 'var(--white)' }}>
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl uppercase tracking-tight">Contribution Received!</h2>
            <p className="text-lg" style={{ color: 'var(--ink-soft)' }}>
              Thank you for your interest in contributing to the Jowih ecosystem. Our partnership team will review your submission and contact you within 7-10 business days to discuss potential collaboration.
            </p>

            <div className="p-8 text-left" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <h3 className="font-bold uppercase tracking-tight mb-4">What Happens Next</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--sage)', color: 'var(--brass)' }}>
                    1
                  </div>
                  <div>
                    <p className="font-bold">Review & Assessment</p>
                    <p style={{ color: 'var(--ink-soft)' }}>Our team will review your contribution proposal and assess alignment with ecosystem needs and mission.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--sage)', color: 'var(--brass)' }}>
                    2
                  </div>
                  <div>
                    <p className="font-bold">Initial Discussion</p>
                    <p style={{ color: 'var(--ink-soft)' }}>We&apos;ll reach out to discuss your contribution in detail and explore integration pathways.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--sage)', color: 'var(--brass)' }}>
                    3
                  </div>
                  <div>
                    <p className="font-bold">Partnership Agreement</p>
                    <p style={{ color: 'var(--ink-soft)' }}>If mutually aligned, we&apos;ll formalize the partnership with clear terms, roles, and integration mechanisms.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-xs text-center" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              This is a partnership expression of interest, not a binding agreement. All partnerships require formal review, written terms, and legal integration into the ecosystem.
            </div>

            <button
              onClick={() => setStep('welcome')}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors"
              style={{ background: 'var(--ink)', color: 'var(--white)' }}
            >
              Return to Partnership Options
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
