import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock analysis results
    const analysisResults = {
      matchScore: Math.floor(Math.random() * 30) + 70, // 70-100%
      overallGrade: "B+",
      strengths: [
        "Strong technical skills alignment",
        "Relevant work experience",
        "Good educational background",
        "Clear project descriptions",
      ],
      improvements: [
        "Add more quantifiable achievements",
        "Include relevant keywords from job description",
        "Highlight leadership experience",
        "Optimize resume format for ATS",
      ],
      keywordMatches: {
        matched: ["JavaScript", "React", "Node.js", "Python", "SQL"],
        missing: ["AWS", "Docker", "Kubernetes", "TypeScript"],
      },
      sections: {
        experience: { score: 85, feedback: "Strong relevant experience with good descriptions" },
        skills: { score: 78, feedback: "Good technical skills, could add more soft skills" },
        education: { score: 90, feedback: "Excellent educational background" },
        projects: { score: 82, feedback: "Well-described projects, add more metrics" },
      },
    }

    return NextResponse.json(analysisResults)
  } catch (error) {
    return NextResponse.json({ error: "Failed to analyze resume" }, { status: 500 })
  }
}
