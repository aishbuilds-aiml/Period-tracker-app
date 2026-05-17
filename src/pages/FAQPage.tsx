import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // Basics
  {
    question: "What is menstruation?",
    answer: "Menstruation, commonly called a period, is the monthly shedding of the uterine lining. It's a natural biological process that indicates your reproductive system is healthy. Every month, the uterus prepares a soft lining for potential pregnancy. If pregnancy doesn't occur, this lining is released through the vagina as menstrual blood.",
    category: "Basics",
  },
  {
    question: "At what age do periods start?",
    answer: "Most girls get their first period (called menarche) between ages 10-16, with the average being around 12 years in India. However, getting your period earlier or later is also normal. If you haven't started by age 16, consult a doctor.",
    category: "Basics",
  },
  {
    question: "How long does a period last?",
    answer: "A typical period lasts between 3-7 days. The first 1-2 days usually have heavier flow, which gradually becomes lighter. This can vary from person to person and may change over time.",
    category: "Basics",
  },
  {
    question: "What is a normal cycle length?",
    answer: "A normal menstrual cycle is 21-35 days, with 28 days being average. The cycle is counted from the first day of one period to the first day of the next. Irregular cycles are common in the first few years after starting menstruation.",
    category: "Basics",
  },
  // Products
  {
    question: "Which menstrual product should I use?",
    answer: "The best product depends on your comfort level and lifestyle. Pads are easiest for beginners and widely available. Tampons allow for swimming but require insertion. Menstrual cups are eco-friendly and cost-effective long-term. Start with what feels comfortable and experiment to find what works best for you.",
    category: "Products",
  },
  {
    question: "How often should I change my pad?",
    answer: "Change your pad every 4-6 hours, even if it's not fully soaked. On heavy flow days, you may need to change more frequently (every 2-3 hours). Never wear the same pad for more than 8 hours to prevent infections and odor.",
    category: "Products",
  },
  {
    question: "Can I use tampons as a virgin?",
    answer: "Yes, using tampons doesn't affect virginity. Virginity is about sexual experience, not about using a menstrual product. Tampons come in different sizes, and 'slim' or 'lite' tampons are designed for beginners.",
    category: "Products",
  },
  {
    question: "What is a menstrual cup?",
    answer: "A menstrual cup is a reusable, flexible cup made of medical-grade silicone. It's inserted into the vagina to collect menstrual blood. Cups can be worn for up to 12 hours and can last up to 10 years with proper care, making them eco-friendly and cost-effective.",
    category: "Products",
  },
  // Health
  {
    question: "Why do I get cramps during periods?",
    answer: "Menstrual cramps (dysmenorrhea) happen because your uterus contracts to help shed its lining. These contractions are triggered by hormone-like substances called prostaglandins. Higher levels of prostaglandins can cause stronger, more painful cramps. Light exercise, heat therapy, and pain relievers can help.",
    category: "Health",
  },
  {
    question: "Is it normal to have irregular periods?",
    answer: "Irregular periods are common, especially in the first few years after starting menstruation and during perimenopause. However, if your periods are consistently very irregular, extremely heavy, or you go more than 3 months without a period (and aren't pregnant), consult a doctor.",
    category: "Health",
  },
  {
    question: "What is PMS?",
    answer: "PMS (Premenstrual Syndrome) refers to physical and emotional symptoms that occur in the days before your period. Symptoms include mood swings, bloating, breast tenderness, food cravings, fatigue, and irritability. These are caused by hormonal changes and are completely normal.",
    category: "Health",
  },
  {
    question: "When should I see a doctor about my period?",
    answer: "See a doctor if you experience: very heavy bleeding (soaking through products hourly), periods lasting more than 7 days, severe pain not relieved by painkillers, missed periods for 3+ months, bleeding between periods, or unusual discharge. Don't hesitate to seek help if something doesn't feel right.",
    category: "Health",
  },
  // Hygiene
  {
    question: "Can I take a bath during my period?",
    answer: "Yes! Bathing is not only safe but recommended during your period. It helps maintain hygiene and can provide relief from cramps. There's no truth to the myth that bathing during periods is harmful. You can take a shower or bath as you normally would.",
    category: "Hygiene",
  },
  {
    question: "How do I dispose of used pads properly?",
    answer: "Wrap used pads in newspaper or the wrapper of your new pad. Never flush pads or tampons down the toilet as they can clog pipes. Dispose of wrapped pads in a dustbin with a lid. Wash your hands thoroughly after handling used products.",
    category: "Hygiene",
  },
  {
    question: "Why do periods sometimes smell?",
    answer: "Menstrual blood has a mild metallic smell due to iron content, which is normal. Strong or foul odors usually indicate that a pad has been worn too long. Change your products regularly and maintain good hygiene. If you notice a fishy or very unpleasant smell, consult a doctor as it could indicate an infection.",
    category: "Hygiene",
  },
  // Activities
  {
    question: "Can I exercise during my period?",
    answer: "Yes! Light to moderate exercise is actually beneficial during periods. It can help reduce cramps, improve mood, and boost energy. Activities like walking, yoga, swimming (with tampons or cups), and stretching are great options. Listen to your body and rest if needed.",
    category: "Activities",
  },
  {
    question: "Can I swim during my period?",
    answer: "Yes, you can swim during your period using tampons or menstrual cups. These products are designed to be worn during water activities. Pads don't work for swimming as they absorb water. Always change your tampon or empty your cup after swimming.",
    category: "Activities",
  },
  {
    question: "Should I skip school/college during periods?",
    answer: "There's no need to skip school or college just because of your period. With proper menstrual products and pain management, you can participate in all normal activities. However, if you're experiencing severe pain or discomfort, it's okay to rest. Talk to a school nurse or teacher if you need help.",
    category: "Activities",
  },
  // Myths
  {
    question: "Can I enter the kitchen during my period?",
    answer: "Yes! There's absolutely no scientific reason to avoid the kitchen or cooking during your period. This is a cultural myth with no basis in fact. Menstrual blood doesn't make food impure. You can cook, touch pickles, and handle any food as you normally would.",
    category: "Myths",
  },
  {
    question: "Do periods attract animals or sharks?",
    answer: "No, this is a complete myth. There's no evidence that menstrual blood attracts any animals, including sharks. You can safely enjoy outdoor activities, camping, and even swimming in the ocean during your period.",
    category: "Myths",
  },
];

const categories = ["All", "Basics", "Products", "Health", "Hygiene", "Activities", "Myths"];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about periods and menstrual health.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
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
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-lg border border-border px-6 data-[state=open]:shadow-soft"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-start gap-3">
                        <span className="text-sm font-medium text-foreground">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      <div className="space-y-2">
                        <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground mb-2">
                          {faq.category}
                        </span>
                        <p>{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No questions found matching your search.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 md:py-16 bg-gradient-accent">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground">
              Can't find the answer you're looking for? Feel free to reach out to us 
              and we'll get back to you as soon as possible.
            </p>
            <Link to="/contact">
              <Button className="rounded-full gap-2">
                <MessageCircle className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
