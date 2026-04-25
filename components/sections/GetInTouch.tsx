"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export default function GetInTouch() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      goal: String(fd.get("goal") || "").trim(),
    };

    if (!payload.name || !payload.email) {
      toast.error("Name and email are required.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }
      setSubmitted(true);
      toast.success("Got it. We'll reach out soon.");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(`Hmm — ${msg}. Try again?`);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-border/50 bg-white text-navy placeholder:text-navy/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors";

  return (
    <section id="get-in-touch" className="py-24 md:py-32 bg-cream scroll-mt-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start max-w-5xl mx-auto">
          {/* Left column — value prop */}
          <AnimatedSection>
            <SectionLabel text="The Conversation" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-navy tracking-tight mb-6 mt-2 max-w-md">
              Tell us where you are.{" "}
              <span className="text-coral italic">We&apos;ll meet you there.</span>
            </h2>
            <p className="text-lg text-navy/60 leading-relaxed mb-4">
              Not ready to install yet? Drop your details and we&apos;ll reach out
              with the right next step for your stage.
            </p>
            <p className="text-sm text-navy/50">
              No newsletter spam. We read every message.
            </p>
          </AnimatedSection>

          {/* Right column — form */}
          <AnimatedSection delay={200}>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-border/50 text-center">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-coral/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-xl text-navy mb-2 tracking-tight">
                  Got it.
                </h3>
                <p className="text-navy/60 text-[15px] leading-relaxed">
                  We&apos;ll reach out within a few days. In the meantime, feel
                  free to <a href="#install" className="text-coral hover:underline font-medium">install Dormy</a>{" "}
                  or{" "}
                  <a
                    href="https://t.me/dormy_dev01_bot"
                    target="_blank"
                    rel="noreferrer"
                    className="text-coral hover:underline font-medium"
                  >
                    chat on Telegram
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-white rounded-2xl p-8 border border-border/50 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-xs font-semibold tracking-wider uppercase text-navy/60 mb-1.5"
                    >
                      Name <span className="text-coral">*</span>
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-xs font-semibold tracking-wider uppercase text-navy/60 mb-1.5"
                    >
                      Email <span className="text-coral">*</span>
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lead-company"
                      className="block text-xs font-semibold tracking-wider uppercase text-navy/60 mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="lead-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="(optional)"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-website"
                      className="block text-xs font-semibold tracking-wider uppercase text-navy/60 mb-1.5"
                    >
                      Website
                    </label>
                    <input
                      id="lead-website"
                      name="website"
                      type="url"
                      autoComplete="url"
                      placeholder="(optional)"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lead-goal"
                    className="block text-xs font-semibold tracking-wider uppercase text-navy/60 mb-1.5"
                  >
                    What do you want to achieve?
                  </label>
                  <textarea
                    id="lead-goal"
                    name="goal"
                    rows={3}
                    placeholder="(optional) Raising a seed round, looking for GTM advisors, exploring..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded-full text-[15px] font-semibold hover:bg-coral-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
                >
                  {submitting ? "Sending..." : "Get in touch"}
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
