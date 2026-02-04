"use client"

import Image from "next/image"
import Link from "next/link"

export default function HolidayMiniSessionsPage() {
  return (
    <div className="container mx-auto section-x py-16 max-w-2xl">
      <h1 className="font-serif text-4xl font-light mb-6 text-center mt-12">Holiday Mini Sessions in Connecticut</h1>
      <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop" alt="Holiday Mini Sessions" width={600} height={400} className="rounded-lg object-cover mb-6 mx-auto" />
      <p className="mb-4 text-lg text-gray-700 text-center">Celebrate the season with beautiful holiday mini sessions. Perfect for gifts, keepsakes, and capturing the magic of the holidays with your family—limited spots available.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">What to Expect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>15-20 minute guided session</li>
        <li>8+ professionally edited images</li>
        <li>Floral and spring-inspired indoor or outdoor setups</li>
        <li>Perfect for moms, families, and children</li>
        <li>Quick, fun, and stress-free experience</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Ideal Locations</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Local studios with seasonal decor</li>
        <li>Outdoor parks and gardens across Connecticut</li>
        <li>In-home sessions for an intimate, cozy feel</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Sample Session Flow</h2>
      <ol className="list-decimal ml-6 mb-4 text-gray-700">
        <li>Start with the whole family or group together (smile, then unposed, then walking)</li>
        <li>Siblings or kids with mom (giggles, hugs, playful prompts)</li>
        <li>Individual portraits of mom (with and without floral props)</li>
        <li>Parents or couples together (smile, candid, fun prompts)</li>
      </ol>
      <p className="mb-8 text-gray-700">This flow ensures a variety of authentic, heartfelt images in a short time, inspired by <a href='https://www.myclickmagazine.com/perfect-mini-session-flow-20-minutes/' className='text-primary underline' target='_blank' rel='noopener noreferrer'>Click Magazine's mini session tips</a>.</p>
      <div className="text-center">
        <Link href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
          Book Your Holiday Mini Session
        </Link>
      </div>
    </div>
  )
} 