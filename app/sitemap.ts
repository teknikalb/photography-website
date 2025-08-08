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
    "/cookies",
    // removed standalone mini-sessions
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
    "mini-sessions",
    "pet-photography"
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Mini-session landing pages now under services
  const miniSessionSlugs = [
    "fall",
    "spring",
    "summer",
    "holiday",
    "mothers-day",
    "back-to-school",
  ].map((slug) => ({
    url: `${baseUrl}/services/mini-sessions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }))

  const locations = [
    "hartford",
    "new-haven",
    "west-hartford",
    "stamford",
    "glastonbury",
  ].map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogSlugs = [
    "family-photo-outfit-guide-connecticut",
    "best-locations-hartford-family-photos",
    "maternity-session-tips-connecticut",
    "mini-session-prep-checklist",
    "portrait-posing-tips-connecticut",
    "ct-fall-photos-guide",
    "golden-hour-vs-midday-photos-ct",
    "at-home-lifestyle-session-guide",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...routes, ...portfolioCategories, ...servicePages, ...miniSessionSlugs, ...locations, ...blogSlugs]
}
