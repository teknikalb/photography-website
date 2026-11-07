import type { MetadataRoute } from "next"
import { POSTS } from "@/lib/blog"
import { SITE } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const core: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "yearly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  ]

  return [
    ...core.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE.url}${path}`,
      changeFrequency,
      priority,
    })),
    ...POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
