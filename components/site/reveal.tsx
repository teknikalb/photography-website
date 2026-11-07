import type { CSSProperties, ElementType, ReactNode } from "react"

type RevealProps = {
  as?: ElementType
  variant?: "up" | "fade" | "left" | "right"
  /** Delay in milliseconds, for staggering siblings. */
  delay?: number
  className?: string
  children: ReactNode
}

/** Wraps content so it fades/slides in when scrolled into view (see RevealObserver). */
export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className, children }: RevealProps) {
  return (
    <Tag data-reveal={variant} className={className} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  )
}
