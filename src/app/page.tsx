import { Affiliations } from "@/components/home/Affiliations";
import { DepartmentCards } from "@/components/home/DepartmentCards";
import { Hero } from "@/components/home/Hero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ServiceIconGrid } from "@/components/home/ServiceIconGrid";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Dentures & dental laboratory Wellington",
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <DepartmentCards />
      <Affiliations />
      <ServiceIconGrid />
      <ProcessSteps />
    </>
  );
}
