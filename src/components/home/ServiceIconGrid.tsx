import { Section } from "@/components/ui/Section";
import { HOME_SERVICE_TILES } from "@/lib/tile-images";
import Image from "next/image";
import Link from "next/link";

function getServiceLinkLabel(label: string): string {
  if (label === "Dentures & Partials") {
    return "Dentures and partials: view full and partial denture information on the denture services page";
  }

  return `${label}: view service details on the denture services page`;
}

export function ServiceIconGrid() {
  return (
    <Section className="text-center" ariaLabelledBy="denture-services-heading">
      <h2
        id="denture-services-heading"
        className="font-sans text-2xl font-bold text-navy md:text-3xl"
      >
        Denture Services
      </h2>
      <p className="mt-3 text-lg text-grey-mid">For the Public</p>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {HOME_SERVICE_TILES.map((service) => (
          <li key={service.id}>
            <Link
              href={`/denture-services/#${service.accordionId}`}
              className="block rounded-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <Image
                src={service.src}
                alt=""
                aria-hidden="true"
                width={service.width}
                height={service.height}
                className="h-auto w-full"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <span className="sr-only">{getServiceLinkLabel(service.label)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
