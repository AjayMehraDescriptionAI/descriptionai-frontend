"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, CheckCircle, Loader2, Star, TrendingUp, AlertTriangle, Target, Mail } from "lucide-react"

interface AnalysisResults {
  matchScore: number
  overallGrade: string
  strengths: string[]
  improvements: string[]
  keywordMatches: {
    matched: string[]
    missing: string[]
  }
  sections: {
    [key: string]: {
      score: number
      feedback: string
    }
  }
}

export default function UploadPageClient() {
  const [file, setFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!file) {
      newErrors.file = "Please upload your resume"
    }

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!jobDescription.trim()) {
      newErrors.jobDescription = "Job description is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      if (errors.file) {
        setErrors((prev) => ({ ...prev, file: "" }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setAnalysisResults(null)

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file?.name,
          jobDescription,
          email,
        }),
      })

      if (!response.ok) {
        throw new Error("Analysis failed")
      }

      const results = await response.json()
      setAnalysisResults(results)
      setShowSuccess(true)

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      console.error("Analysis error:", error)
      setErrors({ submit: "Failed to analyze resume. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-balance">Upload Your Resume</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Get instant AI-powered analysis and improve your job application success rate
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Resume Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume File *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        aria-describedby="resume-error"
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground mt-1">PDF or DOCX (max 10MB)</p>
                      </label>
                    </div>
                    {errors.file && (
                      <p id="resume-error" className="text-sm text-destructive" role="alert">
                        {errors.file}
                      </p>
                    )}
                  </div>

                  {/* Job Description */}
                  <div className="space-y-2">
                    <Label htmlFor="job-description">Job Description *</Label>
                    <Textarea
                      id="job-description"
                      placeholder="Paste the job description here..."
                      value={jobDescription}
                      onChange={(e) => {
                        setJobDescription(e.target.value)
                        if (errors.jobDescription) {
                          setErrors((prev) => ({ ...prev, jobDescription: "" }))
                        }
                      }}
                      className="min-h-32"
                      aria-describedby="job-description-error"
                    />
                    {errors.jobDescription && (
                      <p id="job-description-error" className="text-sm text-destructive" role="alert">
                        {errors.jobDescription}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: "" }))
                        }
                      }}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        <span role="status" aria-live="polite">
                          Analyzing...
                        </span>
                      </>
                    ) : (
                      "Submit & Get Score"
                    )}
                  </Button>

                  {errors.submit && (
                    <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800 dark:text-red-200">{errors.submit}</AlertDescription>
                    </Alert>
                  )}

                  {/* Privacy Note */}
                  <p className="text-xs text-muted-foreground text-center">
                    We won't share your data. Delete any time.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Preview Panel */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Upload Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {file ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">What happens next?</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• AI analyzes your resume content</li>
                        <li>• Matches skills with job requirements</li>
                        <li>• Generates actionable improvement tips</li>
                        <li>• Provides match score and insights</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Upload your resume to see preview</p>
                  </div>
                )}

                {showSuccess && (
                  <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                    <Mail className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      Analysis complete! We've also sent the detailed results to your email.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>

          {analysisResults && (
            <div className="mt-12">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Analysis Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Overall Score */}
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl">
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(analysisResults.matchScore)}`}>
                          {analysisResults.matchScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">Match Score</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{analysisResults.overallGrade}</div>
                        <p className="text-sm text-muted-foreground">Overall Grade</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Star className="h-5 w-5 text-green-600" />
                        Strengths
                      </h3>
                      <ul className="space-y-2">
                        {analysisResults.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Improvements */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Improvements
                      </h3>
                      <ul className="space-y-2">
                        {analysisResults.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Keyword Analysis */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Keyword Analysis</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Matched Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResults.keywordMatches.matched.map((keyword, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Missing Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResults.keywordMatches.missing.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="border-red-200 text-red-600">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section Scores */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Section Analysis</h3>
                    <div className="space-y-4">
                      {Object.entries(analysisResults.sections).map(([section, data]) => (
                        <div key={section} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium capitalize">{section}</h4>
                            <span className={`font-semibold ${getScoreColor(data.score)}`}>{data.score}%</span>
                          </div>
                          <Progress value={data.score} className="h-2" />
                          <p className="text-sm text-muted-foreground">{data.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
