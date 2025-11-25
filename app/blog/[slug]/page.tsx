import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Tag } from "lucide-react"

type BlogPost = {
  title: string;
  category: string;
  image: string;
  content: string;
  relatedPosts: { id: string; title: string; image: string }[];
};

const blogPosts: Record<string, BlogPost> = {
  "family-photo-outfit-guide-connecticut": {
    title: "What to Wear for Family Photos in Connecticut (Season-by-Season Guide)",
    category: "Family Photography",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>Outfits can make or break how polished your family gallery looks—without feeling matchy. Use this quick guide to plan outfits around Connecticut's seasons.</p>
      <h2>TL;DR Outfit Formula</h2>
      <ul>
        <li><strong>Palette:</strong> Pick 2–3 base colors + 1 accent. Avoid neon; muted earth tones photograph beautifully.</li>
        <li><strong>Textures:</strong> Knits, linen, denim add depth; avoid large logos.</li>
        <li><strong>Fit:</strong> Choose comfort first—especially for kids.</li>
      </ul>
      <h2>Spring (Hartford, West Hartford Reservoir)</h2>
      <p>Soft pastels + light neutrals. Layers for unpredictable temps. Think flowy dresses, chinos, light sweaters.</p>
      <h2>Summer (New Haven, shoreline parks)</h2>
      <p>Light fabrics and sandals. Mid-tones (sage, dusty blue, terracotta) reduce glare in noon sun.</p>
      <h2>Fall (Glastonbury orchards, Elizabeth Park)</h2>
      <p>Rich tones—rust, forest, cream—complement foliage. Add boots, hats, knit cardigans.</p>
      <h2>Winter (Downtown textures)</h2>
      <p>Monochrome layers (camel, charcoal, ivory). Statement coats and scarves.</p>
      <h2>Checklist</h2>
      <ul>
        <li>Lay outfits together and snap a phone photo</li>
        <li>Limit patterns to 1–2 people</li>
        <li>Bring backups for toddlers</li>
      </ul>
    `,
    relatedPosts: [
      { id: "mini-session-prep-checklist", title: "Mini Session Prep Checklist (CT)", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop" },
      { id: "best-locations-hartford-family-photos", title: "Best Family Photo Locations in Hartford", image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "best-locations-hartford-family-photos": {
    title: "Best Family Photo Locations in Hartford (Local Guide)",
    category: "Family Photography",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>These Hartford spots offer variety, easy access, and beautiful light.</p>
      <h2>Elizabeth Park</h2>
      <p>Roses in summer, arches and paths year-round. Best at golden hour.</p>
      <h2>West Hartford Reservoir</h2>
      <p>Wooded trails and open fields; perfect for candid walking shots.</p>
      <h2>Downtown Hartford</h2>
      <p>Urban textures for modern portraits—stone, glass, and symmetry.</p>
      <h2>Pro Tips</h2>
      <ul>
        <li>Weekday evenings are quieter</li>
        <li>Pack bug spray in late spring</li>
        <li>Bring a neutral blanket for sit-down photos</li>
      </ul>
    `,
    relatedPosts: [
      { id: "family-photo-outfit-guide-connecticut", title: "What to Wear for Family Photos (CT)", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" },
      { id: "portrait-posing-tips-connecticut", title: "Portrait Posing Tips (Feel Natural)", image: "https://images.unsplash.com/photo-1649219025763-bb4a23fdf256?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "maternity-session-tips-connecticut": {
    title: "Maternity Session Tips in Connecticut (Timing, Outfits, Locations)",
    category: "Maternity",
    image: "https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?q=80&w=1200&auto=format&fit=crop",
    content: `
      <h2>Best Time to Book</h2>
      <p>Schedule for 28–34 weeks for comfort + visible bump.</p>
      <h2>Outfits</h2>
      <p>Solid, flowing dresses photograph beautifully. Bring a fitted option for variety.</p>
      <h2>Locations</h2>
      <p>Reservoir trails, Elizabeth Park, or at-home lifestyle for intimate images.</p>
      <h2>Partner & Siblings</h2>
      <p>Coordinate outfits; keep hands busy (hats, jackets) for natural posing.</p>
    `,
    relatedPosts: [
      { id: "family-photo-outfit-guide-connecticut", title: "Family Outfit Guide (CT)", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" },
      { id: "portrait-posing-tips-connecticut", title: "Portrait Posing Tips (Feel Natural)", image: "https://images.unsplash.com/photo-1649219025763-bb4a23fdf256?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "mini-session-prep-checklist": {
    title: "Mini Session Prep Checklist (CT Families)",
    category: "Mini Sessions",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
    content: `
      <h2>One Week Before</h2>
      <ul>
        <li>Confirm location + parking</li>
        <li>Plan outfits + backups</li>
      </ul>
      <h2>Day Of</h2>
      <ul>
        <li>Snacks + water, wipes, hairbrush</li>
        <li>Arrive 5–10 minutes early</li>
      </ul>
      <h2>Mindset</h2>
      <p>Focus on connection, not perfect posing. I’ll guide you the whole time.</p>
    `,
    relatedPosts: [
      { id: "best-locations-hartford-family-photos", title: "Best Hartford Locations", image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=600&auto=format&fit=crop" },
      { id: "ct-fall-photos-guide", title: "CT Fall Photos Guide", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "portrait-posing-tips-connecticut": {
    title: "Portrait Posing Tips (Feel Natural on Camera)",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1649219025763-bb4a23fdf256?q=80&w=1200&auto=format&fit=crop",
    content: `
      <h2>Start with Movement</h2>
      <p>Walk, sway, adjust a sleeve—micro-movements relax posture.</p>
      <h2>Hands</h2>
      <p>Hold a prop (hat, jacket) or touch hair/jewelry to avoid stiffness.</p>
      <h2>Angles</h2>
      <p>Turn 30° from camera, shift weight to back foot, lengthen neck.</p>
      <h2>Expressions</h2>
      <p>Breathe out slowly; think of a happy memory for natural eyes.</p>
    `,
    relatedPosts: [
      { id: "family-photo-outfit-guide-connecticut", title: "Family Outfit Guide (CT)", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" },
      { id: "mini-session-prep-checklist", title: "Mini Session Prep (CT)", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "ct-fall-photos-guide": {
    title: "CT Fall Photos Guide (Timing, Colors, Locations)",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    content: `
      <h2>When to Book</h2>
      <p>Peak foliage varies year to year; plan late Sept–early Nov and stay flexible.</p>
      <h2>Colors</h2>
      <p>Neutrals (cream, tan) + warm accents (rust, olive) work best.</p>
      <h2>Locations</h2>
      <p>Reservoir trails, orchards, riverfront parks in Glastonbury + Hartford.</p>
    `,
    relatedPosts: [
      { id: "best-locations-hartford-family-photos", title: "Best Hartford Locations", image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=600&auto=format&fit=crop" },
      { id: "mini-session-prep-checklist", title: "Mini Session Prep (CT)", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "golden-hour-vs-midday-photos-ct": {
    title: "Golden Hour vs Midday: Best Time for Photos in Connecticut",
    category: "Tips",
    image: "",
    content: `
      <h2>Golden Hour (Sunrise/Sunset)</h2>
      <p>Soft, warm light with long shadows—flattering skin tones and dreamy backlight.</p>
      <h2>Midday</h2>
      <p>Harsher light; works in open shade, wooded areas, or with architectural shade downtown.</p>
      <h2>Overcast Days</h2>
      <p>Nature’s softbox—great for even skin tones and rich color. Ideal for kids who need earlier sessions.</p>
      <h2>Recommendation</h2>
      <p>Families with small children: late afternoon or overcast. Couples/portraits: golden hour.</p>
    `,
    relatedPosts: [
      { id: "portrait-posing-tips-connecticut", title: "Portrait Posing Tips", image: "https://images.unsplash.com/photo-1649219025763-bb4a23fdf256?q=80&w=600&auto=format&fit=crop" },
      { id: "family-photo-outfit-guide-connecticut", title: "Family Outfit Guide (CT)", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "at-home-lifestyle-session-guide": {
    title: "At-Home Lifestyle Session Guide (Relaxed, Real, You)",
    category: "Lifestyle",
    image: "",
    content: `
      <h2>Prep Your Space</h2>
      <p>Declutter surfaces, open blinds, turn off overhead lights—natural light is best.</p>
      <h2>Wardrobe</h2>
      <p>Soft neutrals, barefoot, cozy textures—dress for comfort and connection.</p>
      <h2>Flow</h2>
      <p>We’ll move through favorite rooms and simple activities: reading, making cocoa, playing.</p>
    `,
    relatedPosts: [
      { id: "maternity-session-tips-connecticut", title: "Maternity Session Tips (CT)", image: "https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?q=80&w=600&auto=format&fit=crop" },
      { id: "mini-session-prep-checklist", title: "Mini Session Prep (CT)", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop" },
    ],
  },
}

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return {}
  const title = `${post.title} | Greta Noelle Photography`
  const description = `${post.title} — ${post.category} in Connecticut`
  const url = `https://gretanoellephoto.com/blog/${slug}`
  return {
    title,
    description,
    keywords: [post.category, "Connecticut photographer", "blog"],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  // Check if post exists
  if (!blogPosts[slug]) {
    notFound()
  }

  const post = blogPosts[slug]
  
  // Generate slug ids for headings and a table of contents
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/<[^>]*>/g, "")
      .replace(/&[^;]+;/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  const addIdsToHeadings = (html: string) =>
    html.replace(/<h(2|3)>([\s\S]*?)<\/h\1>/g, (_m, level, inner) => {
      const id = slugify(inner)
      return `<h${level} id="${id}">${inner}</h${level}>`
    })
  const extractToc = (html: string) => {
    const items: { id: string; text: string; level: number }[] = []
    const regex = /<h(2|3) id=\"(.*?)\">([\s\S]*?)<\/h\1>/g
    let m
    while ((m = regex.exec(html)) !== null) {
      const level = Number(m[1])
      const id = m[2]
      const text = m[3].replace(/<[^>]*>/g, "")
      items.push({ id, text, level })
    }
    return items
  }
  const processedHtml = addIdsToHeadings(post.content)
  const toc = extractToc(processedHtml)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header (no hero image) */}
      <section className="bg-[#F5F0EA]">
        <div className="container mx-auto px-4 pt-10 pb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800">
            <Tag className="h-3.5 w-3.5" /> {post.category}
          </span>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl font-light tracking-wide text-gray-900 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </div>
        <div className="w-full bg-gray-100/80">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="py-3 text-sm text-gray-800">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog">Blog</Link></li>
                <li>/</li>
                <li aria-current="page" className="text-gray-900">{post.title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Content with sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>

              <article className="prose-reading">
                <div dangerouslySetInnerHTML={{ __html: processedHtml }} />
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link href="/services/family" className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                    <h4 className="font-medium text-gray-900">Book a Family Session</h4>
                    <p className="text-sm text-gray-600">Hartford • New Haven • West Hartford • Stamford • Glastonbury</p>
                  </Link>
                  <Link href="/services/mini-sessions" className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                    <h4 className="font-medium text-gray-900">See Mini Sessions</h4>
                    <p className="text-sm text-gray-600">Seasonal offers with limited spots</p>
                  </Link>
                </div>
              </article>

              <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                <Link href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 shadow">
                  Book a Connecticut Session
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 font-serif text-lg text-gray-900">On this page</h3>
                  {toc.length === 0 ? (
                    <p className="text-sm text-gray-600">Overview</p>
                  ) : (
                    <ul className="space-y-2 text-sm">
                      {toc.map((item) => (
                        <li key={item.id} className={item.level === 3 ? "pl-4" : "pl-0"}>
                          <a href={`#${item.id}`} className="text-gray-700 hover:text-primary">
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 font-serif text-lg text-gray-900">Quick links</h3>
                  <div className="flex flex-col gap-3">
                    <Link href="/services/family" className="text-sm text-primary hover:underline">Family Sessions</Link>
                    <Link href="/services/maternity" className="text-sm text-primary hover:underline">Maternity</Link>
                    <Link href="/services/mini-sessions" className="text-sm text-primary hover:underline">Mini Sessions</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium">You might also like</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {post.relatedPosts.map((relatedPost: { id: string; title: string; image: string }) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group block overflow-hidden rounded-lg border border-gray-200"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium group-hover:text-primary">{relatedPost.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
