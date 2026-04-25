"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Sparkles, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const MCP_INSTALL =
  "claude mcp add dormy --transport http https://mcp.heydormy.ai/mcp";

export default function HeroWithGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(MCP_INSTALL);
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 1400);
    } catch {
      toast.error("Copy failed — select & copy manually");
    }
  };

  useEffect(() => {
    let raf = 0;
    let cancelled = false;

    const run = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const size = 520;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = size + "px";
      canvas.style.height = size + "px";
      ctx.scale(dpr, dpr);

      const W = size;
      const H = size;
      const R = W / 2 - 2;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const world: any = await fetch("/data/countries-110m.json").then((r) =>
        r.json(),
      );
      if (cancelled) return;

      const countries = topojson.feature(world, world.objects.countries);
      const borders = topojson.mesh(
        world,
        world.objects.countries,
        (a, b) => a !== b,
      );

      const projection = d3
        .geoOrthographic()
        .scale(R - 1)
        .translate([W / 2, H / 2])
        .clipAngle(90);
      const path = d3.geoPath(projection, ctx);
      const graticule = d3.geoGraticule10();

      let lambda = 0;
      const phi = -14;
      const speed = 0.18;

      const draw = () => {
        projection.rotate([lambda, phi, 0]);
        ctx.clearRect(0, 0, W, H);

        ctx.beginPath();
        path({ type: "Sphere" });
        ctx.fillStyle = "#F0EEE9";
        ctx.fill();

        ctx.beginPath();
        path(graticule);
        ctx.strokeStyle = "rgba(27,43,75,0.10)";
        ctx.lineWidth = 0.6;
        ctx.stroke();

        ctx.beginPath();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        path(countries as any);
        ctx.fillStyle = "rgba(27,43,75,0.18)";
        ctx.fill();

        ctx.beginPath();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        path(borders as any);
        ctx.strokeStyle = "#1B2B4B";
        ctx.lineWidth = 0.6;
        ctx.stroke();

        ctx.beginPath();
        path({ type: "Sphere" });
        ctx.strokeStyle = "rgba(27,43,75,0.45)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      };

      const tick = () => {
        lambda = (lambda + speed) % 360;
        draw();
        raf = requestAnimationFrame(tick);
      };

      draw();
      tick();
    };

    run().catch((e) => console.error("Hero globe failed:", e));

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero hero--globe">
      <div className="hero-globe" aria-hidden="true">
        <div className="hero-globe__whirl">
          <svg viewBox="0 0 520 520">
            <circle className="ring r1" cx="260" cy="260" r="250" />
            <circle className="ring r2" cx="260" cy="260" r="230" />
            <circle className="ring r3" cx="260" cy="260" r="210" />
            <g className="dot">
              <circle cx="260" cy="10" r="3.2" />
            </g>
          </svg>
        </div>
        <div className="hero-globe__sphere">
          <canvas ref={canvasRef} />
        </div>
      </div>

      <div className="hero__inner">
        <span className="badge badge--outline hero__eyebrow">
          <Sparkles size={12} />
          MCP + CLI native — for Claude Code, Cursor, any agent
        </span>
        <h1 className="hero__headline">
          Your relentless teammate
          <br />
          for <em>fundraising</em>.
        </h1>
        <p className="hero__sub">
          Dormy handles the heavy lifting of investor research, warm-intro
          mapping, and proactive VC monitoring — so technical founders can stay
          in the zone.
        </p>
        <button className="install-prompt" onClick={onCopy} type="button">
          <span className="install-prompt__dollar">$</span>
          <code className="install-prompt__code">{MCP_INSTALL}</code>
          <span className="install-prompt__copy">
            <Copy size={14} />
            {copied ? <span className="install-prompt__hint">copied</span> : null}
          </span>
        </button>
        <div className="hero__ctas">
          <a href="/docs" className="btn btn--primary btn--lg">
            Get Started Free <ArrowRight size={14} />
          </a>
          <a
            href="https://github.com/dormy-ai/dormy-cli"
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline btn--lg"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
