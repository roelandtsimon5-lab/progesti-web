/**
 * Capture clean PROGESTI product screenshots (no demo banner, sidebar collapsed).
 * Usage: node scripts/capture-product-screens.mjs
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

const VIEWPORT = { width: 1440, height: 900 };

async function preparePage(page) {
  // Hide demo chrome that shouldn't appear on marketing shots
  await page.addStyleTag({
    content: `
      [class*="demo"], [data-demo], .demo-banner,
      header:has([href*="essai"]), 
      div:has(> *:only-child):has(:text("Mode démo")) {
        /* fallback below via text-based hide */
      }
    `,
  }).catch(() => {});

  await page.evaluate(() => {
    const walk = (root) => {
      for (const el of root.querySelectorAll("body *")) {
        const t = (el.textContent || "").trim();
        if (
          t.startsWith("Mode démo") &&
          el.children.length <= 3 &&
          t.length < 220
        ) {
          el.style.display = "none";
        }
      }
    };
    walk(document);
  });

  // Collapse sidebar via hamburger if present (match older marketing crops)
  const burger = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], header button').first();
  // Prefer clicking the top-bar hamburger next to page title
  const headerBurger = page.locator('header button, [class*="Header"] button, button:has(svg)').first();
  // Try common patterns: first button in the dark top bar
  const topBarButtons = page.locator('div.fixed button, header button, [role="banner"] button');
  const count = await topBarButtons.count().catch(() => 0);
  if (count > 0) {
    // Click first button in chrome — usually toggles nav
    await topBarButtons.nth(0).click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(400);
  }

  // If sidebar still wide, force-hide nav aside
  await page.evaluate(() => {
    const asides = Array.from(document.querySelectorAll("aside, nav"));
    for (const a of asides) {
      const r = a.getBoundingClientRect();
      if (r.width > 160 && r.left < 40 && r.height > 300) {
        a.style.display = "none";
      }
    }
    // Also hide any remaining yellow/orange demo strips at top
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

async function main() {
  let hasSharp = true;
  try {
    await import("sharp");
  } catch {
    hasSharp = false;
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    locale: "fr-FR",
  });
  const page = await context.newPage();

  console.log("Opening demo session…");
  await page.goto(
    "https://app.progesti.fr/api/public/demo-session?next=/demo-mvp&source=screenshot-capture",
    { waitUntil: "networkidle", timeout: 60000 },
  );
  await page.waitForTimeout(1000);
  console.log("Landed on", page.url());

  const results = [];
  for (const screen of SCREENS) {
    const url = `https://app.progesti.fr${screen.route}`;
    console.log(`→ ${screen.label}: ${url}`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(1000);
      await preparePage(page);

      const pngTmp = path.join(tmpDir, `${screen.file}.png`);
      await page.screenshot({ path: pngTmp, type: "png", fullPage: false });

      const pngOut = path.join(outDir, `${screen.file}.png`);
      fs.copyFileSync(pngTmp, pngOut);

      let webpOut = null;
      if (hasSharp) {
        webpOut = path.join(outDir, `${screen.file}.webp`);
        await sharp(pngTmp).webp({ quality: 86 }).toFile(webpOut);
      }

      results.push({
        ...screen,
        ok: true,
        png: pngOut,
        webp: webpOut,
        bytes: fs.statSync(pngOut).size,
        url: page.url(),
      });
      console.log(`  saved ${screen.file}.png` + (webpOut ? ` + .webp` : ""));
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
