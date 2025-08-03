"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Define sample logo images using placeholder URLs
const asSeenInImages = [
  { src: "/as-seen-in2.png", alt: "As Seen In Image 2" },
  { src: "/as-seen-in3.png", alt: "As Seen In Image 3" },
  { src: "/as-seen-in4.png", alt: "As Seen In Image 4" },
  { src: "/as-seen-in5.png", alt: "As Seen In Image 5" },
];

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
    alt: "Family session at park"
  },
  {
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800",
    alt: "Couple walking motion blur"
  },
  {
    url: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=800",
    alt: "Newborn session at home"
  },
  {
    url: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=800",
    alt: "Portrait session outdoors"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    alt: "Mother and child in field"
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800",
    alt: "Mother's Day mini session"
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800",
    alt: "Couple engagement session"
  },
  {
    url: "https://images.unsplash.com/photo-1484665754804-74b091211472?q=80&w=800",
    alt: "Milestone birthday celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800",
    alt: "Portrait of photographer"
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    alt: "Event group photo"
  }
]

export default function AsSeenIn() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const [imageRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  return (
    <>
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-light text-gray-800">As Seen In</h2>
          </motion.div>

          <div className="mt-8 flex flex-nowrap overflow-x-auto items-center justify-start gap-4 md:flex-wrap md:justify-center md:gap-10 lg:gap-12 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {asSeenInImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-24 h-10 flex-shrink-0 md:w-48 md:h-20 lg:w-56 lg:h-24"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 w-screen overflow-hidden">
        <div className="overflow-hidden" ref={imageRef}>
          <div className="flex">
            {carouselImages.map((image, index) => (
              <div 
                key={index}
                className="flex-[0_0_15%] min-w-0 relative aspect-[2/3] mx-[0.25%]"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="15vw"
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 