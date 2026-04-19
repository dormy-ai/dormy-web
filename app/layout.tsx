import type { Metadata } from "next";
import Providers from "./providers";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dormy — Your Relentless Teammate for Fundraising",
  description:
    "Dormy is an AI-powered fundraising copilot for founders, exposed as MCP + CLI. Plug into Claude Code, Cursor, or any agent — get curated investor intelligence + proactive match watchers.",
  metadataBase: new URL("https://heydormy.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://heydormy.ai/",
    title: "Dormy — Your Relentless Teammate for Fundraising",
    description:
      "AI fundraising copilot for founders. Install once in your agent, get curated investor intelligence + proactive match watchers.",
    siteName: "Dormy",
    images: [{ url: "/favicon-512.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dormy — Your Relentless Teammate for Fundraising",
    description: "AI fundraising copilot for founders. MCP + CLI native.",
    images: ["/favicon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
