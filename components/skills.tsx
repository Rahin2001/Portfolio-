import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Brain, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React.js", "Angular v19", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "AI/ML & Tools",
      icon: Brain,
      skills: [
        "LLM Integrations",
        "AI-powered Data Extraction",
        "Prompt Engineering",
        "Git",
        "Vite",
        "PM2",
        "SAP ABAP",
        "Nginx",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Effective Communication", "Analytical Thinking", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
