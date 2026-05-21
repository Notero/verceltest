import Link from "next/link";
import {
  BarChart3,
  ShieldCheck,
  RefreshCw,
  Cloud,
  Server,
  Boxes,
  Sparkles,
  Lock,
  GitBranch,
  Network,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

type Solution = {
  title: string;
  body: string;
  href: string;
  icon: LucideIcon;
};

const SOLUTIONS: Solution[] = [
  { title: "Data Analytics", body: "Unify data sources and turn raw signal into operational insight.", href: "/solutions/data_analytics", icon: BarChart3 },
  { title: "Security & Compliance", body: "Audit-ready controls aligned to HIPAA, SOC 2, ISO, and FedRAMP.", href: "/solutions/security_compliance", icon: ShieldCheck },
  { title: "Business Continuity", body: "Disaster recovery and resilience engineering that actually holds.", href: "/solutions/business_continuity", icon: RefreshCw },
  { title: "AWS", body: "Premier-partner expertise across the full AWS catalog.", href: "/solutions/aws", icon: Cloud },
  { title: "Azure", body: "Enterprise Azure landing zones, identity, and FinOps.", href: "/solutions/azure", icon: Server },
  { title: "Kubernetes", body: "Production K8s — multi-cluster, multi-cloud, GitOps-native.", href: "/solutions/kubernetes", icon: Boxes },
  { title: "AI Automation", body: "Embed AI into the workflows that compound team output.", href: "/solutions/ai_automation", icon: Sparkles },
  { title: "Enterprise Security", body: "Zero-trust architecture from edge to workload to data.", href: "/solutions/enterprise_security", icon: Lock },
  { title: "CI/CD Transformation", body: "Pipelines, environments, and platform engineering done right.", href: "/solutions/cicd_transformation", icon: GitBranch },
  { title: "Hybrid Cloud", body: "Seamless orchestration across on-prem and public clouds.", href: "/solutions/hybrid_cloud", icon: Network },
];

export default function Solutions() {
  return (
    <section className="w-full bg-[#FBF8EE] py-28 md:py-32 px-6" id="solutions">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-end">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0E7490]">
              Solutions
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
              Outcomes you can <span className="italic font-serif text-[#0E7490]">ship.</span>
            </h2>
          </div>
          <p className="text-lg text-[#5C6473] leading-relaxed">
            Ten focused solution areas — packaged engagements with clear deliverables, not
            open-ended consulting hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SOLUTIONS.map(({ title, body, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative overflow-hidden rounded-2xl border border-[#E2E6EE] bg-white p-6 hover:border-primary hover:shadow-md transition-all flex flex-col"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/15 via-transparent to-secondary/10"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center size-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-colors">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight className="size-4 text-[#5C6473] group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mt-5 text-base font-bold text-[#0F1622] leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[#5C6473] leading-relaxed">{body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
