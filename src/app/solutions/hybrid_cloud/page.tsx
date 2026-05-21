import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["hybrid_cloud"].name} · Intrastack`, alternates: { canonical: "/solutions/hybrid_cloud" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["hybrid_cloud"]} />;
}
