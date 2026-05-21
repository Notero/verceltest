import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Server,
  Boxes,
  ShieldCheck,
  ClipboardList,
  Database,
  Check,
  Award,
} from "lucide-react";
import SchemaScript from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata = {
  title: "Certifications · Intrastack",
  description:
    "Intrastack engineers hold deep certifications across Google Cloud, AWS, Azure, Kubernetes, security, project management, and data infrastructure — proof of expertise across the platforms enterprises actually run.",
  alternates: { canonical: "/about/certifications" },
};

type Tier = "Foundational" | "Associate" | "Professional" | "Expert" | "Specialty";

type CertGroup = {
  id: string;
  vendor: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  accent: "primary" | "secondary";
  certs: { name: string; tier: Tier }[];
};

const TIER_STYLES: Record<Tier, string> = {
  Foundational: "bg-base-200 text-muted-foreground border-base-300",
  Associate: "bg-primary/10 text-[#0E7490] border-primary/30",
  Professional: "bg-secondary/15 text-[#92400E] border-secondary/40",
  Expert: "bg-secondary/15 text-[#92400E] border-secondary/40",
  Specialty: "bg-primary/15 text-[#0E7490] border-primary/40",
};

const GROUPS: CertGroup[] = [
  {
    id: "gcp",
    vendor: "Google Cloud Platform (GCP)",
    tagline: "Architect, build, secure, and run on Google Cloud.",
    icon: Cloud,
    accent: "primary",
    certs: [
      { name: "Professional Cloud Architect", tier: "Professional" },
      { name: "Associate Cloud Engineer", tier: "Associate" },
      { name: "Professional Data Engineer", tier: "Professional" },
      { name: "Professional Cloud Developer", tier: "Professional" },
      { name: "Professional Cloud Security Engineer", tier: "Professional" },
      { name: "Professional Collaboration Engineer", tier: "Professional" },
    ],
  },
  {
    id: "aws",
    vendor: "Amazon Web Services (AWS)",
    tagline: "Premier-partner depth across the AWS catalog.",
    icon: Cloud,
    accent: "secondary",
    certs: [
      { name: "Solutions Architect – Professional", tier: "Professional" },
      { name: "Solutions Architect – Associate", tier: "Associate" },
      { name: "DevOps Engineer – Professional", tier: "Professional" },
      { name: "Developer – Associate", tier: "Associate" },
      { name: "SysOps Administrator – Associate", tier: "Associate" },
      { name: "Security – Specialty", tier: "Specialty" },
      { name: "Advanced Networking – Specialty", tier: "Specialty" },
      { name: "Machine Learning – Specialty", tier: "Specialty" },
    ],
  },
  {
    id: "azure",
    vendor: "Microsoft Azure",
    tagline: "Enterprise Azure — landing zones, identity, and beyond.",
    icon: Server,
    accent: "primary",
    certs: [
      { name: "Azure Solutions Architect Expert", tier: "Expert" },
      { name: "Azure Administrator Associate", tier: "Associate" },
      { name: "Azure DevOps Engineer Expert", tier: "Expert" },
      { name: "Azure Developer Associate", tier: "Associate" },
      { name: "Azure Security Engineer Associate", tier: "Associate" },
      { name: "Azure AI Engineer Associate", tier: "Associate" },
      { name: "Azure Data Scientist Associate", tier: "Associate" },
    ],
  },
  {
    id: "k8s",
    vendor: "Kubernetes",
    tagline: "Production K8s — administration, development, and security.",
    icon: Boxes,
    accent: "primary",
    certs: [
      { name: "Certified Kubernetes Administrator (CKA)", tier: "Professional" },
      { name: "Certified Kubernetes Application Developer (CKAD)", tier: "Professional" },
      { name: "Certified Kubernetes Security Specialist (CKS)", tier: "Specialty" },
    ],
  },
  {
    id: "security",
    vendor: "Security & Networking",
    tagline: "Cross-vendor security expertise — cloud, on-prem, and the seam between.",
    icon: ShieldCheck,
    accent: "secondary",
    certs: [
      { name: "Certified Information Systems Security Professional (CISSP)", tier: "Professional" },
      { name: "Certified Cloud Security Professional (CCSP)", tier: "Professional" },
      { name: "Red Hat Certified Engineer (RHCE)", tier: "Professional" },
      { name: "Red Hat Certified System Administrator (RHCSA)", tier: "Associate" },
    ],
  },
  {
    id: "pm",
    vendor: "Project Management & Agile",
    tagline: "Delivery discipline — the difference between a plan and a shipped program.",
    icon: ClipboardList,
    accent: "primary",
    certs: [
      { name: "Project Management Professional (PMP)", tier: "Professional" },
      { name: "Certified ScrumMaster (CSM)", tier: "Associate" },
    ],
  },
  {
    id: "data",
    vendor: "Data & Infrastructure",
    tagline: "Modern data platforms and infrastructure-as-code.",
    icon: Database,
    accent: "secondary",
    certs: [
      { name: "Databricks Certified Data Engineer Associate", tier: "Associate" },
      { name: "Databricks Certified Data Engineer Professional", tier: "Professional" },
      { name: "HashiCorp Certified: Terraform Associate", tier: "Associate" },
    ],
  },
];

const TOTAL_CERTS = GROUPS.reduce((n, g) => n + g.certs.length, 0);

export default function CertificationsPage() {
  return (
    <main className="flex flex-col flex-1 pt-20">
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Certifications", url: "/about/certifications" },
        ])}
      />

      {/* HERO */}
      <section className="relative w-full bg-background overflow-hidden border-b border-base-300">
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 size-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-32 size-[520px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="inline size-3 mx-1" />
            <Link href="/about" className="hover:text-primary">About</Link>
            <ChevronRight className="inline size-3 mx-1" />
            <span className="text-primary">Certifications</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-tight">
            Credentialed across <span className="italic font-serif text-secondary">every cloud.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Intrastack is a premier multi-cloud consulting partner with deep expertise across Google Cloud,
            AWS, and Microsoft Azure. The certifications below are proof of dedication — held by engineers
            who keep their skills current as the industry moves.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Talk to a certified engineer <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about/partners"
              className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Our partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full bg-accent py-16 px-6 border-b border-base-300">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {TOTAL_CERTS}+
              </span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Active certifications held</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">7</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Specialization domains</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">3</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Hyperscaler partnerships</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">∞</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Continuous training budget</div>
          </div>
        </div>
      </section>

      {/* QUICK NAV CHIPS */}
      <section className="w-full bg-background py-12 px-6 border-b border-base-300">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mr-2">
            Jump to:
          </span>
          {GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 px-4 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {g.vendor}
            </a>
          ))}
        </div>
      </section>

      {/* CERTIFICATION GROUPS */}
      <section className="w-full bg-[#FBF8EE] py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
              The full <span className="italic font-serif text-[#0E7490]">credential set.</span>
            </h2>
            <p className="text-lg text-[#5C6473] leading-relaxed">
              Grouped by domain. Every certification listed is held by working engineers — not aspirational,
              not lapsed. We re-credential as platforms evolve.
            </p>
          </div>

          <div className="space-y-8">
            {GROUPS.map(({ id, vendor, tagline, icon: Icon, accent, certs }) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-24 rounded-3xl border border-[#E2E6EE] bg-white p-8 md:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[#E2E6EE] pb-6 mb-8">
                  <div className="flex items-start gap-5">
                    <div
                      className={`grid place-items-center size-14 rounded-2xl ${
                        accent === "primary"
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      <Icon className="size-7" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F1622] leading-tight">{vendor}</h3>
                      <p className="mt-1.5 text-sm text-[#5C6473]">{tagline}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#0F1622] text-white px-4 py-1.5 text-xs font-semibold">
                    <Award className="size-3.5" strokeWidth={2} />
                    {certs.length} certifications
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {certs.map((c) => (
                    <li
                      key={c.name}
                      className="flex items-start justify-between gap-4 py-3 border-b border-dashed border-[#E2E6EE] last:border-0"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                        <span className="text-sm text-[#0F1622] leading-snug">{c.name}</span>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0 ${TIER_STYLES[c.tier]}`}
                      >
                        {c.tier}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="w-full bg-accent py-28 px-6 border-y border-base-300">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our commitment</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-snug">
            Continuous training, <span className="italic font-serif text-secondary">always.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Intrastack we empower our consultants and engineers with continuous training and development —
            ensuring they remain on par with the latest technologies and solutions. That dedication is what
            lets us deliver exceptional outcomes and set new standards in the industry.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-background py-24 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-base-300 bg-gradient-to-br from-base-200 to-base-100 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Need a credentialed team for your <span className="italic font-serif text-secondary">next build?</span>
            </h3>
            <p className="mt-3 text-muted-foreground">
              30-min call with a senior engineer · matched to your stack · same business day.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 shrink-0"
          >
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
