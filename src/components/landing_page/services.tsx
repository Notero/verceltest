import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { RevealGroup } from "@/components/public/reveal";

type IconKind = "ai" | "cloud" | "data" | "pm" | "people" | "transform" | "devops" | "hw" | "shield" | "code" | "mobile" | "migrate";

function ServiceIcon({ kind }: { kind: IconKind }) {
  const common = {
    width: 28,
    height: 28,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "ai":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="3" />
          <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.6 4.6l2.1 2.1M15.3 15.3l2.1 2.1M4.6 17.4l2.1-2.1M15.3 6.7l2.1-2.1" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <path d="M6 16h10a3.5 3.5 0 0 0 .5-7c-.5-3-3.2-5-6-4.7-2.4.3-4 1.9-4.5 4-2 .3-3 1.7-3 3.4A4 4 0 0 0 6 16z" />
        </svg>
      );
    case "data":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <ellipse cx="11" cy="5" rx="7" ry="2.5" />
          <path d="M4 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
          <path d="M4 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
        </svg>
      );
    case "pm":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <rect x="3" y="4" width="16" height="14" rx="2" />
          <path d="M3 9h16M8 4v3M14 4v3" />
          <path d="M7 13l2 2 4-4" />
        </svg>
      );
    case "people":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.2" />
          <path d="M2 18c.5-3 3-5 6-5s5.5 2 6 5" />
          <path d="M14 18c.3-2 1.5-3.3 3-3.7" />
        </svg>
      );
    case "transform":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <path d="M4 7h11M4 7l3-3M4 7l3 3" />
          <path d="M18 15H7M18 15l-3-3M18 15l-3 3" />
        </svg>
      );
    case "devops":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <circle cx="6" cy="6" r="2" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="6" cy="16" r="2" />
          <circle cx="16" cy="16" r="2" />
          <path d="M8 6h6M6 8v6M16 8v6M8 16h6" />
        </svg>
      );
    case "hw":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <rect x="3" y="4" width="16" height="11" rx="1.5" />
          <path d="M2 18h18M7 15v3M15 15v3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <path d="M11 2 3 5v6c0 4.5 3.4 7.8 8 9 4.6-1.2 8-4.5 8-9V5l-8-3z" />
          <path d="M7.5 11l2.5 2.5L15 9" />
        </svg>
      );
    case "code":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <path d="M7 5 2 11l5 6M15 5l5 6-5 6M13 4l-4 14" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <rect x="6" y="2" width="10" height="18" rx="2" />
          <path d="M9 17h4" />
        </svg>
      );
    case "migrate":
      return (
        <svg {...common} viewBox="0 0 22 22">
          <path d="M3 11h13l-3-3M3 11l3 3" />
          <path d="M19 5v12" />
        </svg>
      );
  }
}

type Service = {
  num: string;
  title: string;
  body: string;
  href: string;
  icon: IconKind;
};

const SERVICES: Service[] = [
  { num: "01", title: "Cloud Transformation", body: "Designed to catapult your organization into the future — strategy, migration, and operations as one motion.", href: "/services/cloud_transformation", icon: "transform" },
  { num: "02", title: "DevOps Automation", body: "DevOps and automation emerge as the linchpin for organizations shipping software at modern velocity.", href: "/services/devops_automation", icon: "devops" },
  { num: "03", title: "AI Engineering", body: "Artificial Intelligence and Machine Learning services — model design, training pipelines, and inference at scale.", href: "/services/ai_engineering", icon: "ai" },
  { num: "04", title: "Cybersecurity", body: "Defense-in-depth across identity, workloads, and data — engineered for compliance and built to scale.", href: "/services/cybersecurity", icon: "shield" },
  { num: "05", title: "Software Development", body: "Custom platforms engineered for scale, reliability, and speed — from greenfield builds to legacy modernization.", href: "/services/software_development", icon: "code" },
  { num: "06", title: "Mobile Development", body: "Native and cross-platform mobile apps your users will love — designed, built, and shipped end-to-end.", href: "/services/mobile_development", icon: "mobile" },
  { num: "07", title: "IT Services", body: "Comprehensive hardware and software services — procurement, integration, and lifecycle management.", href: "/services/it_services", icon: "hw" },
  { num: "08", title: "Staff Augmentation", body: "Embed senior engineers and consultants into your team — the backbone of every successful project.", href: "/services/staff_augmentation", icon: "people" },
  { num: "09", title: "Cloud Migration", body: "Plan, execute, and de-risk migrations across AWS, Azure, and GCP without disrupting the business.", href: "/services/cloud_migration", icon: "migrate" },
  { num: "10", title: "IT Consulting", body: "Strategic guidance from technology and business leaders — seamless execution, on time and on budget.", href: "/services/it_consulting", icon: "pm" },
];

export default function Services() {
  return (
    <section className="w-full bg-accent py-28 md:py-32 px-6" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-end">
          <Reveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              What we <span className="italic font-serif text-secondary">provide.</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in cloud strategies, security, project management, data analytics, and
              IT staffing solutions to empower businesses in your cloud journey.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          direction="up"
          stagger={80}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {SERVICES.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group hover-lift relative rounded-2xl border border-base-300 bg-base-100 p-8 hover:bg-card hover:border-primary flex flex-col"
            >
              <div className="grid place-items-center size-12 rounded-lg bg-primary/10 text-primary">
                <ServiceIcon kind={s.icon} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                View service <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
