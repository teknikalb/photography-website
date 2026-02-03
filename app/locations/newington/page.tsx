export const metadata = {
  title: "Newington CT Photographer | Family & Maternity | Greta Noelle",
  description:
    "Family photographer and maternity photographer in Newington, CT. Natural light sessions in parks, at home, and around central Connecticut. Book your session in Newington.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/newington" },
}

export default function NewingtonLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-12 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Newington, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            This is home. Family and maternity sessions in Newington and nearby — where the light feels familiar and the moments feel true.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Newington & Central CT</h2>
          <p className="leading-relaxed">
            As a Newington family photographer and maternity photographer, I know the parks, the golden-hour angles, and the quiet corners that make for beautiful, natural images. Whether we shoot at Mill Pond Park, in your backyard, or at a favorite spot in Wethersfield or Rocky Hill, we keep the session relaxed and the focus on you — soft light, real connection, and images you&apos;ll love for years.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Where We Shoot</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Mill Pond Park — greenery and water, ideal for family and maternity</li>
            <li>Local parks and trails — golden hour and seasonal color</li>
            <li>In-home sessions — newborn, maternity, and relaxed family portraits</li>
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Newington</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Natural, candid family photos in and around Newington.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant maternity sessions in parks or at home.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Newington
        </a>
      </section>
    </div>
  )
}
