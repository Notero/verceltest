import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetailPage from "@/components/public/templates/newsDetailPage";
import { fetchNewsItem } from "@/lib/content/news";
import { resolveNewsCover } from "@/lib/supabase/storage";
import { absoluteUrl } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  const { blogId } = await params;
  const item = await fetchNewsItem("blog", blogId);
  if (!item) return { title: "Not found · Intrastack" };
  return {
    title: `${item.title} · Intrastack`,
    description: item.excerpt,
    alternates: { canonical: `/news/blogs/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      url: absoluteUrl(`/news/blogs/${item.slug}`),
      images: resolveNewsCover(item) ? [{ url: resolveNewsCover(item)! }] : [],
      publishedTime: item.published_at,
      authors: item.author ? [item.author] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const item = await fetchNewsItem("blog", blogId);
  if (!item) notFound();
  return (
    <NewsDetailPage
      item={item}
      config={{ basePath: "/news/blogs", crumb: "Blogs", backLabel: "All blog posts" }}
    />
  );
}
