import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Folder } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Rabwin Industries - Purchase Order Automation System",
      period: "July 31, 2025 – Aug 19, 2025",
      type: "Independent Project",
      description:
        "Designed and developed a complete Purchase Order automation application within 20 days. The system allows users to submit purchase orders via PDF upload, which are then processed by an AI-powered API to extract data, convert it into SAP-compatible format, and send to SAP.",
      highlights: [
        "Implemented PDF upload functionality with AI-powered data extraction",
        "Integrated with SAP for automated purchase order processing",
        "Automated email notifications for success/failure responses from SAP",
        "Managed end-to-end development including frontend, backend, database, and server deployment",
        "Delivered a scalable, production-ready solution independently",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AI API", "SAP Integration"],
      link: "#",
    },
    {
      title: "CAMEOGRAT - Full-Stack Web Application",
      period: "2024",
      type: "Personal Project",
      description:
        "Built a comprehensive video-sharing platform integrating YouTube, GitHub, AnyDesk, and ChatGPT for developers and IoT learners. The platform enables content creators to share educational videos with advanced categorization and social features.",
      highlights: [
        "Implemented video upload with category tagging (Application/IoT)",
        "Developed user authentication with unique user IDs",
        "Built social features: follow, like/dislike, and video filtering",
        "Designed component listing feature for IoT videos",
        "Planned monetization through Google Ads integration",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "YouTube API", "ChatGPT API"],
      link: "https://cameograt.netlify.app/",
    },
    {
  title: "Rshopping - Responsive E-Commerce Website",
  period: "Dec - 2023",
  type: "Personal Project",
  description:
    "Developed a fully responsive e-commerce website from scratch using only HTML, CSS, and vanilla JavaScript. The site features a clean UI with product listings, a shopping cart, and dynamic filtering—ideal for small businesses or online stores without backend dependencies.",
  highlights: [
    "Built a responsive product catalog with category-based filtering (e.g., Electronics, Fashion, Home)",
    "Implemented a dynamic shopping cart with add/remove functionality and persistent storage using localStorage",
    "Designed a mobile-first UI with smooth navigation, hover effects, and cart animation",
    "Added search functionality and product detail modals for enhanced user experience",
    "Optimized performance and accessibility with semantic HTML and efficient CSS",
  ],
  technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", ],
  link: "https://ecommerce-websie.netlify.app/", 
},
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Folder className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground text-balance">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                        <span>{project.type}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
