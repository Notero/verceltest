import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["retail"].name} · Intrastack`, alternates: { canonical: "/industries/retail" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["retail"]} />;
}
