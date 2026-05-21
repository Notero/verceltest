import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import NavSearch, { type NavSearchEntry } from "./navSearch";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cloud Transformation", href: "/services/cloud_transformation" },
      { label: "DevOps Automation", href: "/services/devops_automation" },
      { label: "AI Engineering", href: "/services/ai_engineering" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Software Development", href: "/services/software_development" },
      { label: "Mobile Development", href: "/services/mobile_development" },
      { label: "IT Services", href: "/services/it_services" },
      { label: "Staff Augmentation", href: "/services/staff_augmentation" },
      { label: "Cloud Migration", href: "/services/cloud_migration" },
      { label: "IT Consulting", href: "/services/it_consulting" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Data Analytics", href: "/solutions/data_analytics" },
      { label: "Security & Compliance", href: "/solutions/security_compliance" },
      { label: "Business Continuity", href: "/solutions/business_continuity" },
      { label: "AWS", href: "/solutions/aws" },
      { label: "Azure", href: "/solutions/azure" },
      { label: "Kubernetes", href: "/solutions/kubernetes" },
      { label: "AI Automation", href: "/solutions/ai_automation" },
      { label: "Enterprise Security", href: "/solutions/enterprise_security" },
      { label: "CI/CD Transformation", href: "/solutions/cicd_transformation" },
      { label: "Hybrid Cloud", href: "/solutions/hybrid_cloud" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Government", href: "/industries/government" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Telecom", href: "/industries/telecom" },
      { label: "Education", href: "/industries/education" },
    ],
  },
  {
    label: "News & Blogs",
    href: "/news/blogs",
    children: [
      { label: "Blogs", href: "/news/blogs" },
      { label: "Tech News & Trends", href: "/news/trends" },
      { label: "White Papers", href: "/news/whitepaper" },
      { label: "Client Stories", href: "/news/client_stories" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Company", href: "/about" },
      { label: "Life at Intrastack", href: "/about/life_intrastack" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Mission & Vision", href: "/about/mission_vision" },
      { label: "Delivery Centers", href: "/about/delivery_centers" },
      { label: "Certifications", href: "/about/certifications" },
      { label: "Partners", href: "/about/partners" },
    ],
  },
  { label: "Careers", href: "/careers" },
];

const SEARCH_ENTRIES: NavSearchEntry[] = (() => {
  const out: NavSearchEntry[] = [];
  for (const item of NAV_ITEMS) {
    out.push({ label: item.label, href: item.href, group: item.label });
    if (item.children) {
      for (const child of item.children) {
        out.push({ label: child.label, href: child.href, group: item.label });
      }
    }
  }
  out.push(
    { label: "Login", href: "/login", group: "Account" },
    { label: "Register", href: "/register", group: "Account" },
    { label: "Contact", href: "/contact", group: "Account" },
  );
  return out;
})();

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 text-white bg-base-100/85 backdrop-blur-md border-b border-base-300/50">

      <nav className="mx-auto flex h-20 items-center gap-6 px-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/intrastack-logo.svg"
            alt="Intrastack"
            width={160}
            height={32}
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-7 ml-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[15px] font-medium text-white/95 hover:text-primary transition-colors py-6"
              >
                {item.label}
                {item.children && <ChevronDown className="size-4" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden group-hover:block min-w-[240px] bg-base-100 border border-base-300 rounded-lg shadow-xl py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <NavSearch entries={SEARCH_ENTRIES} />

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-1 rounded-lg border border-base-300 px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/5 hover:border-primary hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-content hover:bg-primary/90 transition-colors"
          >
            Contact Us
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
