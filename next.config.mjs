/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js Image Optimization and allow remote images from Unsplash
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Enhanced SEO and performance settings
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Security headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ]
  },
  
  // The site was reduced to six core pages. Every retired URL is permanently
  // redirected to its closest remaining page so existing links and rankings carry over.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/investment", destination: "/services", permanent: true },
      { source: "/pricing", destination: "/services", permanent: true },
      { source: "/services/:path+", destination: "/services", permanent: true },
      { source: "/mini-sessions", destination: "/services", permanent: true },
      { source: "/mini-sessions/:path*", destination: "/services", permanent: true },
      { source: "/locations", destination: "/contact", permanent: true },
      { source: "/locations/:path*", destination: "/contact", permanent: true },
      { source: "/portfolio/:path+", destination: "/portfolio", permanent: true },
      { source: "/sitemap-blog.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap-portfolio.xml", destination: "/sitemap.xml", permanent: true },
    ]
  },
  
}

export default nextConfig
