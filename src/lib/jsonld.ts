import { SITE } from "./site";

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.city,
      addressCountry: "NZ",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Wellington",
    },
  };
}
