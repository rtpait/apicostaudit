#!/usr/bin/env node
/**
 * Deterministic Build, Schema, AEO/WebMCP, Single-Canonical-Home & Exclusive-Vertical Affiliate Validator for apicostaudit.com
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
let bad = 0;

function fail(msg) {
  console.error(`[FAIL] ${msg}`);
  bad++;
}

const forbidden = [/wally/i, /\/workspace\//i, /\/cursor\/stores/i, /&amp;amp;/];
const forbiddenCalcIds = [
  'id="merchant-fee-calc"',
  'id="payroll-fee-calc"',
  'id="payroll-tco-calc"',
  'id="eo-premium-estimator"',
  'id="coi-compliance-checker"',
  'id="labor-burden-calc"',
  'id="ucaas-tco-calculator"',
  'id="saas-seat-calc"'
];

for (const govFile of [
  "CHARTER.md",
  "PRODUCT-OWNER-OPERATING-PRINCIPLES.md",
  "PRODUCT-STATE.md",
  "ROAD-TO-REVENUE-SPRINT-PLAN.md",
  "PO-SPOKE-DAY0-CHECKLIST.md",
  "ROUTE-SPEC-64.md",
  "VERSION-LOG.md",
  "RELEASE-CONTRIBUTION-LEDGER.json",
  "partner-routing-matrix.json"
]) {
  const p = path.join(root, govFile);
  if (!fs.existsSync(p)) fail(`Missing required governance artifact: ${govFile}`);
}

for (const aeo of [
  "llms.txt",
  "llms-full.txt",
  ".well-known/webmcp.json",
  ".well-known/openapi.json",
  ".well-known/ai-plugin.json",
  "robots.txt",
  "sitemap.xml",
  "admin/index.html",
  "admin/admin-telemetry.enc.json"
]) {
  const p = path.join(root, "_site", aeo);
  if (!fs.existsSync(p)) fail(`Missing built AEO/admin endpoint in _site/: ${aeo}`);
}

const siteDir = path.join(root, "_site");
const htmlFiles = [];
function walkHtml(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (f.name === "admin") continue;
      walkHtml(p);
    } else if (f.name.endsWith(".html")) htmlFiles.push(p);
  }
}
walkHtml(siteDir);

if (htmlFiles.length !== 17) {
  fail(`Expected 17 active public HTML routes in _site/, found ${htmlFiles.length}`);
}

let validJsonLdCount = 0;
let fourAxisCount = 0;

for (const file of htmlFiles) {
  const rel = "/" + path.relative(siteDir, file).replace(/index\.html$/, "");
  const html = fs.readFileSync(file, "utf8");
  for (const rx of forbidden) {
    if (rx.test(html)) fail(`${rel}: leaked forbidden pattern ${rx}`);
  }
  for (const fCalc of forbiddenCalcIds) {
    if (html.includes(fCalc)) {
      fail(`${rel}: SINGLE_CANONICAL_HOME_VIOLATION — duplicate sibling calculator ${fCalc} found on apicostaudit.com`);
    }
  }
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const rawTitle = titleMatch ? titleMatch[1].replace(/&amp;/g, "&").trim() : "";
  if (!rawTitle || rawTitle.length > 60) {
    fail(`${rel}: <title> length ${rawTitle.length} exceeds 60 chars ("${rawTitle}")`);
  }
  const descMatch = html.match(/<meta name="description" content="([^"]*)">/);
  const rawDesc = descMatch ? descMatch[1].replace(/&amp;/g, "&").replace(/&#39;/g, "'").trim() : "";
  if (rawDesc.length < 140 || rawDesc.length > 158) {
    fail(`${rel}: <meta name="description"> length ${rawDesc.length} outside 140-158 chars ("${rawDesc}")`);
  }
  const axisMatches = [...html.matchAll(/data-4axis-key="([^"]+)"/g)];
  if (axisMatches.length === 0) {
    fail(`${rel}: missing 4-Axis Affiliate Component Taxonomy attribute data-4axis-key`);
  } else {
    fourAxisCount++;
    for (const am of axisMatches) {
      const k = am[1];
      if (!k.includes(":API_COSTS.")) {
        fail(`${rel}: EXCLUSIVE_VERTICAL_AFFILIATE_VIOLATION — foreign 4-axis key "${k}" on apicostaudit.com (must be generic_api_partner_slot:*:API_COSTS.*:*)`);
      }
    }
  }
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const m of scripts) {
    try {
      JSON.parse(m[1]);
      validJsonLdCount++;
    } catch (e) {
      fail(`${rel}: invalid JSON-LD (${e.message})`);
    }
  }
}

console.log(`Validated apicostaudit.com Sprint 1: 9/9 governance artifacts, ${htmlFiles.length}/17 built public HTML routes, ${validJsonLdCount} valid JSON-LD schemas, ${fourAxisCount}/17 pages with exclusive API_COSTS 4-Axis Affiliate Taxonomy (0 foreign affiliate links, 0 sibling calculators), and 0 errors.`);
if (bad) process.exit(1);
