import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
};

function buildSocialMetadata(title: string, description: string, url: string): Metadata {
  return {
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_NZ",
      type: "website",
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — dentures and dental laboratory in Wellington`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.ogImage],
    },
  };
}

export function createPageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = title === SITE.name ? `${SITE.name} | Wellington` : `${title} | ${SITE.name}`;
  const desc = description ?? SITE.description;
  const url = path ? `${SITE.url}${path}` : `${SITE.url}/`;

  return {
    title: fullTitle,
    description: desc,
    ...buildSocialMetadata(fullTitle, desc, url),
  };
}

const defaultTitle = `${SITE.name} | Wellington`;
const defaultUrl = `${SITE.url}/`;

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  ...buildSocialMetadata(defaultTitle, SITE.description, defaultUrl),
};
