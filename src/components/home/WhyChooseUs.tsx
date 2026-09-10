import { Section } from "@/components/ui/Section";

const REASONS = [
  {
    title: "Locally Made in Wellington",
    copy:
      "Your dentures are carefully designed and crafted in our on-site dental laboratory.",
  },
  {
    title: "Clinic & Laboratory Under One Roof",
    copy:
      "Direct communication between the clinician and laboratory helps us maintain control over fit, aesthetics and quality.",
  },
  {
    title: "Personal, Family-Run Care",
    copy:
      "We take the time to understand your needs and provide ongoing support after your dentures are fitted.",
  },
  {
    title: "Experienced in Complex Cases",
    copy:
      "From new dentures and relines to implant-supported solutions, we provide personalised treatment for a wide range of denture needs.",
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
            className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8"
          >
            <h3 className="font-sans text-lg font-bold text-navy">{reason.title}</h3>
            <p className="mt-3 text-grey-mid leading-relaxed">{reason.copy}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
