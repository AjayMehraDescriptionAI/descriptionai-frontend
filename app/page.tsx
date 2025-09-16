import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Shield, Upload, FileText, BarChart3 } from "lucide-react"
import { TestimonialsSection } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Get Your Resume
                  <span className="text-primary"> Score</span> in Seconds
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  AI-powered resume analysis that matches your profile to job descriptions. Get actionable insights and
                  boost your shortlisting chances instantly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/upload">Upload Resume</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/pricing">Pricing</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Trusted by students • 20+ colleges</span>
              </div>
            </div>

            {/* Mockup Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-sm shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-5xl font-bold text-primary">86</div>
                    <div className="text-sm text-muted-foreground">Match Score</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div className="text-sm">Strong technical skills alignment</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
                      <div className="text-sm">Add more industry keywords</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                      <div className="text-sm">Quantify your achievements</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Top Features</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Everything you need to optimize your resume and land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fast Results</h3>
                <p className="text-muted-foreground">
                  Get your resume analysis and match score in under 30 seconds with our AI engine
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Actionable Insights</h3>
                <p className="text-muted-foreground">
                  Receive specific, actionable recommendations to improve your resume's impact
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Privacy-First</h3>
                <p className="text-muted-foreground">
                  Your data stays secure. We don't store your resume or share your information
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground">Simple 3-step process to optimize your resume</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <div className="space-y-2">
                <Upload className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">Upload Resume</h3>
                <p className="text-sm text-muted-foreground">Upload your resume and paste the job description</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <div className="space-y-2">
                <FileText className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your resume against the job requirements
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <div className="space-y-2">
                <BarChart3 className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">Get Insights</h3>
                <p className="text-sm text-muted-foreground">Receive your score and actionable improvement tips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Boost Your Resume Score?</h2>
            <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
              Join thousands of job seekers who have improved their chances with DescriptionAI
            </p>
          </div>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <Link href="/upload">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
