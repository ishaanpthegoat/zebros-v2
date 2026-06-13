import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { blogPosts } from "@/data/blog";

// Generated sitemap (PRD §3.2 fix — the old site had none). Static routes plus a
// URL per blog post, all from the data layer.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/team",
    "/coaches",
    "/robot",
    "/past-seasons",
    "/blog",
    "/social",
    "/gallery",
    "/sponsors",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
