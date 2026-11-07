import type { Metadata } from "next"
import Link from "next/link"
import Reveal from "@/components/site/reveal"
import { Cover } from "@/components/site/sections"
import { POSTS } from "@/lib/blog"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Family Photo Tips & Guides",
  description:
    "Photo session tips from a Connecticut family photographer: what to wear, best Hartford-area locations, maternity advice, fall photo timing and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Family Photo Tips & Guides | Connecticut Photographer",
    description: "Photo session tips, outfit guides and Connecticut location ideas from Greta Noelle Photography.",
    url: "/blog",
  },
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE.name} Blog`,
  url: `${SITE.url}/blog`,
  blogPost: POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Person", name: "Greta Noelle" },
  })),
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <section aria-label="Blog posts" className="pt-header bg-page">
        <h1 className="sr-only">Connecticut family photography tips and guides</h1>
        <div className="wrap pb-[72px] pt-[48px] lg:pb-[140px] lg:pt-[80px]">
          <ul className="list-none space-y-[64px] lg:space-y-[96px]">
            {POSTS.map((post, index) => {
              const flip = index % 2 === 1
              return (
                <li key={post.slug}>
                  <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-[56px]">
                    <Reveal variant={flip ? "right" : "left"} className={cn(flip && "lg:order-2")}>
                      <Link
                        href={`/blog/${post.slug}`}
                        aria-label={post.title}
                        className="group relative block aspect-[5/4] w-full overflow-hidden"
                      >
                        <Cover
                          photo={post.photo}
                          sizes="(max-width: 1024px) 100vw, 542px"
                          priority={index === 0}
                          className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                        />
                      </Link>
                    </Reveal>
                    <Reveal
                      delay={150}
                      className={cn("lg:max-w-[440px]", flip ? "lg:order-1 lg:justify-self-end" : "lg:justify-self-start")}
                    >
                      <p className="label text-clay">{post.category}</p>
                      <h2 className="display-xl mt-3 text-[clamp(2.6rem,1rem+4vw,4.6rem)]">
                        <Link href={`/blog/${post.slug}`} className="transition-opacity hover:opacity-70">
                          {post.headline}
                        </Link>
                      </h2>
                      <p className="copy mt-4 text-[17px] normal-case tracking-normal lg:text-[19px]">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        aria-label={`Read more: ${post.title}`}
                        className="link-underline mt-5 inline-block text-[15px] font-semibold uppercase tracking-[0.12em] text-clay"
                      >
                        Read more
                      </Link>
                    </Reveal>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
