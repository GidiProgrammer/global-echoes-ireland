/** Production site origin for canonical URLs, sitemap, and social cards. */
export const SITE_ORIGIN = "https://www.globalechoesireland.ie";

export const SITE_NAME = "Global Echoes Ireland";

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function pageHead({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  preloadImages = [],
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  preloadImages?: Array<{
    href: string;
    type?: string;
    imageSrcSet?: string;
    imageSizes?: string;
  }>;
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(ogImage);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE_NAME} logo and brand mark` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      ...preloadImages.map((asset) => ({
        rel: "preload",
        as: "image",
        href: asset.href,
        type: asset.type,
        imageSrcSet: asset.imageSrcSet,
        imageSizes: asset.imageSizes,
        fetchPriority: "high" as const,
      })),
    ],
  };
}
