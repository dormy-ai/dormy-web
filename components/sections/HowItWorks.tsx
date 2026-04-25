"use client";

import { Link2, Users, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    step: "01",
    icon: Link2,
    title: "Connect Your Workspace",
    description:
      "Link Dormy to Slack or Telegram. Grant access to your calendar. One-time setup, zero maintenance.",
    detail: "Takes 2 minutes",
  },
  {
    step: "02",
    icon: Users,
    title: "Train Dormy on Your Context",
    description:
      "Share your background, challenges, and goals. Dormy learns your unique situation to provide hyper-personalized guidance.",
    detail: "15 minutes or one founder call",
  },
  {
    step: "03",
    icon: Zap,
    title: "Execute & Continuously Evolve",
    description:
      "Dormy proactively surfaces opportunities and connects you to people. As you provide feedback, it calibrates its approach.",
    detail: "A living system",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container">
        <AnimatedSection>
          <SectionLabel text="How It Works" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight mb-4 max-w-3xl">
            From setup to fully up and running{" "}
            <span className="text-coral italic">in 3 steps.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="text-lg text-navy/50 mb-16 max-w-xl">
            Get started in minutes, not weeks.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item, i) => (
            <AnimatedSection key={item.step} delay={200 + i * 100}>
              <div className="bg-cream rounded-2xl p-8 md:p-10 h-full border border-border/30 relative overflow-hidden group">
                <span
                  className="text-[80px] font-bold text-navy/[0.04] absolute top-4 right-6 leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {item.step}
                </span>

                <div className="relative">
                  <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="text-xl text-navy mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-navy/50 text-[15px] leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="text-coral text-sm font-medium">
                    {item.detail}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
