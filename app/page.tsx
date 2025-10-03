import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1629]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/30 via-blue-500/20 to-transparent animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/30 via-indigo-500/20 to-transparent animate-gradient-shift-reverse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>

        {/* Floating orbs for extra visual interest */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
