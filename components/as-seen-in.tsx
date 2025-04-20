"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Define sample logo images using placeholder URLs
const asSeenInImages = [
  { src: "/as-seen-in1.png", alt: "As Seen In Style Me Pretty" },
  { src: "/as-seen-in2.png", alt: "As Seen In Image 2" },
  { src: "/as-seen-in3.png", alt: "As Seen In Image 3" },
  { src: "/as-seen-in4.png", alt: "As Seen In Image 4" },
  { src: "/as-seen-in5.png", alt: "As Seen In Image 5" },
];

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    alt: "Wedding stationery and details"
  },
  {
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800",
    alt: "Couple walking motion blur"
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
    alt: "Wedding ceremony with floral arch"
  },
  {
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800",
    alt: "Bride and groom portrait"
  },
  {
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
    alt: "Wedding chapel interior"
  },
  {
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800",
    alt: "Bridesmaids in blue dresses"
  },
  {
    url: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=800",
    alt: "Wedding celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=800",
    alt: "Outdoor wedding setup"
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
    }
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