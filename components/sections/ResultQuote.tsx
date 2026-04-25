"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function ResultQuote() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <div className="w-2 h-2 rounded-full bg-coral" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-coral">
                The Result
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight mb-8">
              A Partner Who Knows You Better Than{" "}
              <span className="text-coral italic">You Know Yourself</span>
            </h2>
            <p className="text-lg md:text-xl text-navy/50 leading-relaxed">
              Over time, Dormy becomes your most proactive teammate — anticipating
              needs before you articulate them, expanding your network tirelessly,
              and driving momentum even when you&apos;re focused on building.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
