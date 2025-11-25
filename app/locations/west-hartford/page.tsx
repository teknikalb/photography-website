export const metadata = {
  title: "West Hartford CT Photographer | Family & Portraits",
  description: "West Hartford photographer for family and portrait sessions around Blue Back Square and local parks.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/west-hartford" },
}

export default function WestHartfordLocationPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            West Hartford Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Serving families and professionals in West Hartford with relaxed, natural sessions.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Great Spots</h2>
          <ul className="list-disc list-inside">
            <li>West Hartford Reservoir trails</li>
            <li>Blue Back Square (urban texture)</li>
            <li>Local parks for golden hour family sessions</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Book in West Hartford
          </a>
        </div>
      </section>
    </div>
  )
}


