"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Heart, Users, Baby, Camera, Calendar, MessageSquare } from "lucide-react"

const categories = [
  {
    id: "family",
    icon: <Users className="h-6 w-6" />,
    title: "Family",
    description: "Beautiful, natural family portraits that showcase your connections in Connecticut.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    href: "/portfolio/family",
  },
  {
    id: "maternity",
    icon: <Baby className="h-6 w-6" />,
    title: "Maternity",
    description: "Celebrating the beauty and anticipation of motherhood in Connecticut.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
    href: "/portfolio/maternity",
  },
  {
    id: "portraits",
    icon: <Camera className="h-6 w-6" />,
    title: "Portraits",
    description: "Professional portraits that capture your authentic self in Hartford, New Haven, and all of New England.",
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=1200&auto=format&fit=crop",
    href: "/portfolio/portraits",
  },
  {
    id: "milestones",
    icon: <Calendar className="h-6 w-6" />,
    title: "Milestones",
    description: "Commemorating life's special moments and achievements in Connecticut.",
    image: "https://images.unsplash.com/photo-1484665754804-74b091211472?q=80&w=1200&auto=format&fit=crop",
    href: "/portfolio/milestones",
  },
  {
    id: "mothers-day-minis",
    icon: <Heart className="h-6 w-6" />,
    title: "Mother's Day Minis",
    description: "Special mini sessions to celebrate the beautiful bond between you and your little ones in Connecticut.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop",
    href: "/services/mothers-day-minis",
  },
]

export default function ServiceSelector() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-0">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="pill-badge">Find Your Perfect Session</span>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">
            Explore Photography Services
          </h2>
          <div className="divider"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Select a category to discover the perfect photography experience for your special moments
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categories.indexOf(category) * 0.1 }}
              className={`flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory.id === category.id
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:text-primary"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="mt-8">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full overflow-hidden rounded-xl p-8 md:p-12 text-gray-800"
          >
            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-serif text-3xl font-light md:text-4xl text-gray-900">{activeCategory.title}</h3>
                <p className="mt-4 text-lg text-gray-700">{activeCategory.description}</p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Camera className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Professional Equipment</h4>
                      <p className="text-sm text-gray-600">High-quality cameras and lenses for stunning results</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Guided Experience</h4>
                      <p className="text-sm text-gray-600">Direction and posing guidance throughout your session</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Personalized Touch</h4>
                      <p className="text-sm text-gray-600">Custom approach tailored to your unique story</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0">
                  <Link 
                    href={activeCategory.href} 
                    className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                  >
                    <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                      VIEW {activeCategory.title.toUpperCase()} GALLERY
                    </span>
                    <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                  >
                    <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                      BOOK A SESSION
                    </span>
                    <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <Image
                  src={activeCategory.image || "/placeholder.svg"}
                  alt={activeCategory.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
