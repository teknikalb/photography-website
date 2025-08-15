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
  
  async redirects() {
    return [
      {
        source: "/mini-sessions/:path*",
        destination: "/services/mini-sessions",
        permanent: true,
      },
      // Add canonical redirects for better SEO
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ]
  },
  
  // Sitemap generation optimization
  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
  },
}

export default nextConfig
