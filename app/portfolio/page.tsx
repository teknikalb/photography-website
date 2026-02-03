import Link from "next/link"
import Image from "next/image"

const photos = [
  { src: "/family2.webp", alt: "Family session" },
  { src: "/family3.webp", alt: "Family portraits" },
  { src: "/family4.webp", alt: "Family photography" },
  { src: "/family5.webp", alt: "Family session outdoors" },
  { src: "/family6.webp", alt: "Family and maternity" },
  { src: "/family7.webp", alt: "Family portraits" },
  { src: "/family8.webp", alt: "Family session" },
  { src: "/family9.webp", alt: "Maternity and newborn" },
  { src: "/family10.webp", alt: "Family and couples" },
  { src: "/family12.webp", alt: "Portrait session" },
  { src: "/family13.webp", alt: "Family photography" },
  { src: "/family14.webp", alt: "Family session" },
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      {/* Hero Section */}
      <section className="pt-20 pb-6 bg-page sm:pt-24 sm:pb-8 md:pt-28 md:pb-10">
        <div className="container mx-auto section-x text-center">
          <h1 className="font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3 sm:mb-4">
            Portfolio
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-1">
            A selection of family, maternity, and portrait sessions.
          </p>
        </div>
      </section>

      {/* Photo Grid — mobile: 2 cols, tablet: 3, desktop: smaller max-width */}
      <section className="py-4 sm:py-6 section-x border-t border-border/60">
        <div className="container mx-auto max-w-4xl lg:max-w-5xl">
          <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, i) => (
              <div key={i} className="overflow-hidden aspect-[3/2]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-10 section-x border-t border-border/60 bg-page">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-xl font-light mb-3 text-gray-900 sm:text-2xl md:text-3xl">Ready to Capture Your Story?</h2>
            <p className="text-sm sm:text-base mb-5 text-gray-600 sm:mb-6 md:text-lg">
              Let&apos;s create something beautiful together. Book your session or reach out to discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg sm:px-8 sm:text-base min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
