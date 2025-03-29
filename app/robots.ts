import type { MetadataRoute } from "next"

// Archivo robots.txt optimizado
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*", "/_next/*"],
    },
    sitemap: "https://syltienda.com/sitemap.xml",
    host: "https://syltienda.com",
  }
}

