import { STEEL_PALETTE, WHITE, contrastRatio, meetsWcagAaNormalText } from "@/lib/themes";

describe("Steel Professional palette", () => {
  const palette = STEEL_PALETTE;

  it("meets WCAG AA for body text on white", () => {
    expect(meetsWcagAaNormalText(palette.greyDark, WHITE)).toBe(true);
  });

  it("meets WCAG AA for secondary text on white", () => {
    expect(meetsWcagAaNormalText(palette.greyMid, WHITE)).toBe(true);
  });

  it("meets WCAG AA for white text on navy header", () => {
    expect(meetsWcagAaNormalText(WHITE, palette.navy)).toBe(true);
  });

  it("meets WCAG AA for white text on navy-deep overlays", () => {
    expect(meetsWcagAaNormalText(WHITE, palette.navyDeep)).toBe(true);
  });

  it("meets WCAG AA for white text on primary buttons", () => {
    expect(meetsWcagAaNormalText(WHITE, palette.teal)).toBe(true);
  });

  it("meets WCAG AA for link colour on white", () => {
    expect(meetsWcagAaNormalText(palette.teal, WHITE)).toBe(true);
  });

  it("meets WCAG AA for accent-on-dark on navy", () => {
    expect(meetsWcagAaNormalText(palette.accentOnDark, palette.navy)).toBe(true);
  });

  it("meets WCAG AA for accent-on-dark on navy-deep", () => {
    expect(meetsWcagAaNormalText(palette.accentOnDark, palette.navyDeep)).toBe(true);
  });

  it("meets WCAG AA for white link hover on navy", () => {
    expect(meetsWcagAaNormalText(WHITE, palette.navy)).toBe(true);
  });

  it("documents contrast ratios for debugging", () => {
    expect(contrastRatio(palette.greyDark, WHITE)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.teal, WHITE)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(WHITE, palette.teal)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.accentOnDark, palette.navy)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.accentOnDark, palette.navyDeep)).toBeGreaterThanOrEqual(4.5);
  });
});
