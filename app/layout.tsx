import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "DescriptionAI - AI-Powered Resume Analysis & Job Matching",
  description:
    "Get instant AI-powered resume analysis and job matching scores. Optimize your resume for better job applications and higher shortlisting rates. Trusted by 20+ colleges.",
  keywords: [
    "resume analysis",
    "job matching",
    "AI resume",
    "career optimization",
    "job application",
    "resume score",
    "ATS optimization",
  ],
  authors: [{ name: "DescriptionAI Team" }],
  creator: "DescriptionAI",
  publisher: "DescriptionAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://descriptionai.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DescriptionAI - AI-Powered Resume Analysis & Job Matching",
    description:
      "Get instant AI-powered resume analysis and job matching scores. Optimize your resume for better job applications and higher shortlisting rates.",
    url: "https://descriptionai.app",
    siteName: "DescriptionAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DescriptionAI - AI-Powered Resume Analysis Dashboard showing match score and insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DescriptionAI - AI-Powered Resume Analysis & Job Matching",
    description:
      "Get instant AI-powered resume analysis and job matching scores. Optimize your resume for better job applications.",
    images: ["/og-image.jpg"],
    creator: "@descriptionai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
