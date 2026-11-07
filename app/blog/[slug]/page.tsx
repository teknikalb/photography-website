import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Pill from "@/components/site/pill"
import { Cover } from "@/components/site/sections"
import { POSTS, getPost, relatedPosts } from "@/lib/blog"
import { SITE } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `/blog/${post.slug}`
  // Keep <title> short enough for search results: drop the "(...)" suffix, add the brand only if it fits.
  const base = post.title.replace(/\s*\([^)]*\)\s*$/, "")
  const branded = `${base} | ${SITE.name}`
  return {
    title: { absolute: branded.length <= 62 ? branded : base },
    description: `${post.excerpt} Tips from Greta Noelle Photography in Connecticut.`,
    keywords: [post.category, "Connecticut photographer", "family photography tips"],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: post.photo.alt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/og-image.jpg"] },
  }
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  // Give each heading an id so the "On this page" list can link to it.
  const html = post.content.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_match, level, inner) => `<h${level} id="${slugify(inner)}">${inner}</h${level}>`,
  )
  const toc = [...html.matchAll(/<h[23] id="(.*?)">([\s\S]*?)<\/h[23]>/g)].map((m) => ({
    id: m[1],
    text: m[2].replace(/<[^>]*>/g, "").replace(/&amp;/g, "&"),
  }))
  const related = relatedPosts(post.slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: `${SITE.url}/og-image.jpg`,
        mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
        articleSection: post.category,
        inLanguage: "en-US",
        author: { "@type": "Person", name: "Greta Noelle", url: `${SITE.url}/about` },
        publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="pt-header bg-page">
        <header className="wrap pb-[36px] pt-[40px] lg:pb-[56px] lg:pt-[64px]">
          <nav aria-label="Breadcrumb" className="text-[14px]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4 hover:no-underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="underline underline-offset-4 hover:no-underline">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>
          <p className="mt-8 label">{post.category}</p>
          <h1 className="display-lg mt-3 max-w-[960px]">{post.title}</h1>
        </header>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-[1280px] sm:aspect-[16/9] lg:aspect-[2/1]">
          <Cover photo={post.photo} sizes="(max-width: 1280px) 100vw, 1280px" priority />
        </div>

        <div className="wrap py-[48px] lg:py-[80px]">
          <div className="mx-auto max-w-[760px]">
            {toc.length > 1 && (
              <nav aria-label="On this page" className="mb-10 border-y border-ink/25 py-6">
                <p className="label">On this page</p>
                <ul className="mt-3 space-y-1.5 text-[18px]">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="underline underline-offset-4 hover:no-underline">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="prose-reading" dangerouslySetInnerHTML={{ __html: html }} />

            <div className="mt-14 border-t border-ink/25 pt-10">
              <p className="lead normal-case tracking-normal">
                Planning a session? I photograph families, couples and moms-to-be across Connecticut, including
                Newington, Hartford, West Hartford, Glastonbury and New Haven. See{" "}
                <Link href="/services" className="underline underline-offset-4 hover:no-underline">
                  packages and pricing
                </Link>{" "}
                or browse the{" "}
                <Link href="/portfolio" className="underline underline-offset-4 hover:no-underline">
                  portfolio
                </Link>
                .
              </p>
              <div className="mt-8">
                <Pill href="/contact">Book a session</Pill>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-reading" className="bg-cream py-[56px] lg:py-[90px]">
        <div className="wrap">
          <h2 id="more-reading" className="display-md">
            Keep <em>reading</em>
          </h2>
          <ul className="mt-8 grid list-none gap-8 sm:grid-cols-2 lg:mt-12 lg:gap-12">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="group block">
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Cover
                      photo={item.photo}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="display-md mt-5 group-hover:opacity-70">{item.headline}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
