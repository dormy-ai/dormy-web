import { Check } from "lucide-react";

const oldWay = [
  "📚 Manually trawl Crunchbase + Twitter — 2 weeks",
  "🕵️ Guess who's actually deploying capital now",
  "📝 Rewrite the same cold email 50 times",
  "😴 Miss VC round news in your sector",
  "🔑 Juggle 5 different API keys and billing accounts",
];

const dormyWay = [
  "Ask your agent in 30 seconds — get Top 20 fits",
  "Inner Circle ⭐ crossed with VCs actively deploying this week",
  "Personalized intro emails drafted per VC thesis",
  "Daily watcher pings your Email / Telegram",
  "One install. One wallet. Pay-per-call.",
];

export default function ComparisonSection() {
  return (
    <section className="band band--cream-dark">
      <div className="band__inner">
        <h2 className="section-heading">
          The fundraising shortcut you didn&apos;t know you had.
        </h2>
        <div className="compare-grid">
          <div className="dormy-card">
            <span className="badge badge--navy">The old way</span>
            <ul className="compare-list compare-list--muted">
              {oldWay.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="dormy-card dormy-card--feature">
            <span className="badge badge--coral">The Dormy way</span>
            <ul className="compare-list">
              {dormyWay.map((t) => (
                <li key={t}>
                  <Check size={16} strokeWidth={2.25} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
