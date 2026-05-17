import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Calendar,
  ArrowRight,
  Droplets,
  MessageCircle
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Learn About Menstruation",
    description: "Understand your body and the menstrual cycle in simple, easy-to-understand language.",
    href: "/about",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Hygiene Tips",
    description: "Essential hygiene practices to stay healthy and comfortable during your period.",
    href: "/hygiene",
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Myths vs Facts",
    description: "Break the taboos! Learn the truth behind common myths about menstruation.",
    href: "/myths",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Droplets,
    title: "Menstrual Products",
    description: "Compare pads, tampons, and menstrual cups to find what works best for you.",
    href: "/products",
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
  },
  {
    icon: HelpCircle,
    title: "Health & Safety",
    description: "Know when to see a doctor and how to manage period symptoms effectively.",
    href: "/health",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "FAQ",
    description: "Answers to commonly asked questions about periods and menstrual health.",
    href: "/faq",
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
  },
];

const quotes = [
  {
    text: "Menstruation is not a weakness, it's a sign of strength and health.",
    author: "Dr. Anita Sharma",
  },
  {
    text: "When we educate girls about their bodies, we empower them for life.",
    author: "Women's Health Initiative",
  },
  {
    text: "Period positivity starts with knowledge and open conversations.",
    author: "Menstrual Health Alliance",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Heart className="h-4 w-4" />
              Welcome to PeriodCare
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Guide to{" "}
              <span className="text-gradient">Menstrual Health</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A safe space to learn about menstruation, break myths, and embrace 
              your body with confidence. Knowledge is power, and we're here to empower you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/about">
                <Button size="lg" className="rounded-full gap-2">
                  <BookOpen className="h-4 w-4" />
                  Learn More
                </Button>
              </Link>
              <Link to="/myths">
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Myths vs Facts
                </Button>
              </Link>
              <Link to="/tracker">
                <Button size="lg" variant="secondary" className="rounded-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Track Your Cycle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Why This Website?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In India, menstruation is often surrounded by silence, myths, and stigma. 
              Many young girls lack access to reliable information about their own bodies. 
              This website aims to bridge that gap by providing accurate, culturally-sensitive, 
              and easy-to-understand information about menstrual health.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Explore Topics
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Navigate through different sections to learn about various aspects of menstrual health.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.href} to={feature.href}>
                <Card className="h-full hover:shadow-card transition-all duration-300 group cursor-pointer border-transparent hover:border-primary/20">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="font-display text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="flex items-center gap-1 mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Period Tracker CTA */}
      <section className="py-16 bg-gradient-accent">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center mx-auto">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Track Your Period
            </h2>
            <p className="text-muted-foreground">
              Use our simple period tracker to predict your next period and understand your cycle better. 
              No sign-up required – just enter your details and get instant results.
            </p>
            <Link to="/tracker">
              <Button size="lg" className="rounded-full gap-2">
                <Calendar className="h-4 w-4" />
                Try Period Tracker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Words of Encouragement
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {quotes.map((quote, index) => (
              <Card key={index} className="bg-gradient-card border-transparent">
                <CardContent className="pt-6">
                  <blockquote className="space-y-4">
                    <p className="text-foreground italic leading-relaxed">
                      "{quote.text}"
                    </p>
                    <footer className="text-sm text-muted-foreground">
                      — {quote.author}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Have Questions?
            </h2>
            <p className="text-muted-foreground">
              We're here to help. Check our FAQ section or reach out to us directly. 
              Remember, no question is too small when it comes to your health.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/faq">
                <Button variant="outline" className="rounded-full gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Browse FAQ
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="rounded-full gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
