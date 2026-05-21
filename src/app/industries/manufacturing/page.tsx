import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["manufacturing"].name} · Intrastack`, alternates: { canonical: "/industries/manufacturing" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["manufacturing"]} />;
}
