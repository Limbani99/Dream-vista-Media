
import React from 'react';
import { Rocket, Instagram, Palette, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Rocket className="text-purple-500" size={48} />,
      title: 'Digital Marketing',
      description: 'We help brands build awareness, run campaigns, and grow with data-backed strategies.'
    },
    {
      icon: <Instagram className="text-pink-500" size={48} />,
      title: 'Instagram Management',
      description: 'We handle your posts, reels, stories, captions, and audience — so you focus on what matters most.'
    },
    {
      icon: <Palette className="text-blue-500" size={48} />,
      title: 'Creative Designing',
      description: 'From social media posts, thumbnails, posters to brand kits — we create visual content that connects.'
    },
    {
      icon: <Video className="text-green-500" size={48} />,
      title: 'Video Editing',
      description: 'High-quality, engaging reels and shorts for brands, influencers, and YouTube creators.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your brand's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Dream Vista Media?</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                ✔️
              </div>
              <span className="text-sm">Affordable & Transparent Pricing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                ✔️
              </div>
              <span className="text-sm">Unique Creative Designs</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                ✔️
              </div>
              <span className="text-sm">Regular Content Scheduling</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                ✔️
              </div>
              <span className="text-sm">Friendly, Skilled Team</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                ✔️
              </div>
              <span className="text-sm">Fast Turnaround & Custom Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
