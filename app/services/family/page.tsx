import Image from "next/image";
import Link from "next/link";

export default function FamilyServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1920&auto=format&fit=crop" // Placeholder family image
          alt="Family portrait outdoors"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg px-6 py-8 inline-block">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-white">Family Portraits</h1>
            <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl text-white">
              Cherish your family's story with timeless portraits.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-gray-700">
            <h2 className="text-center font-serif text-3xl font-light text-gray-800 mb-12">Capturing Your Family's Unique Bond</h2>
            <p>
              Family sessions are about celebrating connection, laughter, and the love you share. My approach is relaxed and fun, allowing your family's personality to shine through in every image.
            </p>
            <p>
              Whether you want to document a special milestone or simply freeze a moment in time, I work with you to create a comfortable environment and beautiful, natural portraits.
            </p>
            <p>
              Sessions can take place outdoors, in your home, or at a location that is meaningful to your family. I offer flexible packages for families of all sizes and ages.
            </p>
            {/* Features List */}
            <div className="pt-8 border-t border-gray-200 mt-12">
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">Family Sessions Include</h3>
              <ul className="grid md:grid-cols-2 gap-6 text-base list-disc list-inside marker:text-primary">
                <li>Personalized session planning</li>
                <li>Guidance on wardrobe & posing</li>
                <li>Outdoor, in-home, or studio options</li>
                <li>All ages and family sizes welcome</li>
                <li>High-resolution digital images</li>
                <li>Online gallery for viewing & sharing</li>
                <li>Print release</li>
                <li>Option for fine art prints & albums</li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Link 
                href="/pricing#family"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group mr-8"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  VIEW FAMILY PRICING
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
              <Link 
                href="/portfolio/family"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  SEE FAMILY PORTFOLIO
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