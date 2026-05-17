import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Droplets, 
  Trash2, 
  Clock,
  CheckCircle2,
  XCircle,
  ShowerHead,
  Shirt,
  Apple,
  Moon
} from "lucide-react";

const hygieneCategories = [
  {
    icon: Droplets,
    title: "Changing Pads/Products",
    tips: [
      "Change your pad every 4-6 hours, even if it's not fully soaked",
      "Change more frequently on heavy flow days (every 2-3 hours)",
      "Never wear a tampon for more than 8 hours",
      "Always wash your hands before and after changing products",
    ],
  },
  {
    icon: ShowerHead,
    title: "Personal Cleaning",
    tips: [
      "Wash your genital area with plain water or mild, unscented soap",
      "Always clean from front to back to prevent infections",
      "Avoid using scented products, douches, or sprays inside the vagina",
      "Take a bath or shower daily during your period",
    ],
  },
  {
    icon: Trash2,
    title: "Disposal",
    tips: [
      "Wrap used pads in newspaper or the wrapper of the new pad",
      "Never flush pads or tampons down the toilet",
      "Use dustbins with lids for disposal",
      "Wash hands thoroughly after disposing of products",
    ],
  },
  {
    icon: Shirt,
    title: "Clothing & Comfort",
    tips: [
      "Wear clean, cotton underwear for better air circulation",
      "Change underwear at least twice a day during periods",
      "Avoid tight-fitting clothes that may cause discomfort",
      "Keep extra underwear and pads in your bag",
    ],
  },
];

const dosAndDonts = {
  dos: [
    { text: "Change sanitary products regularly", icon: Clock },
    { text: "Keep the genital area clean and dry", icon: Sparkles },
    { text: "Eat nutritious food and stay hydrated", icon: Apple },
    { text: "Get adequate rest and sleep", icon: Moon },
    { text: "Exercise lightly if comfortable", icon: CheckCircle2 },
    { text: "Track your cycle to stay prepared", icon: CheckCircle2 },
    { text: "Carry period supplies in your bag", icon: CheckCircle2 },
    { text: "Talk to a trusted adult if you have concerns", icon: CheckCircle2 },
  ],
  donts: [
    { text: "Use scented products on genital area", icon: XCircle },
    { text: "Wear the same pad all day", icon: XCircle },
    { text: "Skip meals during periods", icon: XCircle },
    { text: "Feel embarrassed about periods", icon: XCircle },
    { text: "Flush pads or tampons down the toilet", icon: XCircle },
    { text: "Use dirty or wet pads", icon: XCircle },
    { text: "Ignore unusual symptoms", icon: XCircle },
    { text: "Believe in period myths", icon: XCircle },
  ],
};

const healthTips = [
  {
    title: "Stay Hydrated",
    description: "Drink plenty of water (8-10 glasses) to reduce bloating and cramps.",
  },
  {
    title: "Eat Well",
    description: "Include iron-rich foods like spinach, dates, and jaggery to replace lost iron.",
  },
  {
    title: "Keep Moving",
    description: "Light exercise like walking or yoga can help reduce cramps and improve mood.",
  },
  {
    title: "Rest When Needed",
    description: "Listen to your body. It's okay to take rest if you're feeling tired.",
  },
  {
    title: "Use Heat",
    description: "A hot water bottle on your lower abdomen can help relieve cramps.",
  },
  {
    title: "Maintain Records",
    description: "Track your cycle to know when to expect your next period.",
  },
];

export default function HygienePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Menstrual Hygiene
            </h1>
            <p className="text-lg text-muted-foreground">
              Good hygiene practices during your period help you stay healthy, 
              comfortable, and confident.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hygiene Matters */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-transparent shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  Why Hygiene Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Maintaining good hygiene during menstruation is essential for your health 
                  and well-being. Poor menstrual hygiene can lead to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bacterial infections and rashes</li>
                  <li>Urinary tract infections (UTIs)</li>
                  <li>Reproductive tract infections</li>
                  <li>Unpleasant odor and discomfort</li>
                </ul>
                <p>
                  By following simple hygiene practices, you can prevent these problems and 
                  go about your daily activities with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hygiene Categories */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Hygiene Practices
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow these guidelines to maintain good menstrual hygiene.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {hygieneCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="font-display text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Do's and Don'ts
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Quick reference guide for menstrual hygiene.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Do's */}
            <Card className="bg-accent/30 border-primary/20">
              <CardHeader>
                <CardTitle className="font-display text-xl text-primary flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Do's
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                      <item.icon className="h-4 w-4 text-primary shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="font-display text-xl text-destructive flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Don'ts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                      <item.icon className="h-4 w-4 text-destructive shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Health Tips During Periods
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple tips to help you feel better during your period.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {healthTips.map((tip) => (
              <div 
                key={tip.title}
                className="p-4 rounded-xl bg-background border border-border hover:shadow-soft transition-shadow"
              >
                <h3 className="font-medium text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
