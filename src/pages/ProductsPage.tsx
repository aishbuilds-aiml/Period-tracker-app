import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  CheckCircle2, 
  XCircle,
  Leaf,
  Clock,
  IndianRupee,
  Droplets
} from "lucide-react";

const products = [
  {
    name: "Sanitary Pads",
    description: "The most commonly used menstrual product in India. Pads are worn inside underwear and absorb menstrual blood.",
    howToUse: [
      "Remove the backing strip to expose the adhesive",
      "Place the pad in the center of your underwear with the sticky side down",
      "If it has wings, wrap them around the sides of your underwear",
      "Change every 4-6 hours or when needed",
    ],
    pros: [
      "Easy to use, especially for beginners",
      "Widely available in India",
      "No insertion required",
      "Available in various sizes and absorbencies",
      "Affordable options available",
    ],
    cons: [
      "Can feel bulky",
      "May cause rashes if not changed regularly",
      "Not suitable for swimming",
      "Creates waste (unless using cloth pads)",
      "May shift or bunch up",
    ],
    cost: "₹5-25 per pad",
    duration: "4-6 hours",
    environmental: "Regular pads are not biodegradable",
    image: "🩹",
  },
  {
    name: "Tampons",
    description: "A cylinder-shaped product inserted into the vagina to absorb menstrual blood internally.",
    howToUse: [
      "Wash your hands thoroughly",
      "Unwrap the tampon and hold it by the applicator (if present)",
      "Insert the tampon into the vagina at a slight upward angle",
      "Push the plunger to release the tampon and remove the applicator",
      "Leave the string hanging outside for easy removal",
    ],
    pros: [
      "Can be worn while swimming",
      "Less visible under clothing",
      "More freedom of movement",
      "Compact and easy to carry",
      "No feeling of wetness",
    ],
    cons: [
      "Requires insertion (learning curve)",
      "Risk of Toxic Shock Syndrome if left too long",
      "May cause dryness",
      "Less commonly available in rural India",
      "More expensive than pads",
    ],
    cost: "₹10-40 per tampon",
    duration: "4-8 hours (max)",
    environmental: "Most tampons are not biodegradable",
    image: "🧴",
  },
  {
    name: "Menstrual Cups",
    description: "A reusable, flexible cup made of medical-grade silicone that is inserted into the vagina to collect menstrual blood.",
    howToUse: [
      "Wash your hands and sterilize the cup before first use",
      "Fold the cup (C-fold or punch-down fold)",
      "Insert the folded cup into your vagina",
      "Let it pop open and form a seal",
      "To remove: pinch the base to release the seal and pull out",
      "Empty, rinse, and reinsert",
    ],
    pros: [
      "Reusable for up to 10 years",
      "Eco-friendly and cost-effective long-term",
      "Can be worn for up to 12 hours",
      "Safe for swimming and sports",
      "No chemicals or fragrances",
    ],
    cons: [
      "Learning curve for insertion and removal",
      "Higher upfront cost",
      "Requires cleaning and sterilization",
      "May not be suitable for those uncomfortable with insertion",
      "Need access to clean water for rinsing",
    ],
    cost: "₹300-800 (one-time, lasts years)",
    duration: "Up to 12 hours",
    environmental: "Highly eco-friendly - reusable for years",
    image: "🥛",
  },
];

const comparisonData = [
  { feature: "Ease of Use", pads: "⭐⭐⭐⭐⭐", tampons: "⭐⭐⭐", cups: "⭐⭐" },
  { feature: "Comfort", pads: "⭐⭐⭐", tampons: "⭐⭐⭐⭐", cups: "⭐⭐⭐⭐⭐" },
  { feature: "Swimming", pads: "❌", tampons: "✅", cups: "✅" },
  { feature: "Eco-Friendly", pads: "⭐⭐", tampons: "⭐⭐", cups: "⭐⭐⭐⭐⭐" },
  { feature: "Long-term Cost", pads: "₹₹₹", tampons: "₹₹₹₹", cups: "₹" },
  { feature: "Availability", pads: "⭐⭐⭐⭐⭐", tampons: "⭐⭐⭐", cups: "⭐⭐⭐" },
  { feature: "Duration", pads: "4-6 hrs", tampons: "4-8 hrs", cups: "Up to 12 hrs" },
];

export default function ProductsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Menstrual Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn about different menstrual products and choose what works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing the Right Product */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Choosing the Right Product
            </h2>
            <p className="text-muted-foreground">
              There's no one-size-fits-all solution. The best product depends on your 
              comfort level, lifestyle, flow, and personal preferences. Let's explore your options.
            </p>
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="space-y-8">
            {products.map((product, index) => (
              <Card key={product.name} className="overflow-hidden">
                <CardHeader className="bg-gradient-card">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                      {product.image}
                    </div>
                    <div>
                      <CardTitle className="font-display text-2xl">{product.name}</CardTitle>
                      <CardDescription className="mt-1">{product.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* How to Use */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-primary" />
                        How to Use
                      </h4>
                      <ol className="space-y-2">
                        {product.howToUse.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-medium text-primary">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Pros */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {product.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-1" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-destructive" />
                          Cons
                        </h4>
                        <ul className="space-y-2">
                          {product.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <XCircle className="h-3 w-3 text-destructive shrink-0 mt-1" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                    <div className="text-center">
                      <IndianRupee className="h-4 w-4 mx-auto text-primary mb-1" />
                      <p className="text-xs text-muted-foreground mb-1">Cost</p>
                      <p className="text-sm font-medium text-foreground">{product.cost}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="h-4 w-4 mx-auto text-primary mb-1" />
                      <p className="text-xs text-muted-foreground mb-1">Duration</p>
                      <p className="text-sm font-medium text-foreground">{product.duration}</p>
                    </div>
                    <div className="text-center">
                      <Leaf className="h-4 w-4 mx-auto text-primary mb-1" />
                      <p className="text-xs text-muted-foreground mb-1">Environment</p>
                      <p className="text-sm font-medium text-foreground">{product.environmental}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quick Comparison
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Compare all products at a glance to find what suits you best.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead className="text-center">Pads</TableHead>
                      <TableHead className="text-center">Tampons</TableHead>
                      <TableHead className="text-center">Cups</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">{row.pads}</TableCell>
                        <TableCell className="text-center">{row.tampons}</TableCell>
                        <TableCell className="text-center">{row.cups}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Note */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-accent/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Think About the Environment
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      A single person uses about 11,000-16,000 disposable menstrual products in their lifetime. 
                      Consider eco-friendly alternatives like menstrual cups or cloth pads to reduce 
                      your environmental footprint while also saving money in the long run.
                    </p>
                    <p className="text-sm text-foreground">
                      Small changes can make a big difference! 🌍
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
