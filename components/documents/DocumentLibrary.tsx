import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Download, FileText, ShieldAlert } from 'lucide-react';
import { siteData } from '@/lib/site-data';
import { visualAssets } from '@/lib/visual-assets';
import { LightboxImage } from '@/components/ui/ImageLightbox';

export function DocumentLibrary() {
  return (
    <main className="document-library">
      <section className="document-library__hero">
        <div className="document-container">
          <p className="institutional-eyebrow institutional-eyebrow--gold">DOCUMENTS · PUBLIC ARCHIVE</p>
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
            <article className="document-record" id={doc.anchor} key={doc.title}>
              <div className="document-record__number">{String(index + 1).padStart(2, '0')}</div>
              <div className="document-record__body">
                <div className="document-record__meta"><span>{doc.category}</span><span>{doc.status}</span></div>
                <h2>{doc.title}</h2>
                <p className="document-record__description">{doc.description}</p>
                <ul>
                  {doc.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                {doc.anchor === 'gag-initiative' && (
                  <div className="gag-document-framework-list">
                    <h3>GAG frameworks summarized</h3>
                    <p>Descriptions normalized from the source PDF for quick review.</p>
                    <div>
                      {siteData.gag.frameworks.map((framework) => (
                        <article id={`gag-framework-${framework.id}`} key={framework.id}>
                          <span>{framework.group}</span>
                          <h4>{framework.title}</h4>
                          <p>{framework.detail}</p>
                          <Link href="/gag#framework-index">Back to the GAG index <ArrowUpRight aria-hidden="true" size={13} /></Link>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
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

      <section className="document-library__visuals" aria-labelledby="document-visual-index-title">
        <div className="document-container">
          <div className="institutional-section-heading institutional-section-heading--split">
            <div>
              <p className="institutional-eyebrow">CONCEPT & BRAND ASSETS</p>
              <h2 id="document-visual-index-title">Project visuals, with provenance.</h2>
            </div>
            <p>{visualAssets.length} supplied concept and identity assets. Visuals do not establish that projects, facilities or services are built or operating.</p>
          </div>
          <div className="document-visual-grid">
            {visualAssets.map((asset) => (
              <figure key={asset.image} className="document-visual">
                <div className="document-visual__image">
                  <LightboxImage src={asset.image} alt={asset.alt} className="w-full h-full">
                    <Image src={asset.image} alt={asset.alt} width={1200} height={800} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  </LightboxImage>
                </div>
                <figcaption><span>{asset.area}</span><strong>{asset.title}</strong><small>{asset.disclosure}</small></figcaption>
              </figure>
            ))}
          </div>
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