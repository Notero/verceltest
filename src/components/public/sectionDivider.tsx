export default function SectionDivider() {
  return (
    <div className="relative w-full bg-background py-10" aria-hidden="true">
      <div className="mx-auto max-w-6xl px-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-base-300 to-primary/60" />
        <span className="relative inline-flex items-center justify-center">
          <span className="absolute size-6 rounded-full bg-primary/20 blur-md" />
          <span className="relative size-2.5 rotate-45 bg-primary" />
          <span className="relative size-2.5 rotate-45 bg-secondary -ml-1" />
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-base-300 to-secondary/60" />
      </div>
    </div>
  );
}
