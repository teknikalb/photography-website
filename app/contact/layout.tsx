import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Book a Family or Maternity Session in Connecticut",
  description:
    "Book a family photographer or maternity photographer in Connecticut. Serving Newington, Hartford, West Hartford, Glastonbury, Greenwich, Stamford, New Haven & all of CT. Get in touch for sessions, availability & pricing.",
  alternates: { canonical: "https://gretanoellephoto.com/contact" },
  openGraph: {
    title: "Contact | Greta Noelle Photography",
    description: "Book a family or maternity session in Connecticut. Get in touch for availability and pricing.",
    url: "https://gretanoellephoto.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
