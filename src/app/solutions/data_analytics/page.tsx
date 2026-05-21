import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["data_analytics"].name} · Intrastack`, alternates: { canonical: "/solutions/data_analytics" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["data_analytics"]} />;
}
