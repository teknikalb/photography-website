"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const categories = [
  {
    id: "events",
    name: "Events",
    description: "Capturing milestones, celebrations, and corporate gatherings.",
  },
  {
    id: "maternity",
    name: "Maternity",
    description: "Celebrating the beautiful journey to motherhood.",
  },
  {
    id: "couples",
    name: "Couples",
  },
  {
    id: "family",
    name: "Family",
  },
  {
    id: "portraits",
    name: "Portraits",
  },
]

const portfolioItems = [
  {
    id: 2,
    category: "family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    title: "The Johnson Family",
    description: "Fall family session at Cedar Park",
  },
  {
    id: 3,
    category: "maternity",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=800&auto=format&fit=crop",
    title: "Baby Emma",
    description: "Newborn session at 8 days new",
  },
  {
    id: 4,
    category: "couples",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800&auto=format&fit=crop",
    title: "Alex & Jamie",
    description: "Sunset engagement at Coastal Cliffs",
  },
  {
    id: 5,
    category: "portraits",
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=800&auto=format&fit=crop",
    title: "Madison",
    description: "Senior portraits, Class of 2023",
  },
]

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("events")
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
    },
    [Autoplay({ delay: 4000 })]
  )

  const filteredItems =
    activeCategory === "events" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-0">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="pill-badge">Portfolio</span>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">Explore My Work</h2>
          <div className="divider"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">Browse through my portfolio by category</p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 md:px-6 md:py-2 ${
                activeCategory === category.id
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative mr-4 flex-[0_0_400px] overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                    <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center text-sm font-medium text-primary hover-underline"
          >
            View full portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
