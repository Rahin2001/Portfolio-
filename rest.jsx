import React, { useState } from 'react';
import { Camera, Code, Palette, Star, Menu, X } from 'lucide-react';

export default function CreativePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'Web Development', color: 'bg-purple-500' },
    { id: 2, title: 'Brand Identity', category: 'Design', color: 'bg-pink-500' },
    { id: 3, title: 'Mobile App', category: 'App Development', color: 'bg-blue-500' },
    { id: 4, title: 'Marketing Campaign', category: 'Marketing', color: 'bg-green-500' },
    { id: 5, title: 'Product Photography', category: 'Photography', color: 'bg-orange-500' },
    { id: 6, title: 'UI/UX Redesign', category: 'Design', color: 'bg-teal-500' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! We'll get back to you soon, ${formData.name}.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              CreativeStudio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-purple-400 transition">Home</a>
              <a href="#services" className="hover:text-purple-400 transition">Services</a>
              <a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-2">
              <a href="#home" className="block py-2 hover:text-purple-400 transition">Home</a>
              <a href="#services" className="block py-2 hover:text-purple-400 transition">Services</a>
              <a href="#portfolio" className="block py-2 hover:text-purple-400 transition">Portfolio</a>
              <a href="#contact" className="block py-2 hover:text-purple-400 transition">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm">
            ✨ Award-Winning Creative Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Digital Magic
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforming ideas into stunning digital experiences through design, development, and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Code size={32} />}
              title="Web Development"
              description="Custom websites built with modern technologies"
            />
            <ServiceCard 
              icon={<Palette size={32} />}
              title="UI/UX Design"
              description="Beautiful, user-friendly interfaces"
            />
            <ServiceCard 
              icon={<Camera size={32} />}
              title="Photography"
              description="Professional product and brand photography"
            />
            <ServiceCard 
              icon={<Star size={32} />}
              title="Branding"
              description="Complete brand identity solutions"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transform transition hover:scale-105"
              >
                <div className={`absolute inset-0 ${project.color} opacity-80 group-hover:opacity-90 transition`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-sm opacity-80 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <StatCard number="250+" label="Projects Completed" />
          <StatCard number="150+" label="Happy Clients" />
          <StatCard number="15+" label="Awards Won" />
          <StatCard number="10+" label="Years Experience" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-center mb-12">
            Have a project in mind? We'd love to hear from you.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-6 py-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-6 py-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows="5"
                className="w-full px-6 py-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            CreativeStudio
          </div>
          <p className="text-gray-500 mb-6">Creating digital experiences that inspire</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Dribbble</a>
          </div>
          <p className="text-gray-600 mt-8">© 2024 CreativeStudio. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-gray-800 rounded-2xl p-8 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-purple-400 mb-4">{selectedProject.category}</p>
            <p className="text-gray-400 mb-6">
              This is an amazing project that showcases our expertise in {selectedProject.category.toLowerCase()}. 
              We delivered outstanding results for our client.
            </p>
            <button 
              onClick={() => setSelectedProject(null)}
              className="bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition group">
      <div className="text-purple-400 mb-4 group-hover:scale-110 transition transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div>
      <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        {number}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
