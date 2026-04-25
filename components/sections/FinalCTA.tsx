"use client";

import { ArrowRight, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Atmospheric coral glow + subtle dot pattern (replaces dormy-fe network image) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(232,115,90,0.18) 0%, transparent 55%), radial-gradient(circle at 75% 80%, rgba(232,115,90,0.12) 0%, transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6 max-w-3xl mx-auto">
            Stop chasing capital and growth.{" "}
            <span className="text-coral-light italic">Let them come to you.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Free to start. No subscriptions, no credit card. Add Dormy to your
            agent and let it work.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#install"
              className="inline-flex items-center gap-2.5 bg-coral text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-coral-light transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-coral/30"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/dormy_dev01_bot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-200 hover:-translate-y-0.5"
            >
              Launch on Telegram
              <Send className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
