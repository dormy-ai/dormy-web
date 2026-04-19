import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-32">
        <h1 className="mb-4 text-center font-serif text-4xl md:text-5xl">
          Pay only for what your agent uses.
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          No subscriptions · No minimums · Top up once, use across Claude Code, Cursor, or your
          own agent.
        </p>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free */}
          <Card>
            <CardContent className="p-8">
              <div className="mb-2 font-mono text-sm uppercase tracking-wide text-muted-foreground">
                Free · BYOK
              </div>
              <div className="mb-4 font-serif text-4xl font-light">Bring your own key</div>
              <p className="mb-6 text-sm text-muted-foreground">
                Use your own OpenAI / Anthropic / OpenRouter key. Try the Dormy workflow
                end-to-end with zero commitment.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  <span>MCP server + CLI</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  <span>Public knowledge base retrieval</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  <span>Basic investor matching (Phase A + B)</span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <X className="h-4 w-4 shrink-0" />
                  <span>No MiroThinker deep research</span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <X className="h-4 w-4 shrink-0" />
                  <span>No proactive watchers</span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <X className="h-4 w-4 shrink-0" />
                  <span>No Inner Circle personal notes / warm-intro paths</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="shadow-md" style={{ borderColor: "var(--color-coral)" }}>
            <CardContent className="p-8">
              <div
                className="mb-2 font-mono text-sm uppercase tracking-wide"
                style={{ color: "var(--color-coral)" }}
              >
                Pro · Dormy Router
              </div>
              <div className="mb-1 font-serif text-4xl font-light">Credits + 5% markup</div>
              <p className="mb-6 text-sm text-muted-foreground">
                Let Dormy route to the right model. No keys to juggle. Pay per call, settled from
                your wallet.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "var(--color-coral)" }} />
                  <span>Everything in Free</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "var(--color-coral)" }} />
                  <span>MiroThinker deep research (Phase C)</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "var(--color-coral)" }} />
                  <span>Daily VC watchers → Email / Telegram</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "var(--color-coral)" }} />
                  <span>Full Inner Circle data (personal notes + warm-intro paths)</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "var(--color-coral)" }} />
                  <span>Priority queue, observability</span>
                </li>
              </ul>

              <div className="mt-6 border-t pt-4 text-xs text-muted-foreground">
                Starter wallets: $20 / $50 / $200 · refundable · never expires
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="mb-4 text-sm text-muted-foreground">
            With $20 in your wallet, you get roughly:
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-light">200</div>
                <div className="text-xs text-muted-foreground">product scans</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-light">60</div>
                <div className="text-xs text-muted-foreground">VC triangulations</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-light">600</div>
                <div className="text-xs text-muted-foreground">intro emails</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
