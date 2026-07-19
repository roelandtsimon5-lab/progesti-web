import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { env } from "@/lib/env";

type LeadBody = {
  intent?: string;
  campaign?: string;
  email?: string;
  name?: string;
  company?: string;
  phone?: string;
  companySize?: string;
  currentSoftware?: string;
  need?: string;
  website?: string; // honeypot
};

const rateMap = new Map<string, { count: number; resetAt: number }>();

function clientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function rateLimit(ip: string, limit = 12, windowMs = 60_000) {
  const now = Date.now();
  const row = rateMap.get(ip);
  if (!row || now > row.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (row.count >= limit) return false;
  row.count += 1;
  return true;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function persistLocal(lead: Record<string, unknown>) {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, "leads.jsonl"),
    `${JSON.stringify(lead)}\n`,
    "utf8",
  );
}

async function sendWebhook(lead: Record<string, unknown>) {
  if (!env.leadWebhookUrl) return;
  await fetch(env.leadWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}

async function sendResend(lead: Record<string, unknown>) {
  if (!env.resendApiKey) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "PROGESTI <onboarding@resend.dev>",
      to: [env.leadNotifyEmail],
      subject: `[PROGESTI] Lead ${String(lead.intent || "contact")}`,
      text: JSON.stringify(lead, null, 2),
    }),
  });
}

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    if (!rateLimit(ip)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const body = (await request.json()) as LeadBody;

    // Honeypot
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const emailRaw = String(body.email || "").trim().toLowerCase();
    const name = String(body.name || "").trim();
    const intent = String(body.intent || "contact").trim();
    const company = String(body.company || "").trim();
    const phone = body.phone ? String(body.phone).trim() : "";
    const phoneDigits = phone.replace(/\D/g, "");

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
    }

    let email = emailRaw;
    if (intent === "ads_quick") {
      if (phoneDigits.length < 8) {
        return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
      }
      if (!email || !isEmail(email)) {
        email = `${phoneDigits}@lead.progesti.fr`;
      }
    } else if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const lead = {
      at: new Date().toISOString(),
      intent,
      campaign: body.campaign || null,
      email,
      name,
      company: company || null,
      phone: phone || null,
      companySize: body.companySize || null,
      currentSoftware: body.currentSoftware || null,
      need: body.need || null,
      ip,
      ua: request.headers.get("user-agent"),
    };

    console.info("[PROGESTI lead]", lead);

    await Promise.allSettled([persistLocal(lead), sendWebhook(lead), sendResend(lead)]);

    return NextResponse.json({
      ok: true,
      routed: {
        local: true,
        webhook: Boolean(env.leadWebhookUrl),
        email: Boolean(env.resendApiKey),
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
