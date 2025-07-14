
import React from 'react';
import { Star, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: 'Starter',
      price: '₹59',
      period: '/ Week',
      popular: false,
      features: [
        '4 Premium Posts',
        '1 High-Quality Reel',
        '2 Branded Stories'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Professional',
      price: '₹199',
      period: '/ Week',
      popular: true,
      features: [
        '5 Premium Posts',
        '2 High-Quality Reels',
        '2 Branded Stories'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Premium',
      price: '₹299',
      period: '/ Week',
      popular: false,
      features: [
        '7 Premium Posts',
        '2 High-Quality Reels',
        '1 Branded Story'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Built for Everyone
          </p>
          <p className="text-lg text-gray-500">
            No hidden charges. No delays. Just results. Start small – grow big.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star size={16} className="mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                  <span className="text-gray-500">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3" size={20} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={goToContact}
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to grow your brand like never before?
          </p>
          <button 
            onClick={goToContact}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
