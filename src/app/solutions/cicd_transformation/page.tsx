import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["cicd_transformation"].name} · Intrastack`, alternates: { canonical: "/solutions/cicd_transformation" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["cicd_transformation"]} />;
}
