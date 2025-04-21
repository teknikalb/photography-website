"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const services = [
  {
    id: "weddings",
    title: "Wedding Collections",
    description: "Comprehensive coverage for your special day",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    packages: [
      {
        name: "Essential",
        price: "$2,800",
        features: [
          "6 hours of coverage",
          "1 photographer",
          "Online gallery with digital downloads",
          "Engagement session",
          "Wedding day timeline assistance",
        ],
      },
      {
        name: "Classic",
        price: "$3,800",
        popular: true,
        features: [
          "8 hours of coverage",
          "2 photographers",
          "Online gallery with digital downloads",
          "Engagement session",
          "Wedding day timeline assistance",
          "Custom USB with high-resolution images",
          "10x10 wedding album (20 pages)",
        ],
      },
      {
        name: "Luxury",
        price: "$4,800",
        features: [
          "10 hours of coverage",
          "2 photographers",
          "Online gallery with digital downloads",
          "Engagement session",
          "Wedding day timeline assistance",
          "Custom USB with high-resolution images",
          "12x12 wedding album (30 pages)",
          "Second day coverage (2 hours)",
          "Bridal boudoir session",
        ],
      },
    ],
  },
  {
    id: "portraits",
    title: "Portrait Sessions",
    description: "Capturing authentic moments for individuals and families",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop",
    packages: [
      {
        name: "Family Session",
        price: "$450",
        features: [
          "1 hour session",
          "Up to 6 family members",
          "Online gallery with digital downloads",
          "20 edited digital images",
          "Print release",
          "Location of your choice",
        ],
      },
      {
        name: "Newborn Session",
        price: "$550",
        features: [
          "2-3 hour session",
          "In-home or studio",
          "Online gallery with digital downloads",
          "25 edited digital images",
          "Print release",
          "Props and wraps provided",
          "Parent and sibling poses included",
        ],
      },
      {
        name: "Portrait Session",
        price: "$350",
        features: [
          "1 hour session",
          "Online gallery with digital downloads",
          "15 edited digital images",
          "Print release",
          "Location of your choice",
          "Outfit changes",
        ],
      },
    ],
  },
  {
    id: "mothers-day-minis",
    title: "Mother's Day Minis",
    description: "Celebrate the beautiful bond between you and your little ones with a special mini session.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800&auto=format&fit=crop",
    packages: [
      {
        name: "Mother's Day Mini Session",
        price: "$300",
        features: [
          "30 minutes of guided photography",
          "20 professionally edited photos",
          "Intimate session designed to honor every mama",
          "Capture memories with your babies, no matter how big or small",
          "Arrive on time as sessions are scheduled back-to-back",
          "Laugh, cuddle, and capture these fleeting moments"
        ],
      },
    ],
  },
]

const faqs = [
  {
    question: "How do I book a session with you?",
    answer:
      "To book a session, simply contact me through the contact form, email, or phone. We'll discuss your vision, select a date, and I'll send you a contract and invoice for the deposit to secure your date.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For weddings, I recommend booking 8-12 months in advance to ensure availability. For portrait sessions, 1-2 months in advance is typically sufficient, though more notice is better during busy seasons.",
  },
  {
    question: "What is your payment policy?",
    answer:
      "A 50% non-refundable retainer is required to secure your date, with the remaining balance due two weeks before your session or wedding date. Payment plans are available upon request.",
  },
  {
    question: "How long until I receive my photos?",
    answer:
      "Wedding galleries are delivered within 6-8 weeks. Portrait sessions are delivered within 2-3 weeks. You'll receive a few sneak peeks within 48 hours of your session or wedding.",
  },
  {
    question: "Do you travel for sessions or weddings?",
    answer:
      "Yes! I serve all of Connecticut and am available for travel throughout New England. For destinations beyond, travel fees may apply. Contact me for a custom quote.",
  },
  {
    question: "What should we wear for our session?",
    answer:
      "After booking, I'll send you a detailed style guide with tips for selecting outfits that photograph beautifully. We can also discuss your options during your consultation.",
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1920&auto=format&fit=crop"
          alt="Services hero image"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg px-8 py-10 inline-block">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-white drop-shadow-lg">Services & Pricing</h1>
            <p className="mt-6 max-w-xl text-lg font-light md:max-w-2xl md:text-xl text-white drop-shadow">
              Investment details for capturing your precious moments. All packages are customizable to fit your unique story.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Your Investment</h2>
            <p className="mt-4 text-gray-600">
              I believe in transparent pricing and creating a package that fits your unique needs. All collections can be customized to ensure you get exactly what you're looking for.
            </p>
          </div>

          <div className="mt-8 space-y-24">
            {services.map((service) => (
              <div key={service.id} className="space-y-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <div className="overflow-hidden rounded-2xl shadow-lg group relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-light text-gray-900">{service.title}</h3>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <Link
                      href={`/services/${service.id}`}
                      className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      View detailed information
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {service.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`relative rounded-2xl border ${
                        pkg.popular ? "border-primary bg-primary/5 shadow-xl scale-105 z-10" : "border-gray-200 bg-white shadow-md"
                      } p-8 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg border-2 border-white">Most Popular</div>
                      )}
                      <h4 className="font-serif text-xl font-medium text-gray-900">{pkg.name}</h4>
                      <div className="mt-4 text-3xl font-bold text-primary">{pkg.price}</div>
                      <ul className="mt-6 space-y-3 w-full">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className={`mt-8 w-full rounded-full ${
                          pkg.popular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "border border-primary bg-white text-primary hover:bg-primary hover:text-white"
                        } px-4 py-2 text-center text-sm font-semibold transition-colors shadow`}
                      >
                        Book Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

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
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
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
  )
}
