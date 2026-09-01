import {
  IconBite,
  IconConsultation,
  IconFitting,
  IconWaxTryIn,
} from "@/components/icons/ServiceIcons";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import type { ReactNode } from "react";

type ProcessStep = {
  id: string;
  label: string;
  icon: ReactNode;
};

const STEPS: ProcessStep[] = [
  {
    id: "consultation-primary-impressions",
    label: "Consultation and Primary Impressions",
    icon: <IconConsultation size={36} />,
  },
  {
    id: "secondary-impression",
    label: "Secondary impression",
    icon: <IconConsultation size={36} />,
  },
  {
    id: "bite-registration",
    label: "Bite Registration",
    icon: <IconBite size={36} />,
  },
  {
    id: "wax-teeth-try-in",
    label: "Wax Teeth Try-in",
    icon: <IconWaxTryIn size={36} />,
  },
  {
    id: "denture-insert",
    label: "Denture insert",
    icon: <IconFitting size={36} />,
  },
  {
    id: "post-insert-visit",
    label: "Post Insert Visit",
    icon: <IconFitting size={36} />,
  },
];

export function ProcessSteps() {
  return (
    <Section className="bg-surface-muted" ariaLabelledBy="process-heading">
      <header>
        <h2 id="process-heading" className="font-display text-2xl font-bold text-navy md:text-3xl">
          Our process
        </h2>
        <p className="mt-3 text-lg text-grey-dark">
          Generally needs 6 appointments and your dentures will be ready in 2 weeks!
        </p>
      </header>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.id} className="flex flex-col items-start text-left">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/20 bg-white text-navy shadow-sm">
              {step.icon}
            </div>
            <span className="mt-4 text-sm font-semibold text-navy">
              <span className="text-teal">{index + 1}.</span> {step.label}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-grey-mid">
        Lab work for practices: <Link href="/dental-lab-services/">For dentists</Link>. Full
        treatment detail: <Link href="/denture-services/">Denture services</Link>.
      </p>
    </Section>
  );
}
