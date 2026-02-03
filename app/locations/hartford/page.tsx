export const metadata = {
  title: "Hartford CT Photographer | Family, Maternity & Portraits",
  description:
    "Hartford, Connecticut family photographer and maternity photographer. Elizabeth Park, West Hartford Reservoir, downtown Hartford. Natural light, heartfelt sessions across central CT.",
  keywords: [
    "Hartford CT photographer",
    "family photographer Hartford",
    "maternity photographer Hartford",
    "Elizabeth Park photographer",
    "West Hartford Reservoir photos",
  ],
  alternates: { canonical: "https://gretanoellephoto.com/locations/hartford" },
}

export default function HartfordLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-12 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Hartford, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the city meets the garden — family and maternity photography in Hartford, with Elizabeth Park&apos;s roses, the Reservoir&apos;s trails, and the soft light that turns every session into something you&apos;ll treasure.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Hartford & Central CT</h2>
          <p className="leading-relaxed">
            Hartford is a gift for lifestyle photography: Elizabeth Park&apos;s rose garden in bloom, the West Hartford Reservoir&apos;s golden-hour greenery, and downtown Hartford&apos;s architecture for a more modern, urban feel. As a Hartford family photographer and maternity photographer, I guide you on timing and styling so we get soft, flattering light and natural interactions — whether we&apos;re among the flowers, on the trails, or against the city skyline. Every session is tailored to you and the season.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Hartford Locations</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Elizabeth Park Rose Garden — seasonal blooms, walking paths, and dreamy light</li>
            <li>West Hartford Reservoir trails — golden hour greenery and open air</li>
            <li>Downtown Hartford — architecture and urban texture for modern portraits</li>
          </ul>
          <p className="leading-relaxed">
            I also serve nearby Newington, Wethersfield, Rocky Hill, and central Connecticut — so if you&apos;re just outside Hartford, we can find the perfect spot for your family or maternity session.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Hartford</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed, candid family portraits in parks or at home.</p>
            </a>
            <a href="/services/maternity" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Maternity</h3>
              <p className="text-gray-700">Elegant, natural images that celebrate motherhood.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Hartford
        </a>
      </section>
    </div>
  )
}
