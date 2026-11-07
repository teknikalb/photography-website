"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV, SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false) // past the top: compact bar + shadow
  const [hidden, setHidden] = useState(false) // scrolling down: slide away

  // Close the menu after navigating.
  useEffect(() => setOpen(false), [pathname])

  // Hide on scroll down, reveal on scroll up, compact once away from the top.
  useEffect(() => {
    let last = window.scrollY
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - last
      setScrolled(y > 40)
      if (y < 120) setHidden(false)
      else if (delta > 8) setHidden(true)
      else if (delta < -8) setHidden(false)
      if (Math.abs(delta) > 8 || y < 120) last = y
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] border-b border-ink/70 bg-sand transition-[transform,height,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "h-[76px] lg:h-[104px]" : "h-[113px] lg:h-[164px]",
          scrolled && "shadow-[0_10px_30px_-18px_rgba(47,46,34,0.55)]",
          hidden && !open && "-translate-y-full",
        )}
      >
        <div className="wrap relative flex h-full items-center justify-between">
          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-[1.15rem]">
              {NAV.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="group relative block py-1 text-[15px] font-semibold uppercase tracking-[0.08em]"
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-px origin-left bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logo: left on phones, centered on desktop */}
          <Link
            href="/"
            aria-label={`${SITE.name} home`}
            className="block shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={720}
              height={900}
              priority
              sizes="100px"
              className={cn(
                "w-auto transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                scrolled ? "h-[56px] lg:h-[84px]" : "h-[76px] lg:h-[126px]",
              )}
            />
          </Link>

          <Link href="/contact" className="pill hidden !h-[59px] !px-[44px] !text-[1.15rem] uppercase lg:inline-flex">
            Contact me
          </Link>

          {/* Mobile menu button (morphs into an X) */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-[11px] w-8">
              <span
                className={cn(
                  "absolute left-0 block h-px w-8 bg-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "top-[5px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-8 bg-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "top-[5px] -rotate-45" : "top-[10px]",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu: fades in beneath the header bar, links rise in one after another */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-sand pt-[113px] transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-[35px] pt-[181px]">
          <ul className="space-y-[23px]">
            {NAV.map((item, index) => {
              const active = isActive(pathname, item.href)
              return (
                <li
                  key={item.href}
                  className={cn(
                    "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${120 + index * 60}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? 0 : -1}
                    className={cn("font-serif text-[2.1rem] uppercase leading-none", active && "italic")}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div
          className={cn(
            "px-[23px] pb-10 pt-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="pill !h-[63px] !px-[51px] uppercase"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
