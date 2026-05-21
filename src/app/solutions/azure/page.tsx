import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["azure"].name} · Intrastack`, alternates: { canonical: "/solutions/azure" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["azure"]} />;
}
