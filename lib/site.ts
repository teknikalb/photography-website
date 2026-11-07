// Single source of truth for brand details, navigation, photos and copy used across the site.
// Copy and pricing follow Greta's Pixieset site (gretanoellephoto.mypixieset.com).

export const SITE = {
  name: "Greta Noelle Photography",
  shortName: "Greta Noelle",
  url: "https://gretanoellephoto.com",
  email: "greta@gretanoellephoto.com",
  instagram: "https://instagram.com/gretanoellephoto",
  handle: "@gretanoellephoto",
  locality: "Newington",
  region: "CT",
  country: "US",
  tagline: "Connecticut family & maternity photographer",
} as const

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const

// Towns served. Used in copy and structured data (replaces the old per-town pages).
export const AREAS = [
  "Newington",
  "Wethersfield",
  "Rocky Hill",
  "West Hartford",
  "Hartford",
  "Glastonbury",
  "Southington",
  "Middletown",
  "New Haven",
  "Litchfield",
  "Stamford",
  "Greenwich",
  "Darien",
  "Norwalk",
  "Westport",
] as const

export type Photo = { src: string; alt: string; position?: string }

export const PHOTOS = {
  hero: {
    src: "/family10.webp",
    alt: "Mother and daughter in white dresses walking hand in hand through a sunlit Connecticut field during a family photo session",
    position: "70% 60%",
  },
  intro: {
    src: "/family9.webp",
    alt: "Mother and daughter in white dresses touching noses during a family portrait session in Connecticut",
    position: "50% 40%",
  },
  about: {
    src: "/about-greta.webp",
    alt: "Greta Noelle, Connecticut family and lifestyle photographer, seated in a black blazer",
    position: "50% 20%",
  },
  banner: {
    src: "/family8.webp",
    alt: "Mother in a white dress relaxing on the grass with her baby during a golden-hour session",
    position: "50% 55%",
  },
  footer: {
    src: "/family16.webp",
    alt: "Toddler in a dark sweater running across a green lawn in Connecticut",
    position: "50% 55%",
  },
} satisfies Record<string, Photo>

// Gallery / carousel photos. Alt text describes the scene for accessibility and image SEO.
export const GALLERY: Photo[] = [
  { src: "/family12.webp", alt: "Mother in a yellow top hugging her laughing daughter during a family session in Connecticut", position: "50% 30%" },
  { src: "/family5.webp", alt: "Father lifting his baby son in the air and laughing during an outdoor family session", position: "50% 30%" },
  { src: "/family6.webp", alt: "Black and white portrait of parents lifting their toddler among spring flowers", position: "50% 40%" },
  { src: "/family2.webp", alt: "Mother, daughter and baby embracing in matching yellow outfits on a green lawn", position: "50% 40%" },
  { src: "/family14.webp", alt: "Parents kissing their smiling young son on the cheeks during a family portrait session", position: "50% 40%" },
  { src: "/family4.webp", alt: "Mother lifting her baby while her daughter hugs her on the grass", position: "50% 45%" },
  { src: "/family13.webp", alt: "Toddler riding on his mother's shoulders in a Connecticut park", position: "45% 40%" },
  { src: "/family7.webp", alt: "Young girl in a yellow dress holding her baby sibling on a green lawn", position: "35% 40%" },
  { src: "/family3.webp", alt: "Mother carrying her toddler across an open field at golden hour", position: "55% 40%" },
  { src: "/family15.webp", alt: "Black and white photo of a mother carrying her child on her shoulders in a park", position: "50% 50%" },
  { src: "/family16.webp", alt: "Toddler in a dark sweater running across a green lawn", position: "30% 50%" },
  { src: "/family8.webp", alt: "Mother in a white dress relaxing on the grass with her baby", position: "55% 55%" },
  { src: "/family9.webp", alt: "Mother and daughter in white dresses touching noses", position: "50% 40%" },
  { src: "/family10.webp", alt: "Mother and daughter walking through a green field in white dresses", position: "50% 50%" },
]

// Real client testimonials go here. While this list is empty the "Kind Words" block
// shows Greta's own promise instead, so no placeholder reviews are ever published.
export type Testimonial = { quote: string; by: string }
export const TESTIMONIALS: Testimonial[] = []

export const PROMISE = {
  quote:
    "My goal is for your photos to feel less like a photoshoot and more like a memory: something that takes you right back to how it felt to be there, years from now. The kind of moments you’ll miss one day.",
  by: "Greta",
}

export type Service = {
  id: string
  title: string
  tagline?: string
  blurb: string
  includes: string[]
  /** Starting price in USD (numeric, for structured data). */
  from: number
  photo: Photo
}

export const SERVICES: Service[] = [
  {
    id: "maternity",
    title: "Maternity Session",
    tagline: "Early Days",
    blurb:
      "Calm, intimate and unrushed. A chance to pause and soak in this part of your life before everything changes, best booked between 28 and 34 weeks.",
    includes: ["60-90 minute session", "In-home or outdoors", "40+ high-resolution images in an online gallery"],
    from: 425,
    photo: GALLERY[2],
  },
  {
    id: "family",
    title: "Family Session",
    tagline: "Growing Together",
    blurb:
      "Movement, conversation, snack breaks and letting kids be kids. Photos that feel joyful, connected and true to your family as you are right now.",
    includes: ["45-60 minute session", "Outdoor or in-home locations", "40+ high-resolution images in an online gallery"],
    from: 375,
    photo: GALLERY[0],
  },
  {
    id: "couples",
    title: "Couple Session",
    tagline: "Just Us",
    blurb:
      "A relaxed, natural session with plenty of space to slow down, move around and enjoy being together. Some of the best moments happen once you stop thinking about the camera.",
    includes: ["45-60 minute session", "A meaningful location of your choice", "40+ high-resolution images in an online gallery"],
    from: 375,
    photo: GALLERY[4],
  },
  {
    id: "graduation",
    title: "Senior & Graduation Sessions",
    blurb:
      "Confident, timeless portraits that celebrate who you are, how far you’ve come and the exciting chapter ahead.",
    includes: ["30-45 minute session", "A meaningful location of your choice", "25 high-resolution images in an online gallery"],
    from: 225,
    photo: GALLERY[8],
  },
  {
    id: "mini-sessions",
    title: "Seasonal Mini Sessions",
    blurb:
      "Short, thoughtfully curated sessions that capture beautiful moments without the full session commitment. Perfect for seasonal portraits, milestones and little memories worth keeping.",
    includes: ["25 minute session", "Outdoor or in-home locations", "20 high-resolution images in an online gallery"],
    from: 250,
    photo: GALLERY[3],
  },
  {
    id: "bump-to-baby",
    title: "From Bump to Baby Collection",
    blurb:
      "Two curated sessions documenting your family’s next chapter, from the beauty of pregnancy to the fleeting intimacy of your newborn’s earliest days.",
    includes: ["Maternity and newborn lifestyle sessions", "Outdoor or in-home locations", "40+ high-resolution images per session"],
    from: 725,
    photo: GALLERY[11],
  },
]

export type Faq = { question: string; answer: string }

export const FAQS: Faq[] = [
  {
    question: "What does a session with you feel like?",
    answer:
      "Sessions are relaxed and easygoing. I guide you when needed, but there’s no pressure for everyone to pose perfectly and stand still. Especially with kids, the best photos usually happen once everyone settles in, plays a little and stops thinking about the camera.",
  },
  {
    question: "Where do sessions usually take place?",
    answer:
      "Most families choose either an outdoor location or their own home and backyard, where everyone feels comfortable. I’m based in Newington and photograph across Connecticut, including Hartford, West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, New Haven and Greenwich, and I’m always happy to help you choose a spot.",
  },
  {
    question: "How do you guide us during the session?",
    answer:
      "Very gently. Instead of stiff posing, I guide you through small movements and interactions so the session feels comfortable and the photos still feel like you.",
  },
  {
    question: "How do we book a session with you?",
    answer:
      "Fill out the contact form with a few details about yourself, the type of session you’re looking for and any dates or locations you already have in mind. I’ll get back to you with availability, pricing and the next steps.",
  },
  {
    question: "When will I receive my photos?",
    answer:
      "Three to four weeks after your session you’ll receive an email with an invitation to a private online gallery, plus a PIN code for downloading your photos. You can also order prints, wall art, cards and albums right inside the gallery.",
  },
]

export const EXPERIENCE = {
  pillars: [
    {
      title: "A relaxed atmosphere",
      body: "There’s space for kids to play, couples to connect and moments to unfold without rushing.",
    },
    {
      title: "Gentle guidance",
      body: "I guide you throughout the session in a way that feels natural and comfortable, without making anything feel too posed.",
    },
    {
      title: "Natural, timeless photos",
      body: "All the small moments you’ll cherish years from now, the laughter, the warmth, the hugs, captured on camera.",
    },
  ],
  steps: [
    {
      title: "Planning your session",
      body: "Send me a message so we can confirm a date and time and talk through the details. Then we’ll pick the location that works best and start preparing.",
    },
    {
      title: "Session day",
      body: "I recommend arriving 10 to 15 minutes early. It will be a fun, easy and lovely day, I promise.",
    },
    {
      title: "Editing and gallery",
      body: "Three to four weeks later you’ll receive your private online gallery, with a PIN code to download your photos.",
    },
    {
      title: "Prints and albums",
      body: "Order prints, wall art, greeting cards or a full family album right inside your gallery. Everything is delivered to your door.",
    },
  ],
}
