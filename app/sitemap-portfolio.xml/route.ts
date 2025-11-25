import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const baseUrl = "https://gretanoellephoto.com"
  
  // Portfolio categories with enhanced metadata
  const portfolioCategories = [
    {
      category: "events",
      title: "Event Photography",
      description: "Professional event photography services in Connecticut",
      priority: "0.85"
    },
    {
      category: "couples",
      title: "Couples Photography",
      description: "Romantic couples photography sessions in Connecticut",
      priority: "0.85"
    },
    {
      category: "family",
      title: "Family Photography",
      description: "Beautiful family portrait sessions in Connecticut",
      priority: "0.9"
    },
    {
      category: "maternity",
      title: "Maternity Photography",
      description: "Stunning maternity photography in Connecticut",
      priority: "0.85"
    },
    {
      category: "portraits",
      title: "Portrait Photography",
      description: "Professional portrait photography in Connecticut",
      priority: "0.8"
    },
    {
      category: "milestones",
      title: "Milestone Photography",
      description: "Capture life's special moments in Connecticut",
      priority: "0.8"
    }
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${portfolioCategories.map(cat => `
  <url>
    <loc>${baseUrl}/portfolio/${cat.category}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${cat.priority}</priority>
    <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <image:loc>${baseUrl}/portfolio-${cat.category}-hero.jpg</image:loc>
      <image:title>${cat.title}</image:title>
      <image:caption>${cat.description}</image:caption>
    </image:image>
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
