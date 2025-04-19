import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "events",
    title: "Events",
    description: "Milestones, celebrations, corporate gatherings & more.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "couples",
    title: "Couples & Engagements",
    description: "Celebrating your love story with romantic, authentic portraits",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "family",
    title: "Family",
    description: "Beautiful, natural family portraits that showcase your connections",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "maternity",
    title: "Maternity",
    description: "Celebrating the beauty of anticipation.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "motherhood",
    title: "Motherhood",
    description: "Capturing the special bond between mothers and their children",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Professional portraits that capture your authentic self",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "milestones",
    title: "Milestones",
    description: "Commemorating life's special moments and achievements",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: "boudoir",
    title: "Boudoir",
    description: "Elegant, empowering portraits celebrating your beauty",
    image: "/placeholder.svg?height=800&width=1200",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Portfolio hero image"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">Portfolio</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            A collection of my favorite moments and stories
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper component for category cards
interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

function CategoryCard({ id, title, description, image }: CategoryCardProps) {
  return (
    <Link href={`/portfolio/${id}`} className="group block overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="font-serif text-2xl font-light">{title}</h3>
          <p className="mt-2 text-sm text-white/80">{description}</p>
        </div>
      </div>
    </Link>
  )
}
