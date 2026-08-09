import { Header } from "@/components/layout/Header";
import { NAV_ITEMS } from "@/lib/nav";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  it("renders all primary navigation links", () => {
    render(<Header />);

    for (const item of NAV_ITEMS) {
      const link = screen.getByRole("link", { name: item.label });
      const href = link.getAttribute("href") ?? "";
      const normalised = href === "/" ? "/" : href.replace(/\/$/, "");
      const expected = item.href === "/" ? "/" : item.href.replace(/\/$/, "");
      expect(normalised).toBe(expected);
    }
  });
});
