"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function MothersDayMinisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1920&auto=format&fit=crop"
          alt="Mother's Day Minis hero image"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg px-8 py-10 inline-block">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-white drop-shadow-lg">Mother's Day Minis 🌿🌸</h1>
            <p className="mt-6 max-w-xl text-lg font-light md:max-w-2xl md:text-xl text-white drop-shadow">
              Celebrate the beautiful bond between you and your little ones with a special mini session.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="rounded-2xl border border-primary bg-primary/5 shadow-xl p-10 text-center mx-auto">
            <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Mother's Day Mini Session</h2>
            <div className="text-3xl font-bold text-primary mb-6">$300</div>
            <ul className="mt-6 space-y-3 text-left inline-block">
              <li className="flex items-start text-gray-700"><Check className="mr-2 h-5 w-5 shrink-0 text-primary" />30 minutes of guided photography</li>
              <li className="flex items-start text-gray-700"><Check className="mr-2 h-5 w-5 shrink-0 text-primary" />20 professionally edited photos</li>
              <li className="flex items-start text-gray-700"><Check className="mr-2 h-5 w-5 shrink-0 text-primary" />Intimate session designed to honor every mama</li>
              <li className="flex items-start text-gray-700"><Check className="mr-2 h-5 w-5 shrink-0 text-primary" />Capture memories with your babies, no matter how big or small</li>
              <li className="flex items-start text-gray-700"><Check className="mr-2 h-5 w-5 shrink-0 text-primary" />Arrive on time as sessions are scheduled back-to-back</li>
              <li className="flex items-start text-gray-700"><Check className="mr-2 h-5 w-5 shrink-0 text-primary" />Laugh, cuddle, and capture these fleeting moments</li>
            </ul>
            <p className="mt-8 text-gray-700">
              Because you deserve to be in the frame, to laugh, cuddle, and capture these fleeting moments with the ones who mean the most to you.<br/>
              It's important to arrive on time for your session, as each mini session is scheduled back-to-back. This ensures we can make the most of your session time and deliver the beautiful photos you are dreaming of!
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 