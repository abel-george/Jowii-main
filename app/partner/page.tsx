'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, Users, Code, Award, Globe, Handshake, Sparkles, Rocket, Heart, CircleDollarSign, ShieldCheck, HeartHandshake, Landmark, Newspaper, Construction } from 'lucide-react';

export default function PartnerPage() {
  const partnershipOptions = [
    {
      id: 'donate',
      title: 'Support Pre-Launch',
      description: 'Support the pre-launch structural setup. Your contribution helps fund legal registration, trust establishment, and initial organizational costs to build the Foundation\'s independent governance structure.',
      type: 'Contribution',
      icon: CircleDollarSign,
      href: '/donate',
      color: 'var(--brass)'
    },
    {
      id: 'sponsor',
      title: 'Sponsor the Launch',
      description: 'Support pre-launch and full launch events through financial sponsorship, in-kind contributions, venue provision, production support, or media collaboration. Sponsorship provides visibility and helps create impactful launch experiences.',
      type: 'Sponsorship',
      icon: Award,
      href: '/partner/sponsor',
      color: 'var(--brass)'
    },
    {
      id: 'founding',
      title: 'Founding Supporters',
      description: 'Recognition for early donors who contribute during the pre-launch phase. Founding supporters are acknowledged for their role in establishing the independent governance structures and foundational systems.',
      type: 'Donation',
      icon: ShieldCheck,
      href: '/donate',
      color: 'var(--brass)'
    },
    {
      id: 'community',
      title: 'Partner Community',
      description: 'Join the ecosystem partnership community and submit your capabilities to help build Africa\'s next chapter. Whether you offer infrastructure, technology, financial services, research, or expertise—your contribution can accelerate continental development.',
      type: 'Partnership',
      icon: Users,
      href: '/partner/community',
      color: 'var(--green)'
    },
    {
      id: 'developer',
      title: 'Developer Community',
      description: 'Technical community for developers who want to build on ASTA OS, GAG infrastructure, and Jowih platforms. Contribute your skills to create APIs, applications, digital systems, and the technology infrastructure that will serve millions across Africa.',
      type: 'Technical',
      icon: Code,
      href: '/partner/developer',
      color: 'var(--ink)'
    },
    {
      id: 'diaspora',
      title: 'Diaspora Network',
      description: 'African diaspora organizations and individuals looking to connect and contribute from abroad. Your global perspective, resources, and networks can help bridge continents and accelerate development in your home countries.',
      type: 'Donation / Partnership',
      icon: Globe,
      href: '/partner/diaspora',
      color: 'var(--green)'
    },
    {
      id: 'institutional',
      title: 'Institutional Partnership',
      description: 'Universities, research institutions, ADFA states, and development organizations for collaboration and integration. Academic partnerships drive R&D, while state partnerships enable the Accelerated Development Framework Agreement.',
      type: 'Partnership',
      icon: Building2,
      href: '/partner/institutional',
      color: 'var(--ink)'
    },
    {
      id: 'investor',
      title: 'Investor Community (Future)',
      description: 'Register interest in future bond and fund structures. The proposed Master Ecosystem Fund and Grid Bond are investment vehicles subject to legal establishment, regulatory approval, and market conditions. Interest registration begins the conversation.',
      type: 'Future Investment',
      icon: Rocket,
      href: '/investor',
      color: 'var(--brass)'
    },
    {
      id: 'volunteer',
      title: 'Volunteers',
      description: 'Contribute your time and skills to help build the ecosystem. Whether you\'re a researcher, educator, professional, or student—your volunteer time can support various aspects of planning, outreach, and community engagement.',
      type: 'Volunteer',
      icon: HeartHandshake,
      href: '/partner/volunteer',
      color: 'var(--green)'
    },
    {
      id: 'cde',
      title: 'CDE Participation',
      description: 'Participate through Community Development Enterprises. CDEs are locally-led enterprises that deliver essential services—health, education, water, agriculture—while remaining accountable to their communities and the Foundation\'s mission.',
      type: 'Community',
      icon: Building2,
      href: '/partner/cde',
      color: 'var(--ink)'
    },
    {
      id: 'land',
      title: 'Landowners',
      description: 'Participate through the Land Acquisition & Settlement Facility. Landowners can contribute land for development projects in exchange for Master Fund Units or cash, enabling infrastructure while respecting property rights and sovereignty.',
      type: 'Participation',
      icon: Landmark,
      href: '/partner/land',
      color: 'var(--brass)'
    },
    {
      id: 'media',
      title: 'Media',
      description: 'Journalists, content creators, and media organizations can help tell the story of Africa\'s development. Accurate, thoughtful coverage builds public understanding and supports transparent communication about the ecosystem\'s progress.',
      type: 'Media',
      icon: Newspaper,
      href: '/partner/media',
      color: 'var(--ink)'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-6 border-b" style={{ borderColor: 'var(--line-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(21, 33, 30, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: 'var(--brass)' }}>
                PARTNERSHIP & COMMUNITY
              </span>
              <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
                Join the Jowih Ecosystem
              </h1>
            </div>
            <div className="hidden sm:block">
              <Handshake className="w-8 h-8" style={{ color: 'var(--brass)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl uppercase tracking-tight mb-4">Build Africa&apos;s Next Chapter Together</h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-soft)' }}>
            The Jowih ecosystem is built on partnership and community. Whether you want to sponsor an event, contribute your skills as a developer, or bring your organization into the ecosystem, there&apos;s a place for you.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Select a partnership pathway below to get started.
          </p>
        </div>

        {/* Partnership Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.id}
                href={option.href}
                className="group p-6 transition-all hover:shadow-lg"
                style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 shrink-0 transition-colors group-hover:scale-110" style={{ background: 'var(--sage)' }}>
                    <Icon className="w-6 h-6" style={{ color: option.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:underline">
                      {option.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                      {option.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mt-4" style={{ color: option.color }}>
                  Get Started
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
          <div className="flex items-start gap-4">
            <div className="p-3 shrink-0" style={{ background: 'var(--white)' }}>
              <Heart className="w-6 h-6" style={{ color: 'var(--brass)' }} />
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-tight mb-2">Mission-Aligned Partnership</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                All partnerships are guided by the Jowih Foundation&apos;s mission to accelerate African development. We seek partners who share our vision of a self-sustaining, continent-integrated ecosystem built on cooperation, mutual benefit, and long-term value creation.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
            Have questions about partnership opportunities?
          </p>
          <Link
            href="/partner/community"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors"
            style={{ background: 'var(--ink)', color: 'var(--white)' }}
          >
            Contact Partnership Team
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
