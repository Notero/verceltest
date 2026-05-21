import type { Metadata } from "next";
import NewsListPage from "@/components/public/templates/newsListPage";
import { fetchNewsList } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "Blogs · Intrastack",
  description:
    "Field notes from the Intrastack engineering and platform teams — what's shipping, what's working, and what isn't.",
  alternates: { canonical: "/news/blogs" },
};

export default async function Page() {
  const items = await fetchNewsList("blog");
  return (
    <NewsListPage
      config={{
        kind: "blog",
        basePath: "/news/blogs",
        crumb: "Blogs",
        eyebrow: "News · Blogs",
        headline: { lead: "Field notes from", emph: "the team", tail: "shipping it." },
        lede: "Engineering deep-dives, platform retrospectives, and the lessons we keep relearning so you don't have to.",
        heroImage: "/images/unsplash/photo-1499750310107-5fef28a66643-1600.webp",
        emptyLabel: "No blog posts yet — check back soon.",
      }}
      items={items}
    />
  );
}
