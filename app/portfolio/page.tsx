import type { Metadata } from "next"
import PhotoCarousel from "@/components/site/photo-carousel"
import Reveal from "@/components/site/reveal"
import { Cover } from "@/components/site/sections"
import { GALLERY, PROMISE, TESTIMONIALS } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Family & Maternity Portfolio",
  description:
    "Browse recent fine art family, maternity and couples sessions photographed across Hartford County, New Haven and the Connecticut shoreline.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Family & Maternity Portfolio | Connecticut Photographer",
    description: "Recent family, maternity and couples sessions photographed across Connecticut.",
    url: "/portfolio",
  },
}

// Mix of portrait and landscape tiles for the masonry rhythm (matches the reference gallery).
const SHAPES = [
  "aspect-[2/3]",
  "aspect-[2/3]",
  "aspect-[3/2]",
  "aspect-[2/3]",
  "aspect-[2/3]",
  "aspect-[2/3]",
  "aspect-[3/2]",
  "aspect-[2/3]",
  "aspect-[2/3]",
  "aspect-[2/3]",
  "aspect-[3/2]",
  "aspect-[2/3]",
  "aspect-[2/3]",
  "aspect-[3/2]",
]

export default function PortfolioPage() {
  const testimonial = TESTIMONIALS[0]
  const quote = testimonial ? `“${testimonial.quote}”` : PROMISE.quote
  const by = testimonial ? `- ${testimonial.by}` : `- ${PROMISE.by}`

  return (
    <>
      <section className="pt-header bg-page">
        <div className="wrap pb-[40px] pt-[44px] lg:pb-[60px] lg:pt-[56px]">
          <Reveal>
            <h1 className="display-xl max-w-[900px]">
              Moments <em>framed</em> in time
              <span className="sr-only"> - Connecticut family, maternity and couples portfolio</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section aria-label="Photo gallery" className="bg-page pb-[64px] lg:pb-[100px]">
        <ul className="mx-auto columns-2 gap-[14px] px-[14px] [&>li]:mb-[14px] lg:columns-4 lg:gap-8 lg:px-[58px] lg:[&>li]:mb-8">
          {GALLERY.map((photo, index) => (
            <li key={`${photo.src}-${index}`} className="break-inside-avoid">
              <Reveal delay={(index % 4) * 90}>
                <div className={cn("group relative w-full overflow-hidden", SHAPES[index % SHAPES.length])}>
                  <Cover
                    photo={photo}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                    className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Words + overlapping photos */}
      <section aria-label="Kind words" className="bg-page pb-[64px] lg:pb-[110px]">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-[60px]">
            <div className="relative mx-auto aspect-[440/560] w-full max-w-[440px] lg:mx-0">
              <Reveal className="absolute left-0 top-0 aspect-[241/357] w-[55%]">
                <div className="relative h-full w-full overflow-hidden">
                  <Cover photo={GALLERY[5]} sizes="(max-width: 1024px) 40vw, 241px" />
                </div>
              </Reveal>
              <Reveal delay={200} className="absolute bottom-0 right-0 aspect-[292/247] w-[66%]">
                <div className="relative h-full w-full overflow-hidden shadow-[0_0_0_6px_hsl(var(--background))]">
                  <Cover photo={GALLERY[7]} sizes="(max-width: 1024px) 50vw, 292px" />
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="mx-auto max-w-[695px] text-center">
              <p className="lead">{quote}</p>
              <p className="copy mt-6">{by}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="More sessions" className="overflow-hidden bg-cream pb-[44px]">
        <PhotoCarousel photos={[...GALLERY].reverse().slice(0, 8)} label="More sessions" controls="left" />
      </section>
    </>
  )
}
