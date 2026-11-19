import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { publicRoutes } from "@/config/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${brand.siteUrl}${route.path === "/" ? "/" : route.path}`,
    changeFrequency: "monthly",
    priority: route.path === "/" ? 1 : 0.6,
  }));
}
