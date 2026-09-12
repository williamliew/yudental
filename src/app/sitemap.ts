import { INDEXABLE_ROUTES } from "@/lib/routes";
import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map((path) => ({
    url: path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
