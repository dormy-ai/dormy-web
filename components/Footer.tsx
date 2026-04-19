import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-border/50 py-12"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <Link href="/" className="inline-block" aria-label="Dormy home">
          <img src="/wordmark-transparent.svg" alt="Dormy" className="h-7 w-auto" />
        </Link>
        <p className="text-sm" style={{ color: "var(--color-warm-gray)" }}>
          &copy; {new Date().getFullYear()} Dormy AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
