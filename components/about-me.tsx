"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto section-x">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, rootMargin: "100px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="pill-badge">About</span>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl text-foreground">
            Hi! I&apos;m Greta
          </h2>
          <div className="divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05, rootMargin: "100px 0px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground mb-4 text-center md:text-left">
              AND I CAN&apos;T WAIT TO GET TO KNOW YOU!
            </p>
            <div className="mx-auto md:mx-0 h-10 w-px bg-border mb-8"></div>

            <div className="font-serif text-base text-muted-foreground space-y-4 text-left">
              <p>
                I&apos;m a lifestyle photographer based in beautiful Connecticut, where every season offers its own kind of magic. I love capturing natural, heartfelt photos of families and couples because life&apos;s best moments deserve to be remembered. I believe photos should feel like memories, not just pictures.
              </p>
              <p>
                My goal is for you to feel like you&apos;re just hanging out with a friend who happens to have a camera. So let&apos;s grab a coffee (or bring one to the shoot!) and create something beautiful together!
              </p>
            </div>

            <div className="mt-10 text-center md:text-left">
              <Link
                href="/about"
                className="inline-block text-sm font-medium tracking-[0.2em] text-foreground group"
              >
                <span className="block border-t border-border pt-2 pb-1 group-hover:border-primary transition-colors">
                  GET TO KNOW ME
                </span>
                <span className="block border-b border-border group-hover:border-primary transition-colors"></span>
              </Link>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05, rootMargin: "100px 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-lg md:order-last"
          >
            <Image
              src="/about-greta.webp"
              alt="Greta Noelle — lifestyle photographer in Connecticut"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 60vw, 320px"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
