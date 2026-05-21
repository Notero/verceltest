import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["healthcare"].name} · Intrastack`, alternates: { canonical: "/industries/healthcare" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["healthcare"]} />;
}
