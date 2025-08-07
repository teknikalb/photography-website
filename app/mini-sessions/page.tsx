"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Check, Star, Gift, Calendar, Clock, Image as ImageIcon, PawPrint } from "lucide-react"

const bundles = [
  {
    id: "all-three",
    title: "Capture the Seasons Bundle",
    subtitle: "ALL 3 MINI SESSIONS",
    price: "$525",
    originalPrice: "$600",
    savings: "$75",
    sessions: ["Fall", "Christmas", "Valentine's"],
    features: [
      "30 mins each session",
      "15 edited images per session",
      "Online gallery",
      "Perfect for year-round memories"
    ],
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    popular: true
  },
  {
    id: "fall-christmas",
    title: "Fall + Christmas Bundle",
    subtitle: "🍁 + 🎄",
    price: "$350",
    originalPrice: "$400",
    savings: "$50",
    sessions: ["Fall", "Christmas"],
    features: [
      "30 mins each session",
      "15 edited images per session",
      "Perfect for family photos & holiday cards"
    ],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "christmas-valentines",
    title: "Christmas + Valentine's Bundle",
    subtitle: "🎄 + 💘",
    price: "$350",
    originalPrice: "$400",
    savings: "$50",
    sessions: ["Christmas", "Valentine's"],
    features: [
      "30 mins each session",
      "15 edited images per session",
      "Cozy winter & romantic Valentine's themes"
    ],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop"
  }
]

const individualSessions = [
  {
    id: "fall",
    title: "Fall Mini",
    price: "$200",
    features: ["30 mins", "15 images", "Outdoor foliage"],
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    emoji: "🍂"
  },
  {
    id: "christmas",
    title: "Christmas Mini",
    price: "$200",
    features: ["30 mins", "15 images", "Cozy set or tree farm"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    emoji: "🎄"
  },
  {
    id: "valentines",
    title: "Valentine's Mini",
    price: "$200",
    features: ["30 mins", "15 images", "Romantic or playful"],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop",
    emoji: "💌"
  },
  {
    id: "holiday-pet",
    title: "Holiday Pet Mini",
    price: "$150",
    features: ["30 mins", "10 images", "Festive setup (Santa hats welcome!)"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop",
    emoji: "🐾"
  }
]

const addOns = [
  { name: "Extra images", description: "Additional edited photos" },
  { name: "Full gallery", description: "Access to all session photos" },
  { name: "Prints", description: "Professional quality prints" },
  { name: "Rush delivery", description: "Expedited editing & delivery" }
]

export default function MiniSessionsPage() {
  const [activeBundle, setActiveBundle] = useState<string | null>(null)
  const [activeIndividual, setActiveIndividual] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F5F0EA]">
             {/* Hero Section */}
       <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Seasonal Mini Session Bundles
          </h1>
          <p className="text-xl font-light text-gray-700">
            🍂🎄❤🐾 FALL • CHRISTMAS • VALENTINE'S • HOLIDAY PET
          </p>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Bundle & Save!</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Capture multiple seasons and save big with our seasonal mini session bundles. 
              Perfect for families who want year-round memories!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className={`relative rounded-2xl border-2 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  bundle.popular ? 'border-primary ring-4 ring-primary/20' : 'border-gray-200'
                } ${activeBundle === bundle.id ? 'ring-4 ring-primary/40' : ''}`}
                onMouseEnter={() => setActiveBundle(bundle.id)}
                onMouseLeave={() => setActiveBundle(null)}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-medium mb-2">{bundle.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{bundle.subtitle}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{bundle.price}</span>
                    <span className="text-lg text-gray-500 line-through">{bundle.originalPrice}</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <Gift className="h-4 w-4" />
                    Save {bundle.savings}
                  </div>
                </div>

                <div className="mb-6">
                  <Image
                    src={bundle.image}
                    alt={bundle.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  {bundle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-block text-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
                >
                  Book This Bundle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Individual Mini Sessions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Prefer to book sessions individually? Each mini session includes 30 minutes and 15 edited images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {individualSessions.map((session) => (
              <div
                key={session.id}
                className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeIndividual === session.id ? 'ring-4 ring-primary/40' : ''
                }`}
                onMouseEnter={() => setActiveIndividual(session.id)}
                onMouseLeave={() => setActiveIndividual(null)}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{session.emoji}</span>
                  <h3 className="font-serif text-xl font-medium mb-2">{session.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{session.price}</div>
                </div>

                <div className="mb-6">
                  <Image
                    src={session.image}
                    alt={session.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  {session.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-block text-center rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700 shadow"
                >
                  Book {session.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Add-ons Available!</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Enhance your session with additional services and products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <ImageIcon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Limited Spots Available</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Don't miss out on these seasonal mini sessions! Book early to secure your preferred date and time.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
          >
            Book Your Session Now
          </Link>
        </div>
      </section>
    </div>
  )
} 