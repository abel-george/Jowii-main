import React from 'react';

type FormattedBullet = { text: React.ReactNode; nested: boolean };

function isBullet(line: string) {
  const trimmedLine = line.trim();
  return /^(?:\(?[a-z]\)|\(?[ivx]+\.|\d+[.)]|-)\s*/i.test(trimmedLine)
    || /^[•*]\s*/.test(trimmedLine)
    || (/\s-\s/.test(trimmedLine) && !/^CORRIDOR\s+/i.test(trimmedLine));
}

function formatLine(line: string) {
  const trimmedLine = line.trim().replace(/^#\s+/, '');
  const numberedHeading = trimmedLine.match(/^\d+(?:\.\d+)*\s+(.+)$/);
  const letterBullet = trimmedLine.match(/^\(?[a-z]\)\s*(.*)$/i);
  const romanBullet = trimmedLine.match(/^\(?[ivx]+\.\s*(.*)$/i);
  const numberedBullet = trimmedLine.match(/^\d+[.)]\s*(.*)$/);
  const dashBullet = trimmedLine.match(/^-\s*(.*)$/);
  const dotBullet = trimmedLine.match(/^[•*]\s*(.*)$/);
  const namedBullet = trimmedLine.match(/^(.+?)\s+-\s+(.*)$/);
  const uppercaseHeading = /^[A-Z0-9 &—–-]+$/.test(trimmedLine) && trimmedLine.length > 8;
  const shortHeading = trimmedLine.length <= 72 && trimmedLine.split(/\s+/).length <= 8 && /^[A-Z][^.!?:]+$/.test(trimmedLine);

  if (numberedHeading) return { type: 'heading', text: trimmedLine } as const;
  if (uppercaseHeading) return { type: 'heading', text: trimmedLine } as const;
  if (shortHeading) return { type: 'heading', text: trimmedLine } as const;
  if (letterBullet) return { type: 'bullet', text: letterBullet[1], nested: false } as const;
  if (romanBullet) return { type: 'bullet', text: romanBullet[1], nested: true } as const;
  if (numberedBullet) return { type: 'bullet', text: numberedBullet[1], nested: false } as const;
  if (dashBullet) return { type: 'bullet', text: dashBullet[1], nested: false } as const;
  if (dotBullet) return { type: 'bullet', text: dotBullet[1], nested: false } as const;
  if (namedBullet) return { type: 'bullet', text: <><strong>{namedBullet[1]}</strong> — {namedBullet[2]}</>, nested: false } as const;
  if (/^CORRIDOR\s+/i.test(trimmedLine)) return { type: 'heading', text: trimmedLine } as const;
  return { type: 'paragraph', text: trimmedLine } as const;
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
      content.push(<figure className="source-document__image" key={`image-${lineIndex}`}><img src={image[1]} alt={image[2] || 'Document illustration'} /><figcaption>{image[2]}</figcaption></figure>);
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
      content.push(<div className="source-document__table-wrap" key={`table-${lineIndex}`}><table className="source-document__table"><tbody>{rows.map((row, rowIndex) => <tr key={`row-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>);
      lineIndex += 1;
      continue;
    }

    if (isBullet(rawLine)) {
      const bullets: FormattedBullet[] = [];
      while (lineIndex < lines.length && isBullet(lines[lineIndex])) {
        const formatted = formatLine(lines[lineIndex]);
        if (formatted.type === 'bullet') bullets.push(formatted);
        lineIndex += 1;
      }
      content.push(
        <ul className="source-document__list" key={`list-${lineIndex}`}>
          {bullets.map((bullet, bulletIndex) => <li className={bullet.nested ? 'source-document__nested' : undefined} key={`${bulletIndex}-${bullet.text}`}>{bullet.text}</li>)}
        </ul>
      );
      continue;
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
