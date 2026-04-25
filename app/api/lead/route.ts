import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface LeadPayload {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  goal?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let data: LeadPayload;
  try {
    data = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  if (!name) {
    return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Valid email required" },
      { status: 400 },
    );
  }

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK;
  if (!webhook) {
    console.error("GOOGLE_SHEETS_WEBHOOK env var is not set");
    return NextResponse.json(
      { ok: false, error: "Form not configured" },
      { status: 500 },
    );
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name,
    email,
    company: (data.company || "").trim(),
    website: (data.website || "").trim(),
    goal: (data.goal || "").trim(),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Apps Script can be slow on cold start
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.error("Apps Script webhook returned", res.status);
      return NextResponse.json(
        { ok: false, error: "Upstream error" },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("lead submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "Network error" },
      { status: 500 },
    );
  }
}
