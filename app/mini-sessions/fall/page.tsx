"use client"

import Image from "next/image"
import Link from "next/link"

export default function FallMiniSessionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="font-serif text-4xl font-light mb-6 text-center mt-12">Fall Mini Sessions in Connecticut</h1>
      <Image src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" alt="Fall Mini Session" width={600} height={400} className="rounded-lg object-cover mb-6 mx-auto" />
      <p className="mb-4 text-lg text-gray-700 text-center">Capture the magic of autumn with fall mini sessions among Connecticut's colorful leaves. These quick sessions are perfect for updating your family photos or celebrating a milestone. Book your fall mini session in Hartford or New Haven today!</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">What to Expect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>20-minute guided session</li>
        <li>10+ professionally edited images</li>
        <li>Outdoor locations with vibrant fall foliage</li>
        <li>Perfect for families, maternity, and children</li>
        <li>Quick, fun, and stress-free experience</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Ideal Locations</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Elizabeth Park, Hartford</li>
        <li>East Rock Park, New Haven</li>
        <li>Local forests and parks across Connecticut</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Sample Session Flow</h2>
      <ol className="list-decimal ml-6 mb-4 text-gray-700">
        <li>Start with the whole family together (smile, then unposed, then walking)</li>
        <li>Siblings together (giggles, hugs, playful prompts)</li>
        <li>Individual portraits of each child</li>
        <li>Parents together (smile, candid, fun prompts)</li>
        <li>Each parent with the children (cuddles, playful moments)</li>
      </ol>
      <p className="mb-8 text-gray-700">This flow ensures a variety of authentic, beautiful images in a short time, inspired by <a href='https://www.myclickmagazine.com/perfect-mini-session-flow-20-minutes/' className='text-primary underline' target='_blank' rel='noopener noreferrer'>Click Magazine's mini session tips</a>.</p>
      <div className="text-center">
        <Link href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
          Book Your Fall Mini Session
        </Link>
      </div>
    </div>
  )
} 