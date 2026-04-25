"use client";

import { Check, X, Zap, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export default function FoundersDilemma() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <AnimatedSection>
          <SectionLabel text="The Problem" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight mb-4 max-w-2xl">
            The Founder&apos;s <span className="text-coral italic">Dilemma.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="text-lg text-navy/50 mb-14 max-w-xl">
            Why brilliant builders struggle to scale.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <AnimatedSection delay={200}>
            <div className="bg-cream rounded-2xl p-8 md:p-10 h-full border border-border/30">
              <div className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-xl md:text-2xl text-navy mb-2 tracking-tight">
                The Builder&apos;s Reality
              </h3>
              <p className="text-navy/40 text-sm mb-8">
                Where you want to spend your time.
              </p>
              <div className="space-y-4">
                {[
                  "Shipping code & product",
                  "Talking to users",
                  "Iterating on feedback",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-navy/70 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-cream rounded-2xl p-8 md:p-10 h-full border border-border/30">
              <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 text-coral" />
              </div>
              <h3 className="text-xl md:text-2xl text-navy mb-2 tracking-tight">
                The Founder&apos;s Burden
              </h3>
              <p className="text-navy/40 text-sm mb-8">
                Where you actually spend your time.
              </p>
              <div className="space-y-4">
                {[
                  "Chasing investors & scheduling",
                  "Figuring out GTM from scratch",
                  "Drowning in noise & context switching",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-navy/70 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
