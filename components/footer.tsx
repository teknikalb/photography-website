import Link from "next/link"
import { Instagram, Facebook, PinIcon as Pinterest, Mail, Phone, MapPin, Heart } from "lucide-react"

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-light text-gray-900">Drena Noelle Photography</h3>
            <p className="mt-4 text-gray-600">Capturing life's beautiful moments across Connecticut and beyond.</p>
            <div className="mt-6 flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="https://pinterest.com" icon={<Pinterest className="h-5 w-5" />} label="Pinterest" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/services">Services & Pricing</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Services</h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="/services/events">Events</FooterLink>
              <FooterLink href="/services/family">Family Portraits</FooterLink>
              <FooterLink href="/services/maternity">Maternity</FooterLink>
              <FooterLink href="/services/portraits">Portraits</FooterLink>
              <FooterLink href="/services/milestones">Milestone Sessions</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Contact</h3>
            <ul className="mt-4 space-y-4 text-gray-600">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>Serving all of Connecticut and surrounding areas</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="transition-colors hover:text-primary">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a href="mailto:hello@drenanoellephotography.com" className="transition-colors hover:text-primary">
                  hello@drenanoellephotography.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Drena Noelle Photography. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary" fill="currentColor" />
              <span>in Connecticut</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy-policy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="text-gray-600 transition-colors hover:text-primary">
        {children}
      </Link>
    </li>
  )
}
