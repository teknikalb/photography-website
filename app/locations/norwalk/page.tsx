export const metadata = {
  title: "Norwalk CT Photographer | Family & Maternity | Shoreline & Parks",
  description:
    "Family photographer and maternity photographer in Norwalk, CT. Shoreline, parks, and natural light. Book family and maternity sessions in Norwalk and Fairfield County.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/norwalk" },
}

export default function NorwalkLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Norwalk, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the shoreline meets the light — family and maternity photography in Norwalk, with its beaches, parks, and the kind of coastal glow that turns every session into something you&apos;ll keep forever.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Norwalk</h2>
          <p className="leading-relaxed">
            Norwalk is one of Fairfield County&apos;s best-kept secrets for photographers: Calf Pasture Beach, Cranbury Park, and the Maritime Aquarium area offer water, greenery, and light in every season. As a Norwalk family photographer and maternity photographer, I love sessions at the beach at golden hour, in Cranbury&apos;s woods and meadows, or along the harbor for a more urban-coastal feel. We keep the mood relaxed so your family&apos;s connection takes center stage — whether we&apos;re in the sand, under the trees, or in your own backyard.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Calf Pasture Beach — shoreline, dunes, and golden hour</li>
            <li>Cranbury Park — woods, meadows, and natural backdrops</li>
            <li>Harbor and SoNo — urban-coastal texture (by arrangement)</li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Norwalk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family portraits at the beach or in parks.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions by the water or in nature.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Norwalk
        </a>
      </section>
    </div>
  )
}
