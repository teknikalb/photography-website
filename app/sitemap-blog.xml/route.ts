import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const baseUrl = "https://drenanoellephoto.com"
  
  // This would typically come from your CMS or markdown files
  const blogPosts = [
    {
      slug: "family-photo-outfit-guide-connecticut",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      slug: "best-locations-hartford-family-photos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      slug: "maternity-session-tips-connecticut",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      slug: "mini-session-prep-checklist",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: "0.8"
    },
    {
      slug: "portrait-posing-tips-connecticut",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      slug: "ct-fall-photos-guide",
      lastModified: new Date(),
      changeFrequency: "seasonal",
      priority: "0.8"
    },
    {
      slug: "golden-hour-vs-midday-photos-ct",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      slug: "at-home-lifestyle-session-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: "0.7"
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastModified.toISOString()}</lastmod>
    <changefreq>${post.changeFrequency}</changefreq>
    <priority>${post.priority}</priority>
  </url>
`).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
