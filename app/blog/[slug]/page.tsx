import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

type BlogPost = {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  relatedPosts: { id: string; title: string; image: string }[];
};

const blogPosts: Record<string, BlogPost> = {
  "wedding-planning-tips": {
    title: "10 Essential Wedding Planning Tips Every Couple Should Know",
    date: "April 10, 2023",
    author: "Emma Davis",
    category: "Wedding Tips",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>Planning your Connecticut wedding can be both exciting and overwhelming. As a Connecticut wedding photographer, I've witnessed hundreds of special days and have gathered insights on what makes the planning process smoother and the day itself more enjoyable. Here are my top 10 tips for couples planning their wedding in Connecticut:</p>
      <h2>1. Start with a Realistic Budget</h2>
      <p>Before you book any vendors or venues, sit down together and determine how much you can comfortably spend. Be sure to include a 10-15% buffer for unexpected expenses that inevitably arise. Connecticut offers a wide range of venues and services, so having a clear budget will help you narrow down your options.</p>
      <h2>2. Prioritize What Matters Most</h2>
      <p>Every couple has different priorities. Maybe photography is at the top of your list, or perhaps it's the venue or food. Identify your top three priorities and allocate more of your budget to these areas. For Connecticut couples, popular priorities include scenic venues, experienced photographers, and delicious catering.</p>
      <h2>3. Book Your Photographer Early</h2>
      <p>The best Connecticut wedding photographers book up 12-18 months in advance, especially for peak wedding season dates. Once you've set a date and secured a venue, your photographer should be one of the first vendors you book. Look for a photographer whose style matches your vision and who has experience with Connecticut venues.</p>
      <h2>4. Consider a First Look</h2>
      <p>While traditional couples may prefer to wait until the ceremony to see each other, a "first look" session before the ceremony provides intimate photo opportunities and can help calm nerves. It also allows you to join your cocktail hour instead of spending that time taking photos. Many Connecticut venues offer beautiful private spots for first looks.</p>
      <h2>5. Create a Realistic Timeline</h2>
      <p>Work with your photographer and planner to create a timeline that allows ample time for everything. Always add buffer time between events—hair and makeup almost always takes longer than expected! Connecticut weddings often include travel between locations, so factor in extra time for transportation.</p>
      <h2>6. Plan for Good Light</h2>
      <p>As a photographer, I can't stress this enough: lighting matters tremendously for your photos. Consider the time of day when scheduling your ceremony and portraits. The golden hour (1-2 hours before sunset) provides the most flattering natural light, especially at Connecticut's scenic outdoor venues.</p>
      <h2>7. Unplug Your Ceremony</h2>
      <p>Consider asking guests to put away their phones and cameras during the ceremony. This allows them to be fully present and ensures your professional photos won't be filled with guests holding up devices. Many Connecticut couples now opt for unplugged ceremonies for a more meaningful experience.</p>
      <h2>8. Delegate Day-Of Tasks</h2>
      <p>Assign trusted friends or family members to handle small tasks on the wedding day, or better yet, hire a day-of coordinator. You shouldn't be answering logistical questions or solving problems on your wedding day. Connecticut has many talented coordinators who can help your day run smoothly.</p>
      <h2>9. Take Moments Together</h2>
      <p>Your wedding day will fly by in a blur of activity. Plan for a few moments alone as a couple to soak it all in. Some couples take 10 minutes after the ceremony for private time, or step away briefly during the reception. Connecticut's beautiful landscapes provide the perfect backdrop for these quiet moments.</p>
      <h2>10. Remember What It's All About</h2>
      <p>When planning gets stressful, take a step back and remember the purpose of the day: celebrating your love and commitment. The details are important, but they're not as important as the meaning behind the celebration. Your Connecticut wedding is the start of your marriage journey—enjoy every moment!</p>
      <p>If you're planning your wedding in Connecticut and looking for a photographer who can help guide you through the process while capturing beautiful, authentic moments, I'd love to chat! My experience with Connecticut venues and couples ensures your memories will be preserved for a lifetime.</p>
    `,
    relatedPosts: [
      { id: "wedding-day-timeline", title: "Creating the Perfect Wedding Day Photography Timeline", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
      { id: "choosing-wedding-photographer", title: "How to Choose the Right Wedding Photographer for Your Style", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "what-to-wear-family-session": {
    title: "What to Wear: Family Portrait Session Edition",
    date: "March 15, 2023",
    author: "Emma Davis",
    category: "Family Photography",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>Choosing outfits for your family photo session in Connecticut doesn't have to be stressful. As a Connecticut family photographer, I help families coordinate looks that photograph beautifully in every season. Here are some tips for a successful family session wardrobe:</p>
      <ul>
        <li><strong>Pick a color palette:</strong> Choose 2-3 main colors and coordinate, but don't match exactly. Earthy tones and pastels work well in Connecticut's natural settings.</li>
        <li><strong>Dress for the location and season:</strong> Connecticut offers beaches, parks, and urban backdrops. Dress appropriately for the setting and weather.</li>
        <li><strong>Keep comfort in mind:</strong> Especially for kids! Comfortable clothes mean happy smiles.</li>
        <li><strong>Avoid large logos or distracting patterns:</strong> Simple, classic styles keep the focus on your family's connection.</li>
      </ul>
      <p>With a little planning, your family will look and feel great for your session. Connecticut's beautiful parks and beaches provide the perfect backdrop for timeless family portraits. If you need help choosing outfits or locations, I'm always happy to offer guidance as your Connecticut family photographer.</p>
    `,
    relatedPosts: [
      { id: "newborn-session-preparation", title: "How to Prepare for Your Newborn Photography Session", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "newborn-session-preparation": {
    title: "How to Prepare for Your Newborn Photography Session",
    date: "February 22, 2023",
    author: "Emma Davis",
    category: "Newborn Photography",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>Welcoming a new baby is exciting and exhausting. As a Connecticut newborn photographer, I want to make your session as stress-free as possible. Here's how to prepare for a beautiful newborn photography experience in Connecticut:</p>
      <ul>
        <li><strong>Schedule your session early:</strong> The best time for newborn photos is within the first two weeks after birth. Connecticut families often book their session before baby arrives.</li>
        <li><strong>Keep baby warm and well-fed:</strong> A cozy, content baby is easier to pose and photograph.</li>
        <li><strong>Have extra blankets, diapers, and outfits ready:</strong> Connecticut weather can be unpredictable, so bring layers if you're planning outdoor photos.</li>
        <li><strong>Relax and trust your photographer:</strong> My experience with Connecticut newborns means I know how to capture those sweet, fleeting moments safely and beautifully.</li>
      </ul>
      <p>Whether in your home or at a Connecticut studio, newborn sessions are a wonderful way to celebrate your growing family. Contact me to book your Connecticut newborn photography session today!</p>
    `,
    relatedPosts: [
      { id: "what-to-wear-family-session", title: "What to Wear: Family Portrait Session Edition", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "engagement-session-locations": {
    title: "Top 5 Engagement Session Locations in Connecticut",
    date: "January 18, 2023",
    author: "Emma Davis",
    category: "Engagement Photography",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>Connecticut offers a variety of stunning locations for engagement photos. As a Connecticut engagement photographer, here are my top 5 favorite spots for romantic, memorable sessions:</p>
      <ol>
        <li><strong>Harkness Memorial State Park:</strong> Beautiful gardens, ocean views, and historic architecture make this a top choice for Connecticut couples.</li>
        <li><strong>Elizabeth Park Rose Garden:</strong> Lush blooms and winding paths create a dreamy setting in Hartford, CT.</li>
        <li><strong>Yale University Campus:</strong> Iconic stone buildings and tree-lined walkways offer a classic New England vibe.</li>
        <li><strong>Wadsworth Falls State Park:</strong> Waterfalls and forest trails provide a natural, adventurous backdrop.</li>
        <li><strong>Downtown Mystic:</strong> Quaint streets, waterfront views, and a charming atmosphere perfect for storytelling.</li>
      </ol>
      <p>Each location offers unique scenery and a romantic atmosphere for your session. If you're planning an engagement session in Connecticut, I'd love to help you choose the perfect spot and capture your love story!</p>
    `,
    relatedPosts: [
      { id: "wedding-planning-tips", title: "10 Essential Wedding Planning Tips Every Couple Should Know", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "wedding-day-timeline": {
    title: "Creating the Perfect Wedding Day Photography Timeline",
    date: "December 5, 2022",
    author: "Emma Davis",
    category: "Wedding Tips",
    image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>A well-planned timeline ensures we capture all the important moments. As a Connecticut wedding photographer, here's how to structure your day for photography success:</p>
      <ul>
        <li><strong>Start with hair and makeup:</strong> Allow extra time for touch-ups and getting ready photos.</li>
        <li><strong>Plan for a first look and couple portraits:</strong> Connecticut venues offer beautiful spots for these special moments.</li>
        <li><strong>Allow time for family and wedding party photos:</strong> Group photos are easier with a clear plan and list.</li>
        <li><strong>Schedule sunset portraits:</strong> Connecticut's golden hour light is perfect for romantic images.</li>
      </ul>
      <p>Work with your photographer to create a timeline that fits your unique day. My experience with Connecticut weddings ensures we won't miss a moment!</p>
    `,
    relatedPosts: [
      { id: "choosing-wedding-photographer", title: "How to Choose the Right Wedding Photographer for Your Style", image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  "choosing-wedding-photographer": {
    title: "How to Choose the Right Wedding Photographer for Your Style",
    date: "November 12, 2022",
    author: "Emma Davis",
    category: "Wedding Tips",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>With so many talented photographers in Connecticut, how do you find the one that's right for you? This guide will help you make the perfect match for your Connecticut wedding or event:</p>
      <ul>
        <li><strong>Review portfolios:</strong> Look for a style you love and consistency in quality. Connecticut photographers often showcase local venues and couples.</li>
        <li><strong>Read reviews and ask for referrals:</strong> Word of mouth is powerful in the Connecticut wedding community.</li>
        <li><strong>Meet with photographers:</strong> Discuss your vision and see if your personalities are a good fit.</li>
        <li><strong>Choose someone you trust:</strong> Your photographer will be by your side all day—make sure you feel comfortable and confident in their abilities.</li>
      </ul>
      <p>Your Connecticut photographer should be experienced, creative, and passionate about telling your story. If you're searching for a photographer in Connecticut, I'd love to connect and see if we're the right fit for your special day!</p>
    `,
    relatedPosts: [
      { id: "wedding-day-timeline", title: "Creating the Perfect Wedding Day Photography Timeline", image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=600&auto=format&fit=crop" },
    ],
  },
  // Add other blog posts as needed
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
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
        </div>
      </section>
    </div>
  )
}
