import ServicePage from "@/components/public/templates/servicePage";
import { SERVICES } from "@/lib/content/services";

export const metadata = { title: `${SERVICES["staff_augmentation"].name} · Intrastack`, alternates: { canonical: "/services/staff_augmentation" } };

export default function Page() {
  return <ServicePage c={SERVICES["staff_augmentation"]} />;
}
