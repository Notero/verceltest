import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["kubernetes"].name} · Intrastack`, alternates: { canonical: "/solutions/kubernetes" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["kubernetes"]} />;
}
