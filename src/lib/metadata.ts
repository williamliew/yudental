import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = title === SITE.name ? `${SITE.name} | Wellington` : `${title} | ${SITE.name}`;
  const desc = description ?? SITE.description;
  const url = path ? `${SITE.url}${path}` : SITE.url;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      locale: "en_NZ",
      type: "website",
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Wellington`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | Wellington`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_NZ",
    type: "website",
  },
};
