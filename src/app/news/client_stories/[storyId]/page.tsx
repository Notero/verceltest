import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetailPage from "@/components/public/templates/newsDetailPage";
import { fetchNewsItem } from "@/lib/content/news";
import { resolveNewsCover } from "@/lib/supabase/storage";
import { absoluteUrl } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ storyId: string }>;
}): Promise<Metadata> {
  const { storyId } = await params;
  const item = await fetchNewsItem("client_story", storyId);
  if (!item) return { title: "Not found · Intrastack" };
  return {
    title: `${item.title} · Intrastack`,
    description: item.excerpt,
    alternates: { canonical: `/news/client_stories/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      url: absoluteUrl(`/news/client_stories/${item.slug}`),
      images: resolveNewsCover(item) ? [{ url: resolveNewsCover(item)! }] : [],
      publishedTime: item.published_at,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ storyId: string }>;
}) {
  const { storyId } = await params;
  const item = await fetchNewsItem("client_story", storyId);
  if (!item) notFound();
  return (
    <NewsDetailPage
      item={item}
      config={{ basePath: "/news/client_stories", crumb: "Client Stories", backLabel: "All client stories" }}
    />
  );
}
