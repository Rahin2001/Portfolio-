import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Rahin M
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Full-Stack Developer</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full" />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto">
            Specializing in <span className="text-cyan-400 font-semibold">React</span>,{" "}
            <span className="text-cyan-400 font-semibold">Angular</span>,{" "}
            <span className="text-cyan-400 font-semibold">Node.js</span>, and{" "}
            <span className="text-cyan-400 font-semibold">PostgreSQL</span>. Building enterprise ERP modules, AI-powered
            applications, and scalable automation systems.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center">
            <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="h-5 w-5 text-cyan-400" />
              <span>+91 63798 98544</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
            >
              <a href="/Rahin_M_Resume.pdf" download="Rahin_M_Resume.pdf" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400/10"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex gap-6 pt-6 justify-center">
            <a
              href="https://github.com/Rahin2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-400 transition-all hover:scale-110"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahinmuralidharan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-400 transition-all hover:scale-110"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:rahinmurali@gmail.com"
              className="text-muted-foreground hover:text-cyan-400 transition-all hover:scale-110"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
