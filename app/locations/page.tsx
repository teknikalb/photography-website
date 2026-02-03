import Link from "next/link"
import {
  MapPin,
  Camera,
  Leaf,
  Sun,
  Home,
  Waves,
  TreePine,
  Building2,
  Mountain,
  Heart,
  Sparkles,
  Palette,
} from "lucide-react"

export const metadata = {
  title: "Connecticut Photography Locations | Family & Maternity Sessions Near You",
  description:
    "Family photographer and maternity photographer serving Hartford, New Haven, Fairfield County, Greenwich, Stamford, West Hartford, Glastonbury, Newington & all of Connecticut. Natural light, outdoor & in-home sessions.",
  keywords: [
    "Connecticut photographer locations",
    "family photographer Connecticut",
    "maternity photographer CT",
    "Hartford area photographer",
    "Fairfield County photographer",
    "New Haven photographer",
    "West Hartford family photos",
    "Greenwich CT photographer",
    "Stamford maternity photographer",
    "Glastonbury family photographer",
    "Newington CT photographer",
    "outdoor photography Connecticut",
  ],
  alternates: { canonical: "https://gretanoellephoto.com/locations" },
  openGraph: {
    title: "Connecticut Photography Locations | Greta Noelle Photography",
    description:
      "Family and maternity sessions across Connecticut — from the Connecticut River valley to the Gold Coast. Find your town and book a session.",
    url: "https://gretanoellephoto.com/locations",
  },
}

const locations = [
  { name: "Newington", href: "/locations/newington", region: "Central CT" },
  { name: "Hartford", href: "/locations/hartford", region: "Central CT" },
  { name: "West Hartford", href: "/locations/west-hartford", region: "Central CT" },
  { name: "Glastonbury", href: "/locations/glastonbury", region: "Central CT" },
  { name: "Wethersfield", href: "/locations/wethersfield", region: "Central CT" },
  { name: "Rocky Hill", href: "/locations/rocky-hill", region: "Central CT" },
  { name: "Southington", href: "/locations/southington", region: "Central CT" },
  { name: "Middletown", href: "/locations/middletown", region: "Central CT" },
  { name: "Litchfield", href: "/locations/litchfield", region: "Litchfield Hills" },
  { name: "New Haven", href: "/locations/new-haven", region: "Greater New Haven" },
  { name: "Stamford", href: "/locations/stamford", region: "Fairfield County" },
  { name: "Greenwich", href: "/locations/greenwich", region: "Fairfield County" },
  { name: "Darien", href: "/locations/darien", region: "Fairfield County" },
  { name: "Norwalk", href: "/locations/norwalk", region: "Fairfield County" },
  { name: "Westport", href: "/locations/westport", region: "Fairfield County" },
]

const settings = [
  {
    icon: Home,
    title: "In-home & lifestyle",
    description: "Your living room, nursery, backyard, or front porch. The place you already are.",
  },
  {
    icon: Waves,
    title: "Beaches & shoreline",
    description: "Sand, dunes, lighthouse light, and that coastal glow — Connecticut and beyond.",
  },
  {
    icon: TreePine,
    title: "Parks, orchards & farms",
    description: "Meadows, apple orchards, flower fields, and trails. Seasonal color and open sky.",
  },
  {
    icon: Building2,
    title: "Urban & downtown",
    description: "City streets, architecture, cafés, and the energy of a place. We find the light.",
  },
  {
    icon: Mountain,
    title: "Woods, hills & rivers",
    description: "Forest paths, riverbanks, overlooks. Quiet corners and big views.",
  },
  {
    icon: Palette,
    title: "Studios & creative spaces",
    description: "When you want controlled light, backdrops, or something a little different.",
  },
]

const sessionTypes = [
  "Family sessions",
  "Maternity & newborn",
  "Portraits & headshots",
  "Milestones & birthdays",
  "Events & celebrations",
  "Couples & engagements",
  "Pet photography",
  "Brand & lifestyle",
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background section-x pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-light tracking-wide text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Where We Create
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light tracking-wide text-muted-foreground">
            We don&apos;t limit the places we shoot or the things we do. Your backyard, a beach, an orchard, your couch, or a spot we discover together — anywhere the light and the story take us.
          </p>
        </div>
      </section>

      {/* Intro — expansive, no limits */}
      <section className="border-b border-border/60 bg-page section-x py-8 sm:py-10 md:py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m based in Newington and I travel — across Connecticut, into New York, or wherever your vision leads. Family sessions, maternity, newborns, portraits, milestones, events, pets, couples, and more. In-home, on the shore, in the woods, downtown, or at a place that&apos;s special to you. If you can imagine it, we can make it happen. The pages below are a few of the areas I love; if you don&apos;t see your town, that&apos;s fine — we go there too.
          </p>
        </div>
      </section>

      {/* Types of settings — creative grid */}
      <section className="border-b border-border/60 bg-background section-x py-8 sm:py-10 md:py-12" aria-labelledby="settings-heading">
        <div className="container mx-auto max-w-5xl">
          <h2 id="settings-heading" className="font-serif text-2xl font-light tracking-wide text-foreground sm:text-3xl text-center mb-12">
            The kinds of places we shoot
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Beaches, backyards, orchards, city blocks, forests, studios — whatever fits your story. We find the light and make it work.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {settings.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-xl border border-border/80 bg-page p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-light text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What we capture — no limits */}
      <section className="border-b border-border/60 bg-page section-x py-8 sm:py-10 md:py-12" aria-labelledby="sessions-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 id="sessions-heading" className="font-serif text-2xl font-light tracking-wide text-foreground sm:text-3xl flex items-center justify-center gap-3">
            <Sparkles className="h-7 w-7 text-primary/80" aria-hidden />
            What we capture
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Family, maternity, newborns, portraits, milestones, events, pets, couples, and more. We don&apos;t put a ceiling on what we do — if it matters to you, we can capture it.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Types of sessions">
            {sessionTypes.map((type) => (
              <li key={type}>
                <span className="inline-block rounded-full border border-border/80 bg-background px-4 py-2 text-sm font-medium text-foreground">
                  {type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Towns we love — with "and everywhere else" */}
      <section className="border-b border-border/60 bg-background section-x py-8 sm:py-10 md:py-12" aria-labelledby="locations-heading">
        <div className="container mx-auto max-w-5xl">
          <h2 id="locations-heading" className="font-serif text-2xl font-light tracking-wide text-foreground sm:text-3xl text-center">
            Some of the places we love
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-3 mb-10">
            These are a few areas I shoot in often — with favorite spots and seasonal tips on each page. Your town not here? We travel. Your backyard, your favorite spot, or a place we find together.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="group flex flex-col rounded-xl border border-border/80 bg-page p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <MapPin className="h-5 w-5 shrink-0 text-primary/70 transition-colors group-hover:text-primary" />
                  <span className="text-xs font-medium tracking-wider text-muted-foreground">
                    {loc.region}
                  </span>
                </div>
                <span className="mt-3 font-serif text-xl font-light text-foreground group-hover:text-primary">
                  {loc.name}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  Favorite spots & tips in {loc.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t see your town?{" "}
            <Link href="/contact" className="font-medium text-foreground underline decoration-primary/50 underline-offset-2 hover:text-primary">
              Tell me where you are
            </Link>{" "}
            — we&apos;ll make it work.
          </p>
        </div>
      </section>

      {/* Mood & light — creative angle */}
      <section className="border-b border-border/60 bg-page section-x py-8 sm:py-10 md:py-12" aria-labelledby="mood-heading">
        <div className="container mx-auto max-w-3xl">
          <h2 id="mood-heading" className="font-serif text-2xl font-light tracking-wide text-foreground sm:text-3xl flex items-center gap-3">
            <Sun className="h-7 w-7 text-primary/80" aria-hidden />
            Light & mood
          </h2>
          <div className="mt-6 space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Golden hour at the beach, soft overcast in the woods, window light in your living room, or the energy of a city afternoon — we work with whatever the day gives us. I&apos;ll help you choose a time and place that flatters your skin and fits your vibe, whether you want dreamy and soft or bold and editorial. No single look; we match the light to your story.
            </p>
            <p className="leading-relaxed">
              Seasonal shifts are part of the fun: cherry blossoms and green meadows in spring, orchards and foliage in fall, snow and evergreen in winter, long summer evenings by the water. We can plan around a specific look or simply show up and make the most of the day.
            </p>
          </div>
        </div>
      </section>

      {/* Why location matters — reframed as expansive */}
      <section className="border-b border-border/60 bg-background section-x py-8 sm:py-10 md:py-12">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h2 className="font-serif text-2xl font-light tracking-wide text-foreground sm:text-3xl flex items-center gap-3">
            <Heart className="h-7 w-7 text-primary/80" aria-hidden />
            Why place matters
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              The best photos often come from places that mean something to you — a park you walk with the kids, a beach you visit in summer, or the couch where you read at night. We don&apos;t restrict by town or setting; we lean into what fits your story. Your home, a favorite hike, a destination you&apos;ve always wanted — if it matters to you, it&apos;s on the table.
            </p>
            <p className="leading-relaxed">
              I shoot across Connecticut and beyond. Hartford, West Hartford, Glastonbury, Greenwich, Stamford, New Haven, Litchfield, and everywhere in between — plus travel for weddings, milestones, and the occasional adventure. Start with a town above for inspiration, or reach out and we&apos;ll plan something that&apos;s entirely yours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Camera className="h-4 w-4" />
              Book a session
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Leaf className="h-4 w-4" />
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="border-t border-border/60 section-x py-12 text-center">
        <p className="text-sm text-muted-foreground">
          Have a place in mind or no idea where to start? I&apos;ll suggest spots or we&apos;ll find one together.{" "}
          <Link href="/contact" className="font-medium text-foreground underline decoration-primary/50 underline-offset-2 hover:text-primary">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
