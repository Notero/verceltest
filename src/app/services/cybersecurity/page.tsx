import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["cybersecurity"].name} · Intrastack`, alternates: { canonical: "/services/cybersecurity" } };

export default function Page() {
  return <ServicePage c={SERVICES["cybersecurity"]} />;
}
