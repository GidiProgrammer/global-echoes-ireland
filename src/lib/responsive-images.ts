import hero640Avif from "@/assets/responsive/new-hero-640.avif";
import hero960Avif from "@/assets/responsive/new-hero-960.avif";
import hero1280Avif from "@/assets/responsive/new-hero-1280.avif";
import hero1822Avif from "@/assets/responsive/new-hero-1822.avif";
import hero640Webp from "@/assets/responsive/new-hero-640.webp";
import hero960Webp from "@/assets/responsive/new-hero-960.webp";
import hero1280Webp from "@/assets/responsive/new-hero-1280.webp";
import hero1822Webp from "@/assets/responsive/new-hero-1822.webp";
import hero640Jpg from "@/assets/responsive/new-hero-640.jpg";
import hero960Jpg from "@/assets/responsive/new-hero-960.jpg";
import hero1280Jpg from "@/assets/responsive/new-hero-1280.jpg";
import hero1822Jpg from "@/assets/responsive/new-hero-1822.jpg";

import circle640Avif from "@/assets/responsive/culture-wellbeing-drumming-640.avif";
import circle960Avif from "@/assets/responsive/culture-wellbeing-drumming-960.avif";
import circle1280Avif from "@/assets/responsive/culture-wellbeing-drumming-1280.avif";
import circle1536Avif from "@/assets/responsive/culture-wellbeing-drumming-1536.avif";
import circle640Webp from "@/assets/responsive/culture-wellbeing-drumming-640.webp";
import circle960Webp from "@/assets/responsive/culture-wellbeing-drumming-960.webp";
import circle1280Webp from "@/assets/responsive/culture-wellbeing-drumming-1280.webp";
import circle1536Webp from "@/assets/responsive/culture-wellbeing-drumming-1536.webp";
import circle640Jpg from "@/assets/responsive/culture-wellbeing-drumming-640.jpg";
import circle960Jpg from "@/assets/responsive/culture-wellbeing-drumming-960.jpg";
import circle1280Jpg from "@/assets/responsive/culture-wellbeing-drumming-1280.jpg";
import circle1536Jpg from "@/assets/responsive/culture-wellbeing-drumming-1536.jpg";

function srcset(entries: Array<readonly [string, number]>) {
  return entries.map(([url, width]) => `${url} ${width}w`).join(", ");
}

export const heroMasthead = {
  width: 1822,
  height: 863,
  sizes: "100vw",
  src: hero1280Jpg,
  avifSrcSet: srcset([
    [hero640Avif, 640],
    [hero960Avif, 960],
    [hero1280Avif, 1280],
    [hero1822Avif, 1822],
  ]),
  webpSrcSet: srcset([
    [hero640Webp, 640],
    [hero960Webp, 960],
    [hero1280Webp, 1280],
    [hero1822Webp, 1822],
  ]),
  jpegSrcSet: srcset([
    [hero640Jpg, 640],
    [hero960Jpg, 960],
    [hero1280Jpg, 1280],
    [hero1822Jpg, 1822],
  ]),
  preload: {
    href: hero960Avif,
    type: "image/avif",
    imageSrcSet: srcset([
      [hero640Avif, 640],
      [hero960Avif, 960],
      [hero1280Avif, 1280],
      [hero1822Avif, 1822],
    ]),
    imageSizes: "100vw",
  },
} as const;

export const cultureWellbeingDrumming = {
  width: 1536,
  height: 1024,
  sizes: "(min-width: 768px) 50vw, 100vw",
  src: circle960Jpg,
  avifSrcSet: srcset([
    [circle640Avif, 640],
    [circle960Avif, 960],
    [circle1280Avif, 1280],
    [circle1536Avif, 1536],
  ]),
  webpSrcSet: srcset([
    [circle640Webp, 640],
    [circle960Webp, 960],
    [circle1280Webp, 1280],
    [circle1536Webp, 1536],
  ]),
  jpegSrcSet: srcset([
    [circle640Jpg, 640],
    [circle960Jpg, 960],
    [circle1280Jpg, 1280],
    [circle1536Jpg, 1536],
  ]),
} as const;
