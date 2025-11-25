export const metadata = {
  title: "Stamford CT Photographer | Family & Portraits",
  description: "Stamford photographer for family and portrait sessions downtown and at local parks.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/stamford" },
}

export default function StamfordLocationPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Stamford Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Family and portrait photography in Stamford and coastal Fairfield County.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Popular Locations</h2>
          <ul className="list-disc list-inside">
            <li>Cove Island Park</li>
            <li>Downtown Stamford</li>
            <li>Local beaches and greens</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Book in Stamford
          </a>
        </div>
      </section>
    </div>
  )
}


