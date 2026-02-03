export const metadata = {
  title: "Litchfield CT Photographer | Family & Maternity | Hills & Historic Towns",
  description:
    "Family photographer and maternity photographer in Litchfield, CT. Litchfield Hills, historic green, and countryside. Book family and maternity sessions in Litchfield County.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/litchfield" },
}

export default function LitchfieldLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Litchfield, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The Litchfield Hills in every season — family and maternity photography in Litchfield, where the green runs deep, the light is soft, and the backdrop feels like a painting.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Why Litchfield</h2>
          <p className="leading-relaxed">
            Litchfield County is one of Connecticut&apos;s most beautiful corners: rolling hills, historic towns, and light that seems to linger. As a Litchfield family photographer and maternity photographer, I love sessions on the Litchfield Green, at Topsmead or White Memorial, or along quiet country roads where the foliage and meadows do the work. Fall is especially magical — we can plan around peak color — but spring and summer bring their own soft greens and wildflowers. Every session is tailored to the season and to you.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Litchfield Green & historic district — classic New England</li>
            <li>Topsmead State Forest — meadows, gardens, and golden hour</li>
            <li>White Memorial Conservation Center — trails and natural backdrops</li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Litchfield</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Natural family photos in the Litchfield Hills.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions in meadows and historic settings.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Litchfield
        </a>
      </section>
    </div>
  )
}
