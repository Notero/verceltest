import type { ServiceContent } from "@/components/public/templates/servicePage";
//PRICING OPTIONS SHOULD BE CHANGED
const tiers = (deliverables: string, services: string): ServiceContent["tiers"] => [
  {
    name: "Sprint",
    price: "~$45k · 4 wks",
    tagline: "just unblock us",
    items: [
      `1 ${deliverables.toLowerCase()}, 1 environment`,
      "Audit + recommendations",
      "2 enablement sessions",
      "No on-call",
    ],
  },
  {
    name: "Program",
    price: "12 wks · fixed bid",
    tagline: "the full build",
    items: [
      "Everything in Sprint",
      `Full ${services} delivery`,
      "5 components migrated",
      "30-day post-launch warranty",
    ],
    featured: true,
  },
  {
    name: "Embedded",
    price: "monthly retainer",
    tagline: "we stay on the pager",
    items: [
      "Everything in Program",
      "Senior engineer embedded",
      "24/7 on-call rotation",
      "Quarterly architecture review",
    ],
  },
];

export const SERVICES: Record<string, ServiceContent> = {
  cloud_transformation: {
    slug: "cloud_transformation",
    name: "Cloud Transformation",
    heroImage: "/images/unsplash/photo-1544197150-b99a580bb7a8-1600.webp",
    variant: "overlay",
    accent: "cyan",
    pills: ["AWS · Azure · GCP", "Landing zones", "FinOps", "Governance"],
    headline: { lead: "Move to cloud.", emph: "Stay there.", tail: "Ship faster." },
    lede: "Strategy, migration, and operations as one motion — landing zones, governance, and FinOps wired in from day one.",
    narrative: {
      tagline: "Elevating business through strategic cloud transformation",
      intro:
        "In today's rapidly evolving digital landscape, embracing cloud technology is no longer a luxury — it's a necessity for sustainable growth and competitive advantage. We deliver a comprehensive Cloud Transformation service that goes beyond mere migration, positioning your organization at the forefront of digital innovation.",
      sectionTitle: "Why Intrastack is your ideal partner",
      sectionLede:
        "Our Cloud Transformation service is an orchestrated journey that harmonizes cutting-edge technology with your unique business objectives. We don't just transfer your systems to the cloud — we architect a robust, scalable, and secure digital ecosystem.",
      pillars: [
        {
          title: "Strategic Mastery",
          body: "Seasoned consultants meticulously analyze your business landscape, crafting bespoke cloud strategies aligned with your long-term vision. Our approach transcends technology — it's about creating a digital foundation that catalyzes growth.",
        },
        {
          title: "Unparalleled Expertise",
          body: "Certified cloud architects with extensive knowledge across leading platforms. Multifaceted expertise ensures your transformation isn't just implemented, but optimized for peak performance and future scalability.",
        },
        {
          title: "Precision-Engineered Solutions",
          body: "Each business has its unique digital fingerprint. Our solutions are tailored to your specific industry demands, regulatory requirements, and growth trajectories — no one-size-fits-all.",
        },
        {
          title: "Fortified Security & Compliance",
          body: "Security at the epicenter of our strategy. Solutions incorporate state-of-the-art protocols and adhere to the most stringent standards including PCI-DSS and FedRAMP.",
        },
        {
          title: "Continuous Innovation",
          body: "The cloud landscape is ever-evolving, and so is our expertise. We stay ahead of technological curves to ensure your infrastructure is not just current, but future-ready.",
        },
        {
          title: "Redefine Your Digital Horizon",
          body: "We don't just facilitate cloud transformation — we orchestrate digital revolutions. A gateway to unprecedented operational efficiency, scalability, and innovation.",
        },
      ],
      closing:
        "The digital future is here, and it's in the cloud. Let us guide you through a transformation that doesn't just meet your current needs but anticipates the demands of tomorrow.",
    },
    deliverables: [
      { letter: "A", title: "Cloud strategy", body: "Target operating model · workload taxonomy · cost envelope." },
      { letter: "B", title: "Landing zones", body: "Multi-account topology · IAM baseline · network and connectivity." },
      { letter: "C", title: "Migration factory", body: "Wave plan · runbooks · cutover playbook for each workload class." },
      { letter: "D", title: "FinOps + governance", body: "Tagging · budgets · guardrails · showback by team and product." },
    ],
    //can change the process banner
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Estate inventory · TCO baseline · stakeholder map." },
      { weeks: "Wk 3–4", title: "Design", body: "Target architecture · governance · decision log." },
      { weeks: "Wk 5–8", title: "Build", body: "Landing zones · pipelines · first wave migrated." },
      { weeks: "Wk 9–10", title: "Roll out", body: "Subsequent waves · cost and reliability tuning." },
      { weeks: "Wk 11–12", title: "Hand over", body: "Training · runbooks · 30-day warranty." },
    ],
    tiers: tiers("workload", "transformation"),
  },
  devops_automation: {
    slug: "devops_automation",
    name: "DevOps & Automation",
    heroImage: "/images/unsplash/photo-1555066931-4365d14bab8c-1600.webp",
    variant: "split",
    accent: "mixed",
    pills: ["GitOps", "Terraform", "Observability", "12-week ship"],
    headline: { lead: "Ship faster. Page", emph: "less.", tail: "Sleep more." },
    lede: "DevOps Automation as a delivered outcome — pipelines, infra-as-code, and observability installed and handed over to your team in 12 weeks.",
    narrative: {
      tagline: "Orchestrating excellence: the symphony of DevOps & automation",
      intro:
        "DevOps and Automation are the virtuosos of efficiency, conducting an intricate harmony between development and operations. We don't merely implement tools — we choreograph a transformative shift in your delivery process, where every commit, every deployment, and every rollback follows a rehearsed, reproducible pattern.",
      sectionTitle: "The quintessence of our artistry",
      sectionLede:
        "As the heartbeat of business synchronizes with the rhythm of technological advancement, DevOps and Automation transcend mere methodology — they become the lifeblood of progress, erasing the chasm between development and operations.",
      pillars: [
        {
          title: "Continuous Integration & Deployment",
          body: "Code flows like a river, seamlessly integrating and deploying with Swiss-watch precision. Our CI/CD philosophy catapults your software into a state of perpetual evolution — always current, always resilient.",
        },
        {
          title: "Infrastructure as Code",
          body: "IaC transforms your infrastructure into a dynamic, reproducible entity — scalable and as malleable as imagination. Version control becomes a time machine for your environments.",
        },
        {
          title: "Automated Testing",
          body: "Our automated testing suite stands as a vigilant guardian. From unit tests to end-to-end evaluations, our framework weaves a safety net that catches imperfections before they manifest.",
        },
        {
          title: "Collaborative Alchemy",
          body: "We dissolve antiquated silos with the gentle but powerful solvent of collaboration. Communication flows freely, transparency reigns, and shared responsibility becomes the cornerstone of success.",
        },
        {
          title: "Monitoring & Incident Response",
          body: "Monitoring solutions act as omniscient sentinels, providing real-time insight into your applications' pulse. When anomalies surface, automated response mechanisms swiftly restore equilibrium.",
        },
        {
          title: "12-Week Hand-Over",
          body: "Pipelines, modules, dashboards, alerts — installed, documented, and handed over with 30-day warranty. Your team owns it on day 91.",
        },
      ],
      closing:
        "Step into tomorrow with us, and let's compose the future of technology together — one elegant line of code at a time.",
    },
    deliverables: [
      { letter: "A", title: "CI/CD pipelines", body: "Standardized GitHub Actions / GitLab CI / Jenkins · reusable templates per stack." },
      { letter: "B", title: "Infrastructure-as-code", body: "Terraform modules · environments split · drift detection wired into PRs." },
      { letter: "C", title: "Observability stack", body: "Metrics, logs, traces · alert rules · dashboards your on-call actually opens." },
      { letter: "D", title: "Runbook & training", body: "Written docs + 2 enablement sessions · your team owns it on day 91." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Audit current pipelines, infra, observability, on-call." },
      { weeks: "Wk 3–4", title: "Design", body: "Target state · proposed stack · decision log." },
      { weeks: "Wk 5–8", title: "Build", body: "Pipelines, modules, dashboards, alerts." },
      { weeks: "Wk 9–10", title: "Roll out", body: "Migrate first 3 services · measure delta." },
      { weeks: "Wk 11–12", title: "Hand over", body: "Training · runbook · 30-day warranty." },
    ],
    tiers: tiers("pipeline", "DevOps stack"),
  },
  ai_engineering: {
    slug: "ai_engineering",
    name: "AI & Machine Learning",
    heroImage: "/images/unsplash/photo-1677442136019-21780ecad995-1600.webp",
    variant: "clean",
    accent: "yellow",
    pills: ["LLM ops", "RAG", "Evals", "Production-grade"],
    headline: { lead: "AI in production —", emph: "not demos.", tail: "" },
    lede: "Model design, training pipelines, evaluation, and inference at scale. We ship AI features that survive contact with real users and real cost ceilings.",
    narrative: {
      tagline: "Artificial Intelligence (AI) and Machine Learning (ML)",
      intro:
        "We excel in delivering state-of-the-art AI and ML services that drive businesses toward remarkable growth and innovation. With a proven track record and a commitment to advancing technological boundaries, we are your premier partner in navigating the complexities of modern AI.",
      sectionTitle: "Expertise tailored to your needs",
      sectionLede:
        "Every business is unique, which is why we customize our services to meet your specific needs and goals — from feasibility through production rollout.",
      pillars: [
        {
          title: "Predictive Analytics & ML",
          body: "Whether you need predictive analytics, natural language processing, computer vision, or any other AI/ML solution, our seasoned team brings the skills and experience to make it production-real.",
        },
        {
          title: "Proven Track Record",
          body: "AI features shipped against real users and real cost ceilings — not lab demos. Outcomes measured, not promised.",
        },
        {
          title: "Certified in Google, AWS, and Azure AI",
          body: "Deep credentials across the major cloud AI platforms. We pick the right stack for your latency, cost, and compliance envelope — not the one we happen to know.",
        },
        {
          title: "Eval-Driven Development",
          body: "Offline evals, online metrics, prompt and policy regression suites. We catch quality drift before your users do.",
        },
        {
          title: "Cost-Aware Inference",
          body: "Caching, batching, model routing, and quota guardrails. We treat token spend as a first-class engineering constraint.",
        },
        {
          title: "Empowering Your Business for the Future",
          body: "Beyond delivery — playbooks, on-call rotation, and an ongoing eval cadence so your AI investment compounds instead of decays.",
        },
      ],
      closing:
        "Unlock the power of AI with a partner who treats it as a production system, not a science project.",
    },
    deliverables: [
      { letter: "A", title: "Use-case shaping", body: "Problem framing · success metrics · build-or-buy call per component." },
      { letter: "B", title: "Data + training pipeline", body: "Feature store · training infra · reproducible runs · eval harness." },
      { letter: "C", title: "Inference stack", body: "Serving · caching · cost guardrails · A/B and shadow rollouts." },
      { letter: "D", title: "Eval + safety", body: "Offline evals · online metrics · prompt and policy regression suite." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Use cases · data audit · feasibility." },
      { weeks: "Wk 3–4", title: "Design", body: "Architecture · model choices · eval criteria." },
      { weeks: "Wk 5–8", title: "Build", body: "Training, serving, evals end to end." },
      { weeks: "Wk 9–10", title: "Roll out", body: "Shadow → canary → prod, with cost & quality gates." },
      { weeks: "Wk 11–12", title: "Hand over", body: "Playbook · on-call · ongoing eval cadence." },
    ],
    tiers: tiers("use case", "AI stack"),
  },
  cybersecurity: {
    slug: "cybersecurity",
    name: "Cybersecurity",
    heroImage: "/images/unsplash/photo-1550751827-4bd374c3f58b-1600.webp",
    variant: "overlay",
    accent: "cyan",
    pills: ["SOC", "FedRAMP", "Zero Trust", "Audit-ready"],
    headline: { lead: "Defense in depth.", emph: "Audit-ready.", tail: "" },
    lede: "Identity, workloads, and data — hardened end to end. Compliance evidence falls out of the pipeline, not out of a binder.",
    narrative: {
      tagline: "Security & Compliance",
      intro:
        "Where protection meets peace of mind, and your data stays secure. We specialize in designing and implementing robust security measures to safeguard your business against cyber threats and ensure compliance with industry standards and regulations.",
      sectionTitle: "Hardened end-to-end",
      sectionLede:
        "From cloud security architecture through compliance evidence and incident response — controls are codified, monitored, and proven continuously.",
      pillars: [
        {
          title: "Cloud Security Design",
          body: "Comprehensive security architectures tailored to your organization's unique needs and risk profile. From network security to endpoint protection, we design robust defenses that mitigate risks and protect your assets from evolving cyber threats.",
        },
        {
          title: "Compliance & Standards",
          body: "Navigating regulatory compliance can be challenging. Our experts stay current with regulations and standards relevant to your industry — FedRAMP, PCI DSS, SOC, HIPAA, GDPR, and protection of Personally Identifiable Information (PII). We help you achieve and maintain compliance, minimizing legal and reputational risks.",
        },
        {
          title: "Implementation",
          body: "Effective security requires action, not just planning. We translate security designs into tangible solutions — configuring firewalls, deploying intrusion detection, implementing encryption protocols — ensuring measures are deployed effectively and efficiently.",
        },
        {
          title: "Threat Modeling",
          body: "Asset inventory, trust boundaries, prioritized risk register. We start by knowing what we're defending and from whom — controls follow from that, not the other way around.",
        },
        {
          title: "Detection & Response",
          body: "SIEM and SOAR wired up, alert rules tuned to your environment, runbooks rehearsed via tabletop. When something goes wrong, the response is already written.",
        },
        {
          title: "Continuous Evidence",
          body: "Compliance evidence falls out of the pipeline rather than out of a binder at audit time. Control mapping, automated proofs, and an evidence dashboard your auditors will actually accept.",
        },
      ],
      closing:
        "Identity, workloads, data — hardened end to end. Your defenses move from reactive scrambling to a quiet, well-instrumented routine.",
    },
    deliverables: [
      { letter: "A", title: "Threat model", body: "Asset inventory · trust boundaries · prioritized risk register." },
      { letter: "B", title: "Hardened baseline", body: "Identity · network · workload · supply-chain controls codified." },
      { letter: "C", title: "Detection + response", body: "SIEM/SOAR wired · runbooks · tabletop exercise." },
      { letter: "D", title: "Compliance evidence", body: "SOC / HIPAA / FedRAMP / PCI DSS control mapping & continuous proof." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Posture audit · gap analysis vs. target framework." },
      { weeks: "Wk 3–4", title: "Design", body: "Control set · ownership · evidence pipeline." },
      { weeks: "Wk 5–8", title: "Build", body: "Controls implemented in code · monitors live." },
      { weeks: "Wk 9–10", title: "Roll out", body: "Tabletop · remediation sprint · stakeholder sign-off." },
      { weeks: "Wk 11–12", title: "Hand over", body: "Runbooks · evidence dashboard · 30-day warranty." },
    ],
    tiers: tiers("control set", "security program"),
  },
  software_development: {
    slug: "software_development",
    name: "Software Development",
    heroImage: "/images/unsplash/photo-1517694712202-14dd9538aa97-1600.webp",
    variant: "split",
    accent: "yellow",
    pills: ["Greenfield", "Modernization", "Senior-only", "Owned end-to-end"],
    headline: { lead: "Custom platforms,", emph: "built to scale.", tail: "" },
    lede: "Greenfield builds, legacy modernization, and the connective tissue in between. Senior engineers, opinionated defaults, real ownership.",
    narrative: {
      tagline: "Where innovation meets functionality",
      intro:
        "We specialize in crafting cutting-edge software tailored to meet your unique needs — whether it's for web, mobile, or custom applications. From the discovery spike to the day-91 hand-over, the same senior engineers stay with you end to end.",
      sectionTitle: "What we build",
      sectionLede:
        "Three delivery shapes covering the bulk of what business software actually needs to be — chosen up front, with one team and one shared backlog through to launch.",
      pillars: [
        {
          title: "Web Development",
          body: "Your website is often the first impression customers have of your business. We combine design with robust functionality to create sites that look great and drive results — brochure, e-commerce, or complex web application.",
        },
        {
          title: "Custom Application Development",
          body: "Transform ideas into powerful software solutions. Streamline internal processes, enhance customer experiences, or create new revenue streams — scalable, secure, feature-rich applications built with current technology and best practices.",
        },
        {
          title: "Mobile App Development",
          body: "In a mobile-first world, presence on smartphones and tablets is essential. Intuitive, high-performance applications for iOS and Android — from concept to launch — that keep users engaged and coming back.",
        },
        {
          title: "Architecture & Domain Model",
          body: "Service boundaries, data flow, and integration map drawn before code is written. We optimize for the team that will own this in two years, not the demo next week.",
        },
        {
          title: "Production-Ready Default",
          body: "CI/CD, tests, observability, and security baseline are part of the build — not a phase-two retrofit. The first release is the production release.",
        },
        {
          title: "Senior-Only Delivery",
          body: "No juniors learning on your dollar, no agency layering. The people writing your code are the same people you scoped with.",
        },
      ],
      closing:
        "Your ideas come to life — and they keep working long after we leave.",
    },
    deliverables: [
      { letter: "A", title: "Product discovery", body: "Outcomes · user journeys · MVP scope · technical spike." },
      { letter: "B", title: "Architecture", body: "Domain model · service boundaries · data + integration map." },
      { letter: "C", title: "Production build", body: "Code · tests · CI/CD · observability · security baseline." },
      { letter: "D", title: "Hand-over", body: "Docs · runbooks · enablement · 30-day warranty." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Users, constraints, success metrics." },
      { weeks: "Wk 3–4", title: "Design", body: "Architecture, UX, sequencing." },
      { weeks: "Wk 5–8", title: "Build", body: "Iterative releases against real users." },
      { weeks: "Wk 9–10", title: "Harden", body: "Performance · security · operational readiness." },
      { weeks: "Wk 11–12", title: "Launch", body: "Cutover · training · warranty starts." },
    ],
    tiers: tiers("module", "software build"),
  },
  mobile_development: {
    slug: "mobile_development",
    name: "Mobile Development",
    heroImage: "/images/unsplash/photo-1512941937669-90a1b58e7e9c-1600.webp",
    variant: "clean",
    accent: "cyan",
    pills: ["iOS", "Android", "React Native", "Flutter"],
    headline: { lead: "Apps users", emph: "actually open.", tail: "" },
    lede: "Native and cross-platform mobile apps designed, built, and shipped end-to-end — with CI, store releases, and crash-free baselines baked in.",
    narrative: {
      tagline: "Apps for a mobile-first world",
      intro:
        "In today's mobile-first world, having a presence on smartphones and tablets is essential for reaching your audience anytime, anywhere. We specialize in creating intuitive, high-performance applications for iOS and Android — from concept to launch — ensuring your app aligns with your vision and delivers a seamless user experience that keeps users engaged.",
      sectionTitle: "End-to-end mobile delivery",
      sectionLede:
        "Concept, design, build, store release, and the post-launch instrumentation that turns a launch into a product — under one team.",
      pillars: [
        {
          title: "Product & UX",
          body: "Audience research, jobs-to-be-done framing, flows, and clickable prototypes. We get the experience right before a single screen ships to a real device.",
        },
        {
          title: "Native or Cross-Platform",
          body: "iOS, Android, React Native, or Flutter — chosen against your team, device matrix, and performance budget. Not against our preference.",
        },
        {
          title: "Release Pipeline",
          body: "TestFlight, Play internal track, feature flags, phased rollouts. Releases are routine, not heroic.",
        },
        {
          title: "Accessibility & Offline-First",
          body: "VoiceOver, TalkBack, dynamic type, offline state and sync built in from the first sprint — not patched on after store review.",
        },
        {
          title: "Crash-Free Baseline",
          body: "Crashlytics, performance traces, ANR monitoring, and analytics wired up before launch. We measure the experience users actually have.",
        },
        {
          title: "Post-Launch Care",
          body: "A/B framework, monthly review cadence, and a backlog driven by the metrics — not by what was loudest in the last meeting.",
        },
      ],
      closing:
        "Apps users actually open — and keep opening, release after release.",
    },
    deliverables: [
      { letter: "A", title: "Product + UX", body: "Flows · prototypes · store positioning." },
      { letter: "B", title: "App build", body: "iOS + Android · accessibility · offline-first patterns." },
      { letter: "C", title: "Release pipeline", body: "TestFlight · Play internal · feature flags · phased rollout." },
      { letter: "D", title: "Post-launch", body: "Crashlytics · analytics · A/B framework · monthly review." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Audience · jobs-to-be-done · device matrix." },
      { weeks: "Wk 3–4", title: "Design", body: "UX · architecture · platform choice." },
      { weeks: "Wk 5–8", title: "Build", body: "Iterative beta releases on TestFlight + internal track." },
      { weeks: "Wk 9–10", title: "Polish", body: "Store assets · review prep · perf budget." },
      { weeks: "Wk 11–12", title: "Launch", body: "Store release · feature-flag rollout · warranty." },
    ],
    tiers: tiers("feature", "mobile build"),
  },
  it_services: {
    slug: "it_services",
    name: "Hardware & Software",
    heroImage: "/images/unsplash/photo-1558494949-ef010cbdcc31-1600.webp",
    variant: "split",
    accent: "mixed",
    pills: ["Procurement", "MDM", "Helpdesk", "Lifecycle"],
    headline: { lead: "Hardware, software,", emph: "lifecycle.", tail: "" },
    lede: "Procurement, integration, and lifecycle management for the IT estate behind your product. One throat to choke — across vendors, sites, and stacks.",
    narrative: {
      tagline: "Elevate your business with comprehensive distribution",
      intro:
        "We take immense pride in our comprehensive hardware and software distribution services, meticulously tailored to the diverse needs of modern businesses. With an unwavering focus on quality, reliability, and customer satisfaction, we collaborate with leading manufacturers and vendors to deliver solutions that drive efficiency and innovation.",
      sectionTitle: "Why choose us",
      sectionLede:
        "One partner across procurement, integration, and lifecycle — so your IT estate stops being a scattered set of contracts and becomes a managed asset.",
      pillars: [
        {
          title: "Expansive Product Portfolio",
          body: "Servers, storage systems, networking equipment, productivity software, cybersecurity tools, and much more. Whatever your business needs, we have the products and partner contracts to support it.",
        },
        {
          title: "Trusted Partnerships",
          body: "Direct relationships with leading manufacturers and vendors mean better pricing, faster availability, and access to roadmaps before they're public.",
        },
        {
          title: "Competitive Pricing",
          body: "Aggregated volume across our portfolio of clients translates into negotiated rates that are difficult to match buying alone.",
        },
        {
          title: "Customized Solutions",
          body: "We don't sell catalogs — we shape configurations against your actual workload, compliance envelope, and growth plan.",
        },
        {
          title: "Scalability",
          body: "From a single site to a global rollout, the same intake, deployment, and lifecycle process scales with you.",
        },
        {
          title: "Technical Expertise & Reliable Support",
          body: "Engineers — not just sales — sit between you and the vendors. Helpdesk, MDM, endpoint, and renewal calendar handled end-to-end.",
        },
        {
          title: "Focus on Innovation",
          body: "We track what's coming, not just what's shipping. Refresh cycles are planned against what your business will need, not what's already obsolete.",
        },
        {
          title: "End-to-End Service",
          body: "Procurement → integration → MDM → helpdesk → refresh → disposal. One throat to choke across the entire IT lifecycle.",
        },
      ],
      closing:
        "Your trusted partner for the IT estate behind your product. Contact us today to discuss how we can support your success.",
    },
    deliverables: [
      { letter: "A", title: "Estate inventory", body: "Assets · licenses · contracts · renewal calendar." },
      { letter: "B", title: "Procurement", body: "Vendor consolidation · negotiated rates · SOW templates." },
      { letter: "C", title: "Integration", body: "Identity · MDM · endpoint · network · helpdesk." },
      { letter: "D", title: "Lifecycle", body: "Refresh plan · disposal · compliance evidence." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "Full estate scan · cost & risk baseline." },
      { weeks: "Wk 3–4", title: "Design", body: "Target operating model · vendor strategy." },
      { weeks: "Wk 5–8", title: "Build", body: "Consolidation · integrations · MDM rollout." },
      { weeks: "Wk 9–10", title: "Stabilize", body: "Helpdesk SLAs · monitoring · backlog burn-down." },
      { weeks: "Wk 11–12", title: "Hand over", body: "Runbooks · evidence · ongoing review cadence." },
    ],
    tiers: tiers("site", "IT operation"),
  },
  staff_augmentation: {
    slug: "staff_augmentation",
    name: "Staffing Services",
    heroImage: "/images/unsplash/photo-1522071820081-009f0129c71c-1600.webp",
    variant: "overlay",
    accent: "yellow",
    pills: ["Senior engineers", "Embedded", "Paid trial week", "No bench"],
    headline: { lead: "Senior engineers", emph: "in your repo.", tail: "" },
    lede: "Embed vetted senior engineers and consultants into your team. They ship inside your process — no parallel agency timeline, no handoff theater.",
    narrative: {
      tagline: "Top-tier talent for data center and cloud projects",
      intro:
        "We connect you with top-tier talent for your data center and cloud transformation projects, ensuring your IT initiatives don't just succeed — they excel. Our staffing covers Cloud Architects, IT Consultants, Engineers, DevOps Specialists, Site Reliability Engineers, and Project Managers.",
      sectionTitle: "The Intrastack advantage",
      sectionLede:
        "Vetted senior engineers who ship inside your process — not a parallel agency timeline, not a deck of resumes, not a handoff in week ten.",
      pillars: [
        {
          title: "Expert Talent Acquisition",
          body: "Seasoned recruiters leverage industry knowledge and extensive networks to efficiently identify top talent — not the resumes still circulating from last quarter's contracts.",
        },
        {
          title: "Thorough Screening",
          body: "Candidates assessed for technical proficiency, experience, and cultural fit. The shortlist is two or three people, not twenty — and every one of them is hireable.",
        },
        {
          title: "Tailored Solutions",
          body: "We align our approach with your specific requirements, timelines, and budget. Single specialist, embedded squad, or fractional senior — the shape fits the need.",
        },
        {
          title: "Proven Success",
          body: "Track record across industries, consistently delivering exceptional results. References available — including from clients who renewed.",
        },
        {
          title: "Cutting-Edge Expertise",
          body: "We stay current with the latest IT trends and provide access to the most up-to-date skill sets — including the niche stacks your in-house recruiter can't filter for.",
        },
        {
          title: "Industry Insight",
          body: "Deep understanding of the IT landscape lets us anticipate and meet your needs effectively. We've shipped in adjacent territory.",
        },
        {
          title: "Quality-Driven & Efficient",
          body: "Rigorous vetting ensures you only interview top-tier professionals. Time-to-hire is reduced without compromising on quality.",
        },
        {
          title: "Scalable",
          body: "From individual specialists to entire teams — we scale services to your requirements without forcing you onto a fixed bench you're paying to idle.",
        },
      ],
      closing:
        "In a technology-driven world, the right IT talent is crucial. Partner with us to access exceptional professionals who can turn your IT vision into reality.",
    },
    deliverables: [
      { letter: "A", title: "Role shaping", body: "Target profile · scorecard · ramp plan." },
      { letter: "B", title: "Bench match", body: "2–3 finalists · paid trial week · go/no-go." },
      { letter: "C", title: "Embedded delivery", body: "Pairs in your standups, your CI, your on-call." },
      { letter: "D", title: "Knowledge transfer", body: "Docs · pairing · explicit handoff plan from day one." },
    ],
    process: [
      { weeks: "Wk 1", title: "Scope", body: "Role · team context · success metrics." },
      { weeks: "Wk 2", title: "Match", body: "Shortlist · interviews · trial." },
      { weeks: "Wk 3", title: "Onboard", body: "Access · context · first PR in week one." },
      { weeks: "Mo 2+", title: "Deliver", body: "Embedded sprints · weekly review with us." },
      { weeks: "Exit", title: "Hand over", body: "Knowledge transfer plan executed before rolloff." },
    ],
    processHeading: { lead: "How the", emph: "engagement", tail: "goes." },
    tiers: tiers("role", "team"),
  },
  cloud_migration: {
    slug: "cloud_migration",
    name: "Cloud Migration",
    heroImage: "/images/unsplash/photo-1451187580459-43490279c0fa-1600.webp",
    variant: "clean",
    accent: "cyan",
    pills: ["6 Rs", "Wave plan", "Multi-cloud", "No big-bang cutover"],
    headline: { lead: "Migrate without", emph: "drama.", tail: "" },
    lede: "Plan, execute, and de-risk migrations across AWS, Azure, and GCP. No big-bang cutovers, no surprise bills — wave by wave, measured against business outcomes.",
    narrative: {
      tagline: "Where innovation meets scalability",
      intro:
        "We help organizations seamlessly transition their workloads to the cloud — Azure, AWS, or GCP. With our expertise and experience, we make cloud migration smooth, efficient, and cost-effective. No big-bang cutovers, no surprise bills — just wave by wave delivery measured against business outcomes.",
      sectionTitle: "How we migrate",
      sectionLede:
        "Every organization has unique requirements and constraints. We tailor the strategy, then ship it — application by application, environment by environment.",
      pillars: [
        {
          title: "Custom Migration Strategy",
          body: "Our experts work closely with you to develop a migration strategy aligned with your business goals, technical requirements, and budget. From a single application to your entire infrastructure, we design a roadmap that minimizes disruption and maximizes success.",
        },
        {
          title: "Azure Migration",
          body: "As a Microsoft partner, we specialize in Azure migration solutions that leverage Microsoft's cloud platform to drive innovation and growth. Virtual machines, databases, applications — lift-and-shift through re-architecting.",
        },
        {
          title: "AWS Migration",
          body: "AWS is a leading cloud platform known for scalability, reliability, and flexibility. Our AWS migrations help you accelerate innovation and drive digital transformation — data, applications, or entire data centers.",
        },
        {
          title: "GCP Migration",
          body: "Google Cloud Platform offers services and tools to help organizations modernize and innovate faster. Whether migrating to GCP for the first time or optimizing existing deployments, we have the expertise.",
        },
        {
          title: "6 Rs Disposition",
          body: "Rehost, replatform, refactor, repurchase, retire, retain — each workload gets the disposition that minimizes cost and risk against your timeline.",
        },
        {
          title: "Cutover & Verify",
          body: "Pre/post checks, rollback rehearsal, user sign-off. Every cutover is dry-run before it's a Friday-night incident.",
        },
      ],
      closing:
        "Wave by wave, workload by workload — measured against the outcomes your business actually cares about.",
    },
    deliverables: [
      { letter: "A", title: "Discovery + 6Rs", body: "Workload inventory · disposition · wave plan." },
      { letter: "B", title: "Migration factory", body: "Tooling · runbooks · automated cutover patterns." },
      { letter: "C", title: "Cutover + verify", body: "Pre/post checks · rollback rehearsal · user sign-off." },
      { letter: "D", title: "Optimize", body: "Right-size · reserve · idle-kill · monthly cost review." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Discover", body: "App inventory · dependencies · TCO model." },
      { weeks: "Wk 3–4", title: "Design", body: "Wave plan · landing zones · cutover patterns." },
      { weeks: "Wk 5–8", title: "Build", body: "Factory · first 5 workloads migrated and verified." },
      { weeks: "Wk 9–10", title: "Roll out", body: "Remaining waves · decommission source." },
      { weeks: "Wk 11–12", title: "Optimize", body: "Cost · reliability · hand-over." },
    ],
    tiers: tiers("wave", "migration"),
  },
  it_consulting: {
    slug: "it_consulting",
    name: "Cloud Strategy & Design",
    heroImage: "/images/unsplash/photo-1542744173-8e7e53415bb0-1600.webp",
    variant: "split",
    accent: "yellow",
    pills: ["Strategy", "Roadmap", "Vendor selection", "Steerco"],
    headline: { lead: "Strategy that ships —", emph: "not slides.", tail: "" },
    lede: "Senior advisors who've done the work. Tech and business strategy paired with a credible delivery plan, so the deck has a Monday-morning step.",
    narrative: {
      tagline: "The blueprint for your digital transformation",
      intro:
        "In the rapidly evolving digital landscape, the cloud isn't just a technology — it's the foundation of innovation and growth. We don't just offer Cloud Strategy & Design services; we craft the blueprint for your organization's digital transformation and future success.",
      sectionTitle: "Why choose us for your cloud journey",
      sectionLede:
        "Strategy paired with a credible delivery plan — so the deck has a Monday-morning step, not a six-month restart.",
      pillars: [
        {
          title: "Visionary Strategy",
          body: "We don't just implement cloud — we architect your digital future. Our experts align cloud strategies with your business objectives, turning technology into a powerful catalyst for growth and innovation.",
        },
        {
          title: "Bespoke Solutions",
          body: "Your business is unique, and your cloud solution should be too. We design tailored cloud environments that seamlessly integrate with existing infrastructure while paving the way for future advancements.",
        },
        {
          title: "Multi-Cloud Mastery",
          body: "Deep expertise across AWS, Azure, Google Cloud, and more. We craft multi-cloud strategies that leverage the best of each platform to meet your specific needs.",
        },
        {
          title: "Strategic Alignment",
          body: "Your cloud strategy should be a perfect fit for your business goals. Every aspect of our design aligns with your organization's vision and objectives.",
        },
        {
          title: "Innovative Architecture",
          body: "Our skilled architects translate your goals into robust, scalable cloud architectures that set the stage for your digital transformation.",
        },
        {
          title: "Security at the Core",
          body: "Security and compliance are designed in from the first whiteboard session — not retrofitted after the steering committee finally asks about audit.",
        },
        {
          title: "Clear Implementation Path",
          body: "We provide a detailed roadmap for bringing the strategy to life — ensuring smooth transition with minimal disruption to operations. Decision points, owners, and budgets attached to each milestone.",
        },
        {
          title: "Partners in Transformation",
          body: "We're more than service providers — we're partners in digital transformation. From first steps into cloud through optimizing existing solutions, we guide every step of the way.",
        },
      ],
      closing:
        "Ready to soar? Let's craft your cloud strategy today — and architect a landscape where your business doesn't just adapt, but leads.",
    },
    deliverables: [
      { letter: "A", title: "Diagnostic", body: "Current state · constraints · stakeholder alignment." },
      { letter: "B", title: "Strategy", body: "Target state · investment thesis · sequencing." },
      { letter: "C", title: "Roadmap", body: "12-month plan · staffing · cost · decision points." },
      { letter: "D", title: "Execution support", body: "Vendor selection · steerco · monthly review." },
    ],
    process: [
      { weeks: "Wk 1–2", title: "Diagnose", body: "Interviews · data pulls · current-state map." },
      { weeks: "Wk 3–4", title: "Frame", body: "Options · tradeoffs · recommendation." },
      { weeks: "Wk 5–6", title: "Plan", body: "Roadmap · org model · cost case." },
      { weeks: "Wk 7–8", title: "Activate", body: "Kickoff first initiative · vendor decisions." },
      { weeks: "Wk 9–12", title: "Govern", body: "Steerco cadence · KPIs · course-correction." },
    ],
    tiers: tiers("initiative", "strategy program"),
  },
};
