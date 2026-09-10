import { Section } from "@/components/ui/Section";
import Image from "next/image";

const REASONS = [
  {
    title: "Locally Made in Wellington",
    copy:
      "Your dentures are carefully designed and crafted in our on-site dental laboratory.",
    iconSrc: "/images/why-choose/locally-made-in-wellington.jpg",
  },
  {
    title: "Clinic & Laboratory Under One Roof",
    copy:
      "Direct communication between the clinician and laboratory helps us maintain control over fit, aesthetics and quality.",
    iconSrc: "/images/why-choose/clinic-laboratory-under-one-roof.jpg",
  },
  {
    title: "Personal, Family-Run Care",
    copy:
      "We take the time to understand your needs and provide ongoing support after your dentures are fitted.",
    iconSrc: "/images/why-choose/personal-family-run-care.jpg",
  },
  {
    title: "Experienced in Complex Cases",
    copy:
      "From new dentures and relines to implant-supported solutions, we provide personalised treatment for a wide range of denture needs.",
    iconSrc: "/images/why-choose/experienced-in-complex-cases.jpg",
  },
] as const;

export function WhyChooseUs() {
  return (
    <Section className="bg-surface-muted" ariaLabelledBy="why-choose-heading">
      <h2
        id="why-choose-heading"
        className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
      >
        Why Choose Yu Dental Laboratory?
      </h2>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {REASONS.map((reason) => (
          <li
            key={reason.title}
            className="flex flex-col items-center rounded-lg border border-surface-muted bg-white p-6 text-center shadow-sm md:p-8"
          >
            <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-surface-muted/70 md:h-32 md:w-32">
              <Image
                src={reason.iconSrc}
                alt=""
                width={160}
                height={160}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 font-sans text-lg font-bold text-navy">{reason.title}</h3>
            <p className="mt-3 text-grey-mid leading-relaxed">{reason.copy}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
