import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schemas";
import Reveal, { RevealGroup } from "@/components/public/reveal";

export type IndustryContent = {
  slug: string;
  name: string;
  noun: string;
  heroImage: string;
  headline: { lead: string; emph: string; tail: string };
  lede: string;
  pills: string[];
  stats?: { value: string; label: string }[];
  challenges: { letter: string; title: string; body: string }[];
  approach: { title: string; body: string }[];
  diagramLabel: string;
  caseStudy?: {
    tag: string;
    title: string;
    quote: string;
    image: string;
    results: { value: string; label: string }[];
  };
  related: { kind: "Service" | "Solution"; name: string; href: string }[];
};

export default function IndustryPage({ c }: { c: IndustryContent }) {
  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={[
          serviceSchema({
            name: `${c.name} — Intrastack`,
            path: `/industries/${c.slug}`,
            description: c.lede,
            image: c.heroImage,
            serviceType: `${c.name} solutions`,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries" },
            { name: c.name, url: `/industries/${c.slug}` },
          ]),
        ]}
      />
      {/* HERO — half image, half copy */}
      <section className="w-full bg-background border-b border-base-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.heroImage}
              alt={c.name}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background lg:to-background/0" />
            <div className="absolute top-6 left-6 text-xs font-semibold uppercase tracking-widest text-white/80">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="inline size-3 mx-1" />
              <Link href="/industries" className="hover:text-primary">Industries</Link>
              <ChevronRight className="inline size-3 mx-1" />
              <span className="text-primary">{c.name}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 lg:px-14 py-16 lg:py-20">
            <Reveal direction="down">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Industries · {c.name}
              </span>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-[1.08] tracking-tight">
                {c.headline.lead}{" "}
                <span className="italic font-serif text-secondary">{c.headline.emph}</span>{" "}
                {c.headline.tail}
              </h1>
            </Reveal>
            <Reveal direction="up" delay={260}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{c.lede}</p>
            </Reveal>

            <div className="mt-7 flex flex-wrap gap-2">
              {c.pills.map((p, i) => (
                <Reveal as="span" key={p} direction="scale" delay={350 + i * 50} className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/70 px-3 py-1 text-xs font-medium text-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal direction="up" delay={500}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Book a discovery call <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/news/client_stories"
                  className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  See case study
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS strip — only rendered if stats are provided */}
      {c.stats && c.stats.length > 0 && (
      <section className="w-full bg-accent py-14 px-6 border-b border-base-300">
        <RevealGroup direction="up" stagger={100} className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {c.stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </RevealGroup>
      </section>
      )}

      {/* CHALLENGES */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
                What&apos;s <span className="italic font-serif text-[#0E7490]">hard</span> here.
              </h2>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <p className="text-lg text-[#5C6473] leading-relaxed">
                Three challenges teams in {c.noun} keep telling us about — and what we do about them.
              </p>
            </Reveal>
          </div>

          <RevealGroup direction="up" stagger={100} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.challenges.map((ch) => (
              <div
                key={ch.title}
                className="group rounded-2xl border border-[#E2E6EE] bg-white p-8 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="grid place-items-center size-12 rounded-lg bg-primary/10 text-[#0E7490] font-bold">
                  {ch.letter}
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0F1622]">{ch.title}</h3>
                <p className="mt-3 text-sm text-[#5C6473] leading-relaxed">{ch.body}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* APPROACH */}
      <section className="w-full bg-background py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                How we <span className="italic font-serif text-secondary">play it.</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={150}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our standard motion, tuned to the realities of {c.noun}.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
            <ol className="space-y-4">
              {c.approach.map((step, i) => (
                <Reveal as="li" key={step.title} direction="left" delay={i * 100} className="flex gap-5 rounded-2xl border border-base-300 bg-base-200/60 p-6 hover:border-primary/50 transition-colors">
                  <span className="grid place-items-center size-10 shrink-0 rounded-lg bg-primary/15 text-primary font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal direction="right" delay={150} className="rounded-2xl border border-base-300 bg-card p-8 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Reference architecture
              </span>
              <p className="mt-3 text-sm text-muted-foreground">{c.diagramLabel}</p>
              <div className="mt-6 flex-1 rounded-xl border border-dashed border-base-300 bg-base-100/60 grid place-items-center min-h-[260px]">
                <svg viewBox="0 0 320 200" className="w-full max-w-sm" fill="none">
                  <rect x="10" y="12" width="300" height="34" rx="6" stroke="#00D1FF" strokeWidth="1.5" />
                  <text x="22" y="34" fontSize="12" fill="#D1D5DB">edge · identity · data plane</text>
                  <rect x="10" y="62" width="92" height="74" rx="6" stroke="#FFC107" strokeWidth="1.5" />
                  <rect x="114" y="62" width="92" height="74" rx="6" stroke="#FFC107" strokeWidth="1.5" />
                  <rect x="218" y="62" width="92" height="74" rx="6" stroke="#FFC107" strokeWidth="1.5" />
                  <rect x="10" y="152" width="300" height="34" rx="6" fill="#00D1FF" fillOpacity="0.12" stroke="#00D1FF" strokeWidth="1.5" />
                  <text x="22" y="174" fontSize="12" fill="#00D1FF">observe · logs · metrics · cost</text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CASE STUDY — only rendered if a real case study is provided */}
      {c.caseStudy && (
      <section className="w-full bg-accent py-28 px-6 border-y border-base-300">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="down" className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Recent win
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              One anchor <span className="italic font-serif text-secondary">case.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <Reveal direction="left" className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden border border-base-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.caseStudy.image}
                alt={c.caseStudy.title}
                className="absolute inset-0 size-full object-cover"
              />
            </Reveal>
            <div className="flex flex-col">
              <Reveal direction="right">
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                  {c.caseStudy.tag}
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground leading-snug">
                  {c.caseStudy.title}
                </h3>
                <blockquote className="mt-6 border-l-2 border-primary pl-5 text-lg text-muted-foreground italic">
                  “{c.caseStudy.quote}”
                </blockquote>
              </Reveal>
              <RevealGroup direction="scale" stagger={100} initialDelay={200} className="mt-8 grid grid-cols-3 gap-4">
                {c.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-xl border border-base-300 bg-base-100 p-5">
                    <div className="text-2xl font-bold text-primary">{r.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* RELATED */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="down">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
                Goes well <span className="italic font-serif text-[#0E7490]">with.</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p className="text-lg text-[#5C6473] leading-relaxed">
                Services and solutions most commonly paired with {c.name} engagements.
              </p>
            </Reveal>
          </div>
          <RevealGroup direction="scale" stagger={70} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {c.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block rounded-2xl border border-[#E2E6EE] bg-white p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">
                  {r.kind}
                </span>
                <div className="mt-3 text-base font-bold text-[#0F1622] leading-snug">{r.name}</div>
                <ArrowRight className="mt-5 size-4 text-[#5C6473] group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-gradient-to-br from-base-200 to-base-100 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal direction="left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Bring the <span className="italic font-serif text-secondary">{c.name}</span> playbook to your team.
              </h3>
              <p className="mt-3 text-muted-foreground">A 30-min call with someone who&apos;s done this before.</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150} className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Schedule discovery <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
