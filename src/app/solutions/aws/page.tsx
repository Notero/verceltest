import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["aws"].name} · Intrastack`, alternates: { canonical: "/solutions/aws" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["aws"]} />;
}
