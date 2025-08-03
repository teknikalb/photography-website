"use client"

import { Star } from "lucide-react"

interface Testimonial {
  name: string;
  event: string;
  quote: string;
}

interface SimpleTestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  description?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    event: "Family Session",
    quote: "Greta made our family session so comfortable and fun. She captured moments we'll treasure forever, and the kids actually enjoyed the process!"
  },
  {
    name: "Mike & Jessica",
    event: "Engagement Photos",
    quote: "Professional, creative, and such a joy to work with. Our engagement photos exceeded all expectations. Highly recommend!"
  },
  {
    name: "The Johnson Family",
    event: "Holiday Mini Session",
    quote: "The photos are stunning! Greta captured the light and our family's connection perfectly. We'll definitely be booking again."
  },
  {
    name: "Amanda R.",
    event: "Maternity Session",
    quote: "Greta has such a gift for making you feel comfortable and beautiful. The maternity photos are exactly what I dreamed of."
  }
];

export default function SimpleTestimonials({ 
  testimonials = defaultTestimonials, 
  title = "What Clients Say",
  description 
}: SimpleTestimonialsProps) {
  return (
    <section className="py-16 bg-[#F5F0EA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">{title}</h2>
          {description && (
            <p className="text-lg text-gray-700 mb-12">{description}</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-gray-900">— {testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { defaultTestimonials };
export type { Testimonial };