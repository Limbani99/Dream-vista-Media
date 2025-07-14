// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, Instagram, Palette, Play, ShoppingCart, Users, Rocket } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Button } from './ui/button';

// const workItems = [
//   {
//     id: 'instagram',
//     icon: Instagram,
//     title: 'Instagram Growth Campaign',
//     subtitle: 'From Likes to Loyalty: Organic Instagram Growth That Converts',
//     brief: 'We don\'t chase followers — we build fanbases. Our Instagram Growth Campaigns blend visual storytelling, trending content, and data-backed strategy to explode your reach and engagement.',
//     highlights: [
//       '10k–100k organic followers in 90 days',
//       'Reels strategy based on trends + niche targeting',
//       'Optimized posting schedule for max reach',
//       'Growth via micro-influencer collaborations'
//     ],
//     details: `Instagram isn't just a platform — it's where brand stories unfold, communities grow, and buying decisions begin. Our Instagram Growth Campaigns are designed to turn your profile into a powerful marketing machine.

// We use data-backed strategies and creative execution to build real engagement, not vanity metrics. Our team dives deep into your brand voice, audience behavior, and content trends to craft an account that stands out — and scales up.

// What We Deliver:
// • Strategic growth planning tailored to your niche
// • Reels that follow current trends while aligning with your message
// • Content calendar with optimized post timing
// • Community engagement and DM outreach strategies
// • Collaborations with micro-influencers to expand reach
// • Monthly performance reports and growth insights

// Results: Clients have seen follower growth of 10K–100K in 90 days, 5x engagement rates, and up to 300% increase in website clicks from Instagram.`
//   },
//   {
//     id: 'branding',
//     icon: Palette,
//     title: 'Brand Identity Design',
//     subtitle: 'More Than a Logo — We Design Brands That Speak',
//     brief: 'Your brand is your story, your vibe, your impact. We craft complete brand identities that go beyond looks — they connect.',
//     highlights: [
//       'Unique logo design & brand mark',
//       'Color palette, typography, and mood board',
//       'Voice & tone guidelines for consistency',
//       'Delivered in a complete, ready-to-use brand kit'
//     ],
//     details: `Your brand identity is more than a design — it's your business's first impression, personality, and promise. At Dream Vista Media, we create iconic brand identities that leave a lasting emotional impact on your audience.

// We go beyond aesthetics to build a cohesive visual and verbal identity. Our branding process is rooted in strategy — uncovering what makes your brand unique and translating it into every visual and verbal detail.

// What We Deliver:
// • Custom logo design (primary + alternate versions)
// • Typography and font pairing that reflects your tone
// • Color palette rooted in psychology and emotion
// • Mood board and inspiration deck
// • Brand voice guide with key phrases and tone samples
// • Complete brand guidelines PDF for consistent use

// Ideal For: Startups, rebrands, and businesses looking to elevate their identity and connect with premium audiences.`
//   },
//   {
//     id: 'youtube',
//     icon: Play,
//     title: 'Viral YouTube Shorts',
//     subtitle: 'Scroll-Stopping Shorts That Go Viral — Fast',
//     brief: 'In the age of short attention spans, YouTube Shorts are the new goldmine. We produce fast-paced, addictive content optimized to trend.',
//     highlights: [
//       'Hook-driven short-form scripting',
//       'High-retention editing & motion graphics',
//       'Hashtag and title optimization',
//       '100K+ views targeted within 30 days'
//     ],
//     details: `Short-form content is dominating YouTube — and we know how to make it work for your brand. We create addictive, algorithm-friendly YouTube Shorts designed to stop the scroll, spark curiosity, and deliver value in under 60 seconds.

// Whether you're a creator, coach, or brand, we help you grow your channel fast with content optimized for YouTube's discovery engine.

// What We Deliver:
// • Hook-based storytelling scripts for high retention
// • Short-form editing with subtitles, sound effects, and jump cuts
// • Thumbnail and title optimization for CTR (Click-Through Rate)
// • Hashtag and keyword research for Shorts SEO
// • Viral-style formatting (memes, reactions, visual humor, emotional hooks)
// • Performance insights on views, retention rate, and conversion

// Results: Clients have achieved 100K–2M+ views per short, gained 5K+ subscribers in a month, and converted viewers into buyers and followers.`
//   },
//   {
//     id: 'ecommerce',
//     icon: ShoppingCart,
//     title: 'E-commerce Marketing',
//     subtitle: 'Clicks to Carts: Digital Marketing That Sells',
//     brief: 'We turn browsers into buyers. Our e-commerce marketing strategies combine high-converting ad creatives, sales funnels, and retargeting to drive real ROI.',
//     highlights: [
//       'Facebook, Instagram & Google Ads',
//       'Conversion-optimized landing pages',
//       'Retargeting, email flows, and upsell funnels',
//       '3x–7x average ROAS (Return on Ad Spend)'
//     ],
//     details: `Selling online takes more than a nice product. You need strategy, storytelling, and smart data. Dream Vista Media's e-commerce marketing system is built to move people from scroll to sale — with seamless campaigns across multiple platforms.

// Whether launching a new product or scaling an existing store, we combine performance marketing and creative strategy to maximize conversions and revenue.

// What We Deliver:
// • Paid ad campaign setup (Facebook, Instagram, Google Shopping)
// • Conversion-focused creative (ads, UGC, product videos)
// • Landing pages with CRO (Conversion Rate Optimization) techniques
// • Abandoned cart flows and email marketing sequences
// • Pixel tracking, analytics setup, and performance reporting
// • A/B testing to continually improve ROAS

// Results: Clients have scaled to 6-figure months, seen 3x–7x ROAS, and improved average order value (AOV) through upsell strategies.`
//   },
//   {
//     id: 'influencer',
//     icon: Users,
//     title: 'Influencer Collaboration',
//     subtitle: 'Creators That Connect — Influencers That Sell',
//     brief: 'We pair brands with the right voices — not just big names, but authentic creators who move the needle.',
//     highlights: [
//       'Micro & macro influencer partnerships',
//       'UGC-style content tailored for your brand',
//       'Campaign briefs, usage rights & scheduling',
//       'Performance reporting with key metrics'
//     ],
//     details: `The right influencers don't just promote — they connect. We handle influencer marketing from end to end, helping brands collaborate with creators who truly resonate with your target audience.

// Our approach blends storytelling, product placement, and authenticity to drive engagement, generate UGC (user-generated content), and create powerful brand association.

// What We Deliver:
// • Influencer discovery and vetting based on your niche
// • Campaign concepts that feel natural, not forced
// • Contract negotiation and usage rights included
// • Briefs with clear messaging, talking points, and call-to-action
// • Influencer tracking dashboard (reach, engagement, sales)
// • Optional whitelisting + paid ads using influencer content

// Best For: DTC brands, product launches, events, and campaigns that need a human touch.`
//   },
//   {
//     id: 'startup',
//     icon: Rocket,
//     title: 'Startup Brand Launch',
//     subtitle: 'From Idea to Impact — We Launch Brands with Power',
//     brief: 'Starting strong matters. We help startups go from zero to unforgettable with full-spectrum brand launch services.',
//     highlights: [
//       'Brand strategy, naming & identity development',
//       'Launch campaign content & rollout plan',
//       'Social media setup & branded templates',
//       'Website design + lead capture tools'
//     ],
//     details: `We specialize in helping startups make a bold first impression. Your launch isn't just a date — it's a movement. At Dream Vista Media, we guide you through every stage of launching your brand, from the very first spark to your digital debut.

// We combine branding, strategy, content creation, and digital marketing into one streamlined launch system built to attract attention and generate traction.

// What We Deliver:
// • Brand strategy + market positioning
// • Naming, tagline, and brand story development
// • Visual identity (logo, colors, typography, iconography)
// • Pre-launch social media strategy and content
// • Website design with lead capture, forms, and integrations
// • Launch campaign (social ads, influencer buzz, email rollout)

// Results: Our startups have raised capital, gone viral, and landed features in top-tier publications — all from a memorable, well-planned launch.`
//   }
// ];

// const Work = () => {
//   const [expandedItem, setExpandedItem] = useState<string | null>(null);

//   const toggleExpand = (itemId: string) => {
//     setExpandedItem(expandedItem === itemId ? null : itemId);
//   };

//   return (
//     <section id="work" className="py-24 bg-gradient-to-br from-background to-secondary/20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Our Work
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             ✨ 500+ Designs Delivered • 📈 100+ Pages Grown Organically • 🔥 Trending Reels for Influencers • 💼 Projects for Startups, Coaches & Artists
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {workItems.map((item) => {
//             const Icon = item.icon;
//             const isExpanded = expandedItem === item.id;
            
//             return (
//               <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <CardHeader>
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="p-2 rounded-lg bg-primary/10">
//                       <Icon className="h-6 w-6 text-primary" />
//                     </div>
//                     <span className="text-2xl">🔹</span>
//                   </div>
//                   <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
//                   <CardDescription className="font-medium text-foreground/80">
//                     {item.subtitle}
//                   </CardDescription>
//                 </CardHeader>
                
//                 <CardContent className="space-y-4">
//                   <p className="text-muted-foreground">{item.brief}</p>
                  
//                   <div className="space-y-2">
//                     <h4 className="font-semibold text-sm">Highlights:</h4>
//                     <ul className="space-y-1 text-sm text-muted-foreground">
//                       {item.highlights.map((highlight, index) => (
//                         <li key={index} className="flex items-start gap-2">
//                           <span className="text-primary mt-1">✅</span>
//                           {highlight}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {isExpanded && (
//                     <div className="mt-6 pt-6 border-t border-border animate-fade-in">
//                       <div className="prose prose-sm max-w-none text-muted-foreground">
//                         {item.details.split('\n').map((paragraph, index) => (
//                           <p key={index} className="mb-3 whitespace-pre-line">
//                             {paragraph}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <Button
//                     onClick={() => toggleExpand(item.id)}
//                     variant="outline"
//                     className="w-full mt-4 group-hover:border-primary group-hover:text-primary transition-colors"
//                   >
//                     {isExpanded ? (
//                       <>
//                         Hide Details
//                         <ChevronUp className="ml-2 h-4 w-4" />
//                       </>
//                     ) : (
//                       <>
//                         View Details
//                         <ChevronDown className="ml-2 h-4 w-4" />
//                       </>
//                     )}
//                   </Button>
                  
//                   <Link to={`/work/${item.id}`}>
//                     <Button className="w-full mt-2">
//                       View Full Details
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;


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
      {/* <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-12">
              Discover the success stories and creative projects that showcase our expertise in digital marketing, design, and brand growth.
            </p>
            
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
      </section> */}

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
      
      {/* <Footer /> */}
    </div>
  );
};

export default WorkPage;