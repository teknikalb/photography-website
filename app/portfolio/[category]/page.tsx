import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Updated image sources for specific categories
const getImagesForCategory = (category: string) => {
  const baseImages = Array(12).fill(null)
  
  if (category === 'events') {
    return [
      { id: 'event-1', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop', alt: 'Outdoor event setup' },
      { id: 'event-2', src: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1200&auto=format&fit=crop', alt: 'Event reception details' },
      { id: 'event-3', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b6?q=80&w=1200&auto=format&fit=crop', alt: 'People mingling at an event' },
      { id: 'event-4', src: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=1200&auto=format&fit=crop', alt: 'Speaker at a corporate event' },
      { id: 'event-5', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop', alt: 'Networking event attendees' },
      { id: 'event-6', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop', alt: 'Conference presentation' },
      { id: 'event-7', src: 'https://images.unsplash.com/photo-1495111314205-73813a5d602d?q=80&w=1200&auto=format&fit=crop', alt: 'Birthday party celebration' },
      { id: 'event-8', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop', alt: 'Workshop participants' },
      { id: 'event-9', src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop', alt: 'Outdoor festival scene' },
      { id: 'event-10', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop', alt: 'Concert crowd' },
      { id: 'event-11', src: 'https://images.unsplash.com/photo-1516996811264-4f01a1b7b587?q=80&w=1200&auto=format&fit=crop', alt: 'Gala dinner setting' },
      { id: 'event-12', src: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1200&auto=format&fit=crop', alt: 'Charity event volunteers' },
    ]
  }
  
  if (category === 'family') {
     return [
      { id: 'family-1', src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop', alt: 'Family playing in leaves' },
      { id: 'family-2', src: 'https://images.unsplash.com/photo-1478061653917-455ba7f4a541?q=80&w=1200&auto=format&fit=crop', alt: 'Family walking on beach' },
      { id: 'family-3', src: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop', alt: 'Family laughing together outdoors' },
      { id: 'family-4', src: 'https://images.unsplash.com/photo-1508184531941-8b3d1a05522e?q=80&w=1200&auto=format&fit=crop', alt: 'Parents holding child\'s hands' },
      { id: 'family-5', src: 'https://images.unsplash.com/photo-1609220136746-8adaf0688899?q=80&w=1200&auto=format&fit=crop', alt: 'Family silhouette at sunset' },
      { id: 'family-6', src: 'https://images.unsplash.com/photo-1561518693-1670858a3f70?q=80&w=1200&auto=format&fit=crop', alt: 'Family having picnic' },
      { id: 'family-7', src: 'https://images.unsplash.com/photo-1440598707689-547d96678487?q=80&w=1200&auto=format&fit=crop', alt: 'Child sitting on parent\'s shoulders' },
      { id: 'family-8', src: 'https://images.unsplash.com/photo-1572853426601-86f21995ff0c?q=80&w=1200&auto=format&fit=crop', alt: 'Family hug' },
      { id: 'family-9', src: 'https://images.unsplash.com/photo-1539884050138-581aa186b3f8?q=80&w=1200&auto=format&fit=crop', alt: 'Family cooking together' },
      { id: 'family-10', src: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=1200&auto=format&fit=crop', alt: 'Family reading book' },
      { id: 'family-11', src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop', alt: 'Family looking at view' },
      { id: 'family-12', src: 'https://images.unsplash.com/photo-1558981396-51cb1d59b930?q=80&w=1200&auto=format&fit=crop', alt: 'Family walking in field' },
      { id: 'maternity-1', src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop', alt: 'Maternity portrait outdoors' },
      { id: 'maternity-2', src: 'https://images.unsplash.com/photo-1580130379629-4935086e0577?q=80&w=1200&auto=format&fit=crop', alt: 'Close up of baby bump' },
      { id: 'maternity-3', src: 'https://images.unsplash.com/photo-1512036666432-7bb1cf4a01a6?q=80&w=1200&auto=format&fit=crop', alt: 'Couple maternity photo silhouette' },
      { id: 'maternity-4', src: 'https://images.unsplash.com/photo-1559535416-ff1b73ea0d1c?q=80&w=1200&auto=format&fit=crop', alt: 'Maternity session in studio' },
      { id: 'maternity-5', src: 'https://images.unsplash.com/photo-1600527340987-17aca7336e16?q=80&w=1200&auto=format&fit=crop', alt: 'Pregnant woman holding flowers' },
      { id: 'maternity-6', src: 'https://images.unsplash.com/photo-1535637946973-8e34a3eb6f64?q=80&w=1200&auto=format&fit=crop', alt: 'Lifestyle maternity photo at home' },
      { id: 'maternity-7', src: 'https://images.unsplash.com/photo-1515871204537-49a566615e68?q=80&w=1200&auto=format&fit=crop', alt: 'Maternity photo with older sibling' },
      { id: 'maternity-8', src: 'https://images.unsplash.com/photo-1596840312879-1667c75af1f1?q=80&w=1200&auto=format&fit=crop', alt: 'Maternity portrait in flowing dress' },
      { id: 'maternity-9', src: 'https://images.unsplash.com/photo-1608749990699-f41d1acc794f?q=80&w=1200&auto=format&fit=crop', alt: 'Close up hands on baby bump' },
      { id: 'maternity-10', src: 'https://images.unsplash.com/photo-1575419561996-ff1b73ea0d1c?q=80&w=1200&auto=format&fit=crop', alt: 'Maternity photo on beach' },
      { id: 'maternity-11', src: 'https://images.unsplash.com/photo-1529992771134-d8c2910f1506?q=80&w=1200&auto=format&fit=crop', alt: 'Artistic maternity portrait' },
      { id: 'maternity-12', src: 'https://images.unsplash.com/photo-1545688355-7d57b58415d1?q=80&w=1200&auto=format&fit=crop', alt: 'Couple looking at baby bump' },
    ]
  }
  
  // Default placeholder for other categories
  return baseImages.map((_, i) => ({
    id: `${category}-${i + 1}`,
    src: `/placeholder.svg?height=800&width=1200`,
    alt: `${category} photography sample ${i + 1}`,
  }))
}

// Define the structure for a single category's data
interface PortfolioCategoryData {
  title: string;
  description: string;
  featured: string[];
}

// Add index signature to allow string indexing
interface PortfolioData {
  [key: string]: PortfolioCategoryData;
}

// This would typically come from a CMS or database
const portfolioData: PortfolioData = {
  events: {
    title: "Event Photography",
    description:
      "Documenting milestones, celebrations, and corporate gatherings with vibrant, story-telling imagery.",
    featured: [
      "Corporate Conferences & Seminars",
      "Birthday Parties & Anniversaries",
      "Galas & Fundraisers",
      "Community Events & Festivals",
      "Brand Activations & Launches",
      "Candid & Formal Group Shots",
    ],
  },
  couples: {
    title: "Couples & Engagement Photography",
    description: "Celebrating your love story with romantic, authentic portraits that showcase your unique connection.",
    featured: [
      "Engagement sessions",
      "Anniversary portraits",
      "Romantic sunset sessions",
      "Urban couple portraits",
      "Beach and nature settings",
      "Lifestyle at-home sessions",
    ],
  },
  family: {
    title: "Family Photography",
    description: "Beautiful, natural family portraits that showcase your family's unique personality and connections.",
    featured: [
      "Multi-generational portraits",
      "Outdoor family sessions",
      "Lifestyle home sessions",
      "Extended family gatherings",
      "Seasonal family portraits",
      "Family milestone celebrations",
    ],
  },
  maternity: {
    title: "Maternity Photography",
    description: "Celebrating the beautiful journey to motherhood with elegant and intimate portraits.",
    featured: [
      "Outdoor & Studio Sessions",
      "Lifestyle In-Home Portraits",
      "Couple & Family Inclusion",
      "Fine Art Maternity",
      "Milk Bath Sessions",
      "Focus on Connection & Emotion",
    ],
  },
  portraits: {
    title: "Portrait Photography",
    description: "Professional portraits for individuals, seniors, and professionals that capture your authentic self.",
    featured: [
      "Professional headshots",
      "Senior portraits",
      "Personal branding",
      "Creative portraits",
      "Environmental portraits",
      "Studio portraits",
    ],
  },
}

// Type for params
interface CategoryPageProps {
  params: { category: string };
}

// No async needed if not fetching data based on params here
export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  // Check if category exists in data structure
  if (!portfolioData[category]) {
    notFound()
  }

  const { title, description, featured } = portfolioData[category]
  const images = getImagesForCategory(category) // Get images using helper

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Use first image of category? */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          // Use first image from the fetched list, or a default placeholder
          src={images[0]?.src || "/placeholder.svg?height=800&width=1920"}
          alt={`${title} hero image`}
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">{description}</p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {featured && (
            <div className="mb-16">
              <h2 className="text-center font-serif text-3xl font-light">Specializing In</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {featured.map((item: string, index: number) => (
                  <span key={index} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {images.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg aspect-[3/2]"> {/* Added aspect ratio */}
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            {/* Updated Button Style */}
            <Link 
              href="/contact" 
              className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
            >
              <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                 BOOK YOUR SESSION
              </span>
              <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
             </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
