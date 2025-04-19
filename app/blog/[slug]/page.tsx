import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

// This would typically come from a CMS or database
const blogPosts = {
  "wedding-planning-tips": {
    title: "10 Essential Wedding Planning Tips Every Couple Should Know",
    date: "April 10, 2023",
    author: "Emma Davis",
    category: "Wedding Tips",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>Planning a wedding can be both exciting and overwhelming. As a wedding photographer who has witnessed hundreds of special days, I've gathered insights on what makes the planning process smoother and the day itself more enjoyable. Here are my top 10 tips for couples planning their wedding:</p>
      
      <h2>1. Start with a realistic budget</h2>
      <p>Before you book any vendors or venues, sit down together and determine how much you can comfortably spend. Be sure to include a 10-15% buffer for unexpected expenses that inevitably arise.</p>
      
      <h2>2. Prioritize what matters most</h2>
      <p>Every couple has different priorities. Maybe photography is at the top of your list, or perhaps it's the venue or food. Identify your top three priorities and allocate more of your budget to these areas.</p>
      
      <h2>3. Book your photographer early</h2>
      <p>The best photographers book up 12-18 months in advance, especially for peak wedding season dates. Once you've set a date and secured a venue, your photographer should be one of the first vendors you book.</p>
      
      <h2>4. Consider a first look</h2>
      <p>While traditional couples may prefer to wait until the ceremony to see each other, a "first look" session before the ceremony provides intimate photo opportunities and can help calm nerves. It also allows you to join your cocktail hour instead of spending that time taking photos.</p>
      
      <h2>5. Create a realistic timeline</h2>
      <p>Work with your photographer and planner to create a timeline that allows ample time for everything. Always add buffer time between events - hair and makeup almost always takes longer than expected!</p>
      
      <h2>6. Plan for good light</h2>
      <p>As a photographer, I can't stress this enough: lighting matters tremendously for your photos. Consider the time of day when scheduling your ceremony and portraits. The golden hour (1-2 hours before sunset) provides the most flattering natural light.</p>
      
      <h2>7. Unplug your ceremony</h2>
      <p>Consider asking guests to put away their phones and cameras during the ceremony. This allows them to be fully present and ensures your professional photos won't be filled with guests holding up devices.</p>
      
      <h2>8. Delegate day-of tasks</h2>
      <p>Assign trusted friends or family members to handle small tasks on the wedding day, or better yet, hire a day-of coordinator. You shouldn't be answering logistical questions or solving problems on your wedding day.</p>
      
      <h2>9. Take moments together</h2>
      <p>Your wedding day will fly by in a blur of activity. Plan for a few moments alone as a couple to soak it all in. Some couples take 10 minutes after the ceremony for private time, or step away briefly during the reception.</p>
      
      <h2>10. Remember what it's all about</h2>
      <p>When planning gets stressful, take a step back and remember the purpose of the day: celebrating your love and commitment. The details are important, but they're not as important as the meaning behind the celebration.</p>
      
      <p>Remember, your wedding day is just the beginning of your marriage journey. While you want it to be beautiful and memorable, try not to let the pressure of planning overshadow the joy of the experience.</p>
      
      <p>If you're planning your wedding and looking for a photographer who can help guide you through the process while capturing beautiful, authentic moments, I'd love to chat!</p>
    `,
    relatedPosts: [
      {
        id: "wedding-day-timeline",
        title: "Creating the Perfect Wedding Day Photography Timeline",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "choosing-wedding-photographer",
        title: "How to Choose the Right Wedding Photographer for Your Style",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  // Add other blog posts as needed
}

export default function BlogPostPage({ params }) {
  const { slug } = params

  // Check if post exists
  if (!blogPosts[slug]) {
    notFound()
  }

  const post = blogPosts[slug]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-4xl font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Share Links */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium">Share this post</h3>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="rounded-full bg-[#3b5998] p-2 text-white hover:bg-[#3b5998]/90"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#1da1f2] p-2 text-white hover:bg-[#1da1f2]/90"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#0077b5] p-2 text-white hover:bg-[#0077b5]/90"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#e60023] p-2 text-white hover:bg-[#e60023]/90"
                  aria-label="Share on Pinterest"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0a12 12 0 00-4.373 23.182c-.067-.593-.132-1.505.028-2.153.145-.587.933-3.739.933-3.739s-.238-.477-.238-1.182c0-1.107.642-1.933 1.438-1.933.678 0 1.006.509 1.006 1.119 0 .681-.434 1.7-.659 2.646-.188.79.398 1.433 1.181 1.433 1.417 0 2.509-1.492 2.509-3.646 0-1.905-1.374-3.243-3.342-3.243-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 01.056.23c-.061.252-.198.796-.226.907-.035.146-.117.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1012 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium">You might also like</h3>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {post.relatedPosts.map((relatedPost) => (
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
        </div>
      </section>
    </div>
  )
}
