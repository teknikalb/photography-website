import type React from "react"
import { Cormorant, Outfit } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://drenanoellephoto.com"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Connecticut Family, Maternity & Portrait Photographer | Drena Noelle Photography",
    description:
      "Authentic and heartfelt family, maternity, milestone, and portrait photography based in Hartford, Connecticut. Serving New Haven and all of New England.",
    creator: "@drenanoelle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
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
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
