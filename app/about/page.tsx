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
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515944472329-d74a614b20c7?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Film camera details"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">About Me</h1>
          <p className="mt-6 max-w-md text-lg font-light md:max-w-lg md:text-xl">
            The story behind Drena Noelle Photography
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1599547760409-98d3d4037468?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photographer portrait - Greta"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-light">Hello, I'm Greta</h2>
              <p className="text-muted-foreground">
                I'm a Connecticut-based photographer with a passion for capturing authentic moments and creating
                timeless images that tell your unique story.
              </p>
              <p className="text-muted-foreground">
                My journey into photography began over 10 years ago when I picked up my first camera. What started as a
                hobby quickly blossomed into a deep passion and eventually a fulfilling career. I've had the privilege
                of documenting hundreds of weddings, families, and special moments throughout New England.
              </p>
              <p className="text-muted-foreground">
                When I'm not behind the camera, you can find me exploring hiking trails with my golden retriever, trying
                new recipes in the kitchen, or planning my next travel adventure. I'm a coffee enthusiast, a lover of
                golden hour light, and believe that the best images happen when you're comfortable enough to be
                yourself.
              </p>
              <p className="text-muted-foreground">
                My approach to photography is rooted in authenticity. I believe in creating a relaxed, enjoyable
                experience that allows your genuine emotions and connections to shine through. Whether I'm photographing
                your wedding day or a casual family session, my goal is to create images that reflect who you truly are.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light">My Philosophy</h2>
            <p className="mt-6 text-muted-foreground">
              I believe that photography is about more than just taking pretty pictures. It's about preserving moments,
              emotions, and connections that tell your unique story. My approach combines documentary-style capture with
              gentle direction to create images that are both authentic and beautiful.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light">Experience & Education</h2>
            <p className="mt-4 text-muted-foreground">My journey and credentials in photography</p>
          </div>

          <div className="mt-12 space-y-8">
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
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-badge">Contact</span>
            <h2 className="mt-4 font-serif text-3xl font-light tracking-wide md:text-4xl lg:text-5xl text-gray-800">
              Get In Touch
            </h2>
            <div className="divider"></div>
             <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
                Ready to capture your story? Send me a message!
             </p>
          </motion.div>
          
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function PhilosophyCard({ icon, title, description }: PhilosophyCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 font-serif text-xl font-medium">{title}</h3>
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
        <h3 className="font-serif text-xl font-medium">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
