export const metadata = {
  title: "New Haven CT Photographer | Family, Maternity & Portraits",
  description:
    "New Haven family photographer and maternity photographer. Yale campus, Lighthouse Point Park, East Rock. Natural light sessions in New Haven and the Connecticut shoreline.",
  keywords: [
    "New Haven CT photographer",
    "family photographer New Haven",
    "maternity photographer New Haven",
    "Yale photographer",
    "Lighthouse Point Park photos",
  ],
  alternates: { canonical: "https://gretanoellephoto.com/locations/new-haven" },
}

export default function NewHavenLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            New Haven, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the campus meets the coast — family and maternity photography in New Haven, with Yale&apos;s stone and ivy, Lighthouse Point&apos;s open skies, and the kind of light that turns every frame into something you&apos;ll keep forever.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in New Haven</h2>
          <p className="leading-relaxed">
            New Haven offers something rare: the texture of a university town and the ease of coastal parks and scenic neighborhoods. As a New Haven family photographer and maternity photographer, I love sessions on the Yale campus (with permission) for classic architecture and greenery, at Lighthouse Point Park for coastal views and open skies, or at East Rock Park for overlooks and wooded trails. I&apos;ll recommend timing for color and light — from cherry blossoms in spring to fall foliage — so your family or maternity session feels both timeless and of the moment.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite New Haven Locations</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Yale University campus — classic architecture and greenery (by permission)</li>
            <li>Lighthouse Point Park — coastal views and open skies</li>
            <li>East Rock Park — overlooks and wooded trails</li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in New Haven</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/portraits" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Portraits</h3>
              <p className="text-gray-700">Graduation and professional portraits with timeless backdrops.</p>
            </a>
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family photos in parks and coastal settings.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in New Haven
        </a>
      </section>
    </div>
  )
}
