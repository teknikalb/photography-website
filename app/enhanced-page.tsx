"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ServiceSelector from "@/components/service-selector"
import PortfolioGallery from "@/components/portfolio-gallery"
// import DynamicHome from "@/components/dynamic-home" // Removed as component doesn't exist
import { GlassCard } from "@/components/glass-card"
import AsSeenIn from "@/components/as-seen-in"
import AboutMe from "@/components/about-me"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"

export default function EnhancedHome() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const ctaRef = useRef(null)
  const testimonialsRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
        <motion.div style={{ scale, y }} className="w-full h-full">
          <Image
            src="/family10.webp"
            alt="Family, maternity, and portrait photography hero image"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-right md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-4xl font-bold tracking-wide text-white/95 sm:text-5xl md:text-6xl lg:text-7xl">
              Drena Noelle Photography
            </h1>
            <p className="mt-6 text-lg font-medium text-white/90 md:text-xl">
            Connecticut, New England Family Photographer
            </p>
            <div className="mt-10 flex flex-col space-y-6 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
              <Link 
                href="/portfolio" 
                className="inline-block text-sm font-medium tracking-[0.2em] text-white/90 group"
              >
                <span className="block border-t border-white/50 pt-2 pb-1 group-hover:border-white transition-colors">
                  VIEW PORTFOLIO
                </span>
                <span className="block border-b border-white/50 group-hover:border-white transition-colors"></span>
              </Link>
              <Link 
                href="/contact" 
                className="inline-block text-sm font-medium tracking-[0.2em] text-white/90 group"
              >
                <span className="block border-t border-white/50 pt-2 pb-1 group-hover:border-white transition-colors">
                  BOOK A SESSION
                </span>
                <span className="block border-b border-white/50 group-hover:border-white transition-colors"></span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mini Session Highlight Banner */}
      <section className="w-full bg-primary/10 py-8 flex justify-center items-center">
        <div className="max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Mini Sessions Now Booking!</h2>
          <p className="text-lg text-gray-700 mb-4">Celebrate the beauty of spring in Connecticut with quick, affordable mini sessions for families, maternity, and portraits. Limited spots available in Hartford, New Haven, and all of Connecticut. Book your spring mini session today!</p>
          <Link href="/mini-sessions" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
            View All Mini Sessions
          </Link>
        </div>
      </section>

      {/* As Seen In Section - 15px padding */}
      <section className="py-[15px]">
        <AsSeenIn />
      </section>

      {/* Services Section - 15px padding */}
      <section ref={servicesRef} className="py-[15px]">
        <ServiceSelector />
      </section>
      
      {/* Portfolio Gallery - 15px padding */}
      <section ref={portfolioRef} className="py-[15px]">
        <PortfolioGallery />
      </section>

      {/* About Me Section - 15px padding */}
      <AboutMe />

      {/* Testimonials Section - Add ref if needed */}
      <section ref={testimonialsRef} className="py-[15px]">
        <Testimonials />
      </section>

      {/* CTA / Contact Form Section */}
      <section ref={ctaRef} className="relative py-16 bg-[#F5F0EA]">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-light text-center mb-8 text-gray-900">Get In Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
