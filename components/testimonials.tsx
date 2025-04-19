"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import { Quote } from "lucide-react"
import { FaStar } from 'react-icons/fa'
import { FaGoogle, FaYelp } from 'react-icons/fa'
import { SiTrustpilot } from 'react-icons/si'

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding, Lakeside Vineyard",
    quote: "Working with Katie was an absolute dream! She captured our day so perfectly, making us feel comfortable and natural. The photos are breathtaking!"
  },
  {
    name: "The Johnson Family",
    event: "Family Session, Cedar Park",
    quote: "Katie has a magical way with kids! She captured the genuine joy and chaos of our family beautifully. We treasure these photos."
  },
  {
    name: "Alex & Jamie",
    event: "Engagement Session, Coastal Cliffs",
    quote: "We were nervous about being in front of the camera, but Katie made it so fun and easy. The photos truly reflect our relationship."
  },
  {
    name: "Jessica & David",
    event: "Wedding, Historic Mansion",
    quote: "From start to finish, Katie was professional, kind, and incredibly talented. Our wedding photos exceeded all expectations."
  },
  {
    name: "The Martinez Family",
    event: "Summer Beach Session",
    quote: "The photos are stunning! Katie captured the light and our family's connection perfectly. Highly recommend!"
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [emblaRef] = useEmblaCarousel({ 
    loop: false, // Loop might not be ideal if there are only a few testimonials
    align: "start",
    containScroll: "trimSnaps",
  })

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="pill-badge">Kind Words</span>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl text-gray-800">
            What Clients Say
          </h2>
          <div className="divider"></div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="overflow-hidden"
          ref={emblaRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_90%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_33.33%]">
                <div className="h-full flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" aria-hidden="true" />
                  <p className="flex-grow font-serif text-gray-700 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review Source Boxes */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
            <FaGoogle className="text-3xl text-blue-600" />
            <div className="flex items-center mt-2">
              <span className="text-sm font-semibold mr-2">5/5</span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
            <SiTrustpilot className="text-3xl text-green-500" />
            <div className="flex items-center mt-2">
              <span className="text-sm font-semibold mr-2">4.8/5</span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "text-yellow-500" : "text-gray-300"} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
            <FaYelp className="text-3xl text-red-600" />
            <div className="flex items-center mt-2">
              <span className="text-sm font-semibold mr-2">4.5/5</span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "text-yellow-500" : "text-gray-300"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 