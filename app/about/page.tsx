"use client"

import Image from "next/image"
import Link from "next/link"
import { Camera, Heart, Clock, Award, Users, MessageSquare } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ContactForm from "@/components/contact-form"

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function AboutPage() {
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 })
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515944472329-d74a614b20c7?q=80&w=1920&auto=format&fit=crop"
          alt="Film camera details"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">About Me</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            The story behind Drena Noelle Photography
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/about-greta.jpg"
                alt="Photographer portrait - Greta"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-semibold">Hello, I'm Greta</h2>
              <p className="text-muted-foreground">
                Hey, I'm Greta —a coffee-loving, moment-chasing photographer who's all about capturing the real stuff: belly laughs, quiet glances, messy hugs, and everything in between. I believe the best photos happen in those spontaneous, unscripted moments—the kind that make you feel something every time you look at them.
              </p>
              <p className="text-muted-foreground">
                As a big family person myself, I know how fast time flies and how important it is to freeze those little chapters of life. Whether we're running barefoot through a field or snuggling up at home, I'm here to make the experience easy, relaxed, and totally you.
              </p>
              <p className="text-muted-foreground">
                Let's grab some coffee (or bring it to the shoot—I won't judge), and create something beautiful together.
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-block text-sm font-medium tracking-[0.2em] text-gray-700 group"
                >
                  <span className="block border-t border-gray-400 pt-2 pb-1 group-hover:border-gray-900 transition-colors">
                    GET IN TOUCH
                  </span>
                  <span className="block border-b border-gray-400 group-hover:border-gray-900 transition-colors"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold">My Philosophy</h2>
            <p className="mt-6 text-muted-foreground">
              I believe that photography is about more than just taking pretty pictures. It's about preserving moments,
              emotions, and connections that tell your unique story. My approach combines documentary-style capture with
              gentle direction to create images that are both authentic and beautiful.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PhilosophyCard
              icon={<Heart className="h-8 w-8" />}
              title="Connection Over Perfection"
              description="I prioritize genuine emotion and authentic moments over perfectly posed images. The real magic happens in the unscripted moments."
            />
            <PhilosophyCard
              icon={<Camera className="h-8 w-8" />}
              title="Artistry & Technique"
              description="I blend technical expertise with creative vision to create images that are both emotionally resonant and visually stunning."
            />
            <PhilosophyCard
              icon={<Clock className="h-8 w-8" />}
              title="Present & Patient"
              description="I take time to observe and anticipate moments, allowing your session to unfold naturally without rushing the process."
            />
            <PhilosophyCard
              icon={<Award className="h-8 w-8" />}
              title="Quality Over Quantity"
              description="I focus on creating a curated collection of exceptional images rather than overwhelming you with hundreds of mediocre ones."
            />
            <PhilosophyCard
              icon={<Users className="h-8 w-8" />}
              title="Inclusive & Welcoming"
              description="I celebrate diversity and am committed to creating a comfortable experience for everyone, regardless of background."
            />
            <PhilosophyCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Communication & Trust"
              description="I believe in clear communication and building trust with my clients to ensure your vision comes to life."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold">Experience & Education</h2>
            <p className="mt-4 text-muted-foreground">My journey and credentials in photography</p>
          </div>

          <div className="mt-8 space-y-8">
            <TimelineItem
              year="2013"
              title="Started Photography Journey"
              description="Began exploring photography as a creative outlet while studying Fine Arts at the University of Connecticut."
            />
            <TimelineItem
              year="2015"
              title="Professional Training"
              description="Completed intensive workshop training with renowned wedding photographers and earned certification in portrait photography."
            />
            <TimelineItem
              year="2016"
              title="Launched Drena Noelle Photography"
              description="Officially established my photography business after assisting and second shooting for established photographers."
            />
            <TimelineItem
              year="2018"
              title="Expanded to Full-Time"
              description="Transitioned from part-time to full-time photographer, focusing on weddings and portrait work throughout Connecticut."
            />
            <TimelineItem
              year="2020"
              title="Studio Establishment"
              description="Opened a boutique photography studio space in downtown Hartford for client consultations and indoor sessions."
            />
            <TimelineItem
              year="2022"
              title="Industry Recognition"
              description="Received multiple awards for wedding and portrait photography from industry associations and publications."
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="relative py-16 md:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function PhilosophyCard({ icon, title, description }: PhilosophyCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 font-serif text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="mr-8 flex flex-col items-center">
        <div className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">{year}</div>
        <div className="mt-2 h-full w-px bg-gray-200"></div>
      </div>
      <div className="pb-8">
        <h3 className="font-serif text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
