import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["software_development"].name} · Intrastack`, alternates: { canonical: "/services/software_development" } };

export default function Page() {
  return <ServicePage c={SERVICES["software_development"]} />;
}
