"use client"

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl font-light mb-8">Cookies Notice</h1>
      <p className="mb-4">This website uses cookies and similar technologies to enhance your experience, analyze site usage, and help us improve our services.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">What Are Cookies?</h2>
      <p className="mb-4">Cookies are small text files stored on your device by your browser. They help websites remember your preferences and activity.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To remember your preferences and settings</li>
        <li>To analyze website traffic and usage with analytics tools</li>
        <li>To improve the functionality and performance of our site</li>
      </ul>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Managing Cookies</h2>
      <p className="mb-4">You can control and delete cookies through your browser settings. Please note that disabling cookies may affect your experience on our site.</p>
      <h2 className="font-serif text-2xl font-light mt-8 mb-4">Contact</h2>
      <p className="mb-4">If you have questions about our use of cookies, please contact us via the <a href="/contact" className="text-primary underline">contact form</a>.</p>
    </div>
  )
} 