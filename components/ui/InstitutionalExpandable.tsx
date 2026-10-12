'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export interface ExpandableItem {
  number: string;
  title: string;
  summary: string;
  body: React.ReactNode;
}

/**
 * Institutional expandable list, styled after the African Union / UN "priority
 * areas" pattern: a numbered column of headings; clicking one opens its detail
 * in place while the others stay collapsed. Purely presentational and client-side.
 */
export function InstitutionalExpandable({ items, allowMultiple = false }: { items: ExpandableItem[]; allowMultiple?: boolean }) {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpen((current) => {
      const isOpen = current.includes(index);
      if (isOpen) return current.filter((i) => i !== index);
      return allowMultiple ? [...current, index] : [index];
    });
  };

  return (
    <div className="institutional-expandable">
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        return (
          <div className={`institutional-expandable__item${isOpen ? ' is-open' : ''}`} key={item.number}>
            <button
              type="button"
              className="institutional-expandable__trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="institutional-expandable__number">{item.number}</span>
              <span className="institutional-expandable__heading">
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </span>
              <Plus aria-hidden="true" className="institutional-expandable__icon" />
            </button>
            <div className="institutional-expandable__panel" hidden={!isOpen}>
              <div className="institutional-expandable__content">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}