import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MessageCircle,
  Send,
  Shield,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const helplines = [
  {
    name: "Women Helpline (All India)",
    number: "181",
    description: "Toll-free, 24/7 helpline for women in distress",
    type: "emergency",
  },
  {
    name: "National Commission for Women",
    number: "7827-170-170",
    description: "For complaints and guidance",
    type: "support",
  },
  {
    name: "iCall Psychosocial Helpline",
    number: "9152987821",
    description: "Mental health support and counseling",
    type: "mental-health",
  },
  {
    name: "Vandrevala Foundation",
    number: "1860-2662-345",
    description: "Free mental health support, 24/7",
    type: "mental-health",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Contact & Help
            </h1>
            <p className="text-lg text-muted-foreground">
              Need help or have questions? We're here for you. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-6 bg-destructive/10 border-y border-destructive/20">
        <div className="container">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Emergency?</strong> If you're in immediate danger or need urgent medical help, 
              please call <strong className="text-destructive">112</strong> (Emergency) or 
              <strong className="text-destructive"> 181</strong> (Women Helpline) immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been received. We'll respond to you soon.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Helplines */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Helpline Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {helplines.map((helpline) => (
                    <div 
                      key={helpline.number}
                      className="flex items-start gap-4 p-3 rounded-lg bg-accent/50"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        helpline.type === 'emergency' 
                          ? 'bg-destructive/10' 
                          : 'bg-primary/10'
                      }`}>
                        <Phone className={`h-4 w-4 ${
                          helpline.type === 'emergency' 
                            ? 'text-destructive' 
                            : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{helpline.name}</h4>
                        <p className="text-lg font-bold text-primary">{helpline.number}</p>
                        <p className="text-xs text-muted-foreground">{helpline.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Email Contact */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Email Us</h4>
                      <p className="text-primary">help@periodcare.in</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        We usually respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Note */}
              <Card className="bg-accent/30 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Your Privacy Matters
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        All information shared with us is kept strictly confidential. 
                        We will never share your personal details without your consent. 
                        Feel free to reach out about any concern – no question is too 
                        small or embarrassing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
