import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  EyeOff,
  Share2,
  XCircle,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface MythFact {
  id: number;
  myth: string;
  fact: string;
  category: string;
}

const mythsAndFacts: MythFact[] = [
  {
    id: 1,
    myth: "Women on their period should not enter the kitchen or touch food",
    fact: "Menstruation doesn't make food impure. Women can cook and touch any food during their period. There is absolutely no scientific basis for this belief.",
    category: "Cultural",
  },
  {
    id: 2,
    myth: "You should not exercise or do physical activities during periods",
    fact: "Light exercise like walking, yoga, and stretching can actually help reduce cramps and improve mood by releasing endorphins. Listen to your body and do what feels comfortable.",
    category: "Health",
  },
  {
    id: 3,
    myth: "You cannot take a bath or shower during your period",
    fact: "Bathing is not only safe but recommended during periods. It helps maintain hygiene and can provide relief from cramps. Warm water can help soothe menstrual pain.",
    category: "Hygiene",
  },
  {
    id: 4,
    myth: "Periods are dirty or impure",
    fact: "Menstrual blood is not dirty or impure. It's a natural mix of blood, tissue, and uterine lining. Menstruation is a sign of a healthy reproductive system.",
    category: "Cultural",
  },
  {
    id: 5,
    myth: "You should not wash your hair during periods",
    fact: "There is no medical reason to avoid washing hair during periods. In fact, maintaining personal hygiene helps you feel fresh and comfortable.",
    category: "Hygiene",
  },
  {
    id: 6,
    myth: "You cannot get pregnant during your period",
    fact: "While less likely, pregnancy can occur during menstruation, especially for those with shorter cycles. Sperm can survive for up to 5 days in the body.",
    category: "Health",
  },
  {
    id: 7,
    myth: "Tampons can get lost inside your body",
    fact: "Tampons cannot get lost inside your body. The cervix at the top of the vagina is too small for a tampon to pass through. If you can't find the string, relax and gently feel for it.",
    category: "Products",
  },
  {
    id: 8,
    myth: "PMS (premenstrual syndrome) is just an excuse",
    fact: "PMS is a real medical condition caused by hormonal changes. Symptoms like mood swings, cramps, and fatigue are genuine and affect many women differently.",
    category: "Health",
  },
  {
    id: 9,
    myth: "Menstrual blood attracts sharks and wild animals",
    fact: "This is completely false. There's no evidence that menstrual blood attracts any animals. You can safely enjoy outdoor activities during your period.",
    category: "Cultural",
  },
  {
    id: 10,
    myth: "You should not visit temples or religious places during periods",
    fact: "Menstruation is a natural biological process and has no impact on one's spiritual purity. Many progressive religious leaders now encourage women to visit temples during periods.",
    category: "Cultural",
  },
  {
    id: 11,
    myth: "Using pads or tampons can break the hymen",
    fact: "The hymen is a flexible tissue that can stretch. Using pads doesn't affect it, and tampons, when used correctly, rarely cause any changes to the hymen.",
    category: "Products",
  },
  {
    id: 12,
    myth: "You should avoid cold foods and drinks during periods",
    fact: "There's no scientific evidence that cold foods affect menstruation. Eat what makes you feel comfortable. Some find warm foods soothing, while others prefer cold drinks.",
    category: "Health",
  },
];

const categories = ["All", "Cultural", "Health", "Hygiene", "Products"];

export default function MythsPage() {
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleReveal = (id: number) => {
    const newRevealed = new Set(revealedCards);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealedCards(newRevealed);
  };

  const filteredMyths = selectedCategory === "All" 
    ? mythsAndFacts 
    : mythsAndFacts.filter(item => item.category === selectedCategory);

  const shareOnWhatsApp = (item: MythFact) => {
    const text = `🚫 MYTH: ${item.myth}\n\n✅ FACT: ${item.fact}\n\n- Learn more at PeriodCare`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Myths vs Facts
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's break the taboos! Click on each card to reveal the truth 
              behind common menstrual myths.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Myths Cards */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMyths.map((item) => {
              const isRevealed = revealedCards.has(item.id);
              
              return (
                <Card 
                  key={item.id}
                  className={`overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-card ${
                    isRevealed ? 'bg-accent/30 border-primary/30' : 'bg-background'
                  }`}
                  onClick={() => toggleReveal(item.id)}
                >
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                        {item.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleReveal(item.id);
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {isRevealed ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Myth */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-destructive uppercase tracking-wide">
                          Myth
                        </span>
                      </div>
                      <p className="text-foreground font-medium leading-relaxed">
                        {item.myth}
                      </p>
                    </div>

                    {/* Fact (revealed) */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ${
                        isRevealed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-start gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            Fact
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.fact}
                        </p>
                        
                        {/* Share Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            shareOnWhatsApp(item);
                          }}
                        >
                          <Share2 className="h-3 w-3" />
                          Share this fact
                        </Button>
                      </div>
                    </div>

                    {/* Click hint */}
                    {!isRevealed && (
                      <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Click to reveal the truth
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-accent">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Help Spread Awareness!
            </h2>
            <p className="text-muted-foreground">
              Share these facts with your friends, family, and community. 
              Together, we can break the stigma around menstruation.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Button 
                className="gap-2 rounded-full"
                onClick={() => {
                  const text = "🌸 Check out PeriodCare - A website that debunks common menstrual myths and promotes awareness! Let's break the taboo together.";
                  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
                  window.open(url, '_blank');
                }}
              >
                <Share2 className="h-4 w-4" />
                Share Website
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
