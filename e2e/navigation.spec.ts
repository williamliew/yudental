import { expect, test } from "@playwright/test";

test.describe("navigation", () => {
  test("desktop chrome: home page loads with nav links", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "Desktop Chrome", "Desktop Chrome only");

    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Dentures, relines & repairs in Wellington", level: 1 }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("mobile safari: hamburger menu opens and closes", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Safari", "Mobile Safari only");

    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Toggle menu" });
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();

    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about\/?$/);
  });

  test("smoke: key routes load", async ({ page }) => {
    const routes = ["/about/", "/denture-services/", "/contact/", "/book/", "/denture-referrals/"];
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("main#main-content")).toBeVisible();
    }
  });
});
