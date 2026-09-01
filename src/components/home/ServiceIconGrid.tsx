import {
  IconBruxism,
  IconDentures,
  IconMouthguard,
  IconRepairs,
  IconSleepApnoea,
  IconWhitening,
} from "@/components/icons/ServiceIcons";
import { Section } from "@/components/ui/Section";
import type { ReactNode } from "react";

type ServiceItem = {
  label: string;
  icon: ReactNode;
};

const SERVICES: ServiceItem[] = [
  { label: "Dentures & partials", icon: <IconDentures size={40} /> },
  { label: "Repairs & relines", icon: <IconRepairs size={40} /> },
  { label: "Mouthguards", icon: <IconMouthguard size={40} /> },
  { label: "Whitening trays", icon: <IconWhitening size={40} /> },
  { label: "Sleep apnoea devices", icon: <IconSleepApnoea size={40} /> },
  { label: "Bruxism splints", icon: <IconBruxism size={40} /> },
];

export function ServiceIconGrid() {
  return (
    <Section ariaLabelledBy="denture-services-heading">
      <h2
        id="denture-services-heading"
        className="font-display text-2xl font-bold text-navy md:text-3xl"
      >
        Denture services
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {SERVICES.map((service) => (
          <div
            key={service.label}
            className="group flex flex-col items-center gap-3 rounded-lg border border-surface-muted bg-white p-4 text-center transition-colors hover:border-teal/40 hover:bg-teal/5"
          >
            <div className="text-navy transition-colors group-hover:text-teal">{service.icon}</div>
            <span className="text-sm font-semibold text-navy">{service.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
