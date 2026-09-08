import { Section } from "@/components/ui/Section";
import Image from "next/image";
import type { ReactNode } from "react";

type PromiseSectionProps = {
  servicesTitle?: string;
  services: ReadonlyArray<string | ReactNode>;
};

export function PromiseSection({
  servicesTitle = "Services",
  services,
}: PromiseSectionProps) {
  return (
    <Section ariaLabelledBy="promise-heading">
      <h2
        id="promise-heading"
        className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
      >
        Our Promise
      </h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
        <div>
          <p className="text-grey-mid leading-relaxed">
            We combine skilled workmanship with modern materials to create appliances that look
            natural, feel stable, and help you communicate clearly. Whether you are a patient or a
            referring clinician, you can count on our high technical standards.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-surface-muted bg-white">
          <Image
            src="/images/dental-laboratory-service.png"
            alt="Yu Dental Laboratory workspace with 3Shape digital workflow and Straumann 3D printer"
            width={1024}
            height={682}
            className="h-auto w-full object-contain"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 20rem"
          />
        </div>
        <div>
          <h3 className="font-sans text-xl font-bold text-navy">{servicesTitle}</h3>
          <ul className="mt-4 space-y-2 text-grey-mid">
            {services.map((item, index) => (
              <li key={typeof item === "string" ? item : `service-${index}`} className="flex gap-2">
                <span className="text-teal" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
