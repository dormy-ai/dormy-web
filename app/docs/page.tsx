import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-32">
        <h1 className="mb-4 font-serif text-4xl">Docs</h1>
        <p className="mb-8 text-muted-foreground">
          Installation, CLI reference, and MCP tool docs land in Week 2. For now, install the MCP
          server:
        </p>

        <pre className="overflow-auto rounded-lg bg-muted p-4 text-sm">
          <code>claude mcp add dormy --transport http https://mcp.heydormy.ai/mcp</code>
        </pre>

        <h2 className="mt-12 mb-3 font-serif text-2xl">What Dormy exposes</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <code className="text-foreground">dormy_profile_set</code> — build a founder profile
            from a URL
          </li>
          <li>
            <code className="text-foreground">dormy_scan_product</code> — structured product
            profile
          </li>
          <li>
            <code className="text-foreground">dormy_find_investors</code> — Inner Circle ⭐ +
            Active VC + on-demand deep research
          </li>
          <li>
            <code className="text-foreground">dormy_draft_intro</code> — personalized outreach
            email
          </li>
          <li>
            <code className="text-foreground">dormy_watch_vcs</code> — daily VC match pushed via
            Email/Telegram
          </li>
          <li>
            <code className="text-foreground">dormy_memory_recall</code> — RAG retrieval from
            Dormy&apos;s knowledge base
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
