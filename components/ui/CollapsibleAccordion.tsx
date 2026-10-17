'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface AccordionContextValue {
  openId: string | null;
  requestOpen: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue>({
  openId: null,
  requestOpen: () => {},
});

/**
 * Single-open accordion used by the Governance page. It reuses the
 * institutional-expandable look from the home page: only one section can be
 * open at a time — opening another closes the current one — so the long
 * register stays compact. Anchor links (#id) open their section automatically.
 */
export function CollapsibleAccordion({
  defaultOpenId,
  children,
}: {
  defaultOpenId?: string;
  children: React.ReactNode;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const requestOpen = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <AccordionContext.Provider value={{ openId, requestOpen }}>
      <div className="institutional-expandable">{children}</div>
    </AccordionContext.Provider>
  );
}

export function CollapsibleAccordionItem({
  id,
  number,
  title,
  summary,
  children,
}: {
  id: string;
  number: string;
  title: string;
  summary?: string;
  children: React.ReactNode;
}) {
  const { openId, requestOpen } = useContext(AccordionContext);
  const isOpen = openId === id;

  // Open the linked section when arriving via an anchor (sidebar navigation).
  useEffect(() => {
    const syncWithHash = () => {
      if (window.location.hash === `#${id}`) requestOpen(id);
    };
    syncWithHash();
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, [id, requestOpen]);

  return (
    <div className={`institutional-expandable__item${isOpen ? ' is-open' : ''}`} id={id}>
      <button
        type="button"
        className="institutional-expandable__trigger"
        onClick={() => requestOpen(id)}
        aria-expanded={isOpen}
      >
        <span className="institutional-expandable__number">{number}</span>
        <span className="institutional-expandable__heading">
          <strong>{title}</strong>
          {summary ? <span>{summary}</span> : null}
        </span>
        <Plus aria-hidden="true" className="institutional-expandable__icon" />
      </button>
      <div className="institutional-expandable__panel" hidden={!isOpen}>
        <div className="institutional-expandable__content">{id.startsWith('fw-') ? <Link href={`/framework/${id}`} className="framework-source-link">Open full source page <span aria-hidden="true">↗</span></Link> : null}{children}</div>
      </div>
    </div>
  );
}
