export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance">About Me</h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate Full-Stack Developer with a strong background in building enterprise-level applications. My
            expertise spans across modern frontend frameworks like React and Angular, backend technologies including
            Node.js and Express, and databases such as PostgreSQL and MongoDB.
          </p>

          <p>
            Currently working at <span className="text-primary font-semibold">GoodBooks ERP Technology Pvt. Ltd.</span>,
            I develop and maintain enterprise ERP modules, focusing on creating efficient, scalable solutions. I've
            successfully delivered complex projects including Purchase Order automation systems with AI-powered data
            extraction and SAP integration.
          </p>

          <p>
            I'm particularly interested in leveraging AI/ML technologies to solve real-world business problems. My
            recent work includes integrating LLM-based solutions for automated data processing and building intelligent
            systems that streamline enterprise workflows.
          </p>

          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying
            updated with the latest trends in web development and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
