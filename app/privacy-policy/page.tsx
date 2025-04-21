"use client"

import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl font-light mb-8">Privacy Policy</h1>
      <p className="mb-6">Last updated: {new Date().getFullYear()}</p>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information you provide via contact forms (name, email, phone, message, etc.)</li>
        <li>Information collected automatically through cookies and analytics tools (IP address, browser type, pages visited, etc.)</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To respond to your inquiries and provide photography services</li>
        <li>To improve our website and services</li>
        <li>To send you updates, newsletters, or marketing communications (if you opt in)</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Cookies & Analytics</h2>
      <p className="mb-4">We use cookies and similar technologies to enhance your experience, analyze website traffic, and understand how visitors use our site. You can control cookies through your browser settings. By using our site, you consent to our use of cookies.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">How We Protect Your Data</h2>
      <p className="mb-4">We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You can request access to, correction, or deletion of your personal data at any time.</li>
        <li>You can opt out of marketing communications at any time.</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Contact</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy or your data, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
    </div>
  )
} 