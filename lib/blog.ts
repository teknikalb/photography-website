import type { Photo } from "./site"

export type BlogPost = {
  slug: string
  title: string
  /** Short display title used in the blog index (reference-style big headline). */
  headline: string
  category: string
  excerpt: string
  photo: Photo
  content: string
}

export const POSTS: BlogPost[] = [
  {
    slug: "family-photo-outfit-guide-connecticut",
    title: "What to Wear for Family Photos in Connecticut (Season-by-Season Guide)",
    headline: "What to wear for family photos",
    category: "Family Photography",
    excerpt:
      "A practical outfit formula for Connecticut families, with seasonal examples and a quick checklist.",
    photo: {
      src: "/family2.webp",
      alt: "Mother, daughter and baby in coordinated yellow outfits for a family photo session",
      position: "50% 40%",
    },
    content: `
      <p>Outfits can make or break how polished your family gallery looks, without feeling matchy. Use this quick guide to plan what to wear for family photos around Connecticut's seasons.</p>
      <h2>TL;DR Outfit Formula</h2>
      <ul>
        <li><strong>Palette:</strong> Pick 2–3 base colors + 1 accent. Avoid neon; muted earth tones photograph beautifully.</li>
        <li><strong>Textures:</strong> Knits, linen, denim add depth; avoid large logos.</li>
        <li><strong>Fit:</strong> Choose comfort first, especially for kids.</li>
      </ul>
      <h2>Spring (Hartford, West Hartford Reservoir)</h2>
      <p>Soft pastels + light neutrals. Layers for unpredictable temps. Think flowy dresses, chinos, light sweaters.</p>
      <h2>Summer (New Haven, shoreline parks)</h2>
      <p>Light fabrics and sandals. Mid-tones (sage, dusty blue, terracotta) reduce glare in noon sun.</p>
      <h2>Fall (Glastonbury orchards, Elizabeth Park)</h2>
      <p>Rich tones like rust, forest and cream complement foliage. Add boots, hats and knit cardigans.</p>
      <h2>Winter (Downtown textures)</h2>
      <p>Monochrome layers (camel, charcoal, ivory). Statement coats and scarves.</p>
      <h2>Checklist</h2>
      <ul>
        <li>Lay outfits together and snap a phone photo</li>
        <li>Limit patterns to 1–2 people</li>
        <li>Bring backups for toddlers</li>
      </ul>
    `,
  },
  {
    slug: "best-locations-hartford-family-photos",
    title: "Best Family Photo Locations in Hartford (Local Guide)",
    headline: "Best family photo locations in Hartford",
    category: "Locations",
    excerpt:
      "Elizabeth Park, West Hartford Reservoir and urban textures, plus pro timing tips.",
    photo: {
      src: "/family13.webp",
      alt: "Toddler on his mother's shoulders in a park near Hartford, Connecticut",
      position: "45% 40%",
    },
    content: `
      <p>These Hartford-area spots, including nearby Newington, Wethersfield, Rocky Hill and West Hartford, offer variety, easy access and beautiful light for family photos.</p>
      <h2>Elizabeth Park</h2>
      <p>Roses in summer, arches and paths year-round. Best at golden hour.</p>
      <h2>West Hartford Reservoir</h2>
      <p>Wooded trails and open fields; perfect for candid walking shots.</p>
      <h2>Downtown Hartford</h2>
      <p>Urban textures for modern portraits: stone, glass and symmetry.</p>
      <h2>Pro Tips</h2>
      <ul>
        <li>Weekday evenings are quieter</li>
        <li>Pack bug spray in late spring</li>
        <li>Bring a neutral blanket for sit-down photos</li>
      </ul>
    `,
  },
  {
    slug: "maternity-session-tips-connecticut",
    title: "Maternity Session Tips in Connecticut (Timing, Outfits, Locations)",
    headline: "Maternity session tips",
    category: "Maternity",
    excerpt:
      "When to book, what to wear and where to shoot for elegant Connecticut maternity images.",
    photo: {
      src: "/family8.webp",
      alt: "Mother in a white dress resting on the grass during a Connecticut maternity and newborn style session",
      position: "55% 55%",
    },
    content: `
      <h2>Best Time to Book</h2>
      <p>Schedule for 28–34 weeks for comfort + visible bump.</p>
      <h2>Outfits</h2>
      <p>Solid, flowing dresses photograph beautifully. Bring a fitted option for variety.</p>
      <h2>Locations</h2>
      <p>From West Hartford and Glastonbury to Greenwich and Darien: reservoir trails, Elizabeth Park, orchards, or at-home lifestyle for intimate images.</p>
      <h2>Partner &amp; Siblings</h2>
      <p>Coordinate outfits; keep hands busy (hats, jackets) for natural posing.</p>
    `,
  },
  {
    slug: "mini-session-prep-checklist",
    title: "Mini Session Prep Checklist (CT Families)",
    headline: "Mini session prep checklist",
    category: "Mini Sessions",
    excerpt:
      "A simple, stress-free checklist to make the most of your 20–30 minute mini session.",
    photo: {
      src: "/family4.webp",
      alt: "Mother lifting her baby while her daughter hugs her during a short family mini session",
      position: "50% 45%",
    },
    content: `
      <h2>One Week Before</h2>
      <ul>
        <li>Confirm location + parking</li>
        <li>Plan outfits + backups</li>
      </ul>
      <h2>Day Of</h2>
      <ul>
        <li>Snacks + water, wipes, hairbrush</li>
        <li>Arrive 5–10 minutes early</li>
      </ul>
      <h2>Mindset</h2>
      <p>Focus on connection, not perfect posing. I'll guide you the whole time.</p>
    `,
  },
  {
    slug: "portrait-posing-tips-connecticut",
    title: "Portrait Posing Tips (Feel Natural on Camera)",
    headline: "Portrait posing tips",
    category: "Portraits",
    excerpt:
      "Movement, hands, angles and expressions: simple techniques that work on location.",
    photo: {
      src: "/family14.webp",
      alt: "Smiling boy getting kissed on both cheeks by his parents during a natural portrait session",
      position: "50% 40%",
    },
    content: `
      <h2>Start with Movement</h2>
      <p>Walk, sway, adjust a sleeve. Micro-movements relax posture.</p>
      <h2>Hands</h2>
      <p>Hold a prop (hat, jacket) or touch hair/jewelry to avoid stiffness.</p>
      <h2>Angles</h2>
      <p>Turn 30° from camera, shift weight to back foot, lengthen neck.</p>
      <h2>Expressions</h2>
      <p>Breathe out slowly; think of a happy memory for natural eyes.</p>
    `,
  },
  {
    slug: "ct-fall-photos-guide",
    title: "CT Fall Photos Guide (Timing, Colors, Locations)",
    headline: "Connecticut fall photos guide",
    category: "Seasonal",
    excerpt: "When to schedule, what colors flatter foliage and where to go in Connecticut.",
    photo: {
      src: "/family5.webp",
      alt: "Father lifting his baby son under green trees during an outdoor family session",
      position: "50% 30%",
    },
    content: `
      <h2>When to Book</h2>
      <p>Peak foliage varies year to year; plan late Sept–early Nov and stay flexible.</p>
      <h2>Colors</h2>
      <p>Neutrals (cream, tan) + warm accents (rust, olive) work best.</p>
      <h2>Locations</h2>
      <p>Reservoir trails, orchards and riverfront parks in Glastonbury, Southington, Litchfield, Hartford and across central Connecticut.</p>
    `,
  },
  {
    slug: "golden-hour-vs-midday-photos-ct",
    title: "Golden Hour vs Midday: Best Time for Photos in Connecticut",
    headline: "Golden hour vs. midday light",
    category: "Tips",
    excerpt:
      "When light flatters most, when shade saves the day and how to choose for kids versus couples.",
    photo: {
      src: "/family3.webp",
      alt: "Mother carrying her toddler across an open Connecticut field in soft evening light",
      position: "55% 40%",
    },
    content: `
      <h2>Golden Hour (Sunrise/Sunset)</h2>
      <p>Soft, warm light with long shadows: flattering skin tones and dreamy backlight.</p>
      <h2>Midday</h2>
      <p>Harsher light; works in open shade, wooded areas, or with architectural shade downtown.</p>
      <h2>Overcast Days</h2>
      <p>Nature's softbox, great for even skin tones and rich color. Ideal for kids who need earlier sessions.</p>
      <h2>Recommendation</h2>
      <p>Families with small children: late afternoon or overcast. Couples/portraits: golden hour.</p>
    `,
  },
  {
    slug: "at-home-lifestyle-session-guide",
    title: "At-Home Lifestyle Session Guide (Relaxed, Real, You)",
    headline: "At-home lifestyle session guide",
    category: "Lifestyle",
    excerpt:
      "Prep your space, dress for comfort and flow through simple activities at home.",
    photo: {
      src: "/family7.webp",
      alt: "Young girl in a yellow dress holding her baby sibling during a relaxed lifestyle session",
      position: "35% 40%",
    },
    content: `
      <h2>Prep Your Space</h2>
      <p>Declutter surfaces, open blinds, turn off overhead lights. Natural light is best.</p>
      <h2>Wardrobe</h2>
      <p>Soft neutrals, barefoot, cozy textures: dress for comfort and connection.</p>
      <h2>Flow</h2>
      <p>We'll move through favorite rooms and simple activities: reading, making cocoa, playing.</p>
    `,
  },
]

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug)

export const relatedPosts = (slug: string, count = 2) => {
  const current = getPost(slug)
  const others = POSTS.filter((p) => p.slug !== slug)
  const sameCategory = others.filter((p) => p.category === current?.category)
  return [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, count)
}
