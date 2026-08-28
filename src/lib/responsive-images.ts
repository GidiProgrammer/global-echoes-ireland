const files = import.meta.glob("../assets/responsive/*.{avif,webp,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export type PictureImage = {
  width: number;
  height: number;
  sizes: string;
  src: string;
  avifSrcSet: string;
  webpSrcSet: string;
  jpegSrcSet: string;
};

function srcset(entries: Array<readonly [string, number]>) {
  return entries
    .sort((a, b) => a[1] - b[1])
    .map(([url, width]) => `${url} ${width}w`)
    .join(", ");
}

function picture(
  slug: string,
  meta: { width: number; height: number; sizes: string; fallback: number },
): PictureImage {
  const avif: Array<[string, number]> = [];
  const webp: Array<[string, number]> = [];
  const jpeg: Array<[string, number]> = [];
  const re = new RegExp(`/${slug}-(\\d+)\\.(avif|webp|jpg)$`);

  for (const [file, url] of Object.entries(files)) {
    const match = file.replaceAll("\\", "/").match(re);
    if (!match) continue;
    const width = Number(match[1]);
    const ext = match[2];
    if (ext === "avif") avif.push([url, width]);
    if (ext === "webp") webp.push([url, width]);
    if (ext === "jpg") jpeg.push([url, width]);
  }

  if (!jpeg.length) {
    throw new Error(`No responsive JPEGs for ${slug}`);
  }

  const fallback =
    jpeg.find(([, w]) => w === meta.fallback)?.[0] ??
    jpeg.sort((a, b) => a[1] - b[1])[Math.min(1, jpeg.length - 1)][0];

  return {
    width: meta.width,
    height: meta.height,
    sizes: meta.sizes,
    src: fallback,
    avifSrcSet: srcset(avif),
    webpSrcSet: srcset(webp),
    jpegSrcSet: srcset(jpeg),
  };
}

const FULL = "100vw";
const HALF = "(min-width: 768px) 50vw, 100vw";
const CARD = "(min-width: 768px) 42vw, 100vw";
const PORTRAIT = "(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw";
const FEATURED = "(min-width: 768px) 40vw, 100vw";

function srcsetHref(srcsetValue: string, minWidth: number) {
  const parts = srcsetValue.split(", ").map((part) => {
    const [url, descriptor] = part.split(" ");
    return { url, width: Number(descriptor.replace("w", "")) };
  });
  return (
    parts.find((part) => part.width >= minWidth)?.url ?? parts.at(-1)?.url ?? ""
  );
}

const heroPicture = picture("new-hero", {
  width: 1024,
  height: 576,
  sizes: FULL,
  fallback: 960,
});

export const heroMasthead = heroPicture;

export const heroPreload = {
  href: srcsetHref(heroPicture.avifSrcSet, 640),
  type: "image/avif" as const,
  imageSrcSet: heroPicture.avifSrcSet,
  imageSizes: FULL,
};

export const logoMark = picture("gei-logo", {
  width: 256,
  height: 256,
  sizes: "4rem",
  fallback: 128,
});

export const communityCareCulture = picture("community-care-culture", {
  width: 1024,
  height: 682,
  sizes: HALF,
  fallback: 960,
});

export const schoolsEducation = picture("schools-education", {
  width: 1600,
  height: 1066,
  sizes: CARD,
  fallback: 960,
});

export const careHomes = picture("carehomes", {
  width: 1600,
  height: 938,
  sizes: CARD,
  fallback: 960,
});

export const communityWellbeing = picture("community-wellbeing", {
  width: 1600,
  height: 1066,
  sizes: CARD,
  fallback: 960,
});

export const festivalsEvents = picture("festivals-and-events", {
  width: 1024,
  height: 681,
  sizes: CARD,
  fallback: 960,
});

export const cultureWellbeingDrumming = picture("culture-wellbeing-drumming", {
  width: 1536,
  height: 1024,
  sizes: HALF,
  fallback: 960,
});

export const drJohn = picture("drjohn", {
  width: 1600,
  height: 1068,
  sizes: FEATURED,
  fallback: 800,
});

export const natalieRodgers = picture("founder-natalie", {
  width: 768,
  height: 1024,
  sizes: PORTRAIT,
  fallback: 480,
});

export const emmanuelSone = picture("founder-emmanuel", {
  width: 819,
  height: 1024,
  sizes: PORTRAIT,
  fallback: 480,
});

export const caoimheDoherty = picture("caoimhe-doherty", {
  width: 682,
  height: 1024,
  sizes: PORTRAIT,
  fallback: 480,
});

export const farisAmin = picture("faris-amin", {
  width: 1600,
  height: 1550,
  sizes: PORTRAIT,
  fallback: 800,
});

export const photo1 = picture("photo1", {
  width: 1824,
  height: 840,
  sizes: FULL,
  fallback: 1280,
});

export const stayHealthy = picture("stay-healthy-with-the-beat", {
  width: 723,
  height: 1024,
  sizes: FEATURED,
  fallback: 723,
});

export const heroCareDrumming = picture("hero-care-drumming", {
  width: 1200,
  height: 900,
  sizes: FULL,
  fallback: 960,
});

export const celtafrikQuartet = picture("celtafrik-quartet", {
  width: 1200,
  height: 900,
  sizes: FEATURED,
  fallback: 960,
});

export const globalRouteBrothers = picture("globalroutebrothers", {
  width: 1600,
  height: 1123,
  sizes: FULL,
  fallback: 1280,
});

export const nathanHarllels = picture("nathan-harllels", {
  width: 1600,
  height: 1200,
  sizes: FEATURED,
  fallback: 800,
});

export const video2Poster = picture("video2-poster", {
  width: 848,
  height: 478,
  sizes: CARD,
  fallback: 640,
});

export const video3Poster = picture("video3-poster", {
  width: 848,
  height: 480,
  sizes: CARD,
  fallback: 640,
});

export const video4Poster = picture("video4-poster", {
  width: 478,
  height: 850,
  sizes: CARD,
  fallback: 478,
});

export const video5Poster = picture("video5-poster", {
  width: 476,
  height: 850,
  sizes: CARD,
  fallback: 476,
});
