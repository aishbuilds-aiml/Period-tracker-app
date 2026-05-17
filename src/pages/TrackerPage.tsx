import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Calendar as CalendarIcon, 
  Calculator,
  Droplets,
  Sparkles,
  Info
} from "lucide-react";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

export default function TrackerPage() {
  const [lastPeriodDate, setLastPeriodDate] = useState<Date>();
  const [cycleLength, setCycleLength] = useState<string>("28");
  const [periodLength, setPeriodLength] = useState<string>("5");
  const [result, setResult] = useState<{
    nextPeriod: Date;
    fertileStart: Date;
    fertileEnd: Date;
    ovulation: Date;
  } | null>(null);

  const calculateCycle = () => {
    if (!lastPeriodDate) return;

    const cycleDays = parseInt(cycleLength);
    const nextPeriod = addDays(lastPeriodDate, cycleDays);
    const ovulation = addDays(lastPeriodDate, cycleDays - 14);
    const fertileStart = addDays(ovulation, -5);
    const fertileEnd = addDays(ovulation, 1);

    setResult({
      nextPeriod,
      fertileStart,
      fertileEnd,
      ovulation,
    });
  };

  const resetCalculator = () => {
    setLastPeriodDate(undefined);
    setCycleLength("28");
    setPeriodLength("5");
    setResult(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Calculator className="h-4 w-4" />
              Period Calculator
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Track Your Cycle
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter your last period date and cycle length to predict your next period 
              and understand your cycle better.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Period Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Last Period Date */}
                <div className="space-y-2">
                  <Label>When did your last period start?</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !lastPeriodDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {lastPeriodDate ? (
                          format(lastPeriodDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={lastPeriodDate}
                        onSelect={setLastPeriodDate}
                        disabled={(date) => date > new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Cycle Length */}
                <div className="space-y-2">
                  <Label>Average cycle length (days)</Label>
                  <Select value={cycleLength} onValueChange={setCycleLength}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cycle length" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 21 }, (_, i) => i + 21).map((days) => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days {days === 28 && "(average)"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Count from the first day of one period to the first day of the next.
                  </p>
                </div>

                {/* Period Length */}
                <div className="space-y-2">
                  <Label>Average period length (days)</Label>
                  <Select value={periodLength} onValueChange={setPeriodLength}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select period length" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 8 }, (_, i) => i + 2).map((days) => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button 
                    onClick={calculateCycle} 
                    className="flex-1 gap-2"
                    disabled={!lastPeriodDate}
                  >
                    <Calculator className="h-4 w-4" />
                    Calculate
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetCalculator}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {result && (
              <Card className="mt-8 bg-gradient-card border-primary/20 shadow-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="font-display text-xl text-center">
                    Your Predictions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Next Period */}
                  <div className="p-4 rounded-xl bg-primary/10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Droplets className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Next Period Expected</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {format(result.nextPeriod, "MMMM d, yyyy")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {format(result.nextPeriod, "EEEE")}
                    </p>
                  </div>

                  {/* Fertile Window */}
                  <div className="p-4 rounded-xl bg-secondary text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-secondary-foreground" />
                      <span className="text-sm font-medium text-secondary-foreground">Fertile Window</span>
                    </div>
                    <p className="font-display text-lg font-bold text-foreground">
                      {format(result.fertileStart, "MMM d")} - {format(result.fertileEnd, "MMM d, yyyy")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Ovulation around {format(result.ovulation, "MMMM d")}
                    </p>
                  </div>

                  {/* Disclaimer */}
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                    <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      This is an estimate based on average cycles. Your actual dates may vary. 
                      This calculator should not be used as a contraceptive method. 
                      Consult a doctor for medical advice.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Info Section */}
            <Card className="mt-8">
              <CardContent className="pt-6">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Understanding Your Cycle
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Menstrual Cycle:</strong> The time from 
                    the first day of your period to the day before your next period starts. 
                    Average is 28 days, but 21-35 days is normal.
                  </p>
                  <p>
                    <strong className="text-foreground">Ovulation:</strong> When an egg is released 
                    from your ovary, usually about 14 days before your next period. This is when 
                    you're most fertile.
                  </p>
                  <p>
                    <strong className="text-foreground">Fertile Window:</strong> The days around 
                    ovulation when pregnancy is possible. This typically spans 5 days before 
                    ovulation and 1 day after.
                  </p>
                  <p>
                    <strong className="text-foreground">Tip:</strong> Tracking your cycle for 
                    several months can help you understand your unique pattern and predict 
                    your periods more accurately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
