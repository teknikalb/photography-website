import type { Metadata } from "next"
import EnhancedHome from "./enhanced-page"

export const metadata: Metadata = {
  title: "Family & Maternity Photographer in Newington, CT | West Hartford, Glastonbury, Greenwich",
  description:
    "Book a family or maternity photographer in Newington, CT. Serving West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, Litchfield, Greenwich & Darien. Natural, heartfelt sessions—limited spots.",
  keywords: [
    "family photographer Newington CT",
    "maternity photographer West Hartford",
    "best family photographer Glastonbury",
    "family photographer Greenwich CT",
    "photographer Darien CT",
    "maternity photographer near me",
    "family photos West Hartford",
    "family photographer Wethersfield",
    "maternity photographer Newington",
    "photographer Rocky Hill CT",
    "family photographer Southington",
    "Litchfield CT photographer",
  ],
  openGraph: {
    title: "Family & Maternity Photographer | Newington, West Hartford, Glastonbury, Greenwich CT",
    description:
      "Book your family or maternity session in Newington, CT. Serving West Hartford, Glastonbury, Wethersfield, Rocky Hill, Southington, Litchfield, Greenwich & Darien.",
    url: "https://gretanoellephoto.com",
  },
}

export default function Home() {
  return <EnhancedHome />
}
