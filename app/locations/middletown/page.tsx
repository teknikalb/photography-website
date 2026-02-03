export const metadata = {
  title: "Middletown CT Photographer | Family & Maternity | Wesleyan & River",
  description:
    "Family photographer and maternity photographer in Middletown, CT. Wesleyan campus, riverfront, and Main Street charm. Book family and maternity sessions in Middletown and the Connecticut River valley.",
  alternates: { canonical: "https://gretanoellephoto.com/locations/middletown" },
}

export default function MiddletownLocationPage() {
  return (
    <div className="min-h-screen bg-page">
      <section className="pt-24 pb-8 section-x">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Middletown, Connecticut Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the river meets Main Street — family and maternity photography in Middletown, with its historic character, Wesleyan beauty, and the soft light of the Connecticut River valley.
          </p>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl space-y-8 text-gray-700">
          <h2 className="font-serif text-2xl font-light text-gray-900">Sessions in Middletown</h2>
          <p className="leading-relaxed">
            Middletown offers a perfect blend: the elegance of Wesleyan&apos;s campus, the warmth of Main Street, and the calm of the riverfront. As a Middletown family photographer and maternity photographer, I use these backdrops to create images that feel both timeless and personal — whether we&apos;re under the trees on campus, by the water at Harbor Park, or among the brick and storefronts downtown. We&apos;ll pick the setting that fits your story and the light that flatters most.
          </p>
          <h3 className="font-serif text-xl font-light text-gray-900">Where We Shoot</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Wesleyan University grounds — classic architecture and greenery (by permission)</li>
            <li>Harbor Park & riverfront — water, sky, and golden hour</li>
            <li>Main Street & downtown — urban texture and historic charm</li>
          </ul>
        </div>
      </section>

      <section className="py-8 border-t border-border/60 section-x">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-light text-gray-900 mb-4">Popular Services in Middletown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/services/family" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Family Sessions</h3>
              <p className="text-gray-700">Relaxed family portraits in Middletown&apos;s best spots.</p>
            </a>
            <a href="/services/portraits" className="rounded-xl border border-gray-200 bg-page p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-xl text-gray-900 mb-2">Portraits</h3>
              <p className="text-gray-700">Graduation and professional portraits with timeless backdrops.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 text-center section-x">
        <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
          Book in Middletown
        </a>
      </section>
    </div>
  )
}
