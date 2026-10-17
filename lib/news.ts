export interface NewsStory {
  id: string | number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body?: string;
  image?: string;
  video?: string;
  href?: string;
}

export function newsSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90);
}

export function newsHref(story: Pick<NewsStory, 'title' | 'href'>): string {
  if (story.href) return story.href;
  return `/news/${newsSlug(story.title)}`;
}
