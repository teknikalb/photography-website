"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const publications = [
  {
    name: "Style Me Pretty",
    logo: "/logos/style-me-pretty.svg",
    alt: "Style Me Pretty Logo"
  },
  {
    name: "Martha Stewart Weddings",
    logo: "/logos/martha-stewart-weddings.svg",
    alt: "Martha Stewart Weddings Logo"
  },
  {
    name: "Ruffled Blog",
    logo: "/logos/ruffled.svg",
    alt: "Ruffled Blog Logo"
  },
  {
    name: "The Knot",
    logo: "/logos/the-knot.svg",
    alt: "The Knot Logo"
  },
  {
    name: "Wedding Chicks",
    logo: "/logos/wedding-chicks.svg",
    alt: "Wedding Chicks Logo"
  }
]

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
  
  const [logoRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: "trimSnaps"
    },
    [Autoplay()]
  )

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

          <div className="mt-8 overflow-hidden" ref={logoRef}>
            <div className="flex -ml-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.name}
                  className="flex-[0_0_50%] min-w-0 pl-4 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-12 sm:h-16 grayscale transition-all duration-300 hover:grayscale-0">
                    <Image
                      src={pub.logo}
                      alt={pub.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 