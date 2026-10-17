import React from 'react';

type FormattedBullet = { text: React.ReactNode; nested: boolean };

function isBullet(line: string) {
  const trimmedLine = line.trim();
  return /^(?:\(?[a-z]\)|\(?[ivx]+\.|\d+[.)]|-)\s*/i.test(trimmedLine)
    || (/\s-\s/.test(trimmedLine) && !/^CORRIDOR\s+/i.test(trimmedLine));
}

function formatLine(line: string) {
  const trimmedLine = line.trim();
  const numberedHeading = trimmedLine.match(/^\d+(?:\.\d+)*\s+(.+)$/);
  const letterBullet = trimmedLine.match(/^\(?[a-z]\)\s*(.*)$/i);
  const romanBullet = trimmedLine.match(/^\(?[ivx]+\.\s*(.*)$/i);
  const numberedBullet = trimmedLine.match(/^\d+[.)]\s*(.*)$/);
  const dashBullet = trimmedLine.match(/^-\s*(.*)$/);
  const namedBullet = trimmedLine.match(/^(.+?)\s+-\s+(.*)$/);
  const uppercaseHeading = /^[A-Z0-9 &—–-]+$/.test(trimmedLine) && trimmedLine.length > 8;

  if (numberedHeading) return { type: 'heading', text: numberedHeading[1] } as const;
  if (uppercaseHeading) return { type: 'heading', text: trimmedLine } as const;
  if (letterBullet) return { type: 'bullet', text: letterBullet[1], nested: false } as const;
  if (romanBullet) return { type: 'bullet', text: romanBullet[1], nested: true } as const;
  if (numberedBullet) return { type: 'bullet', text: numberedBullet[1], nested: false } as const;
  if (dashBullet) return { type: 'bullet', text: dashBullet[1], nested: false } as const;
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
