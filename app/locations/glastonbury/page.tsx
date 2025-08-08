export const metadata = {
  title: "Glastonbury CT Photographer | Family & Maternity",
  description: "Glastonbury photographer for families and maternity sessions at orchards, farms, and riverfront parks.",
  alternates: { canonical: "https://drenanoellephoto.com/locations/glastonbury" },
}

export default function GlastonburyLocationPage() {
  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Glastonbury Photographer
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Natural, heartfelt sessions in orchards, farms, and scenic riverfront parks around Glastonbury.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/contact" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow">
            Book in Glastonbury
          </a>
        </div>
      </section>
    </div>
  )
}


