"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Software Engineer, Bangalore",
      content:
        "DescriptionAI transformed my resume completely. I got 3x more interview calls within two weeks of using their suggestions. The keyword optimization was spot on!",
      initials: "AM",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      name: "Sarah Johnson",
      role: "International Student, University of Melbourne",
      content:
        "As a foreign student looking for internships in India, this tool helped me understand what Indian recruiters expect. The cultural insights were invaluable!",
      initials: "SJ",
      rating: 4,
      avatarColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      name: "Kavya Reddy",
      role: "Data Analyst, Hyderabad",
      content:
        "Yaar, this tool is amazing! The detailed scoring helped me understand exactly what recruiters were looking for. Fixed my weak areas and landed my dream job at a fintech startup!",
      initials: "KR",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      name: "Priya Sharma",
      role: "Final Year Student, Delhi University",
      content:
        "Bhai, I was so confused about resume writing. DescriptionAI made it super simple. Got shortlisted for campus placements within a week!",
      initials: "PS",
      rating: 4,
      avatarColor: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      name: "Marcus Chen",
      role: "MBA Student, ISB Hyderabad",
      content:
        "Coming from a tech background to business school, I needed to pivot my resume completely. This AI tool understood the nuances perfectly and helped me transition smoothly.",
      initials: "MC",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      name: "Vikram Singh",
      role: "Product Manager, Delhi",
      content:
        "Amazing tool yaar! The AI suggestions were incredibly accurate. My resume went from generic to highly targeted. Bilkul next level hai ye!",
      initials: "VS",
      rating: 4,
      avatarColor: "bg-gradient-to-br from-teal-500 to-teal-600",
    },
    {
      name: "Ananya Gupta",
      role: "Marketing Executive, Mumbai",
      content:
        "I was struggling to get responses from recruiters. DescriptionAI helped me align my resume perfectly with job descriptions. Total game changer!",
      initials: "AG",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      name: "Ravi Kumar",
      role: "Engineering Student, NIT Surathkal",
      content:
        "Placement season mein this was a lifesaver! The instant feedback helped me improve my resume score from 60% to 92%. Got placed in my dream company!",
      initials: "RK",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
      name: "Emma Rodriguez",
      role: "Exchange Student, Ashoka University",
      content:
        "The tool helped me adapt my international resume for the Indian job market. The suggestions were culturally relevant and professionally sound.",
      initials: "ER",
      rating: 4,
      avatarColor: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
    {
      name: "Deepika Nair",
      role: "UX Designer, Chennai",
      content:
        "Perfect for career transitions! The tool helped me highlight transferable skills effectively. Switched from graphic design to UX seamlessly.",
      initials: "DN",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-violet-500 to-violet-600",
    },
    {
      name: "Rohit Joshi",
      role: "MBA Student, XLRI Jamshedpur",
      content:
        "Consulting interviews ke liye resume formatting was crucial. This AI understood exactly what top firms look for. Bahut helpful tha!",
      initials: "RJ",
      rating: 4,
      avatarColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    },
    {
      name: "Meera Patel",
      role: "HR Specialist, Ahmedabad",
      content:
        "As an HR professional, I can confirm this tool understands what recruiters want. It's like having an insider's perspective on resume optimization.",
      initials: "MP",
      rating: 5,
      avatarColor: "bg-gradient-to-br from-rose-500 to-rose-600",
    },
  ]

  const itemsPerView = 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">What Our Users Say</h2>
            <p className="text-slate-600 text-lg">Join thousands of successful job seekers</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow h-full border-0 bg-white/80 backdrop-blur">
                      <CardContent className="p-6 space-y-4 h-full flex flex-col">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <Star key={i + testimonial.rating} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>

                        <div className="relative flex-grow">
                          <Quote className="h-8 w-8 text-slate-300 absolute -top-2 -left-2" />
                          <p className="text-slate-600 italic pl-6">"{testimonial.content}"</p>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                          <Avatar className="w-10 h-10 ring-2 ring-white shadow-sm">
                            <AvatarFallback className={`text-sm font-semibold text-white ${testimonial.avatarColor}`}>
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm text-slate-800">{testimonial.name}</p>
                            <p className="text-xs text-slate-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur shadow-lg hover:shadow-xl border-slate-200"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur shadow-lg hover:shadow-xl border-slate-200"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-slate-300"
                }`}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              asChild
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              <Link href="/about">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
