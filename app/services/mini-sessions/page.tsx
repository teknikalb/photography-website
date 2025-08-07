"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, Sparkles, Heart, Camera, Calendar, Gift, Star, Clock } from "lucide-react"
import FAQ, { standardFAQs } from "@/components/faq"
import Testimonials from "@/components/testimonials"

const miniSessionPackages = [
  {
    name: "Spring Mini Session",
    price: "$200",
    duration: "30 minutes",
    images: "15 edited images",
    description: "Celebrate the beauty of spring with quick, affordable sessions",
    features: [
      "30 minutes of shooting time",
      "1 location",
      "15 edited images",
      "Online gallery with digital downloads",
      "Print release",
      "Perfect for families, maternity, and portraits",
    ],
    highlights: ["Limited availability", "Perfect for spring photos", "Great for social media"],
  },
  {
    name: "Fall Mini Session",
    price: "$200",
    duration: "30 minutes",
    images: "15 edited images",
    description: "Capture the warm colors and cozy vibes of autumn",
    features: [
      "30 minutes of shooting time",
      "1 location",
      "15 edited images",
      "Online gallery with digital downloads",
      "Print release",
      "Perfect for holiday cards and family photos",
    ],
    highlights: ["Seasonal availability", "Beautiful autumn colors", "Perfect for holiday cards"],
  },
  {
    name: "Holiday Mini Session",
    price: "$200",
    duration: "30 minutes",
    images: "15 edited images",
    description: "Festive sessions for the holiday season",
    features: [
      "30 minutes of shooting time",
      "1 location",
      "15 edited images",
      "Festive setup and props",
      "Online gallery with digital downloads",
      "Print release",
    ],
    highlights: ["Limited time availability", "Festive props included", "Perfect for holiday cards"],
  },
]

export default function MiniSessionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Mini Sessions
          </h1>
          <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto mb-8">
            Quick, affordable sessions perfect for capturing special moments and seasonal themes. Perfect for families, maternity, and portraits who want beautiful photos without the full session commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4 text-primary" />
              <span>15 edited images</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-primary" />
              <span>Perfect for seasonal themes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Mini Session Packages</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Choose the perfect mini session for your needs. All sessions include professional editing and a private online gallery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {miniSessionPackages.map((pkg, index) => (
                <div key={pkg.name} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <p className="text-gray-600 text-sm">{pkg.duration} • {pkg.images}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-center">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2 mb-6">
                      {pkg.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href="/contact"
                      className="w-full inline-block text-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
                    >
                      Book {pkg.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mini Sessions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Why Choose Mini Sessions?</h2>
            <p className="text-lg text-gray-700 mb-12">
              Perfect for busy families and individuals who want beautiful photos without the full session commitment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-900">Quick & Convenient</h3>
                <p className="text-gray-700">Just 30 minutes of your time for beautiful, professional photos.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-900">Affordable</h3>
                <p className="text-gray-700">Professional quality at a fraction of the cost of full sessions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-900">Seasonal Themes</h3>
                <p className="text-gray-700">Perfect for capturing seasonal moments and holiday cards.</p>
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
            <h2 className="font-serif text-3xl font-light mb-4 text-white">Ready to Book Your Mini Session?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Limited spots available! Book your mini session today and capture beautiful memories in just 30 minutes.
            </p>
            <Link 
              href="/contact" 
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg"
            >
              Book Your Mini Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
