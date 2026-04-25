"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const ALUMNI = ["Capital One", "Grammarly", "PayPal", "Stori"];

export default function TheTeam() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <AnimatedSection>
          <SectionLabel text="The Team" />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight mb-6 max-w-3xl">
            Bridging <span className="text-coral italic">Silicon Valley</span> and You
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mt-12">
          <AnimatedSection delay={200}>
            <p className="text-lg text-navy/60 leading-relaxed mb-6">
              Dormy was founded by a team of seasoned serial entrepreneurs,
              builders, and investors.
            </p>
            <p className="text-navy/50 leading-relaxed">
              We&apos;ve built products used by millions, scaled companies from zero to
              IPO, and invested in the next generation of unicorns. We know the
              lonely road of the founder because we&apos;ve walked it ourselves.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-cream rounded-2xl p-8 border-l-4 border-coral">
              <p
                className="text-navy text-lg md:text-xl leading-relaxed italic mb-0"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                &ldquo;The team is inspired to radically increase the chance of success
                for tomorrow&apos;s{" "}
                <span className="text-coral not-italic font-semibold">
                  super individual
                </span>{" "}
                and{" "}
                <span className="text-coral not-italic font-semibold">
                  lean teams
                </span>
                .&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-navy/30 mb-8 text-center">
              Built by alumni from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {ALUMNI.map((name) => (
                <span
                  key={name}
                  className="text-navy/20 text-xl md:text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
