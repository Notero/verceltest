import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["government"].name} · Intrastack`, alternates: { canonical: "/industries/government" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["government"]} />;
}
