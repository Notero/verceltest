import type { Metadata } from "next";
import NewsListPage from "@/components/public/templates/newsListPage";
import { fetchNewsList } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "White Papers · Intrastack",
  description:
    "In-depth playbooks, reference architectures, and frameworks from the Intrastack practice — distilled into something you can actually act on.",
  alternates: { canonical: "/news/whitepaper" },
};

export default async function Page() {
  const items = await fetchNewsList("whitepaper");
  return (
    <NewsListPage
      config={{
        kind: "whitepaper",
        basePath: "/news/whitepaper",
        crumb: "White Papers",
        eyebrow: "News · White Papers",
        headline: { lead: "Playbooks for", emph: "real estates", tail: "and real teams." },
        lede: "Reference architectures, maturity models, and field-tested frameworks — written by the engineers who've shipped them.",
        heroImage: "/images/unsplash/photo-1456406644174-8ddd4cd52a06-1600.webp",
        emptyLabel: "No whitepapers yet — check back soon.",
      }}
      items={items}
    />
  );
}
