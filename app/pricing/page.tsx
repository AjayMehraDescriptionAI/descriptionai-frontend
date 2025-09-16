import type { Metadata } from "next"
import PricingPageClient from "./PricingPageClient"

export const metadata: Metadata = {
  title: "Pricing Plans - DescriptionAI AI Resume Analysis",
  description:
    "Choose from flexible pricing plans for AI-powered resume analysis. Pay-per-use, Pro monthly, or Career Pro+ plans available. No hidden fees.",
  openGraph: {
    title: "Pricing Plans - DescriptionAI AI Resume Analysis",
    description:
      "Choose from flexible pricing plans for AI-powered resume analysis. Pay-per-use, Pro monthly, or Career Pro+ plans available.",
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
