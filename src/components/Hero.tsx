
import React from 'react';
import { Star, CheckCircle, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Dream Vista Media
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-purple-200">
              Crafting Digital Dreams into Reality
            </p>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              At Dream Vista Media, we believe your brand is more than just a name — it's a story waiting to be told. 
              We transform your ideas into digital masterpieces that make you stand out, scroll-stopping style.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Instagram Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Business Branding</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Viral Reels & Shorts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>Professional Designs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <span>24x7 Support Team</span>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Let's Work Together
            </button>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-4">
                  <Star className="mx-auto mb-2 text-yellow-400" size={32} />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-300">Designs Delivered</div>
                </div>
                <div className="p-4">
                  <Users className="mx-auto mb-2 text-green-400" size={32} />
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-gray-300">Pages Grown</div>
                </div>
                <div className="p-4">
                  <Zap className="mx-auto mb-2 text-purple-400" size={32} />
                  <div className="text-2xl font-bold">Trending</div>
                  <div className="text-sm text-gray-300">Reels Created</div>
                </div>
                <div className="p-4">
                  <CheckCircle className="mx-auto mb-2 text-blue-400" size={32} />
                  <div className="text-2xl font-bold">Happy</div>
                  <div className="text-sm text-gray-300">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
