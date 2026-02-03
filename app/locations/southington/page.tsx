export const metadata = {
  title: "Southington CT Photographer | Family & Maternity | Orchards & Parks",
  description:
    "Family photographer and maternity photographer in Southington, CT. Apple orchards, farms, and parks. Natural light family and maternity sessions in Southington and central Connecticut.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/southington" },
}

export default function SouthingtonLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Southington, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Orchards, farms, and the kind of light that turns a simple afternoon into something you&apos;ll frame — family and maternity photography in Southington, where the land does the talking.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Why Southington</h2>
          <p className="leading-relaxed">
            Southington is a gift for lifestyle photography: apple orchards in fall, farm stands in summer, and rolling hills that catch the light in every season. As a Southington family photographer and maternity photographer, I love sessions at local farms and orchards (with permission), in parks like Panthorn or the Linear Trail, or in your own backyard. The goal is always the same — real connection, soft light, and images that feel like your life, only a little more golden.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Favorite Spots</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Local orchards and farms — seasonal color and rustic charm (by arrangement)</li>
            <li>Panthorn Park — greenery and walking paths</li>
            <li>Southington Linear Trail — natural backdrops and golden hour</li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Southington</h2>
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
          Book in Southington
        </a>
      </section>
    </div>
  )
}
