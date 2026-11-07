import type React from "react"
import { Barlow_Condensed, Instrument_Serif } from "next/font/google"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"
import SiteHeader from "@/components/site/site-header"
import SiteFooter from "@/components/site/site-footer"
import RevealObserver from "@/components/site/reveal-observer"
import { AREAS, SERVICES, SITE } from "@/lib/site"

// Condensed sans for body, navigation and labels; narrow high-contrast serif for headlines.
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const DEFAULT_TITLE = "Connecticut Family & Maternity Photographer | Greta Noelle"
const DEFAULT_DESCRIPTION =
  "Natural light family, maternity, couples and portrait photographer serving Newington, Hartford, West Hartford, Glastonbury and all of Connecticut."

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: "Greta Noelle", url: SITE.url }],
  creator: "Greta Noelle",
  publisher: SITE.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mother and daughter walking through a Connecticut field, photographed by Greta Noelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C6BCA9",
}
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Photographer"],
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/og-image.jpg`,
      logo: `${SITE.url}/logo.png`,
      description:
        "Natural light family, maternity, couples, portrait and pet photography across Connecticut and New England.",
      email: SITE.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.locality,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: 41.6987, longitude: -72.7237 },
      areaServed: [
        ...AREAS.map((city) => ({ "@type": "City", name: `${city}, CT` })),
        { "@type": "State", name: "Connecticut" },
      ],
      knowsAbout: [
        "Family photography",
        "Maternity photography",
        "Couples photography",
        "Portrait photography",
        "Pet photography",
        "Mini sessions",
      ],
      sameAs: [SITE.instagram],
      founder: { "@type": "Person", name: "Greta Noelle" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Photography sessions",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.title, description: service.blurb },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: service.from,
            priceCurrency: "USD",
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE.url}/#business` },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${instrument.variable}`}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-681WPRJZLL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-681WPRJZLL');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
        {/* Remove any stale service workers left by older versions of the site */}
        <Script id="sw-unregister" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(regs){
                regs.forEach(function(reg){ reg.unregister().catch(function(){}); });
              }).catch(function(){});
            }
          `}
        </Script>
      </body>
    </html>
  )
}
