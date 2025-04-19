"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define service categories
const services = [
  { name: "Events", href: "/services/events" },
  { name: "Family Portraits", href: "/services/family" },
  { name: "Maternity", href: "/services/maternity" },
  { name: "Portraits", href: "/services/portraits" },
  { name: "Milestone Sessions", href: "/services/milestones" },
  // Add more services as needed
]

// Updated navigation array
const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  {
    name: "SERVICES",
    href: "/services", // Main link optional, or points to overview page
    submenu: services,
  },
  { name: "PORTFOLIO", href: "/portfolio" }, // Added Portfolio back if needed
  { name: "PRICING", href: "/pricing" }, // Added Pricing link
  { name: "CONTACT", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveMobileSubmenu(null) // Reset submenu on close
  }

  const toggleMobileSubmenu = (name: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex h-[70px] items-center justify-between">
          
          <div className="flex flex-none items-center space-x-4">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl font-light tracking-wide text-gray-800">
                Drena Noelle
              </span>
            </Link>
            <span className="hidden md:block border-l border-gray-300 pl-4 text-sm text-gray-500 font-serif">
              Hartford, Connecticut
            </span>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-baseline space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <div className="flex items-center">
                     <Link
                       href={item.href}
                       className={`flex items-center px-1 py-2 text-xs font-medium tracking-widest transition-colors hover:text-primary ${
                         pathname === item.href || (item.submenu && pathname.startsWith(item.href))
                           ? "text-primary"
                           : "text-gray-700"
                       }`}
                     >
                       {item.name}
                       {item.submenu && <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />}
                     </Link>
                  </div>

                  {item.submenu && (
                    <div className="absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 transform rounded-md border border-gray-100 bg-white p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block rounded px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden flex-none items-center space-x-3 md:flex">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="ml-4 inline-block text-xs font-medium tracking-[0.2em] text-gray-700 group"
            >
              <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                BOOK NOW
              </span>
              <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute left-0 top-full w-full bg-white shadow-lg border-b border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navigation.map((item) => (
                 <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                    <div 
                      className="flex items-center justify-between py-3"
                      onClick={() => item.submenu && toggleMobileSubmenu(item.name)}
                    >
                       <Link
                          href={item.href}
                          className={`flex-grow text-base font-medium text-center ${
                            pathname === item.href || (item.submenu && pathname.startsWith(item.href))
                              ? "text-primary"
                              : "text-gray-700"
                          }`}
                          onClick={() => !item.submenu && closeMobileMenu()}
                       >
                          {item.name}
                       </Link>
                       {item.submenu && (
                         <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                              activeMobileSubmenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                    </div>
                    {item.submenu && activeMobileSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pb-2 pl-4"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                            onClick={closeMobileMenu}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                 </div>
              ))}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4">
                 <Link
                    href="/contact"
                    className="block w-full text-center text-sm font-medium tracking-[0.2em] text-gray-700 group"
                    onClick={closeMobileMenu}
                  >
                   <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                     BOOK NOW
                   </span>
                   <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
