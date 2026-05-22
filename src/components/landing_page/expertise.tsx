import Reveal, { RevealGroup } from "@/components/public/reveal";

const CLOUDS = [
  { name: "AWS", tier: "Premier Partner" },
  { name: "Azure", tier: "Gold Partner" },
  { name: "GCP", tier: "Service Partner" },
];

const LOCATIONS = [
  "Clermont, FL · USA",
  "Ho Chi Minh City · Vietnam",
  "Tokyo · Japan",
  "Bengaluru · India",
];

export default function Expertise() {
  return (
    <section className="w-full bg-[#161B26] py-28 md:py-32 px-6" id="expertise">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <Reveal direction="left">
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Optimized for <span className="italic font-serif text-secondary">performance,</span>
              <br />
              flexible by design.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Our multi-cloud expertise ensures optimized performance, flexibility, and enhanced
              security by leveraging the best features of AWS, Microsoft Azure, and Google Cloud
              Platform to meet diverse business needs.
            </p>
          </Reveal>

          <RevealGroup
            direction="scale"
            stagger={100}
            initialDelay={250}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {CLOUDS.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-base-300 bg-card p-4 text-center"
              >
                <div className="text-lg font-bold text-foreground">{c.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.tier}</div>
              </div>
            ))}
          </RevealGroup>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Reveal direction="right">
            <div className="rounded-2xl border border-base-300 bg-card p-6">
              <div className="text-4xl font-bold text-foreground">
                150<span className="text-secondary">+</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">Engineers & Consultants</div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Senior practitioners with average 12+ years in the field.
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="rounded-2xl border border-base-300 bg-card p-6">
              <div className="text-4xl font-bold text-foreground">24/7</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Coverage</div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Follow-the-sun handoffs across four delivery centers.
              </div>
            </div>
          </Reveal>
          <Reveal direction="up" delay={250} className="col-span-2">
            <div className="rounded-2xl border border-base-300 bg-card p-6">
              <div className="text-sm font-semibold text-foreground">Global Delivery Centers</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center rounded-full bg-base-100 border border-base-300 px-3 py-1.5 text-xs text-foreground"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
