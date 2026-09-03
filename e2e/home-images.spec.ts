import { expect, test } from "@playwright/test";

const MAX_TILE_BYTES = 200_000;
const MAX_HOME_TILE_PAYLOAD_BYTES = 1_200_000;

test.describe("home page tile images", () => {
  test("service and process images stay within transfer budget", async ({ page }) => {
    const imageResponses: { url: string; size: number }[] = [];

    page.on("response", async (response) => {
      if (response.request().resourceType() !== "image") {
        return;
      }

      const url = response.url();
      if (!/\/images\/(services|process)\//.test(url)) {
        return;
      }

      const body = await response.body();
      imageResponses.push({ url, size: body.byteLength });
    });

    await page.goto("/");
    await page.getByRole("heading", { name: "Denture Services" }).scrollIntoViewIfNeeded();

    expect(imageResponses.length).toBeGreaterThanOrEqual(14);

    let totalBytes = 0;
    for (const image of imageResponses) {
      expect(image.size, `${image.url} exceeds ${MAX_TILE_BYTES} bytes`).toBeLessThanOrEqual(
        MAX_TILE_BYTES,
      );
      totalBytes += image.size;
    }

    expect(totalBytes).toBeLessThanOrEqual(MAX_HOME_TILE_PAYLOAD_BYTES);
  });
});
