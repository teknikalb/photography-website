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
  metadataBase: new URL("https://drenanoellephoto.com"),
  robots: { index: true, follow: true },
  title: {
    default: "Connecticut Family, Maternity & Portrait Photographer | Drena Noelle Photography",
    template: `%s | Drena Noelle Photography`,
  },
  description:
    "Connecticut photographer specializing in family, maternity, milestone, and portrait sessions. Serving Hartford, New Haven, and all of New England.",
  keywords: [
    "connecticut photographer",
    "family photographer",
    "maternity photographer",
    "Hartford CT photographer",
    "Mother's Day mini sessions Connecticut",
    "milestone photography Connecticut",
    "New England photographer",
    "professional portraits Connecticut"
  ],
  authors: [{ name: "Drena Noelle Photography" }],
  creator: "Drena Noelle Photography",
  publisher: "Drena Noelle Photography",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drenanoellephoto.com",
    title: "Connecticut Family, Maternity & Portrait Photographer | Drena Noelle Photography",
    description:
      "Authentic and heartfelt family, maternity, milestone, and portrait photography based in Hartford, Connecticut. Serving New Haven and all of New England.",
    siteName: "Drena Noelle Photography",
    images: [
      { url: "/hero-optimized.jpg", width: 1200, height: 630, alt: "Drena Noelle Photography" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connecticut Family, Maternity & Portrait Photographer | Drena Noelle Photography",
    description:
      "Authentic and heartfelt family, maternity, milestone, and portrait photography based in Hartford, Connecticut. Serving New Haven and all of New England.",
    creator: "@drenanoelle",
    images: ["/hero-optimized.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
              "@type": "LocalBusiness",
              name: "Drena Noelle Photography",
              image: "https://drenanoellephoto.com/hero-optimized.jpg",
              url: "https://drenanoellephoto.com",
              address: { "@type": "PostalAddress", addressRegion: "CT", addressCountry: "US" },
              areaServed: ["Hartford", "New Haven", "Connecticut", "New England"],
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
