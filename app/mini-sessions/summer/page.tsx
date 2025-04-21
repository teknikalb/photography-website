"use client"

import Image from "next/image"
import Link from "next/link"

export default function SummerMiniSessionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="font-serif text-4xl font-light mb-6 text-center mt-12">Summer Mini Sessions in Connecticut</h1>
      <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop" alt="Summer Mini Session" width={600} height={400} className="rounded-lg object-cover mb-6 mx-auto" />
      <p className="mb-4 text-lg text-gray-700 text-center">Enjoy the golden light and warm evenings with summer mini sessions. Ideal for families, couples, and milestone moments at your favorite park or beach. Book your summer mini session in New Haven or Hartford now!</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">What to Expect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>20-minute guided session</li>
        <li>10+ professionally edited images</li>
        <li>Outdoor locations with summer scenery</li>
        <li>Perfect for families, couples, and children</li>
        <li>Quick, fun, and stress-free experience</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Ideal Locations</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Hammonasset Beach, Madison</li>
        <li>Elizabeth Park, Hartford</li>
        <li>Local parks and urban spots in New Haven and across Connecticut</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Sample Session Flow</h2>
      <ol className="list-decimal ml-6 mb-4 text-gray-700">
        <li>Start with the whole family or group together (smile, then unposed, then walking)</li>
        <li>Siblings or couples together (giggles, hugs, playful prompts)</li>
        <li>Individual portraits</li>
        <li>Parents or couples together (smile, candid, fun prompts)</li>
        <li>Each parent with the children (cuddles, playful moments)</li>
      </ol>
      <p className="mb-8 text-gray-700">This flow ensures a variety of authentic, beautiful images in a short time, inspired by <a href='https://www.myclickmagazine.com/perfect-mini-session-flow-20-minutes/' className='text-primary underline' target='_blank' rel='noopener noreferrer'>Click Magazine's mini session tips</a>.</p>
      <div className="text-center">
        <Link href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
          Book Your Summer Mini Session
        </Link>
      </div>
    </div>
  )
} 