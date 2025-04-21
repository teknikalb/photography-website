"use client" // Add if planning interactive elements

import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronDown, HelpCircle, Heart, Users, Baby, Camera } from "lucide-react"
import { useState } from "react"

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
} as const;

type PricingCategoryKey = keyof typeof pricingData;

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

const faqs = [
  {
    question: "How do I book a session?",
    answer: "Contact me through the contact form, email, or phone. We'll discuss your vision, select a date, and I'll send you a contract and invoice for the deposit to secure your date.",
  },
  {
    question: "How far in advance should I book?",
    answer: "For weddings, book 8-12 months in advance. For portraits, 1-2 months is usually enough, but more notice is better during busy seasons.",
  },
  {
    question: "What is your payment policy?",
    answer: "A 50% non-refundable retainer is required to secure your date, with the remaining balance due two weeks before your session or wedding date. Payment plans are available upon request.",
  },
  {
    question: "How long until I receive my photos?",
    answer: "Wedding galleries are delivered within 6-8 weeks. Portrait sessions are delivered within 2-3 weeks. You'll receive a few sneak peeks within 48 hours of your session or wedding.",
  },
  {
    question: "Do you travel for sessions or weddings?",
    answer: "Yes! I serve all of Connecticut and am available for travel throughout New England. For destinations beyond, travel fees may apply. Contact me for a custom quote.",
  },
]

const pricingCategories = [
  {
    id: "events",
    icon: <Heart className="h-5 w-5" />, // You can swap for a more event-specific icon if desired
    label: "Events",
  },
  {
    id: "portraits",
    icon: <Camera className="h-5 w-5" />, // Portraits
    label: "Portraits",
  },
  {
    id: "maternity",
    icon: <Baby className="h-5 w-5" />, // Maternity
    label: "Maternity",
  },
  {
    id: "family",
    icon: <Users className="h-5 w-5" />, // Family
    label: "Family",
  },
]

// Pricing Page Component
export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<PricingCategoryKey>("events")
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="w-full py-20 bg-[#F5F0EA] text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block rounded-xl shadow-lg px-8 py-10">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900">Investment & Pricing</h1>
            <p className="mt-6 max-w-xl text-lg font-light md:max-w-2xl md:text-xl text-gray-700 mx-auto">
              Transparent, flexible packages for every story. Let's create something beautiful together.
            </p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="bg-[#F5F0EA] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Select a Category</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
              Browse pricing by category. All packages are customizable to fit your needs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as PricingCategoryKey)}
                className={`flex items-center rounded-full border px-5 py-2 text-base font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:text-primary"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Pricing Cards */}
          <div className="animate-fade-in">
            <h3 className="font-serif text-2xl font-light text-gray-900 mb-8 text-center">
              {pricingCategories.find((c) => c.id === selectedCategory)?.label} Packages
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingData[selectedCategory].map((pkg: any) => (
                <div
                  key={pkg.name}
                  className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-md p-8 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <h4 className="font-serif text-xl font-medium text-gray-900">{pkg.name}</h4>
                  <div className="mt-4 text-3xl font-bold text-primary">{pkg.price}</div>
                  <ul className="mt-6 space-y-3 w-full">
                    {pkg.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-center text-sm font-semibold transition-colors shadow"
                  >
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <section className="py-12 bg-[#F5F0EA]">
        <div className="container mx-auto px-4">
          <div className="mt-24 rounded-2xl bg-white/70 backdrop-blur-md shadow-xl p-10 text-center mx-auto max-w-2xl">
            <h3 className="font-serif text-2xl font-light text-gray-900">Looking for Something Custom?</h3>
            <p className="mt-4 text-gray-700">
              Every photography need is unique. Contact me to discuss custom packages tailored to your specific requirements.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F5F0EA] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600">Everything you need to know about working together</p>
          </div>

          <div className="mx-auto max-w-2xl divide-y divide-gray-200 rounded-2xl bg-white/80 backdrop-blur p-2 shadow-xl">
            {faqs.map((faq, idx) => (
              <div key={faq.question}>
                <button
                  className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="flex items-center gap-2 font-serif text-lg text-gray-900">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 px-6 ${openFaq === idx ? "max-h-40 py-2" : "max-h-0 py-0"}`}
                  style={{}}
                >
                  <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
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