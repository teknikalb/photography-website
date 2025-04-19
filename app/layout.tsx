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
  metadataBase: new URL("https://drenanoellephotography.com"),
  title: {
    default: "Drena Noelle Photography | Connecticut Wedding & Portrait Photographer",
    template: `%s | Drena Noelle Photography`,
  },
  description:
    "Authentic and heartfelt wedding and portrait photography based in Hartford, Connecticut, serving New England and beyond.",
  keywords: [
    "connecticut photographer",
    "wedding photographer",
    "portrait photographer",
    "family photographer",
    "newborn photographer",
    "Drena Noelle Photography",
  ],
  authors: [{ name: "Drena Noelle Photography" }],
  creator: "Drena Noelle Photography",
  publisher: "Drena Noelle Photography",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drenanoellephotography.com",
    title: "Drena Noelle Photography | Connecticut Wedding & Portrait Photographer",
    description:
      "Authentic and heartfelt wedding and portrait photography based in Hartford, Connecticut.",
    siteName: "Drena Noelle Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drena Noelle Photography | Connecticut Wedding & Portrait Photographer",
    description:
      "Authentic and heartfelt wedding and portrait photography based in Hartford, Connecticut.",
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
