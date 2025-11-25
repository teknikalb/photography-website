"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, PawPrint, Heart, Camera, Calendar, Gift, Star } from "lucide-react"
import FAQ, { standardFAQs } from "@/components/faq"
import Testimonials from "@/components/testimonials"
import Script from "next/script"

const petPackages = [
  {
    name: "Pawtrait Mini",
    price: "$130",
    duration: "20 minutes",
    images: "10 edited images",
    description: "Perfect for quick portraits and special occasions",
    features: [
      "20 minutes of shooting time",
      "10 edited images",
      "Outdoor or studio location",
      "Great for birthdays or quick portraits",
      "Includes a treat bag!",
    ],
    highlights: ["Quick & affordable", "Perfect for first-time pet sessions", "Great for social media"],
  },
  {
    name: "Fur-Ever Memories Full Session",
    price: "$250",
    duration: "45 minutes",
    images: "20 edited images",
    description: "Comprehensive session for lasting memories",
    features: [
      "45 minutes of shooting time",
      "20 edited images",
      "Owner + pet or pet-only",
      "2 looks or locations",
      "Perfect for holiday cards or framed prints!",
    ],
    highlights: ["Most popular choice", "Comprehensive coverage", "Perfect for holiday cards"],
  },
  {
    name: "Holiday Pet Mini",
    price: "$150",
    duration: "30 minutes",
    images: "10 edited images",
    description: "Festive sessions for the holiday season",
    features: [
      "30 minutes of shooting time",
      "10 edited images",
      "Festive setup (Santa hats welcome!)",
      "Booking for November–December",
    ],
    highlights: ["Limited time availability", "Festive props included", "Perfect for holiday cards"],
  },
]

const petFAQs = [
  {
    question: "How do you work with pets during sessions?",
    answer: "I take a patient, gentle approach with all pets. I let them get comfortable with me and the camera, and I'm experienced in working with pets of all temperaments. We take breaks when needed and make sure your pet is happy throughout the session."
  },
  {
    question: "Can I be in the photos with my pet?",
    answer: "Absolutely! The 'Fur-Ever Memories' package is perfect for owner + pet portraits. I love capturing the special bond between pets and their humans. We can do a mix of pet-only and owner + pet photos."
  },
  {
    question: "What if my pet is nervous or doesn't cooperate?",
    answer: "Don't worry! I'm experienced with all types of pets and personalities. We'll take our time, use treats and toys, and I'll work with your pet's comfort level. Some of the best photos come from natural, relaxed moments."
  },
  {
    question: "Do you provide props and accessories?",
    answer: "For the Holiday Pet Mini sessions, I provide festive props like Santa hats and holiday decorations. For other sessions, I can suggest simple props, but I also love natural, candid shots that capture your pet's personality."
  },
  {
    question: "How long does it take to get my photos?",
    answer: "You'll receive your edited images within 2-3 weeks in a private online gallery. You can download all your images and share them with family and friends."
  },
  {
    question: "Where do pet sessions take place?",
    answer: "Pet sessions can be held outdoors at parks, your backyard, or other pet-friendly locations. I also offer studio sessions for a more controlled environment. We'll discuss the best location for your pet's comfort and personality."
  },
]

export default function PetPhotographyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      <Script id="schema-service-pet" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Pet Photography",
          description: "Beautiful portraits of your pets and your bond across Connecticut.",
          areaServed: ["Hartford", "New Haven", "West Hartford", "Stamford", "Glastonbury", "Connecticut"],
          provider: {
            "@type": "Organization",
            name: "Greta Noelle Photography",
            url: "https://gretanoellephoto.com"
          },
          serviceType: "Photography"
        })}
      </Script>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <PawPrint className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Pet Photography
          </h1>
          <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto mb-8">
            Because pets are family too! Capture your furry friends in beautiful, natural portraits that showcase their unique personality and the special bond you share.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Patient & gentle approach</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4 text-primary" />
              <span>Natural & candid moments</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-primary" />
              <span>Includes treats & toys</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Pet Photography Packages</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Choose the perfect package for your furry friend. All sessions include professional editing and a private online gallery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {petPackages.map((pkg, index) => (
                <div key={pkg.name} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <p className="text-gray-600 text-sm">{pkg.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Images:</span>
                        <span className="font-medium">{pkg.images}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight, highlightIndex) => (
                          <span key={highlightIndex} className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            <Star className="h-3 w-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-center font-semibold transition-colors"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pet Photography Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Why Choose Pet Photography?</h2>
              <p className="text-lg text-gray-700">
                I understand that pets are family members too, and I'm passionate about capturing their unique personalities and the special bond you share.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Patient & Gentle Approach</h3>
                  <p className="text-gray-700">I take my time to let your pet get comfortable with me and the camera. We work at their pace and take breaks when needed.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Natural & Candid Moments</h3>
                  <p className="text-gray-700">I capture authentic moments that showcase your pet's true personality, from playful antics to quiet, loving moments.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Treats & Toys Included</h3>
                  <p className="text-gray-700">I bring treats and toys to help keep your pet engaged and happy during the session. Their comfort is my priority.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Flexible Scheduling</h3>
                  <p className="text-gray-700">I work around your schedule and your pet's routine. Early morning or evening sessions are available for pets who prefer cooler weather.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ faqs={petFAQs} />

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-white">Ready to Capture Your Pet's Personality?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's create beautiful memories of your furry family member. Book your pet photography session today!
            </p>
            <Link 
              href="/contact" 
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg"
            >
              Book Your Pet Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 