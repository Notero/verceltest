import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["mobile_development"].name} · Intrastack`, alternates: { canonical: "/services/mobile_development" } };

export default function Page() {
  return <ServicePage c={SERVICES["mobile_development"]} />;
}
