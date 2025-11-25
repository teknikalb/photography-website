import { MetadataRoute } from 'next'

// Update this with your actual domain
const baseUrl = "https://gretanoellephoto.com"

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages - Core business pages with highest priority
  const routes = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/blog",
    "/contact",
    "/pricing",
    "/privacy-policy",
    "/terms-of-service",
    "/cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1.0 : route === "/portfolio" || route === "/services" ? 0.9 : 0.8,
  }))

  // Portfolio pages - High priority for showcasing work
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
    changeFrequency: "weekly" as const, // Portfolio updates frequently
    priority: 0.85,
  }))

  // Service pages - Core business offerings
  const servicePages = [
    "events",
    "family",
    "maternity",
    "portraits",
    "milestones",
    "mothers-day-minis",
    "mini-sessions",
    "pet-photography",
    "weddings"
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Mini-session landing pages - Seasonal content with higher frequency
  const miniSessionSlugs = [
    "fall",
    "spring",
    "summer",
    "holiday",
    "mothers-day",
    "back-to-school",
  ].map((slug) => ({
    url: `${baseUrl}/mini-sessions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const, // Seasonal content changes frequently
    priority: 0.75,
  }))

  // Location pages - Local SEO important
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
    priority: 0.8, // Higher priority for local SEO
  }))

  // Blog posts - Content marketing with regular updates
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
    changeFrequency: "monthly" as const, // Blog content can be updated
    priority: 0.7,
  }))

  // Add structured data hints for better SEO
  const enhancedRoutes = routes.map(route => ({
    ...route,
    // Add additional metadata hints
    alternates: {
      canonical: route.url,
    },
  }))

  return [
    ...enhancedRoutes, 
    ...portfolioCategories, 
    ...servicePages, 
    ...miniSessionSlugs, 
    ...locations, 
    ...blogSlugs
  ]
}
