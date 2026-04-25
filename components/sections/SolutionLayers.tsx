"use client";

import { Telescope, Network, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export default function SolutionLayers() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-cream scroll-mt-20">
      <div className="container">
        <AnimatedSection>
          <SectionLabel text="The Solution" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight mb-4 max-w-3xl">
            Intelligence. Connection.{" "}
            <span className="text-coral italic">Delivered Invisibly.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="text-lg text-navy/50 mb-16 max-w-2xl">
            A complete operating system for founder success, built in layers.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-background rounded-2xl p-8 md:p-10 mb-6 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center">
                <Telescope className="w-5 h-5 text-coral" />
              </div>
              <h3 className="text-xl md:text-2xl text-navy tracking-tight">
                Layer 1: Intelligence Engine
              </h3>
            </div>
            <p className="text-navy/50 mb-8 max-w-2xl">
              We process the noise so you don&apos;t have to. 24/7 monitoring of capital
              markets and growth trends.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-cream/60 rounded-xl p-6">
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-coral mb-3 block">
                  Fundraising
                </span>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Tracks active VCs, analyzes positioning, curates relevant discussions.
                </p>
              </div>
              <div className="bg-cream/60 rounded-xl p-6">
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-coral mb-3 block">
                  GTM
                </span>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Monitors tactics, tracks competitors, surfaces case studies.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="bg-background rounded-2xl p-8 md:p-10 mb-6 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center">
                <Network className="w-5 h-5 text-coral" />
              </div>
              <h3 className="text-xl md:text-2xl text-navy tracking-tight">
                Layer 2: Connection Network
              </h3>
            </div>
            <p className="text-navy/50 mb-8 max-w-2xl">
              We don&apos;t just tell you who to meet. We find the path to get there.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-cream/60 rounded-xl p-6">
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-coral mb-3 block">
                  Fundraising
                </span>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Matches with VCs, finds warm intro paths, provides insights.
                </p>
              </div>
              <div className="bg-cream/60 rounded-xl p-6">
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-coral mb-3 block">
                  GTM
                </span>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Connects to advisors, agencies, and CMO candidates.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-coral" />
              </div>
              <h3 className="text-xl md:text-2xl text-navy tracking-tight">
                Layer 3: Invisible Delivery
              </h3>
            </div>
            <p className="text-navy/50 max-w-2xl">
              Lives in Slack/Telegram. Proactive. Personalized. No new apps to learn.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
