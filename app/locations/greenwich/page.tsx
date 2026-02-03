export const metadata = {
  title: "Greenwich CT Photographer | Family & Maternity | Gold Coast",
  description:
    "Family photographer and maternity photographer in Greenwich, CT. Parks, shoreline, and natural light. Book family and maternity sessions in Greenwich and Fairfield County.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/greenwich" },
}

export default function GreenwichLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-12 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Greenwich, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the Gold Coast meets the light — family and maternity photography in Greenwich, with its parks, shoreline, and the kind of light that turns every frame into something you&apos;ll treasure.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Greenwich</h2>
          <p className="leading-relaxed">
            Greenwich is one of Fairfield County&apos;s most sought-after backdrops: manicured parks, coastal views, and light that feels both refined and natural. As a Greenwich family photographer and maternity photographer, I love sessions at Greenwich Point (Tod&apos;s Point), in the Audubon Center, or along quiet residential streets where the trees and gardens do the work. We keep the mood relaxed so your family&apos;s connection takes center stage — whether we&apos;re by the water, in the woods, or in your own backyard.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Greenwich Point (Tod&apos;s Point) — shoreline, dunes, and golden hour (permit required)</li>
            <li>Audubon Center — trails, meadows, and natural backdrops</li>
            <li>Local parks and gardens — seasonal color and soft light</li>
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Greenwich</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family portraits in Greenwich&apos;s best light.</p>
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
          Book in Greenwich
        </a>
      </section>
    </div>
  )
}
