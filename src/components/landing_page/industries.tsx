import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { name: "Government", img: "/images/unsplash/photo-1541872703-74c5e44368f9-800.webp", href: "/industries/government", note: "Public sector" },
  { name: "Healthcare", img: "/images/unsplash/photo-1576091160550-2173dba999ef-800.webp", href: "/industries/healthcare", note: "HIPAA-ready" },
  { name: "Finance", img: "/images/unsplash/photo-1454165804606-c3d57bc86b40-800.webp", href: "/industries/finance", note: "Tier-1 banks" },
  { name: "Education", img: "/images/unsplash/photo-1503676260728-1c00da094a0b-800.webp", href: "/industries/education", note: "K-12 & higher ed" },
  { name: "Telecom", img: "/images/unsplash/photo-1611605698335-8b1569810432-800.webp", href: "/industries/telecom", note: "Carrier-grade" },
  { name: "Logistics", img: "/images/unsplash/photo-1586528116311-ad8dd3c8310d-800.webp", href: "/industries/logistics", note: "Real-time fleet" },
  { name: "Manufacturing", img: "/images/unsplash/photo-1565793298595-6a879b1d9492-800.webp", href: "/industries/manufacturing", note: "Industrial IoT" },
  { name: "Retail", img: "/images/unsplash/photo-1481437156560-3205f6a55735-800.webp", href: "/industries/retail", note: "Omnichannel" },
];

export default function Industries() {
  return (
    <section className="w-full bg-[#FBF8EE] py-28 md:py-32 px-6" id="industries">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-end">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1622] leading-tight">
            Eight sectors,
            <br />
            one <span className="italic font-serif text-[#0E7490]">playbook.</span>
          </h2>
          <p className="text-lg text-[#5C6473] leading-relaxed">
            From regulated public sector to high-velocity telecom — we ship in the environments
            where downtime isn&apos;t an option and compliance isn&apos;t optional.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#E2E6EE] hover:shadow-lg transition-shadow"
            >
              <Image
                src={ind.img}
                alt={ind.name}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/40 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-base-100/80 backdrop-blur-md border border-base-300 px-3 py-1 text-xs font-semibold text-foreground">
                {ind.note}
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-lg font-bold text-foreground">{ind.name}</div>
                </div>
                <span className="grid place-items-center size-9 rounded-full bg-primary text-primary-content group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
