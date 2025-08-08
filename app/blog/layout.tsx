import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Photography tips, client stories, and behind-the-scenes insights.",
  alternates: { canonical: "https://drenanoellephoto.com/blog" },
}

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><a href="/">Home</a></li>
          <li>/</li>
          <li aria-current="page" className="text-gray-700">Blog</li>
        </ol>
      </nav>
      {children}
    </div>
  )
}


