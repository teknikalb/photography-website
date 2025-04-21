"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const miniSessions = [
  {
    id: "spring",
    title: "Spring Mini Sessions",
    description: "Celebrate the beauty of spring in Connecticut with outdoor family, maternity, and portrait mini sessions. Capture blooming flowers, fresh greenery, and joyful moments in the warming weather.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600&auto=format&fit=crop",
    cta: "Book Your Spring Mini Session"
  },
  {
    id: "mothers-day",
    title: "Mother's Day Minis",
    description: "Special Mother's Day mini sessions designed to honor the bond between mothers and their children. Perfect for capturing cuddles, laughter, and love in a quick, guided session.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop",
    cta: "Reserve Your Mother's Day Mini"
  },
  {
    id: "summer",
    title: "Summer Mini Sessions",
    description: "Take advantage of long days and golden sunsets with summer mini sessions. Ideal for families, couples, and milestone moments at parks, beaches, or urban locations.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
    cta: "Book Your Summer Mini Session"
  },
  {
    id: "back-to-school",
    title: "Back-to-School Minis",
    description: "Mark the start of a new school year with fun, personality-filled back-to-school mini sessions. Great for kids, siblings, and families.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop",
    cta: "Book Your Back-to-School Mini"
  },
  {
    id: "fall",
    title: "Fall Mini Sessions",
    description: "Capture the vibrant colors of autumn with fall mini sessions in Connecticut's beautiful parks and forests. Perfect for family portraits, maternity, and milestone moments.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    cta: "Book Your Fall Mini Session"
  },
  {
    id: "holiday",
    title: "Holiday Mini Sessions",
    description: "Get festive with holiday mini sessions! Perfect for Christmas cards, family updates, and capturing cozy moments. Indoor and outdoor options available.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    cta: "Book Your Holiday Mini Session"
  }
]

export default function MiniSessionsPage() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="font-serif text-4xl font-light mb-8 text-center mt-12">Connecticut Mini Sessions – Seasonal Specials</h1>
      <p className="mb-10 text-center text-lg text-gray-700">Quick, affordable, and fun mini sessions for every season! Book your spot for spring, summer, fall, holiday, and more in Hartford, New Haven, and all of Connecticut.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {miniSessions.map((mini) => (
          <Link
            key={mini.id}
            href={`/mini-sessions/${mini.id}`}
            className={`group relative rounded-2xl border border-gray-200 bg-white shadow-md p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/30 ${active === mini.id ? 'ring-4 ring-primary/40' : ''}`}
            onMouseEnter={() => setActive(mini.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(mini.id)}
            onBlur={() => setActive(null)}
          >
            <div className="w-full flex items-center justify-center mb-4">
              <Image
                src={mini.image}
                alt={mini.title}
                width={360}
                height={220}
                className="object-cover rounded-lg w-[360px] h-[220px] group-hover:scale-105 transition-transform duration-500"
                priority={false}
              />
            </div>
            <h2 className="font-serif text-xl font-medium mb-2 text-center group-hover:text-primary transition-colors">{mini.title}</h2>
            <p className="mb-4 text-gray-700 text-center">{mini.description}</p>
            <span className="mt-auto inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90 shadow">
              {mini.cta}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
} 