/**
 * Capture clean PROGESTI product screenshots (no demo banner, sidebar collapsed).
 * High-DPI (deviceScaleFactor 2) + high-quality WebP for crisp marketing embeds.
 *
 * Usage: node scripts/capture-product-screens.mjs
 * Optional: node scripts/capture-product-screens.mjs --only=rentabilite
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public");
const tmpDir = path.join(__dirname, "..", ".tmp-screenshots");
fs.mkdirSync(tmpDir, { recursive: true });

const SCREENS = [
  { route: "/clients", file: "screen-clients", label: "CLIENTS" },
  { route: "/sites", file: "screen-sites", label: "SITES" },
  { route: "/devis", file: "screen-devis", label: "DEVIS" },
  { route: "/planning", file: "hero-planning", label: "PLANNING" },
  { route: "/telegestion", file: "screen-telegestion", label: "TELEGESTION" },
  { route: "/factures", file: "screen-factures", label: "FACTURES" },
  { route: "/missions", file: "screen-passages", label: "MISSIONS" },
  { route: "/rapports/chiffre-affaires", file: "screen-rentabilite", label: "RENTABILITE" },
  { route: "/employees", file: "screen-rh", label: "RH" },
];

/** CSS viewport — captured bitmap is viewport × deviceScaleFactor. */
const VIEWPORT = { width: 1440, height: 900 };
const DEVICE_SCALE = 3;
const WEBP_QUALITY = 96;

const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const onlyFile = onlyArg ? onlyArg.slice("--only=".length) : null;
const screens = onlyFile
  ? SCREENS.filter((s) => s.file === onlyFile || s.file.includes(onlyFile))
  : SCREENS;

async function preparePage(page) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("body *")) {
      const t = (el.textContent || "").trim();
      if (
        t.startsWith("Mode démo") &&
        el.children.length <= 3 &&
        t.length < 220
      ) {
        el.style.display = "none";
      }
    }
  });

  const topBarButtons = page.locator(
    'div.fixed button, header button, [role="banner"] button',
  );
  const count = await topBarButtons.count().catch(() => 0);
  if (count > 0) {
    await topBarButtons.nth(0).click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(400);
  }

  await page.evaluate(() => {
    const asides = Array.from(document.querySelectorAll("aside, nav"));
    for (const a of asides) {
      const r = a.getBoundingClientRect();
      if (r.width > 160 && r.left < 40 && r.height > 300) {
        a.style.display = "none";
      }
    }
    for (const el of document.querySelectorAll("body > div, body > * > *")) {
      const t = (el.textContent || "").trim();
      if (t.includes("Mode démo") && t.length < 250) {
        const r = el.getBoundingClientRect();
        if (r.top < 80 && r.height < 80) el.style.display = "none";
      }
    }
  });
  await page.waitForTimeout(300);
}

/**
 * Redraw a polished CA chart for marketing: rising réalisé (H1) + ascending
 * prévision through year-end. Guarantees the asset even if live demo cliffs.
 */
async function ensureGrowthForecastChart(page) {
  return page.evaluate(() => {
    const easeOut = (n, start, end) => {
      const out = [];
      for (let i = 0; i < n; i++) {
        const t = n === 1 ? 1 : i / (n - 1);
        const eased = 1 - Math.pow(1 - t, 2.2);
        out.push(Math.round((start + (end - start) * eased) * 100) / 100);
      }
      return out;
    };

    const svgs = [...document.querySelectorAll("svg")].filter(
      (s) => (s.getAttribute("viewBox") || "").includes("640") || s.clientWidth > 300,
    );
    const svg =
      svgs.sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight)[0] ||
      null;
    if (!svg) return { ok: false, reason: "no-svg" };

    const vb = (svg.getAttribute("viewBox") || "0 0 640 280").split(/\s+/).map(Number);
    const width = vb[2] || 640;
    const height = vb[3] || 280;
    const pad = { top: 16, right: 12, bottom: 28, left: 58 };
    const innerW = width - pad.left - pad.right;
    const innerH = height - pad.top - pad.bottom;

    // Hide existing series (green/blue paths + any plot dots) — we redraw cleanly
    for (const p of svg.querySelectorAll("path")) {
      const stroke = (p.getAttribute("stroke") || "").toLowerCase();
      const fill = (p.getAttribute("fill") || "").toLowerCase();
      const dash = p.getAttribute("stroke-dasharray");
      if (
        stroke.includes("3b82f6") ||
        stroke.includes("38bdf8") ||
        stroke.includes("16a34a") ||
        stroke.includes("22c55e") ||
        fill.includes("16a34a") ||
        fill.includes("22c55e") ||
        (dash && dash !== "none")
      ) {
        p.style.display = "none";
      }
    }
    // Original demo often leaves near-zero markers on the baseline — remove all plot dots
    for (const c of svg.querySelectorAll("circle")) {
      c.style.display = "none";
    }
    for (const old of svg.querySelectorAll('[data-marketing-forecast="1"]')) old.remove();

    // Jan–Aug réalisé (gentle rise), Aug–Dec prévision (beautiful growth)
    const n = 12;
    const realiseEnd = 7; // through August (index 7)
    const realise = [
      6200,
      9100,
      12800,
      15400,
      18900,
      22100,
      24800,
      26800,
      null,
      null,
      null,
      null,
    ];
    const forecastStart = 7; // Aug anchor
    const peak = 40000;
    const growth = easeOut(n - forecastStart, 26800, peak);
    const forecast = Array(n).fill(null);
    growth.forEach((v, i) => {
      forecast[forecastStart + i] = v;
    });

    // Nice round ceiling so Y ticks read as real business figures (not 1 €)
    const rawMax = Math.max(peak, ...realise.filter(Boolean), ...growth, 1);
    const maxV = Math.ceil(rawMax / 10000) * 10000 || 40000;
    const xAt = (i) => pad.left + (i / (n - 1)) * innerW;
    const yAt = (v) => pad.top + innerH - (v / maxV) * innerH;

    const formatEuro = (v) => {
      const n0 = Math.round(v);
      if (n0 === 0) return "0 €";
      return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n0)} €`;
    };

    const linePath = (vals) => {
      let d = "";
      let started = false;
      vals.forEach((v, i) => {
        if (v == null) return;
        d += `${started ? "L" : "M"} ${xAt(i).toFixed(2)},${yAt(v).toFixed(2)} `;
        started = true;
      });
      return d.trim();
    };

    const areaPath = (vals) => {
      const pts = [];
      vals.forEach((v, i) => {
        if (v != null) pts.push([i, v]);
      });
      if (pts.length < 2) return "";
      let d = `M ${xAt(pts[0][0]).toFixed(2)},${yAt(0).toFixed(2)} `;
      pts.forEach(([i, v]) => {
        d += `L ${xAt(i).toFixed(2)},${yAt(v).toFixed(2)} `;
      });
      const last = pts[pts.length - 1];
      d += `L ${xAt(last[0]).toFixed(2)},${yAt(0).toFixed(2)} Z`;
      return d;
    };

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("data-marketing-forecast", "1");

    const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
    area.setAttribute("d", areaPath(realise));
    area.setAttribute("fill", "#16a34a");
    area.setAttribute("fill-opacity", "0.12");
    area.setAttribute("stroke", "none");
    g.appendChild(area);

    const green = document.createElementNS("http://www.w3.org/2000/svg", "path");
    green.setAttribute("d", linePath(realise));
    green.setAttribute("fill", "none");
    green.setAttribute("stroke", "#16a34a");
    green.setAttribute("stroke-width", "2.5");
    green.setAttribute("stroke-linecap", "round");
    green.setAttribute("stroke-linejoin", "round");
    g.appendChild(green);

    realise.forEach((v, i) => {
      if (v == null) return;
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", String(xAt(i)));
      c.setAttribute("cy", String(yAt(v)));
      c.setAttribute("r", "3.5");
      c.setAttribute("fill", "#16a34a");
      g.appendChild(c);
    });

    const blue = document.createElementNS("http://www.w3.org/2000/svg", "path");
    blue.setAttribute("d", linePath(forecast));
    blue.setAttribute("fill", "none");
    blue.setAttribute("stroke", "#3b82f6");
    blue.setAttribute("stroke-width", "2.5");
    blue.setAttribute("stroke-dasharray", "6 4");
    blue.setAttribute("stroke-linecap", "round");
    blue.setAttribute("stroke-linejoin", "round");
    g.appendChild(blue);

    forecast.forEach((v, i) => {
      if (v == null) return;
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", String(xAt(i)));
      c.setAttribute("cy", String(yAt(v)));
      c.setAttribute("r", "3.5");
      c.setAttribute("fill", "#3b82f6");
      g.appendChild(c);
    });

    svg.appendChild(g);

    // Rewrite Y-axis labels: live demo often scales to ~1€ → "0 € / 1 € / 1 € / 1 €".
    // Map existing left-side tick texts to our marketing scale (e.g. 0 / 10k / 20k / 30k / 40k).
    const isYTick = (t) => {
      const raw = (t.textContent || "").trim();
      if (!raw) return false;
      const hasEuro = /€|EUR/i.test(raw);
      const numeric = /^[\d\s.,]+$/.test(raw.replace(/\u00a0/g, " "));
      if (!hasEuro && !numeric) return false;
      let x = parseFloat(t.getAttribute("x") || "NaN");
      if (Number.isNaN(x)) {
        try {
          x = t.getBBox().x;
        } catch {
          x = 999;
        }
      }
      return x < pad.left + 8;
    };

    const yTicks = [...svg.querySelectorAll("text")].filter(isYTick);
    yTicks.sort(
      (a, b) =>
        parseFloat(a.getAttribute("y") || "0") - parseFloat(b.getAttribute("y") || "0"),
    );

    const tickLabels = [];
    if (yTicks.length >= 2) {
      const top = yTicks[0];
      const bottom = yTicks[yTicks.length - 1];
      const yTop = parseFloat(top.getAttribute("y") || "0");
      const yBot = parseFloat(bottom.getAttribute("y") || "0");
      const span = yBot - yTop || 1;
      yTicks.forEach((t) => {
        const y = parseFloat(t.getAttribute("y") || "0");
        const ratio = (yBot - y) / span; // 1 at top, 0 at bottom
        const raw = ratio * maxV;
        // Snap to 1k / 5k for readable business figures
        const step = maxV >= 20000 ? 5000 : 1000;
        const v = Math.round(raw / step) * step;
        const label = formatEuro(v);
        t.textContent = label;
        t.style.display = "";
        tickLabels.push(label);
      });
    } else {
      // No usable ticks — draw our own
      const steps = 5;
      for (let i = 0; i < steps; i++) {
        const v = (maxV / (steps - 1)) * i;
        const label = formatEuro(v);
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", String(pad.left - 8));
        text.setAttribute("y", String(yAt(v) + 4));
        text.setAttribute("text-anchor", "end");
        text.setAttribute("fill", "#64748b");
        text.setAttribute("font-size", "11");
        text.setAttribute("font-family", "ui-sans-serif, system-ui, sans-serif");
        text.setAttribute("data-marketing-forecast", "1");
        text.textContent = label;
        g.appendChild(text);
        tickLabels.push(label);
      }
    }

    return {
      ok: true,
      patched: true,
      realiseEnd,
      forecastPoints: growth.length,
      maxV,
      yTicks: tickLabels,
    };
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE,
    locale: "fr-FR",
  });
  const page = await context.newPage();

  console.log(
    `Opening demo session… (DPR=${DEVICE_SCALE}, webp q=${WEBP_QUALITY})`,
  );
  await page.goto(
    "https://app.progesti.fr/api/public/demo-session?next=/demo-mvp&source=screenshot-capture",
    { waitUntil: "networkidle", timeout: 90000 },
  );
  await page.waitForTimeout(1000);
  console.log("Landed on", page.url());

  const results = [];
  for (const screen of screens) {
    const url = `https://app.progesti.fr${screen.route}`;
    console.log(`→ ${screen.label}: ${url}`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(1200);
      await preparePage(page);

      if (screen.file === "screen-rentabilite") {
        await page.waitForSelector("svg", { timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(500);
        const patch = await ensureGrowthForecastChart(page);
        console.log("  forecast patch:", JSON.stringify(patch));
        await page.waitForTimeout(200);
      }

      const pngTmp = path.join(tmpDir, `${screen.file}.png`);
      await page.screenshot({ path: pngTmp, type: "png", fullPage: false });

      const pngOut = path.join(outDir, `${screen.file}.png`);
      // Keep PNG lossless master; WebP for site embeds
      await sharp(pngTmp).png({ compressionLevel: 9 }).toFile(pngOut);

      const webpOut = path.join(outDir, `${screen.file}.webp`);
      await sharp(pngTmp)
        .webp({ quality: WEBP_QUALITY, effort: 5, smartSubsample: true })
        .toFile(webpOut);

      const meta = await sharp(pngOut).metadata();
      results.push({
        ...screen,
        ok: true,
        png: pngOut,
        webp: webpOut,
        width: meta.width,
        height: meta.height,
        pngBytes: fs.statSync(pngOut).size,
        webpBytes: fs.statSync(webpOut).size,
        url: page.url(),
      });
      console.log(
        `  saved ${screen.file} ${meta.width}x${meta.height} png=${fs.statSync(pngOut).size} webp=${fs.statSync(webpOut).size}`,
      );
    } catch (err) {
      results.push({ ...screen, ok: false, error: String(err) });
      console.error(`  FAIL ${screen.file}:`, err.message || err);
    }
  }

  await browser.close();
  fs.writeFileSync(
    path.join(tmpDir, "capture-report.json"),
    JSON.stringify(results, null, 2),
  );
  console.log("OK:", results.filter((r) => r.ok).length, "/", results.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
