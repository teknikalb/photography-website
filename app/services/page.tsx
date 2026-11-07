import type { Metadata } from "next"
import FaqList from "@/components/site/faq-list"
import Reveal from "@/components/site/reveal"
import Pill from "@/components/site/pill"
import { CtaBanner, Cover, HeroImage, InstagramStrip, KindWords } from "@/components/site/sections"
import { EXPERIENCE, FAQS, GALLERY, PHOTOS, SERVICES, SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Photography Services & Pricing",
  description:
    "Family and couple sessions from $375, maternity from $425, graduation from $225 and seasonal minis from $250. Packages, pricing and FAQs for Connecticut photography.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Photography Services & Pricing | Connecticut",
    description: "Packages and pricing for family, maternity, couple and graduation photography in Connecticut.",
    url: "/services",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative isolate h-[560px] overflow-hidden bg-taupe lg:h-[790px]">
        <HeroImage photo={GALLERY[9]} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/15 to-ink/10" aria-hidden />
        <div className="wrap pt-[calc(var(--header-h)+40px)] lg:pt-[230px]">
          <h1 className="display-xl rise text-bone [text-shadow:0_2px_30px_rgba(47,46,34,0.4)]">
            Pricing &amp; packages
            <span className="sr-only"> for Connecticut family, maternity and couples photography</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section aria-labelledby="intro" className="bg-page py-[64px] lg:py-[90px]">
        <div className="wrap text-center">
          <Reveal>
            <h2 id="intro" className="mx-auto max-w-[860px]">
              <span className="block text-[clamp(1.9rem,1.2rem+2.2vw,3rem)] leading-[1]">
                Photography for couples, families
              </span>
              <em className="block text-[clamp(4rem,2rem+8vw,7.6rem)] leading-[0.9]">and little ones</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="lead mx-auto mt-8 max-w-[695px] space-y-5">
              <p>
                Each session is relaxed and gently guided so you can focus on being together while I photograph
                things as they unfold.
              </p>
              <p>
                Below you can find more information about the sessions and packages I offer across Connecticut.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section aria-labelledby="packages" className="bg-cream py-[64px] lg:py-[100px]">
        <div className="wrap">
          <Reveal>
            <h2 id="packages" className="display-xl text-center">
              Sessions <em>+</em> pricing
            </h2>
          </Reveal>
          <ul className="mt-12 grid list-none gap-x-[100px] gap-y-16 sm:grid-cols-2 lg:mt-[64px] lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <li key={service.id}>
                <Reveal delay={(index % 3) * 120}>
                  <article className="text-center">
                    <div className="group relative aspect-[333/251] w-full overflow-hidden">
                      <Cover
                        photo={service.photo}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 333px"
                        className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    {service.tagline && <p className="label mt-6 text-clay">{service.tagline}</p>}
                    <h3 className={`${service.tagline ? "mt-2" : "mt-6"} text-[1.7rem] leading-tight`}>{service.title}</h3>
                    <p className="copy mt-3 text-[17px] lg:text-[17.5px]">{service.blurb}</p>
                    <ul className="mt-4 space-y-1 text-[16px] font-medium uppercase tracking-[0.04em]">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-5 font-serif text-[1.9rem] italic leading-none">From ${service.from}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="mt-14 text-center">
            <Pill href="/contact" tone="clay">
              Book a session
            </Pill>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section aria-labelledby="expect" className="bg-page py-[64px] lg:py-[100px]">
        <div className="wrap">
          <Reveal>
            <h2 id="expect" className="display-xl text-center">
              What to <em>expect</em>
            </h2>
          </Reveal>
          <ul className="mt-12 grid list-none gap-10 lg:mt-[56px] lg:grid-cols-3 lg:gap-[70px]">
            {EXPERIENCE.pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <Reveal delay={index * 120} className="text-center">
                  <h3 className="text-[1.8rem] leading-tight lg:text-[2.1rem]">{pillar.title}</h3>
                  <p className="copy mt-3">{pillar.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <ol className="mt-16 grid list-none gap-x-[60px] gap-y-10 border-t border-ink/25 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCE.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 100}>
                  <p className="font-serif text-[2.6rem] italic leading-none text-clay">0{index + 1}</p>
                  <h3 className="mt-3 text-[1.5rem] leading-tight">{step.title}</h3>
                  <p className="copy mt-2 text-[17px]">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="bg-cream py-[64px] lg:py-[100px]">
        <div className="wrap lg:px-[151px]">
          <Reveal>
            <h2 id="faq" className="display-xl mb-8 text-center lg:mb-[40px]">
              Things you might <em>want to know</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FaqList faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <KindWords photo={GALLERY[1]} />

      <CtaBanner photo={PHOTOS.banner} label="lets connect" tall />

      <InstagramStrip photos={GALLERY.slice(5, 10)} large />
    </>
  )
}
