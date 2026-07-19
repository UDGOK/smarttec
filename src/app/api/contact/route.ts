import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Sends contact-form submissions via Brevo transactional email.
// Required env vars (set in Vercel, never in the repo):
//   BREVO_API_KEY  — Brevo API v3 key
//   CONTACT_TO     — inbox that receives submissions
//   CONTACT_FROM   — verified sender, e.g. hello@smarttec.dev (optional, has default)
export async function POST(req: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "hello@smarttec.dev";
  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  const name = (body.name || "").slice(0, 200).trim();
  const email = (body.email || "").slice(0, 200).trim();
  const company = (body.company || "").slice(0, 200).trim();
  const power = (body.power || "").slice(0, 100).trim();
  const message = (body.message || "").slice(0, 5000).trim();
  const team = (body.team || "sales").slice(0, 50).trim();
  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: { email: from, name: "SmartTec Website" },
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `[smarttec.dev] ${team} inquiry — ${name}${company ? ` (${company})` : ""}`,
      textContent:
        `Team: ${team}\nName: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n` +
        `Power requirement: ${power || "—"}\n\n${message}\n`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
