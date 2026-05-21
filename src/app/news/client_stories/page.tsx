import type { Metadata } from "next";
import NewsListPage from "@/components/public/templates/newsListPage";
import { fetchNewsList } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "Client Stories · Intrastack",
  description:
    "How Intrastack's partners ship — from regulated industries to retail peak season. Outcomes, not adjectives.",
  alternates: { canonical: "/news/client_stories" },
};

export default async function Page() {
  const items = await fetchNewsList("client_story");
  return (
    <NewsListPage
      config={{
        kind: "client_story",
        basePath: "/news/client_stories",
        crumb: "Client Stories",
        eyebrow: "News · Client Stories",
        headline: { lead: "Outcomes from", emph: "the field", tail: "— not adjectives." },
        lede: "How our partners turned cloud, platform, and AI investments into measurable business results — told with the numbers attached.",
        heroImage: "/images/unsplash/photo-1521737711867-e3b97375f902-1600.webp",
        emptyLabel: "No client stories yet — check back soon.",
      }}
      items={items}
    />
  );
}
