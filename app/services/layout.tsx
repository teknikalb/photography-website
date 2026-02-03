import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photography Services & Investment | Newington, CT",
  description:
    "Family, maternity, portrait, mini sessions & pet photography in Newington, CT. Serving Wethersfield, Glastonbury, West Hartford, Rocky Hill, Southington, Litchfield, Greenwich, Darien & all of Connecticut.",
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
      "Family, maternity, portrait & mini sessions in Newington, CT. Serving Wethersfield, Glastonbury, West Hartford, Rocky Hill, Southington, Litchfield, Greenwich, Darien & Connecticut.",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
