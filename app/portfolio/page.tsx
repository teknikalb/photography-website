import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Heart, Users, Calendar, Award, Sparkles } from "lucide-react"
import Testimonials from "@/components/testimonials"
import DualPortfolioSliders from "@/components/dual-portfolio-sliders"

const categories = [
  {
    id: "family",
    title: "Family",
    description: "Beautiful, natural family portraits that showcase your connections",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Users,
  },
  {
    id: "couples",
    title: "Couples & Engagements",
    description: "Celebrating your love story with romantic, authentic portraits",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    icon: Heart,
  },
  {
    id: "motherhood",
    title: "Motherhood",
    description: "Capturing the special bond between mothers and their children",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    icon: Heart,
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Professional portraits that capture your authentic self",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200&auto=format&fit=crop",
    icon: Camera,
  },
  {
    id: "milestones",
    title: "Milestones",
    description: "Commemorating life's special moments and achievements",
    image: "https://images.unsplash.com/photo-1484665754804-74b091211472?q=80&w=1200&auto=format&fit=crop",
    icon: Award,
  },
  {
    id: "events",
    title: "Events",
    description: "Milestones, celebrations, corporate gatherings & more",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    icon: Calendar,
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-[#F5F0EA] sm:pt-20 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Dual Portfolio Sliders */}
      <DualPortfolioSliders />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-12 bg-gray-900 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-light mb-4 text-white sm:text-3xl">Ready to Capture Your Story?</h2>
            <p className="text-base mb-6 text-gray-300 sm:text-lg sm:mb-8">
              Let's create something beautiful together. Book your session or reach out to discuss your vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-block rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg sm:px-8 sm:text-lg"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
