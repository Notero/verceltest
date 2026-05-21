import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["security_compliance"].name} · Intrastack`, alternates: { canonical: "/solutions/security_compliance" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["security_compliance"]} />;
}
