import Image from "next/image";
import Link from "next/link";

export default function PortraitServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1920&auto=format&fit=crop" // Placeholder portrait image
          alt="Portrait session outdoors"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-4">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">Portrait Photography</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            Capturing authentic moments for individuals and families.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-gray-700">
            <h2 className="text-center font-serif text-3xl font-light text-gray-800 mb-12">Timeless Portraits for Every Chapter</h2>
            <p>
              Portrait sessions are a wonderful way to celebrate milestones, family bonds, or simply your unique personality. My approach is relaxed and natural, focusing on genuine expressions and meaningful connections.
            </p>
            <p>
              Whether you are looking for family portraits, individual headshots, or creative lifestyle images, I work with you to create a comfortable environment and beautiful results.
            </p>
            <p>
              Sessions can take place outdoors, in your home, or at a location that is special to you. I offer flexible packages for families, newborns, and individuals.
            </p>
            {/* Features List */}
            <div className="pt-8 border-t border-gray-200 mt-12">
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">Portrait Sessions Include</h3>
              <ul className="grid md:grid-cols-2 gap-6 text-base list-disc list-inside marker:text-primary">
                <li>Personalized session planning</li>
                <li>Guidance on wardrobe & posing</li>
                <li>Outdoor, in-home, or studio options</li>
                <li>Family, newborn, and individual sessions</li>
                <li>High-resolution digital images</li>
                <li>Online gallery for viewing & sharing</li>
                <li>Print release</li>
                <li>Option for fine art prints & albums</li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Link 
                href="/pricing#portraits"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group mr-8"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  VIEW PORTRAIT PRICING
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
              <Link 
                href="/portfolio/portraits"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  SEE PORTRAIT PORTFOLIO
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