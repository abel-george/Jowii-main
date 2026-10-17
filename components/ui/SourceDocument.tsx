import React from 'react';

type FormattedBullet = { text: React.ReactNode; nested: boolean };

const SMALL_WORDS = new Set(['a', 'an', 'the', 'and', 'or', 'of', 'to', 'in', 'on', 'at', 'for', 'by', 'vs', 'with', 'from', 'into']);

function isBullet(line: string) {
  const trimmedLine = line.trim();
  return /^(?:\(?[a-z]\)|\(?[ivx]+\.|\d+[.)]|-)\s*/i.test(trimmedLine)
    || /^[•*]\s*/.test(trimmedLine)
    || (/\s-\s/.test(trimmedLine) && !/^CORRIDOR\s+/i.test(trimmedLine));
}

// ALL-CAPS headings such as "SECTION 8: DATA GOVERNANCE FRAMEWORK" or
// "IMPLEMENTATION ROADMAP:" — colons and brackets are common in the source.
function isCapsHeading(value: string) {
  const cleaned = value.replace(/[\s:–—-]+$/g, '');
  return cleaned.length > 8 && /^[A-Z0-9][A-Z0-9 &()'.:/–—-]*$/.test(cleaned);
}

// Title Case headings such as "Government Contributions" or "How Co-Development
// Ties to Exchange". Every word must be capitalized (small words allowed), so
// sentence-case body lines like "Phase 1: Observatory setup and pilot reporting"
// or "Voluntary participation by Member States" never become headings.
function isTitleHeading(value: string) {
  if (value.length > 60 || /[:.!?]/.test(value) || /\d/.test(value)) return false;
  if (/^\(?[a-z]\)\s*|^\(?[ivx]+\.\s*/i.test(value)) return false; // list markers are never headings
  const words = value.split(/\s+/).filter(Boolean);
  if (!words.length || words.length > 8) return false;
  return words.every((word) => {
    const bare = word.replace(/^[\(['"`]+/, '').replace(/[\])'"`]+$/, '');
    if (!/[A-Za-z]/.test(bare)) return true; // punctuation-only token, e.g. "("
    if (!/^[A-Z]/.test(bare)) return SMALL_WORDS.has(bare.toLowerCase());
    return true;
  });
}

function formatLine(line: string) {
  const trimmedLine = line.trim().replace(/^#\s+/, '');

  if (/^CORRIDOR\s+/i.test(trimmedLine)) return { type: 'heading', text: trimmedLine } as const;
  if (/^(?:ARTICLE|SECTION|CHAPTER|PART|ANNEX|APPENDIX)\s+/i.test(trimmedLine)) return { type: 'heading', text: trimmedLine } as const;

  // Numbered headings: "9.1 Phased Integration", "6. IMPLEMENTATION ROADMAP".
  const numbered = trimmedLine.match(/^(\d+(?:\.\d+)*\.?)\s+(.+)$/);
  if (numbered) {
    const remainder = numbered[2].trim();
    if (isCapsHeading(remainder) || isTitleHeading(remainder)) return { type: 'heading', text: trimmedLine } as const;
  }

  if (isCapsHeading(trimmedLine)) return { type: 'heading', text: trimmedLine.replace(/:$/, '') } as const;
  if (isTitleHeading(trimmedLine)) return { type: 'heading', text: trimmedLine } as const;

  const letterBullet = trimmedLine.match(/^\(?[a-z]\)\s*(.*)$/);
  const romanBullet = trimmedLine.match(/^\(?[ivx]+\.\s*(.*)$/);
  const numberedBullet = trimmedLine.match(/^\d+[.)]\s*(.*)$/);
  const dashBullet = trimmedLine.match(/^-\s*(.*)$/);
  const dotBullet = trimmedLine.match(/^[•*]\s*(.*)$/);
  const namedBullet = trimmedLine.match(/^(.+?)\s+-\s+(.*)$/);

  if (letterBullet && letterBullet[1]) return { type: 'bullet', text: letterBullet[1], nested: false } as const;
  if (romanBullet && romanBullet[1]) return { type: 'bullet', text: romanBullet[1], nested: true } as const;
  if (numberedBullet && numberedBullet[1]) return { type: 'bullet', text: numberedBullet[1], nested: false } as const;
  if (dashBullet && dashBullet[1]) return { type: 'bullet', text: dashBullet[1], nested: false } as const;
  if (dotBullet && dotBullet[1]) return { type: 'bullet', text: dotBullet[1], nested: false } as const;
  if (namedBullet && namedBullet[2]) return { type: 'bullet', text: <><strong>{namedBullet[1]}</strong> — {namedBullet[2]}</>, nested: false } as const;
  return { type: 'paragraph', text: trimmedLine } as const;
}

// Captions in the source markers are sometimes raw filesystem paths
// ("/home/user/Desktop/HEROGAG.png.png..."). Derive a readable label from
// the served filename instead of showing the path.
function imageCaption(src: string, caption: string) {
  if (caption && !caption.includes('/') && !caption.includes('\\')) return caption;
  const file = src.split('/').pop() || '';
  const label = file.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ').trim();
  return label ? label.replace(/\b\w/g, (character) => character.toUpperCase()) : 'Document illustration';
}

export function SourceDocument({ lines }: { lines: string[] }) {
  const content: React.ReactNode[] = [];
  let lineIndex = 0;

  while (lineIndex < lines.length) {
    const rawLine = lines[lineIndex].trim();
    if (!rawLine || /^ARTICLE\s+/i.test(rawLine)) {
      lineIndex += 1;
      continue;
    }

    const image = rawLine.match(/^\[\[IMAGE:(.+?)\|(.*?)\]\]$/);
    if (image) {
      const caption = imageCaption(image[1], image[2]);
      content.push(<figure className="source-document__image" key={`image-${lineIndex}`}><img src={image[1]} alt={caption} /><figcaption>{caption}</figcaption></figure>);
      lineIndex += 1;
      continue;
    }

    if (rawLine === '[[TABLE]]') {
      const rows: string[][] = [];
      lineIndex += 1;
      while (lineIndex < lines.length && lines[lineIndex].trim() !== '[[/TABLE]]') {
        const row = lines[lineIndex].trim();
        if (row.startsWith('|')) rows.push(row.replace(/^\|\s*|\s*\|$/g, '').split('|').map((cell) => cell.trim()));
        lineIndex += 1;
      }
      if (rows.length) content.push(<div className="source-document__table-wrap" key={`table-${lineIndex}`}><table className="source-document__table"><tbody>{rows.map((row, rowIndex) => <tr key={`row-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>);
      lineIndex += 1;
      continue;
    }

    if (isBullet(rawLine)) {
      const bullets: FormattedBullet[] = [];
      // Consume consecutive bullet lines, but stop at the first line that
      // formats as a heading or paragraph so it renders in place instead of
      // being swallowed into an empty (or wrong) list.
      while (lineIndex < lines.length) {
        const formatted = formatLine(lines[lineIndex]);
        if (formatted.type !== 'bullet') break;
        bullets.push({ text: formatted.text, nested: Boolean(formatted.nested) });
        lineIndex += 1;
      }
      if (bullets.length) {
        content.push(
          <ul className="source-document__list" key={`list-${lineIndex}`}>
            {bullets.map((bullet, bulletIndex) => <li className={bullet.nested ? 'source-document__nested' : undefined} key={`${bulletIndex}`}>{bullet.text}</li>)}
          </ul>
        );
        continue;
      }
      // The first line only looked like a bullet (e.g. "6. IMPLEMENTATION
      // ROADMAP" formats as a heading) — fall through and render it below.
    }

    const formatted = formatLine(rawLine);
    if (formatted.type === 'heading') {
      content.push(<h3 key={`heading-${lineIndex}`}>{formatted.text}</h3>);
    } else {
      content.push(<p key={`paragraph-${lineIndex}`}>{formatted.text}</p>);
    }
    lineIndex += 1;
  }

  return <div className="source-document">{content}</div>;
}

