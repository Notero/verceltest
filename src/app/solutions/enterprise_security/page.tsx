import SolutionPage from "@/components/public/templates/solutionPage";
import { SOLUTIONS } from "@/lib/content/solutions";

export const metadata = { title: `${SOLUTIONS["enterprise_security"].name} · Intrastack`, alternates: { canonical: "/solutions/enterprise_security" } };

export default function Page() {
  return <SolutionPage c={SOLUTIONS["enterprise_security"]} />;
}
