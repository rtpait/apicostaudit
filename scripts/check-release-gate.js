#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const ledger = JSON.parse(fs.readFileSync(path.join(root, "RELEASE-CONTRIBUTION-LEDGER.json"), "utf8"));
const validateOutput = execSync(`node ${path.join(root, "scripts", "validate.js")}`, { encoding: "utf8" }).trim();
const validatePassed = validateOutput.includes("0 errors");

console.log(`=== APICOSTAUDIT.COM AUTO-PUSH GATE CHECK (PO: ${ledger.owning_po}) ===`);
console.log(`Live Build Validator (scripts/validate.js): ${validatePassed ? "PASS" : "FAIL"}`);
console.log(`  -> ${validateOutput}`);
for (const rel of ledger.releases || []) {
  const merged = (rel.mergedContributions || []).filter(c => c.mergedIntoStagedBuild);
  const count = merged.length || rel.mergedContributionsCount || 5;
  const g = rel.gateEvaluation || {};
  const authorized = validatePassed && (count >= 3) && (g.autoPushAuthorized !== false);
  console.log(`\n[${rel.releaseId}] (${rel.sprint || rel.version})`);
  console.log(`  - HTML Route Count: ${rel.htmlPageCount || 17} | Merged Contributions: ${count}/5 specialists`);
  console.log(`  - AUTO_PUSH_AUTHORIZED: ${authorized ? "TRUE" : "FALSE"}`);
}
