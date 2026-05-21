import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["cloud_transformation"].name} · Intrastack`, alternates: { canonical: "/services/cloud_transformation" } };

export default function Page() {
  return <ServicePage c={SERVICES["cloud_transformation"]} />;
}
