import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/20",
        className,
      )}
    >
      {children}
    </div>
  )
}
