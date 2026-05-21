import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["business_continuity"].name} · Intrastack`, alternates: { canonical: "/solutions/business_continuity" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["business_continuity"]} />;
}
