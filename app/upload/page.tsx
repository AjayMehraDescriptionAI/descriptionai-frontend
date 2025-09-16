import type { Metadata } from "next"
import UploadPageClient from "./UploadPageClient"

export const metadata: Metadata = {
  title: "Upload Resume - DescriptionAI AI Analysis",
  description:
    "Upload your resume and job description to get instant AI-powered analysis, match score, and actionable improvement recommendations.",
  openGraph: {
    title: "Upload Resume - DescriptionAI AI Analysis",
    description:
      "Upload your resume and job description to get instant AI-powered analysis, match score, and actionable improvement recommendations.",
  },
}

export default function UploadPage() {
  return <UploadPageClient />
}
