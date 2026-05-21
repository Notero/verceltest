"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "ok" | "error";

const INTERESTS = [
  "Cloud Transformation",
  "Cloud Migration",
  "AI & Machine Learning",
  "DevOps & Automation",
  "Data Analytics",
  "Security & Compliance",
  "Software Development",
  "Staff Augmentation",
  "IT Consulting",
  "Not sure yet",
] as const;

const BUDGETS = [
  { value: "<$25k", label: "Under $25k" },
  { value: "$25-100k", label: "$25k – $100k" },
  { value: "$100-250k", label: "$100k – $250k" },
  { value: "$250k+", label: "$250k+" },
  { value: "Not sure", label: "Not sure" },
] as const;

const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "1-3m", label: "1–3 months" },
  { value: "3-6m", label: "3–6 months" },
  { value: "6m+", label: "6+ months" },
  { value: "exploring", label: "Just exploring" },
] as const;

const COMPANY_SIZES = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-1000", label: "201–1,000" },
  { value: "1000+", label: "1,000+" },
] as const;

type Variant = "card" | "embedded";

type Props = {
  /**
   * `card`: full bordered card with header and trust strip — for the dedicated
   *   /contact page and the landing CTA section.
   * `embedded`: flat layout for inline placement inside a section that already
   *   provides framing (e.g. a service-page CTA strip).
   */
  variant?: Variant;
  /** Heading shown above the form. */
  title?: string;
  /** Sub-line under the title. */
  subtitle?: string;
  /** Pre-selected interest (used when a service / solution page embeds the form). */
  defaultInterest?: string;
};

export default function ReachUsForm({
  variant = "card",
  title = "Tell us what you're building.",
  subtitle = "A senior engineer replies the same business day. No SDRs, no decks.",
  defaultInterest,
}: Props) {
  const pathname = usePathname();

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [interests, setInterests] = useState<string[]>(
    defaultInterest ? [defaultInterest] : []
  );
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [companySize, setCompanySize] = useState<string>("");
  const [preferred, setPreferred] = useState<"email" | "phone">("email");
  const [ndaRequired, setNdaRequired] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [consent, setConsent] = useState(true);

  function toggleInterest(name: string) {
    setInterests((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const urlParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();
    const payload = {
      full_name: String(fd.get("full_name") ?? "").trim(),
      work_email: String(fd.get("work_email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim() || null,
      company: String(fd.get("company") ?? "").trim() || null,
      job_title: String(fd.get("job_title") ?? "").trim() || null,
      company_size: companySize || null,
      interests,
      budget_range: budget || null,
      timeline: timeline || null,
      message: String(fd.get("message") ?? "").trim(),
      preferred_contact: preferred,
      nda_required: ndaRequired,
      newsletter_opt_in: newsletter,
      consent_to_contact: consent,
      source_path: pathname,
      utm_source: urlParams.get("utm_source"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign"),
      // honeypot
      website: String(fd.get("website") ?? ""),
    };

    if (!payload.full_name || !payload.work_email || payload.message.length < 10) {
      setStatus("error");
      setErrorMsg(
        "Name, work email, and a sentence or two about your project are required."
      );
      return;
    }
    if (!consent) {
      setStatus("error");
      setErrorMsg("Please consent to being contacted about your enquiry.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(json.error ?? `HTTP ${res.status}`);
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
      setInterests(defaultInterest ? [defaultInterest] : []);
      setBudget("");
      setTimeline("");
      setCompanySize("");
      setNdaRequired(false);
      setNewsletter(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "ok") {
    return (
      <div
        className={
          variant === "card"
            ? "rounded-2xl border border-base-300 bg-base-100 p-10 text-center"
            : "rounded-2xl bg-base-100/60 p-8 text-center"
        }
      >
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">Message received.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out — a senior engineer will respond within one
          business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  const Wrapper = variant === "card" ? CardShell : EmbeddedShell;

  return (
    <Wrapper title={title} subtitle={subtitle}>
      <form onSubmit={onSubmit} noValidate className="space-y-6">
        {/* Honeypot */}
        <div className="sr-only" aria-hidden>
          <label htmlFor="website">Website (leave empty)</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Full name" name="full_name" required autoComplete="name" />
          <Field
            label="Work email"
            name="work_email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Company" name="company" autoComplete="organization" />
          <Field
            label="Job title"
            name="job_title"
            autoComplete="organization-title"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
          <SelectField
            label="Company size"
            id="company_size"
            value={companySize}
            onChange={setCompanySize}
            options={COMPANY_SIZES}
            placeholder="Select size"
          />
        </div>

        {/* Inquiry */}
        <div>
          <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Area of interest <span className="text-muted-foreground">(pick any)</span>
          </Label>
          <div className="mt-3 flex flex-wrap gap-2">
            {INTERESTS.map((name) => {
              const active = interests.includes(name);
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleInterest(name)}
                  className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    active
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-base-300 bg-base-100/50 text-foreground hover:border-secondary/40"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SelectField
            label="Budget range"
            id="budget_range"
            value={budget}
            onChange={setBudget}
            options={BUDGETS}
            placeholder="Select a range"
          />
          <SelectField
            label="Timeline"
            id="timeline"
            value={timeline}
            onChange={setTimeline}
            options={TIMELINES}
            placeholder="When do you need this?"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Tell us about your project <span className="text-secondary">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="A few sentences is plenty — what you're trying to do, what's in the way, what 'done' looks like."
          />
        </div>

        {/* Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Preferred contact
            </Label>
            <div className="mt-3 flex gap-2">
              {(["email", "phone"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPreferred(p)}
                  className={`inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition capitalize ${
                    preferred === p
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-base-300 bg-base-100/50 text-foreground hover:border-secondary/40"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end md:justify-end">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={ndaRequired}
                onCheckedChange={(v) => setNdaRequired(v === true)}
                id="nda"
              />
              <span className="text-sm text-foreground">NDA required before we talk</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={newsletter}
                onCheckedChange={(v) => setNewsletter(v === true)}
                id="news"
              />
              <span className="text-sm text-foreground">Send me the quarterly newsletter</span>
            </label>
          </div>
        </div>

        <div className="rounded-lg border border-base-300 bg-base-200/50 p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              id="consent"
              className="mt-0.5"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              I consent to Intrastack Solutions contacting me about this enquiry.
              We use your details only to respond — never sold, never spammed.
              See our privacy policy for retention details.
            </span>
          </label>
        </div>

        {status === "error" && errorMsg && (
          <p className="text-sm text-destructive" role="alert">
            {errorMsg}
          </p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <p className="text-xs text-muted-foreground">
            Required fields are marked <span className="text-secondary">*</span>
          </p>
          <Button
            type="submit"
            disabled={status === "submitting"}
            size="lg"
            className="w-full sm:w-auto"
          >
            {status === "submitting" ? (
              "Sending…"
            ) : (
              <>
                Send message <Send className="size-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

/* ----------------------------- shells ---------------------------- */

function CardShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-base-300 bg-card/80 p-6 md:p-10 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {title}
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground">{subtitle}</p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <li className="inline-flex items-center gap-2">
            <Clock className="size-3.5 text-secondary" /> Reply within one business day
          </li>
          <li className="inline-flex items-center gap-2">
            <MessageSquare className="size-3.5 text-secondary" /> Routed to a senior engineer
          </li>
          <li className="inline-flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-secondary" /> NDA-friendly · no spam
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}

function EmbeddedShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {title}
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

/* ----------------------------- fields ---------------------------- */

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        {label}
        {required && (
          <span className="text-secondary ml-1 text-base font-bold leading-none align-middle">
            *
          </span>
        )}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-sm text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-colors h-10"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
