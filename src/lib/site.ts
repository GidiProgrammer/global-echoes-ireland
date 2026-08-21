import { CONTACT_EMAIL, CONTACT_PHONE } from "./contact";

/** Production site origin for canonical URLs, sitemap, and social cards. */
export const SITE_ORIGIN = "https://www.globalechoesireland.ie";

export const SITE_NAME = "Global Echoes Ireland";

export const SITE_DESCRIPTION =
  "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.";

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const SOCIAL_URLS = [
  "https://www.instagram.com/globalechoesireland/",
  "https://www.facebook.com/globalechoesireland",
] as const;

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE.display,
    logo: absoluteUrl("/gei-logo.jpg"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    areaServed: { "@type": "Country", name: "Ireland" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IE",
    },
    sameAs: [...SOCIAL_URLS],
    slogan: "Global harmony through sound and creative collaborations",
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

type JsonLd = Record<string, unknown>;

export function pageHead({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  robots,
  canonical = true,
  jsonLd = [],
  preloadImages = [],
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  robots?: string;
  canonical?: boolean;
  jsonLd?: JsonLd | JsonLd[];
  preloadImages?: Array<{
    href: string;
    type?: string;
    imageSrcSet?: string;
    imageSizes?: string;
  }>;
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(ogImage);
  const extraLd = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(
    (item) => Object.keys(item).length > 0,
  );
  const indexable = !robots?.includes("noindex");
  const crumbs = canonical && indexable ? [breadcrumbList(path, title, url)] : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(robots ? [{ name: "robots", content: robots }] : []),
      { property: "og:locale", content: "en_IE" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${SITE_NAME} — wellbeing music programmes` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: `${SITE_NAME} — wellbeing music programmes` },
    ],
    links: [
      ...(canonical ? [{ rel: "canonical" as const, href: url }] : []),
      ...preloadImages.map((asset) => ({
        rel: "preload" as const,
        as: "image" as const,
        href: asset.href,
        type: asset.type,
        imageSrcSet: asset.imageSrcSet,
        imageSizes: asset.imageSizes,
        fetchPriority: "high" as const,
      })),
    ],
    scripts: [...crumbs, ...extraLd].map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function noIndexHead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
    ],
  };
}

function breadcrumbList(path: string, title: string, url: string): JsonLd {
  const home = {
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: `${SITE_ORIGIN}/`,
  };
  const pageName = title.replace(/\s*\|\s*Global Echoes Ireland\s*$/, "").trim();

  if (path === "/") {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [home],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      home,
      { "@type": "ListItem", position: 2, name: pageName, item: url },
    ],
  };
}
