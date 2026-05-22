import Link from "next/link";
import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schemas";
import Reveal, { RevealGroup } from "@/components/public/reveal";

export type SolutionAccent = "cyan" | "yellow" | "mixed";
export type SolutionHeroVariant = "diagram" | "split" | "overlay";

export type SolutionContent = {
  slug: string;
  name: string;
  heroImage: string;
  variant: SolutionHeroVariant;
  accent: SolutionAccent;
  headline: { lead: string; emph: string; tail: string };
  lede: string;
  accentPills: string[];
  pills: string[];
  narrative: {
    tagline: string;
    intro: string;
    sectionTitle: string;
    sectionLede: string;
    pillars: { title: string; body: string }[];
    closing?: string;
  };
  why: { icon: string; title: string; body: string }[];
  capabilities: { title: string; items: string[] }[];
  stack: string[];
  compare: { capability: string; us: string; diy: string }[];
};

const accentClasses = {
  cyan: { emph: "text-secondary", glow: "bg-primary/20", chip: "border-primary/40 bg-primary/15 text-primary" },
  yellow: { emph: "text-primary", glow: "bg-secondary/20", chip: "border-secondary/40 bg-secondary/15 text-secondary" },
  mixed: { emph: "text-secondary", glow: "bg-primary/15", chip: "border-primary/40 bg-primary/15 text-primary" },
} as const;

export default function SolutionPage({ c }: { c: SolutionContent }) {
  const a = accentClasses[c.accent];

  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={[
          serviceSchema({
            name: c.name,
            path: `/solutions/${c.slug}`,
            description: c.lede,
            image: c.heroImage,
            serviceType: c.name,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: c.name, url: `/solutions/${c.slug}` },
          ]),
        ]}
      />
      {c.variant === "diagram" && <HeroDiagram c={c} />}
      {c.variant === "split" && <HeroSplit c={c} />}
      {c.variant === "overlay" && <HeroOverlay c={c} />}

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
            <RevealGroup direction="up" stagger={80} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      {/* WHY STRIP */}
      <section className="w-full bg-accent py-20 px-6 border-b border-base-300">
        <RevealGroup direction="scale" stagger={90} className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-6">
          {c.why.map((w) => (
            <div key={w.title} className="rounded-2xl border border-base-300 bg-base-100 p-6">
              <div className="grid place-items-center size-10 rounded-lg bg-primary/15 text-primary text-xl font-bold">
                {w.icon}
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
            </div>
          ))}
        </RevealGroup>
      </section>

      {/* CAPABILITIES */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
                What&apos;s in the <span className="italic font-serif text-[#0E7490]">box.</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={150}>
              <p className="text-lg text-[#5C6473] leading-relaxed">
                Capabilities included in the standard {c.name} rollout — modular, swappable.
              </p>
            </Reveal>
          </div>

          <RevealGroup direction="up" stagger={90} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-[#E2E6EE] bg-white p-7 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-[#0E7490]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#0F1622]">{cap.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cap.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#5C6473]">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* STACK */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 items-end">
            <Reveal direction="down">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Tools we <span className={`italic font-serif ${a.emph}`}>bring.</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An opinionated default stack — swap any of it for what your team already runs.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-3">
            {c.stack.map((s, i) => (
              <Reveal as="span" key={s} direction="scale" delay={i * 40} className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-200/60 px-4 py-2 text-sm font-medium text-foreground">
                <span className="size-2 rounded-sm bg-primary" />
                {s}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="w-full bg-accent py-28 px-6 border-y border-base-300">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="down" className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">vs. DIY</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              What you actually get on <span className={`italic font-serif ${a.emph}`}>day 90.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={150} className="overflow-hidden rounded-2xl border border-base-300 bg-base-100">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-base-200 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <div className="px-6 py-4">Capability</div>
              <div className="px-6 py-4 text-primary">With us</div>
              <div className="px-6 py-4">DIY in-house</div>
            </div>
            {c.compare.map((row, i) => (
              <div
                key={row.capability}
                className={`grid grid-cols-[1.4fr_1fr_1fr] text-sm ${
                  i % 2 === 0 ? "bg-base-100" : "bg-base-200/40"
                } border-t border-base-300`}
              >
                <div className="px-6 py-5 text-foreground">{row.capability}</div>
                <div className="px-6 py-5 flex items-center gap-2 text-foreground">
                  <Check className="size-4 text-primary shrink-0" strokeWidth={2.5} /> {row.us}
                </div>
                <div className="px-6 py-5 flex items-center gap-2 text-muted-foreground">
                  <X className="size-4 text-destructive shrink-0" strokeWidth={2.5} /> {row.diy}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-gradient-to-br from-base-200 to-base-100 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal direction="left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {c.variant === "diagram" ? (
                  <>Want the reference architecture for{" "}<span className={`italic font-serif ${a.emph}`}>{c.name}</span>?</>
                ) : (
                  <>See how <span className={`italic font-serif ${a.emph}`}>{c.name}</span> fits your stack.</>
                )}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {c.variant === "diagram"
                  ? "We'll send the diagram and a 30-min walkthrough."
                  : "30 minutes with a senior engineer — we'll tell you what we'd do."}
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150} className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              {c.variant === "diagram" ? "Request architecture" : "Book discovery"} <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ------------- shared hero bits ------------- */

function Crumbs({ name }: { name: string }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      <Link href="/" className="hover:text-primary">Home</Link>
      <ChevronRight className="inline size-3 mx-1" />
      <Link href="/solutions" className="hover:text-primary">Solutions</Link>
      <ChevronRight className="inline size-3 mx-1" />
      <span className="text-primary">{name}</span>
    </div>
  );
}

function PillRow({ c }: { c: SolutionContent }) {
  const a = accentClasses[c.accent];
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {c.accentPills.map((p) => (
        <span
          key={p}
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${a.chip}`}
        >
          {p}
        </span>
      ))}
      {c.pills.map((p) => (
        <span
          key={p}
          className="inline-flex items-center rounded-full border border-base-300 bg-base-200/70 px-3 py-1 text-xs font-medium text-foreground"
        >
          {p}
        </span>
      ))}
    </div>
  );
}

function HeroCTAs({ variant }: { variant: SolutionHeroVariant }) {
  return (
    <div className="mt-9 flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
      >
        {variant === "diagram" ? "Get the reference arch" : "Book discovery"} <ArrowRight className="size-4" />
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
      >
        Talk to an engineer
      </Link>
    </div>
  );
}

function HeroHeadline({ c }: { c: SolutionContent }) {
  const a = accentClasses[c.accent];
  return (
    <h1 className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
      {c.headline.lead}{" "}
      <span className={`italic font-serif ${a.emph}`}>{c.headline.emph}</span>{" "}
      {c.headline.tail}
    </h1>
  );
}

/* Variant 1: diagram — original architecture SVG (keeps technical solutions feeling technical) */
function HeroDiagram({ c }: { c: SolutionContent }) {
  const a = accentClasses[c.accent];
  return (
    <section className="relative w-full bg-background overflow-hidden border-b border-base-300">
      <div aria-hidden className={`pointer-events-none absolute -top-40 -right-32 size-[520px] rounded-full ${a.glow} blur-3xl`} />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 size-[520px] rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal direction="down"><Crumbs name={c.name} /></Reveal>
          <Reveal direction="left" delay={120}><HeroHeadline c={c} /></Reveal>
          <Reveal direction="up" delay={260}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{c.lede}</p>
          </Reveal>
          <Reveal direction="fade" delay={400}><PillRow c={c} /></Reveal>
          <Reveal direction="up" delay={520}><HeroCTAs variant="diagram" /></Reveal>
        </div>

        <Reveal direction="right" delay={200} className="rounded-3xl border border-base-300 bg-card/80 backdrop-blur p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            ↓ reference architecture
          </div>
          <svg viewBox="0 0 460 280" className="w-full h-auto" fill="none">
            <rect x="10" y="14" width="440" height="42" rx="8" stroke="#00D1FF" strokeWidth="1.5" fill="#00D1FF" fillOpacity="0.08" />
            <text x="22" y="40" fontFamily="Inter" fontSize="13" fill="#F8FAFC">DEV — git push · PRs · image build</text>

            <rect x="10" y="78" width="135" height="110" rx="8" stroke="#FFC107" strokeWidth="1.5" />
            <text x="22" y="100" fontFamily="Inter" fontSize="12" fill="#FFC107">cluster A · dev</text>
            <rect x="28" y="112" width="40" height="28" rx="4" stroke="#00D1FF" fill="#00D1FF" fillOpacity="0.15" />
            <rect x="76" y="112" width="40" height="28" rx="4" stroke="#00D1FF" fill="#00D1FF" fillOpacity="0.15" />
            <rect x="28" y="148" width="88" height="22" rx="4" stroke="#4B505F" />

            <rect x="162" y="78" width="135" height="110" rx="8" stroke="#FFC107" strokeWidth="1.5" />
            <text x="174" y="100" fontFamily="Inter" fontSize="12" fill="#FFC107">cluster B · stage</text>
            <rect x="180" y="112" width="40" height="28" rx="4" stroke="#00D1FF" fill="#00D1FF" fillOpacity="0.15" />
            <rect x="228" y="112" width="40" height="28" rx="4" stroke="#00D1FF" fill="#00D1FF" fillOpacity="0.15" />
            <rect x="180" y="148" width="88" height="22" rx="4" stroke="#4B505F" />

            <rect x="314" y="78" width="135" height="110" rx="8" stroke="#FFC107" strokeWidth="1.5" />
            <text x="326" y="100" fontFamily="Inter" fontSize="12" fill="#FFC107">cluster C · prod</text>
            <rect x="332" y="112" width="40" height="28" rx="4" fill="#00D1FF" />
            <rect x="380" y="112" width="40" height="28" rx="4" fill="#00D1FF" />
            <rect x="332" y="148" width="88" height="22" rx="4" stroke="#4B505F" />

            <path d="M145 133 L162 133" stroke="#F8FAFC" strokeWidth="1.5" markerEnd="url(#a)" />
            <path d="M297 133 L314 133" stroke="#F8FAFC" strokeWidth="1.5" markerEnd="url(#a)" />

            <rect x="10" y="210" width="440" height="48" rx="8" fill="#00D1FF" fillOpacity="0.18" stroke="#00D1FF" strokeWidth="1.5" />
            <text x="22" y="240" fontFamily="Inter" fontSize="13" fill="#00D1FF">OBSERVE — logs · metrics · traces · cost</text>

            <defs>
              <marker id="a" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0 L8 4 L0 8 Z" fill="#F8FAFC" />
              </marker>
            </defs>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

/* Variant 2: split — copy left, full image card right */
function HeroSplit({ c }: { c: SolutionContent }) {
  const a = accentClasses[c.accent];
  return (
    <section className="relative w-full bg-background overflow-hidden border-b border-base-300">
      <div aria-hidden className={`pointer-events-none absolute -top-32 -left-32 size-[460px] rounded-full ${a.glow} blur-3xl`} />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <Reveal direction="down"><Crumbs name={c.name} /></Reveal>
          <Reveal direction="right" delay={120}><HeroHeadline c={c} /></Reveal>
          <Reveal direction="up" delay={260}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{c.lede}</p>
          </Reveal>
          <Reveal direction="fade" delay={400}><PillRow c={c} /></Reveal>
          <Reveal direction="up" delay={520}><HeroCTAs variant="split" /></Reveal>
        </div>

        <Reveal direction="scale" delay={200} className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden border border-base-300">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.heroImage} alt={c.name} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-foreground/95">
            <span>{c.name}</span>
            <span className="text-primary">Intrastack</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Variant 3: overlay — full-bleed image background */
function HeroOverlay({ c }: { c: SolutionContent }) {
  const a = accentClasses[c.accent];
  return (
    <section className="relative w-full border-b border-base-300 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.heroImage} alt={c.name} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
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
          <Reveal direction="left" delay={280}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">{c.lede}</p>
          </Reveal>
          <Reveal direction="fade" delay={420}><PillRow c={c} /></Reveal>
          <Reveal direction="up" delay={540}><HeroCTAs variant="overlay" /></Reveal>
        </div>
      </div>
    </section>
  );
}
