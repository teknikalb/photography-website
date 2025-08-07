"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Assuming you have a script font available, e.g., in globals.css or tailwind.config.js
// like 'font-script'

export default function AboutMe() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pill-badge">About</span>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl text-gray-800">
            Hi! I'm Greta
          </h2>
          <div className="divider"></div>
          {/* Optional: Add a short subtitle if desired */}
          {/* <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">A little bit about me and my passion</p> */}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Script Heading */}
            
            {/* Uppercase Subheading */}
            <p className="text-sm font-medium tracking-[0.2em] text-gray-600 mb-4 text-center">
              AND I CAN'T WAIT TO GET TO KNOW YOU!
            </p>
            {/* Divider */}
            <div className="mx-auto h-10 w-px bg-gray-400 mb-8"></div>

            {/* Body Text */}
            <div className="font-serif text-base text-gray-600 space-y-4 text-left">
              <p>
                I am so grateful that I get to document beautiful love stories. 
                As a thoughtful observer, I am obsessed with telling the truth 
                of your story while helping you feel calm, comfortable and 
                cared for. Always on the lookout for joy and happiness, I 
                absolutely love photographing weddings and families.
              </p>
              <p>
                I value and celebrate all love and I truly love what I do. I am 
                so thankful you are here.
              </p>
            </div>

            {/* Link/Button */}
            <div className="mt-10 text-center">
              <Link 
                href="/about" // Change href as needed
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  GET TO KNOW ME
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
            </div>
          </motion.div>

          {/* Image Column - Updated for Round Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Added classes for centering and round shape, adjusted aspect/sizing
            className="relative mx-auto w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-lg md:order-last"
          >
            <Image
              src="/about-greta.jpg" // Replace with actual image path
              alt="Photo of Greta, the photographer"
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