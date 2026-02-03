export const metadata = {
  title: "West Hartford CT Photographer | Family & Maternity | Blue Back & Parks",
  description:
    "West Hartford family photographer and maternity photographer. West Hartford Reservoir, Blue Back Square, local parks. Natural light sessions in West Hartford, Rocky Hill, Wethersfield.",
  keywords: [
    "West Hartford CT photographer",
    "family photographer West Hartford",
    "maternity photographer West Hartford",
    "Blue Back Square photos",
    "West Hartford Reservoir photographer",
  ],
  alternates: { canonical: "https://gretanoellephoto.com/locations/west-hartford" },
}

export default function WestHartfordLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            West Hartford Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the trails meet the town — family and maternity photography in West Hartford, with the Reservoir&apos;s golden-hour greenery, Blue Back Square&apos;s urban texture, and the kind of light that turns every session into something you&apos;ll keep forever.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in West Hartford</h2>
          <p className="leading-relaxed">
            West Hartford is one of central Connecticut&apos;s best-loved backdrops for lifestyle photography: the West Hartford Reservoir for trails and golden-hour greenery, Blue Back Square for urban texture and café vibes, and local parks for softer, more natural light. As a West Hartford family photographer and maternity photographer, I love sessions on the Reservoir trails, in the square for a more modern feel, or in neighborhood parks for golden-hour family sessions. We keep the mood relaxed so your family&apos;s connection takes center stage — whether we&apos;re in the woods, in town, or in your own backyard.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Great Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>West Hartford Reservoir trails — golden hour greenery and open air</li>
            <li>Blue Back Square — urban texture and café backdrops</li>
            <li>Local parks — golden hour family sessions and soft light</li>
          </ul>
          <p className="leading-relaxed">
            I also serve Rocky Hill, Wethersfield, and nearby towns — so if you&apos;re just outside West Hartford, we can find the perfect spot for your family or maternity session.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in West Hartford</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family portraits in parks or at home.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions in parks or urban settings.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in West Hartford
        </a>
      </section>
    </div>
  )
}
