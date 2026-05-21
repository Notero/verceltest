import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["telecom"].name} · Intrastack`, alternates: { canonical: "/industries/telecom" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["telecom"]} />;
}
