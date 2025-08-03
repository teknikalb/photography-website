import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Heart, Users, Calendar, Award, Sparkles } from "lucide-react"
import Testimonials from "@/components/testimonials"

const categories = [
  {
    id: "family",
    title: "Family",
    description: "Beautiful, natural family portraits that showcase your connections",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop",
    icon: Users,
  },
  {
    id: "couples",
    title: "Couples & Engagements",
    description: "Celebrating your love story with romantic, authentic portraits",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    icon: Heart,
  },
  {
    id: "motherhood",
    title: "Motherhood",
    description: "Capturing the special bond between mothers and their children",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    icon: Heart,
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Professional portraits that capture your authentic self",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200&auto=format&fit=crop",
    icon: Camera,
  },
  {
    id: "milestones",
    title: "Milestones",
    description: "Commemorating life's special moments and achievements",
    image: "https://images.unsplash.com/photo-1484665754804-74b091211472?q=80&w=1200&auto=format&fit=crop",
    icon: Award,
  },
  {
    id: "events",
    title: "Events",
    description: "Milestones, celebrations, corporate gatherings & more",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    icon: Calendar,
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0EA]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-gray-900 mb-6">
            Portfolio
          </h1>
          <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto">
            A collection of my favorite moments and stories. Each gallery tells a unique story—from intimate family sessions to grand celebrations. Explore the categories below to see how I capture authentic moments that last forever.
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-[#F5F0EA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">Featured Work</h2>
            <p className="text-lg text-gray-700 mb-12">
              Here's a glimpse of what we can create together. Every session is unique, just like your story.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Natural Moments</h3>
                <p className="text-gray-700">Capturing authentic emotions and genuine connections in every frame.</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Artistic Vision</h3>
                <p className="text-gray-700">Creating beautiful compositions that tell your unique story.</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">Timeless Memories</h3>
                <p className="text-gray-700">Images that you'll treasure and share for generations to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-light mb-4 text-white">Ready to Capture Your Story?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's create something beautiful together. Book your session or reach out to discuss your vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 shadow-lg"
            >
              Book Your Session
            </Link>
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
  icon: React.ComponentType<{ className?: string }>;
}

function CategoryCard({ id, title, description, image, icon: Icon }: CategoryCardProps) {
  return (
    <Link 
      href={`/portfolio/${id}`} 
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/30"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="font-serif text-2xl font-light text-white mb-2 drop-shadow-lg">{title}</h3>
          <p className="text-sm text-white/90 drop-shadow mb-4">{description}</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-primary shadow transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">
            View Gallery <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
