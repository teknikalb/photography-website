import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import Reveal from "@/components/site/reveal"
import { Cover } from "@/components/site/sections"
import { GALLERY, SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book a Connecticut Photographer",
  description:
    "Get in touch to book a family, maternity or couple session with Greta Noelle. Serving Hartford, New Haven and all of Connecticut.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Connecticut Family & Maternity Photographer",
    description: "Get in touch with Greta. Serving all of Connecticut.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <section className="bg-taupe">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_657px]">
        <div className="pt-header">
          <div className="px-[23px] pb-[64px] pt-[48px] md:px-10 lg:pb-[90px] lg:pl-[max(2.5rem,calc((100vw-1200px)/2))] lg:pr-[70px] lg:pt-[56px]">
            <Reveal>
              <h1 className="display-xl rise">
                Get in <em>touch</em>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="lead mt-6 max-w-[560px] space-y-3">
                <p>I can&rsquo;t wait to work with you!</p>
                <p className="copy lg:text-[19.5px]">
                  Tell me a little about yourself, the type of session you&rsquo;re looking for and any dates or
                  locations you already have in mind. I&rsquo;ll get back to you with availability, pricing and the
                  next steps.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-10 max-w-[560px]">
              <ContactForm />
            </Reveal>

            <Reveal delay={100} className="mt-14 max-w-[560px] border-t border-ink/30 pt-8">
              <blockquote>
                <p className="font-serif text-[1.9rem] italic leading-[1.1] lg:text-[2.2rem]">
                  &ldquo;We didn&rsquo;t know we were making memories, we were just having fun.&rdquo;
                </p>
                <footer className="label mt-3">Winnie the Pooh</footer>
              </blockquote>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="label">Email</dt>
                  <dd className="mt-1 text-[19px] font-medium">
                    <a href={`mailto:${SITE.email}`} className="link-underline">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label">Instagram</dt>
                  <dd className="mt-1 text-[19px] font-medium">
                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
                      {SITE.handle}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="copy mt-6 text-[17px]">
                Based in Newington and photographing across Connecticut, including Hartford, West Hartford,
                Glastonbury, New Haven and Greenwich.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden lg:min-h-0">
          <div className="hero-zoom absolute inset-0">
            <Cover photo={GALLERY[12]} sizes="(max-width: 1024px) 100vw, 657px" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
