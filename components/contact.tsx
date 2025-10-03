import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-balance">
          <span className="text-primary font-mono text-xl"></span> Get In Touch
        </h2>

        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm currently seeking opportunities in reputed MNCs to leverage my technical and problem-solving skills for
            delivering scalable enterprise solutions. Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <Card className="p-8 bg-card border-border max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:rahinmurali@gmail.com"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  rahinmurali@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+916379898544"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  +91 63798 98544
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <a href="https://github.com/Rahin2001" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="https://www.linkedin.com/in/rahinmuralidharan/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <a href="mailto:rahinmurali@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>© 2025 Rahin M,rahinmurali@gmail.com</p>
        </div>
      </div>
    </section>
  )
}
