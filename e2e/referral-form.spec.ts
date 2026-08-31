import { expect, test } from "@playwright/test";

test.describe("referral form", () => {
  test("loads form with security check and required fields", async ({ page }) => {
    await page.goto("/denture-referrals/");

    await expect(page.getByRole("heading", { name: "Denture referrals", level: 1 })).toBeVisible();
    await expect(page.locator("form#referral-form")).toBeVisible();
    await expect(page.getByText("Security check")).toBeVisible();
    await expect(page.locator(".h-captcha")).toBeVisible();
    await expect(page.getByLabel("Dental surgery name")).toBeVisible();
    await expect(page.getByLabel("Dentist name")).toBeVisible();
    await expect(page.locator('input[type="file"]')).toHaveCount(0);
  });

  test("empty submit stays on page due to HTML5 validation", async ({ page }) => {
    await page.goto("/denture-referrals/");

    await page.getByRole("button", { name: "Submit referral" }).click();
    await expect(page).toHaveURL(/\/denture-referrals\/?$/);
    await expect(page.locator("form#referral-form")).toBeVisible();
  });
});
