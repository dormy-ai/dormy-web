import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWithGlobe from "@/components/HeroWithGlobe";
import ComparisonSection from "@/components/ComparisonSection";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <HeroWithGlobe />

      <ComparisonSection />

      {/* Pricing teaser */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-4xl">
            Pay only for what your agent actually uses.
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            No subscriptions. No minimums. Top up a wallet with $20 and go.
          </p>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-1 text-3xl font-light">$1</div>
                <div className="text-sm text-muted-foreground">= 10 product scans</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-1 text-3xl font-light">$1</div>
                <div className="text-sm text-muted-foreground">= 3 VC triangulations</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-1 text-3xl font-light">$1</div>
                <div className="text-sm text-muted-foreground">= 30 intro emails</div>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" asChild className="mt-10">
            <a href="/pricing">
              See full pricing <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
