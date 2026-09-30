// Test sans dépendance : node --experimental-strip-types scripts/tests/attribution.test.mts
import assert from "node:assert/strict";

const writes: string[] = [];
const storage = { setItem: () => writes.push("set"), getItem: () => null, removeItem: () => writes.push("rm") };
function setup(url: string, referrer: string) {
  const u = new URL(url);
  (globalThis as any).window = { location: { search: u.search, pathname: u.pathname } };
  (globalThis as any).document = { referrer, get cookie() { return ""; }, set cookie(_v: string) { writes.push("cookie"); } };
  (globalThis as any).localStorage = storage;
  (globalThis as any).sessionStorage = storage;
}

setup("https://progesti.fr/essai-gratuit?gclid=ABC123&utm_source=google&utm_medium=cpc&utm_campaign=x", "https://www.google.fr/search?q=mon+nom+prenom");
const modPath = "../../src/lib/attribution.ts";
const m = await import(modPath);
const a = m.captureFirstTouchAttribution()!;
assert.equal(a.channel, "ads-google");
assert.equal(a.referrerDomain, "google.fr");
assert.equal(a.landing, "/essai-gratuit");
assert.equal(JSON.stringify(a).includes("ABC123"), false, "gclid non conservé");
assert.equal(JSON.stringify(a).includes("search?q"), false, "URL complète du referrer non conservée");
assert.equal(writes.length, 0, "aucune écriture cookie/localStorage");
const p = m.getAttributionParams();
assert.ok(!("gclid" in p) && !("email" in p) && !("ip" in p));
const pl = m.getAttributionPayload();
assert.ok(!("gclid" in pl));
assert.equal(m.getChannel(), "ads-google");
console.log("OK attribution : sans cookie, sans stockage, sans gclid, sans URL complète");
