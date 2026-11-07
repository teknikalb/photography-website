import type { Metadata } from "next"
import Pill from "@/components/site/pill"
import PhotoCarousel from "@/components/site/photo-carousel"
import Reveal from "@/components/site/reveal"
import { CtaBanner, HeroImage, InstagramStrip, KindWords, OvalPhoto } from "@/components/site/sections"
import { GALLERY, PHOTOS } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Connecticut Family & Maternity Photographer | Greta Noelle" },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      {/* Hero: full-bleed photo with the page headline */}
      <section className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-taupe lg:h-[1161px]">
        <HeroImage photo={PHOTOS.hero} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/60 via-ink/10 to-ink/25" aria-hidden />
        <div className="absolute bottom-[64px] left-0 w-full px-[23px] text-left lg:bottom-auto lg:left-[calc(50%+25px)] lg:top-[452px] lg:w-[820px] lg:-translate-x-1/2 lg:px-0 lg:text-center">
          <h1 className="display-lg rise text-bone [text-shadow:0_2px_30px_rgba(47,46,34,0.35)]">
            Connecticut family &amp; maternity photographer
          </h1>
          <p className="copy rise mt-5 text-bone" style={{ "--d": "0.55s" } as React.CSSProperties}>
            Finding beauty in the way life unfolds
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section aria-labelledby="welcome" className="bg-page py-[60px] lg:pb-[28px] lg:pt-[60px]">
        <div className="wrap">
          <div className="grid items-start gap-x-[90px] gap-y-8 lg:ml-[100px] lg:grid-cols-[443px_387px] lg:grid-rows-[auto_1fr] lg:gap-y-[22px] lg:[grid-template-areas:'head_photo''text_photo']">
            <Reveal className="lg:pt-[31px] lg:[grid-area:head]">
              <h2 id="welcome" className="display-xl">
                Hello, <em className="block">I&rsquo;m Greta</em>
              </h2>
            </Reveal>
            <Reveal delay={150} className="mx-auto lg:mx-0 lg:[grid-area:photo]">
              <OvalPhoto
                photo={PHOTOS.intro}
                sizes="(max-width: 1024px) 300px, 387px"
                className="w-[229px] sm:w-[300px] lg:w-[387px]"
              />
            </Reveal>
            <div className="lg:[grid-area:text]">
              <Reveal delay={120}>
                <div className="space-y-3">
                  <p className="copy">
                    I&rsquo;m a fine art family &amp; lifestyle photographer in Newington, Connecticut. I&rsquo;ve
                    always been drawn to the things that are easy to overlook: the way light falls across a face, the
                    softness of a mother holding her child and the laughter that happens between posed photographs.
                  </p>
                  <p className="copy">
                    I photograph couples, families and moms-to-be across Connecticut, from Hartford and West Hartford
                    to New Haven and Greenwich, so you can keep the moments that pass far too quickly.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220} className="mt-6 max-lg:text-center lg:mt-4">
                <Pill href="/about" className="max-lg:min-w-[255px] lg:h-[88px]">
                  About me
                </Pill>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Photo slider */}
      <section aria-labelledby="recent-work" className="bg-cream">
        <h2 id="recent-work" className="sr-only">
          Recent family, maternity and portrait sessions in Connecticut
        </h2>
        <Reveal variant="fade">
          <PhotoCarousel photos={GALLERY} label="Recent sessions" />
        </Reveal>
        <div className="h-0" />
      </section>

      <KindWords photo={GALLERY[3]} />

      <CtaBanner photo={PHOTOS.banner} />

      <InstagramStrip />
    </>
  )
}
