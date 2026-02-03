export const metadata = {
  title: "Westport CT Photographer | Family & Maternity | Beaches & Parks",
  description:
    "Family photographer and maternity photographer in Westport, CT. Compo Beach, Sherwood Island, and natural light. Book family and maternity sessions in Westport and Fairfield County.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/westport" },
}

export default function WestportLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-12 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Westport, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Beaches, light, and room to breathe — family and maternity photography in Westport, where the shoreline and the parks give every session space and softness.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Westport</h2>
          <p className="leading-relaxed">
            Westport is one of Connecticut&apos;s most beloved backdrops for lifestyle photography: Compo Beach, Sherwood Island State Park, and the Saugatuck River offer water, sky, and light in every season. As a Westport family photographer and maternity photographer, I love sessions at the beach at golden hour, in the dunes or along the boardwalk, or in local parks and gardens for a softer, greener feel. We keep the mood relaxed so your family&apos;s connection takes center stage — whether we&apos;re in the sand, under the trees, or in your own backyard.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Where We Shoot</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Compo Beach — shoreline, lighthouse, and golden hour (permit may apply)</li>
            <li>Sherwood Island State Park — beach, meadows, and natural backdrops</li>
            <li>Local parks and gardens — seasonal color and soft light</li>
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Westport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Natural family photos at the beach or in parks.</p>
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
          Book in Westport
        </a>
      </section>
    </div>
  )
}
