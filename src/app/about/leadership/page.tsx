import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Award,
  MapPin,
  Plus,
} from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema, personSchema } from "@/lib/seo/schemas";

export const metadata = {
  title: "Leadership · Intrastack",
  description:
    "The leadership team behind Intrastack Solutions — founder Stefan Nguyen, the Chief Executive Leadership team, executive advisors across Vietnam, Japan, India, and the US, and the VPs and directors steering each function of the company.",
  alternates: { canonical: "/about/leadership" },
};

const PILLARS = [
  {
    icon: Award,
    title: "Trusted services",
    body: "Over 25 years of combined experience in data center and cloud transformation — helping clients reach their digital goals.",
  },
  {
    icon: Sparkles,
    title: "Innovation & excellence",
    body: "Focus on cutting-edge technologies like machine learning and AI — driving innovation and impactful outcomes in the digital age.",
  },
  {
    icon: ShieldCheck,
    title: "Expert & professional",
    body: "Seasoned professionals providing strategic guidance and technical oversight across cloud strategy, security, and compliance.",
  },
];

type Person = {
  name: string;
  title: string;
  region?: string;
  initials: string;
  accent: "primary" | "secondary";
  photo?: string;
  slug?: string;
};

const FOUNDER: Person = {
  name: "Stefan Nguyen",
  title: "Founder & President",
  region: "30+ years in technology delivery",
  initials: "SN",
  accent: "primary",
  photo: "/images/team/stefan.webp",
};

const EXECUTIVES: Person[] = [
  { name: "Fattis Mann", title: "Chief Executive Officer", initials: "FM", accent: "primary", photo: "/images/team/fattis.webp", slug: "fattis-mann" },
  { name: "Praveen Madabhushi", title: "Chief Operating Officer", initials: "PM", accent: "secondary", photo: "/images/team/praveen-04.webp", slug: "praveen-madabhushi" },
  { name: "Rick Brown", title: "Chief Information Officer", initials: "RB", accent: "primary", photo: "/images/team/ricky.webp" },
];

const ADVISORS: Person[] = [
  { name: "Trung Huynh", title: "Executive Advisor", region: "Vietnam", initials: "TH", accent: "primary", photo: "/images/team/trunghuynh.webp", slug: "trung-huynh" },
  { name: "Cuong Truong", title: "Executive Advisor", region: "Japan", initials: "CT", accent: "secondary", photo: "/images/team/cuong.webp", slug: "cuong-truong" },
  { name: "Bhaskar Pal", title: "Executive Advisor", region: "India", initials: "BP", accent: "primary", photo: "/images/team/bhaskar2.webp" },
  { name: "Hans Fleurival", title: "Executive Advisor", region: "United States", initials: "HF", accent: "secondary", photo: "/images/team/hans.webp", slug: "hans-fleurival" },
];

const VPS: Person[] = [
  { name: "Michael Levitre", title: "VP of Sales — Commercial", initials: "ML", accent: "primary", photo: "/images/team/michael.webp" },
  { name: "Mohit Kumar", title: "VP of Cloud Services", initials: "MK", accent: "secondary", photo: "/images/team/mohit.webp" },
  { name: "Jennifer Nguyen", title: "VP of Human Services", initials: "JN", accent: "primary", photo: "/images/team/jennifer.webp" },
];

const DIRECTORS: Person[] = [
  { name: "Roderick Waller", title: "Director of Operations", initials: "RW", accent: "secondary", photo: "/images/team/roderick.webp" },
  { name: "Trung Tran", title: "Director of DevOps", initials: "TT", accent: "primary", photo: "/images/team/trungtran.webp", slug: "trung-tran" },
  { name: "Jimmy Nguyen", title: "Director of Support", initials: "JN", accent: "secondary", photo: "/images/team/jimmy.webp", slug: "jimmy-nguyen" },
  { name: "Deepak Kumar", title: "Director of Engineering", initials: "DK", accent: "primary", photo: "/images/team/deepak.webp" },
];

const OPEN_ROLES = [
  { team: "Commercial Accounts — West", role: "Account Executive" },
  { team: "Commercial Accounts — East", role: "Account Executive" },
  { team: "Government Accounts — West", role: "Account Executive" },
  { team: "Government Accounts — East", role: "Account Executive" },
];

function PhotoBanner({ p }: { p: Person }) {
  if (p.photo) {
    return (
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-base-200">
        <Image
          src={p.photo}
          alt={p.name}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }
  return (
    <div
      className={`grid place-items-center w-full aspect-[4/3] rounded-xl font-bold text-4xl ${
        p.accent === "primary"
          ? "bg-primary/15 text-primary"
          : "bg-secondary/20 text-secondary"
      }`}
    >
      {p.initials}
    </div>
  );
}

function PersonCard({ p }: { p: Person }) {
  const inner = (
    <>
      <PhotoBanner p={p} />
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.title}</p>
        </div>
        {p.slug && (
          <ArrowRight
            className="size-4 mt-1.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"
            strokeWidth={2}
          />
        )}
      </div>
      {p.region && (
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-base-200 border border-base-300 px-2.5 py-1 text-xs font-medium text-foreground">
          <MapPin className="size-3 text-secondary" strokeWidth={2} />
          {p.region}
        </div>
      )}
    </>
  );

  if (p.slug) {
    return (
      <Link
        href={`/about/leadership/${p.slug}`}
        className="group rounded-2xl border border-base-300 bg-base-100 p-5 hover:border-primary hover:shadow-md transition-all block"
        aria-label={`Read more about ${p.name}`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 hover:border-primary hover:shadow-md transition-all">
      {inner}
    </div>
  );
}

function FounderAvatar({ p }: { p: Person }) {
  if (p.photo) {
    return (
      <div className="relative size-40 sm:size-48 shrink-0 overflow-hidden rounded-3xl shadow-lg shadow-primary/20">
        <Image src={p.photo} alt={p.name} fill sizes="192px" className="object-cover" />
      </div>
    );
  }
  return (
    <div className="grid place-items-center size-40 sm:size-48 shrink-0 rounded-3xl bg-gradient-to-br from-primary to-secondary text-primary-content font-bold text-5xl shadow-lg shadow-primary/20">
      {p.initials}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={[
          ...[FOUNDER, ...EXECUTIVES, ...ADVISORS, ...VPS, ...DIRECTORS].map((p) =>
            personSchema({ name: p.name, jobTitle: p.title, image: p.photo })
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Leadership", url: "/about/leadership" },
          ]),
        ]}
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
            <span className="text-primary">Leadership</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
            People who&apos;ve <span className="italic font-serif text-secondary">done the work.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Intrastack Solutions delivers trusted services with over 25 years of combined experience in data
            center and cloud transformation. Our leadership team blends senior operators and regional experts
            across four continents — steering the company toward its strategic goals.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="w-full bg-accent py-20 px-6 border-b border-base-300" aria-labelledby="leadership-pillars">
        <h2 id="leadership-pillars" className="sr-only">How we lead</h2>
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-base-300 bg-base-100 p-7 hover:border-primary/60 transition-colors"
            >
              <div className="grid place-items-center size-12 rounded-lg bg-primary/15 text-primary">
                <Icon className="size-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">
              Founder & President
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
              Where the company <span className="italic font-serif text-[#0E7490]">begins.</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl border border-[#E2E6EE] bg-white p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <FounderAvatar p={FOUNDER} />
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F1622]">{FOUNDER.name}</h3>
                <p className="mt-1 text-base text-[#5C6473] font-semibold">{FOUNDER.title}</p>
                <p className="mt-3 text-sm text-[#5C6473] leading-relaxed">
                  Stefan founded Intrastack Solutions in 2019 with the conviction that cloud transformation
                  deserves a partner who treats it as engineering, not theatre. With more than three decades
                  in technology delivery and consulting, he shapes how we hire, how we architect, and how we
                  hand over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHIEF EXECUTIVE LEADERSHIP */}
      <section className="w-full bg-accent py-28 px-6 border-y border-base-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Chief Executive Leadership
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                The executives <span className="italic font-serif text-secondary">running the company.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our C-suite — accountable for the operating cadence, technology direction, and day-to-day
              execution that turns strategy into delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXECUTIVES.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BOARD OF ADVISORS */}
      <section className="w-full bg-background py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Board of advisors
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Executive advisors, <span className="italic font-serif text-secondary">four geographies.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Senior leaders embedded in the regions we deliver from — Vietnam, Japan, India, and the United
              States. They keep the company close to the markets we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVISORS.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* VICE PRESIDENTS */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0E7490]">
                Vice president team
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
                Our executive <span className="italic font-serif text-[#0E7490]">vice presidents.</span>
              </h2>
            </div>
            <p className="text-lg text-[#5C6473] leading-relaxed">
              The VPs who own the day-to-day across sales, cloud delivery, and the people that make both
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VPS.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="w-full bg-background py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Directors team
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Our executive <span className="italic font-serif text-secondary">directors.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Directors leading the practice — operations, DevOps, support, and engineering — turning
              strategy into shipped work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIRECTORS.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* HIRING NOW */}
      <section className="w-full bg-accent py-28 px-6 border-y border-base-300">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Hiring now
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Account sales — <span className="italic font-serif text-secondary">open seats.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four Account Executive roles open across commercial and government, east and west. Senior
              operators welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPEN_ROLES.map((r) => (
              <Link
                key={r.team}
                href="/careers"
                className="group rounded-2xl border-2 border-dashed border-base-300 bg-base-100/40 p-6 hover:border-primary hover:bg-base-100 transition-all"
              >
                <div className="grid place-items-center size-16 rounded-2xl border-2 border-dashed border-base-300 text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                  <Plus className="size-6" strokeWidth={2} />
                </div>
                <div className="mt-5 inline-flex rounded-full bg-secondary/15 border border-secondary/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">
                  Open role
                </div>
                <h3 className="mt-3 text-base font-bold text-foreground leading-snug">{r.team}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.role}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Apply <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              See all open roles <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-gradient-to-br from-base-200 to-base-100 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Want to meet the <span className="italic font-serif text-secondary">team behind it?</span>
            </h3>
            <p className="mt-3 text-muted-foreground">
              30 minutes with a senior engineer or operator — no SDRs, no decks.
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
