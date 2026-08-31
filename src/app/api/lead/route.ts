import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { env } from "@/lib/env";
import { notifyNewLead } from "@/lib/lead-notify";

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
    const nameRaw = String(body.name || "").trim();
    const intent = String(body.intent || "contact").trim();
    const company = String(body.company || "").trim();
    const phone = body.phone ? String(body.phone).trim() : "";
    const phoneDigits = phone.replace(/\D/g, "");
    const isSelfServe = intent === "demo" || intent === "trial";

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

    if (isSelfServe && !company) {
      return NextResponse.json({ ok: false, error: "invalid_company" }, { status: 400 });
    }

    const name = nameRaw.length >= 2 ? nameRaw : "";

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
    }

    // Contact / RDV / démo / essai : téléphone obligatoire.
    if (phoneDigits.length < 8) {
      return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
    }

    const phoneStored = phone || null;

    const lead = {
      at: new Date().toISOString(),
      intent,
      campaign: body.campaign || null,
      email,
      name,
      company: company || null,
      phone: phoneStored,
      companySize: body.companySize || null,
      currentSoftware: body.currentSoftware || null,
      need: body.need || null,
      ip,
      ua: request.headers.get("user-agent"),
    };

    console.info("[PROGESTI lead]", lead);

    const notifyPayload = {
      at: lead.at,
      intent: lead.intent,
      campaign: lead.campaign,
      email: lead.email,
      name: lead.name,
      company: lead.company,
      phone: lead.phone,
    };

    // Persist + notify en arrière-plan — ne jamais bloquer la redirection démo / essai.
    void Promise.allSettled([persistLocal(lead), notifyNewLead(notifyPayload), sendWebhook(lead)]).then(
      ([persistSettled, notifySettled]) => {
        if (persistSettled.status === "rejected") {
          console.error("[PROGESTI lead persist]", persistSettled.reason);
        }
        if (notifySettled.status === "rejected") {
          console.error("[PROGESTI lead notify]", notifySettled.reason);
          return;
        }
        console.info("[PROGESTI lead notify]", notifySettled.value);
      },
    );

    return NextResponse.json({
      ok: true,
      routed: {
        local: true,
        webhook: Boolean(env.leadWebhookUrl),
        email: Boolean(env.resendApiKey),
        sms: Boolean(env.brevoApiKey || (env.freeMobileUser && env.freeMobilePass)),
        notify: "async",
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
