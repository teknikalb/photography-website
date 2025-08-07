"use client"

import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1602255680702-c47261041a97?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Family session at park"
  },
  {
    url: "https://images.unsplash.com/photo-1721635238761-569bcfb3b88e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Couple walking motion blur"
  },
  {
    url: "https://images.unsplash.com/photo-1605812830488-f4004ac546e7?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Newborn session at home"
  },
  {
    url: "https://images.unsplash.com/photo-1616003471864-9abfeee24576?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Portrait session outdoors"
  },
  {
    url: "https://images.unsplash.com/photo-1526277015674-026cb84653ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mother and child in field"
  },
  {
    url: "https://images.unsplash.com/photo-1551498624-3712f8e41930?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mother's Day mini session"
  },
  {
    url: "https://images.unsplash.com/photo-1543420502-52efc1a35184?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Couple engagement session"
  },
  {
    url: "https://images.unsplash.com/photo-1734943757796-366ab4eb02b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Milestone birthday celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1694199372711-c67a3b3ccc4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Portrait of photographer"
  }
]

export default function DualPortfolioSliders() {
  const [imageRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  return (
    <section className="py-8 w-screen overflow-hidden">
      <div className="overflow-hidden" ref={imageRef}>
        <div className="flex">
                      {carouselImages.map((image, index) => (
              <div 
                key={index}
                className="group flex-[0_0_15%] min-w-0 relative aspect-[2/3] mx-[0.25%]"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 15vw, (min-width: 768px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
