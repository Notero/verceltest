import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetailPage from "@/components/public/templates/newsDetailPage";
import { fetchNewsItem } from "@/lib/content/news";
import { resolveNewsCover } from "@/lib/supabase/storage";
import { absoluteUrl } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ whitepaperId: string }>;
}): Promise<Metadata> {
  const { whitepaperId } = await params;
  const item = await fetchNewsItem("whitepaper", whitepaperId);
  if (!item) return { title: "Not found · Intrastack" };
  return {
    title: `${item.title} · Intrastack`,
    description: item.excerpt,
    alternates: { canonical: `/news/whitepaper/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      url: absoluteUrl(`/news/whitepaper/${item.slug}`),
      images: resolveNewsCover(item) ? [{ url: resolveNewsCover(item)! }] : [],
      publishedTime: item.published_at,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ whitepaperId: string }>;
}) {
  const { whitepaperId } = await params;
  const item = await fetchNewsItem("whitepaper", whitepaperId);
  if (!item) notFound();
  return (
    <NewsDetailPage
      item={item}
      config={{ basePath: "/news/whitepaper", crumb: "White Papers", backLabel: "All whitepapers" }}
    />
  );
}
