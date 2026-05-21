import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="w-full bg-[#FBF8EE] py-28 md:py-32 px-6" id="testimonial">
      <div className="mx-auto max-w-4xl">
        <p className="mt-6 text-2xl md:text-3xl font-medium text-[#0F1622] leading-snug">
          <span aria-hidden="true" className="font-serif text-5xl text-[#0E7490] leading-none mr-2">“</span>
          Intrastack consistently delivers top-notch solutions that drive innovation and
          efficiency. Their commitment to excellence is truly{" "}
          <em className="italic font-serif text-[#0E7490]">inspiring.</em>
          <span aria-hidden="true" className="font-serif text-5xl text-[#0E7490] leading-none ml-1 align-bottom">”</span>
        </p>

        <div className="mt-10 flex items-center gap-4">
          <Image
            src="/images/legacy/testi2.webp"
            alt="Ellen Erye"
            width={56}
            height={56}
            loading="lazy"
            sizes="56px"
            className="size-14 rounded-full object-cover border border-[#E2E6EE]"
          />
          <div>
            <div className="text-base font-bold text-[#0F1622]">Ellen Erye</div>
          </div>
        </div>
      </div>
    </section>
  );
}
