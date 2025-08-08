"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "family-photo-outfit-guide-connecticut",
    title: "What to Wear for Family Photos in Connecticut (Season-by-Season Guide)",
    excerpt: "A practical outfit formula for CT families with seasonal examples and a quick checklist.",
    category: "Family Photography",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "best-locations-hartford-family-photos",
    title: "Best Family Photo Locations in Hartford (Local Guide)",
    excerpt: "Elizabeth Park, West Hartford Reservoir, and urban textures—plus pro timing tips.",
    category: "Locations",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "maternity-session-tips-connecticut",
    title: "Maternity Session Tips in Connecticut (Timing, Outfits, Locations)",
    excerpt: "When to book, what to wear, and where to shoot for elegant CT maternity images.",
    category: "Maternity",
    image: "https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mini-session-prep-checklist",
    title: "Mini Session Prep Checklist (CT Families)",
    excerpt: "A simple, stress-free checklist to make the most of your 20–30 min mini session.",
    category: "Mini Sessions",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "portrait-posing-tips-connecticut",
    title: "Portrait Posing Tips (Feel Natural on Camera)",
    excerpt: "Movement, hands, angles, and expressions—simple techniques that work on location.",
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1649219025763-bb4a23fdf256?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ct-fall-photos-guide",
    title: "CT Fall Photos Guide (Timing, Colors, Locations)",
    excerpt: "When to schedule, what colors flatter foliage, and where to go in CT.",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "golden-hour-vs-midday-photos-ct",
    title: "Golden Hour vs Midday: Best Time for Photos in CT",
    excerpt: "When light flatters most, when shade saves the day, and how to pick for kids vs couples.",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "at-home-lifestyle-session-guide",
    title: "At-Home Lifestyle Session Guide (Relaxed, Real, You)",
    excerpt: "Prep your space, dress for comfort, and flow through simple activities at home.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
]

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = blogPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="w-full py-20 bg-[#F5F0EA] text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block rounded-xl shadow-lg px-8 py-10">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900">Blog</h1>
            <p className="mt-6 max-w-xl text-lg font-light md:max-w-2xl md:text-xl text-gray-700 mx-auto">
              Photography tips, client stories, and behind-the-scenes insights
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[#F5F0EA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                image={post.image}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex space-x-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                aria-label="Previous page"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${page === i + 1 ? 'bg-primary text-primary-foreground' : 'bg-white text-gray-700 hover:bg-primary/10'}`}
                  aria-current={page === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                aria-label="Next page"
              >
                &gt;
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-light">Join the Newsletter</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to receive photography tips, exclusive offers, and updates on upcoming mini-sessions.
            </p>
            <form className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

function BlogPostCard({ id, title, excerpt, category, image }: BlogPostCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${id}`} className="block">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 mb-2">{category}</span>
        <Link href={`/blog/${id}`} className="block">
          <h3 className="mb-2 font-serif text-xl font-medium hover:text-primary">{title}</h3>
        </Link>
        <p className="mb-4 text-muted-foreground">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Link href={`/blog/${id}`} className="text-sm font-medium text-primary hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}
