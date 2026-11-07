import type { Metadata } from "next"
import Pill from "@/components/site/pill"
import Reveal from "@/components/site/reveal"
import { Cover, HeroImage } from "@/components/site/sections"
import { GALLERY, PHOTOS } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Greta, CT Family Photographer",
  description:
    "Meet Greta, a fine art family and lifestyle photographer in Newington, CT who photographs real, lived-in moments for couples, families and moms-to-be.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Greta, Connecticut Family Photographer",
    description:
      "Meet Greta, a fine art family and lifestyle photographer in Newington, CT who photographs real, lived-in moments.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[780px] overflow-hidden bg-taupe lg:h-[1116px]">
        <HeroImage photo={GALLERY[6]} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/10" aria-hidden />
        <div className="wrap pt-[calc(var(--header-h)+48px)] text-bone lg:pt-[259px]">
          <h1 className="display-xl rise max-w-[1049px] text-bone [text-shadow:0_2px_30px_rgba(47,46,34,0.4)]">
            Hello, I&rsquo;m Greta.
          </h1>
          <p className="lead rise mt-6 max-w-[897px] text-bone lg:mt-[30px]" style={{ "--d": "0.5s" } as React.CSSProperties}>
            There is something extraordinary about ordinary life. The seasons we move through so quickly are often the
            ones we wish we could return to: the laugh of your child, the way they reached for you when they were
            small, the feeling of being surrounded by the people who made a house feel like home. I photograph for
            that reason, not to create a version of life that feels perfect, but to preserve the beauty that is
            already there.
          </p>
        </div>
      </section>

      {/* How it all began */}
      <section aria-labelledby="began" className="bg-page py-[64px] lg:pb-[24px] lg:pt-[70px]">
        <div className="wrap">
          <div className="grid items-start gap-10 lg:grid-cols-[540px_1fr] lg:gap-[15px]">
            <div className="relative order-2 mx-auto aspect-[540/835] w-full max-w-[540px] lg:order-1 lg:mx-0">
              <Reveal className="absolute left-0 top-0 aspect-[292/431] w-[54%]">
                <div className="relative h-full w-full overflow-hidden">
                  <Cover photo={PHOTOS.about} sizes="(max-width: 1024px) 50vw, 292px" />
                </div>
              </Reveal>
              <Reveal delay={200} className="absolute left-[21.7%] top-[26.3%] aspect-[410/615] w-[76%]">
                <div className="relative h-full w-full overflow-hidden shadow-[0_0_0_6px_hsl(var(--background))]">
                  <Cover photo={GALLERY[4]} sizes="(max-width: 1024px) 70vw, 410px" />
                </div>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 id="began" className="display-xl">
                  How it all <em>began</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="copy mt-8 max-w-[645px] space-y-[1.1rem] lg:mt-[22px]">
                  <p>
                    I was born and raised in Albania, where some of my earliest memories are rooted in togetherness
                    and finding beauty in the little things.
                  </p>
                  <p>
                    I eventually made my way to Connecticut, and somewhere along that journey photography became more
                    than just something I loved. It became a way for me to hold onto the moments that pass far too
                    quickly.
                  </p>
                  <p>
                    My work is inspired by genuine connection, beautiful simplicity and the quiet poetry found in
                    everyday moments. I want my photographs to feel lived-in and timeless, images that don&rsquo;t
                    simply remind you of what a season looked like, but bring you back to how it felt.
                  </p>
                  <p>Because life moves quickly. And sometimes a photograph is the little piece of it we get to keep.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section aria-labelledby="promise" className="bg-cream py-[64px] lg:pb-[24px] lg:pt-[60px]">
        <div className="wrap">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_544px] lg:gap-[110px]">
            <div>
              <Reveal>
                <h2 id="promise" className="display-xl max-w-[642px]">
                  My promise <em>to you</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="copy mt-8 max-w-[594px] space-y-[1.1rem] lg:mt-[44px]">
                  <p>
                    My goal is for your photos to feel less like a photoshoot and more like a memory: something that
                    takes you right back to how it felt to be there, years from now.
                  </p>
                  <p>
                    I know that being in front of a camera can feel intimidating, especially for families with little
                    kids. That&rsquo;s why I put care into an experience that feels relaxed from the very beginning,
                    with outfit and location ideas, gentle guidance and space for everyone to simply enjoy being
                    together.
                  </p>
                  <p>The kind of moments you&rsquo;ll miss one day.</p>
                </div>
              </Reveal>
              <Reveal delay={220} className="mt-9">
                <Pill href="/contact" tone="clay">
                  Contact
                </Pill>
              </Reveal>
            </div>
            <Reveal variant="fade" className="relative aspect-[544/801] w-full max-w-[544px]">
              <div className="relative h-full w-full overflow-hidden">
                <Cover photo={GALLERY[0]} sizes="(max-width: 1024px) 100vw, 544px" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Favorite things */}
      <section aria-labelledby="favorites" className="bg-sand py-[64px] lg:pb-[90px] lg:pt-[97px]">
        <div className="wrap">
          <div className="grid items-start gap-10 lg:grid-cols-[544px_1fr] lg:gap-[61px]">
            <div>
              <Reveal>
                <h2 id="favorites" className="display-xl max-w-[342px]">
                  A few of my <em>favorite</em> <span className="not-italic">things:</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="copy mt-8 space-y-[1.1rem] lg:mt-[44px]">
                  <p>
                    A coffee in hand while I chase after my daughter, reruns of Everybody Loves Raymond and my cats
                    curled up on the couch. When I&rsquo;m not photographing, that&rsquo;s where you&rsquo;ll find me.
                  </p>
                  <p>
                    If this feels like your kind of session, I&rsquo;d love to hear from you. Tell me about your
                    family and let&rsquo;s create photos that feel like you.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="relative mx-auto aspect-[595/801] w-full max-w-[595px] lg:mx-0 lg:-mt-[37px]">
              <Reveal className="absolute left-0 top-0 aspect-[292/468] w-[49%]">
                <div className="relative h-full w-full overflow-hidden">
                  <Cover photo={GALLERY[2]} sizes="(max-width: 1024px) 45vw, 292px" />
                </div>
              </Reveal>
              <Reveal delay={200} className="absolute left-[51%] top-[50.6%] aspect-[292/396] w-[49%]">
                <div className="relative h-full w-full overflow-hidden">
                  <Cover photo={GALLERY[3]} sizes="(max-width: 1024px) 45vw, 292px" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
