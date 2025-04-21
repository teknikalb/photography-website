import Image from "next/image";
import Link from "next/link";

export default function EventServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop" // Placeholder event image
          alt="Outdoor event setting"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg px-6 py-8 inline-block">
            <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-white">Event Photography</h1>
            <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl text-white">
              Documenting your milestones and celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-gray-700">
            <h2 className="text-center font-serif text-3xl font-light text-gray-800 mb-12">Capturing Your Special Events</h2>
            <p>
              From corporate functions and conferences to birthday parties, anniversaries, and community gatherings, every event holds unique moments worth preserving.
              My approach to event photography is to blend seamlessly into the background, capturing candid interactions, key moments, and the overall atmosphere
              without being intrusive.
            </p>
            <p>
              I focus on telling the story of your event through vibrant, authentic images. Whether it's the energy of a crowd, the details of the decor,
              or the genuine emotions of attendees, I strive to deliver a comprehensive visual narrative that you can cherish and share.
            </p>
            <p>
              I offer flexible hourly coverage and package options to suit events of all sizes and types. Let's discuss how I can best capture the essence
              of your upcoming occasion.
            </p>
            
            {/* Placeholder for Service Details/Packages */}
            <div className="pt-8 border-t border-gray-200 mt-12">
               <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">Event Coverage Includes</h3>
               <ul className="grid md:grid-cols-2 gap-6 text-base list-disc list-inside marker:text-primary">
                  <li>Candid moments & interactions</li>
                  <li>Keynote speakers & presentations</li>
                  <li>Group photos (formal & informal)</li>
                  <li>Venue & decor details</li>
                  <li>Atmosphere & ambiance shots</li>
                  <li>High-Resolution Digital Images</li>
                  <li>Online Gallery for Viewing & Sharing</li>
                  <li>Flexible Hourly & Package Rates</li>
               </ul>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/pricing#events"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group mr-8"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                   VIEW EVENT PRICING
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
               </Link>
               <Link 
                  href="/portfolio/events"
                  className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                >
                 <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                    SEE EVENT PORTFOLIO
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