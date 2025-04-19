import Image from "next/image"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "wedding-planning-tips",
    title: "10 Essential Wedding Planning Tips Every Couple Should Know",
    excerpt:
      "Planning your big day can be overwhelming. Here are my top 10 tips to help make the process smoother and more enjoyable.",
    date: "April 10, 2023",
    category: "Wedding Tips",
    image: "/placeholder.svg?height=600&width=800",
    author: "Emma Davis",
  },
  {
    id: "what-to-wear-family-session",
    title: "What to Wear: Family Portrait Session Edition",
    excerpt:
      "Choosing outfits for your family photo session doesn't have to be stressful. This guide will help you coordinate looks that photograph beautifully.",
    date: "March 15, 2023",
    category: "Family Photography",
    image: "/placeholder.svg?height=600&width=800",
    author: "Emma Davis",
  },
  {
    id: "newborn-session-preparation",
    title: "How to Prepare for Your Newborn Photography Session",
    excerpt:
      "Welcoming a new baby is exciting and exhausting. Here's how to prepare for a stress-free newborn photography experience.",
    date: "February 22, 2023",
    category: "Newborn Photography",
    image: "/placeholder.svg?height=600&width=800",
    author: "Emma Davis",
  },
  {
    id: "engagement-session-locations",
    title: "Top 5 Engagement Session Locations in Connecticut",
    excerpt:
      "Discover the most picturesque spots in Connecticut for your engagement photos, from coastal views to urban backdrops.",
    date: "January 18, 2023",
    category: "Engagement Photography",
    image: "/placeholder.svg?height=600&width=800",
    author: "Emma Davis",
  },
  {
    id: "wedding-day-timeline",
    title: "Creating the Perfect Wedding Day Photography Timeline",
    excerpt:
      "A well-planned timeline ensures we capture all the important moments. Here's how to structure your day for photography success.",
    date: "December 5, 2022",
    category: "Wedding Tips",
    image: "/placeholder.svg?height=600&width=800",
    author: "Emma Davis",
  },
  {
    id: "choosing-wedding-photographer",
    title: "How to Choose the Right Wedding Photographer for Your Style",
    excerpt:
      "With so many talented photographers out there, how do you find the one that's right for you? This guide will help you make the perfect match.",
    date: "November 12, 2022",
    category: "Wedding Tips",
    image: "/placeholder.svg?height=600&width=800",
    author: "Emma Davis",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Blog hero image"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">Blog</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            Photography tips, client stories, and behind-the-scenes insights
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                author={post.author}
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <nav className="flex space-x-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                1
              </span>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-muted-foreground hover:bg-gray-100"
              >
                2
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-muted-foreground hover:bg-gray-100"
              >
                3
              </Link>
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-muted-foreground">
                ...
              </span>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-muted-foreground hover:bg-gray-100"
              >
                Next
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
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

function BlogPostCard({ id, title, excerpt, date, category, image, author }) {
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
        <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
          <span>{date}</span>
          <span>•</span>
          <span>{category}</span>
        </div>
        <Link href={`/blog/${id}`} className="block">
          <h3 className="mb-2 font-serif text-xl font-medium hover:text-primary">{title}</h3>
        </Link>
        <p className="mb-4 text-muted-foreground">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">By {author}</span>
          <Link href={`/blog/${id}`} className="text-sm font-medium text-primary hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}
