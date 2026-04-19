"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

const MCP_INSTALL = "claude mcp add dormy --transport http https://mcp.heydormy.ai/mcp";

export default function HomePage() {
  const copyInstallCmd = async () => {
    try {
      await navigator.clipboard.writeText(MCP_INSTALL);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Copy failed — select & copy manually");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-6 gap-1.5 py-1">
            <Sparkles className="h-3 w-3" />
            MCP + CLI native — for Claude Code, Cursor, any agent
          </Badge>

          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Your relentless teammate
            <br />
            for <span style={{ color: "var(--color-coral)" }}>fundraising</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Dormy handles the heavy lifting of investor research, warm-intro mapping, and
            proactive VC monitoring — so technical founders can stay in the zone.
          </p>

          {/* One-line install */}
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={copyInstallCmd}
              className="group inline-flex max-w-full items-center gap-2 overflow-x-auto rounded-lg px-6 py-3 font-mono text-sm transition hover:opacity-90"
              style={{
                background: "var(--color-navy)",
                color: "var(--color-cream)",
              }}
            >
              <span style={{ color: "var(--color-coral)" }}>$</span>
              <code className="whitespace-nowrap">{MCP_INSTALL}</code>
              <Copy className="h-4 w-4 opacity-60 group-hover:opacity-100" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button size="lg" asChild>
              <a href="/docs">
                Get started <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/beizhangnina/dormy-ai"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Old way vs Dormy way */}
      <section className="px-4 py-16" style={{ background: "var(--color-cream-dark)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
            The fundraising shortcut you didn&apos;t know you had.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-muted">
              <CardContent className="p-8">
                <Badge variant="secondary" className="mb-4">
                  The old way
                </Badge>
                <ul className="space-y-3 text-muted-foreground">
                  <li>📚 Manually trawl Crunchbase + Twitter — 2 weeks</li>
                  <li>🕵️ Guess who&apos;s actually deploying capital now</li>
                  <li>📝 Rewrite the same cold email 50 times</li>
                  <li>😴 Miss VC round news in your sector</li>
                  <li>🔑 Juggle 5 different API keys and billing accounts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md" style={{ borderColor: "var(--color-coral)" }}>
              <CardContent className="p-8">
                <Badge className="mb-4" style={{ background: "var(--color-coral)" }}>
                  The Dormy way
                </Badge>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0" style={{ color: "var(--color-coral)" }} />
                    <span>Ask your agent in 30 seconds — get Top 20 fits</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0" style={{ color: "var(--color-coral)" }} />
                    <span>Inner Circle ⭐ crossed with VCs actively deploying this week</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0" style={{ color: "var(--color-coral)" }} />
                    <span>Personalized intro emails drafted per VC thesis</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0" style={{ color: "var(--color-coral)" }} />
                    <span>Daily watcher pings your Email / Telegram</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0" style={{ color: "var(--color-coral)" }} />
                    <span>One install. One wallet. Pay-per-call.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
