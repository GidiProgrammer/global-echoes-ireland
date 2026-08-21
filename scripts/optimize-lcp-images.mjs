import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src/assets/responsive");

const jobs = [
  {
    src: "src/assets/new-hero.jpg",
    slug: "new-hero",
    widths: [640, 960, 1280, 1822],
  },
  {
    src: "src/assets/culture-wellbeing-drumming.jpg",
    slug: "culture-wellbeing-drumming",
    widths: [640, 960, 1280, 1536],
  },
];

await mkdir(outDir, { recursive: true });

for (const job of jobs) {
  const input = path.join(root, job.src);
  const meta = await sharp(input).metadata();
  const nativeW = meta.width ?? job.widths.at(-1);

  for (const width of job.widths) {
    if (width > nativeW) continue;
    const pipeline = () =>
      sharp(input).rotate().resize({
        width,
        withoutEnlargement: true,
      });

    const avif = await pipeline()
      .avif({ quality: 48, effort: 4 })
      .toBuffer();
    const webp = await pipeline()
      .webp({ quality: 74 })
      .toBuffer();
    const jpeg = await pipeline()
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();

    await writeFile(path.join(outDir, `${job.slug}-${width}.avif`), avif);
    await writeFile(path.join(outDir, `${job.slug}-${width}.webp`), webp);
    await writeFile(path.join(outDir, `${job.slug}-${width}.jpg`), jpeg);

    const kb = (n) => `${(n.length / 1024).toFixed(1)}kb`;
    console.log(
      `${job.slug} ${width}w  avif ${kb(avif)}  webp ${kb(webp)}  jpg ${kb(jpeg)}`,
    );
  }
}
