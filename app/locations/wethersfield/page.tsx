export const metadata = {
  title: "Wethersfield CT Photographer | Family & Maternity Sessions",
  description:
    "Family photographer and maternity photographer in Wethersfield, CT. Historic charm, parks, and natural light. Book family and maternity sessions in Wethersfield and central Connecticut.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/wethersfield" },
}

export default function WethersfieldLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Wethersfield, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where old New England meets soft light — family and maternity photography in Wethersfield, with its historic streets, green spaces, and quiet beauty.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Why Wethersfield</h2>
          <p className="leading-relaxed">
            Wethersfield offers something rare: the texture of history and the ease of open parks and tree-lined lanes. As a Wethersfield family photographer and maternity photographer, I love sessions along the Cove, in Mill Woods Park, or among the colonial-era streets — golden hour turns the brick and foliage into a dreamy backdrop. We keep the mood relaxed so your family&apos;s connection takes center stage.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Wethersfield Cove — water, sky, and golden light</li>
            <li>Mill Woods Park — trails and seasonal color</li>
            <li>Historic district — classic New England backdrops</li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Wethersfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family portraits in Wethersfield&apos;s best light.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions in parks or historic settings.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Wethersfield
        </a>
      </section>
    </div>
  )
}
