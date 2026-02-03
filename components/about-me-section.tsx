"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Heart, Camera, Coffee } from "lucide-react"

export default function AboutMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container mx-auto section-x">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-elegant lg:max-w-none">
              <Image
                src="/about-greta.webp"
                alt="Greta Noelle — lifestyle photographer in Connecticut"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="pill-badge">About Me</span>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">
              Hi, I&apos;m Greta
            </h2>
            <div className="divider"></div>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a lifestyle photographer based in beautiful Connecticut. I love capturing natural, heartfelt photos of families and couples — life&apos;s best moments deserve to be remembered. I believe photos should feel like memories, not just pictures.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My goal is for you to feel like you&apos;re just hanging out with a friend who happens to have a camera. So let&apos;s grab a coffee (or bring one to the shoot!) and create something beautiful together!
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-2">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-foreground">Natural & heartfelt</h3>
                <p className="text-sm text-muted-foreground">Real moments, real emotion</p>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-2">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-foreground">Like a friend</h3>
                <p className="text-sm text-muted-foreground">Relaxed, easy sessions</p>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:mb-2">
                  <Coffee className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-foreground">Create together</h3>
                <p className="text-sm text-muted-foreground">Coffee optional, fun guaranteed</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary group inline-flex items-center">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
