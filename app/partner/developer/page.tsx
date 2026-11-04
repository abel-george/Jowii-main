import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Smartphone,
  Terminal,
} from 'lucide-react';
import { siteData } from '@/lib/site-data';

const developmentAreas = [
  { title: 'Infrastructure & APIs', description: 'Explore interfaces, identity, trust, and integration needs.', icon: Terminal },
  { title: 'Cloud & connectivity', description: 'Discuss deployment models, networks, compute, and edge systems.', icon: Cloud },
  { title: 'Applications', description: 'Imagine first-party and independently operated services.', icon: Smartphone },
  { title: 'Digital corridors', description: 'Consider how digital systems might support wider infrastructure.', icon: Globe },
  { title: 'Payments & data', description: 'Contribute perspectives on interoperable payment and data systems.', icon: Database },
  { title: 'AI & security', description: 'Help reason about intelligence, privacy, security, and trust.', icon: Cpu },
];

export default function DeveloperCommunityPage() {
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
            DEVELOPERS COMMUNITY
          </p>
          <h1 className="max-w-3xl text-3xl uppercase tracking-tight sm:text-4xl">
            Help explore what ASTA OS could become.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            ASTA OS is a research and engineering programme, not a finished platform. Developers and technical practitioners are invited to discuss its open questions and possible approaches in the community.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developmentAreas.map(({ title, description, icon: Icon }) => (
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
            <GitBranch className="mt-1 h-6 w-6 shrink-0 text-[var(--green)]" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Discuss ideas with the community</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)]">
                Join the ASTA OS Discord to meet other contributors and follow the conversation. There is no application form or spreadsheet submission on this page.
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

        <p className="mx-auto mt-8 max-w-6xl text-xs text-[var(--muted)]">
          The ASTA Super App is a first-party vision showcase; ASTA OS is architected independently.
        </p>
      </section>
    </main>
  );
}
