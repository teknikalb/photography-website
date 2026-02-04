import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photography Services & Investment | Newington, CT",
  description:
    "Family, maternity, portrait, mini sessions & pet photography in Connecticut. Natural light, heartfelt sessions. Serving families across the state.",
  keywords: [
    "photography services Newington CT",
    "family photographer Wethersfield",
    "West Hartford photographer",
    "Glastonbury photographer",
    "Rocky Hill CT photographer",
    "Southington photographer",
    "Litchfield CT photography",
    "Greenwich CT photographer",
    "Darien photographer",
    "maternity photography Connecticut",
    "portrait sessions Connecticut",
  ],
  openGraph: {
    title: "Photography Services & Investment | Newington, CT | Greta Noelle Photography",
    description:
      "Family, maternity, portrait & mini sessions throughout Connecticut. Natural light photography for families and couples.",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
