/**
 * Regenerate public favicons from the official GEI logo mark.
 * Crops to the monogram (readable at 16–48px) and writes PNG + ICO sizes.
 *
 * Usage: node scripts/generate-favicons.mjs
 */
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/gei-logo.jpg");
const outDir = join(root, "public");

/** Crop window on the 1024² logo — monogram only, no side borders or tagline. */
const CROP = { left: 225, top: 72, width: 574, height: 574 };

const pngOutputs = [
  { file: "favicon-16x16.png", size: 16 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "favicon.png", size: 32 },
  { file: "favicon-48x48.png", size: 48 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
];

const cropped = sharp(src).extract(CROP);

for (const { file, size } of pngOutputs) {
  await cropped
    .clone()
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(outDir, file));
  console.log(`wrote ${file} (${size}×${size})`);
}

const icoSizes = [16, 32, 48];
const ico48 = join(outDir, ".favicon-48-tmp.png");
await cropped.clone().resize(48, 48).png().toFile(ico48);

execFileSync(
  process.platform === "win32" ? "python" : "python3",
  [
    "-c",
    `
from PIL import Image
img = Image.open(${JSON.stringify(ico48)}).convert("RGBA")
img.save(
  ${JSON.stringify(join(outDir, "favicon.ico"))},
  format="ICO",
  sizes=[(16, 16), (32, 32), (48, 48)],
)
`,
  ],
  { stdio: "inherit" },
);

await import("node:fs/promises").then((fs) => fs.unlink(ico48));

console.log("wrote favicon.ico (16, 32, 48)");
