'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Terminal, Database, Cloud, Smartphone, Globe, CheckCircle2, Loader2, ArrowRight, GitBranch, Cpu, Zap } from 'lucide-react';

export default function DeveloperCommunityPage() {
  const [step, setStep] = useState<'welcome' | 'details' | 'confirmation'>('welcome');
  const [loading, setLoading] = useState(false);

  const developmentAreas = [
    {
      id: 'asta-api',
      name: 'ASTA OS API Development',
      icon: Terminal,
      description: 'Build APIs, SDKs, and integration tools for the ASTA OS platform'
    },
    {
      id: 'asta-infrastructure',
      name: 'ASTA OS Infrastructure',
      icon: Cloud,
      description: 'Work on connectivity, compute, edge, and identity layers'
    },
    {
      id: 'asta-apps',
      name: 'ASTA OS Applications',
      icon: Smartphone,
      description: 'Develop applications and services running on ASTA OS'
    },
    {
      id: 'gag-digital',
      name: 'GAG Digital Infrastructure',
      icon: Globe,
      description: 'Build digital systems for GAG corridors and continental connectivity'
    },
    {
      id: 'payments-fintech',
      name: 'Payments & Fintech',
      icon: Zap,
      description: 'Develop payment systems, fintech integrations, and financial tools'
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: Database,
      description: 'Build data platforms, analytics tools, and intelligence systems'
    },
    {
      id: 'mobile-web',
      name: 'Mobile & Web Platforms',
      icon: Smartphone,
      description: 'Create mobile apps, web platforms, and user interfaces'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Cpu,
      description: 'Develop AI systems, ML models, and intelligent agents'
    },
    {
      id: 'security-blockchain',
      name: 'Security & Blockchain',
      icon: GitBranch,
      description: 'Build security systems, blockchain infrastructure, and trust layers'
    }
  ];

  const skillLevels = [
    'Junior Developer (0-2 years)',
    'Mid-level Developer (2-5 years)',
    'Senior Developer (5-10 years)',
    'Lead Developer / Architect (10+ years)',
    'Technical Lead / CTO',
    'Researcher / Academic'
  ];

  const techStacks = [
    'JavaScript / TypeScript',
    'Python',
    'Java / Kotlin',
    'Go / Rust',
    'React / Next.js',
    'Node.js',
    'Flutter / React Native',
    'Swift / Swift',
    'Cloud (AWS, GCP, Azure)',
    'DevOps / Infrastructure',
    'Blockchain / Web3',
    'AI / ML (TensorFlow, PyTorch)',
    'Databases (SQL, NoSQL)',
    'Mobile Development',
    'Other (please specify)'
  ];

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setStep('confirmation');
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
                DEVELOPERS COMMUNITY
              </span>
              <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
                Join the Jowih Developer Community
              </h1>
            </div>
            <div className="hidden sm:block">
              <Code className="w-8 h-8" style={{ color: 'var(--brass)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 'welcome' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl uppercase tracking-tight mb-4">Build the Future of African Infrastructure</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
                The Jowih ecosystem is a continental digital-physical infrastructure project spanning ASTA OS, GAG corridors, and development programs across 54 African states. We're building a community of developers who can contribute their technical expertise to build platforms, APIs, applications, and systems that will serve millions.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Whether you're interested in building APIs for ASTA OS, developing applications on the platform, working on GAG digital infrastructure, or contributing to fintech and AI systems—there's a place for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-6 h-6" style={{ color: 'var(--green)' }} />
                  <h3 className="font-bold uppercase tracking-tight">Open APIs</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Build on ASTA OS with documented APIs, SDKs, and developer tools.
                </p>
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="w-6 h-6" style={{ color: 'var(--green)' }} />
                  <h3 className="font-bold uppercase tracking-tight">Continental Scale</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Your work will impact millions across 54 African states.
                </p>
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6" style={{ color: 'var(--green)' }} />
                  <h3 className="font-bold uppercase tracking-tight">Mission-Driven</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                  Build technology that accelerates African development.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep('details')}
                className="inline-flex items-center gap-3 px-10 py-4 text-white font-mono font-bold text-sm uppercase tracking-wider transition-colors"
                style={{ background: 'var(--brass)' }}
              >
                Join Developer Community
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 'details' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl uppercase tracking-tight">Developer Profile</h2>
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
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
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
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="Your country"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Your city"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Skill Level *
                </label>
                <select
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                >
                  <option value="">Select your level</option>
                  {skillLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  GitHub / Portfolio URL
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Current Role / Organization
                </label>
                <input
                  type="text"
                  placeholder="Your current role and company"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-4">
                Development Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {developmentAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <label key={area.id} className="flex items-start gap-3 cursor-pointer p-3 hover:bg-gray-50 transition-colors" style={{ background: 'var(--sage)' }}>
                      <input type="checkbox" className="w-4 h-4 mt-1 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" style={{ color: 'var(--brass)' }} />
                          <span className="text-sm font-bold">{area.name}</span>
                        </div>
                        <span className="text-xs block mt-1" style={{ color: 'var(--ink-soft)' }}>{area.description}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-4">
                Tech Stack (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {techStacks.map((stack) => (
                  <label key={stack} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">{stack}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                Describe Your Experience and What You Want to Build *
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your development experience, projects you've worked on, and what you'd like to build in the Jowih ecosystem. Include specific ideas, technical interests, and how you'd like to contribute."
                className="w-full px-4 py-3 border focus:outline-none"
                style={{ borderColor: 'var(--line-light)' }}
              />
            </div>

            <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                Availability and Time Commitment
              </label>
              <textarea
                rows={3}
                placeholder="How much time can you commit? Are you looking for full-time, part-time, freelance, or open-source contribution opportunities?"
                className="w-full px-4 py-3 border focus:outline-none"
                style={{ borderColor: 'var(--line-light)' }}
              />
            </div>

            <button
              onClick={handleSubmit}
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
                  Join Developer Community
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </>
              )}
            </button>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="max-w-2xl mx-auto text-center space-y-8 py-12">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: 'var(--green)', color: 'var(--white)' }}>
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl uppercase tracking-tight">Welcome to the Developer Community!</h2>
            <p className="text-lg" style={{ color: 'var(--ink-soft)' }}>
              Thank you for joining the Jowih developer community. Our technical team will review your profile and reach out within 7-10 business days with next steps, access to documentation, and community channels.
            </p>

            <div className="p-8 text-left" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <h3 className="font-bold uppercase tracking-tight mb-4">What Happens Next</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--sage)', color: 'var(--brass)' }}>
                    1
                  </div>
                  <div>
                    <p className="font-bold">Profile Review</p>
                    <p style={{ color: 'var(--ink-soft)' }}>Our technical team will review your profile, skills, and areas of interest.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--sage)', color: 'var(--brass)' }}>
                    2
                  </div>
                  <div>
                    <p className="font-bold">Onboarding & Access</p>
                    <p style={{ color: 'var(--ink-soft)' }}>You'll receive access to developer documentation, APIs, and community channels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--sage)', color: 'var(--brass)' }}>
                    3
                  </div>
                  <div>
                    <p className="font-bold">Project Assignment</p>
                    <p style={{ color: 'var(--ink-soft)' }}>We'll match you with projects aligned with your skills and interests.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-xs text-center" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              This is a developer community application. All contributions follow open-source principles and are governed by the Jowih Foundation's mission and technical standards.
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
