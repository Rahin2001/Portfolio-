import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. SNS Rajalakshmi College of Arts and Science",
      period: "2023 – 2025",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "KG College of Arts and Science",
      period: "2020 – 2023",
    },
   
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
