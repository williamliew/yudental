export type ServiceSpriteId =
  | "full-dentures"
  | "relines-and-repairs"
  | "sports-mouth-guard"
  | "partial-denture"
  | "whitening-trays"
  | "bruxism-splints"
  | "cobalt-chrome-framework"
  | "implant-over-denture"
  | "implant-bar-retained-over-denture"
  | "sleep-apnoea-mdsa";

export type ServiceSprite = {
  id: ServiceSpriteId;
  label: string;
  src: string;
  width: number;
  height: number;
  row: number;
  col: number;
};

export const SERVICE_SPRITE_SHEET = {
  src: "/images/sprites/dental-service-sprites-dark-bg.png",
  width: 1024,
  height: 682,
  rowCols: [6, 4],
  rows: 2,
} as const;

export const SERVICE_SPRITE_ICON_SIZE = 256;

export const SERVICE_SPRITE_ASSET_DIR = "public/images/sprites/icons" as const;

export const SERVICE_SPRITES: ServiceSprite[] = [
  {
    id: "full-dentures",
    label: "Full Dentures",
    src: "/images/sprites/icons/full-dentures.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 0,
    col: 0,
  },
  {
    id: "relines-and-repairs",
    label: "Relines and Repairs",
    src: "/images/sprites/icons/relines-and-repairs.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 0,
    col: 1,
  },
  {
    id: "sports-mouth-guard",
    label: "Sports Mouth Guards",
    src: "/images/sprites/icons/sports-mouth-guard.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 0,
    col: 2,
  },
  {
    id: "partial-denture",
    label: "Partial Dentures",
    src: "/images/sprites/icons/partial-denture.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 0,
    col: 3,
  },
  {
    id: "whitening-trays",
    label: "Whitening Trays",
    src: "/images/sprites/icons/whitening-trays.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 0,
    col: 4,
  },
  {
    id: "bruxism-splints",
    label: "Bruxism / TMJ Splints",
    src: "/images/sprites/icons/bruxism-splints.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 0,
    col: 5,
  },
  {
    id: "cobalt-chrome-framework",
    label: "Cobalt Chrome Frameworks",
    src: "/images/sprites/icons/cobalt-chrome-framework.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 1,
    col: 0,
  },
  {
    id: "implant-over-denture",
    label: "Implant Overdentures",
    src: "/images/sprites/icons/implant-over-denture.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 1,
    col: 1,
  },
  {
    id: "implant-bar-retained-over-denture",
    label: "Implant Bar-Retained Overdentures",
    src: "/images/sprites/icons/implant-bar-retained-over-denture.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 1,
    col: 2,
  },
  {
    id: "sleep-apnoea-mdsa",
    label: "Sleep Apnoea Device (MDSA)",
    src: "/images/sprites/icons/sleep-apnoea-mdsa.png",
    width: SERVICE_SPRITE_ICON_SIZE,
    height: SERVICE_SPRITE_ICON_SIZE,
    row: 1,
    col: 3,
  },
] as const;

/** Sprites wired on the patient denture services accordions. */
export const DENTURE_SERVICES_SPRITE_IDS: ServiceSpriteId[] = [
  "full-dentures",
  "partial-denture",
  "cobalt-chrome-framework",
  "implant-over-denture",
  "implant-bar-retained-over-denture",
  "relines-and-repairs",
  "sports-mouth-guard",
  "sleep-apnoea-mdsa",
  "whitening-trays",
  "bruxism-splints",
];

export function getServiceSpriteById(id: ServiceSpriteId): ServiceSprite {
  const sprite = SERVICE_SPRITES.find((entry) => entry.id === id);
  if (!sprite) {
    throw new Error(`Unknown service sprite: ${id}`);
  }
  return sprite;
}
