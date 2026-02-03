"use client"

import Script from "next/script"
import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function FamilyServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <Script id="schema-service-family" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Family Photography",
          description: "Family sessions in your home or outdoors. Up to an hour, 50+ edited images, style guidance included.",
          areaServed: ["Newington", "Wethersfield", "Glastonbury", "West Hartford", "Rocky Hill", "Southington", "Litchfield", "Greenwich", "Darien", "Connecticut"],
          provider: { "@type": "Organization", name: "Greta Noelle Photography", url: "https://gretanoellephoto.com" },
          serviceType: "Photography"
        })}
      </Script>
      <section className="pt-24 pb-8 sm:pb-10 bg-page">
        <div className="container mx-auto section-x text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Family Session
            </h1>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto">
              Whether we&apos;re capturing your family&apos;s story in the comfort of your home or enjoying time together outdoors, I&apos;m truly excited to help create beautiful memories with you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 border-t border-border/60">
        <div className="container mx-auto section-x">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <p>
                Sessions last up to an hour and include one optional outfit change. You&apos;ll receive <strong>50+ edited digital images</strong> in a private online gallery to share with the people you love most.
              </p>
              <p>
                Style guidance is included to help everyone feel comfortable and camera-ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 bg-page rounded-2xl shadow-lg p-8"
            >
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">What&apos;s Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Up to 1 hour of shooting time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>One optional outfit change</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>50+ edited digital images</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Private online gallery to share with family</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Style guidance so everyone feels camera-ready</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-page rounded-2xl shadow-lg p-8 text-center"
            >
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-4">Investment</h3>
              <p className="text-4xl font-bold text-primary">$450 <span className="text-lg font-normal text-gray-600">+ tax</span></p>
              <Link href="/contact" className="mt-6 inline-block w-full max-w-xs mx-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full text-center font-semibold transition-colors">
                Book Your Session
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 text-center space-y-4">
              <Link href="/portfolio/family" className="block text-sm font-medium tracking-[0.2em] text-gray-700 group">
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">VIEW FAMILY PORTFOLIO</span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
              <Link href="/contact" className="block text-sm font-medium tracking-[0.2em] text-gray-700 group">
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">GET IN TOUCH</span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
