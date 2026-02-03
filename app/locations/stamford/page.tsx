export const metadata = {
  title: "Stamford CT Photographer | Family & Maternity | Fairfield County",
  description:
    "Stamford family photographer and maternity photographer. Cove Island Park, downtown Stamford, Greenwich and Darien. Natural light sessions in Stamford and coastal Fairfield County.",
  keywords: [
    "Stamford CT photographer",
    "family photographer Stamford",
    "maternity photographer Stamford",
    "Cove Island Park photographer",
    "Fairfield County photographer",
  ],
  alternates: { canonical: "https://gretanoellephoto.com/locations/stamford" },
}

export default function StamfordLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Stamford Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the Gold Coast meets the light — family and maternity photography in Stamford, with Cove Island&apos;s shoreline, downtown&apos;s energy, and the kind of coastal glow that turns every session into something you&apos;ll treasure.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Stamford & Fairfield County</h2>
          <p className="leading-relaxed">
            Stamford is one of Fairfield County&apos;s most versatile backdrops: Cove Island Park for beach and greenery, downtown Stamford for urban texture, and easy access to Greenwich and Darien for more coastal or park settings. As a Stamford family photographer and maternity photographer, I love sessions at the beach at golden hour, in the park for softer light, or downtown for a more modern feel. We keep the mood relaxed so your family&apos;s connection takes center stage — whether we&apos;re in the sand, under the trees, or against the city skyline.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Popular Locations</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Cove Island Park — shoreline, dunes, and golden hour</li>
            <li>Downtown Stamford — urban texture and modern portraits</li>
            <li>Local parks and beaches — seasonal color and soft light</li>
          </ul>
          <p className="leading-relaxed">
            I also serve Greenwich, Darien, and coastal Fairfield County — so if you&apos;re nearby, we can find the perfect spot for your family or maternity session.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Stamford</h2>
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
          Book in Stamford
        </a>
      </section>
    </div>
  )
}
