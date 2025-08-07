"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Instagram, Clock, CheckCircle, Camera, Heart, Users, Sparkles, ArrowRight, Star, Calendar, MessageCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState('form')

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section with Artistic Elements */}
      <section className="relative pt-24 pb-16 bg-[#F5F0EA] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary mr-3" />
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900">
              Let's Create Something Beautiful
            </h1>
            <Sparkles className="h-8 w-8 text-primary ml-3" />
          </div>
          
          <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to capture your story? I'd love to hear about your vision and discuss how we can bring your dreams to life through beautiful photography.
          </p>
          
          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">Send a Message</h3>
              <p className="text-gray-600 text-sm">Tell me about your vision</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">Check Availability</h3>
              <p className="text-gray-600 text-sm">See my calendar</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('form')}
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Artistic Info Cards */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="font-serif text-2xl font-light mb-6 text-gray-900 flex items-center">
                    <Star className="h-6 w-6 text-primary mr-3" />
                    Let's Connect
                  </h2>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Fill out the form or reach out directly. I typically respond within 24 hours and can't wait to hear about your vision!
                  </p>
                  
                  {/* Contact Methods with Icons */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:hello@drenanoellephoto.com" className="text-primary hover:underline font-medium">hello@drenanoellephoto.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700 font-medium">Connecticut & New England</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-gray-700 font-medium">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media & Stats */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <h3 className="font-serif text-xl font-medium mb-6 text-gray-900">Follow My Journey</h3>
                  <div className="flex gap-4 mb-8">
                    <a 
                      href="https://instagram.com" 
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-primary/5 rounded-xl">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-xl">
                      <div className="text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-3xl font-light mb-4 text-gray-900">Send Me a Message</h3>
                    <p className="text-gray-600">Tell me about your vision and I'll get back to you within 24 hours</p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic CTA Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/15 rounded-full blur-md"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-light mb-6 text-white">Ready to Begin Your Story?</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Don't wait to capture your special moments. Every day is an opportunity to create something beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-form"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Camera className="mr-2 h-5 w-5" />
                Book Your Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}