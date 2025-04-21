"use client"

import Image from "next/image"
import Link from "next/link"

export default function BackToSchoolMiniSessionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="font-serif text-4xl font-light mb-6 text-center mt-12">Back-to-School Mini Sessions in Connecticut</h1>
      <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop" alt="Back-to-School Mini Session" width={600} height={400} className="rounded-lg object-cover mb-6 mx-auto" />
      <p className="mb-4 text-lg text-gray-700 text-center">Mark the start of a new school year with fun, personality-filled back-to-school mini sessions. Perfect for kids, siblings, and families. Book your back-to-school mini session in Hartford or New Haven today!</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">What to Expect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>15-minute guided session</li>
        <li>5+ professionally edited images</li>
        <li>Fun props and school-themed setups</li>
        <li>Perfect for kids, siblings, and families</li>
        <li>Quick, fun, and stress-free experience</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Ideal Locations</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Local parks and playgrounds in Hartford and New Haven</li>
        <li>School campuses or urban spots across Connecticut</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Sample Session Flow</h2>
      <ol className="list-decimal ml-6 mb-4 text-gray-700">
        <li>Start with siblings or family together (smile, then unposed, then walking)</li>
        <li>Individual portraits of each child (with and without props)</li>
        <li>Fun, candid shots (jumping, showing off backpacks, etc.)</li>
      </ol>
      <p className="mb-8 text-gray-700">This flow ensures a variety of authentic, fun images in a short time, inspired by <a href='https://www.myclickmagazine.com/perfect-mini-session-flow-20-minutes/' className='text-primary underline' target='_blank' rel='noopener noreferrer'>Click Magazine's mini session tips</a>.</p>
      <div className="text-center">
        <Link href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
          Book Your Back-to-School Mini
        </Link>
      </div>
    </div>
  )
} 