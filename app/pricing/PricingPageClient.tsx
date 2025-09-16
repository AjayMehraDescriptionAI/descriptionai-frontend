"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Star } from "lucide-react"

export default function PricingPageClient() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Pay-per-use",
      price: "₹49",
      period: "/report",
      description: "Perfect for occasional job applications",
      features: ["Instant resume analysis", "Job matching score", "Basic improvement tips"],
      cta: "Get Single Report",
      href: "/upload",
      popular: false,
    },
    {
      name: "Pro",
      price: "₹299",
      period: "/month",
      description: "Best for active job seekers",
      features: ["Unlimited resume analysis", "Advanced AI insights", "Priority email support"],
      cta: "Start Pro Plan",
      href: "/upload",
      popular: true,
    },
    {
      name: "Career Pro+",
      price: "₹999",
      period: "/month",
      description: "For serious career advancement",
      features: ["Everything in Pro", "Personal career coaching", "LinkedIn profile optimization"],
      cta: "Go Premium",
      href: "/upload",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How accurate is the resume analysis?",
      answer:
        "Our AI model is trained on thousands of successful resumes and job descriptions. It provides 85%+ accuracy in matching relevant skills and identifying improvement areas based on industry standards.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you'll continue to have access until the end of your current billing period.",
    },
    {
      question: "Do you store my resume data?",
      answer:
        "We prioritize your privacy. Resume data is processed for analysis and then securely deleted within 24 hours. We never share your personal information with third parties.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Simple Pricing</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Choose the plan that fits your job search needs. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about DescriptionAI</p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-balance">Ready to Boost Your Career?</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Join thousands of professionals who have improved their job prospects with DescriptionAI
              </p>
            </div>
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/upload">Start Your Analysis</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
