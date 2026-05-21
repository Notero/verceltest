import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["logistics"].name} · Intrastack`, alternates: { canonical: "/industries/logistics" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["logistics"]} />;
}
