import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Emails a fit-check summary to the visitor via Brevo; BCCs SmartTec (lead capture).
export async function POST(req: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const bcc = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "hello@smarttec.dev";
  if (!apiKey) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const email = String(b.email || "").slice(0, 200).trim();
  const subject = String(b.subject || "Your SmartTec fit-check").slice(0, 150);
  const text = String(b.text || "").slice(0, 8000);
  const pdfBase64 = typeof b.pdfBase64 === "string" && b.pdfBase64.length < 2_500_000 ? b.pdfBase64 : null;
  if (!email.includes("@") || !text) return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });

  const payload: Record<string, unknown> = {
    sender: { email: from, name: "SmartTec" },
    to: [{ email }],
    ...(bcc ? { bcc: [{ email: bcc }] } : {}),
    subject,
    textContent: text + "\n\n—\nSmartTec — battery-backed AI compute · Mead, Oklahoma\nsmarttec.dev · Estimates, not a quote — reply to this email for a real quote in 48h.",
    ...(pdfBase64 ? { attachment: [{ name: "smarttec-fit-check.pdf", content: pdfBase64 }] } : {}),
  };
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
