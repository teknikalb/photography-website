"use client"

import { useState } from "react"
import type { Faq } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Accordion: display-type questions with a chevron, thin dividers, smooth open/close. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-ink/25 border-y border-ink/25">
      {faqs.map((faq, index) => {
        const open = openIndex === index
        return (
          <div key={faq.question}>
            <h3 className="!text-[inherit]">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left lg:py-7"
              >
                <span className="font-serif text-[1.65rem] uppercase leading-[1.05] transition-opacity group-hover:opacity-70 lg:text-[2.1rem]">
                  {faq.question}
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={cn("shrink-0 transition-transform duration-500", open && "rotate-180")}
                >
                  <path d="m5 9 7 7 7-7" />
                </svg>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="copy max-w-[720px] pb-7 normal-case tracking-normal lg:text-[21px]">{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
