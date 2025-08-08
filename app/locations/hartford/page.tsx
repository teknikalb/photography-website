export const metadata = {
  title: "Hartford CT Photographer | Family, Maternity, Portraits",
  description: "Hartford, Connecticut photographer for families, maternity, portraits, and milestones. Natural, heartfelt images across parks and city spots.",
  alternates: { canonical: "https://drenanoellephoto.com/locations/hartford" },
}

export default function HartfordLocationPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Hartford, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Serving families, moms-to-be, milestones, and portraits in Hartford and nearby neighborhoods.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Favorite Hartford Locations</h2>
          <ul className="list-disc list-inside">
            <li>Elizabeth Park Rose Garden (seasonal blooms and walking paths)</li>
            <li>West Hartford Reservoir trails (golden hour greenery)</li>
            <li>Downtown Hartford architecture for modern portraits</li>
          </ul>
          <p>
            I guide you on timing and styling so we get soft, flattering light and natural interactions.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Hartford</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed, candid family portraits in parks or at home.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant, natural images that celebrate motherhood.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Book in Hartford
          </a>
        </div>
      </section>
    </div>
  )
}


