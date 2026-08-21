import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import outfit600 from "@fontsource/outfit/files/outfit-latin-600-normal.woff2?url";
import workSans400 from "@fontsource/work-sans/files/work-sans-latin-400-normal.woff2?url";
import { CONTACT_EMAIL } from "../lib/contact";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "../lib/site";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="eyebrow">Global Echoes Ireland</span>
        <h1 className="mt-4 font-serif text-8xl">404</h1>
        <h2 className="mt-3 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-solid mt-8">Return home</Link>

      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-solid">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>

      </div>
    </div>
  );
}

const TITLE =
  "Global Echoes Ireland | Global harmony through sound and creative collaborations";
const DESC =
  "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Global Echoes Ireland" },
      { name: "theme-color", content: "#1B3F24" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: SITE_ORIGIN },
      { property: "og:image", content: absoluteUrl(DEFAULT_OG_IMAGE) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Global Echoes Ireland - wellbeing music programmes" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: absoluteUrl(DEFAULT_OG_IMAGE) },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: outfit600,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: workSans400,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "canonical", href: SITE_ORIGIN },
      { rel: "icon", href: "/favicon.ico?v=3", sizes: "any" },
      { rel: "icon", href: "/favicon-48x48.png?v=3", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=3", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest?v=3" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Global Echoes Ireland",
          url: SITE_ORIGIN,
          description: DESC,
          email: CONTACT_EMAIL,
          logo: absoluteUrl("/gei-logo.jpg"),
          image: absoluteUrl(DEFAULT_OG_IMAGE),
          areaServed: "IE",
          slogan:
            "Global harmony through sound and creative collaborations",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster position="top-center" richColors />
    </>
  );
}
