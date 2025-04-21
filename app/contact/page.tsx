"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Add Background Image Here */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1629646620956-0f4b37ee450d?q=80&w=1920&auto=format&fit=crop"
          alt="Contact hero image - Desk with laptop"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-xl">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-white">Get in Touch</h1>
            <p className="mt-4 text-lg font-light md:max-w-lg md:text-xl text-white">
              Let's discuss your photography needs and create something beautiful together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Remove Background Image */}
      <section className="py-20">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information - Remove semi-transparent background */}
            <div className="md:col-span-1 p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="font-serif text-2xl font-light text-gray-800">Contact Information</h2>
              <p className="mt-4 text-muted-foreground">
                Feel free to reach out via phone or email, or use the contact form.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:hello@drenanoellephoto.com" className="text-muted-foreground hover:text-primary">
                      hello@drenanoellephoto.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      Studio located in Hartford, CT
                      <br />
                      Serving all of Connecticut and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium">Connect with me</h3>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-2xl font-light">Studio Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Keep white background */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-light">Send a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-lg bg-green-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-green-800">Message Sent!</h3>
                  <p className="mt-2 text-green-700">Thank you for reaching out. I'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="mb-2 block text-sm font-medium">
                        Event/Session Date (if known)
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="events">Event Photography</option>
                      <option value="family">Family Portrait</option>
                      <option value="maternity">Maternity Session</option>
                      <option value="portraits">Portrait Session</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Keep page background (likely white) */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Find answers to common questions about working together</p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors">
                  How do I book a session with you?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To book a session, simply fill out the contact form above or send me an email. We'll discuss your
                  vision, select a date, and I'll send you a contract and invoice for the deposit to secure your date.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  For events, I recommend booking several months in advance, especially for popular dates. For portrait/maternity
                  sessions, 1-2 months in advance is typically sufficient, though more notice is better during busy
                  seasons (spring and fall).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors">
                  What is your payment policy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  A 50% non-refundable retainer is required to secure your date, with the remaining balance due two
                  weeks before your session or event date. Payment plans are available upon request.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors">
                  How long until I receive my photos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Event galleries are delivered within 4-6 weeks. Portrait/maternity sessions are delivered within 2-3 weeks.
                  You'll receive a few sneak peeks within 48 hours of your session or event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors">
                  Do you travel for sessions or events?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes! I serve all of Connecticut and am available for travel throughout New England. For destinations
                  beyond, travel fees may apply. Contact me for a custom quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors">
                  What should we wear for our session?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  After booking, I'll send you a detailed style guide with tips for selecting outfits that photograph
                  beautifully. We can also discuss your options during your consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
