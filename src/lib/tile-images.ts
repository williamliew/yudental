export type TileImage = {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
};

export type ServiceTileImage = TileImage & {
  /** Hash target on `/denture-services/` for deep-linking from the home grid. */
  accordionId: string;
};

export type ProcessTileImage = TileImage & {
  description: string;
};

export const HOME_SERVICE_TILES: ServiceTileImage[] = [
  {
    id: "dentures-and-partials",
    label: "Dentures & Partials",
    src: "/images/services/dentures-and-partials.jpg",
    width: 512,
    height: 512,
    accordionId: "full-dentures",
  },
  {
    id: "repairs-and-relines",
    label: "Repairs & Relines",
    src: "/images/services/repairs-and-relines.jpg",
    width: 512,
    height: 512,
    accordionId: "relines-and-repairs",
  },
  {
    id: "sports-mouth-guards",
    label: "Sports Mouth Guards",
    src: "/images/services/sports-mouth-guards.jpg",
    width: 512,
    height: 512,
    accordionId: "sports-mouth-guard",
  },
  {
    id: "whitening-trays",
    label: "Whitening Trays",
    src: "/images/services/whitening-trays.jpg",
    width: 512,
    height: 512,
    accordionId: "whitening-trays",
  },
  {
    id: "mdsa-sleep-apnoea-device",
    label: "MDSA Sleep Apnoea Device",
    src: "/images/services/mdsa-sleep-apnoea-device.jpg",
    width: 512,
    height: 512,
    accordionId: "sleep-apnoea-mdsa",
  },
  {
    id: "bruxism-splints",
    label: "Bruxism Splints",
    src: "/images/services/bruxism-splints.jpg",
    width: 512,
    height: 512,
    accordionId: "bruxism-splints",
  },
  {
    id: "implant-over-dentures",
    label: "Implant Overdentures",
    src: "/images/services/implant-over-dentures.jpg",
    width: 512,
    height: 512,
    accordionId: "implant-over-denture",
  },
  {
    id: "implant-bar-retained-over-dentures",
    label: "Implant Bar-Retained Overdentures",
    src: "/images/services/implant-bar-retained-over-dentures.jpg",
    width: 512,
    height: 512,
    accordionId: "implant-bar-retained-over-denture",
  },
] as const;

export const HOME_PROCESS_TILES: ProcessTileImage[] = [
  {
    id: "consultation-primary-impressions",
    label: "Consultation and Primary Impressions",
    src: "/images/process/consultation-and-primary-impressions.png",
    width: 512,
    height: 512,
    description:
      "We'll discuss your needs, assess your mouth and take initial impressions to begin planning your new dentures. This visit allows us to understand your goals and recommend the most suitable treatment for you.",
  },
  {
    id: "secondary-impression",
    label: "Secondary Impression",
    src: "/images/process/secondary-impressions.png",
    width: 512,
    height: 512,
    description:
      "More detailed impressions are taken using custom-made trays to accurately capture the shape of your mouth, helping us achieve a comfortable and precise fit for your new dentures.",
  },
  {
    id: "bite-registration",
    label: "Bite Registration",
    src: "/images/process/bite-registration.jpg",
    width: 512,
    height: 512,
    description:
      "We record how your upper and lower jaws meet, measure your vertical dimension, and select your preferred tooth shade to help achieve the correct bite, facial support and natural appearance for your new dentures.",
  },
  {
    id: "wax-teeth-try-in",
    label: "Wax Teeth Try-in",
    src: "/images/process/wax-teeth-try-in.jpg",
    width: 512,
    height: 512,
    description:
      "Your denture teeth are set in wax so you can preview the appearance, tooth position and bite before your dentures are finished. This gives us the opportunity to make any adjustments to ensure you're happy with the look and feel.",
  },
  {
    id: "denture-insert",
    label: "Denture Insert",
    src: "/images/process/denture-insertion.png",
    width: 512,
    height: 512,
    description:
      "Your completed dentures are fitted and carefully checked for comfort, fit, bite and appearance. We'll make any necessary adjustments and provide guidance on wearing and caring for your new dentures.",
  },
  {
    id: "post-insert-visit",
    label: "Post Insert Visit",
    src: "/images/process/post-denture-insert-visit.png",
    width: 512,
    height: 512,
    description:
      "A follow-up visit allows us to check how your new dentures are settling in and make any necessary adjustments for comfort, fit and bite. We'll also address any concerns you may have.",
  },
] as const;

/** Service tiles stored for future use (not shown on the home grid). */
export const EXTRA_SERVICE_TILES: ServiceTileImage[] = [
  {
    id: "metal-partials",
    label: "Metal Partials",
    src: "/images/services/metal-partials.jpg",
    width: 512,
    height: 512,
    accordionId: "cobalt-chrome-framework",
  },
] as const;

export const SERVICE_TILE_ASSET_DIRS = ["public/images/services"] as const;
export const PROCESS_TILE_ASSET_DIRS = ["public/images/process"] as const;

export const MAX_TILE_FILE_BYTES = 200_000;
export const MAX_TILE_DIMENSION_PX = 512;

export function getServiceTileById(id: string): ServiceTileImage | undefined {
  return [...HOME_SERVICE_TILES, ...EXTRA_SERVICE_TILES].find((tile) => tile.id === id);
}
