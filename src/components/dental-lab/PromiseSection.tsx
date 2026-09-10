import { Section } from "@/components/ui/Section";
import Image from "next/image";
import type { ReactNode } from "react";

type ServiceCategory = {
  title: string;
  items: ReadonlyArray<string>;
};

type PromiseSectionProps = {
  heading?: string;
  promiseCopy?: string;
  servicesTitle?: string;
  services?: ReadonlyArray<string | ReactNode>;
  serviceCategories?: ReadonlyArray<ServiceCategory>;
};

export function PromiseSection({
  heading = "Our Promise",
  promiseCopy =
    "We combine skilled workmanship with modern materials to create appliances that look natural, feel stable, and help you communicate clearly. Whether you are a patient or a referring clinician, you can count on our high technical standards.",
  servicesTitle = "Services",
  services,
  serviceCategories,
}: PromiseSectionProps) {
  return (
    <Section ariaLabelledBy="promise-heading">
      <h2
        id="promise-heading"
        className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
        <div>
          <p className="text-grey-mid leading-relaxed">{promiseCopy}</p>
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
          {serviceCategories ? (
            <div className="mt-4 space-y-5">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-sm font-bold text-navy">{category.title}</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-grey-mid">
                    {category.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-teal" aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-4 space-y-2 text-grey-mid">
              {services?.map((item, index) => (
                <li key={typeof item === "string" ? item : `service-${index}`} className="flex gap-2">
                  <span className="text-teal" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
