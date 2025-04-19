import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

const services = [
  {
    id: "weddings",
    title: "Wedding Collections",
    description: "Comprehensive coverage for your special day",
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
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
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Services hero image"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">Services & Pricing</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            Investment details for capturing your precious moments
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Your Investment</h2>
            <p className="mt-4 text-muted-foreground">
              I believe in transparent pricing and creating a package that fits your unique needs. All collections can
              be customized to ensure you get exactly what you're looking for.
            </p>
          </div>

          <div className="mt-16 space-y-24">
            {services.map((service) => (
              <div key={service.id} className="space-y-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-light">{service.title}</h3>
                    <p className="mt-4 text-muted-foreground">{service.description}</p>
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
                      className={`relative rounded-lg border ${
                        pkg.popular ? "border-primary" : "border-gray-200"
                      } bg-white p-6 shadow-sm`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                          Most Popular
                        </div>
                      )}
                      <h4 className="font-serif text-xl font-medium">{pkg.name}</h4>
                      <div className="mt-4 text-3xl font-bold">{pkg.price}</div>
                      <ul className="mt-6 space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className={`mt-8 block w-full rounded-full ${
                          pkg.popular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "border border-primary bg-white text-primary hover:bg-gray-50"
                        } px-4 py-2 text-center text-sm font-medium transition-colors`}
                      >
                        Book Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-lg bg-gray-50 p-8 text-center">
            <h3 className="font-serif text-2xl font-light">Looking for Something Custom?</h3>
            <p className="mt-4 text-muted-foreground">
              Every photography need is unique. Contact me to discuss custom packages tailored to your specific
              requirements.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about working together</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FaqItem
              question="How do I book a session with you?"
              answer="To book a session, simply contact me through the contact form, email, or phone. We'll discuss your vision, select a date, and I'll send you a contract and invoice for the deposit to secure your date."
            />
            <FaqItem
              question="How far in advance should I book?"
              answer="For weddings, I recommend booking 8-12 months in advance to ensure availability. For portrait sessions, 1-2 months in advance is typically sufficient, though more notice is better during busy seasons."
            />
            <FaqItem
              question="What is your payment policy?"
              answer="A 50% non-refundable retainer is required to secure your date, with the remaining balance due two weeks before your session or wedding date. Payment plans are available upon request."
            />
            <FaqItem
              question="How long until I receive my photos?"
              answer="Wedding galleries are delivered within 6-8 weeks. Portrait sessions are delivered within 2-3 weeks. You'll receive a few sneak peeks within 48 hours of your session or wedding."
            />
            <FaqItem
              question="Do you travel for sessions or weddings?"
              answer="Yes! I serve all of Connecticut and am available for travel throughout New England. For destinations beyond, travel fees may apply. Contact me for a custom quote."
            />
            <FaqItem
              question="What should we wear for our session?"
              answer="After booking, I'll send you a detailed style guide with tips for selecting outfits that photograph beautifully. We can also discuss your options during your consultation."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="font-serif text-lg font-medium">{question}</h3>
      <p className="mt-2 text-muted-foreground">{answer}</p>
    </div>
  )
}
