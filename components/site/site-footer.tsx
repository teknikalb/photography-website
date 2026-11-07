import Image from "next/image"
import Link from "next/link"
import { AREAS, NAV, PHOTOS, SITE } from "@/lib/site"

const LEGAL = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-of-service", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
]

/**
 * Closing photo band (267px desktop, 110px phone, like the reference) followed by a slim
 * strip with the links, service areas and legal pages.
 */
export default function SiteFooter() {
  return (
    <footer>
      <div className="relative h-[110px] w-full overflow-hidden bg-cream lg:h-[267px]">
        <Image
          src={PHOTOS.footer.src}
          alt={PHOTOS.footer.alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: PHOTOS.footer.position }}
        />
      </div>

      <div className="bg-page">
        <div className="wrap flex flex-col items-center gap-4 py-10 text-center">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-[15px] font-semibold uppercase tracking-[0.1em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="max-w-[760px] text-[16px] leading-snug">
            Fine art family, maternity, couples and lifestyle photography serving {AREAS.slice(0, -1).join(", ")} and{" "}
            {AREAS.at(-1)}, plus all of Connecticut and New England.
          </p>

          <p className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[15px]">
            <span>
              &copy; {new Date().getFullYear()} {SITE.name}
            </span>
            <a href={`mailto:${SITE.email}`} className="link-underline">
              {SITE.email}
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
              Instagram
            </a>
            {LEGAL.map((item) => (
              <Link key={item.href} href={item.href} className="link-underline">
                {item.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
