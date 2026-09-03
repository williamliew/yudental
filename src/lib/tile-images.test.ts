import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import {
  EXTRA_SERVICE_TILES,
  HOME_PROCESS_TILES,
  HOME_SERVICE_TILES,
  MAX_TILE_DIMENSION_PX,
  MAX_TILE_FILE_BYTES,
  PROCESS_TILE_ASSET_DIRS,
  SERVICE_TILE_ASSET_DIRS,
  type TileImage,
} from "@/lib/tile-images";
import { describe, expect, it } from "vitest";

const PROJECT_ROOT = path.resolve(import.meta.dirname, "../..");

function readImageDimensions(filePath: string): { width: number; height: number } {
  const buffer = readFileSync(filePath);

  if (buffer[0] === 0x89 && buffer[1] === 0x50) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        break;
      }

      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);

      if (marker === 0xc0 || marker === 0xc2) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }

      offset += 2 + length;
    }
  }

  throw new Error(`Could not read image dimensions: ${filePath}`);
}

function assertTileAsset(tile: TileImage) {
  const filePath = path.join(PROJECT_ROOT, "public", tile.src.replace(/^\//, ""));
  expect(existsSync(filePath), `missing asset ${tile.src}`).toBe(true);

  const { size } = statSync(filePath);
  expect(size, `${tile.src} exceeds ${MAX_TILE_FILE_BYTES} bytes`).toBeLessThanOrEqual(
    MAX_TILE_FILE_BYTES,
  );

  const { width, height } = readImageDimensions(filePath);
  expect(width, `${tile.src} width`).toBeLessThanOrEqual(MAX_TILE_DIMENSION_PX);
  expect(height, `${tile.src} height`).toBeLessThanOrEqual(MAX_TILE_DIMENSION_PX);
}

function assertDirectoryAssets(relativeDir: string) {
  const absoluteDir = path.join(PROJECT_ROOT, relativeDir);
  const files = readdirSync(absoluteDir).filter((name) => /\.(png|jpe?g)$/i.test(name));

  for (const fileName of files) {
    const filePath = path.join(absoluteDir, fileName);
    const { size } = statSync(filePath);
    expect(size, `${relativeDir}/${fileName} exceeds budget`).toBeLessThanOrEqual(
      MAX_TILE_FILE_BYTES,
    );

    const { width, height } = readImageDimensions(filePath);
    expect(width, `${relativeDir}/${fileName} width`).toBeLessThanOrEqual(MAX_TILE_DIMENSION_PX);
    expect(height, `${relativeDir}/${fileName} height`).toBeLessThanOrEqual(MAX_TILE_DIMENSION_PX);
  }
}

describe("tile image assets", () => {
  it("ships referenced home service tiles within size and dimension limits", () => {
    for (const tile of HOME_SERVICE_TILES) {
      assertTileAsset(tile);
    }
  });

  it("links each home service tile to a denture services accordion", () => {
    for (const tile of HOME_SERVICE_TILES) {
      expect(tile.accordionId, `${tile.id} accordionId`).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("ships referenced home process tiles within size and dimension limits", () => {
    for (const tile of HOME_PROCESS_TILES) {
      assertTileAsset(tile);
    }
  });

  it("ships extra service tiles within size and dimension limits", () => {
    for (const tile of EXTRA_SERVICE_TILES) {
      assertTileAsset(tile);
    }
  });

  it("keeps all files in tile asset folders within budget", () => {
    for (const dir of SERVICE_TILE_ASSET_DIRS) {
      assertDirectoryAssets(dir);
    }
    for (const dir of PROCESS_TILE_ASSET_DIRS) {
      assertDirectoryAssets(dir);
    }
  });
});
