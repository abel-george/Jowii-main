import Link from 'next/link';
import { ArrowLeft, ArrowRight, Handshake, Heart, Lightbulb, Users } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const contributionAreas = [
  {
    title: 'Infrastructure & technology',
    description: 'Help think through connectivity, platforms, services, and the systems that could support them.',
    icon: Lightbulb,
  },
  {
    title: 'Research, policy & law',
    description: 'Bring research, legal, governance, policy, and standards expertise to the conversation.',
    icon: Users,
  },
  {
    title: 'Partnerships & delivery',
    description: 'Explore how institutions, businesses, educators, and communities might collaborate.',
    icon: Handshake,
  },
];

export default function PartnerCommunityPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="border-b border-[var(--line-light)] pt-28 pb-8 sm:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/partner"
            className="mb-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink-soft)]"
          >
            <ArrowLeft className="h-4 w-4 text-[var(--brass)]" aria-hidden="true" />
            Back to Partnership Options
          </Link>
          <p className="mb-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
            PARTNER COMMUNITY
          </p>
          <h1 className="max-w-3xl text-3xl uppercase tracking-tight sm:text-4xl">
            Many disciplines. A shared conversation.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            Jowih is multidisciplinary. We welcome people and organizations who want to discuss the vision, ask hard questions, and explore where their experience may be useful.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {contributionAreas.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border border-[var(--line-light)] bg-white p-6"
            >
              <Icon className="mb-5 h-7 w-7 text-[var(--green)]" aria-hidden="true" />
              <h2 className="mb-3 text-lg font-bold uppercase tracking-tight">{title}</h2>
              <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{description}</p>
            </article>
          ))}
        </div>

        <aside className="mt-8 border border-[var(--line-light)] bg-[var(--sage)] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Heart className="mt-1 h-6 w-6 shrink-0 text-[var(--green)]" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Join the open community</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)]">
                The Discord is the place to meet others, discuss partnership ideas, and find out how to take part. This page does not collect applications or send personal details to a spreadsheet.
              </p>
              <a
                href={siteData.config.discordCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 bg-[var(--ink)] px-6 py-3 text-sm font-mono font-bold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
              >
                Join ASTA OS on Discord
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
