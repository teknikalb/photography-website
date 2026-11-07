import Image from "next/image"
import Link from "next/link"
import Pill from "./pill"
import Reveal from "./reveal"
import Parallax from "./parallax"
import { GALLERY, PROMISE, SITE, TESTIMONIALS, type Photo } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Fill-parent photo. The parent must be `relative` and sized. */
export function Cover({
  photo,
  sizes,
  priority,
  className,
}: {
  photo: Photo
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      style={{ objectPosition: photo.position }}
    />
  )
}

/** Full-bleed hero photo with slow zoom-in on load and gentle parallax on scroll. */
export function HeroImage({ photo, sizes = "100vw" }: { photo: Photo; sizes?: string }) {
  return (
    <Parallax className="absolute inset-x-0 -top-[10%] -z-10 h-[120%]" speed={0.16}>
      <div className="hero-zoom relative h-full w-full">
        <Cover photo={photo} sizes={sizes} priority />
      </div>
    </Parallax>
  )
}

/** Full-width photo band with a single pill button ("lets chat"). */
export function CtaBanner({
  photo,
  href = "/contact",
  label = "lets chat",
  tall = false,
}: {
  photo: Photo
  href?: string
  label?: string
  tall?: boolean
}) {
  return (
    <section
      aria-label="Get in touch"
      className={cn(
        "relative isolate flex items-start justify-start overflow-hidden bg-taupe px-[23px] pt-[35px] lg:justify-end lg:px-0 lg:pt-[37px]",
        tall ? "h-[420px] lg:h-[467px]" : "h-[148px] md:h-[240px] lg:h-[320px]",
      )}
    >
      <Parallax className="absolute inset-x-0 -top-[12%] -z-10 h-[124%]" speed={0.1}>
        <Cover photo={photo} sizes="100vw" />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/15 to-transparent" aria-hidden />
      <Reveal variant="fade" className="lg:mr-[calc((100vw-1200px)/2+51px)]">
        <Pill href={href} tone="light" big={tall} className={cn("lg:min-w-[292px]", !tall && "lg:h-[63px]")}>
          {label}
        </Pill>
      </Reveal>
    </section>
  )
}

/** Instagram handle headline plus a row of photo tiles linking to the profile. */
export function InstagramStrip({ photos = GALLERY.slice(0, 5), large = false }: { photos?: Photo[]; large?: boolean }) {
  return (
    <section aria-label="Instagram" className="bg-page pb-[56px] pt-[56px] lg:pb-[136px] lg:pt-[120px]">
      <Reveal>
        <h2
          className={cn(
            "px-3 text-left lg:px-[23px] lg:text-center",
            large ? "display-xl" : "text-[clamp(2.1rem,1rem+2.8vw,2.75rem)] leading-[1.1]",
          )}
        >
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
            {SITE.handle}
          </a>
        </h2>
      </Reveal>
      <ul className="mt-[40px] grid list-none grid-cols-2 gap-5 px-[23px] md:grid-cols-5 md:px-0 lg:mt-[170px]">
        {photos.slice(0, 5).map((photo, index) => (
          <li key={`${photo.src}-${index}`}>
            <Reveal delay={index * 90}>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${SITE.handle} on Instagram`}
                className="group relative block aspect-square overflow-hidden"
              >
                <Cover
                  photo={photo}
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Oval photo frame (the reference crops its portraits to an ellipse). */
export function OvalPhoto({
  photo,
  className,
  sizes,
  priority,
}: {
  photo: Photo
  className?: string
  sizes: string
  priority?: boolean
}) {
  return (
    <div className={cn("relative aspect-[2/3] overflow-hidden rounded-[50%]", className)}>
      <Cover photo={photo} sizes={sizes} priority={priority} />
    </div>
  )
}

/**
 * "Kind Words" block. Shows real testimonials when they exist in lib/site.ts;
 * until then it shows Greta's own promise so no placeholder review is ever published.
 */
export function KindWords({ photo, index = 0, tone = "page" }: { photo: Photo; index?: number; tone?: "page" | "cream" }) {
  const testimonial = TESTIMONIALS.length ? TESTIMONIALS[index % TESTIMONIALS.length] : null
  const quote = testimonial ? `“${testimonial.quote}”` : PROMISE.quote
  const by = testimonial ? testimonial.by : PROMISE.by

  return (
    <section
      aria-labelledby="kind-words"
      className={cn("py-[56px] lg:py-[88px]", tone === "cream" ? "bg-cream" : "bg-page")}
    >
      <div className="wrap">
        <div className="grid gap-x-[115px] gap-y-6 lg:grid-cols-[336px_1fr] lg:items-start lg:pl-[53px]">
          <Reveal variant="fade" className="lg:col-start-2 lg:row-start-1 lg:max-w-[594px]">
            <h2 id="kind-words" className="display-xl text-center">
              {testimonial ? (
                <>
                  Kind <em>Words</em>
                </>
              ) : (
                <>
                  My <em>Promise</em>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal className="lg:col-start-1 lg:row-span-3 lg:row-start-1">
            <OvalPhoto photo={photo} sizes="336px" className="mx-auto w-[249px] lg:mx-0 lg:w-[336px]" />
          </Reveal>
          <Reveal delay={120} className="lg:col-start-2 lg:row-start-2 lg:max-w-[594px]">
            <blockquote>
              <p className="copy lg:text-[22px] lg:leading-[1.4]">{quote}</p>
            </blockquote>
          </Reveal>
          <Reveal delay={200} className="lg:col-start-2 lg:row-start-3 lg:max-w-[594px]">
            <p className="text-center font-serif text-[2.8rem] italic uppercase leading-none lg:text-[3.6rem]">{by}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Plain linked text for inline use. */
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="link-underline">
      {children}
    </Link>
  )
}
