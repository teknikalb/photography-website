"use client"

import Link from "next/link"
import { Camera, Heart, Users, Calendar, Sparkles, ArrowRight, PawPrint } from "lucide-react"
import FAQ, { standardFAQs } from "@/components/faq"

const services = [
  {
    id: "family",
    title: "Family Sessions",
    tagline: "Natural portraits of the people you love—together.",
    icon: Users,
    price: "$350",
  },
  {
    id: "maternity",
    title: "Maternity",
    tagline: "Honor this chapter with gentle, timeless images.",
    icon: Heart,
    price: "$350",
  },
  {
    id: "portraits",
    title: "Portraits",
    tagline: "You, as you are—graduation, branding, or just because.",
    icon: Camera,
    price: "$350",
  },
  {
    id: "mini-sessions",
    title: "Mini Sessions",
    tagline: "Short, sweet sessions for seasonal themes and quick updates.",
    icon: Sparkles,
    price: "$200",
  },
  {
    id: "pet-photography",
    title: "Pet Photography",
    tagline: "Your furry family members—personality and soul captured.",
    icon: PawPrint,
    price: "$250",
  },
  {
    id: "events",
    title: "Events & Celebrations",
    tagline: "Milestones and celebrations—joy, tears, and love preserved.",
    icon: Calendar,
    price: "$350",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      {/* Hero: what this page is + where you are */}
      <header className="border-b border-gray-200/80 bg-page px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Services & Sessions
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Choose a session below, or reach out and we’ll find the right fit. Based in <strong>Newington, CT</strong>—serving Wethersfield, Glastonbury, West Hartford, Rocky Hill, Southington, Litchfield, Greenwich, Darien & all of Connecticut.
          </p>
        </div>
      </header>

      {/* Service cards: scannable, one clear action per card */}
      <section
        className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12"
        aria-labelledby="sessions-heading"
      >
        <h2 id="sessions-heading" className="sr-only">
          Choose your session
        </h2>
        <div className="mx-auto max-w-5xl">
          <ul className="grid list-none gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-gray-500 sm:mt-10">
            Not sure which session is right for you?{" "}
            <Link href="/contact" className="font-medium text-gray-900 underline underline-offset-2 hover:no-underline">
              Tell me what you’re thinking
            </Link>
            —I’ll help you choose.
          </p>
        </div>
      </section>

      {/* How it works: simple 3-step reassurance */}
      <section
        className="border-t border-gray-200/80 bg-page px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="how-it-works-heading" className="font-serif text-2xl font-light text-gray-900 sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-gray-600 sm:text-lg">
            Simple, personal, and stress-free.
          </p>
          <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6 md:mt-10">
            <ProcessStep step={1} title="We connect" body="You share your vision; we pick a date. I’ll send a short style guide and prep tips." />
            <ProcessStep step={2} title="We shoot" body="You relax. I guide gently and capture real moments—no stiff posing." />
            <ProcessStep step={3} title="You get your gallery" body="Within 2–3 weeks, your edited images land in a private gallery—yours to keep and share." />
          </ol>
        </div>
      </section>

      <FAQ faqs={standardFAQs} />

      {/* CTA: one clear next step */}
      <section className="bg-page px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-xl text-center">
          <h2 id="cta-heading" className="font-serif text-2xl font-light text-gray-900 sm:text-3xl">
            Ready to book or have questions?
          </h2>
          <p className="mt-3 text-gray-600 sm:text-lg">
            Get in touch—I’d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-page"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  )
}

interface ServiceCardProps {
  service: {
    id: string
    title: string
    tagline: string
    icon: React.ComponentType<{ className?: string }>
    price: string
  }
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <li>
      <article className="flex h-full flex-col rounded-2xl border border-gray-200/90 bg-page p-6 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white" aria-hidden>
            <Icon className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-xl font-medium text-gray-900">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {service.tagline}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Starting from <span className="font-semibold text-gray-900">{service.price}</span>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/services/${service.id}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-full border border-gray-900 bg-transparent px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Book
          </Link>
        </div>
      </article>
    </li>
  )
}

function ProcessStep({
  step,
  title,
  body,
}: {
  step: number
  title: string
  body: string
}) {
  return (
    <li className="relative pl-10 sm:pl-0">
      <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-page font-serif text-base font-medium text-gray-700 sm:static sm:mb-4" aria-hidden>
        {step}
      </span>
      <h3 className="font-serif text-lg font-medium text-gray-900 sm:text-xl">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-gray-600 sm:text-base">
        {body}
      </p>
    </li>
  )
}
