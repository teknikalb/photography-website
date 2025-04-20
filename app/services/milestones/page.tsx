import Image from "next/image";
import Link from "next/link";

export default function MilestoneServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1484665754804-74b091211472?q=80&w=1920&auto=format&fit=crop" // Placeholder milestone image
          alt="Milestone celebration"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-4">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">Milestone Sessions</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            Celebrate life's special moments and achievements.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-lg text-gray-700">
            <h2 className="text-center font-serif text-3xl font-light text-gray-800 mb-12">Commemorate Every Milestone</h2>
            <p>
              Life is full of moments worth celebrating—birthdays, graduations, anniversaries, and personal achievements. Milestone sessions are designed to capture the joy and significance of these occasions, creating memories you can look back on for years to come.
            </p>
            <p>
              My approach is to make each session fun and meaningful, focusing on the details and emotions that make your milestone unique. Whether it's a first birthday cake smash, a senior portrait, or a retirement celebration, I tailor each session to your vision.
            </p>
            <p>
              Sessions can be held at a location of your choice, with flexible packages to suit your needs and preferences.
            </p>
            {/* Features List */}
            <div className="pt-8 border-t border-gray-200 mt-12">
              <h3 className="font-serif text-2xl font-light text-gray-800 mb-6 text-center">Milestone Sessions Include</h3>
              <ul className="grid md:grid-cols-2 gap-6 text-base list-disc list-inside marker:text-primary">
                <li>Personalized session planning</li>
                <li>Guidance on wardrobe & styling</li>
                <li>Location of your choice</li>
                <li>All ages and occasions welcome</li>
                <li>High-resolution digital images</li>
                <li>Online gallery for viewing & sharing</li>
                <li>Print release</li>
                <li>Option for fine art prints & albums</li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Link 
                href="/pricing#milestones"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group mr-8"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  VIEW MILESTONE PRICING
                </span>
                <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
              </Link>
              <Link 
                href="/portfolio/milestones"
                className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
              >
                <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                  SEE MILESTONE PORTFOLIO
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