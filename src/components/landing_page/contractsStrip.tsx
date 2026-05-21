import Image from "next/image";

const CONTRACTS: [string, string][] = [
  ["Delaware", "/images/legacy/delaware-1.webp"],
  ["Florida", "/images/legacy/florida-logo-1.webp"],
  ["Georgia", "/images/legacy/georgia-logo-1.webp"],
  ["MBE", "/images/legacy/mbe.webp"],
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex items-center gap-12 pr-12 shrink-0"
    >
      {CONTRACTS.map(([name, src], i) => (
        <li key={i} className="shrink-0">
          <Image
            src={src}
            alt={name}
            height={48}
            width={120}
            loading="lazy"
            sizes="120px"
            style={{ width: "auto", height: "48px" }}
            className="object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ContractsStrip() {
  return (
    <div className="w-full bg-accent border-y border-base-300 py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 flex items-center gap-10">
        <div className="shrink-0 text-xs uppercase tracking-widest font-semibold text-muted-foreground max-w-[160px]">
          State Government Contracts
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-[marquee_30s_linear_infinite]">
            <Row />
            <Row ariaHidden />
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
