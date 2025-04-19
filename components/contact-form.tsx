"use client"

import { useState } from 'react';
import { Mail, Phone, Sparkles } from 'lucide-react'; // Assuming Sparkles for logo placeholder
import { useFormspark } from "@formspark/use-formspark";

// Define the structure for the form data state
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  dateLocation: string;
  referral: string;
  message: string;
  event_type?: string; // Added optional field
  date?: string;       // Added optional field
}

// Helper component for numbered input fields
const NumberedInput = ({ number, label, name, type = 'text', value, onChange, required = false, placeholder = '', children }: any) => (
  <div className="mb-8">
    <label htmlFor={name} className="flex items-baseline text-base text-gray-600 font-serif">
      <span className="w-8 text-right mr-3">{String(number).padStart(2, '0')}.</span>
      <span className="flex-grow">
        {label}
        {children || (
          <input
            type={type}
            name={name}
            id={name}
            required={required}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full border-0 border-b border-gray-300 bg-transparent px-1 py-2 text-base text-gray-800 placeholder-gray-500 focus:border-primary focus:ring-0"
            placeholder={placeholder}
          />
        )}
      </span>
    </label>
  </div>
);

export default function ContactForm() {
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || "",
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    dateLocation: "",
    referral: "",
    message: "",
    event_type: "", // Added initial state
    date: "",       // Added initial state
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    console.log('Form Data:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const success = Math.random() > 0.3;
    if (success) {
      setFormStatus("success");
      setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: '', dateLocation: '', referral: '', message: '', event_type: '', date: '' });
    } else {
      setFormStatus("error");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
      {/* Contact Info Column (Right side on screenshot, but placed first for mobile) */}
      <div className="md:col-span-1 space-y-5 text-base text-gray-700 font-serif">
        <p>
          Whether you're in New York, Connecticut, or any other classic or unique location around the world, I'm ready to help tell your story. Including the following details about your needs will get us started on putting together the perfect story.
        </p>
        <div className="border-t border-gray-200 pt-5 space-y-4">
          <a href="mailto:meg@megmillerphotography.com" className="flex items-center hover:text-primary transition-colors text-base">
            <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
            meg@megmillerphotography.com
          </a>
          <a href="tel:3173409036" className="flex items-center hover:text-primary transition-colors text-base">
            <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
            317.340.9036
          </a>
           {/* Placeholder for Logo */}
          <div className="flex items-center text-gray-500 border-t border-gray-200 pt-5 mt-5">
             <Sparkles className="w-6 h-6 mr-3 flex-shrink-0" /> 
             <span className="italic text-base">Logo Placeholder</span>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            <NumberedInput number={1} label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <NumberedInput number={2} label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            <NumberedInput number={3} label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <NumberedInput number={4} label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          </div>
          <NumberedInput number={5} label="Are you interested in a Lifestyle Session or Wedding Photography?" name="interest" value={formData.interest} onChange={handleChange} required >
             <select 
                name="interest"
                id="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-0 border-b border-gray-300 bg-transparent px-1 py-2 text-base text-gray-800 focus:border-primary focus:ring-0"
             >
                <option value="" disabled>Select...</option>
                <option value="Lifestyle">Lifestyle Session</option>
                <option value="Wedding">Wedding Photography</option>
                <option value="Other">Other (Specify below)</option>
             </select>
          </NumberedInput>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <NumberedInput number={6} label="Date and Location Preferences" name="dateLocation" value={formData.dateLocation} onChange={handleChange} />
              <NumberedInput number={7} label="Who referred you?" name="referral" value={formData.referral} onChange={handleChange} />
           </div>
          <NumberedInput number={8} label="Leave me a note! Tell me more about your family (lifestyle) or your wedding day (wedding photography)!" name="message" value={formData.message} onChange={handleChange} required >
             <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border-0 border-b border-gray-300 bg-transparent px-1 py-2 text-base text-gray-800 placeholder-gray-500 focus:border-primary focus:ring-0"
             ></textarea>
          </NumberedInput>

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="inline-block text-base font-medium tracking-[0.2em] text-gray-700 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className={`block border-t border-gray-400 pt-3 pb-2 ${formStatus !== "submitting" ? 'group-hover:border-gray-900' : ''} transition-colors`}>
                {formStatus === "submitting" ? 'SENDING...' : 'SUBMIT INQUIRY'}
              </span>
              <span className={`block border-b border-gray-400 ${formStatus !== "submitting" ? 'group-hover:border-gray-900' : ''} transition-colors`}></span>
            </button>
          </div>
          {formStatus === 'success' && (
            <p className="mt-4 text-center text-green-600">Inquiry sent successfully! Thank you.</p>
          )}
          {formStatus === 'error' && (
            <p className="mt-4 text-center text-red-600">Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
} 