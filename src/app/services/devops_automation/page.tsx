import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["devops_automation"].name} · Intrastack`, alternates: { canonical: "/services/devops_automation" } };

export default function Page() {
  return <ServicePage c={SERVICES["devops_automation"]} />;
}
