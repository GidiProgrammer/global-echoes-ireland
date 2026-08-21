import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_ORIGIN } from "@/lib/site";

const SITEMAP_URLS = [
  { path: "/", changefreq: "weekly" },
  { path: "/about", changefreq: "monthly" },
  { path: "/programme", changefreq: "weekly" },
  { path: "/services", changefreq: "weekly" },
  { path: "/funders", changefreq: "monthly" },
  { path: "/events", changefreq: "weekly" },
  { path: "/gallery", changefreq: "monthly" },
  { path: "/contact", changefreq: "monthly" },
  { path: "/privacy", changefreq: "yearly" },
  { path: "/terms", changefreq: "yearly" },
] as const;

const LASTMOD = "2026-08-21";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = SITEMAP_URLS.map((entry) => {
          const loc = `${SITE_ORIGIN}${entry.path === "/" ? "/" : entry.path}`;
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n  </url>`;
        }).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
