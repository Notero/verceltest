import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["ai_engineering"].name} · Intrastack`, alternates: { canonical: "/services/ai_engineering" } };

export default function Page() {
  return <ServicePage c={SERVICES["ai_engineering"]} />;
}
