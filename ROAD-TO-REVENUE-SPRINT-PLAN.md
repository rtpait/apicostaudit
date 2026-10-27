# API Cost Audit (`apicostaudit.com`) — "Road to Revenue" 4-Stage Gated Sprint Plan (`v1.0.0`)

- **Product Owner ("The Why, The What & The Measured Truth"):** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1` — Governing `API_COSTS` Extension)
- **Multi-PO Family PM ("The How & The When"):** `B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`) / `Project Manager` (`167b2bea-99c8-4e89-99e3-182227974962`)
- **Domain & Macro-Category:** `apicostaudit.com` (`sc-domain:apicostaudit.com`, Porkbun Order `12296644`) · `API_COSTS` (`SISTER_PORTFOLIO_API_COST_AUDIT`)
- **Canonical Governance Standard:** `/workspace/PRODUCT-OWNER-OPERATING-PRINCIPLES.md` (Principles 1–9) & `/workspace/ROAD-TO-REVENUE-STANDARD.md` (`v1.0.0`)
- **Last Updated:** Tuesday, Oct 27, 2026 (`v1.0.0`)

---

## 0. Principle 1 Enforcement: Live Measured Ground Truth vs. Quarantined Target Hypotheses

> **Principle 1 Rule ("Measured Truth First"):** Every phase, dashboard, and sprint review must lead with **absolute live measured metrics** and strictly quarantine modeled projections inside a collapsed drawer badged `HYPOTHESIS / TARGET MODEL — NOT LIVE TELEMETRY`.

| Metric Category | Live Measured Value (Oct 27, 2026) | Telemetry Source | Current Bottleneck Status |
| :--- | :--- | :--- | :--- |
| **Domain Registration** | **`apicostaudit.com` (`Order 12296644`)** | Porkbun (`luke@rtpait.com`) | Registered `2026-10-27`; parked `A` records live |
| **GSC Property (`sc-domain:apicostaudit.com`)** | **`PENDING_DNS_TXT` (`Blocker 1.2`)** | `audit_day0_launch_gate.py` | **#1 Immediate Blocker:** Generate GSC TXT record and add to Porkbun DNS |
| **Live Production Footprint** | **`0` live HTML routes (`16` MVP Slice 1 routes specified)** | `ROUTE-SPEC-64.md` (`v1.0.0`) | Sprint 1 Eleventy build & GitHub Pages setup queued (`P0-API-002`) |
| **Live PostHog Traffic (`Project 685354`)** | **`0` verified Bucket A human visits** | PostHog (`$host == apicostaudit.com`) | Awaiting Sprint 1 cutover |
| **Live Confirmed Partner Revenue** | **`$0.00`** | PartnerStack / AWIN / Impact / CJ / Rakuten | Pre-revenue Stage 0 -> Stage 1 baseline |

---

## Stage 0 -> Stage 1 (Sprint 1): Day-0 GSC DNS TXT Verification & 16-Route MVP Calculator Launch

- **Stage Exit Gate:** `16/16` MVP Slice 1 HTML routes live on `https://apicostaudit.com/` (`HTTP 200 OK`), `sc-domain:apicostaudit.com` verified via Porkbun DNS TXT, `100%` pass on `audit_day0_launch_gate.py --domain apicostaudit.com`, and `100%` `PASS` across `W-1..W-5`, `LC-1..LC-6`, and `IS-1..IS-5`.
- **Prioritized Sprint 1 Tasks:**
  1. **`P0-API-001` (`Surface B — Chief of Staff`):** Create `sc-domain:apicostaudit.com` in Google Search Console (`luke@rtpait.com`), add `google-site-verification=...` TXT record and `_dmarc` (`v=DMARC1; p=reject; sp=reject;`) to Porkbun DNS, and repoint `A`/`CNAME` records to GitHub Pages (`185.199.108.153..111.153`).
  2. **`P0-API-002` (`Surface A — Web Team Spoke`):** Scaffold the Eleventy (`11ty`) build in `/workspace/apicostaudit/` and ship the **16 MVP Slice 1 routes** across all 4 canonical subdivisions:
     - **Core & Trust (`4` routes):** `/`, `/methodology/`, `/privacy/`, `/terms/`
     - **Subdivision 1 — `/llm-api/` (`4` routes):** `/llm-api/`, `/llm-api/openai-vs-anthropic-token-cost-calculator/`, `/llm-api/prompt-caching-vs-batch-api-savings-calculator/`, `/llm-api/aws-bedrock-vs-azure-openai-enterprise-tco/`
     - **Subdivision 2 — `/voice-video-api/` (`3` routes):** `/voice-video-api/`, `/voice-video-api/retell-vs-vapi-voice-agent-per-minute-cost-calculator/`, `/voice-video-api/elevenlabs-vs-deepgram-tts-stt-api-cost-audit/`
     - **Subdivision 3 — `/ai-infra-gpu/` (`3` routes):** `/ai-infra-gpu/`, `/ai-infra-gpu/pinecone-serverless-read-write-unit-cost-calculator/`, `/ai-infra-gpu/runpod-vs-vast-ai-gpu-inference-cost-calculator/`
     - **Subdivision 4 — `/b2b-apis/` (`2` routes):** `/b2b-apis/`, `/b2b-apis/twilio-sms-voice-verify-per-call-fee-calculator/`
  3. **`P0-API-003` (`Surface A/C — Telemetry, AEO & Spoke Sign-Off`):** Wire PostHog Project `685354` (`$host = apicostaudit.com`, Stage 1A/1B 3-bucket bot + owner-device exclusion), publish `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/.well-known/webmcp.json` (`STAGE_2_AUTO_TRIGGER_ENABLED = False`), and `/admin/admin-telemetry.enc.json` (`PBKDF2 >= 210,000` + `AES-256-GCM`), and embed `Rule H2` Sister Referral Summary Cards to `saascostaudit.com`, `b2bfeeaudit.com`, and `b2bcostaudit.com`.

---

## Stage 1 -> Stage 2 (Sprint 2): GSC Indexation Velocity (`>=12/16` MVP Routes -> `>=75%`) & Open-Data Citation Seeding

- **Stage Exit Gate (`Principle 3`):** `index_coverage_ratio >= 0.75` (`>=12/16` MVP routes indexed in `sc-domain:apicostaudit.com`), `wow_impression_velocity >= +10%`, `crawl_exclusion_ceiling <= 0.25`, and `>=15` verified Bucket A human sessions/day.
- **Sprint 2 Tasks:**
  1. Submit `https://apicostaudit.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and register `apicostaudit.com` in `/workspace/scheduler/GSC-PRIORITY-INDEX-QUEUE.json` for daily 10-URL inspection batches (`MODE_1`).
  2. Publish CC-BY-4.0 open benchmark datasets (`/datasets/llm-api-token-pricing-benchmarks-2026.{csv,json}`, `/datasets/voice-ai-agent-per-minute-benchmarks-2026.{csv,json}`, `/datasets/gpu-cloud-inference-hourly-rates-2026.{csv,json}`) and mirror to GitHub (`https://github.com/rtpait/`) for high-DR developer backlinks.
  3. Swap Stage 1 direct UTM links in `src/_data/partnerRouting.json` to Stage 2 approved affiliate deep links across PartnerStack (`ElevenLabs`, `Pinecone`, `n8n`), AWIN `3133124` (`DigitalOcean GPU`, `Bark US MID 58887`), Impact `8038782`, and direct API partner programs (`Retell AI`, `Vapi`, `Make.com`, `RunPod`, `Vast.ai`).

---

## Stage 2 -> Stage 3 (Sprints 3–4): Earned Drip Cohort Promotions (`16 -> 28 -> 40 -> 52 -> 64` Routes)

- **Hard Pacing Rule (`Principle 3`):** Unlock staged cohorts (`12` routes per cohort across `drip-queue/cohort-1` .. `cohort-4`) one cohort at a time **strictly after** `gsc_index_pull.py` verifies `drip_gate_passed: true` (`>=75%` index coverage at each step, reaching the `>=48/64` full-footprint indexation gate).
  - **Cohort 1 (`Routes 17–28`):** DeepSeek/Mistral/Groq token calculators, OpenAI Realtime API vs. cascaded Voice AI math, DigitalOcean GPU vs. AWS EC2 G6/P5, and Plaid/Stripe Identity per-call fintech API calculators.
  - **Cohort 2 (`Routes 29–40`):** Fine-tuning vs. RAG token breakeven, LiveKit/Daily WebRTC minute calculators, Qdrant/Weaviate vector cost audits, and SendGrid/Postmark/Resend email API overage calculators.
  - **Cohort 3 (`Routes 41–52`):** LangSmith/Helicone/Datadog LLM trace ingestion calculators, Modal/Lambda serverless GPU cold-start calculators, Google Maps vs. Mapbox request-tier calculators, and Auth0/Clerk/WorkOS MAU cliff calculators.
  - **Cohort 4 (`Routes 53–64`):** Enterprise API gateway & webhook orchestration overages (`Make.com`, `n8n`, `Zapier`, `Kong`, `Apigee`, `Cloudflare Workers`), completing the locked `64`-route footprint (`>=48/64` indexed).

---

## Stage 3 -> Stage 4 (Sprint 5): High-Ticket Cloud Credit / FinOps Lead Routing & Agentic API Monetization

- **Stage Exit Gate:** Consistent verified affiliate commissions (`>$1,000/mo` run-rate) + `>=100` daily Bucket A human visits.
- **Sprint 5 Tasks:**
  1. Optimize highest-EPC partner slots (`top_converting_routes.json`) across GPU cloud commitments, Vector DB annual plans, and Voice AI production volume tiers.
  2. Evaluate Stage 2 `HTTP 402` Pro Agentic Data Key (`$49/mo`) on bulk API pricing drift feeds once trailing 7-day Bucket B agentic calls exceed `500/week` (requires explicit owner sign-off; `STAGE_2_AUTO_TRIGGER_ENABLED` remains `False` until approved).
