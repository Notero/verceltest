import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchLatestNews, type NewsItem, type NewsKind } from "@/lib/content/news";
import { newsImageUrl } from "@/lib/supabase/storage";
import Reveal, { RevealGroup } from "@/components/public/reveal";

const KIND_HREF: Record<NewsKind, string> = {
  blog: "/news/blogs",
  trend: "/news/trends",
  whitepaper: "/news/whitepaper",
  client_story: "/news/client_stories",
};

const KIND_LABEL: Record<NewsKind, string> = {
  blog: "Blog",
  trend: "Trend",
  whitepaper: "Whitepaper",
  client_story: "Client story",
};

function detailHref(item: NewsItem): string {
  return `${KIND_HREF[item.kind]}/${item.slug}`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function News() {
  const items = await fetchLatestNews(3);

  return (
    <section className="w-full bg-accent py-28 md:py-32 px-6" id="news">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-end">
          <Reveal direction="right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              News &amp; <span className="italic font-serif text-secondary">updates.</span>
            </h2>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What we&apos;re shipping, who&apos;s joining, and where we&apos;re opening next.
            </p>
          </Reveal>
        </div>

        {items.length === 0 ? (
          <Reveal direction="scale">
            <div className="rounded-2xl border border-dashed border-base-300 bg-base-100/40 p-12 text-center">
              <p className="text-base font-semibold text-foreground">
                Fresh updates are on the way.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Check back soon — or subscribe via our newsletter.
              </p>
            </div>
          </Reveal>
        ) : (
          <RevealGroup direction="up" stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((n) => {
              const cover = newsImageUrl(n.cover_image_path) ?? n.cover_image;
              return (
              <Link
                key={`${n.kind}-${n.slug}`}
                href={detailHref(n)}
                className="group hover-lift rounded-2xl overflow-hidden border border-base-300 bg-base-100 hover:border-primary flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  {cover && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cover}
                      alt={n.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-primary-content px-3 py-1 text-xs font-semibold">
                    {KIND_LABEL[n.kind]}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {formatDate(n.published_at)} · {n.tag}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground leading-snug">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {n.excerpt}
                  </p>
                </div>
              </Link>
              );
            })}
          </RevealGroup>
        )}

        <Reveal direction="up" delay={300}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/news/blogs"
              className="inline-flex items-center gap-2 rounded-lg border border-base-300 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Read all updates <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
