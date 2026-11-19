import type { NextConfig } from "next";
import { wordpressPostIds } from "./src/config/routes";

const wordpressShortlinks = Object.entries(wordpressPostIds)
  .filter(([, destination]) => destination !== "/")
  .flatMap(([id, destination]) =>
    ["/", "/index.php"].map((source) => ({
      source,
      has: [{ type: "query" as const, key: "p", value: id }],
      destination,
      permanent: true,
    })),
  );

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      ...wordpressShortlinks,
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      {
        source: "/hello-world/feed",
        destination: "/hello-world/",
        permanent: true,
      },
      {
        source: "/category/uncategorized/feed",
        destination: "/category/uncategorized/",
        permanent: true,
      },
      {
        source: "/author/gscheepersb2b-launch-co-za/feed",
        destination: "/author/gscheepersb2b-launch-co-za/",
        permanent: true,
      },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      {
        source: "/wp-sitemap-:name.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
