"use client" // Add if planning interactive elements

import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

// Type definitions
interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface PricingSectionProps {
  title: string;
  tiers: PricingTier[];
  id?: string | null; // Made id optional
}

// Placeholder data for pricing packages
const pricingData = {
  events: [
    { name: "Hourly Event Coverage", price: "$500/hr", features: ["Min. 2 Hours", "Online Gallery", "Print Release"] },
    { name: "Half-Day Event Package", price: "$1,800", features: ["4 Hours Coverage", "Key Moments Captured", "Online Gallery", "Print Release"] },
    { name: "Full-Day Event Package", price: "$3,200", features: ["8 Hours Coverage", "Comprehensive Documentation", "Online Gallery", "Print Release"] },
  ],
  portraits: [
    { name: "Standard Session", price: "$450", features: ["1 Hour Session", "1 Location", "Online Gallery", "20 Edited Images"] },
    { name: "Extended Session", price: "$650", features: ["2 Hour Session", "Up to 2 Locations", "Online Gallery", "40 Edited Images"] },
  ],
  maternity: [
    { name: "Classic Maternity Session", price: "$500", features: ["1 Hour Session", "Studio or Outdoor", "Partner/Family Included", "Online Gallery", "25 Edited Images"] },
    { name: "Lifestyle Maternity Session", price: "$600", features: ["1.5 Hour Session", "In-Home Session", "Focus on Connection", "Online Gallery", "35 Edited Images"] },
  ],
  family: [
    { name: "Mini Session", price: "$300", features: ["30 Minute Session", "1 Location", "Online Gallery", "15 Edited Images"] },
    { name: "Full Session", price: "$550", features: ["1.5 Hour Session", "1 Location", "Online Gallery", "35 Edited Images"] },
  ],
  // Add more categories like Milestones if needed
};

// Reusable Pricing Card component
const PricingCard = ({ name, price, features }: { name: string, price: string, features: string[] }) => (
  <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">{name}</h3>
    <p className="text-3xl font-light text-primary mb-4">{price}</p>
    <ul className="space-y-2 mb-6 text-gray-600 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="mt-auto w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors text-sm tracking-widest font-medium">
      Inquire Now
    </button>
  </div>
);

// Pricing Page Component
export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="py-16 md:py-24 text-center border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 font-serif tracking-tight">Investment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing timeless moments is an investment. Explore our collections designed to fit your needs.
          </p>
        </div>
      </div>

      {/* Event Pricing Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 font-serif">Event Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingData.events.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Portrait Pricing Section */}
      <section className="py-12 md:py-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 font-serif">Portrait Sessions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pricingData.portraits.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Pricing Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 font-serif">Maternity Sessions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pricingData.maternity.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Family Pricing Section */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 font-serif">Family Photography</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pricingData.family.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <section className="py-12 text-center bg-gray-100 border-t border-gray-200">
         <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">Need Something Different?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
               Don't see exactly what you're looking for? Contact us for custom quotes and à la carte options. We're happy to tailor a package to your specific needs.
            </p>
            <button className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group">
               <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  GET IN TOUCH
               </span>
               <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
            </button>
         </div>
      </section>
    </div>
  );
}

// Added types to helper component props
function PricingSection({ title, tiers, id = null }: PricingSectionProps) {
  return (
    <section className="py-16 md:py-24" id={id || undefined}> {/* Handle optional id */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl text-gray-800">
            {title}
          </h2>
          <div className="divider"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  )
} 