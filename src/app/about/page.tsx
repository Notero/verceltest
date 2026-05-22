import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, BarChart3, ShieldCheck, Cloud, Users, MapPin } from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import Reveal, { RevealGroup } from "@/components/public/reveal";

export const metadata = {
  title: "Company Overview · Intrastack",
  description:
    "Intrastack Solutions — a premier multi-cloud consulting and IT services firm founded by Stefan Nguyen in 2019, headquartered in the United States with delivery centers across Vietnam, Japan, and India.",
  alternates: { canonical: "/about" },
};

const DELIVERY_CENTERS = [
  { city: "Las Vegas", country: "United States · HQ", note: "Founded 2019" },
  { city: "Ho Chi Minh City", country: "Vietnam", note: "APAC delivery" },
  { city: "Tokyo", country: "Japan", note: "APAC delivery" },
  { city: "Bengaluru", country: "India", note: "Follow-the-sun" },
];

const SPECIALIZATIONS = [
  { icon: Cpu, title: "AI & Machine Learning", body: "Production-grade models, training pipelines, and inference at scale — for the workflows that move the number." },
  { icon: BarChart3, title: "Data Analytics", body: "Comprehensive analytics — unified pipelines, trusted metrics, and the dashboards leaders actually open." },
  { icon: Cloud, title: "Cloud Transformation", body: "Strategy, migration, and operations as one motion across AWS, Azure, and GCP." },
  { icon: ShieldCheck, title: "Security & Compliance", body: "Audit-ready controls aligned to SOC, HIPAA, GDPR, PCI DSS, and FedRAMP — codified, not documented." },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      {/* HERO */}
      <section className="relative w-full bg-background overflow-hidden border-b border-base-300">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 size-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 size-[520px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <Reveal direction="down">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="inline size-3 mx-1" />
              <span className="text-primary">Company Overview</span>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120}>
            <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
              A trusted partner in <span className="italic font-serif text-secondary">multi-cloud.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={260}>
            <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Intrastack Solutions is a premier multi-cloud consulting and IT services provider — founded in
              2019, headquartered in the United States, with delivery centers across Vietnam, Japan, and India.
              We help businesses navigate the cloud with customized, scalable, and secure solutions.
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                Partner with us <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/about/mission_vision"
                className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Mission & vision
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          <Reveal direction="left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">Our company</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
                Built to solve the <span className="italic font-serif text-[#0E7490]">cloud problem,</span>
                <br />properly.
              </h2>
              <div className="mt-8 rounded-2xl border border-[#E2E6EE] bg-white overflow-hidden aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/legacy/intrastack-slide-12-1024x1024.webp"
                  alt="Intrastack team"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal direction="right">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F1622] leading-snug">
                  Intrastack <span className="italic font-serif text-[#0E7490]">Solutions.</span>
                </h3>
                <p className="mt-5 text-[#5C6473] leading-relaxed text-lg">
                  Intrastack Solutions is a premier multi-cloud consulting and IT services provider founded by{" "}
                  <strong className="text-[#0F1622]">Stefan Nguyen</strong> in 2019. With roots deeply embedded
                  in technology consulting, the company was established to address the growing demand for
                  expert cloud solutions in a rapidly evolving digital landscape.
                </p>
                <p className="mt-4 text-[#5C6473] leading-relaxed text-lg">
                  Headquartered in the United States with delivery centers in{" "}
                  <strong className="text-[#0F1622]">Ho Chi Minh City, Tokyo, and Bengaluru</strong>, we serve
                  clients globally with a diverse, skilled workforce and round-the-clock coverage.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={120} className="rounded-2xl border border-[#E2E6EE] bg-white p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">The founding vision</span>
              <h4 className="mt-3 text-xl font-bold text-[#0F1622] leading-snug">
                Cutting-edge cloud — paired with lasting partnerships.
              </h4>
              <p className="mt-4 text-[#5C6473] leading-relaxed">
                Intrastack Solutions was founded to deliver cutting-edge cloud solutions and to build lasting
                partnerships with clients through customized, scalable, and secure services. Stefan Nguyen — with over{" "}
                <strong className="text-[#0F1622]">30 years of experience</strong> in technology delivery
                and consulting — envisioned a firm that would leverage the latest technologies to drive
                business transformation across industries. That vision is realized through our commitment to
                excellence, innovation, and customer satisfaction.
              </p>
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-[#E2E6EE]">
                <div className="grid place-items-center size-12 rounded-full bg-primary/10 text-[#0E7490] font-bold">SN</div>
                <div>
                  <div className="text-sm font-bold text-[#0F1622]">Stefan Nguyen</div>
                  <div className="text-xs text-[#5C6473]">Founder & President · 30+ years in tech</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div>
                <h4 className="text-xl font-bold text-[#0F1622] leading-snug">
                  Growth, since <span className="italic font-serif text-[#0E7490]">day one.</span>
                </h4>
                <p className="mt-4 text-[#5C6473] leading-relaxed">
                  Since inception, Intrastack Solutions has grown rapidly — expanding our service offerings and
                  client base. Our delivery centers in Vietnam and India are integral to round-the-clock service
                  and a competitive edge in the market. A leadership team of seasoned professionals plays a
                  pivotal role in steering the company toward its strategic goals.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full bg-accent py-16 px-6 border-y border-base-300">
        <RevealGroup direction="scale" stagger={120} className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">2019</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Founded in the US</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">30+</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Years of leadership experience</div>
          </div>
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
            <div className="mt-2 text-sm text-muted-foreground">Follow-the-sun delivery</div>
          </div>
        </RevealGroup>
      </section>

      {/* DELIVERY CENTERS */}
      <section className="w-full bg-background py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <Reveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Three centers + HQ, <span className="italic font-serif text-secondary">one team.</span>
              </h2>
            </Reveal>
            <Reveal direction="left" delay={150}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Engineers and consultants across the United States, Vietnam, Japan, and India — handing the
                work cleanly across time zones so progress doesn&apos;t stop at the end of your business day.
              </p>
            </Reveal>
          </div>

          <RevealGroup direction="up" stagger={90} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DELIVERY_CENTERS.map((d) => (
              <div
                key={d.city}
                className="rounded-2xl border border-base-300 bg-base-200/60 p-6 hover:border-primary/60 transition-colors"
              >
                <MapPin className="size-5 text-secondary" />
                <h3 className="mt-4 text-lg font-bold text-foreground">{d.city}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.country}</p>
                <span className="mt-4 inline-flex rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                  {d.note}
                </span>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="down" className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">Specializations</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
              What we&apos;re <span className="italic font-serif text-[#0E7490]">deep</span> on.
            </h2>
          </Reveal>

          <RevealGroup direction="scale" stagger={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZATIONS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#E2E6EE] bg-white p-7 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="grid place-items-center size-12 rounded-lg bg-primary/10 text-[#0E7490]">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0F1622]">{title}</h3>
                <p className="mt-3 text-sm text-[#5C6473] leading-relaxed">{body}</p>
              </div>
            ))}
          </RevealGroup>

          <Reveal direction="up" delay={200}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-[#0F1622] bg-white px-5 py-3 text-sm font-semibold text-[#0F1622] hover:bg-[#0F1622] hover:text-white transition-colors"
              >
                See more services <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-gradient-to-br from-base-200 to-base-100 p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-center">
            <Reveal direction="left">
              <div className="grid place-items-center size-20 rounded-2xl bg-primary/10 text-primary">
                <Users className="size-10" strokeWidth={1.5} />
              </div>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  A leadership team that has <span className="italic font-serif text-[#0E7490]">done the work.</span>
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Seasoned professionals with extensive industry experience — steering the company toward its
                  strategic goals and ensuring every engagement compounds into a lasting partnership.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/about/leadership"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                  >
                    Meet leadership <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    Join the team
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
