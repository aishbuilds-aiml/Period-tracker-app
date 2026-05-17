import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplets, 
  Calendar, 
  Timer, 
  Heart,
  Moon,
  Sun,
  Sparkles,
  Flower2
} from "lucide-react";

const cyclePhases = [
  {
    icon: Droplets,
    title: "Menstrual Phase",
    days: "Days 1-5",
    description: "This is when your period happens. The uterus sheds its lining, causing bleeding that typically lasts 3-7 days.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    symptoms: ["Cramps", "Fatigue", "Mood changes", "Lower back pain"],
  },
  {
    icon: Flower2,
    title: "Follicular Phase",
    days: "Days 1-13",
    description: "Starting from day 1, your body prepares an egg for release. Estrogen levels rise, and you may feel more energetic.",
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
    symptoms: ["Increased energy", "Better mood", "Clearer skin", "Higher confidence"],
  },
  {
    icon: Sun,
    title: "Ovulation Phase",
    days: "Day 14 (approximately)",
    description: "An egg is released from the ovary. This is the most fertile time of your cycle and lasts about 24-48 hours.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    symptoms: ["Mild pelvic pain", "Light spotting", "Increased discharge", "Higher body temperature"],
  },
  {
    icon: Moon,
    title: "Luteal Phase",
    days: "Days 15-28",
    description: "After ovulation, your body prepares for possible pregnancy. If pregnancy doesn't occur, the cycle begins again.",
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
    symptoms: ["PMS symptoms", "Breast tenderness", "Bloating", "Food cravings"],
  },
];

const normalPeriodInfo = [
  {
    title: "Average Cycle Length",
    value: "28 days",
    note: "Normal range: 21-35 days",
    icon: Calendar,
  },
  {
    title: "Period Duration",
    value: "3-7 days",
    note: "This can vary from person to person",
    icon: Timer,
  },
  {
    title: "Blood Loss",
    value: "30-80 ml",
    note: "About 2-5 tablespoons total",
    icon: Droplets,
  },
  {
    title: "Age of First Period",
    value: "10-16 years",
    note: "Usually around 12 years in India",
    icon: Heart,
  },
];

const commonSymptoms = [
  "Abdominal cramps or pain",
  "Lower back pain",
  "Breast tenderness or swelling",
  "Headaches",
  "Fatigue and tiredness",
  "Mood swings",
  "Bloating",
  "Food cravings",
  "Acne breakouts",
  "Trouble sleeping",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About Menstruation
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding your body is the first step to taking care of it. 
              Let's learn about menstruation in simple terms.
            </p>
          </div>
        </div>
      </section>

      {/* What is Menstruation */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-transparent shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Droplets className="h-5 w-5 text-primary" />
                  </div>
                  What is Menstruation?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Menstruation (commonly called a "period")</strong> is 
                  a natural biological process that happens to every healthy woman and girl. It's a sign 
                  that your body is healthy and working properly.
                </p>
                <p>
                  Every month, your uterus (womb) prepares a soft lining of tissue and blood to potentially 
                  nurture a baby. If pregnancy doesn't happen, this lining is no longer needed, so your 
                  body releases it through the vagina. This is your period.
                </p>
                <p>
                  Most girls get their first period between ages <strong className="text-foreground">10 and 16</strong>, 
                  with the average being around 12 years. This first period is called <strong className="text-foreground">menarche</strong>. 
                  Periods continue until <strong className="text-foreground">menopause</strong>, which usually happens between ages 45-55.
                </p>
                <div className="bg-accent/50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <Sparkles className="h-4 w-4 inline mr-2 text-primary" />
                    <strong className="text-foreground">Remember:</strong> Getting your period is completely normal 
                    and nothing to be ashamed of. It's a sign that your body is healthy!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Normal Period Info */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              What's Normal?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every person's body is unique, but here are some general guidelines.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {normalPeriodInfo.map((info) => (
              <Card key={info.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">{info.title}</h3>
                  <p className="font-display text-2xl font-bold text-primary mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground">{info.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menstrual Cycle Phases */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              The Menstrual Cycle Explained
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your menstrual cycle is divided into four phases. Understanding these helps 
              you know what to expect throughout the month.
            </p>
          </div>
          
          {/* Visual Timeline */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative">
              <div className="h-2 bg-gradient-accent rounded-full" />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">Day 1</span>
                <span className="text-xs text-muted-foreground">Day 7</span>
                <span className="text-xs text-muted-foreground">Day 14</span>
                <span className="text-xs text-muted-foreground">Day 21</span>
                <span className="text-xs text-muted-foreground">Day 28</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cyclePhases.map((phase) => (
              <Card key={phase.title} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${phase.bgColor} flex items-center justify-center shrink-0`}>
                      <phase.icon className={`h-6 w-6 ${phase.color}`} />
                    </div>
                    <div>
                      <CardTitle className="font-display text-lg">{phase.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{phase.days}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">Common experiences:</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.symptoms.map((symptom) => (
                        <span 
                          key={symptom}
                          className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Common Period Symptoms
              </h2>
              <p className="text-muted-foreground">
                It's normal to experience some of these symptoms before or during your period.
              </p>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {commonSymptoms.map((symptom, index) => (
                <div 
                  key={symptom}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                  </div>
                  <span className="text-sm text-foreground">{symptom}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-accent/50 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> If symptoms are severe or 
                interfere with daily life, consult a doctor. It's always okay to seek help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
