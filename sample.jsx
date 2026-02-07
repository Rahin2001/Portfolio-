import React, { useState } from 'react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">BrandName</div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Build Amazing Things with Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The modern solution for teams who want to move fast and build products that matter.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
            Start Free Trial
          </button>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg border-2 border-indigo-600 hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {['features', 'pricing', 'support'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg capitalize transition ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                title="Fast Performance"
                description="Lightning-fast load times and optimized for speed"
              />
              <FeatureCard 
                title="Secure & Reliable"
                description="Enterprise-grade security with 99.9% uptime"
              />
              <FeatureCard 
                title="Easy Integration"
                description="Simple APIs and extensive documentation"
              />
            </div>
          )}
          {activeTab === 'pricing' && (
            <div className="text-center py-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">Starting at $29/month</p>
              <p className="text-gray-600">Flexible plans that scale with your business</p>
            </div>
          )}
          {activeTab === 'support' && (
            <div className="text-center py-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">24/7 Customer Support</p>
              <p className="text-gray-600">Our team is here to help you succeed</p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-8">Subscribe to our newsletter for the latest updates</p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 BrandName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="w-6 h-6 bg-indigo-600 rounded"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
