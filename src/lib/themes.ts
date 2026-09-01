export const THEME_STORAGE_KEY = "yu-dental-theme-preview";

export const DEFAULT_THEME_ID = "clinical";

export type ThemeId = "clinical" | "sage" | "steel" | "ivory";

export type ThemePalette = {
  navy: string;
  navyDeep: string;
  teal: string;
  tealHover: string;
  tealDark: string;
  greyDark: string;
  greyMid: string;
  surfaceMuted: string;
};

export type ThemeOption = {
  id: ThemeId;
  label: string;
  description: string;
  palette: ThemePalette;
};

/** WCAG AA contrast-checked palettes (4.5:1 for text and button pairs). */
export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "clinical",
    label: "Clinical Blue",
    description: "Corporate dental lab; navy and teal",
    palette: {
      navy: "#003b5c",
      navyDeep: "#002a45",
      teal: "#007a73",
      tealHover: "#006860",
      tealDark: "#00564f",
      greyDark: "#2d3748",
      greyMid: "#4a5568",
      surfaceMuted: "#f0f2f4",
    },
  },
  {
    id: "sage",
    label: "Sage & Stone",
    description: "Calm, natural green-grey tones",
    palette: {
      navy: "#2f4f4f",
      navyDeep: "#1e3636",
      teal: "#3d7a62",
      tealHover: "#326654",
      tealDark: "#285242",
      greyDark: "#1f2937",
      greyMid: "#4b5c55",
      surfaceMuted: "#f4f6f3",
    },
  },
  {
    id: "steel",
    label: "Steel Professional",
    description: "Cool, modern clinic blue-grey",
    palette: {
      navy: "#1a2f44",
      navyDeep: "#0f1c2a",
      teal: "#2d6a7a",
      tealHover: "#255a68",
      tealDark: "#1d4a56",
      greyDark: "#1e2a36",
      greyMid: "#4a5c6b",
      surfaceMuted: "#f1f4f7",
    },
  },
  {
    id: "ivory",
    label: "Warm Ivory",
    description: "Welcoming boutique warmth",
    palette: {
      navy: "#3d4f5f",
      navyDeep: "#2a3640",
      teal: "#4a6859",
      tealHover: "#3f5a4c",
      tealDark: "#354c42",
      greyDark: "#2c3338",
      greyMid: "#5c656d",
      surfaceMuted: "#faf8f5",
    },
  },
];

export const THEME_IDS = THEME_OPTIONS.map((theme) => theme.id);

export function isThemeId(value: string): value is ThemeId {
  return THEME_IDS.includes(value as ThemeId);
}

export function getThemeById(id: ThemeId): ThemeOption {
  const theme = THEME_OPTIONS.find((option) => option.id === id);
  if (!theme) {
    throw new Error(`Unknown theme id: ${id}`);
  }
  return theme;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalised = hex.replace("#", "");
  const value =
    normalised.length === 3
      ? normalised
          .split("")
          .map((char) => char + char)
          .join("")
      : normalised;

  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ];
}

function relativeLuminance(hex: string): number {
  const [red, green, blue] = hexToRgb(hex).map((channel) => {
    const srgb = channel / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

export function contrastRatio(foreground: string, background: string): number {
  const foregroundLuminance = relativeLuminance(foreground);
  const backgroundLuminance = relativeLuminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

export const WHITE = "#ffffff";

export function meetsWcagAaNormalText(foreground: string, background: string): boolean {
  return contrastRatio(foreground, background) >= 4.5;
}
