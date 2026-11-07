"use client"

import { useState } from "react"
import { useFormspark } from "@formspark/use-formspark"
import { SITE } from "@/lib/site"

interface FormData {
  name: string
  email: string
  message: string
  honey?: string // honeypot field
}

const EMPTY: FormData = { name: "", email: "", message: "", honey: "" }

const FIELD =
  "mt-2 w-full border border-ink/40 bg-page px-4 py-3 text-[19px] font-medium text-ink placeholder:text-ink/45 transition-[border-color,box-shadow] duration-300 focus:border-ink focus:shadow-[0_0_0_3px_rgba(47,46,34,0.15)] focus:outline-none"

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || ""
  const [submit] = useFormspark({ formId })
  const [formData, setFormData] = useState<FormData>(EMPTY)
  const [status, setStatus] = useState<"" | "submitting" | "success" | "error">("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Honeypot spam check
    if (formData.honey && formData.honey.trim().length > 0) return
    setStatus("submitting")
    try {
      await submit(formData as any)
      setStatus("success")
      setFormData(EMPTY)
    } catch {
      setStatus("error")
    }
  }

  if (!formId) {
    return (
      <p className="border border-ink/40 p-5 text-[19px]">
        The contact form is temporarily unavailable. Please email me directly at{" "}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>
    )
  }

  if (status === "success") {
    return (
      <div role="status" className="py-4">
        <p className="font-serif text-[2.4rem] uppercase leading-none">
          Thank you <em>for reaching out!</em>
        </p>
        <p className="copy mt-4 max-w-[480px]">I&rsquo;ll get back to you soon. I can&rsquo;t wait to work with you.</p>
        <button type="button" onClick={() => setStatus("")} className="link-underline mt-6 text-[18px] font-semibold">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input
        type="text"
        name="honey"
        value={formData.honey}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="label">
          Name <span aria-hidden>*</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} className={FIELD} />
      </div>

      <div>
        <label htmlFor="email" className="label">
          Email address <span aria-hidden>*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={FIELD} />
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message <span aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className={`${FIELD} resize-none`}
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className="pill w-full disabled:opacity-50 sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-[18px] font-semibold text-destructive">
          Something went wrong. Please try again or email me directly at {SITE.email}.
        </p>
      )}
    </form>
  )
}
