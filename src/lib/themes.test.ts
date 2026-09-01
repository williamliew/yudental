import { THEME_OPTIONS, WHITE, contrastRatio, meetsWcagAaNormalText } from "@/lib/themes";

describe("theme palettes", () => {
  for (const theme of THEME_OPTIONS) {
    describe(theme.label, () => {
      it("meets WCAG AA for body text on white", () => {
        expect(meetsWcagAaNormalText(theme.palette.greyDark, WHITE)).toBe(true);
      });

      it("meets WCAG AA for secondary text on white", () => {
        expect(meetsWcagAaNormalText(theme.palette.greyMid, WHITE)).toBe(true);
      });

      it("meets WCAG AA for white text on navy header", () => {
        expect(meetsWcagAaNormalText(WHITE, theme.palette.navy)).toBe(true);
      });

      it("meets WCAG AA for white text on navy-deep overlays", () => {
        expect(meetsWcagAaNormalText(WHITE, theme.palette.navyDeep)).toBe(true);
      });

      it("meets WCAG AA for white text on primary buttons", () => {
        expect(meetsWcagAaNormalText(WHITE, theme.palette.teal)).toBe(true);
      });

      it("meets WCAG AA for link colour on white", () => {
        expect(meetsWcagAaNormalText(theme.palette.teal, WHITE)).toBe(true);
      });

      it("documents contrast ratios for debugging", () => {
        expect(contrastRatio(theme.palette.greyDark, WHITE)).toBeGreaterThanOrEqual(4.5);
        expect(contrastRatio(theme.palette.teal, WHITE)).toBeGreaterThanOrEqual(4.5);
        expect(contrastRatio(WHITE, theme.palette.teal)).toBeGreaterThanOrEqual(4.5);
      });
    });
  }
});
