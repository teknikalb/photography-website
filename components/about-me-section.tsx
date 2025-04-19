"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Camera, Award, Clock } from "lucide-react"

export default function AboutMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop"
                alt="Photographer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border-4 border-white bg-primary p-4 text-white md:flex md:items-center md:justify-center">
              <div className="text-center">
                <p className="font-serif text-xl font-light">10+</p>
                <p className="text-xs">Years of Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="pill-badge">About Me</span>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">
              Capturing Life's Beautiful Moments
            </h2>
            <div className="divider"></div>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Hello! I'm Sarah, the passionate photographer behind Luminous Photography. For over a decade, I've been
              dedicated to capturing the authentic, emotional moments that tell your unique story.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              My approach is natural, authentic, and focused on creating a comfortable experience that results in
              timeless images you'll cherish for generations. I believe that the best photographs happen when you feel
              relaxed and can truly be yourself.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Artistic Vision</h3>
                  <p className="text-gray-600">Unique perspective and creative composition</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Award Winning</h3>
                  <p className="text-gray-600">Recognized excellence in photography</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Timely Delivery</h3>
                  <p className="text-gray-600">Quick turnaround on all sessions</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary group">
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
