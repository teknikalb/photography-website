import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F0EA] px-4">
      <div className="max-w-xl text-center">
        <h1 className="font-serif text-5xl font-light text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-700 mb-8">
          Oops—looks like this page has moved or doesn’t exist. Try one of these:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Go to Homepage
          </Link>
          <Link href="/portfolio" className="inline-block rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-white transition">
            View Portfolio
          </Link>
          <Link href="/contact" className="inline-block rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-white transition">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}



