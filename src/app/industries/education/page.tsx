import IndustryPage from "@/components/public/templates/industryPage";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = { title: `${INDUSTRIES["education"].name} · Intrastack`, alternates: { canonical: "/industries/education" } };

export default function Page() {
  return <IndustryPage c={INDUSTRIES["education"]} />;
}
