"use client"

import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { Check, Heart, Clock, Camera, Users, Baby, Star, Gift, Image as ImageIcon } from "lucide-react"
import FAQ, { standardFAQs } from "@/components/faq"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Investment & Pricing
          </h1>
          <p className="text-xl font-light text-gray-700 max-w-2xl mx-auto">
            At Drena Noelle Photography, we believe every season of life deserves to be captured with care, creativity, and connection.
          </p>
        </div>
      </section>

      {/* Main Session Package */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 text-center">
                <h2 className="font-serif text-3xl font-light mb-4 text-white">Full Photography Session</h2>
                <div className="text-4xl font-bold mb-2 text-white">$350</div>
                <p className="text-lg text-white/90">
                  Designed to give you time to breathe, relax, and fully enjoy the experience—so we can create images that feel like you.
                </p>
              </div>

              {/* Content - Horizontal Layout */}
              <div className="p-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Left Column - What's Included */}
                  <div className="xl:col-span-1">
                    <h3 className="font-serif text-2xl font-light mb-6 text-gray-900 flex items-center gap-2">
                      <Star className="h-6 w-6 text-primary" />
                      What's Included
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Up to 60 minutes of shooting time</p>
                          <p className="text-sm text-gray-600">Plenty of time to relax and capture authentic moments</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Camera className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">1–2 thoughtfully chosen locations</p>
                          <p className="text-sm text-gray-600">Scouted locations that complement your vision</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">2 outfit changes (optional)</p>
                          <p className="text-sm text-gray-600">Variety in your final gallery</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ImageIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">25 edited images</p>
                          <p className="text-sm text-gray-600">Curated selection of your best moments</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Perfect For */}
                  <div className="xl:col-span-1">
                    <h3 className="font-serif text-2xl font-light mb-6 text-gray-900 flex items-center gap-2">
                      <Heart className="h-6 w-6 text-primary" />
                      Perfect For
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-900">Families & motherhood sessions</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Heart className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-900">Couples & engagements</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Baby className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-900">Maternity</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Star className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-900">Graduation</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Camera className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-900">Branding & lifestyle portraits</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Optional Add-On */}
                  <div className="xl:col-span-1">
                    <h3 className="font-serif text-2xl font-light mb-6 text-gray-900 flex items-center gap-2">
                      <Gift className="h-6 w-6 text-primary" />
                      Optional Add-On
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h4 className="font-serif text-xl font-medium text-gray-900 mb-2">Rush Delivery</h4>
                      <div className="text-2xl font-bold text-primary mb-3">+ $40</div>
                      <p className="text-gray-700 mb-4 text-sm">
                        Get your gallery in just 3 business days instead of the standard delivery time.
                      </p>
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        <Clock className="h-4 w-4" />
                        Perfect for urgent needs
                      </div>
                    </div>
                  </div>
                </div>

                {/* Session Description */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This session allows time for guided posing and natural moments—whether it's chasing golden hour, 
                    snuggling close, or just being your authentic self.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
                    >
                      Book Your Session Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Sessions CTA */}
      <section className="py-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Looking for Something Shorter?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Check out our seasonal mini sessions for quick, affordable options perfect for every season.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-200">
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="font-serif text-xl font-medium mb-2">Fall Mini</h3>
              <div className="text-2xl font-bold text-primary mb-4">$200</div>
              <p className="text-gray-600 mb-4">30 minutes • 15 images • Outdoor foliage</p>
              <Link href="/mini-sessions" className="inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-200">
              <div className="text-4xl mb-4">🎄</div>
              <h3 className="font-serif text-xl font-medium mb-2">Christmas Mini</h3>
              <div className="text-2xl font-bold text-primary mb-4">$200</div>
              <p className="text-gray-600 mb-4">30 minutes • 15 images • Cozy set or tree farm</p>
              <Link href="/mini-sessions" className="inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-200">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="font-serif text-xl font-medium mb-2">Valentine's Mini</h3>
              <div className="text-2xl font-bold text-primary mb-4">$200</div>
              <p className="text-gray-600 mb-4">30 minutes • 15 images • Romantic or playful</p>
              <Link href="/mini-sessions" className="inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={standardFAQs} />

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Ready to Create Something Beautiful?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Let's grab some coffee (or bring it to the shoot—I won't judge), and create something beautiful together.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </div>
  );
} 