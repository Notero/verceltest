import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["ai_automation"].name} · Intrastack`, alternates: { canonical: "/solutions/ai_automation" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["ai_automation"]} />;
}
