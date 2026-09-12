import { SITE } from "./site";

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    telephone: SITE.phoneTel,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.city,
      postalCode: SITE.address.postcode,
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -41.2925,
      longitude: 174.7787,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Wellington",
      },
      {
        "@type": "Country",
        name: "New Zealand",
      },
    ],
  };
}

export type FaqSchemaItem = {
  question: string;
  answer: string;
};

export function getFaqPageJsonLd(items: FaqSchemaItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
