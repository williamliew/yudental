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
  label: string;
  icon: ReactNode;
};

const STEPS: ProcessStep[] = [
  {
    label: "Consultation & impressions",
    icon: <IconConsultation size={36} />,
  },
  {
    label: "Bite registration",
    icon: <IconBite size={36} />,
  },
  {
    label: "Wax teeth try-in",
    icon: <IconWaxTryIn size={36} />,
  },
  {
    label: "Fitting!",
    icon: <IconFitting size={36} />,
  },
];

export function ProcessSteps() {
  return (
    <Section className="bg-surface-muted" ariaLabelledBy="process-heading">
      <header className="text-center">
        <h2 id="process-heading" className="font-display text-2xl font-bold text-navy md:text-3xl">
          Our process
        </h2>
        <p className="mt-3 text-lg text-grey-dark">
          Generally needs 4 appointments and your dentures will be ready in 2 weeks!
        </p>
        <p className="mt-2 text-sm text-grey-mid">
          <span className="text-teal" aria-hidden="true">
            *
          </span>
          Ivobase dentures may need one or two extra appointments.
        </p>
      </header>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <li key={step.label} className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/20 bg-white text-navy shadow-sm">
              {step.icon}
            </div>
            <span className="mt-4 text-sm font-semibold text-navy">
              <span className="text-teal">{index + 1}.</span> {step.label}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-center text-sm text-grey-mid">
        Crowns, implants and lab work for practices:{" "}
        <Link href="/dental-lab-services/">Dental lab</Link>. Full treatment detail:{" "}
        <Link href="/denture-services/">Treatment / dental services</Link>.
      </p>
    </Section>
  );
}
