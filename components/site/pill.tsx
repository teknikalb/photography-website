import Link from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type PillProps = ComponentProps<typeof Link> & { tone?: "dark" | "light" | "clay"; big?: boolean }

/** Rounded call-to-action button used across the site. */
export default function Pill({ tone = "dark", big = false, className, ...props }: PillProps) {
  return (
    <Link
      {...props}
      className={cn(
        "pill",
        tone === "light" && "pill-light",
        tone === "clay" && "pill-clay",
        big && "lg:h-[88px] lg:px-[64px]",
        className,
      )}
    />
  )
}
