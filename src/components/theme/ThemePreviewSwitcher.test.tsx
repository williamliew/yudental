import { ThemePreviewSwitcher } from "@/components/theme/ThemePreviewSwitcher";
import { DEFAULT_THEME_ID, THEME_STORAGE_KEY } from "@/lib/themes";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ThemePreviewSwitcher", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.dataset.theme = DEFAULT_THEME_ID;
  });

  it("renders all theme options in the select", () => {
    render(<ThemePreviewSwitcher />);

    const select = screen.getByLabelText("Preview colour theme");
    expect(select).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Clinical Blue" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Sage & Stone" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Steel Professional" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Warm Ivory" })).toBeInTheDocument();
  });

  it("updates data-theme and localStorage when selection changes", () => {
    render(<ThemePreviewSwitcher />);

    fireEvent.change(screen.getByLabelText("Preview colour theme"), {
      target: { value: "sage" },
    });

    expect(document.documentElement.dataset.theme).toBe("sage");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("sage");
    expect(screen.getByText(/calm, natural green-grey tones/i)).toBeInTheDocument();
  });

  it("shows the theme preview region label", () => {
    render(<ThemePreviewSwitcher />);
    expect(screen.getByRole("region", { name: "Theme preview controls" })).toBeInTheDocument();
    expect(screen.getByText("Theme preview")).toBeInTheDocument();
  });
});
