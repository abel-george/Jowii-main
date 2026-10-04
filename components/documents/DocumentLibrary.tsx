import Link from 'next/link';
import { ArrowUpRight, Download, FileText, ShieldAlert } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export function DocumentLibrary() {
  return (
    <main className="document-library">
      <section className="document-library__hero">
        <div className="document-container">
          <p className="institutional-eyebrow institutional-eyebrow--gold">SOURCE PAPERS · PUBLIC ARCHIVE</p>
          <h1>Read the proposals at their source.</h1>
          <p>
            Nine PDFs set out the proposed Foundation, governance, infrastructure, technology and financial architecture.
            Each summary below identifies what the document covers and what remains prospective.
          </p>
          <div className="document-library__count"><FileText aria-hidden="true" size={17} /> {siteData.documents.length} source documents <span>·</span> Original PDFs</div>
        </div>
      </section>

      <section className="document-library__list" aria-label="Jowih source documents">
        <div className="document-container">
          {siteData.documents.map((doc, index) => (
            <article className="document-record" key={doc.title}>
              <div className="document-record__number">{String(index + 1).padStart(2, '0')}</div>
              <div className="document-record__body">
                <div className="document-record__meta"><span>{doc.category}</span><span>{doc.status}</span></div>
                <h2>{doc.title}</h2>
                <p className="document-record__description">{doc.description}</p>
                <ul>
                  {doc.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
              <div className="document-record__actions">
                <span>{doc.pages} pages · PDF</span>
                <a href={doc.file} target="_blank" rel="noreferrer">
                  Open PDF <ArrowUpRight aria-hidden="true" size={15} />
                </a>
                <a href={doc.file} download>
                  Download <Download aria-hidden="true" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="document-library__notice">
        <div className="document-container document-library__notice-inner">
          <ShieldAlert aria-hidden="true" size={22} />
          <div>
            <h2>Status and use</h2>
            <p>
              These papers describe proposals and drafts. Inclusion in this archive does not establish incorporation, licensing,
              government agreement, partner appointment, product availability, financial performance or regulatory approval.
              Financial projections and sample unit values are illustrative unless verified in final legal documents.
            </p>
          </div>
          <Link href="/donate">Pre-launch donation terms <ArrowUpRight aria-hidden="true" size={15} /></Link>
        </div>
      </section>
    </main>
  );
}