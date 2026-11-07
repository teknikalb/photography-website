import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-page px-4 pt-header">
      <div className="max-w-xl text-center">
        <h1 className="display-xl mb-6">Page not found</h1>
        <p className="mb-8">
          Oops—looks like this page has moved or doesn’t exist. Try one of these:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Go to Homepage
          </Link>
          <Link href="/portfolio" className="inline-block rounded-full border border-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-cream transition">
            View Portfolio
          </Link>
          <Link href="/contact" className="inline-block rounded-full border border-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-cream transition">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}









