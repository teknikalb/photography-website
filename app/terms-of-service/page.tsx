"use client"

import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl font-light mb-8">Terms of Service</h1>
      <p className="mb-6">Last updated: {new Date().getFullYear()}</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By using this website and booking photography services, you agree to these Terms of Service. If you do not agree, please do not use this site.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">2. Use of Website</h2>
      <p className="mb-4">You may use this website for personal, non-commercial purposes only. You may not use this site for any unlawful or prohibited purpose.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">3. Intellectual Property</h2>
      <p className="mb-4">All content on this website, including images, text, and branding, is the property of Greta Noelle Photography (or respective copyright holders) and may not be used without permission.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">4. Booking & Payment</h2>
      <p className="mb-4">Booking a session requires a signed contract and a non-refundable retainer. Full payment details and cancellation policies will be provided in your contract.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">We strive to provide high-quality photography services, but are not liable for any damages arising from the use of this website or our services, to the extent permitted by law.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">6. Changes to Terms</h2>
      <p className="mb-4">We may update these Terms of Service from time to time. Changes will be posted on this page with an updated date.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">7. Contact</h2>
      <p className="mb-4">If you have any questions about these Terms, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
    </div>
  )
} 