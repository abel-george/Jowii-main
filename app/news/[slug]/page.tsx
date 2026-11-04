import { NewsStoryClient } from '@/components/news/NewsStoryClient';

export default async function NewsStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <NewsStoryClient slug={slug} />;
}
