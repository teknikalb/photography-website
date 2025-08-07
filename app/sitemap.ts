import { MetadataRoute } from 'next'

// Update this with your actual domain
const baseUrl = "https://drenanoellephoto.com"

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const routes = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookies"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Portfolio pages
  const portfolioCategories = [
    "events",
    "couples",
    "family",
    "maternity",
    "portraits",
    "milestones"
  ].map((category) => ({
    url: `${baseUrl}/portfolio/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Service pages
  const servicePages = [
    "events",
    "family",
    "maternity",
    "portraits",
    "milestones",
    "mothers-day-minis",
    "pet-photography"
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogSlugs = [
    "event-planning-tips",
    "maternity-session-guide",
    "choosing-photographer"
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...routes, ...portfolioCategories, ...servicePages, ...blogSlugs]
}
