import { AboutTeaser, ContactSection, TeamTeaser } from "@/components/home/AboutContact";
import { Affiliations } from "@/components/home/Affiliations";
import { DepartmentCards } from "@/components/home/DepartmentCards";
import { Hero } from "@/components/home/Hero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { PromiseSection } from "@/components/home/PromiseSection";
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
      <PromiseSection />
      <AboutTeaser />
      <TeamTeaser />
      <ContactSection />
    </>
  );
}
