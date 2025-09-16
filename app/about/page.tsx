import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, FileCheck, TrendingUp, Quote } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - DescriptionAI Team & Mission",
  description:
    "Learn about DescriptionAI's mission to help job seekers optimize their resumes with AI. Meet our team and discover our impact across 20+ colleges.",
  openGraph: {
    title: "About Us - DescriptionAI Team & Mission",
    description:
      "Learn about DescriptionAI's mission to help job seekers optimize their resumes with AI. Meet our team and discover our impact.",
  },
}

export default function AboutPage() {
  const stats = [
    { label: "Colleges Partnered", value: "20+", icon: Users },
    { label: "Resumes Optimized", value: "1,200+", icon: FileCheck },
    { label: "Average Improvement", value: "85%", icon: TrendingUp },
  ]

  const team = [
    {
      name: "Arjun Mehta",
      role: "Co-Founder & Product Lead",
      initials: "AM",
      image: "/professional-headshot-of-arjun-mehta.jpg",
      bio: "I remember sending 200+ applications and getting just 3 interviews. That frustration led me to build DescriptionAI - so no one else has to go through what I did.",
      color: "bg-gradient-to-br from-blue-500 to-purple-600 text-white",
      ringColor: "ring-blue-100",
    },
    {
      name: "Riya Kapoor",
      role: "Co-Founder & Growth",
      initials: "RK",
      image: "/professional-headshot-of-riya-kapoor.jpg",
      bio: "Fresh out of college, I had no idea why my resume wasn't getting noticed. After countless rejections, I realized the problem wasn't my skills - it was how I presented them.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600 text-white",
      ringColor: "ring-purple-100",
    },
    {
      name: "Kunal Verma",
      role: "Lead Engineer",
      initials: "KV",
      image: "/professional-headshot-of-kunal-verma.jpg",
      bio: "As a developer, I thought my GitHub would speak for itself. Wrong! I learned that even technical resumes need the right keywords and formatting to pass ATS systems.",
      color: "bg-gradient-to-br from-green-500 to-teal-600 text-white",
      ringColor: "ring-green-100",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Intern, Delhi University",
      content: "DescriptionAI helped me refine my resume and I got shortlisted for two big interviews within a week.",
      initials: "PS",
      rating: 5,
    },
    {
      name: "Rohit Verma",
      role: "Final Year Student, NIT Surathkal",
      content:
        "The suggestions were to-the-point and improved my resume keywords — I actually saw recruiters respond faster.",
      initials: "RV",
      rating: 5,
    },
    {
      name: "Sneha Iyer",
      role: "Junior Analyst, Mumbai",
      content: "The scoring gave me confidence; I fixed weak areas and landed my first job at a fintech startup.",
      initials: "SI",
      rating: 5,
    },
  ]

  const partners = [
    { name: "Delhi University", logo: "/logos/delhi-university.jpg" },
    { name: "NIT Surathkal", logo: "/logos/nit-surathkal.jpg" },
    { name: "XLRI Jamshedpur", logo: "/logos/xlri-jamshedpur.jpg" },
    { name: "Ashoka University", logo: "/logos/ashoka-university.jpg" },
    { name: "University of Melbourne", logo: "/logos/university-melbourne.jpg" },
    { name: "ISB Hyderabad", logo: "/logos/isb-hyderabad.jpg" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">About DescriptionAI</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Empowering job seekers with AI-driven resume optimization to bridge the gap between talent and opportunity
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  DescriptionAI was founded with a simple yet powerful mission: to help job seekers instantly understand
                  how well their resumes match job descriptions. We recognized that talented individuals often struggle
                  to get past the initial screening process, not because they lack skills, but because their resumes
                  don't effectively communicate their value proposition.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty mt-6">
                  Our AI-powered platform analyzes resumes against job requirements, providing actionable insights that
                  have helped thousands of professionals improve their application success rates. From college students
                  landing their first internships to experienced professionals making career transitions, DescriptionAI
                  bridges the gap between talent and opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Impact</h2>
              <p className="text-xl text-muted-foreground text-pretty">Making a difference in careers across India</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Trusted by Leading Institutions</h2>
              <p className="text-muted-foreground">Partnering with top colleges and universities globally</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border"
                >
                  <div className="text-center">
                    <div className="w-16 h-12 mb-2 flex items-center justify-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Meet Our Team</h2>
              <p className="text-xl text-slate-600 text-pretty">
                Just like you, we were once job seekers struggling to make our resumes stand out
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="text-center shadow-lg hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur"
                >
                  <CardContent className="p-8 space-y-4">
                    <Avatar className={`w-24 h-24 mx-auto ring-4 ${member.ringColor}`}>
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold" style={{ background: member.color }}>
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">What Our Users Say</h2>
              <Badge variant="secondary" className="text-sm">
                SAMPLE — design placeholder
              </Badge>
              <p className="text-muted-foreground text-sm">Replace with real testimonials</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="h-8 w-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-6">"{testimonial.content}"</p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="text-sm font-semibold">{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/contact">Share Your Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Career?</h2>
            <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
              Join the thousands of professionals who have boosted their job prospects with DescriptionAI
            </p>
          </div>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <Link href="/upload">Start Your Analysis</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
