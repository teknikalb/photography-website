"use client"

import { useEffect, useRef, type ReactNode } from "react"

/**
 * Moves its content slower than the page while it is on screen (subtle parallax).
 * Place inside an `overflow-hidden` parent and make this element taller than it.
 */
export default function Parallax({
  children,
  speed = 0.18,
  className,
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const parent = el.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      // Offset from the middle of the viewport, clamped to the spare image height so no gap ever shows.
      const spare = Math.max(0, (el.offsetHeight - parent.offsetHeight) / 2)
      const centre = rect.top + rect.height / 2
      const offset = (window.innerHeight / 2 - centre) * speed
      el.style.transform = `translate3d(0, ${Math.max(-spare, Math.min(spare, offset)).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
