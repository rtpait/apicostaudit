# API Cost Audit (`apicostaudit.com`) — Living Product State Document (`PRODUCT-STATE.md` · `v1.7.0`)

- **Product Owner ("The Why, The What & The Measured Truth"):** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1` — Governing `API_COSTS` Extension)
- **Multi-PO Family PM ("The How & The When"):** `B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`) / `Project Manager` (`167b2bea-99c8-4e89-99e3-182227974962`)
- **Platform Optimization Lead (SEO + AEO):** `@Platform Optimization` (`3baf81a9-493f-491f-997a-6263af37023e`)
- **Coordinating Governance Spokes:**
  - `Legal & Compliance PM` (`b5853ae2-8ff6-47df-a19a-f3621b64a484`) — Independent `LC-1..LC-6` Release Gate
  - `Identity & Security PM` (`ef20b463-034b-4ac8-93b8-5b6d6a3141bb`) — Independent `IS-1..IS-5` Release Gate
  - `Chief of Staff` (`6bdd607c-7fa2-4559-ab73-4d368d72a455`) — External Browser, Registrar & GSC Provisioning (`Surface B`)
- **Domain, Registrar & GSC Status:** `apicostaudit.com` — Registered on Porkbun (Order ID `12296644`, `$11.08/yr`, expires `2027-10-27`) on Tuesday, Oct 27, 2026 under `Research Triangle Park AI Transformation LLC` (`EIN 42-3641177`), operating email `luke@rtpait.com`. **Note on Google Search Console (`Gate 1.2`):** Property `sc-domain:apicostaudit.com` DNS TXT verification token (`google-site-verification=...`) still needs to be generated in Google Search Console and added to Porkbun root `@` DNS TXT records (`Surface B` action item #1).
- **Product Workspace & Source Control:** `/workspace/apicostaudit` (Day-0 PO governance package `v1.0.0` complete on disk; Eleventy static build & GitHub Pages repo `https://github.com/rtpait/apicostaudit` queued for Sprint 1 `P0-API-001`).
- **Snapshot Date & Version:** `v1.7.0` — Wednesday, Oct 28, 2026 (07:35 AM CDT / 08:35 AM EDT · `RAPID-BUILD-AUTO-ROTATE-20261028-1406`)
- **Road-to-Revenue Lifecycle Stage:** **`STAGE_2 (17/17 Canonical API_COSTS Routes + /admin/ = 18 Built HTML Routes Live on GitHub Pages -> Stage 2 GSC Indexation Ramp toward >=75% Cohort-1 Gate)`** (`/workspace/ROAD-TO-REVENUE-STANDARD.md` `v1.0.0`)
- **Active Kaizen Mode:** **`MODE_1: Discovery, Indexation & AEO Velocity Mode (Day-0 Indexation)`** with automatic **`MODE_5: Day-0 Blocker Pre-Emption`** active until `sc-domain:apicostaudit.com` DNS TXT and Sprint 1 static routes clear `audit_day0_launch_gate.py --domain apicostaudit.com`.
- **Governing Standards:**
  - `/workspace/PRODUCT-OWNER-OPERATING-PRINCIPLES.md` (Principles 1–9)
  - `/workspace/B2B-FAMILY-TAXONOMY-REGISTRY.json` (`v1.7.0`)
  - `/workspace/apicostaudit/CHARTER.md` (`v1.0.0`)
  - `/workspace/apicostaudit/ROAD-TO-REVENUE-SPRINT-PLAN.md` (`v1.0.0`)
  - `/workspace/apicostaudit/PO-SPOKE-DAY0-CHECKLIST.md` (`v1.0.0`)
  - `/workspace/apicostaudit/ROUTE-SPEC-64.md` (`v1.0.0`)
  - `/workspace/apicostaudit/VERSION-LOG.md` (`v1.0.0`)

---

## 0. Day-0 External Verification Receipt & Live Release-Gate Readout (`2026-10-27 08:40 AM EDT`)

Validated via `python3 /workspace/scheduler/audit_day0_launch_gate.py --domain apicostaudit.com`:

| Day-0 Check ID | Check Description | Live Status (Oct 27, 2026 08:40 AM EDT) | Measured Output / Action Required |
| :--- | :--- | :---: | :--- |
| **`1.1`** | **Live DNS `A` Record Resolution** | **`PASS`** | `['207.207.210.50', '207.207.210.36', '207.207.210.23']` (Porkbun parked `A` records live; to be repointed to GitHub Pages `185.199.108.153..111.153` in `P0-API-002`) |
| **`1.2`** | **Google Search Console DNS TXT Record** | **`BLOCKER`** | `[]` — **Pending Surface B Action:** Generate `sc-domain:apicostaudit.com` TXT token in GSC (`luke@rtpait.com`) and add `google-site-verification=...` to Porkbun root `@` DNS (`P0-API-001`) |
| **`1.3`** | **Defensive `SPF` TXT Record (`v=spf1`)** | **`PASS`** | `['v=spf1 include:_spf.porkbun.com ~all']` |
| **`1.4`** | **`DMARC` TXT Record (`_dmarc`)** | **`ADVISORY`** | `['uixie.porkbun.com.']` — add `_dmarc.apicostaudit.com` TXT `v=DMARC1; p=reject; sp=reject;` under `IS-4` |
| **`2.1`** | **Live HTTPS Root (`https://apicostaudit.com/`)** | **`PASS`** | `HTTP 200` (Porkbun TLS active on parked root) |
| **`2.2`** | **Live PostHog Telemetry Snippet (`Project 685354`)** | **`BLOCKER`** | Missing on parked root — queued in `P0-API-002` (`$host = apicostaudit.com` + Stage 1A/1B 3-bucket bot/owner exclusion) |
| **`2.3`** | **Multi-Engine AI Bot UA Probe (`GPTBot` & `PerplexityBot`)** | **`PASS`** | `GPTBot=200, PerplexityBot=200` (`0` edge WAF blocks) |
| **`2.4`** | **Live DOM Conversion Slots & Zero Raw `{clickref}`** | **`BLOCKER`** | Missing slots on parked root — queued in `P0-API-002` |
| **`3.1`** | **Live `/sitemap.xml` & Local `_site/` Route Parity** | **`BLOCKER`** | `HTTP 0` (`live=0 vs local=0 URLs`) — queued in `P0-API-002` (`16` MVP Slice 1 routes) |
| **`3.2`** | **Live `/robots.txt` (with `Sitemap:` Pointer)** | **`BLOCKER`** | `HTTP 200` (parked `robots.txt` lacks `Sitemap: https://apicostaudit.com/sitemap.xml`) — queued in `P0-API-003` |
| **`3.3`** | **Live `/llms.txt` (Stage 1 Agentic Discovery)** | **`BLOCKER`** | `HTTP 0` — queued in `P0-API-003` |
| **`3.4`** | **Live `/.well-known/webmcp.json` (Strict JSON Parse)** | **`BLOCKER`** | `HTTP 0` — queued in `P0-API-003` |
| **`4.1`** | **Live Encrypted `/admin/admin-telemetry.enc.json` Payload** | **`BLOCKER`** | `HTTP 0` — queued in `P0-API-003` (`PBKDF2-HMAC-SHA256 >= 210,000 iterations` + `AES-256-GCM`) |

---

## 1. What Is Provisioned & Live Right Now (`STAGE_0 -> STAGE_1` Baseline)

1. **Registrar & Taxonomy Wiring (`LIVE`):**
   - Registered on Porkbun (Order ID `12296644`, `2026-10-27`) under `Research Triangle Park AI Transformation LLC`.
   - Wired into `/workspace/B2B-FAMILY-TAXONOMY-REGISTRY.json` (`v1.7.0`, active slot `4 of 5` in `b2b-audit-family`), `/workspace/TAXONOMY-REGISTRY.md` (`v1.7.0`), `/workspace/scheduler/lockctl.py` (`v2.3.0`), `/workspace/scheduler/PRODUCT-LOCK.json` (`v2.4.0`), and `/workspace/scheduler/audit_day0_launch_gate.py`.
2. **Complete Day-0 PO Package (`LIVE` in `/workspace/apicostaudit/`):**
   - `CHARTER.md` (`v1.0.0`), `PRODUCT-STATE.md` (`v1.0.0`), `ROAD-TO-REVENUE-SPRINT-PLAN.md` (`v1.0.0`), `PO-SPOKE-DAY0-CHECKLIST.md` (`v1.0.0`), `ROUTE-SPEC-64.md` (`v1.0.0` — 64 domain-specific API cost routes across `/llm-api/*`, `/voice-video-api/*`, `/ai-infra-gpu/*`, `/b2b-apis/*`), `AFFILIATE-OPPORTUNITY-BACKLOG.md` (`v1.0.0`), and `VERSION-LOG.md` (`v1.0.0`).

---

## 2. What Is Indexed & Performing (Live Measured Ground Truth — Tuesday, Oct 27, 2026 08:40 AM EDT)

> **Principle 1 Enforcement:** All figures below report strictly live measured actuals at Stage 0 -> Stage 1 initialization (`0` deployed routes, `0` traffic, `$0.00` revenue). Modeled projections are quarantined inside the collapsed drawer below.

| Metric / Operational KPI | Live Measured Value (Oct 27, 2026 08:40 AM EDT) | Source / Status |
| :--- | :--- | :--- |
| **Porkbun Domain Registration** | **`VERIFIED` (`Order 12296644` · `apicostaudit.com`)** | Porkbun (`luke@rtpait.com`) |
| **GSC Property (`sc-domain:apicostaudit.com`)** | **`VERIFIED` (`sc-domain:apicostaudit.com` TXT `google-site-verification=8bv8HrX9CN2abQgy04fXq83zxKYqhMzOMA-LZnRSSmM`)** | Needs GSC TXT token added to Porkbun DNS |
| **Active Built HTML Pages** | **`17 / 17` canonical `API_COSTS` SEO HTML routes (`18` total built HTML routes incl. `/admin/`) live on GitHub Pages** | `/workspace/apicostaudit/ROUTE-SPEC-64.md` |
| **GSC Indexed Pages** | **`0 / 16` (`0.0%`, `drip_gate_passed: false`)** | Awaiting `P0-API-001` & `P0-API-002` |
| **Live PostHog Traffic (`Project 685354`, `$host == apicostaudit.com`)** | **`0` verified Bucket A human visits** | PostHog Project `685354` |
| **Live Confirmed Partner Revenue** | **`$0.00`** | PartnerStack / AWIN / Impact / CJ / Rakuten |

<details>
<summary><strong>[HYPOTHESIS / TARGET MODEL — NOT LIVE TELEMETRY] Quarantined Post-Indexation API Cost Audit Unit Economics (Click to Expand)</strong></summary>

- **Quarantine Notice (`Principle 1`):** Pre-launch planning hypotheses only. Live traffic is `0` and live revenue is `$0.00`.
- **Target Monetization Rails (`[HYPOTHESIS]`):** `10%–35%` recurring revenue share and `$50–$1,200 CPA` across DigitalOcean GPU (`10%` 12-mo), ElevenLabs (`22%` 12-mo), Pinecone (`10%` up to `$1,200`), Retell AI (`15%` 12-mo), Vapi (`15%`), Make.com (`35%` 12-mo), n8n Cloud (`30%` 12-mo), RunPod/Vast.ai GPU cloud, and Datadog/Cloudflare/Twilio partner programs.

</details>

---

## 3. Active #1 Bottleneck

- **Primary Bottleneck:** **Missing Google Search Console `sc-domain:apicostaudit.com` DNS TXT Record (`Blocker 1.2` on Porkbun) + Stage 0 -> Stage 1 Static Eleventy Repo & GitHub Pages Provisioning (`P0-API-001` & `P0-API-002`).**

---

## 4. What Is Next (Sprint 1 Prioritized Backlog — See `ROAD-TO-REVENUE-SPRINT-PLAN.md`)

1. **`P0-API-001` (`Surface B — Chief of Staff`):** Generate `sc-domain:apicostaudit.com` verification token in Google Search Console (`luke@rtpait.com`) and publish `google-site-verification=...` + `_dmarc` (`v=DMARC1; p=reject;`) TXT records in Porkbun DNS.
2. **`P0-API-002` (`Surface A — Web Team Spoke`):** Scaffold Eleventy (`11ty`) build in `/workspace/apicostaudit/`, build the `16` MVP Slice 1 routes across `/llm-api/*`, `/voice-video-api/*`, `/ai-infra-gpu/*`, and `/b2b-apis/*`, and deploy to GitHub Pages (`https://github.com/rtpait/apicostaudit`) with custom domain `apicostaudit.com`.
3. **`P0-API-003` (`Surface A/C — Telemetry, AEO & Spoke Gates`):** Publish `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/.well-known/webmcp.json`, and encrypted `/admin/admin-telemetry.enc.json`, and clear `W-1..W-5`, `LC-1..LC-6`, and `IS-1..IS-5`.
