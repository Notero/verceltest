import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schemas";
import ReachUsForm from "@/components/public/reachUsForm";
import Reveal, { RevealGroup } from "@/components/public/reveal";

const SERVICE_TO_INTEREST: Record<string, string> = {
  ai_engineering: "AI & Machine Learning",
  cloud_transformation: "Cloud Transformation",
  cloud_migration: "Cloud Migration",
  cybersecurity: "Security & Compliance",
  devops_automation: "DevOps & Automation",
  software_development: "Software Development",
  staff_augmentation: "Staff Augmentation",
  it_consulting: "IT Consulting",
  it_services: "IT Consulting",
  mobile_development: "Software Development",
};

export type ServiceAccent = "cyan" | "yellow" | "mixed";
export type ServiceHeroVariant = "split" | "overlay" | "clean";

export type ServiceContent = {
  slug: string;
  name: string;
  heroImage: string;
  variant: ServiceHeroVariant;
  accent: ServiceAccent;
  headline: { lead: string; emph: string; tail: string };
  lede: string;
  pills: string[];
  narrative: {
    tagline: string;
    intro: string;
    sectionTitle: string;
    sectionLede: string;
    pillars: { title: string; body: string }[];
    closing?: string;
  };
  deliverables: { letter: string; title: string; body: string }[];
  process: { weeks: string; title: string; body: string }[];
  tiers: {
    name: string;
    price: string;
    tagline: string;
    items: string[];
    featured?: boolean;
  }[];
  processHeading?: { lead: string; emph: string; tail?: string };
};

const accentClasses = {
  cyan: {
    chipBorder: "border-primary/40 bg-primary/15 text-primary",
    emph: "text-secondary",
    band: "from-primary/25 via-transparent to-secondary/10",
    glow: "bg-primary/25",
  },
  yellow: {
    chipBorder: "border-secondary/40 bg-secondary/15 text-secondary",
    emph: "text-primary",
    band: "from-secondary/25 via-transparent to-primary/10",
    glow: "bg-secondary/20",
  },
  mixed: {
    chipBorder: "border-primary/40 bg-primary/15 text-primary",
    emph: "text-secondary",
    band: "from-primary/20 via-transparent to-secondary/20",
    glow: "bg-primary/20",
  },
} as const;

export default function ServicePage({ c }: { c: ServiceContent }) {
  const a = accentClasses[c.accent];
  const ph = c.processHeading ?? { lead: "How the", emph: "12 weeks", tail: "go." };

  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={[
          serviceSchema({
            name: c.name,
            path: `/services/${c.slug}`,
            description: c.lede,
            image: c.heroImage,
            serviceType: c.name,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: c.name, url: `/services/${c.slug}` },
          ]),
        ]}
      />
      {/* HERO — varies by variant */}
      {c.variant === "split" && <HeroSplit c={c} />}
      {c.variant === "overlay" && <HeroOverlay c={c} />}
      {c.variant === "clean" && <HeroClean c={c} />}

      {/* NARRATIVE — tagline, intro, why-us pillars */}
      <section className="w-full bg-background py-24 px-6 border-b border-base-300">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up" className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {c.narrative.tagline}
            </div>
            <p className="mt-5 text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif">
              {c.narrative.intro}
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <Reveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {c.narrative.sectionTitle.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className={`italic font-serif ${a.emph}`}>
                    {c.narrative.sectionTitle.split(" ").slice(-1)}
                  </span>
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  {c.narrative.sectionLede}
                </p>
              </div>
            </Reveal>
            <RevealGroup direction="scale" stagger={80} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {c.narrative.pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-base-300 bg-base-100 p-6 hover:border-primary/60 transition-colors"
                >
                  <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </RevealGroup>
          </div>

          {c.narrative.closing && (
            <Reveal direction="fade">
              <p className="mt-16 max-w-4xl text-lg text-muted-foreground leading-relaxed italic">
                {c.narrative.closing}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
                What you <span className="italic font-serif text-[#0E7490]">walk away with.</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={150}>
              <p className="text-lg text-[#5C6473] leading-relaxed">
                Concrete deliverables — everything is yours at the end of the engagement.
              </p>
            </Reveal>
          </div>

          <RevealGroup direction="up" stagger={70} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.deliverables.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-[#E2E6EE] bg-white p-7 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="grid place-items-center size-11 rounded-lg bg-primary/10 text-[#0E7490] font-bold">
                  {d.letter}
                </div>
                <h3 className="mt-5 text-base font-bold text-[#0F1622]">{d.title}</h3>
                <p className="mt-3 text-sm text-[#5C6473] leading-relaxed">{d.body}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full bg-background py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {ph.lead}{" "}
                <span className={`italic font-serif ${a.emph}`}>{ph.emph}</span>
                {ph.tail ? ` ${ph.tail}` : ""}
              </h2>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Same shape every engagement — tuned to your team, stack, and stakes.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
            />
            <RevealGroup direction="up" stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {c.process.map((p, i) => (
                <div
                  key={p.title}
                  className="relative rounded-2xl border border-base-300 bg-base-200/60 p-6 hover:border-primary/60 transition-colors"
                >
                  <div className="grid place-items-center size-8 rounded-full bg-primary text-primary-content text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                    {p.weeks}
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT TIERS */}
      <section className="w-full bg-accent py-28 px-6 border-y border-base-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="down">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Three ways to <span className={`italic font-serif ${a.emph}`}>engage.</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Same outcome — pick the shape that fits your team and timeline.
              </p>
            </Reveal>
          </div>

          <RevealGroup direction="scale" stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  t.featured
                    ? "border-primary bg-gradient-to-br from-base-100 to-base-200 shadow-xl shadow-primary/10"
                    : "border-base-300 bg-base-100"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                    most picked
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                  <span className="text-xs font-semibold text-muted-foreground">{t.price}</span>
                </div>
                <p className="mt-2 text-sm italic font-serif text-secondary/90">{t.tagline}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                    t.featured
                      ? "bg-primary text-primary-content hover:bg-primary/90 shadow-lg shadow-primary/30"
                      : "border border-base-300 bg-base-100/50 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Choose {t.name} <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="left" className="mb-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Tell us what&apos;s <span className={`italic font-serif ${a.emph}`}>on fire.</span>
            </h3>
            <p className="mt-3 text-muted-foreground">
              Drop a line — a senior engineer replies the same business day. No SDRs, no decks.
            </p>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <ReachUsForm
              title={`Talk to us about ${c.name}.`}
              subtitle="A senior engineer replies the same business day."
              defaultInterest={SERVICE_TO_INTEREST[c.slug]}
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ------------- HERO VARIANTS ------------- */

function Crumbs({ name }: { name: string }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      <Link href="/" className="hover:text-primary">Home</Link>
      <ChevronRight className="inline size-3 mx-1" />
      <Link href="/services" className="hover:text-primary">Services</Link>
      <ChevronRight className="inline size-3 mx-1" />
      <span className="text-primary">{name}</span>
    </div>
  );
}

function HeroCTAs() {
  return (
    <div className="mt-9 flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
      >
        Book scoping call <ArrowRight className="size-4" />
      </Link>
      <Link
        href="/news/whitepaper"
        className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
      >
        Download data sheet
      </Link>
    </div>
  );
}

function PillRow({ c }: { c: ServiceContent }) {
  const a = accentClasses[c.accent];
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {c.pills.map((p) => (
        <span
          key={p}
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${a.chipBorder}`}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

/* Variant 1: split — image on the right, copy on the left */
function HeroSplit({ c }: { c: ServiceContent }) {
  const a = accentClasses[c.accent];
  return (
    <section className="w-full bg-background border-b border-base-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
        <div className="px-6 lg:pl-2 lg:pr-14 py-16 lg:py-24 flex flex-col justify-center">
          <Reveal direction="down"><Crumbs name={c.name} /></Reveal>
          <Reveal direction="left" delay={120}>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.04] tracking-tight">
              {c.headline.lead}{" "}
              <span className={`italic font-serif ${a.emph}`}>{c.headline.emph}</span>{" "}
              {c.headline.tail}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={260}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">{c.lede}</p>
          </Reveal>
          <Reveal direction="fade" delay={400}><PillRow c={c} /></Reveal>
          <Reveal direction="up" delay={520}><HeroCTAs /></Reveal>
        </div>
        <Reveal direction="right" delay={150} className="relative min-h-[420px] lg:min-h-[600px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.heroImage} alt={c.name} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
          <div className={`absolute -inset-y-12 -right-12 w-1/2 ${a.glow} blur-3xl opacity-60 pointer-events-none`} />
        </Reveal>
      </div>
    </section>
  );
}

/* Variant 2: overlay — full-bleed image background with dark gradient */
function HeroOverlay({ c }: { c: ServiceContent }) {
  const a = accentClasses[c.accent];
  return (
    <section className="relative w-full border-b border-base-300 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.heroImage} alt={c.name} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className={`absolute -top-32 right-0 size-[520px] rounded-full ${a.glow} blur-3xl pointer-events-none`} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
        <div>
          <Reveal direction="down"><Crumbs name={c.name} /></Reveal>
          <Reveal direction="scale" delay={120}>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
              {c.headline.lead}{" "}
              <span className={`italic font-serif ${a.emph}`}>{c.headline.emph}</span>{" "}
              {c.headline.tail}
            </h1>
          </Reveal>
          <Reveal direction="right" delay={280}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">{c.lede}</p>
          </Reveal>
          <Reveal direction="fade" delay={420}><PillRow c={c} /></Reveal>
          <Reveal direction="up" delay={540}><HeroCTAs /></Reveal>
        </div>
      </div>
    </section>
  );
}

/* Variant 3: clean — typographic hero, no photo, with a service-specific SVG mark */
function HeroClean({ c }: { c: ServiceContent }) {
  const a = accentClasses[c.accent];
  return (
    <section className="relative w-full bg-background overflow-hidden border-b border-base-300">
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-40 -left-32 size-[520px] rounded-full ${a.glow} blur-3xl`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -bottom-40 -right-32 size-[520px] rounded-full bg-gradient-to-br ${a.band} blur-3xl`}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <Reveal direction="down"><Crumbs name={c.name} /></Reveal>
          <Reveal direction="right" delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
              {c.headline.lead}{" "}
              <span className={`italic font-serif ${a.emph}`}>{c.headline.emph}</span>{" "}
              {c.headline.tail}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={280}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">{c.lede}</p>
          </Reveal>
          <Reveal direction="fade" delay={420}><PillRow c={c} /></Reveal>
          <Reveal direction="up" delay={540}><HeroCTAs /></Reveal>
        </div>
        <Reveal direction="scale" delay={200} className="relative aspect-square w-full max-w-md mx-auto rounded-3xl border border-base-300 bg-card overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.heroImage} alt={c.name} className="absolute inset-0 size-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-foreground/90">
            <span>{c.name}</span>
            <span className="text-primary">Intrastack</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
