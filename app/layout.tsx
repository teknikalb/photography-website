import type React from "react"
import { Cormorant, Outfit } from "next/font/google"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gretanoellephoto.com"),
  robots: { index: true, follow: true },
  title: {
    default: "Family & Maternity Photographer Newington CT | West Hartford, Glastonbury, Greenwich",
    template: `%s | Greta Noelle Photography`,
  },
  description:
    "Book a family or maternity photographer in Newington, CT. Best-rated for family photos & maternity sessions in West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, Litchfield, Greenwich & Darien. Limited spots.",
  keywords: [
    "family photographer Newington CT",
    "maternity photographer West Hartford",
    "best family photographer Glastonbury",
    "family photographer Greenwich CT",
    "photographer Darien CT",
    "maternity photographer near me",
    "family photos West Hartford",
    "family photographer Wethersfield CT",
    "maternity photographer Newington",
    "photographer Rocky Hill CT",
    "family photographer Southington",
    "Litchfield CT photographer",
    "Mother's Day mini sessions Connecticut",
    "professional portraits Connecticut",
  ],
  authors: [{ name: "Greta Noelle Photography" }],
  creator: "Greta Noelle Photography",
  publisher: "Greta Noelle Photography",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gretanoellephoto.com",
    title: "Family & Maternity Photographer Newington CT | West Hartford, Glastonbury, Greenwich",
    description:
      "Book a family or maternity photographer in Newington, CT. Family photos & maternity sessions in West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, Litchfield, Greenwich & Darien.",
    siteName: "Greta Noelle Photography",
    images: [
      { url: "/hero-optimized.jpg", width: 1200, height: 630, alt: "Greta Noelle Photography" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family & Maternity Photographer Newington CT | West Hartford, Glastonbury, Greenwich",
    description:
      "Book a family or maternity photographer in Newington, CT. Family photos & maternity sessions in West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, Litchfield, Greenwich & Darien.",
    creator: "@drenanoelle",
    images: ["/hero-optimized.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-681WPRJZLL"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'G-681WPRJZLL');
            `}
          </Script>
          <Script id="ld-photographer" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://gretanoellephoto.com/#photographer",
              name: "Greta Noelle Photography",
              description: "Family and maternity photographer in Newington, CT. Natural, heartfelt family photos and maternity sessions. Serving West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, Litchfield, Greenwich, Darien and all of Connecticut.",
              image: "https://gretanoellephoto.com/hero-optimized.jpg",
              url: "https://gretanoellephoto.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Newington",
                addressRegion: "CT",
                addressCountry: "US"
              },
              areaServed: ["Newington", "Wethersfield", "Glastonbury", "West Hartford", "Rocky Hill", "Southington", "Litchfield", "Greenwich", "Darien", "Connecticut", "New England"],
              priceRange: "$$",
              sameAs: []
            })}
          </Script>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* Proactively unregister any existing service workers to avoid 404s from stale caches */}
          <Script id="sw-unregister" strategy="afterInteractive">
            {`
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(regs => {
                  for (const reg of regs) {
                    reg.unregister().catch(() => {});
                  }
                }).catch(() => {});
              }
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}
