import Link from "next/link";
import { ChevronRight, ArrowLeft, Download, Clock } from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { NewsItem } from "@/lib/content/news";
import { newsImageUrl } from "@/lib/supabase/storage";

export type NewsDetailConfig = {
  basePath: string; // e.g. "/news/blogs"
  crumb: string; // e.g. "Blogs"
  backLabel: string; // e.g. "All blogs"
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

export default function NewsDetailPage({
  item,
  config,
}: {
  item: NewsItem;
  config: NewsDetailConfig;
}) {
  const isWhitepaper = item.kind === "whitepaper";
  const isStory = item.kind === "client_story";

  const cover = newsImageUrl(item.cover_image_path) ?? item.cover_image;
  const image2 = newsImageUrl(item.image_2_path);
  const image3 = newsImageUrl(item.image_3_path);

  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={[
          articleSchema({
            headline: item.title,
            description: item.excerpt,
            url: `${config.basePath}/${item.slug}`,
            images: cover ? [cover] : [],
            datePublished: item.published_at,
            dateModified: item.published_at,
            authorName: item.author ?? item.client ?? "Intrastack",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: config.crumb, url: config.basePath },
            { name: item.title, url: `${config.basePath}/${item.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="w-full bg-background border-b border-base-300">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="inline size-3 mx-1" />
            <Link href={config.basePath} className="hover:text-primary">{config.crumb}</Link>
            <ChevronRight className="inline size-3 mx-1" />
            <Badge className="ml-1 align-middle">{item.tag}</Badge>
          </div>

          <h1 className="anim-rise mt-6 text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
            {item.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{formatDate(item.published_at)}</span>
            {item.author && <><span>·</span><span>By {item.author}</span></>}
            {item.read_time && <><span>·</span><span className="inline-flex items-center gap-1"><Clock className="size-4" />{item.read_time} read</span></>}
            {item.client && <><span>·</span><span>{item.client}</span></>}
            {item.industry && <><span>·</span><span>{item.industry}</span></>}
          </div>

          {isStory && item.metric_value && (
            <div className="mt-8 inline-flex items-baseline gap-3 rounded-lg border border-base-300 bg-base-200/60 px-5 py-4">
              <span className="text-4xl font-bold text-primary">{item.metric_value}</span>
              <span className="text-sm text-muted-foreground">{item.metric_label}</span>
            </div>
          )}
        </div>

        {cover && (
          <div className="mx-auto max-w-5xl px-6 pb-12 lg:pb-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-base-300 bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt={item.title}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* BODY */}
      <section className="w-full bg-background py-16 lg:py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl text-foreground leading-relaxed font-medium">
            {item.excerpt}
          </p>

          {item.body ? (
            <article className="mt-10 text-base text-foreground/90 leading-relaxed whitespace-pre-line">
              {item.body}
            </article>
          ) : (
            <p className="mt-10 text-sm text-muted-foreground italic">
              Full content coming soon.
            </p>
          )}

          {(image2 || image3) && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {image2 && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-base-300 bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image2}
                    alt={`${item.title} — additional image`}
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              )}
              {image3 && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-base-300 bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image3}
                    alt={`${item.title} — additional image`}
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {isWhitepaper && (
            <div className="mt-12 rounded-2xl border border-base-300 bg-accent p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">Whitepaper · PDF</div>
                <div className="mt-2 text-lg font-bold text-foreground">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.pages ? `${item.pages} pages` : ""}{item.pages && item.file_size ? " · " : ""}{item.file_size ?? ""}
                </div>
              </div>
              <Button asChild>
                <a href={item.file_url ?? "#"}>
                  <Download className="size-4" /> Download PDF
                </a>
              </Button>
            </div>
          )}

          <div className="mt-14 pt-8 border-t border-base-300">
            <Button asChild variant="link" className="px-0">
              <Link href={config.basePath}>
                <ArrowLeft className="size-4" /> {config.backLabel}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
