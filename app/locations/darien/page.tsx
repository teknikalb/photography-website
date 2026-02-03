export const metadata = {
  title: "Darien CT Photographer | Family & Maternity | Fairfield County",
  description:
    "Family photographer and maternity photographer in Darien, CT. Parks, shoreline, and natural light. Book family and maternity sessions in Darien and the Gold Coast.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/darien" },
}

export default function DarienLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-12 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Darien, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Quiet elegance and soft light — family and maternity photography in Darien, where the shoreline and the parks give every session room to breathe and something beautiful to hold.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Darien</h2>
          <p className="leading-relaxed">
            Darien offers a perfect blend of coastal charm and suburban ease: beaches, parks, and tree-lined streets that catch the light in every season. As a Darien family photographer and maternity photographer, I love sessions at Weed Beach, at Cherry Lawn or Woodland Park, or in your own backyard. The goal is always the same — real connection, soft light, and images that feel like your life, only a little more golden. We&apos;ll pick the setting that fits your style and the season.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Where We Shoot</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Weed Beach — shoreline, dunes, and golden hour</li>
            <li>Cherry Lawn Park & Woodland Park — greenery and walking paths</li>
            <li>Residential and in-home — relaxed family and maternity sessions</li>
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Darien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Natural family photos in Darien&apos;s best spots.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions by the water or in parks.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Darien
        </a>
      </section>
    </div>
  )
}
