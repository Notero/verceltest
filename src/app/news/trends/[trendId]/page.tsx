import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetailPage from "@/components/public/templates/newsDetailPage";
import { fetchNewsItem } from "@/lib/content/news";
import { resolveNewsCover } from "@/lib/supabase/storage";
import { absoluteUrl } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trendId: string }>;
}): Promise<Metadata> {
  const { trendId } = await params;
  const item = await fetchNewsItem("trend", trendId);
  if (!item) return { title: "Not found · Intrastack" };
  return {
    title: `${item.title} · Intrastack`,
    description: item.excerpt,
    alternates: { canonical: `/news/trends/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      url: absoluteUrl(`/news/trends/${item.slug}`),
      images: resolveNewsCover(item) ? [{ url: resolveNewsCover(item)! }] : [],
      publishedTime: item.published_at,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ trendId: string }>;
}) {
  const { trendId } = await params;
  const item = await fetchNewsItem("trend", trendId);
  if (!item) notFound();
  return (
    <NewsDetailPage
      item={item}
      config={{ basePath: "/news/trends", crumb: "Tech News & Trends", backLabel: "All trends" }}
    />
  );
}
