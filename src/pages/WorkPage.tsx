import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Image as ImageIcon, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkPage = () => {
  const workSamples = [
    {
      id: "instagram",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      title: "Instagram Growth Campaign",
      description: "Helped a local restaurant grow from 500 to 15K followers in 3 months with engaging food photography and viral reels.",
      category: "Instagram Management",
      results: "+2900% Growth"
    },
    {
      id: "branding",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center",
      title: "Brand Identity Design",
      description: "Complete brand makeover for a fitness coach including logo, color palette, and social media templates.",
      category: "Creative Designing",
      results: "Complete Rebrand"
    },
    {
      id: "youtube",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop&crop=center",
      title: "Viral YouTube Shorts",
      description: "Created trending YouTube shorts series for a tech reviewer that gained 2M+ views in the first month.",
      category: "Video Editing",
      results: "2M+ Views"
    },
    {
      id: "ecommerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      title: "E-commerce Marketing",
      description: "Digital marketing campaign for an online fashion store resulting in 300% increase in sales.",
      category: "Digital Marketing",
      results: "+300% Sales"
    },
    {
      id: "influencer",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center",
      title: "Influencer Collaboration",
      description: "Managed content creation and posting schedule for a lifestyle influencer with 100K+ followers.",
      category: "Instagram Management",
      results: "50K+ Engagement"
    },
    {
      id: "startup",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center",
      title: "Startup Brand Launch",
      description: "Complete digital presence setup for a tech startup from logo design to social media strategy.",
      category: "Full Service",
      results: "Brand Launch"
    }
  ];

  const stats = [
    { number: "500+", label: "Designs Delivered" },
    { number: "100+", label: "Pages Grown Organically" },
    { number: "50+", label: "Trending Reels Created" },
    { number: "25+", label: "Brands Transformed" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-12">
              Discover the success stories and creative projects that showcase our expertise in digital marketing, design, and brand growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Samples */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our most successful projects and the results we've achieved for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workSamples.map((work, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {work.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {work.results}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <Link 
                    to={`/work/${work.id}`}
                    className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <span className="mr-2">View Details</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
            Join the growing list of successful brands and creators who trust Dream Vista Media with their digital presence.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WorkPage;