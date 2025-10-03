import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "SAP Certified Development Associate – ABAP with SAP NetWeaver 7.50",
      issuer: "SAP",
      date: "November 2022",
      score: "81%",
      highlight: true,
    },
    {
      title: "Summer Internship – React with Django (Python)",
      issuer: "Professional Training",
      date: "May 2024",
    },
    {
      title: "Workshop – AWS Cloud & CI/CD Concepts",
      issuer: "AWS Training",
      date: "December 2023",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Certifications & Workshops</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`p-6 bg-card border-border hover:border-primary/50 transition-colors ${
                cert.highlight ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-base font-bold text-foreground leading-snug text-balance">{cert.title}</h3>
                  <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                    {cert.score && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          Score: {cert.score}
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
