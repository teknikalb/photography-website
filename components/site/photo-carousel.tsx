"use client"

import { useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import type { Photo } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Looping, draggable photo slider with prev/next controls underneath. */
export default function PhotoCarousel({
  photos,
  label,
  controls = "center",
}: {
  photos: Photo[]
  label: string
  /** Where the arrows sit under the slider. */
  controls?: "center" | "left"
}) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false, duration: 32 })
  const prev = useCallback(() => embla?.scrollPrev(), [embla])
  const next = useCallback(() => embla?.scrollNext(), [embla])

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") prev()
        if (event.key === "ArrowRight") next()
      }}
    >
      <div ref={viewportRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
        <div className="flex">
          {photos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="group relative aspect-[2/3] min-w-0 shrink-0 grow-0 basis-[calc(100%-7px)] overflow-hidden md:basis-[411px]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${photos.length}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 411px"
                draggable={false}
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                style={{ objectPosition: photo.position }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "mt-[15px] flex gap-[10px]",
          controls === "center" ? "justify-center" : "justify-start px-[23px] md:px-10 lg:pl-[max(2.5rem,calc((100vw-1200px)/2))]",
        )}
      >
        {[
          { label: "Previous photo", onClick: prev, d: "M20 12H5m6-6-6 6 6 6" },
          { label: "Next photo", onClick: next, d: "M4 12h15m-6-6 6 6-6 6" },
        ].map((button) => (
          <button
            key={button.label}
            type="button"
            onClick={button.onClick}
            aria-label={button.label}
            className="flex h-11 w-11 items-center justify-center bg-page transition-all duration-300 hover:bg-ink hover:text-page active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d={button.d} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}
