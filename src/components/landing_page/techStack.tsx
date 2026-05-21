"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Tech = { name: string; slug?: string; domain?: string; url?: string };

const TECH: Tech[] = [
  { name: "Azure", url: "/images/vendor/azure-original.svg" },
  { name: "Cisco", slug: "cisco" },
  { name: "Cloudify", domain: "cloudify.co" },
  { name: "CloudCheckr", domain: "cloudcheckr.com" },
  { name: "ServiceNow", domain: "servicenow.com" },
  { name: "Splunk", slug: "splunk" },
  { name: "CyberArk", domain: "cyberark.com" },
  { name: "CrowdStrike", domain: "crowdstrike.com" },
  { name: "Citrix", slug: "citrix" },
  { name: "VMware", slug: "vmware" },
  { name: "HPE", domain: "hpe.com" },
  { name: "Tanium", domain: "tanium.com" },
  { name: "Fortinet", slug: "fortinet" },
  { name: "Nutanix", slug: "nutanix" },
  { name: "Pure Storage", domain: "purestorage.com" },
  { name: "Google", slug: "google" },
  { name: "Check Point", domain: "checkpoint.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Palo Alto", slug: "paloaltonetworks" },
  { name: "Next.js", slug: "nextdotjs" },
];

const PER_SLIDE = 10;
const AUTOPLAY_MS = 6000;

function logoUrl(t: Tech): string | null {
  if (t.url) return t.url;
  if (t.slug) return `https://cdn.simpleicons.org/${t.slug}/ffffff`;
  // No Google favicon fallback — it sets a third-party cookie and 404s for several brands.
  // Brands without `slug` or `url` render as a styled text monogram below.
  return null;
}

function initials(name: string): string {
  return name
    .split(/[\s.&]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function TechStack() {
  const slides = chunk(TECH, PER_SLIDE);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <section className="w-full bg-accent py-28 md:py-32 px-6" id="tech">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-end">
          <div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Our stack <span className="italic font-serif text-secondary">expertise.</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Deep practitioners in the platforms enterprises actually run — cloud providers,
            container orchestration, security, observability, and the data infrastructure in
            between.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((group, gi) => (
                <div
                  key={gi}
                  className="shrink-0 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                  aria-roledescription="slide"
                  aria-label={`${gi + 1} of ${slides.length}`}
                >
                  {group.map((t) => {
                    const url = logoUrl(t);
                    return (
                      <div
                        key={t.name}
                        title={t.name}
                        className="group aspect-[5/3] rounded-xl border border-base-300 bg-base-100 flex flex-col items-center justify-center gap-2 p-4 hover:border-primary hover:bg-card transition-colors"
                      >
                        {url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={url}
                            alt={`${t.name} logo`}
                            width={80}
                            height={32}
                            className="h-8 w-auto max-w-[80px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            loading="lazy"
                          />
                        ) : (
                          <span
                            aria-hidden
                            className="grid place-items-center h-8 min-w-8 px-2 rounded-md bg-primary/15 text-primary text-sm font-bold tracking-wide"
                          >
                            {initials(t.name)}
                          </span>
                        )}
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {t.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 grid place-items-center size-11 rounded-full bg-base-100 border border-base-300 text-foreground hover:bg-primary hover:text-primary-content transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 grid place-items-center size-11 rounded-full bg-base-100 border border-base-300 text-foreground hover:bg-primary hover:text-primary-content transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>

              <div className="mt-10 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-8 bg-primary" : "w-2 bg-base-300 hover:bg-base-300/70"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
