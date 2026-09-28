import type { MetadataRoute } from "next";

const origin = "https://barbos-portfolio-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/projects"].map((path) => ({
    url: new URL(path, origin).toString(),
  }));
}
