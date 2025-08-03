"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Clock, CheckCircle, Camera, Heart, Users } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-xl font-light text-gray-700 max-w-2xl mx-auto mb-8">
            Ready to capture your story? I'd love to hear about your vision and discuss how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-block rounded-full border border-primary text-primary px-8 py-3 text-sm font-semibold transition-colors hover:bg-primary hover:text-white shadow"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div>
                <h2 className="font-serif text-3xl font-light mb-6 text-gray-900">Let's Connect</h2>
                <p className="text-gray-700 mb-8 text-lg">
                  Fill out the form or reach out directly. I typically respond within 24 hours and can't wait to hear about your vision!
                </p>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:hello@drenanoelle.com" className="text-primary hover:underline">hello@drenanoelle.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-700">Connecticut & New England</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-700">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <p className="font-medium text-gray-900 mb-4">Follow My Work</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com" 
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-serif text-lg font-medium mb-4 text-gray-900">Quick Facts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="font-serif text-2xl font-light mb-6 text-gray-900">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Don't wait to capture your special moments. Let's create something beautiful together.
            </p>
            <Link
              href="#contact-form"
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg"
            >
              Book Your Session Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}