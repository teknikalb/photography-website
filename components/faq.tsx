"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQ({ faqs, title = "Frequently Asked Questions", description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F5F0EA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light mb-4 text-gray-900">{title}</h2>
            {description && (
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="ml-14 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Standard FAQ data that can be imported and used across pages
export const standardFAQs: FAQItem[] = [
  {
    question: "How do I book a session?",
    answer: "Contact me through the contact form, email, or phone. We'll discuss your vision, select a date, and I'll send you a contract and invoice for the deposit to secure your date.",
  },
  {
    question: "How far in advance should I book?",
    answer: "For portraits, 1-2 months is usually enough. For weddings, book 8-12 months in advance. More notice is always better during busy seasons!",
  },
  {
    question: "What's your payment policy?",
    answer: "A 50% retainer secures your date, with the balance due two weeks before your session. Payment plans are available upon request.",
  },
  {
    question: "When will I receive my photos?",
    answer: "Portrait sessions are delivered within 2-3 weeks. You'll get sneak peeks within 48 hours. Rush delivery available for an additional fee.",
  },
  {
    question: "Do you travel for sessions?",
    answer: "Yes! I serve all of Connecticut and travel throughout New England. For destinations beyond, travel fees may apply. Contact me for a custom quote.",
  },
];