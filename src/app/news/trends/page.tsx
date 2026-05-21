import type { Metadata } from "next";
import NewsListPage from "@/components/public/templates/newsListPage";
import { fetchNewsList } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "Tech News & Trends · Intrastack",
  description:
    "What's shifting across cloud, AI, security, and data — read in the time it takes to finish your coffee.",
  alternates: { canonical: "/news/trends" },
};

export default async function Page() {
  const items = await fetchNewsList("trend");
  return (
    <NewsListPage
      config={{
        kind: "trend",
        basePath: "/news/trends",
        crumb: "Tech News & Trends",
        eyebrow: "News · Trends",
        headline: { lead: "What's moving in", emph: "the stack", tail: "right now." },
        lede: "A pragmatic read on where cloud, AI, security, and data are actually heading — without the buzzword fatigue.",
        heroImage: "/images/unsplash/photo-1518770660439-4636190af475-1600.webp",
        emptyLabel: "No trend pieces yet — check back soon.",
      }}
      items={items}
    />
  );
}
