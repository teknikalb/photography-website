"use client"

import Image from "next/image"
import Link from "next/link"

export default function MothersDayMiniSessionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="font-serif text-4xl font-light mb-6 text-center mt-12">Mother's Day Mini Sessions in Connecticut</h1>
      <Image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop" alt="Mother's Day Mini Session" width={600} height={400} className="rounded-lg object-cover mb-6 mx-auto" />
      <p className="mb-4 text-lg text-gray-700 text-center">Honor the special bond between mother and child with a quick, heartfelt Mother's Day mini session. Capture cuddles, laughter, and love in a beautiful Connecticut setting. Reserve your spot for Mother's Day photos in Hartford, CT!</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">What to Expect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>20-minute guided session</li>
        <li>10+ professionally edited images</li>
        <li>Outdoor or indoor locations with spring blooms or cozy setups</li>
        <li>Perfect for mothers and children of all ages</li>
        <li>Quick, fun, and stress-free experience</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Ideal Locations</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Elizabeth Park, Hartford</li>
        <li>Local gardens, parks, or in-home sessions across Connecticut</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Sample Session Flow</h2>
      <ol className="list-decimal ml-6 mb-4 text-gray-700">
        <li>Start with mom and all children together (smile, then unposed, then walking)</li>
        <li>Mom with each child individually (cuddles, giggles, playful prompts)</li>
        <li>Children together (hugs, playful moments)</li>
        <li>Portraits of mom alone (empowering, joyful)</li>
      </ol>
      <p className="mb-8 text-gray-700">This flow ensures a variety of authentic, beautiful images in a short time, inspired by <a href='https://www.myclickmagazine.com/perfect-mini-session-flow-20-minutes/' className='text-primary underline' target='_blank' rel='noopener noreferrer'>Click Magazine's mini session tips</a>.</p>
      <div className="text-center">
        <Link href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
          Reserve Your Mother's Day Mini
        </Link>
      </div>
    </div>
  )
} 