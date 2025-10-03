import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "React & Angular Developer",
      company: "GoodBooks ERP Technology Pvt. Ltd.",
      location: "Coimbatore, India",
      period: "April 2025 – Present",
      responsibilities: [
        "Developed and maintained enterprise ERP modules using React.js and Angular v19",
        "Built Purchase Order Management System features: PDF upload, real-time API data extraction, and file parsing logic",
        "Conducted 5+ R&D projects on performance tuning, UI/UX improvements, and POC implementations",
        "Integrated frontend with backend using Node.js, Express, and PostgreSQL",
        "Collaborated with DevOps team for smooth deployments using PM2, Vite, and Nginx",
      ],
      technologies: ["React.js", "Angular v19", "Node.js", "PostgreSQL", "Express.js", "PM2", "Vite", "Nginx"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
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
