
import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Patel Malhar', phone: '+91 95108 95189' },
    { name: 'Patel Mann', phone: '+91 90233 41592' },
    { name: 'Aayush Tiwari', phone: '+91 99267 07143' },
    { name: 'Lucky', phone: '+91 93025 56509' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not an agency, we're your creative partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by a team of young professionals — Patel Malhar, Patel Mann, Aayush Tiwari, and Lucky — 
              Dream Vista Media brings energy, experience, and edge to your content.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in transforming ideas into digital masterpieces that help brands stand out in today's 
              competitive landscape. Our passion drives us to deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-center text-gray-800 mb-2">{member.name}</h4>
                <p className="text-sm text-gray-600 text-center">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Target className="text-purple-500 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver affordable, aesthetic, and result-driven digital services to everyone. 
              We make professional digital marketing accessible to creators and businesses of all sizes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Eye className="text-blue-500 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower creators and businesses with standout online presence. 
              We envision a world where every brand has the tools to tell their unique story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
