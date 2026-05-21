import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["it_consulting"].name} · Intrastack`, alternates: { canonical: "/services/it_consulting" } };

export default function Page() {
  return <ServicePage c={SERVICES["it_consulting"]} />;
}
