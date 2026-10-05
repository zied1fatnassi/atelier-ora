import { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/i18n/config";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const routes = [
    "",
    "/work",
    "/work/mirador",
    "/work/kinetix",
    "/work/dar-el-bahr",
    "/services",
    "/industries",
    "/production",
    "/digital-menu",
    "/pricing",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : route.startsWith("/work") ? 0.8 : 0.7,
      });
    }
  }

  return sitemapEntries;
}
