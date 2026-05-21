import Link from "next/link";
import { ArrowRight, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import ReachUsForm from "@/components/public/reachUsForm";

const PROMISES = [
  { icon: Clock, label: "Response in 1 business day" },
  { icon: MessageSquare, label: "Talk to a senior engineer, not an SDR" },
  { icon: ShieldCheck, label: "NDA-friendly · zero spam, ever" },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0F141C] py-28 md:py-36 px-6"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[600px] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 size-[600px] rounded-full bg-secondary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F141C_75%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          {/* Left — pitch */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Let&apos;s talk
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Free{" "}
              <span className="italic font-serif text-secondary">consultation.</span>
              <br />
              No filler, no decks.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Tell us where you&apos;re stuck. A senior engineer — not a sales rep — will be
              in touch with three concrete next steps within one business day.
            </p>

            <ul className="mt-8 space-y-3">
              {PROMISES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="grid place-items-center size-8 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/news/whitepaper"
                className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100/50 backdrop-blur px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Read whitepapers <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <ReachUsForm
            title="Request a consultation"
            subtitle="Takes a couple of minutes. We reply within one business day."
          />
        </div>
      </div>
    </section>
  );
}
