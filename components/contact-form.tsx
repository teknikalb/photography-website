"use client"

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Sparkles, Heart, Camera } from 'lucide-react';
import { useFormspark } from "@formspark/use-formspark";

// Define the structure for the form data state
interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  preferredDate: string;
  message: string;
  honey?: string; // honeypot field
}

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || "";
  const [submit, submitting] = useFormspark({
    formId,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    preferredDate: "",
    message: "",
    honey: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      // Basic honeypot spam check
      if (formData.honey && formData.honey.trim().length > 0) {
        setFormStatus("");
        return;
      }
      await submit(formData as any);
      setFormStatus("success");
      setFormData({ name: '', email: '', phone: '', interest: '', preferredDate: '', message: '', honey: '' });
    } catch (err) {
      setFormStatus("error");
    }
  };

  if (!formId) {
    return (
      <div className="text-center p-6 rounded-xl border border-yellow-200 bg-yellow-50 text-yellow-800">
        Contact form is temporarily unavailable. Please email me directly at
        {" "}
        <a href="mailto:greta@gretanoellephoto.com" className="underline">greta@gretanoellephoto.com</a>.
      </div>
    );
  }

  if (formStatus === "success") {
    return (
      <div className="text-center p-8">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <div className="absolute -top-2 -right-2">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
        </div>
        <h3 className="font-serif text-3xl font-light mb-4 text-gray-900">Thank You!</h3>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Your message has been sent successfully. I'll get back to you within 24 hours with excitement to discuss your vision!
        </p>
        <button 
          onClick={() => setFormStatus("")}
          className="text-primary hover:underline font-medium text-lg transition-colors hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="honey"
        id="honey"
        value={formData.honey}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-6 w-6 text-primary mr-2" />
          <span className="text-sm font-medium text-primary">Let's Create Magic Together</span>
          <Heart className="h-6 w-6 text-primary ml-2" />
        </div>
      </div>

      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-primary transition-colors">
            Full Name *
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/80 backdrop-blur-sm"
              placeholder="Your beautiful name"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Sparkles className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="group">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-primary transition-colors">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/80 backdrop-blur-sm"
              placeholder="your@email.com"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Phone and Session Type Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-primary transition-colors">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/80 backdrop-blur-sm"
              placeholder="(123) 456-7890"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="group">
          <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-primary transition-colors">
            Session Type *
          </label>
          <div className="relative">
            <select 
              name="interest"
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none"
            >
              <option value="" disabled>Select your perfect session...</option>
              <option value="Full Photography Session ($350)">Full Photography Session ($350)</option>
              <option value="Fall Mini Session ($200)">Fall Mini Session ($200)</option>
              <option value="Christmas Mini Session ($200)">Christmas Mini Session ($200)</option>
              <option value="Valentine's Mini Session ($200)">Valentine's Mini Session ($200)</option>
              <option value="Pet Photography Session ($250)">Pet Photography Session ($250)</option>
              <option value="Family Session">Family Session</option>
              <option value="Maternity Session">Maternity Session</option>
              <option value="Couples/Engagement">Couples/Engagement</option>
              <option value="Portraits/Headshots">Portraits/Headshots</option>
              <option value="Graduation">Graduation</option>
              <option value="Events">Events</option>
              <option value="Other">Other (please specify in message)</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Camera className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Preferred Date */}
      <div className="group">
        <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-primary transition-colors">
          Preferred Date
        </label>
        <div className="relative">
          <input
            type="date"
            name="preferredDate"
            id="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/80 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <Sparkles className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">Optional - helps me check availability for your perfect day</p>
      </div>

      {/* Message */}
      <div className="group">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-primary transition-colors">
          Tell me about your vision *
        </label>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
            placeholder="Tell me about what you're looking for, any specific ideas you have, location preferences, or questions you might have. I'd love to hear your story and help bring your vision to life! ✨"
          ></textarea>
          <div className="absolute top-4 right-4 flex items-center pointer-events-none">
            <Heart className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="w-full bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-primary/90 hover:to-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
        >
          {formStatus === "submitting" ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              Sending Your Message...
            </>
          ) : (
            <>
              <Send className="h-6 w-6" />
              Send Message
            </>
          )}
        </button>
      </div>

      {/* Error State */}
      {formStatus === 'error' && (
        <div className="flex items-center gap-3 p-6 bg-red-50 border-2 border-red-200 rounded-2xl">
          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
          <p className="text-red-700 font-medium">Something went wrong. Please try again or email me directly at greta@gretanoellephoto.com</p>
        </div>
      )}

      {/* Form Footer */}
      <div className="text-center pt-6 border-t border-gray-200">
        {/* Removed urgent inquiries phone number as requested */}
      </div>
    </form>
  );
}