import Image from "next/image";
import Link from "next/link";

export default function WeddingServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1920&auto=format&fit=crop" // Placeholder wedding image
          alt="Wedding couple walking down the aisle"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg px-6 py-8 inline-block">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-white">Wedding Photography</h1>
            <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl text-white">
              Capturing every moment of your special day.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-gray-700">
            <h2 className="text-center font-serif text-3xl font-light text-gray-800 mb-12">Your Love Story, Beautifully Told</h2>
            <p>
              Your wedding day is a once-in-a-lifetime celebration filled with love, joy, and unforgettable moments. My approach to wedding photography is to document your story authentically, capturing candid emotions, stunning details, and all the moments in between.
            </p>
            <p>
              From the excitement of getting ready to the magic of your first dance, I blend into the background to preserve genuine interactions and create timeless images you will cherish forever.
            </p>
            <p>
              I offer a range of wedding collections to suit your needs, from intimate elopements to grand celebrations. Let's work together to create a photography experience as unique as your love story.
            </p>
            {/* Features List */}
            <div className="pt-8 border-t border-gray-200 mt-12">
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">Wedding Collections Include</h3>
              <ul className="grid md:grid-cols-2 gap-6 text-base list-disc list-inside marker:text-primary">
                <li>Full-day coverage</li>
                <li>Second photographer option</li>
                <li>Engagement session</li>
                <li>High-resolution digital images</li>
                <li>Online gallery for viewing & sharing</li>
                <li>Custom wedding album options</li>
                <li>Timeline planning assistance</li>
                <li>Print release</li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Link 
                href="/pricing#weddings"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group mr-8"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  VIEW WEDDING PRICING
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
              <Link 
                href="/portfolio/weddings"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  SEE WEDDING PORTFOLIO
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 