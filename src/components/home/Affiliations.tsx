import { Section } from "@/components/ui/Section";
import Image from "next/image";

const AFFILIATIONS = [
  {
    href: "https://www.workandincome.govt.nz/",
    src: "/images/affiliations/work-income.png",
    alt: "Work and Income, Te Hiranga Tangata",
    width: 280,
    height: 90,
  },
  {
    href: "https://dcnz.org.nz/",
    src: "/images/affiliations/dental-council.png",
    alt: "Dental Council of New Zealand, Te Kaunihera Tiaki Niho",
    width: 260,
    height: 72,
  },
  {
    href: "https://www.nzidt.org.nz/",
    src: "/images/affiliations/nzidt.png",
    alt: "New Zealand Institute of Dental Technologists (NZIDT)",
    width: 320,
    height: 72,
  },
  {
    href: "https://www.nib.co.nz/",
    src: "/images/affiliations/nib.png",
    alt: "nib health insurance",
    width: 120,
    height: 120,
  },
] as const;

export function Affiliations() {
  return (
    <Section className="bg-surface-muted" ariaLabelledBy="affiliations-heading">
      <h2
        id="affiliations-heading"
        className="font-display text-2xl font-bold text-navy md:text-3xl"
      >
        Affiliations &amp; regulatory bodies
      </h2>
      <p className="mt-3 text-grey-mid">
        Organisations and frameworks connected with our laboratory practice.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AFFILIATIONS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center justify-center rounded-lg bg-white p-4 no-underline shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="max-h-20 w-auto object-contain"
                loading="lazy"
              />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
