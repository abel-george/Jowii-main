import Link from 'next/link';
import { ArrowUpRight, FileText } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export function GagFrameworkIndex() {
  const groups = [...new Set(siteData.gag.frameworks.map((framework) => framework.group))];

  return (
    <section id="framework-index" className="gag-framework-index" aria-labelledby="gag-framework-index-title">
      <div className="gag-framework-index__heading">
        <div>
          <p className="institutional-eyebrow">GAG SOURCE PAPER · FRAMEWORK INDEX</p>
          <h2 id="gag-framework-index-title">The frameworks, at a glance.</h2>
          <p>Quick descriptions of the principal frameworks and programs named in the GAG paper. These describe proposals, not completed or operational programs.</p>
        </div>
        <Link href="/documents/The%20GAG%20initiative%20.pdf" target="_blank" rel="noreferrer">
          <FileText aria-hidden="true" size={16} /> Open the full GAG paper <ArrowUpRight aria-hidden="true" size={15} />
        </Link>
      </div>

      {groups.map((group) => (
        <div className="gag-framework-group" key={group}>
          <h3>{group}</h3>
          <div className="gag-framework-group__list">
            {siteData.gag.frameworks.filter((framework) => framework.group === group).map((framework, index) => (
              <Link className="gag-framework-entry" href={`/documents#gag-framework-${framework.id}`} key={framework.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h4>{framework.title}</h4><p>{framework.detail}</p></div>
                <small>Read detail <ArrowUpRight aria-hidden="true" size={13} /></small>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}