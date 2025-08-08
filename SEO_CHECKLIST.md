# Production SEO & Local Ranking Checklist (CT Photography)

## Technical
- Verify `app/sitemap.ts` includes: main pages, services, mini-sessions, blog posts, and locations (Hartford, New Haven, West Hartford, Stamford, Glastonbury)
- Confirm `public/robots.txt` includes Sitemap URL
- Set canonical URLs via page metadata; home `metadataBase` set to production domain
- Add JSON-LD: LocalBusiness (site-wide), BreadcrumbList (blog), optional Service schema on service pages
- Ensure no hydration warnings in console

## On-page
- Titles/H1s contain service + location intent (e.g., Family Photographer in Connecticut)
- Body copy mentions target cities (Hartford, New Haven, etc.) naturally
- Image alt text describes subject + city when relevant
- Internal links added between services, locations, and blog posts

## Local SEO
- Google Business Profile: service areas, services, photos, and weekly posts
- NAP consistency across major directories and socials
- Encourage reviews with session type + city

## Content Plan
- Location pages live: `/locations/hartford`, `/locations/new-haven`, `/locations/west-hartford`, `/locations/stamford`, `/locations/glastonbury`
- Blog topics targeting CT intents (locations, seasons, what-to-wear, best spots)
- Each post: FAQ, CTA to relevant service/location; add related posts

## Performance & UX
- Maintain 95+ scores for LCP, CLS; lazy-load offscreen images (Next Image defaults)
- Avoid heavy scripts; use system fonts + preloaded Google Fonts already configured

## Monitoring
- Connect Google Search Console; submit sitemap
- Add GA4 or Vercel Analytics
- Track queries with “Connecticut”, “Hartford”, “New Haven”, etc.


