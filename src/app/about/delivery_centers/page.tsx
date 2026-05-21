import Link from "next/link";
import { ArrowRight, ChevronRight, Mail, MapPin, User, Globe2 } from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata = {
  title: "Delivery Centers · Intrastack",
  description:
    "Intrastack's global footprint — Las Vegas HQ, with delivery centers in Ho Chi Minh City, Tokyo, and Bengaluru. Senior engineers for round-the-clock, follow-the-sun delivery.",
  alternates: { canonical: "/about/delivery_centers" },
};

type Center = {
  country: string;
  city: string;
  flag: string;
  address: string[];
  email: string;
  lead: string;
  timezone: string;
  accent: "primary" | "secondary" | "mixed";
  hq?: boolean;
};

const CENTERS: Center[] = [
  {
    country: "United States",
    city: "Las Vegas, NV",
    flag: "🇺🇸",
    address: ["304 S. Jones Blvd #5755", "Las Vegas, NV 89107"],
    email: "info@intrastack.com",
    lead: "Headquarters",
    timezone: "GMT−8 · PT",
    accent: "mixed",
    hq: true,
  },
  {
    country: "Vietnam",
    city: "Ho Chi Minh City",
    flag: "🇻🇳",
    address: ["596 Cong Hoa Street, Ward 13", "Tan Binh District, Ho Chi Minh City"],
    email: "vietnam@intrastack.com",
    lead: "Mr. Trung Huynh",
    timezone: "GMT+7 · ICT",
    accent: "primary",
  },
  {
    country: "Japan",
    city: "Tokyo",
    flag: "🇯🇵",
    address: ["803-6 Yamazaki-machi, Machida-shi", "Tōkyō-to 195-0074, Japan"],
    email: "japan@intrastack.com",
    lead: "Mr. Cuong Truong",
    timezone: "GMT+9 · JST",
    accent: "secondary",
  },
  {
    country: "India",
    city: "Bengaluru",
    flag: "🇮🇳",
    address: ["15/1, 185/2, 185/A, 18th Main Road", "Jayanagar 9th Block, Bengaluru, Karnataka 560041"],
    email: "india@intrastack.com",
    lead: "Mr. Bhaskar Pal",
    timezone: "GMT+5:30 · IST",
    accent: "primary",
  },
];

export default function DeliveryCentersPage() {
  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Delivery Centers", url: "/about/delivery_centers" },
        ])}
      />

      {/* HERO */}
      <section className="relative w-full bg-background overflow-hidden border-b border-base-300">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 size-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 size-[520px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="inline size-3 mx-1" />
            <Link href="/about" className="hover:text-primary">About</Link>
            <ChevronRight className="inline size-3 mx-1" />
            <span className="text-primary">Delivery Centers</span>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Globe2 className="size-3.5" strokeWidth={2} />
            Three delivery centers · one HQ
          </span>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
            Our delivery <span className="italic font-serif text-secondary">centers.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Senior engineers and consultants working across the United States, Vietnam, Japan, and India.
            Follow-the-sun delivery — so progress doesn&apos;t stop when your business day does.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full bg-accent py-16 px-6 border-b border-base-300">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">3 + HQ</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Delivery centers + Las Vegas HQ</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">24/7</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Follow-the-sun coverage</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">17h</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Spread, easternmost → westernmost</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">150+</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Engineers & consultants</div>
          </div>
        </div>
      </section>

      {/* CENTERS */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
              Where we <span className="italic font-serif text-[#0E7490]">work from.</span>
            </h2>
            <p className="text-lg text-[#5C6473] leading-relaxed">
              Each center is led by a senior operator embedded in the region — close to clients, close to
              talent, close to the cultural realities that shape good delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CENTERS.map((c) => (
              <article
                key={c.country}
                className="relative rounded-3xl border border-[#E2E6EE] bg-white p-8 md:p-10 hover:border-primary hover:shadow-md transition-all"
              >
                {c.hq && (
                  <span className="absolute top-6 right-6 inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    HQ
                  </span>
                )}

                <div className="flex items-center gap-4">
                  <div className="text-5xl leading-none" aria-hidden>
                    {c.flag}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">
                      {c.country}
                    </div>
                    <h3 className="mt-1 text-2xl font-bold text-[#0F1622] leading-tight">{c.city}</h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 text-[#5C6473] shrink-0" strokeWidth={2} />
                    <div className="text-sm text-[#5C6473] leading-relaxed">
                      {c.address.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-[#5C6473] shrink-0" strokeWidth={2} />
                    <a
                      href={`mailto:${c.email}`}
                      className="text-sm text-[#0F1622] hover:text-primary transition-colors"
                    >
                      {c.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <User className="size-4 text-[#5C6473] shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#0F1622]">
                      <span className="font-semibold">Lead:</span> {c.lead}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E6EE] flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-[#F2EFE3] px-3 py-1 text-xs font-semibold text-[#5C6473]">
                    {c.timezone}
                  </span>
                  <a
                    href={`mailto:${c.email}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E7490] hover:gap-3 transition-all"
                  >
                    Contact center <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HANDOFF / COVERAGE BAND */}
      <section className="w-full bg-background py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Follow-the-sun
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                One day-clock, <span className="italic font-serif text-secondary">four time zones.</span>
              </h2>
              <p className="sr-only">Three delivery centers in Vietnam, Japan, and India hand work to the Las Vegas HQ.</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The work moves with the sun. India hands off to Vietnam, Vietnam to Japan, Japan to the
                United States — same context, clean handoffs, no day-shift bottleneck. Critical engagements
                get a 24/7 on-call rotation by design.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["India · Bengaluru", "Vietnam · HCMC", "Japan · Tokyo", "United States · Las Vegas"].map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-base-300 bg-base-200/60 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-base-300 bg-card/80 p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                ↓ Coverage clock
              </div>
              <div className="space-y-3">
                {[
                  { city: "Bengaluru, India", hours: "09:00 — 18:00 IST", bar: "10%" },
                  { city: "Ho Chi Minh City, Vietnam", hours: "09:00 — 18:00 ICT", bar: "35%" },
                  { city: "Tokyo, Japan", hours: "09:00 — 18:00 JST", bar: "60%" },
                  { city: "Las Vegas, USA (HQ)", hours: "09:00 — 18:00 PT", bar: "85%" },
                ].map((r, i) => (
                  <div key={r.city}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-foreground">{r.city}</span>
                      <span className="text-muted-foreground">{r.hours}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-base-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          i % 2 === 0
                            ? "bg-gradient-to-r from-primary to-primary/60"
                            : "bg-gradient-to-r from-secondary to-secondary/60"
                        }`}
                        style={{ width: r.bar }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-gradient-to-br from-base-200 to-base-100 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Need a team in your <span className="italic font-serif text-secondary">time zone?</span>
            </h3>
            <p className="mt-3 text-muted-foreground">
              Email the regional lead directly, or reach the whole team in one click.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 shrink-0"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
