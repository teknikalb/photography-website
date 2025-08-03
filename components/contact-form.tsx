"use client"

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useFormspark } from "@formspark/use-formspark";

// Define the structure for the form data state
interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  preferredDate: string;
  message: string;
}

export default function ContactForm() {
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || "",
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    preferredDate: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      await submit(formData as any);
      setFormStatus("success");
      setFormData({ name: '', email: '', phone: '', interest: '', preferredDate: '', message: '' });
    } catch (err) {
      setFormStatus("error");
    }
  };

  if (formStatus === "success") {
    return (
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-light mb-4 text-gray-900">Thank You!</h3>
        <p className="text-gray-700 mb-6">
          Your message has been sent successfully. I'll get back to you within 24 hours!
        </p>
        <button 
          onClick={() => setFormStatus("")}
          className="text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Phone and Session Type Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
            Session Type *
          </label>
          <select 
            name="interest"
            id="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="" disabled>Select session type...</option>
            <option value="Full Photography Session ($350)">Full Photography Session ($350)</option>
            <option value="Fall Mini Session ($200)">Fall Mini Session ($200)</option>
            <option value="Christmas Mini Session ($200)">Christmas Mini Session ($200)</option>
            <option value="Valentine's Mini Session ($200)">Valentine's Mini Session ($200)</option>
            <option value="Family Session">Family Session</option>
            <option value="Maternity Session">Maternity Session</option>
            <option value="Couples/Engagement">Couples/Engagement</option>
            <option value="Portraits/Headshots">Portraits/Headshots</option>
            <option value="Graduation">Graduation</option>
            <option value="Events">Events</option>
            <option value="Other">Other (please specify in message)</option>
          </select>
        </div>
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Date
        </label>
        <input
          type="date"
          name="preferredDate"
          id="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        />
        <p className="text-sm text-gray-500 mt-1">Optional - helps me check availability</p>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Tell me about your vision *
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
          placeholder="Tell me about what you're looking for, any specific ideas you have, location preferences, or questions you might have. I'd love to hear your story!"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {formStatus === "submitting" ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </div>

      {/* Error State */}
      {formStatus === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700">Something went wrong. Please try again or email me directly.</p>
        </div>
      )}

      {/* Form Footer */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          I typically respond within 24 hours. For urgent inquiries, call{' '}
          <a href="tel:+1234567890" className="text-primary hover:underline font-medium">
            (123) 456-7890
          </a>
        </p>
      </div>
    </form>
  );
}