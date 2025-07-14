import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Instagram, Palette, Play, ShoppingCart, Users, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const workDetails = {
  'instagram': {
    icon: Instagram,
    title: 'Instagram Growth Campaign',
    subtitle: 'From Likes to Loyalty: Organic Instagram Growth That Converts',
    brief: 'We don\'t chase followers — we build fanbases. Our Instagram Growth Campaigns blend visual storytelling, trending content, and data-backed strategy to explode your reach and engagement.',
    highlights: [
      '10k–100k organic followers in 90 days',
      'Reels strategy based on trends + niche targeting',
      'Optimized posting schedule for max reach',
      'Growth via micro-influencer collaborations'
    ],
    details: `Instagram isn't just a platform — it's where brand stories unfold, communities grow, and buying decisions begin. Our Instagram Growth Campaigns are designed to turn your profile into a powerful marketing machine.

We use data-backed strategies and creative execution to build real engagement, not vanity metrics. Our team dives deep into your brand voice, audience behavior, and content trends to craft an account that stands out — and scales up.

What We Deliver:
• Strategic growth planning tailored to your niche
• Reels that follow current trends while aligning with your message
• Content calendar with optimized post timing
• Community engagement and DM outreach strategies
• Collaborations with micro-influencers to expand reach
• Monthly performance reports and growth insights

Results: Clients have seen follower growth of 10K–100K in 90 days, 5x engagement rates, and up to 300% increase in website clicks from Instagram.`
  },
  'branding': {
    icon: Palette,
    title: 'Brand Identity Design',
    subtitle: 'More Than a Logo — We Design Brands That Speak',
    brief: 'Your brand is your story, your vibe, your impact. We craft complete brand identities that go beyond looks — they connect.',
    highlights: [
      'Unique logo design & brand mark',
      'Color palette, typography, and mood board',
      'Voice & tone guidelines for consistency',
      'Delivered in a complete, ready-to-use brand kit'
    ],
    details: `Your brand identity is more than a design — it's your business's first impression, personality, and promise. At Dream Vista Media, we create iconic brand identities that leave a lasting emotional impact on your audience.

We go beyond aesthetics to build a cohesive visual and verbal identity. Our branding process is rooted in strategy — uncovering what makes your brand unique and translating it into every visual and verbal detail.

What We Deliver:
• Custom logo design (primary + alternate versions)
• Typography and font pairing that reflects your tone
• Color palette rooted in psychology and emotion
• Mood board and inspiration deck
• Brand voice guide with key phrases and tone samples
• Complete brand guidelines PDF for consistent use

Ideal For: Startups, rebrands, and businesses looking to elevate their identity and connect with premium audiences.`
  },
  'youtube': {
    icon: Play,
    title: 'Viral YouTube Shorts',
    subtitle: 'Scroll-Stopping Shorts That Go Viral — Fast',
    brief: 'In the age of short attention spans, YouTube Shorts are the new goldmine. We produce fast-paced, addictive content optimized to trend.',
    highlights: [
      'Hook-driven short-form scripting',
      'High-retention editing & motion graphics',
      'Hashtag and title optimization',
      '100K+ views targeted within 30 days'
    ],
    details: `Short-form content is dominating YouTube — and we know how to make it work for your brand. We create addictive, algorithm-friendly YouTube Shorts designed to stop the scroll, spark curiosity, and deliver value in under 60 seconds.

Whether you're a creator, coach, or brand, we help you grow your channel fast with content optimized for YouTube's discovery engine.

What We Deliver:
• Hook-based storytelling scripts for high retention
• Short-form editing with subtitles, sound effects, and jump cuts
• Thumbnail and title optimization for CTR (Click-Through Rate)
• Hashtag and keyword research for Shorts SEO
• Viral-style formatting (memes, reactions, visual humor, emotional hooks)
• Performance insights on views, retention rate, and conversion

Results: Clients have achieved 100K–2M+ views per short, gained 5K+ subscribers in a month, and converted viewers into buyers and followers.`
  },
  'ecommerce': {
    icon: ShoppingCart,
    title: 'E-commerce Marketing',
    subtitle: 'Clicks to Carts: Digital Marketing That Sells',
    brief: 'We turn browsers into buyers. Our e-commerce marketing strategies combine high-converting ad creatives, sales funnels, and retargeting to drive real ROI.',
    highlights: [
      'Facebook, Instagram & Google Ads',
      'Conversion-optimized landing pages',
      'Retargeting, email flows, and upsell funnels',
      '3x–7x average ROAS (Return on Ad Spend)'
    ],
    details: `Selling online takes more than a nice product. You need strategy, storytelling, and smart data. Dream Vista Media's e-commerce marketing system is built to move people from scroll to sale — with seamless campaigns across multiple platforms.

Whether launching a new product or scaling an existing store, we combine performance marketing and creative strategy to maximize conversions and revenue.

What We Deliver:
• Paid ad campaign setup (Facebook, Instagram, Google Shopping)
• Conversion-focused creative (ads, UGC, product videos)
• Landing pages with CRO (Conversion Rate Optimization) techniques
• Abandoned cart flows and email marketing sequences
• Pixel tracking, analytics setup, and performance reporting
• A/B testing to continually improve ROAS

Results: Clients have scaled to 6-figure months, seen 3x–7x ROAS, and improved average order value (AOV) through upsell strategies.`
  },
  'influencer': {
    icon: Users,
    title: 'Influencer Collaboration',
    subtitle: 'Creators That Connect — Influencers That Sell',
    brief: 'We pair brands with the right voices — not just big names, but authentic creators who move the needle.',
    highlights: [
      'Micro & macro influencer partnerships',
      'UGC-style content tailored for your brand',
      'Campaign briefs, usage rights & scheduling',
      'Performance reporting with key metrics'
    ],
    details: `The right influencers don't just promote — they connect. We handle influencer marketing from end to end, helping brands collaborate with creators who truly resonate with your target audience.

Our approach blends storytelling, product placement, and authenticity to drive engagement, generate UGC (user-generated content), and create powerful brand association.

What We Deliver:
• Influencer discovery and vetting based on your niche
• Campaign concepts that feel natural, not forced
• Contract negotiation and usage rights included
• Briefs with clear messaging, talking points, and call-to-action
• Influencer tracking dashboard (reach, engagement, sales)
• Optional whitelisting + paid ads using influencer content

Best For: DTC brands, product launches, events, and campaigns that need a human touch.`
  },
  'startup': {
    icon: Rocket,
    title: 'Startup Brand Launch',
    subtitle: 'From Idea to Impact — We Launch Brands with Power',
    brief: 'Starting strong matters. We help startups go from zero to unforgettable with full-spectrum brand launch services.',
    highlights: [
      'Brand strategy, naming & identity development',
      'Launch campaign content & rollout plan',
      'Social media setup & branded templates',
      'Website design + lead capture tools'
    ],
    details: `We specialize in helping startups make a bold first impression. Your launch isn't just a date — it's a movement. At Dream Vista Media, we guide you through every stage of launching your brand, from the very first spark to your digital debut.

We combine branding, strategy, content creation, and digital marketing into one streamlined launch system built to attract attention and generate traction.

What We Deliver:
• Brand strategy + market positioning
• Naming, tagline, and brand story development
• Visual identity (logo, colors, typography, iconography)
• Pre-launch social media strategy and content
• Website design with lead capture, forms, and integrations
• Launch campaign (social ads, influencer buzz, email rollout)

Results: Our startups have raised capital, gone viral, and landed features in top-tier publications — all from a memorable, well-planned launch.`
  }
};

const WorkDetailPage = () => {
  const { id } = useParams();
  const work = workDetails[id as keyof typeof workDetails];

  if (!work) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Header />
        <div className="pt-24 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Work not found</h1>
          <Link to="/work">
            <Button>Back to Our Work</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = work.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />
      
      <div className="pt-24 pb-16 container mx-auto px-4">
        <div className="mb-8">
          <Link to="/work" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Back to Our Work
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="pb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-3xl">🔹</span>
            </div>
            <CardTitle className="text-3xl font-bold mb-4">{work.title}</CardTitle>
            <CardDescription className="text-xl font-medium text-foreground/80">
              {work.subtitle}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{work.brief}</p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights:</h3>
              <ul className="space-y-3">
                {work.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <span className="text-primary mt-1 text-xl">✅</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {work.details.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 whitespace-pre-line leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center">
              <Link to="/contact">
                <Button size="lg" className="px-8">
                  Get Started with This Service
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetailPage;