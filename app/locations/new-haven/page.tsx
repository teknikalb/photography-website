export const metadata = {
  title: "New Haven CT Photographer | Family, Maternity, Portraits",
  description: "New Haven photographer for family, maternity, and portraits. Sessions at Yale campus, parks, and coastal spots.",
  alternates: { canonical: "https://drenanoellephoto.com/locations/new-haven" },
}

export default function NewHavenLocationPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            New Haven, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Serving families and couples at Yale, lighthouse parks, and scenic neighborhoods around New Haven.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Favorite New Haven Locations</h2>
          <ul className="list-disc list-inside">
            <li>Yale University campus (classic architecture and greenery)</li>
            <li>Light House Point Park (coastal views and open skies)</li>
            <li>East Rock Park (overlooks and wooded trails)</li>
          </ul>
          <p>
            I’ll recommend timing for color and light, from cherry blossoms to fall foliage.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in New Haven</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/portraits" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Portraits</h3>
              <p className="text-gray-700">Graduation and professional portraits with timeless backdrops.</p>
            </a>
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family photos in parks and coastal settings.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Book in New Haven
          </a>
        </div>
      </section>
    </div>
  )
}


