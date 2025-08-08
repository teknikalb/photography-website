"use client"

import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import { Check, Users, Camera, Heart, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function FamilyServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      <Script id="schema-service-family" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Family Photography",
          description: "Beautiful, natural family portraits across Connecticut.",
          areaServed: ["Hartford", "New Haven", "West Hartford", "Stamford", "Glastonbury", "Connecticut"],
          provider: {
            "@type": "Organization",
            name: "Drena Noelle Photography",
            url: "https://drenanoellephoto.com"
          },
          serviceType: "Photography"
        })}
      </Script>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Family Sessions
            </h1>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto">
              Beautiful, natural family portraits that showcase your connections and create lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl font-light text-gray-800 mb-6">
                Capturing Your Family's Unique Bond
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Family sessions are about celebrating connection, laughter, and the love you share. 
                My approach is relaxed and fun, allowing your family's personality to shine through in every image.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium text-gray-800 mb-3">All Ages Welcome</h3>
                <p className="text-gray-600">From newborns to grandparents, I capture families of all sizes and ages.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium text-gray-800 mb-3">Natural & Relaxed</h3>
                <p className="text-gray-600">My approach is fun and stress-free, letting your family's personality shine.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium text-gray-800 mb-3">Meaningful Locations</h3>
                <p className="text-gray-600">Outdoor, in-home, or studio sessions that reflect your family's story.</p>
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-16"
            >
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-8 text-center">
                What's Included in Your Family Session
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Personalized session planning & consultation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Guidance on wardrobe & styling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Up to 60 minutes of shooting time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">1-2 thoughtfully chosen locations</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">25 beautifully edited images</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Online gallery with digital downloads</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Print release for all images</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Option for fine art prints & albums</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-16"
            >
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-8 text-center">
                Investment
              </h3>
              <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">$350</span>
                  <p className="text-gray-600 mt-2">Full Family Session</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Session Fee</span>
                    <span className="font-medium">$350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Digital Images</span>
                    <span className="font-medium">25 Images</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Print Release</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Online Gallery</span>
                    <span className="font-medium">Included</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full text-center font-semibold transition-colors block"
                >
                  Book Your Session
                </Link>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center space-y-6"
            >
              <h3 className="font-serif text-2xl font-light text-gray-800">
                Ready to Capture Your Family's Story?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/portfolio/family"
                  className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                >
                  <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                    VIEW FAMILY PORTFOLIO
                  </span>
                  <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                >
                  <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                    GET IN TOUCH
                  </span>
                  <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 