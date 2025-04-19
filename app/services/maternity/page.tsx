import Image from "next/image";
import Link from "next/link";

export default function MaternityServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop" // Placeholder maternity image
          alt="Maternity portrait by window"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-4">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">Maternity Photography</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            Celebrating the beauty of anticipation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-gray-700">
            <h2 className="text-center font-serif text-3xl font-light text-gray-800 mb-12">Embracing Your Journey</h2>
            <p>
              Pregnancy is a profound and transformative time, filled with unique beauty and quiet anticipation.
              My maternity sessions are designed to celebrate this special chapter, creating timeless portraits that capture the glow and emotion
              of expecting mothers and their families.
            </p>
            <p>
              Whether you prefer the intimacy of an in-home lifestyle session, the beauty of an outdoor location bathed in golden light,
              or the classic elegance of studio portraits, we will create a comfortable and relaxed atmosphere.
              Partners and older siblings are always welcome to participate, highlighting the love and connection surrounding the new arrival.
            </p>
            <p>
              We'll focus on capturing your natural beauty and the unique bond you share with your growing baby. These sessions are best scheduled
              between 28-34 weeks to comfortably showcase your beautiful bump.
            </p>
            
            {/* Placeholder for Service Details/Packages */}
            <div className="pt-8 border-t border-gray-200 mt-12">
               <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">Maternity Sessions Feature</h3>
               <ul className="grid md:grid-cols-2 gap-6 text-base list-disc list-inside marker:text-primary">
                  <li>Personalized Session Planning</li>
                  <li>Guidance on Wardrobe & Styling</li>
                  <li>Choice of Studio, Outdoor, or In-Home Location</li>
                  <li>Partner & Sibling Inclusion</li>
                  <li>Gentle Posing & Direction</li>
                  <li>High-Resolution Digital Images</li>
                  <li>Online Gallery for Viewing & Sharing</li>
                  <li>Option for Fine Art Prints & Albums</li>
               </ul>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/pricing#maternity" // Link to relevant pricing section
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group mr-8"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                   VIEW MATERNITY PRICING
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
               </Link>
               <Link 
                  href="/portfolio/maternity" // Link to maternity portfolio
                  className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                >
                 <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                    SEE MATERNITY PORTFOLIO
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