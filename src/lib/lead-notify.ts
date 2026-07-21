import { appendFile, mkdir, readFile } from "fs/promises";
import path from "path";
import { env } from "@/lib/env";
import { site } from "@/lib/site";

export type LeadPayload = {
  at: string;
  intent: string;
  campaign: string | null;
  email: string;
  name: string;
  company: string | null;
  phone: string | null;
};

type ChannelResult = { channel: string; ok: boolean; skipped?: boolean; error?: string };

function firstName(name: string) {
  const part = name.trim().split(/\s+/)[0] || name.trim();
  return part.charAt(0).toUpperCase() + part.slice(1);
}

/** Normalise un numéro FR vers E.164 (+33…). */
export function toE164FR(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("33") && digits.length >= 11) return `+${digits}`;
  if (digits.length === 10 && digits.startsWith("0")) return `+33${digits.slice(1)}`;
  if (digits.length === 9) return `+33${digits}`;
  if (digits.length >= 10 && digits.startsWith("33")) return `+${digits}`;
  return null;
}

function isPlaceholderEmail(email: string) {
  return email.endsWith("@lead.progesti.fr");
}

function notifiedPath() {
  return path.join(process.cwd(), ".data", "notified-leads.jsonl");
}

function dedupeKey(lead: LeadPayload) {
  const phone = lead.phone ? toE164FR(lead.phone) || lead.phone : "";
  return `${lead.email.toLowerCase()}|${phone}`;
}

/** Évite une 2e bienvenue prospect sous 24 h (fichier local ; OK sur Railway avec disque). */
async function alreadyNotified(lead: LeadPayload): Promise<boolean> {
  try {
    const raw = await readFile(notifiedPath(), "utf8");
    const key = dedupeKey(lead);
    const cutoff = Date.now() - 24 * 60 * 60 * 1000;
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      const row = JSON.parse(line) as { key?: string; at?: number };
      if (row.key === key && typeof row.at === "number" && row.at >= cutoff) return true;
    }
  } catch {
    /* pas encore de fichier */
  }
  return false;
}

async function markNotified(lead: LeadPayload) {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    notifiedPath(),
    `${JSON.stringify({ key: dedupeKey(lead), at: Date.now() })}\n`,
    "utf8",
  );
}

async function sendResend(opts: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<ChannelResult> {
  if (!env.resendApiKey) {
    return { channel: `email:${opts.to}`, ok: false, skipped: true, error: "no_resend" };
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.leadFromEmail,
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    return { channel: `email:${opts.to}`, ok: false, error: `${res.status} ${body.slice(0, 200)}` };
  }
  return { channel: `email:${opts.to}`, ok: true };
}

/** SMS transactionnel Brevo (~0,05–0,07 € / SMS FR). */
async function sendBrevoSms(toE164: string, content: string): Promise<ChannelResult> {
  if (!env.brevoApiKey) {
    return { channel: `sms:${toE164}`, ok: false, skipped: true, error: "no_brevo" };
  }
  const recipient = toE164.replace(/\D/g, "");
  const res = await fetch("https://api.brevo.com/v3/transactionalSMS/sms", {
    method: "POST",
    headers: {
      "api-key": env.brevoApiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: env.brevoSmsSender,
      recipient,
      content,
      type: "transactional",
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    return { channel: `sms:${toE164}`, ok: false, error: `${res.status} ${body.slice(0, 200)}` };
  }
  return { channel: `sms:${toE164}`, ok: true };
}

/** Alertes Simon gratuites si forfait Free Mobile (notif SMS dans l’espace abonné). */
async function sendFreeMobileSms(content: string): Promise<ChannelResult> {
  if (!env.freeMobileUser || !env.freeMobilePass) {
    return { channel: "sms:freemobile", ok: false, skipped: true, error: "no_freemobile" };
  }
  const url = new URL("https://smsapi.free-mobile.fr/sendmsg");
  url.searchParams.set("user", env.freeMobileUser);
  url.searchParams.set("pass", env.freeMobilePass);
  url.searchParams.set("msg", content.slice(0, 999));
  const res = await fetch(url);
  if (!res.ok) {
    return { channel: "sms:freemobile", ok: false, error: `http_${res.status}` };
  }
  return { channel: "sms:freemobile", ok: true };
}

function welcomeEmail(lead: LeadPayload) {
  const prenom = firstName(lead.name);
  const mobileDisplay = env.simonMobileDisplay || env.simonMobile || site.phone;
  const mobileTel = env.simonMobile || site.phoneTel;
  const essaiUrl = env.essaiUrl;

  const subject = `Bienvenue ${prenom} — je m’occupe de votre essai PROGESTI`;
  const text = [
    `Bonjour ${prenom},`,
    ``,
    `Merci pour votre inscription. Je suis Simon, gérant de PROGESTI — le logiciel conçu pour les entreprises de nettoyage et de propreté.`,
    ``,
    `Je vous contacte rapidement pour vous aider à configurer la plateforme : vos sites, votre planning, et vos premiers passages. L’essai dure ${site.trialMonths} mois, sans carte bancaire.`,
    ``,
    `Accéder à mon essai : ${essaiUrl}`,
    ``,
    `Besoin d’échanger tout de suite ? Appelez-moi au ${mobileDisplay} — c’est mon portable.`,
    ``,
    `À très vite,`,
    `Simon`,
    `Gérant — PROGESTI`,
    `${mobileDisplay} · ${site.email}`,
    site.url,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Bienvenue PROGESTI</title></head>
<body style="margin:0;padding:0;background:#F7FAFC;font-family:Arial,Helvetica,sans-serif;color:#0F2438;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7FAFC;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="background:#0B3D6E;padding:22px 28px;">
          <p style="margin:0;font-size:20px;font-weight:700;letter-spacing:0.04em;color:#ffffff;">PROGESTI</p>
        </td></tr>
        <tr><td style="padding:28px;">
          <p style="margin:0 0 16px;font-size:18px;font-weight:700;">Bonjour ${escapeHtml(prenom)},</p>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.55;">
            Merci pour votre inscription. Je suis <strong>Simon</strong>, gérant de PROGESTI — le logiciel conçu pour les entreprises de nettoyage et de propreté.
          </p>
          <p style="margin:0 0 22px;font-size:15px;line-height:1.55;">
            Je vous contacte rapidement pour vous aider à configurer la plateforme : vos sites, votre planning, et vos premiers passages. L’essai dure <strong>${site.trialMonths} mois</strong>, sans carte bancaire.
          </p>
          <p style="margin:0 0 24px;">
            <a href="${escapeHtml(essaiUrl)}" style="display:inline-block;background:#1FA86B;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 22px;border-radius:6px;">Accéder à mon essai</a>
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#E8F2FA;border-radius:6px;">
            <tr><td style="padding:16px 18px;font-size:14px;line-height:1.5;">
              Besoin d’échanger tout de suite ? Appelez-moi ou écrivez-moi au
              <a href="tel:${escapeHtml(mobileTel)}" style="color:#0B3D6E;font-weight:700;text-decoration:none;">${escapeHtml(mobileDisplay)}</a>
              — c’est mon portable.
            </td></tr>
          </table>
          <p style="margin:22px 0 0;font-size:15px;line-height:1.55;">
            À très vite,<br>
            <strong>Simon</strong><br>
            Gérant — PROGESTI<br>
            <a href="tel:${escapeHtml(mobileTel)}" style="color:#1565A8;text-decoration:none;">${escapeHtml(mobileDisplay)}</a>
            · <a href="mailto:${site.email}" style="color:#1565A8;text-decoration:none;">${site.email}</a><br>
            <a href="${site.url}" style="color:#1565A8;text-decoration:none;">${site.url.replace(/^https?:\/\//, "")}</a>
          </p>
        </td></tr>
        <tr><td style="padding:16px 28px 22px;border-top:1px solid #C5DCF0;font-size:12px;line-height:1.45;color:#5A6B7D;">
          ${escapeHtml(site.company.legalName)} · ${escapeHtml(site.company.city)} ·
          <a href="mailto:${site.email}" style="color:#5A6B7D;">${site.email}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
}

function alertEmail(lead: LeadPayload) {
  const phoneE164 = lead.phone ? toE164FR(lead.phone) : null;
  const when = formatParis(lead.at);
  const subject = `Nouveau prospect — ${lead.name} · ${lead.phone || "sans tél"}`;
  const lines = [
    `Nouveau prospect PROGESTI`,
    ``,
    `Nom / prénom : ${lead.name}`,
    `E-mail       : ${lead.email}`,
    `Téléphone    : ${lead.phone || "—"}`,
    `Entreprise   : ${lead.company || "—"}`,
    `Intent       : ${lead.intent}`,
    `Campagne     : ${lead.campaign || "—"}`,
    `Reçu le      : ${when}`,
    ``,
    phoneE164 ? `Appeler : tel:${phoneE164}` : "",
    `Écrire  : mailto:${lead.email}`,
  ].filter(Boolean);

  const text = lines.join("\n");
  const html = `<pre style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(text)}</pre>`;
  return { subject, html, text };
}

function prospectSms(lead: LeadPayload) {
  const prenom = firstName(lead.name);
  const mobile = env.simonMobileDisplay || env.simonMobile || site.phone;
  return `Bonjour ${prenom}, Simon de PROGESTI. Merci pour votre inscription — je vous appelle vite pour démarrer la config. Besoin de moi avant ? ${mobile}`;
}

function simonSms(lead: LeadPayload) {
  const parts = [
    "PROGESTI — nouveau prospect",
    lead.name,
    lead.phone || "",
    isPlaceholderEmail(lead.email) ? "" : lead.email,
    lead.company || "",
  ].filter(Boolean);
  return parts.join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatParis(iso: string) {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Europe/Paris",
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/**
 * Envoie bienvenue prospect + alertes Simon (e-mail / SMS).
 * Ne throw pas : chaque canal est isolé.
 */
export async function notifyNewLead(lead: LeadPayload): Promise<ChannelResult[]> {
  const results: ChannelResult[] = [];
  const dup = await alreadyNotified(lead);

  // Toujours alerter Simon (même en cas de doublon) — sauf si on veut silence totale
  const alert = alertEmail(lead);
  results.push(
    await sendResend({
      to: env.leadNotifyEmail,
      subject: alert.subject,
      html: alert.html,
      text: alert.text,
    }).then((r) => ({ ...r, channel: "email:simon" })),
  );

  const simonMsg = simonSms(lead);
  const free = await sendFreeMobileSms(simonMsg);
  if (!free.skipped) {
    results.push(free);
  } else if (env.leadNotifyPhone) {
    const e164 = toE164FR(env.leadNotifyPhone);
    if (e164) results.push(await sendBrevoSms(e164, simonMsg).then((r) => ({ ...r, channel: "sms:simon" })));
    else results.push({ channel: "sms:simon", ok: false, skipped: true, error: "bad_notify_phone" });
  } else {
    results.push({ channel: "sms:simon", ok: false, skipped: true, error: "no_simon_sms_config" });
  }

  if (dup) {
    results.push({ channel: "prospect", ok: true, skipped: true, error: "deduped_24h" });
    return results;
  }

  if (!isPlaceholderEmail(lead.email)) {
    const welcome = welcomeEmail(lead);
    results.push(
      await sendResend({
        to: lead.email,
        subject: welcome.subject,
        html: welcome.html,
        text: welcome.text,
        replyTo: env.leadNotifyEmail,
      }).then((r) => ({ ...r, channel: "email:prospect" })),
    );
  } else {
    results.push({ channel: "email:prospect", ok: true, skipped: true, error: "placeholder_email" });
  }

  if (lead.phone) {
    const e164 = toE164FR(lead.phone);
    if (e164) {
      results.push(
        await sendBrevoSms(e164, prospectSms(lead)).then((r) => ({
          ...r,
          channel: "sms:prospect",
        })),
      );
    } else {
      results.push({ channel: "sms:prospect", ok: false, skipped: true, error: "bad_phone" });
    }
  } else {
    results.push({ channel: "sms:prospect", ok: false, skipped: true, error: "no_phone" });
  }

  const prospectChannels = results.filter(
    (r) => r.channel === "email:prospect" || r.channel === "sms:prospect",
  );
  const anyProspectSent = prospectChannels.some((r) => r.ok && !r.skipped);
  const onlySkipped =
    prospectChannels.length > 0 && prospectChannels.every((r) => r.skipped);
  if (anyProspectSent || onlySkipped) {
    try {
      await markNotified(lead);
    } catch {
      /* ignore */
    }
  }

  return results;
}
