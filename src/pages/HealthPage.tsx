import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Stethoscope,
  ThermometerSun,
  Pill,
  HeartPulse,
  BedDouble,
  Salad,
  Droplet,
  Activity,
  MessageSquareWarning
} from "lucide-react";

const warningSignsToSeeDoctor = [
  {
    sign: "Very heavy bleeding",
    description: "Soaking through a pad or tampon every hour for several hours",
    urgent: true,
  },
  {
    sign: "Periods lasting more than 7 days",
    description: "Prolonged bleeding that doesn't stop",
    urgent: false,
  },
  {
    sign: "Severe pain not relieved by painkillers",
    description: "Cramps that interfere with daily activities even after taking medication",
    urgent: true,
  },
  {
    sign: "Missed periods",
    description: "No period for 3 months or more (if sexually active, take a pregnancy test first)",
    urgent: false,
  },
  {
    sign: "Bleeding between periods",
    description: "Unexpected spotting or bleeding outside your regular period",
    urgent: false,
  },
  {
    sign: "Unusual discharge",
    description: "Foul-smelling, green, or grey discharge during or after periods",
    urgent: true,
  },
  {
    sign: "Fever during periods",
    description: "High temperature especially with tampon use (possible Toxic Shock Syndrome)",
    urgent: true,
  },
  {
    sign: "Dizziness or fainting",
    description: "Feeling faint, dizzy, or extremely weak during periods",
    urgent: true,
  },
];

const infectionSigns = [
  {
    icon: ThermometerSun,
    sign: "Fever and chills",
    description: "Body temperature above 100°F (38°C)",
  },
  {
    icon: Droplet,
    sign: "Unusual discharge",
    description: "Discharge that is thick, cottage cheese-like, green, grey, or foul-smelling",
  },
  {
    icon: Activity,
    sign: "Burning sensation",
    description: "Burning while urinating or in the genital area",
  },
  {
    icon: AlertTriangle,
    sign: "Itching or redness",
    description: "Persistent itching, redness, or swelling in the vaginal area",
  },
  {
    icon: HeartPulse,
    sign: "Lower abdominal pain",
    description: "Pain that's different from regular cramps",
  },
];

const pmsTips = [
  {
    icon: Salad,
    title: "Eat Well",
    tips: [
      "Eat small, frequent meals",
      "Reduce salt to minimize bloating",
      "Avoid caffeine and alcohol",
      "Include calcium-rich foods",
      "Eat iron-rich foods like spinach and dates",
    ],
  },
  {
    icon: Activity,
    title: "Stay Active",
    tips: [
      "Light exercise like walking or yoga",
      "Stretching to reduce muscle tension",
      "Deep breathing exercises",
      "Avoid strenuous activities if uncomfortable",
    ],
  },
  {
    icon: BedDouble,
    title: "Rest Well",
    tips: [
      "Get 7-9 hours of sleep",
      "Maintain a regular sleep schedule",
      "Use a warm compress for cramps",
      "Take short rest breaks during the day",
    ],
  },
  {
    icon: Pill,
    title: "Pain Relief",
    tips: [
      "Over-the-counter pain relievers (ibuprofen, paracetamol)",
      "Hot water bottle on lower abdomen",
      "Warm bath for muscle relaxation",
      "Gentle massage of lower back",
      "Consult a doctor for severe pain",
    ],
  },
];

const selfCareTips = [
  "Practice gentle yoga or stretching",
  "Use a heating pad for cramps",
  "Stay hydrated with water and herbal teas",
  "Get enough rest and sleep",
  "Wear comfortable, loose clothing",
  "Track your cycle to be prepared",
  "Talk to someone you trust about how you feel",
  "Avoid skipping meals",
  "Take short walks if possible",
  "Practice deep breathing when stressed",
];

export default function HealthPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Health & Safety
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn when to seek medical help and how to manage period symptoms effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              <Stethoscope className="h-4 w-4" />
              Important
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              When to See a Doctor
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              While periods can be uncomfortable, some symptoms need medical attention. 
              Don't hesitate to consult a doctor if you experience any of these.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {warningSignsToSeeDoctor.map((item) => (
              <Card 
                key={item.sign}
                className={`${item.urgent ? 'border-destructive/30 bg-destructive/5' : ''}`}
              >
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      item.urgent ? 'bg-destructive/10' : 'bg-primary/10'
                    }`}>
                      <AlertTriangle className={`h-4 w-4 ${item.urgent ? 'text-destructive' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1 flex items-center gap-2">
                        {item.sign}
                        {item.urgent && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
                            Urgent
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <Card className="bg-accent/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MessageSquareWarning className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Remember:</strong> It's always okay to ask for help. 
                    If something doesn't feel right, trust your body and consult a healthcare professional. 
                    You can talk to your mother, school nurse, or visit a lady doctor (gynecologist).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signs of Infection */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Signs of Infection
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Poor hygiene or using products incorrectly can sometimes lead to infections. 
              Watch out for these signs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {infectionSigns.map((item) => (
              <Card key={item.sign}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.sign}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PMS and Cramps Management */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Managing PMS and Cramps
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              PMS (Premenstrual Syndrome) symptoms and cramps are common. 
              Here are ways to feel better.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {pmsTips.map((category) => (
              <Card key={category.title}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="font-display text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Care Tips */}
      <section className="py-12 md:py-16 bg-gradient-accent">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Self-Care During Periods
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Taking care of yourself during your period can make a big difference in how you feel.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-3 sm:grid-cols-2">
              {selfCareTips.map((tip, index) => (
                <div 
                  key={tip}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-primary">✓</span>
                  </div>
                  <span className="text-sm text-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
