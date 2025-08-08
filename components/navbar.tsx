"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        h-[96px]
        transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-black/50"}
      `}
    >
      <div className="mx-auto h-full max-w-[2000px] px-6 lg:px-12">
        <div className="flex h-full items-center justify-between">
          {/* Logo - Left - REMOVED */}
          {/* <div className="relative h-16 w-40 flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Photography Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          {/* Ensure this button is still positioned correctly, might need adjustment if logo removal affects layout */} 
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu */}
          <div 
            className={`
              fixed inset-0 z-40 
              flex flex-col items-center justify-center 
              bg-black/95 
              transition-transform duration-300 
              lg:hidden
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {/* Mobile links remain unchanged */} 
            <div className="flex flex-col items-center gap-8 text-xl font-light text-white">
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-white/80">Portfolio</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-white/80">Services</Link>
              <Link href="/services/mini-sessions" onClick={() => setIsMenuOpen(false)} className="hover:text-white/80">Mini Sessions</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-white/80">About</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-white/80">Blog</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white/80">Contact</Link>
            </div>
          </div>

          {/* Desktop Menu */}
          {/* The flex-1 on the container might now push the nav links further left. Consider adjusting if needed. */} 
          <div className="hidden h-full flex-1 items-center lg:flex">
            
            {/* Navigation Links - Centered */}
            <div className="flex flex-1 items-center justify-center space-x-16">
              <Link href="/portfolio" className={`text-lg font-light ${isScrolled ? 'text-black' : 'text-white'} hover:opacity-80`}>Portfolio</Link>
              <Link href="/services" className={`text-lg font-light ${isScrolled ? 'text-black' : 'text-white'} hover:opacity-80`}>Services</Link>
              <Link href="/services/mini-sessions" className={`text-lg font-light ${isScrolled ? 'text-black' : 'text-white'} hover:opacity-80`}>Mini Sessions</Link>
              <Link href="/about" className={`text-lg font-light ${isScrolled ? 'text-black' : 'text-white'} hover:opacity-80`}>About</Link>
              <Link href="/blog" className={`text-lg font-light ${isScrolled ? 'text-black' : 'text-white'} hover:opacity-80`}>Blog</Link>
              <Link href="/contact" className={`text-lg font-light ${isScrolled ? 'text-black' : 'text-white'} hover:opacity-80`}>Contact</Link>
            </div>

            {/* Social Icons & Book Now - Right Side */}
            <div className="flex items-center gap-8">
              {/* Social Icons */}
              <div className="flex items-center gap-6">
                <a href="https://instagram.com/drenanoellephoto/" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-black' : 'text-white'} opacity-80 transition-opacity hover:opacity-100`}>
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-black' : 'text-white'} opacity-80 transition-opacity hover:opacity-100`}>
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-black' : 'text-white'} opacity-80 transition-opacity hover:opacity-100`}>
                  <Twitter size={24} />
                </a>
              </div>
              {/* Book Now Button */}
              <Link 
                href="/contact" 
                className={`
                  rounded-full border-2 
                  px-8 py-3 text-base font-medium 
                  backdrop-blur-sm transition-all 
                  ${isScrolled 
                    ? 'border-black bg-black text-white hover:bg-black/80'
                    : 'border-white bg-white/10 text-white hover:bg-white hover:text-black'
                  }
                `}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 