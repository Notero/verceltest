import HeroCarousel from "@/components/landing_page/heroCarousel";
import ContractsStrip from "@/components/landing_page/contractsStrip";
import About from "@/components/landing_page/about";
import Services from "@/components/landing_page/services";
import Solutions from "@/components/landing_page/solutions";
import Expertise from "@/components/landing_page/expertise";
import Industries from "@/components/landing_page/industries";
import TechStack from "@/components/landing_page/techStack";
import Testimonial from "@/components/landing_page/testimonial";
import News from "@/components/landing_page/news";
import CTA from "@/components/landing_page/cta";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroCarousel />
      <ContractsStrip />
      <About />
      <Services />
      <Solutions />
      <Expertise />
      <Industries />
      <TechStack />
      <Testimonial />
      <News />
      <CTA />
    </main>
  );
}
