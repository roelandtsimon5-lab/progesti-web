// Usage : node scripts/tests/run-attribution-test.cjs  (transpile avec typescript, puis exécute le test)
const ts = require("typescript");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "attr-"));
const root = path.resolve(__dirname, "../..");
const conv = (i, o, fix) => {
  let out = ts.transpileModule(fs.readFileSync(path.join(root, i), "utf8"), { compilerOptions: { module: "esnext", target: "es2022" } }).outputText;
  if (fix) out = out.replace("../../src/lib/attribution.ts", "./attribution.mjs");
  fs.writeFileSync(path.join(dir, o), out);
};
conv("src/lib/attribution.ts", "attribution.mjs");
conv("scripts/tests/attribution.test.mts", "test.mjs", true);
execFileSync("node", [path.join(dir, "test.mjs")], { stdio: "inherit" });
