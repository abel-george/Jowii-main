import fs from 'node:fs';
import path from 'node:path';

export interface ArchiveDocument {
  slug: string;
  title: string;
  source: string;
  sourceType: string;
  textFile: string;
  media: string[];
  characters: number;
  lines: number;
}

const manifestPath = path.join(process.cwd(), 'public/documents/archive-manifest.json');

export function getArchiveDocuments(): ArchiveDocument[] {
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as ArchiveDocument[];
}

export function getArchiveDocument(slug: string): ArchiveDocument | undefined {
  return getArchiveDocuments().find((document) => document.slug === slug);
}

export function readArchiveDocument(document: ArchiveDocument): string {
  return fs.readFileSync(path.join(process.cwd(), 'public', document.textFile), 'utf8');
}
