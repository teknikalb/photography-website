"use client"

import Script from "next/script"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CoupleSessionsServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <Script id="schema-service-couples" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Couple & Engagement Photography",
          description: "Relaxed couple and engagement sessions. Authentic, laid-back photos.",
          areaServed: ["Newington", "Wethersfield", "Glastonbury", "West Hartford", "Connecticut"],
          provider: { "@type": "Organization", name: "Greta Noelle Photography", url: "https://gretanoellephoto.com" },
          serviceType: "Photography"
        })}
      </Script>
      <section className="pt-24 pb-8 sm:pb-10 bg-page">
        <div className="container mx-auto section-x text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Couple Sessions
            </h1>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto">
              A relaxed and easygoing session to capture your love story. Perfect for couples or engagement sessions who want authentic, laid-back photos.
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
              className="bg-page rounded-2xl shadow-lg p-8 text-center"
            >
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-4">Investment</h3>
              <p className="text-4xl font-bold text-primary">$450 <span className="text-lg font-normal text-gray-600">+ tax</span></p>
              <Link href="/contact" className="mt-6 inline-block w-full max-w-xs mx-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full text-center font-semibold transition-colors">
                Book Your Session
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 text-center space-y-4">
              <Link href="/portfolio/couples" className="block text-sm font-medium tracking-[0.2em] text-gray-700 group">
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">VIEW COUPLES PORTFOLIO</span>
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
