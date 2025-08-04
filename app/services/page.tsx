"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, Camera, Heart, Users, Calendar, Award, Sparkles, ArrowRight } from "lucide-react"
import FAQ, { standardFAQs } from "@/components/faq"
import Testimonials from "@/components/testimonials"

const services = [
  {
    id: "family",
    title: "Family Sessions",
    description: "Beautiful, natural family portraits that showcase your connections and create lasting memories.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
    icon: Users,
    packages: [
      {
        name: "Full Family Session",
        price: "$350",
        features: [
          "Up to 60 minutes of shooting time",
          "1-2 thoughtfully chosen locations",
          "2 outfit changes (optional)",
          "25 edited images",
          "Online gallery with digital downloads",
          "Print release",
          "Perfect for families & motherhood sessions",
        ],
      },
    ],
  },
  {
    id: "events",
    title: "Events & Celebrations",
    description: "Capturing your special moments and celebrations with authentic, candid photography.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    icon: Calendar,
    packages: [
      {
        name: "Event Coverage",
        price: "$350",
        features: [
          "Up to 60 minutes of shooting time",
          "1-2 thoughtfully chosen locations",
          "2 outfit changes (optional)",
          "25 edited images",
          "Online gallery with digital downloads",
          "Print release",
          "Perfect for events & celebrations",
        ],
      },
    ],
  },
  {
    id: "maternity",
    title: "Maternity",
    description: "Capturing the special bond between mothers and their children in intimate, meaningful sessions.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    icon: Heart,
    packages: [
      {
        name: "Maternity Session",
        price: "$350",
        features: [
          "Up to 60 minutes of shooting time",
          "1-2 thoughtfully chosen locations",
          "2 outfit changes (optional)",
          "25 edited images",
          "Online gallery with digital downloads",
          "Print release",
          "Perfect for maternity & motherhood",
        ],
      },
    ],
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Professional portraits that capture your authentic self and tell your unique story.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
    icon: Camera,
    packages: [
      {
        name: "Portrait Session",
        price: "$350",
        features: [
          "Up to 60 minutes of shooting time",
          "1-2 thoughtfully chosen locations",
          "2 outfit changes (optional)",
          "25 edited images",
          "Online gallery with digital downloads",
          "Print release",
          "Perfect for graduation & branding",
        ],
      },
    ],
  },
]

export default function ServicesPage() {
  
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Services & Investment
          </h1>
          <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto">
            At Drena Noelle Photography, we believe every season of life deserves to be captured with care, creativity, and connection. Our sessions are designed to give you time to breathe, relax, and fully enjoy the experience.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-700 mb-12">
              From our first conversation to your final gallery, I'm here to make the process easy and enjoyable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-900">Book Your Session</h3>
                <p className="text-gray-700">Contact me to discuss your vision and schedule your session. I'll send you a style guide and help you prepare.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-900">Capture Memories</h3>
                <p className="text-gray-700">Relax and enjoy our time together. I'll guide you through poses while capturing natural, authentic moments.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-900">Receive Your Gallery</h3>
                <p className="text-gray-700">Within 2-3 weeks, you'll receive your beautiful, edited images in a private online gallery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ faqs={standardFAQs} />

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's create something beautiful together. Book your session or reach out to discuss your vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Service Card Component
interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: React.ComponentType<{ className?: string }>;
    packages: Array<{
      name: string;
      price: string;
      features: string[];
    }>;
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-4 left-4">
          <h3 className="font-serif text-2xl font-light text-white drop-shadow-lg">{service.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4">{service.description}</p>
        
        {/* Package Info */}
        {service.packages.map((pkg) => (
          <div key={pkg.name} className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-lg font-medium text-gray-900">{pkg.name}</span>
              <span className="text-2xl font-bold text-primary">{pkg.price}</span>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 mb-4">
              {pkg.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
              {pkg.features.length > 3 && (
                <li className="text-gray-500 italic">+ {pkg.features.length - 3} more...</li>
              )}
            </ul>
          </div>
        ))}
        
        <div className="flex gap-3">
          <Link
            href={`/services/${service.id}`}
            className="flex-1 rounded-full border border-primary bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 text-center text-sm font-semibold transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-center text-sm font-semibold transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
