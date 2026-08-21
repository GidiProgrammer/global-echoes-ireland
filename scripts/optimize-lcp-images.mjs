import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src/assets/responsive");

function pickWidths(native, candidates) {
  const out = candidates.filter((w) => w <= native);
  const last = out.at(-1) ?? 0;
  if (native - last > 80) out.push(native);
  if (out.length === 0) out.push(native);
  return out;
}

const jobs = [
  { src: "src/assets/new-hero.jpg", slug: "new-hero", widths: pickWidths(1024, [640, 960, 1024]) },
  {
    src: "src/assets/culture-wellbeing-drumming.jpg",
    slug: "culture-wellbeing-drumming",
    widths: pickWidths(1536, [640, 960, 1280, 1536]),
  },
  { src: "src/assets/gei-logo.jpg", slug: "gei-logo", widths: [128, 256] },
  { src: "src/assets/community-care-culture.jpg", slug: "community-care-culture", widths: pickWidths(1024, [640, 960, 1024]) },
  { src: "src/assets/schools-education.jpg", slug: "schools-education", widths: pickWidths(1600, [640, 960, 1280]) },
  { src: "src/assets/carehomes.jpg", slug: "carehomes", widths: pickWidths(1600, [640, 960, 1280]) },
  { src: "src/assets/community-wellbeing.jpg", slug: "community-wellbeing", widths: pickWidths(1600, [640, 960, 1280]) },
  { src: "src/assets/festivals-and-events.jpg", slug: "festivals-and-events", widths: pickWidths(1024, [640, 960, 1024]) },
  { src: "src/assets/drjohn.jpg", slug: "drjohn", widths: pickWidths(1600, [480, 800, 1200]) },
  { src: "src/assets/founder-natalie.jpg", slug: "founder-natalie", widths: pickWidths(768, [480, 768]) },
  { src: "src/assets/founder-emmanuel.jpg", slug: "founder-emmanuel", widths: pickWidths(819, [480, 800]) },
  { src: "src/assets/caoimhe-doherty.jpg", slug: "caoimhe-doherty", widths: pickWidths(682, [480, 682]) },
  { src: "src/assets/faris-amin.jpg", slug: "faris-amin", widths: pickWidths(1600, [480, 800, 1200]) },
  { src: "src/assets/photo1.jpg", slug: "photo1", widths: pickWidths(1824, [640, 960, 1280, 1824]) },
  { src: "src/assets/stay-healthy-with-the-beat.jpg", slug: "stay-healthy-with-the-beat", widths: pickWidths(723, [480, 723]) },
  { src: "src/assets/hero-care-drumming.jpg", slug: "hero-care-drumming", widths: pickWidths(1200, [640, 960, 1200]) },
  { src: "src/assets/celtafrik-quartet.png", slug: "celtafrik-quartet", widths: pickWidths(1200, [640, 960, 1200]) },
  { src: "src/assets/globalroutebrothers.jpg", slug: "globalroutebrothers", widths: pickWidths(1600, [960, 1280, 1600]) },
  { src: "src/assets/nathan-harllels.jpg", slug: "nathan-harllels", widths: pickWidths(1600, [480, 800, 1200]) },
  { src: "src/assets/video2-poster.jpg", slug: "video2-poster", widths: pickWidths(848, [640, 848]) },
  { src: "src/assets/video3-poster.jpg", slug: "video3-poster", widths: pickWidths(848, [640, 848]) },
  { src: "src/assets/video4-poster.jpg", slug: "video4-poster", widths: pickWidths(478, [478]) },
  { src: "src/assets/video5-poster.jpg", slug: "video5-poster", widths: pickWidths(476, [476]) },
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

    const avif = await pipeline().avif({ quality: 48, effort: 4 }).toBuffer();
    const webp = await pipeline().webp({ quality: 74 }).toBuffer();
    const jpeg = await pipeline().jpeg({ quality: 80, mozjpeg: true }).toBuffer();

    await writeFile(path.join(outDir, `${job.slug}-${width}.avif`), avif);
    await writeFile(path.join(outDir, `${job.slug}-${width}.webp`), webp);
    await writeFile(path.join(outDir, `${job.slug}-${width}.jpg`), jpeg);

    const kb = (n) => `${(n.length / 1024).toFixed(1)}kb`;
    console.log(
      `${job.slug} ${width}w  avif ${kb(avif)}  webp ${kb(webp)}  jpg ${kb(jpeg)}`,
    );
  }
}
