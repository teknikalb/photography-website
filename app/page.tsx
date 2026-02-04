import type { Metadata } from "next"
import EnhancedHome from "./enhanced-page"

export const metadata: Metadata = {
  title: "Family & Maternity Photographer in Connecticut | Greta Noelle Photography",
  description:
    "Natural light family and maternity photography throughout Connecticut. Heartfelt, artistic sessions for families and couples—limited spots.",
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
    title: "Family & Maternity Photographer in Connecticut | Greta Noelle Photography",
    description:
      "Natural light family and maternity photography throughout Connecticut. Heartfelt sessions for families and couples.",
    url: "https://gretanoellephoto.com",
  },
}

export default function Home() {
  return <EnhancedHome />
}
