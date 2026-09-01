/** Steel Professional palette (locked site theme). WCAG AA contrast-checked. */
export type ThemePalette = {
  navy: string;
  navyDeep: string;
  teal: string;
  tealHover: string;
  tealDark: string;
  accentOnDark: string;
  greyDark: string;
  greyMid: string;
  surfaceMuted: string;
};

export const STEEL_PALETTE: ThemePalette = {
  navy: "#1a2f44",
  navyDeep: "#0f1c2a",
  teal: "#2d6a7a",
  tealHover: "#255a68",
  tealDark: "#1d4a56",
  accentOnDark: "#9dd4e8",
  greyDark: "#1e2a36",
  greyMid: "#4a5c6b",
  surfaceMuted: "#f1f4f7",
};

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
