"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Define sample logo images using placeholder URLs
const asSeenInImages = [
  { src: "/as-seen-in2.webp", alt: "As Seen In Image 2" },
  { src: "/as-seen-in3.webp", alt: "As Seen In Image 3" },
  { src: "/as-seen-in4.webp", alt: "As Seen In Image 4" },
  { src: "/as-seen-in5.webp", alt: "As Seen In Image 5" },
];

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1602255680702-c47261041a97?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Family session at park"
  },
  {
    url: "https://images.unsplash.com/photo-1721635238761-569bcfb3b88e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Couple walking motion blur"
  },
  {
    url: "https://images.unsplash.com/photo-1605812830488-f4004ac546e7?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Newborn session at home"
  },
  {
    url: "https://images.unsplash.com/photo-1616003471864-9abfeee24576?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Portrait session outdoors"
  },
  {
    url: "https://images.unsplash.com/photo-1526277015674-026cb84653ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mother and child in field"
  },
  {
    url: "https://images.unsplash.com/photo-1551498624-3712f8e41930?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mother's Day mini session"
  },
  {
    url: "https://images.unsplash.com/photo-1543420502-52efc1a35184?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Couple engagement session"
  },
  {
    url: "https://images.unsplash.com/photo-1734943757796-366ab4eb02b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Milestone birthday celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1694199372711-c67a3b3ccc4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Portrait of photographer"
  },
  {
    url: "https://images.unsplash.com/photo-1690223878885-4646ced5b907?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  sizes="(min-width: 1024px) 14rem, (min-width: 768px) 12rem, 6rem"
                  priority={index < 2}
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
                  sizes="(min-width: 1024px) 15vw, (min-width: 768px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 