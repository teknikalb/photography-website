"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ContactForm from "@/components/contact-form"

export default function AboutPage() {
  const contactRef = useRef<HTMLElement>(null)
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 })
  const storyRef = useRef<HTMLElement>(null)
  const storyInView = useInView(storyRef, { once: true, amount: 0.15 })
  const quoteRef = useRef<HTMLElement>(null)
  const quoteInView = useInView(quoteRef, { once: true, amount: 0.3 })
  const valuesRef = useRef<HTMLElement>(null)
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero — typography-led, minimal */}
      <section className="relative overflow-hidden bg-page section-x pt-12 pb-8 sm:pt-14 sm:pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-14">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.span
            className="pill-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.span>
          <motion.h1
            className="mt-3 font-serif text-4xl font-light tracking-wide text-foreground sm:text-5xl md:text-6xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I&apos;m Greta
          </motion.h1>
          <motion.p
            className="mx-auto mt-3 max-w-lg text-base font-light tracking-wide text-muted-foreground sm:text-lg md:mt-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lifestyle photographer · Connecticut
          </motion.p>
          <motion.div
            className="divider mx-auto mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          />
        </div>
      </section>

      {/* Main story — portrait + full bio */}
      <section ref={storyRef} className="border-t border-border/60 bg-background section-x">
        <div className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
            {/* Portrait — responsive order and sizing */}
            <motion.div
              className="relative mx-auto w-full max-w-md md:col-span-5 md:max-w-none lg:col-span-5"
              initial={{ opacity: 0, y: 24 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-elegant md:aspect-[4/5]">
                <Image
                  src="/about-greta.webp"
                  alt="Greta Noelle — lifestyle photographer in Connecticut"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Subtle accent */}
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-lg border-2 border-primary/20 bg-page/80 md:-right-4 md:-bottom-4 md:h-28 md:w-28" aria-hidden />
            </motion.div>

            {/* Bio copy */}
            <motion.div
              className="md:col-span-7 lg:col-span-7 md:pt-4"
              initial={{ opacity: 0, x: 20 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="prose-reading max-w-none space-y-6">
                <p className="text-[17px] leading-8 text-muted-foreground md:text-[18px]">
                  I&apos;m a lifestyle photographer based in beautiful Connecticut, where every season offers its own kind of magic. I&apos;ve been married for six years and am a proud mom to an amazing six-year-old girl, who has been my greatest inspiration since day one. When I&apos;m not photographing or chasing after my daughter, you&apos;ll find me with a coffee in hand watching Friends or Everybody Loves Raymond, whilst unwinding with my cats.
                </p>
                <p className="text-[17px] leading-8 text-muted-foreground md:text-[18px]">
                  I love capturing natural, heartfelt photos of families and couples because life&apos;s best moments deserve to be remembered. I believe photos should feel like memories, not just pictures.
                </p>
                <p className="text-[17px] leading-8 text-muted-foreground md:text-[18px]">
                  My goal is for you to feel like you&apos;re just hanging out with a friend who happens to have a camera. So let&apos;s grab a coffee (or bring one to the shoot!) and create something beautiful together!
                </p>
              </div>
              <motion.div
                className="mt-8 sm:mt-10"
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-foreground transition-colors hover:text-primary"
                >
                  <span className="border-b border-current pb-0.5 transition-colors group-hover:border-primary">
                    GET IN TOUCH
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section ref={quoteRef} className="border-t border-border/60 bg-page/50 section-x py-14 sm:py-16 md:py-20">
        <div className="container mx-auto">
          <motion.blockquote
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-2xl font-light italic leading-relaxed text-foreground sm:text-3xl md:text-[2rem]">
              Photos should feel like memories, not just pictures.
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Values — minimal, three pillars */}
      <section ref={valuesRef} className="border-t border-border/60 bg-background section-x py-14 sm:py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              className="text-center font-serif text-2xl font-light tracking-wide text-foreground sm:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              What you can expect
            </motion.h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:mt-12 md:gap-8">
              {[
                {
                  title: "Natural & heartfelt",
                  desc: "Real moments and genuine emotion, not stiff poses.",
                },
                {
                  title: "Like a friend",
                  desc: "Relaxed, easy — you’ll feel like you’re hanging out with someone who gets you.",
                },
                {
                  title: "Create together",
                  desc: "We’ll make something beautiful — coffee optional but encouraged.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-border/70 bg-page/60 p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6 md:p-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <h3 className="font-serif text-lg font-medium tracking-wide text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="relative border-t border-border/60 bg-page section-x py-16 md:py-24">
        <div className="container relative z-10 mx-auto">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-light tracking-wide text-center text-foreground md:text-4xl">
              Let&apos;s create something beautiful
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              Say hello — I&apos;d love to hear from you.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
