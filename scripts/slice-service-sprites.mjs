import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "public/images/sprites/icons");

const DARK_SHEET = {
  path: path.join(projectRoot, "public/images/sprites/dental-service-sprites-dark-bg.png"),
  width: 1024,
  height: 682,
  rowCols: [6, 4],
  background: "black",
};

const WHITE_SHEET = {
  path: path.join(projectRoot, "public/images/sprites/dental-service-sprites-white-bg.png"),
  width: 1024,
  height: 560,
  rowCols: [4, 3],
  background: "white",
};

/** @type {{ id: string; row: number; col: number; sheet?: typeof DARK_SHEET }[]} */
const SPRITES = [
  { id: "full-dentures", row: 0, col: 0 },
  { id: "relines-and-repairs", row: 0, col: 1 },
  { id: "sports-mouth-guard", row: 0, col: 2 },
  {
    id: "partial-denture",
    row: 0,
    col: 3,
    sheet: WHITE_SHEET,
  },
  { id: "whitening-trays", row: 0, col: 4 },
  { id: "bruxism-splints", row: 0, col: 5 },
  { id: "cobalt-chrome-framework", row: 1, col: 0 },
  { id: "implant-over-denture", row: 1, col: 1 },
  { id: "implant-bar-retained-over-denture", row: 1, col: 2 },
  { id: "sleep-apnoea-mdsa", row: 1, col: 3 },
];

const PADDING = 16;
const OUTPUT_SIZE = 256;
const BLACK_THRESHOLD = 40;
const WHITE_THRESHOLD = 245;
const WHITE_BACKGROUND = { r: 255, g: 255, b: 255 };

function removeBackground({ data, info, mode }) {
  const { width, height, channels } = info;
  const output = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i += 1) {
    const sourceIndex = i * channels;
    const targetIndex = i * 4;
    const r = data[sourceIndex];
    const g = data[sourceIndex + 1];
    const b = data[sourceIndex + 2];

    const isBackground =
      mode === "white"
        ? r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD
        : r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;

    output[targetIndex] = r;
    output[targetIndex + 1] = g;
    output[targetIndex + 2] = b;
    output[targetIndex + 3] = isBackground ? 0 : 255;
  }

  return output;
}

async function sliceSprite({ id, row, col, sheet = DARK_SHEET }) {
  const rowHeight = sheet.height / sheet.rowCols.length;
  const cols = sheet.rowCols[row];
  const cellWidth = sheet.width / cols;
  const left = Math.round(col * cellWidth);
  const top = Math.round(row * rowHeight);
  const width = Math.round(cellWidth);
  const height = Math.round(rowHeight);

  const cropped = await sharp(sheet.path).extract({ left, top, width, height }).png().toBuffer();

  const { data, info } = await sharp(cropped)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgba = removeBackground({ data, info, mode: sheet.background });
  const innerSize = OUTPUT_SIZE - PADDING * 2;

  await sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim()
    .resize(innerSize, innerSize, {
      fit: "contain",
      background: { ...WHITE_BACKGROUND, alpha: 1 },
    })
    .extend({
      top: PADDING,
      bottom: PADDING,
      left: PADDING,
      right: PADDING,
      background: { ...WHITE_BACKGROUND, alpha: 1 },
    })
    .flatten({ background: WHITE_BACKGROUND })
    .png()
    .toFile(path.join(outputDir, `${id}.png`));
}

await mkdir(outputDir, { recursive: true });

for (const sprite of SPRITES) {
  await sliceSprite(sprite);
  console.log(`wrote ${sprite.id}.png`);
}
