import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["finance"].name} · Intrastack`, alternates: { canonical: "/industries/finance" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["finance"]} />;
}
