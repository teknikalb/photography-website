export const metadata = {
  title: "Glastonbury CT Photographer | Family & Maternity | Orchards & River",
  description:
    "Glastonbury family photographer and maternity photographer. Orchards, farms, riverfront parks. Natural light sessions in Glastonbury, Southington, Wethersfield and the Connecticut River valley.",
  keywords: [
    "Glastonbury CT photographer",
    "family photographer Glastonbury",
    "maternity photographer Glastonbury",
    "Connecticut River valley photographer",
  ],
  alternates: { canonical: "https://gretanoellephoto.com/locations/glastonbury" },
}

export default function GlastonburyLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Glastonbury Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Orchards, farms, and the river&apos;s light — family and maternity photography in Glastonbury, where the Connecticut River valley turns every season into something you&apos;ll want to hold forever.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Why Glastonbury</h2>
          <p className="leading-relaxed">
            Glastonbury is one of central Connecticut&apos;s most beautiful backdrops for lifestyle photography: apple orchards in fall, farm stands in summer, and riverfront parks that catch the light in every season. As a Glastonbury family photographer and maternity photographer, I love sessions at local orchards and farms (with permission), along the river, or in parks like Riverfront Park or Addison Park — natural, heartfelt images that feel like your life, only a little more golden. We keep the mood relaxed so your family&apos;s connection takes center stage.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Riverfront Park & Connecticut River — water, sky, and golden hour</li>
            <li>Local orchards and farms — seasonal color and rustic charm (by arrangement)</li>
            <li>Addison Park and green spaces — walking paths and soft light</li>
          </ul>
          <p className="leading-relaxed">
            I also serve Southington, Wethersfield, and the Connecticut River valley — so if you&apos;re nearby, we can find the perfect spot for your family or maternity session.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Glastonbury</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family photos in orchards, parks, or at home.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions with seasonal backdrops.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Glastonbury
        </a>
      </section>
    </div>
  )
}
