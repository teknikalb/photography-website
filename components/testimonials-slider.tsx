"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
    quote:
      "Working with Luminous Photography was the best decision we made for our wedding. The photos are absolutely stunning and captured our day perfectly. Every time we look at them, we're transported back to those special moments.",
    rating: 5,
  },
  {
    id: 2,
    name: "The Johnson Family",
    role: "Family Session",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    quote:
      "Our family photos are treasures we'll cherish forever. The photographer made our kids feel comfortable and captured their personalities beautifully. The whole experience was enjoyable and stress-free.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Newborn Session",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=100&auto=format&fit=crop",
    quote:
      "The newborn session with our daughter was such a special experience. The photos are breathtaking and the service was exceptional from start to finish. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    id: 4,
    name: "David & James",
    role: "Engagement Photos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    quote:
      "Our engagement photos exceeded all expectations. The photographer found the perfect locations and made us feel so comfortable. The images perfectly capture our relationship and personalities.",
    rating: 5,
  },
  {
    id: 5,
    name: "Rebecca T.",
    role: "Portrait Session",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    quote:
      "I needed professional headshots but was nervous about being in front of the camera. The photographer immediately put me at ease and the results were amazing. I've received so many compliments!",
    rating: 5,
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentIndex])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="pill-badge">Testimonials</span>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">Client Love</h2>
          <div className="divider"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            What my clients are saying about their experience
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Trustpilot-style header */}
          <div className="mb-8 flex items-center justify-center">
            <div className="flex items-center">
              <div className="mr-2 text-lg font-bold text-green-600">Excellent</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-green-600 text-green-600" />
                ))}
              </div>
            </div>
            <div className="ml-4 text-sm text-gray-500">Based on {testimonials.length} reviews</div>
          </div>

          {/* Testimonial slider */}
          <div className="relative mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
            <div className="absolute -left-2 -top-2 text-primary opacity-20">
              <Quote className="h-16 w-16" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="mb-8 text-lg italic text-gray-700">"{testimonials[currentIndex].quote}"</p>

                <div className="flex items-center justify-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-md">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Verified Reviews"
                  className="h-auto w-auto"
                />
              </div>
              <p className="mt-2 text-sm font-medium">Verified Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-md">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="100% Satisfaction"
                  className="h-auto w-auto"
                />
              </div>
              <p className="mt-2 text-sm font-medium">100% Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-md">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Award Winning"
                  className="h-auto w-auto"
                />
              </div>
              <p className="mt-2 text-sm font-medium">Award Winning</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-md">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Professional"
                  className="h-auto w-auto"
                />
              </div>
              <p className="mt-2 text-sm font-medium">Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
