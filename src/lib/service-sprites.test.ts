import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import {
  DENTURE_SERVICES_SPRITE_IDS,
  SERVICE_SPRITES,
  SERVICE_SPRITE_ASSET_DIR,
  SERVICE_SPRITE_ICON_SIZE,
  getServiceSpriteById,
} from "@/lib/service-sprites";
import { describe, expect, it } from "vitest";

const PROJECT_ROOT = path.resolve(import.meta.dirname, "../..");

function readPngDimensions(filePath: string): { width: number; height: number } {
  const buffer = readFileSync(filePath);
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

describe("service sprite assets", () => {
  it("ships one PNG per sprite id in the icons folder", () => {
    const iconDir = path.join(PROJECT_ROOT, SERVICE_SPRITE_ASSET_DIR);
    const files = readdirSync(iconDir).filter((name) => name.endsWith(".png"));

    expect(files).toHaveLength(SERVICE_SPRITES.length);
    for (const sprite of SERVICE_SPRITES) {
      expect(files).toContain(`${sprite.id}.png`);
    }
  });

  it("keeps sliced sprite files within a reasonable size budget", () => {
    for (const sprite of SERVICE_SPRITES) {
      const filePath = path.join(PROJECT_ROOT, "public", sprite.src.replace(/^\//, ""));
      const { size } = statSync(filePath);
      expect(size, `${sprite.src} size`).toBeLessThanOrEqual(100_000);
    }
  });

  it("exports square transparent icons at the configured size", () => {
    for (const sprite of SERVICE_SPRITES) {
      const filePath = path.join(PROJECT_ROOT, "public", sprite.src.replace(/^\//, ""));
      expect(existsSync(filePath), `missing asset ${sprite.src}`).toBe(true);

      const { width, height } = readPngDimensions(filePath);
      expect(width, `${sprite.src} width`).toBe(SERVICE_SPRITE_ICON_SIZE);
      expect(height, `${sprite.src} height`).toBe(SERVICE_SPRITE_ICON_SIZE);
    }
  });

  it("resolves every denture services sprite id", () => {
    for (const spriteId of DENTURE_SERVICES_SPRITE_IDS) {
      const sprite = getServiceSpriteById(spriteId);
      expect(sprite.id).toBe(spriteId);
    }
  });

  it("throws for unknown sprite ids", () => {
    expect(() => getServiceSpriteById("unknown" as never)).toThrow(/Unknown service sprite/);
  });
});
