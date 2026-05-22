import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal, { RevealGroup } from "@/components/public/reveal";

const PILLARS = [
  {
    title: "Cost Optimization",
    body: "Consulting partners help clients optimize their cloud spend by identifying cost-saving opportunities across compute, storage, and networking.",
  },
  {
    title: "Customized Solutions",
    body: "Consulting partners work closely with clients to understand their specific needs and challenges, tailoring cloud solutions to fit.",
  },
  {
    title: "Security Expertise",
    body: "Specialized knowledge and tools to enhance cloud security and ensure compliance across regulated industries.",
  },
  {
    title: "Global Delivery",
    body: "A team of 150 engineers and consultants operating 24/7 across delivery centers in the United States, Vietnam, Japan, and India — handoffs that don't drop quality.",
  },
];

export default function About() {
  return (
    <section className="w-full bg-[#FBF8EE] py-28 md:py-32 px-6" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-end">
          <Reveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
              Welcome to
              <br />
              Intrastack <span className="italic font-serif text-[#0E7490]">Solutions.</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <p className="text-lg text-[#5C6473] leading-relaxed">
              We&apos;re a leading provider of cloud consulting and IT services dedicated to
              transforming your business through innovative technology. Discover how our tailored
              solutions can drive your success and elevate your business.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white border border-[#E2E6EE]">
              <Image
                src="/images/legacy/intrastack-slide-12-1024x1024.webp"
                alt="Intrastack team"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2E6EE] px-5 py-3 shadow-sm">
                <div className="text-sm font-bold text-[#0F1622]">Est. 2019</div>
                <div className="text-xs text-[#5C6473] mt-0.5">Las Vegas, NV</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="right">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F1622] leading-snug">
                Where multi-cloud expertise meets{" "}
                <span className="italic font-serif text-[#0E7490]">human</span> consulting.
              </h3>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <p className="mt-5 text-[#5C6473] leading-relaxed">
                With a focus on multi-cloud strategies, cybersecurity, and cutting-edge solutions,
                our expert team is here to help you navigate the complexities of the digital
                landscape. We work shoulder-to-shoulder with operators — not over decks.
              </p>
            </Reveal>

            <RevealGroup
              stagger={120}
              initialDelay={250}
              direction="up"
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-[#E2E6EE] bg-white p-5 hover:border-primary hover:shadow-md transition-all"
                >
                  <h4 className="text-base font-bold text-[#0F1622]">{p.title}</h4>
                  <p className="mt-2 text-sm text-[#5C6473] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </RevealGroup>

              <div className="mt-6 rounded-xl bg-secondary text-secondary-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center size-12 rounded-full bg-secondary-foreground/15">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                      Call us now
                    </div>
                    <a
                      href="tel:8889597868"
                      className="text-2xl font-bold tracking-tight hover:underline"
                    >
                      888 · 959 · 7868
                    </a>
                  </div>
                </div>
                <div className="text-xs opacity-80 sm:text-right">
                  Mon–Fri · 09:00–18:00 PT
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
