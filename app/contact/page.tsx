"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Clock, Camera, Heart, Users, Award } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Let's Create Something Beautiful Together
            </h1>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto mb-8">
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
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-light mb-6 text-gray-800">
              How We'll Work Together
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From our first conversation to your final gallery, here's what you can expect
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 text-gray-900">
                  Let's Connect
                </h3>
                <p className="text-gray-600">
                  Reach out through the form or give me a call. We'll discuss your vision, timeline, and all the details.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 text-gray-900">
                  Capture Memories
                </h3>
                <p className="text-gray-600">
                  Relax and enjoy our time together. I'll guide you through poses while capturing natural, authentic moments.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 text-gray-900">
                  Receive Your Gallery
                </h3>
                <p className="text-gray-600">
                  Within 2-3 weeks, you'll receive your beautiful, edited images in a private online gallery.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="font-serif text-3xl font-light mb-6 text-gray-900">
                  Let's Connect
                </h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Fill out the form or reach out directly. I typically respond within 24 hours and can't wait to hear about your vision!
                </p>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Email</p>
                      <a href="mailto:hello@drenanoelle.com" className="text-primary hover:underline transition-colors">
                        hello@drenanoelle.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Phone</p>
                      <a href="tel:+1234567890" className="text-primary hover:underline transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Location</p>
                      <p className="text-gray-700">Connecticut & New England</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Response Time</p>
                      <p className="text-gray-700">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mb-8">
                  <p className="font-medium text-gray-900 mb-4">Follow My Work</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-medium mb-6 text-gray-900">Quick Facts</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">8+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">24hr</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                  <h3 className="font-serif text-2xl font-light mb-6 text-gray-900">
                    Send Me a Message
                  </h3>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-light mb-6 text-gray-800">
              Why Choose Drena Noelle Photography?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              More than just taking photos – creating an experience you'll love
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6"
              >
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-800">
                  Authentic Moments
                </h3>
                <p className="text-gray-600">
                  I capture real emotions and genuine connections, not just posed pictures.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-800">
                  Professional Quality
                </h3>
                <p className="text-gray-600">
                  Years of experience and high-end equipment ensure stunning results every time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6"
              >
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium mb-3 text-gray-800">
                  Comfortable Experience
                </h3>
                <p className="text-gray-600">
                  I make sessions fun and relaxed so your personality shines through naturally.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl font-light mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Don't wait to capture your special moments. Let's create something beautiful together that you'll treasure for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-form"
                className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg"
              >
                Book Your Session Now
              </Link>
              <a 
                href="tel:+1234567890" 
                className="inline-block rounded-full border border-white text-white px-8 py-3 text-lg font-semibold transition-colors hover:bg-white hover:text-gray-900"
              >
                Call (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}