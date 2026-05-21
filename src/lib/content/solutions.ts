import type { SolutionContent } from "@/components/public/templates/solutionPage";

const std = (us: string): SolutionContent["compare"] => [
  { capability: "Time-to-prod", us: "✓ 6–8 wks", diy: "6–12 mo" },
  { capability: "Best-practice defaults", us: "✓ day 1", diy: "someday" },
  { capability: "Multi-env parity", us: "✓ same controls", diy: "forks per team" },
  { capability: "On-call rotation", us: "✓ optional 24/7", diy: "your engineers" },
  { capability: us, us: "✓ included", diy: "scoped separately" },
];

export const SOLUTIONS: Record<string, SolutionContent> = {
  data_analytics: {
    slug: "data_analytics",
    name: "Data Analytics",
    heroImage: "/images/unsplash/photo-1551288049-bebda4e38f71-1600.webp",
    variant: "split",
    accent: "cyan",
    headline: { lead: "Turn raw signal into", emph: "operational insight.", tail: "" },
    lede: "Unify sources, model the business, and put trusted numbers in front of the people who make decisions — without a six-month warehouse rebuild.",
    accentPills: ["Snowflake", "BigQuery", "Redshift"],
    pills: ["dbt", "Airflow", "Looker", "Power BI"],
    narrative: {
      tagline: "Unlock the power of data",
      intro:
        "We provide a comprehensive suite of data analytics services designed to meet the diverse needs of businesses across industries. Our expertise spans from data collection and preparation to advanced analysis and insights generation — empowering organizations with actionable intelligence to drive informed decision-making and strategic growth.",
      sectionTitle: "Our analytics services",
      sectionLede:
        "Six capabilities, one delivery shape — from strategy through governance — so the numbers your business runs on can actually be trusted.",
      pillars: [
        {
          title: "Data Strategy & Planning",
          body: "We partner with businesses to develop robust data strategies that align with organizational goals. We assess existing infrastructure, identify data sources, and define governance frameworks to ensure quality, consistency, and security.",
        },
        {
          title: "Data Integration & Management",
          body: "Connecting sources, harmonizing formats, and managing the data estate at rest and in motion — so analysts work from a single source of truth instead of a maze of forks.",
        },
        {
          title: "Data Analysis & Insights",
          body: "From exploratory analysis to executive dashboards — we turn raw signal into the insights leadership actually uses to set direction.",
        },
        {
          title: "Visualization & Reporting",
          body: "Dashboards, scorecards, and self-serve patterns built around the questions your team actually asks — not the screenshots from the vendor's demo.",
        },
        {
          title: "ML Predictive Analytics",
          body: "Forecasting, churn, propensity, anomaly detection — production-grade models tied to the workflow KPI, with evals and retraining cadence built in.",
        },
        {
          title: "Data Governance & Compliance",
          body: "Lineage, access control, retention, and audit trail wired into the same pipeline that delivers the dashboards. Compliance evidence falls out, not bolted on.",
        },
      ],
      closing:
        "Ready to unlock the power of your data and drive business growth through advanced analytics? Let us transform your organization into a data-driven powerhouse.",
    },
    why: [
      { icon: "★", title: "Trusted by default", body: "Tests, freshness, and lineage wired in." },
      { icon: "⚡", title: "Fast to first metric", body: "Reusable models · 6 weeks to first dashboard." },
      { icon: "⌘", title: "Warehouse-agnostic", body: "Same patterns on Snowflake, BigQuery, Redshift." },
      { icon: "⚑", title: "Stewarded", body: "Documentation and ownership baked in." },
    ],
    capabilities: [
      { title: "Ingestion", items: ["Source connectors", "CDC + batch", "PII handling"] },
      { title: "Warehouse", items: ["Layered modeling", "Cost guardrails", "Workload tuning"] },
      { title: "Transformation", items: ["dbt projects", "CI tests", "Reusable macros"] },
      { title: "BI & semantics", items: ["Looker / LookML or Power BI", "Metric layer", "Self-serve patterns"] },
      { title: "Activation", items: ["Reverse ETL", "Audience segmentation", "ML feature export"] },
      { title: "Governance", items: ["Lineage", "Access control", "Data contracts"] },
    ],
    stack: ["Snowflake", "BigQuery", "dbt", "Airflow", "Fivetran", "Looker", "Power BI", "Hightouch", "Great Expectations"],
    compare: std("Documentation + lineage"),
  },
  security_compliance: {
    slug: "security_compliance",
    name: "Security & Compliance",
    heroImage: "/images/unsplash/photo-1450101499163-c8848c66ca85-1600.webp",
    variant: "overlay",
    accent: "yellow",
    headline: { lead: "Audit-ready, by", emph: "default.", tail: "" },
    lede: "Controls aligned to FedRAMP, PCI DSS, SOC, HIPAA, GDPR, and PII protection — implemented as code, evidenced continuously. The auditor finds receipts, not surprises.",
    accentPills: ["FedRAMP", "PCI DSS", "SOC", "HIPAA", "GDPR"],
    pills: ["Vanta", "Drata", "OPA", "Wiz"],
    narrative: {
      tagline: "Where protection meets peace of mind",
      intro:
        "We specialize in designing and implementing robust security measures to safeguard your business against cyber threats and ensure compliance with industry standards and regulations. Controls live as code, evidence is collected continuously, and the auditor walks away with receipts — not promises.",
      sectionTitle: "Hardened end-to-end",
      sectionLede:
        "From cloud security architecture through compliance evidence and implementation — three pillars that move security from a binder of policies to a running, measured system.",
      pillars: [
        {
          title: "Cloud Security Design",
          body: "Comprehensive security architectures tailored to your organization's unique needs and risk profile. From network security to endpoint protection, we design robust defenses that mitigate risks and protect your assets from evolving cyber threats.",
        },
        {
          title: "Compliance & Standards",
          body: "Navigating regulatory compliance can be challenging. Our experts stay current with regulations relevant to your industry — FedRAMP, PCI DSS, SOC, HIPAA, GDPR, and protection of Personally Identifiable Information (PII). We help you achieve and maintain compliance, minimizing legal and reputational risks.",
        },
        {
          title: "Implementation",
          body: "Effective security requires action, not just planning. We translate security designs into tangible solutions — configuring firewalls, deploying intrusion detection, implementing encryption — ensuring measures are deployed effectively.",
        },
        {
          title: "Evidence as Code",
          body: "Controls and proofs live in the same repo. Drift is detected automatically, and the evidence pipeline never goes stale because nobody refreshed the spreadsheet.",
        },
        {
          title: "Framework Cross-Mapping",
          body: "One codified control set, mapped to many frameworks. Add new attestations to your existing FedRAMP work without duplicating effort or rebuilding from zero.",
        },
        {
          title: "Continuous Posture",
          body: "Drift detection, live posture dashboards, and quarterly tabletops. Audit week becomes a routine read of the dashboard — not a fire drill.",
        },
      ],
      closing:
        "Identity, workloads, data — hardened end to end. Your defenses move from reactive scrambling to a quiet, well-instrumented routine.",
    },
    why: [
      { icon: "★", title: "Evidence as code", body: "Controls and proof live in the same repo." },
      { icon: "⚡", title: "Audit-fast", body: "Weeks, not quarters, to a clean Type II." },
      { icon: "⌘", title: "Framework-agnostic", body: "One control set · mapped to many frameworks." },
      { icon: "⚑", title: "Continuous", body: "Drift detection · live posture · no surprises." },
    ],
    capabilities: [
      { title: "Control set", items: ["Codified controls", "Owner per control", "Mapped to frameworks"] },
      { title: "Identity & access", items: ["SSO + MFA", "JIT access", "Quarterly reviews"] },
      { title: "Workload security", items: ["Hardened baselines", "Image scanning", "Runtime detection"] },
      { title: "Data protection", items: ["Encryption", "DLP", "Retention policy"] },
      { title: "Detection & response", items: ["SIEM/SOAR", "Runbooks", "Tabletop exercises"] },
      { title: "Evidence pipeline", items: ["Auto-collected", "Time-stamped", "Auditor-ready"] },
    ],
    stack: ["Vanta", "Drata", "OPA", "Kyverno", "Wiz", "Falco", "Snyk", "1Password", "Okta"],
    compare: std("Framework cross-mapping"),
  },
  business_continuity: {
    slug: "business_continuity",
    name: "Business Continuity",
    heroImage: "/images/unsplash/photo-1597733336794-12d05021d510-1600.webp",
    variant: "split",
    accent: "mixed",
    headline: { lead: "Recover in", emph: "minutes.", tail: "Not days." },
    lede: "Disaster recovery and resilience engineering that holds when it matters. Tested RTO/RPO targets, real failover drills, and runbooks people actually open.",
    accentPills: ["RTO < 1h", "RPO < 5m", "Multi-region"],
    pills: ["Velero", "AWS Backup", "Azure Site Recovery", "GCP Backup & DR"],
    narrative: {
      tagline: "Where resilience meets peace of mind",
      intro:
        "We offer comprehensive business continuity solutions across all three leading public clouds — Azure, AWS, and GCP. With our expertise and experience, we ensure your critical data and applications are protected, and your business can quickly recover from any unexpected event — natural disaster, cyber attack, or hardware failure.",
      sectionTitle: "Our continuity offerings",
      sectionLede:
        "Five pillars that move BC/DR from a hopeful binder to a tested, measured system — drilled quarterly, instrumented continuously, and aligned to the frameworks your auditor cares about.",
      pillars: [
        {
          title: "Backup & Recovery",
          body: "Robust backup solutions protecting critical data and applications against loss or corruption. Regular backups to secure cloud storage, automated schedules and retention policies, ensuring compliance and minimizing data loss.",
        },
        {
          title: "Business Continuity / Disaster Recovery (BC/DR)",
          body: "Comprehensive BC/DR plans tailored to your organization's needs and risk profile. Redundant infrastructure and failover mechanisms ensure continuous availability — with regular DR drills validating the plan and surfacing gaps.",
        },
        {
          title: "High Availability",
          body: "Designing and implementing HA to minimize downtime and ensure continuous access to critical services. Auto-scaling, load balancing, geographic redundancy, and proactive monitoring catch issues before they impact operations.",
        },
        {
          title: "Data Replication & Synchronization",
          body: "Data replication and synchronization across geographic locations using asynchronous or synchronous techniques. Failover and failback processes seamlessly transition between primary and secondary data centers in the event of a disaster.",
        },
        {
          title: "Cloud-Based Disaster Recovery",
          body: "Leveraging Azure Site Recovery, AWS Disaster Recovery, and GCP Disaster Recovery to replicate and recover workloads in the cloud. Automated failover/failback, cross-region replication, and multi-zone deployments enhance DR capabilities.",
        },
        {
          title: "Quarterly Drills",
          body: "Failover exercises every quarter, post-mortems on every drill, and a continuous-improvement loop that makes the next exercise smoother than the last. The first failover is never the production one.",
        },
      ],
      closing:
        "Resilience that holds when it matters. RTO and RPO targets become contractual numbers — not optimistic ones in a slide deck.",
    },
    why: [
      { icon: "★", title: "Tested, not assumed", body: "Quarterly failover drills · post-mortems." },
      { icon: "⚡", title: "Recover in minutes", body: "RTO/RPO targets contractual, not aspirational." },
      { icon: "⌘", title: "Multi-cloud capable", body: "Same patterns across AWS, Azure, GCP." },
      { icon: "⚑", title: "Compliance-aligned", body: "Maps to SOC · HIPAA controls." },
    ],
    capabilities: [
      { title: "BIA + risk", items: ["Critical-process map", "RTO/RPO per tier", "Risk register"] },
      { title: "Backup", items: ["Immutable copies", "Cross-region", "Tested restores"] },
      { title: "DR strategy", items: ["Pilot light · warm standby", "Cross-region replication", "Failover runbooks"] },
      { title: "Drills", items: ["Quarterly exercises", "Post-mortem template", "Continuous improvement"] },
      { title: "Comms plan", items: ["Status page", "Stakeholder tree", "Customer comms templates"] },
      { title: "Evidence", items: ["Drill reports", "Restore proofs", "Audit-ready"] },
    ],
    stack: ["Velero", "AWS Backup", "Azure Site Recovery", "Google Cloud Backup and DR", "Veeam", "Terraform", "Statuspage", "PagerDuty"],
    compare: std("Quarterly failover drill"),
  },
  aws: {
    slug: "aws",
    name: "AWS",
    heroImage: "/images/unsplash/photo-1523474438810-b04a2480633c-1600.webp",
    variant: "diagram",
    accent: "yellow",
    headline: { lead: "AWS, done", emph: "right.", tail: "From day one." },
    lede: "Deep expertise across the AWS catalog — landing zones, well-architected reviews, FinOps, and the production patterns that age well.",
    accentPills: ["AWS Certified", "Well-Architected", "FinOps"],
    pills: ["Control Tower", "EKS", "Lambda", "RDS"],
    narrative: {
      tagline: "AWS migration & operations done right",
      intro:
        "Amazon Web Services is a leading cloud platform known for scalability, reliability, and flexibility. Our AWS practice helps you harness that power to accelerate innovation and drive digital transformation — whether migrating data, applications, or entire data centers, or operating production-grade workloads day to day.",
      sectionTitle: "Why partner on AWS",
      sectionLede:
        "Certified depth across every AWS domain — paired with the production patterns and FinOps discipline that keep cloud bills from becoming a quarterly surprise.",
      pillars: [
        {
          title: "AWS-Certified Specialists",
          body: "Certified architects, security specialists, and data engineers across every AWS domain. The people on your account are credentialed and have shipped the patterns we recommend.",
        },
        {
          title: "Well-Architected Reviews",
          body: "Six pillars — operational excellence, security, reliability, performance, cost, sustainability — scored against the AWS framework with a prioritized improvement plan attached.",
        },
        {
          title: "Multi-Account from Day One",
          body: "Control Tower, AFT pipelines, SCPs, and org policies set up so the second, fifth, and twentieth account follow the same baseline as the first. Not a hand-managed sprawl.",
        },
        {
          title: "FinOps Embedded",
          body: "Tagging strategy, Cost and Usage Reports, Savings Plans, and right-sizing reviews wired into the same workflow that ships workloads. Cost discipline isn't a separate project.",
        },
        {
          title: "Production Patterns",
          body: "Reference architectures for EKS, Lambda, Aurora, and the rest of the catalog — the ones that survive contact with real traffic, not the demo-ware from the latest re:Invent.",
        },
        {
          title: "Security by Default",
          body: "IAM Identity Center, GuardDuty, Security Hub, and KMS strategy configured before workloads land. Hardened from the first commit, not retrofitted after audit week.",
        },
      ],
      closing:
        "AWS done right means production patterns that age well — not a project that becomes legacy the day after launch.",
    },
    why: [
      { icon: "★", title: "Certified depth", body: "AWS-certified specialists across every domain." },
      { icon: "⚡", title: "Well-architected", body: "Six pillars · scored · improvement plan." },
      { icon: "⌘", title: "Multi-account from day 1", body: "Control Tower · SCPs · guardrails." },
      { icon: "⚑", title: "Cost-conscious", body: "FinOps embedded, not bolted on." },
    ],
    capabilities: [
      { title: "Landing zone", items: ["Control Tower", "AFT pipelines", "Org policies"] },
      { title: "Compute & containers", items: ["EKS / ECS", "Lambda patterns", "Karpenter"] },
      { title: "Data services", items: ["RDS / Aurora", "DynamoDB", "Redshift / Athena"] },
      { title: "Networking", items: ["TGW · PrivateLink", "Route 53 design", "Edge & WAF"] },
      { title: "Security", items: ["IAM Identity Center", "GuardDuty / Security Hub", "KMS strategy"] },
      { title: "FinOps", items: ["Tagging", "Cost & Usage Reports", "Savings plans"] },
    ],
    stack: ["Control Tower", "EKS", "Lambda", "Aurora", "Redshift", "CloudFront", "GuardDuty", "Terraform", "CDK"],
    compare: std("Certified specialists & escalation paths"),
  },
  azure: {
    slug: "azure",
    name: "Azure",
    heroImage: "/images/unsplash/photo-1451187580459-43490279c0fa-1600.webp",
    variant: "diagram",
    accent: "cyan",
    headline: { lead: "Enterprise Azure,", emph: "without the drag.", tail: "" },
    lede: "Landing zones, identity, and FinOps for organizations who already live in Microsoft. Production-grade defaults — not a wiki of half-applied policies.",
    accentPills: ["Azure Certified", "Landing Zones", "Entra ID"],
    pills: ["AKS", "App Service", "Functions", "Cosmos DB"],
    narrative: {
      tagline: "Azure for organizations already in Microsoft",
      intro:
        "As a Microsoft partner, we specialize in Azure solutions that leverage the platform's depth to drive innovation and growth. From identity and landing zones through AKS, App Service, and the full data stack — we deliver production-grade Azure that fits how your enterprise already operates.",
      sectionTitle: "Why partner on Azure",
      sectionLede:
        "Enterprise-scale defaults, identity-first architecture, and hybrid awareness — so your Azure estate works like a managed platform instead of a sprawl of subscriptions.",
      pillars: [
        {
          title: "Identity-First Architecture",
          body: "Entra ID and Conditional Access are the keystone — PIM for privileged access, federation patterns that match how your enterprise actually operates, and Conditional Access policies that hold up under audit.",
        },
        {
          title: "Enterprise-Scale Landing Zones",
          body: "Production-ready in weeks, not quarters. Management groups, policy initiatives, and Bicep/Terraform scaffolds that scale from a single subscription to a global estate without rework.",
        },
        {
          title: "Hybrid-Aware",
          body: "Azure Arc, ExpressRoute, on-prem patterns native to the design. We meet your existing data centers, AVS clusters, and edge sites where they are — not where the cloud-only reference architecture wishes they were.",
        },
        {
          title: "Defender-Wired",
          body: "Defender for Cloud configured, tuned, and alerting against the workloads that matter — paired with Sentinel for the SIEM layer when scale demands it.",
        },
        {
          title: "App Modernization",
          body: "AKS, App Service, Functions, and Container Apps — chosen against your team's operating model, not a brochure of options. Lift, replatform, or rebuild based on what each workload actually needs.",
        },
        {
          title: "FinOps & Governance",
          body: "Cost Management, tag governance, reservations, and showback by team — wired in early so the bill is explained, not investigated.",
        },
      ],
      closing:
        "Enterprise Azure without the drag — a platform that respects how your organization actually runs.",
    },
    why: [
      { icon: "★", title: "Identity-first", body: "Entra ID + Conditional Access · the keystone." },
      { icon: "⚡", title: "Landing zones in weeks", body: "Enterprise-scale baseline · production-ready." },
      { icon: "⌘", title: "Hybrid-aware", body: "Arc, ExpressRoute, on-prem patterns native." },
      { icon: "⚑", title: "Defender-wired", body: "Defender for Cloud configured, tuned, alerting." },
    ],
    capabilities: [
      { title: "Landing zone", items: ["Enterprise-scale", "Management groups", "Policy initiatives"] },
      { title: "Identity", items: ["Entra ID", "Conditional Access", "PIM"] },
      { title: "Compute", items: ["AKS", "App Service", "Functions"] },
      { title: "Data", items: ["Azure SQL", "Cosmos DB", "Synapse"] },
      { title: "Networking", items: ["Hub-spoke", "Firewall + WAF", "Private DNS"] },
      { title: "FinOps", items: ["Cost Management", "Tag governance", "Reservations"] },
    ],
    stack: ["AKS", "App Service", "Entra ID", "Azure SQL", "Cosmos DB", "Defender", "Bicep", "Terraform"],
    compare: std("Defender + Entra hardening"),
  },
  kubernetes: {
    slug: "kubernetes",
    name: "Kubernetes",
    heroImage: "/images/unsplash/photo-1605745341112-85968b19335b-1600.webp",
    variant: "diagram",
    accent: "cyan",
    headline: { lead: "Kubernetes you can", emph: "actually run.", tail: "On Monday." },
    lede: "Productionized container platforms — multi-cluster, multi-tenant, GitOps-ready, with the on-call rotation already pre-wired.",
    accentPills: ["EKS", "AKS", "GKE"],
    pills: ["Argo", "Flux", "Istio", "OPA"],
    narrative: {
      tagline: "Kubernetes as a managed platform, not a science project",
      intro:
        "Kubernetes is powerful — and unforgiving to teams treating it as a side quest. We deliver production-grade container platforms that respect operational reality: hardened defaults, GitOps from day one, observability that catches problems before users do, and an on-call rotation that's already pre-wired when we hand over.",
      sectionTitle: "Why our Kubernetes practice",
      sectionLede:
        "Six things every production Kubernetes platform needs — bundled by default, not assembled from a YAML safari spanning twelve open-source projects with different release cadences.",
      pillars: [
        {
          title: "Production-Grade Defaults",
          body: "Hardened baseline, image scanning, pod security standards, and network policy configured before the first workload lands. No 'we'll secure it after MVP' moments.",
        },
        {
          title: "GitOps from Day One",
          body: "Argo CD or Flux installed with the cluster — not as a phase-two project. Drift detection, rollback in seconds, and a single source of truth that survives operator turnover.",
        },
        {
          title: "Multi-Cloud Parity",
          body: "Same controls, same policies, same pipelines on EKS, AKS, and GKE. No per-cloud forks, no rebuilds when leadership decides to add a second provider for negotiation leverage.",
        },
        {
          title: "Observability End-to-End",
          body: "Prometheus, Grafana, Loki, Tempo — wired up, dashboards tuned to your services, alert rules that catch real problems instead of crying wolf at 3 AM.",
        },
        {
          title: "Service Mesh, When You Need It",
          body: "Istio or Linkerd with mTLS by default — but only when the complexity is justified by the traffic patterns. We don't add mesh because the deck called for it.",
        },
        {
          title: "On-Call Pre-Wired",
          body: "Optional 24/7 SRE rotation — we hold the pager and the runbook is one our team wrote, not one we inherited and hope still works.",
        },
      ],
      closing:
        "A platform you can actually run on Monday — not a stack that needs three months of glue code before it earns its certificate of authenticity.",
    },
    why: [
      { icon: "★", title: "Production-grade defaults", body: "Hardened baseline · no day-one surprises." },
      { icon: "⚡", title: "GitOps from day one", body: "Argo or Flux · drift detection · rollback in seconds." },
      { icon: "⌘", title: "Multi-cloud parity", body: "Same controls on EKS, AKS, GKE — no per-cloud forks." },
      { icon: "⚑", title: "SRE on call", body: "Optional 24/7 — we hold the pager, you sleep." },
    ],
    capabilities: [
      { title: "Platform foundations", items: ["Landing zone setup", "VPC + subnets + IAM", "Cluster baseline (hardened)"] },
      { title: "CI/CD & GitOps", items: ["Argo CD / Flux install", "Pipeline templates", "Secrets management"] },
      { title: "Observability", items: ["Prometheus + Grafana", "Centralized logs", "Tracing (OTel)"] },
      { title: "Security & policy", items: ["OPA / Kyverno", "Image scanning", "Network policy"] },
      { title: "Service mesh", items: ["Istio / Linkerd", "mTLS by default", "Traffic routing"] },
      { title: "Cost & capacity", items: ["Karpenter / autoscaler", "Showback by team", "Right-sizing"] },
    ],
    stack: ["Argo CD", "Helm", "Terraform", "Prometheus", "Grafana", "Loki", "Tempo", "OPA", "Kyverno", "Istio", "Karpenter", "cert-manager"],
    compare: std("GitOps + mesh + policy bundled"),
  },
  ai_automation: {
    slug: "ai_automation",
    name: "AI Automation",
    heroImage: "/images/unsplash/photo-1620712943543-bcc4688e7485-1600.webp",
    variant: "split",
    accent: "mixed",
    headline: { lead: "Embed AI where it", emph: "compounds.", tail: "" },
    lede: "Workflow automation powered by LLMs and classical ML. We pick the workflows where AI moves the number — and ignore the ones where it doesn't.",
    accentPills: ["LLM ops", "RAG", "Agents"],
    pills: ["LangGraph", "OpenAI", "Anthropic", "vLLM"],
    narrative: {
      tagline: "AI in production — not demos",
      intro:
        "We excel in delivering AI and ML services that drive measurable business outcomes — not science fair projects. Whether you need predictive analytics, retrieval-augmented generation, agentic workflows, or classical ML embedded into a process — we deliver against the workflow KPI, with evals and cost guardrails built in.",
      sectionTitle: "Why our AI practice",
      sectionLede:
        "Six properties that separate AI features which compound from ones that quietly get turned off after six months — bundled by default, measured continuously.",
      pillars: [
        {
          title: "Outcomes, Not Demos",
          body: "Every engagement starts with the workflow KPI we're trying to move. If we can't draw a line from the model to the number, we don't build it.",
        },
        {
          title: "Eval-Driven Development",
          body: "Offline eval harness, online metrics, regression suites for prompts and policies. We catch quality drift before users do — and prove improvements before claiming them.",
        },
        {
          title: "Cost-Aware Inference",
          body: "Budgets, caching, model routing, open-model fallback. Token spend is a first-class engineering constraint — not a quarterly surprise on the OpenAI bill.",
        },
        {
          title: "Safe by Default",
          body: "PII handling, policy enforcement, audit trail — wired in from the first prototype. Compliance and trust scale with the rollout.",
        },
        {
          title: "Certified on Major Platforms",
          body: "Google, AWS, and Azure AI credentials across the team. We pick the platform that fits your latency, cost, and compliance envelope — not the one we've used last.",
        },
        {
          title: "Owned End-to-End",
          body: "Use-case shaping, data, training, serving, evals, ongoing care — one team, one shared backlog, one accountable engineer from week 1 to day 91.",
        },
      ],
      closing:
        "Unlock the power of AI with a partner who treats it as a production system, not a science project.",
    },
    why: [
      { icon: "★", title: "Outcomes, not demos", body: "Measured against the workflow KPI." },
      { icon: "⚡", title: "Eval-driven", body: "Offline + online evals · regressions caught." },
      { icon: "⌘", title: "Cost-aware", body: "Budgets · caching · routing · open-model fallback." },
      { icon: "⚑", title: "Safe by default", body: "Policy, PII handling, audit trail." },
    ],
    capabilities: [
      { title: "Use-case shaping", items: ["ROI model", "Scope contract", "Success metrics"] },
      { title: "RAG + knowledge", items: ["Ingestion", "Retrieval quality", "Freshness"] },
      { title: "Agents & workflows", items: ["Tool calling", "Multi-step plans", "Human-in-the-loop"] },
      { title: "Evals", items: ["Offline harness", "Online metrics", "Regression suite"] },
      { title: "Serving", items: ["Routing", "Caching", "Cost guardrails"] },
      { title: "Governance", items: ["PII policy", "Audit log", "Model lineage"] },
    ],
    stack: ["LangGraph", "OpenAI", "Anthropic", "vLLM", "Qdrant", "Weaviate", "Ragas", "LiteLLM"],
    compare: std("Eval harness + cost guardrails"),
  },
  enterprise_security: {
    slug: "enterprise_security",
    name: "Enterprise Security",
    heroImage: "/images/unsplash/photo-1563013544-824ae1b704d3-1600.webp",
    variant: "overlay",
    accent: "cyan",
    headline: { lead: "Zero-trust,", emph: "end to end.", tail: "" },
    lede: "Edge, workload, identity, and data — designed and implemented as one architecture. We measure ourselves on time-to-detect and time-to-contain.",
    accentPills: ["Zero Trust", "SASE", "XDR"],
    pills: ["Okta", "CrowdStrike", "Wiz", "Zscaler"],
    narrative: {
      tagline: "One architecture, edge to data",
      intro:
        "Enterprise security delivered as one architecture — identity, edge, workload, and data — designed together, instrumented together, and measured against the metrics that actually matter: time-to-detect and time-to-contain.",
      sectionTitle: "Why one architecture wins",
      sectionLede:
        "Six properties that separate enterprise security programs that work from ones that collect tools and dashboards — but never quite catch the thing that matters.",
      pillars: [
        {
          title: "One Architecture",
          body: "Edge, workload, identity, and data — designed as one system, not bolted together from four vendors who never met. Consistent policy, consistent telemetry, consistent enforcement.",
        },
        {
          title: "Identity-Centered",
          body: "Phish-resistant MFA, just-in-time access, least privilege as a measurable property — not an aspiration. PAM for the keys to the kingdom, quarterly access reviews that surface what's drifted.",
        },
        {
          title: "Detect Fast",
          body: "MTTD measured, tuned, and improving month over month. Detection content sourced from real threat intel and your environment's telemetry — not a vendor's default rule pack.",
        },
        {
          title: "Evidence-Driven",
          body: "Findings flow back into controls, controls produce proof, proof flows into the same audit pipeline. One loop, not three separate spreadsheets.",
        },
        {
          title: "Zero-Trust Reference Architecture",
          body: "ZTNA, SWG, CASB, EDR/XDR — chosen against your actual access patterns and threat model. Not a slide labeled 'zero trust' with the same flat network underneath.",
        },
        {
          title: "Board-Level Reporting",
          body: "Metrics that translate to the audit committee and the board — control coverage, incident rate, MTTD, MTTC, exception trend. The story your CISO can defend.",
        },
      ],
      closing:
        "Security becomes a measured operational property — not a defensive document the team hopes never gets tested.",
    },
    why: [
      { icon: "★", title: "One architecture", body: "Edge to workload to data — consistent." },
      { icon: "⚡", title: "Detect fast", body: "MTTD measured · tuned · improving monthly." },
      { icon: "⌘", title: "Identity-centered", body: "Phish-resistant MFA · JIT · least privilege." },
      { icon: "⚑", title: "Evidence-driven", body: "Findings → controls → proof in the same loop." },
    ],
    capabilities: [
      { title: "Identity", items: ["Phish-resistant MFA", "PAM / JIT", "Quarterly reviews"] },
      { title: "Edge / SASE", items: ["ZTNA", "SWG", "CASB"] },
      { title: "Workload", items: ["EDR / XDR", "Hardened images", "Runtime detection"] },
      { title: "Data", items: ["Classification", "DLP", "Tokenization where needed"] },
      { title: "Detection & response", items: ["SIEM/SOAR", "Threat intel", "Tabletop"] },
      { title: "Governance", items: ["Policy as code", "Exception tracking", "Board-level metrics"] },
    ],
    stack: ["Okta", "CrowdStrike", "Wiz", "Zscaler", "Splunk", "Sentinel", "1Password", "HashiCorp Vault"],
    compare: std("Zero-trust reference architecture"),
  },
  cicd_transformation: {
    slug: "cicd_transformation",
    name: "CI/CD Transformation",
    heroImage: "/images/unsplash/photo-1556075798-4825dfaaf498-1600.webp",
    variant: "diagram",
    accent: "yellow",
    headline: { lead: "Pipelines that", emph: "respect", tail: "your engineers." },
    lede: "Platform engineering done right — paved roads, golden paths, and a developer experience where shipping is the default action.",
    accentPills: ["Platform Eng", "GitOps", "Backstage"],
    pills: ["GitHub Actions", "GitLab CI", "Argo CD", "Buildkite"],
    narrative: {
      tagline: "The symphony of CI/CD and platform engineering",
      intro:
        "CI/CD isn't just tooling — it's the choreography of how your engineering org actually ships. We replace bespoke per-team pipelines with a paved road: golden paths, reusable workflows, and a developer experience where shipping is the default action rather than a friction-filled exception.",
      sectionTitle: "What we deliver",
      sectionLede:
        "Six properties that separate a CI/CD transformation from a yak-shave — bundled by default, measured against DORA, and tuned to the constraint that's actually slowing you down.",
      pillars: [
        {
          title: "Paved Road, Not a Maze",
          body: "Golden paths, reusable workflow templates, and documentation that's actually used. New services adopt the standard because it's the lowest-friction option — not because of a mandate.",
        },
        {
          title: "Fast Feedback by Default",
          body: "Most pipelines under 10 minutes, on purpose. Caching, parallelization, hermetic builds, and flake detection — so engineers learn whether their change is good while it's still in their head.",
        },
        {
          title: "Same Shape Everywhere",
          body: "One pipeline language across stacks. A frontend engineer can read a backend pipeline, a backend engineer can read a data pipeline. Onboarding compresses from weeks to days.",
        },
        {
          title: "Continuous Integration & Deployment",
          body: "Code flows like a river — seamlessly integrating and deploying with Swiss-watch precision. Software in a state of perpetual evolution: always current, always resilient.",
        },
        {
          title: "GitOps Deployment",
          body: "Argo CD or Flux for delivery, progressive rollouts, automated rollback in seconds. The runbook for 'something broke in prod' is one command, not a war room.",
        },
        {
          title: "Measured by DORA",
          body: "Cycle time, deployment frequency, change failure rate, MTTR — instrumented and visible. We don't claim improvement; the dashboard does.",
        },
      ],
      closing:
        "A platform that respects your engineers — and a delivery system the business can plan against.",
    },
    why: [
      { icon: "★", title: "Paved road, not a maze", body: "Golden paths · templates · docs." },
      { icon: "⚡", title: "Fast feedback", body: "Most pipelines under 10 minutes, on purpose." },
      { icon: "⌘", title: "Same shape everywhere", body: "One pipeline language, many stacks." },
      { icon: "⚑", title: "Measured", body: "DORA · cycle time · change-failure rate." },
    ],
    capabilities: [
      { title: "Build", items: ["Reusable workflows", "Caching", "Hermetic builds"] },
      { title: "Test", items: ["Parallelization", "Flake detection", "Coverage gates"] },
      { title: "Deploy", items: ["GitOps", "Progressive delivery", "Rollback in seconds"] },
      { title: "Platform", items: ["Backstage", "Service catalog", "Templates"] },
      { title: "Observability", items: ["Pipeline metrics", "DORA dashboards", "SLOs"] },
      { title: "Governance", items: ["Policy as code", "Approvals", "Audit trail"] },
    ],
    stack: ["GitHub Actions", "GitLab CI", "Argo CD", "Buildkite", "Backstage", "Renovate", "Trivy", "Cosign"],
    compare: std("DORA metrics live + tuned"),
  },
  hybrid_cloud: {
    slug: "hybrid_cloud",
    name: "Hybrid Cloud",
    heroImage: "/images/unsplash/photo-1573164713714-d95e436ab8d6-1600.webp",
    variant: "split",
    accent: "cyan",
    headline: { lead: "On-prem and cloud,", emph: "one fabric.", tail: "" },
    lede: "Workload portability, identity continuity, and a single operating model across data centers, edge sites, and public clouds.",
    accentPills: ["Anthos", "Arc", "Outposts"],
    pills: ["Terraform", "Crossplane", "VMware", "OpenStack"],
    narrative: {
      tagline: "Where efficiency meets peace of mind",
      intro:
        "We offer comprehensive managed solutions across all three leading public clouds — Azure, AWS, and GCP — and the on-prem estates beside them. Our hybrid practice ensures your cloud environments operate at peak performance with one operating model, allowing you to focus on core business objectives instead of day-to-day infrastructure management.",
      sectionTitle: "What we manage",
      sectionLede:
        "Six pillars that turn a sprawling hybrid estate into a managed platform — one control plane, one identity fabric, one set of pipelines that work everywhere.",
      pillars: [
        {
          title: "Infrastructure Management",
          body: "Provisioning and managing virtual machines, storage, and networking across cloud and on-prem. Monitoring and optimizing resource utilization for performance and cost efficiency, with scalability and redundancy built in.",
        },
        {
          title: "Application Management",
          body: "Deploying and managing applications on cloud platforms — containerized and serverless architectures, continuous performance tuning, and automated deployment pipelines that streamline development across environments.",
        },
        {
          title: "Security & Compliance Management",
          body: "Robust security controls protect data and applications across the hybrid estate. Regular assessments and audits identify and mitigate risks, with continuous compliance against GDPR, HIPAA, PCI DSS, and more.",
        },
        {
          title: "Cost Optimization",
          body: "Right-sizing, reserved capacity, idle resource cleanup, and showback by team — wired into the same loop that ships workloads. The bill becomes explained, not investigated.",
        },
        {
          title: "24/7 Monitoring & Support",
          body: "Proactive monitoring detects and resolves issues before they impact your business. 24/7 expert support ensures rapid response to incidents, with regular performance and security reports keeping you informed of estate health.",
        },
        {
          title: "Single Operating Model",
          body: "Same policies, same pipelines, same telemetry across data centers, edge sites, and public clouds. Anthos, Arc, Outposts — chosen and configured so workloads move based on cost and gravity, not where they happened to default.",
        },
      ],
      closing:
        "Reap the benefits of hybrid cloud without the hassle of day-to-day management — one fabric, one model, one accountable team.",
    },
    why: [
      { icon: "★", title: "One operating model", body: "Same policies, same pipelines, anywhere." },
      { icon: "⚡", title: "Portable workloads", body: "Container-first · platform-agnostic." },
      { icon: "⌘", title: "Identity continuity", body: "One IdP, federated everywhere." },
      { icon: "⚑", title: "Cost-aware placement", body: "Workloads where they belong — not where they default." },
    ],
    capabilities: [
      { title: "Fabric", items: ["Network design", "Identity federation", "Service discovery"] },
      { title: "Compute", items: ["K8s everywhere", "VM workloads", "Edge nodes"] },
      { title: "Data", items: ["Replication", "Gravity-aware placement", "Sovereignty"] },
      { title: "Platform", items: ["Anthos / Arc / Outposts", "Crossplane control plane", "GitOps"] },
      { title: "Security", items: ["Unified IAM", "Policy as code", "Audit trail"] },
      { title: "Operations", items: ["Single pane", "Unified alerts", "Cost showback"] },
    ],
    stack: ["Anthos", "Azure Arc", "AWS Outposts", "Crossplane", "Terraform", "VMware", "Istio", "Prometheus"],
    compare: std("One control plane across estates"),
  },
};
