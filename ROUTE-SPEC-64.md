# Locked 64-Route Specification & MVP Slice 1 Pacing Plan (`apicostaudit.com` · `v1.0.0`)

- **Domain:** `https://apicostaudit.com/` (Porkbun Order `12296644`, registered `2026-10-27` under `Research Triangle Park AI Transformation LLC`, `EIN 42-3641177`)
- **Product Owner:** `SaaS Cost Audit PO` (`bc09e0d9-5fae-487c-b526-020d9aac1bd1` — Governing `API_COSTS` Extension)
- **Multi-PO Family PM:** `B2B Audit Family PM` (`9c1c413e-5df2-4d17-a576-11713450fceb`) / `Project Manager` (`167b2bea-99c8-4e89-99e3-182227974962`)
- **Macro-Category & Sister Tag:** `API_COSTS` · `SISTER_PORTFOLIO_API_COST_AUDIT` (`/workspace/B2B-FAMILY-TAXONOMY-REGISTRY.json` `v1.3.0`)
- **Total Footprint Cap:** **`64` HTML pages** (`66` core SEO routes including `/sitemap.xml` and `/robots.txt`, plus `/llms.txt`, `/llms-full.txt`, `/.well-known/webmcp.json`, and `/admin/`)
- **4-Subdivision Architecture (`Zero Overlap with Sister Domains`):**
  1. **Subdivision 1 — `/llm-api/*` (`18` Routes):** Metered per-1M input/output/cached token, batch API (`50%` off), context window, and fine-tuning cost calculators (`OpenAI`, `Anthropic Claude`, `Google Gemini/Vertex`, `AWS Bedrock`, `Azure OpenAI`, `DeepSeek`, `Mistral`, `Cohere`, `Together AI`, `Fireworks AI`, `Groq`).
  2. **Subdivision 2 — `/voice-video-api/*` (`14` Routes):** Per-minute, per-character, and per-stream Voice AI & Video AI orchestration calculators (`Retell AI`, `Vapi`, `ElevenLabs API`, `Deepgram Nova-3`, `AssemblyAI`, `OpenAI Realtime API`, `Cartesia`, `LiveKit`, `Mux`, `HeyGen/Tavus API`).
  3. **Subdivision 3 — `/ai-infra-gpu/*` (`16` Routes):** Serverless vector database read/write units (`Pinecone`, `Qdrant`, `Weaviate`), GPU cloud instance hour & token-to-GPU breakeven calculators (`RunPod`, `Vast.ai`, `Lambda`, `Modal`, `DigitalOcean GPU`), and LLM observability trace overages (`LangSmith`, `Helicone`, `Datadog LLM`).
  4. **Subdivision 4 — `/b2b-apis/*` + Core Governance (`16` Routes: `12` B2B API calculators + `4` Core/Trust routes `/`, `/methodology/`, `/privacy/`, `/terms/`):** Communications (`Twilio`, `SendGrid`, `Postmark`, `Resend`), Fintech/Verification (`Plaid`, `Stripe Identity/Radar`), Maps (`Google Maps`, `Mapbox`), Auth MAU (`Auth0`, `Clerk`, `WorkOS`), and Webhook/Operation overages (`Make.com`, `n8n`).

---

## 1. Cohort & Subdivision Breakdown Matrix

| Release Cohort | Sub 1 (`/llm-api/`) | Sub 2 (`/voice-video-api/`) | Sub 3 (`/ai-infra-gpu/`) | Sub 4 (`/b2b-apis/` + Core) | Total HTML Routes | Unlock Gate (Principle 3) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **`mvp_slice_1` (Sprint 1 Launch)** | **`4`** | **`3`** | **`3`** | **`6`** (`2` B2B API + `4` Core/Trust) | **`16`** | **Ships Live First in Sprint 1 (`P0-API-002`)** |
| **`drip-queue/cohort-1`** | `4` | `3` | `3` | `2` | `12` | Requires `>=12/16` (`>=75%`) MVP Slice 1 routes indexed in GSC + `+10%` WoW impressions |
| **`drip-queue/cohort-2`** | `4` | `3` | `3` | `2` | `12` | Requires `>=21/28` (`>=75%`) active routes indexed in GSC + `+10%` WoW impressions |
| **`drip-queue/cohort-3`** | `3` | `3` | `4` | `2` | `12` | Requires `>=30/40` (`>=75%`) active routes indexed in GSC + `+10%` WoW impressions |
| **`drip-queue/cohort-4`** | `3` | `2` | `3` | `4` | `12` | Requires `>=39/52` (`>=75%`) active routes indexed in GSC -> reaches `64`-HTML-page cap |
| **Total Locked Footprint** | **`18` Routes** | **`14` Routes** | **`16` Routes** | **`16` Routes** | **`64` HTML (`66` SEO)** | Hard Cap until `>=48/64` (`>=75%`) indexed & Page-1 non-brand traction proven |

---

## 2. Complete 64-Route Specification Table (`apicostaudit.com`)

### A. MVP Slice 1 — 16 Core Money & Governance Routes (Build & Ship First in Sprint 1)

| # | Slug | Subdivision | Macro | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query | Primary Pricing / Statutory Source | Target Partner Slots |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/` | `core_hub` | `apiTokenCalc` | **API Cost Audit: 2026 LLM Token, Voice & GPU API Calculators** | `api cost calculator llm token voice gpu` | OpenAI, Anthropic, AWS Bedrock, Twilio & Pinecone 2026 Public API Rate Cards + NIST AI RMF | `elevenlabs, pinecone, digitalocean-gpu, retell, make` |
| 2 | `/llm-api/` | `sub_1_llm_api` | `apiTokenCalc` | **2026 LLM API Pricing Calculator: Cost per 1M Tokens Audit** | `llm api pricing calculator per million tokens` | Published 2026 Token Rate Cards (OpenAI, Anthropic, Google Vertex AI, AWS Bedrock, DeepSeek) | `digitalocean-gpu, runpod, pinecone, openrouter` |
| 3 | `/llm-api/openai-vs-anthropic-token-cost-calculator/` | `sub_1_llm_api` | `apiTokenCalc` | **OpenAI GPT-4o vs Claude 3.7 Sonnet API Token Cost Calculator** | `openai vs anthropic api cost calculator` | OpenAI API Pricing ($2.50/$10.00 per 1M) vs Anthropic Claude 3.7 Sonnet ($3.00/$15.00 per 1M) | `digitalocean-gpu, runpod, pinecone, helicone` |
| 4 | `/llm-api/prompt-caching-vs-batch-api-savings-calculator/` | `sub_1_llm_api` | `apiTokenCalc` | **LLM Prompt Caching (90% Off) & Batch API (50% Off) Calculator** | `llm prompt caching vs batch api cost calculator` | Anthropic Prompt Caching (0.1x Read / 1.25x Write) & OpenAI Cached Input (0.5x) + Batch API 50% Discount | `pinecone, helicone, digitalocean-gpu, cloudflare` |
| 5 | `/llm-api/aws-bedrock-vs-azure-openai-enterprise-tco/` | `sub_1_llm_api` | `apiTokenCalc` | **AWS Bedrock vs Azure OpenAI PTU & On-Demand API Cost Audit** | `aws bedrock vs azure openai pricing calculator` | AWS Bedrock On-Demand vs Provisioned Throughput (PTU) Hourly Commitments & Azure OpenAI PTU Pricing | `aws-activate, digitalocean-gpu, datadog, pinecone` |
| 6 | `/voice-video-api/` | `sub_2_voice_video` | `voiceApiCalc` | **Voice AI & Video API Cost Calculator ($0.04–$0.24/min TCO)** | `voice ai api cost per minute calculator` | Published 2026 Rate Cards: Retell AI, Vapi, ElevenLabs, Deepgram Nova-3, OpenAI Realtime & Twilio SIP | `elevenlabs, retell, vapi, deepgram, twilio` |
| 7 | `/voice-video-api/retell-vs-vapi-voice-agent-per-minute-cost-calculator/` | `sub_2_voice_video` | `voiceApiCalc` | **Retell AI vs Vapi Per-Minute Cost Calculator ($0.07–$0.22/m)** | `retell ai vs vapi pricing calculator` | Retell AI ($0.07+/min) vs Vapi ($0.05/min platform + STT + LLM + TTS + Telephony unbundled stack) | `retell, vapi, elevenlabs, deepgram, twilio` |
| 8 | `/voice-video-api/elevenlabs-vs-deepgram-tts-stt-api-cost-audit/` | `sub_2_voice_video` | `voiceApiCalc` | **ElevenLabs TTS vs Deepgram Nova-3 STT API Cost Calculator** | `elevenlabs api pricing per minute calculator` | ElevenLabs Flash v2.5 / Multilingual v2 Character Credits vs Deepgram Aura TTS & Nova-3 STT ($0.0043/min) | `elevenlabs, deepgram, retell, vapi` |
| 9 | `/ai-infra-gpu/` | `sub_3_ai_infra_gpu` | `gpuInfraCalc` | **AI GPU Cloud & Vector DB Serverless Cost Calculator (2026)** | `gpu cloud and vector database cost calculator` | Published H100/A100/L40S Hourly Rates (RunPod, Vast.ai, DigitalOcean, Modal) + Pinecone Read/Write Units | `pinecone, digitalocean-gpu, runpod, vast-ai` |
| 10 | `/ai-infra-gpu/pinecone-serverless-read-write-unit-cost-calculator/` | `sub_3_ai_infra_gpu` | `gpuInfraCalc` | **Pinecone Serverless Cost Calculator: Read/Write Units & GB** | `pinecone serverless pricing calculator` | Pinecone Serverless Rate Card ($8.25–$16/1M Read Units, $2–$4/1M Write Units, $0.33/GB/mo Storage) | `pinecone, digitalocean-gpu, qdrant, supabase` |
| 11 | `/ai-infra-gpu/runpod-vs-vast-ai-gpu-inference-cost-calculator/` | `sub_3_ai_infra_gpu` | `gpuInfraCalc` | **RunPod vs Vast.ai vs DigitalOcean H100 GPU Cost Calculator** | `runpod vs vast ai h100 gpu pricing calculator` | RunPod Serverless/Pods vs Vast.ai On-Demand/Interruptible vs DigitalOcean GPU Droplets ($1.49–$3.39/hr) | `runpod, vast-ai, digitalocean-gpu, modal` |
| 12 | `/b2b-apis/` | `sub_4_b2b_apis` | `b2bApiCalc` | **B2B API Cost Calculator: Twilio, Plaid, Maps & Webhook Audit** | `b2b api pricing calculator twilio plaid sendgrid` | Published 2026 Tiered API Schedules (Twilio, SendGrid, Plaid, Stripe Identity, Google Maps, Make/n8n) + FCC USF | `twilio, make, n8n, cloudflare, postman` |
| 13 | `/b2b-apis/twilio-sms-voice-verify-per-call-fee-calculator/` | `sub_4_b2b_apis` | `b2bApiCalc` | **Twilio SMS ($0.0083/seg), Voice & Verify API Fee Calculator** | `twilio sms and verify api cost calculator` | Twilio US SMS ($0.0083/segment + Carrier 10DLC $0.003–$0.005 Fees) + Verify ($0.05/OTP) + FCC USF Surcharges | `twilio, vonage, telnyx, make` |
| 14 | `/methodology/` | `core_trust` | `apiTokenCalc` | **API Cost Audit Methodology: Token, Minute & GPU Benchmarks** | `api cost audit methodology and rate card sources` | Official Vendor API Rate Cards + FCC Telecom Surcharge Rules + FTC 16 CFR Part 255 Affiliate Disclosures | `elevenlabs, pinecone, digitalocean-gpu, make` |
| 15 | `/privacy/` | `core_trust` | `apiTokenCalc` | **API Cost Audit Privacy Policy & Zero-PII Architecture (2026)** | `apicostaudit privacy policy` | CCPA/CPRA, GDPR & PostHog identified_only Zero-PII Client-Side Calculator Architecture | `elevenlabs, pinecone, digitalocean-gpu` |
| 16 | `/terms/` | `core_trust` | `apiTokenCalc` | **API Cost Audit Terms of Service & Non-YMYL Safe Harbor** | `apicostaudit terms of service` | Non-YMYL Informational FinOps Safe Harbor & FTC 16 CFR Part 255 Endorsement Guides (.gov) | `elevenlabs, pinecone, digitalocean-gpu` |

### B. Staged Drip Queue — Cohort 1 (Routes 17–28: 4 LLM + 3 Voice + 3 AI Infra + 2 B2B API)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 17 | `/llm-api/deepseek-r1-v3-vs-openai-o3-mini-token-cost-audit/` | `sub_1_llm_api` | **DeepSeek R1/V3 vs OpenAI o3-mini API Token Cost Calculator** | `deepseek api vs openai o3 mini cost calculator` |
| 18 | `/llm-api/google-gemini-2-5-pro-flash-vertex-api-cost-calculator/` | `sub_1_llm_api` | **Google Gemini 2.5 Pro & Flash API Cost Calculator (Vertex)** | `gemini 2.5 flash vs pro api pricing calculator` |
| 19 | `/llm-api/together-ai-vs-fireworks-vs-groq-open-llm-api-pricing/` | `sub_1_llm_api` | **Groq vs Together AI vs Fireworks Llama-3 API Cost Calculator** | `groq vs together ai vs fireworks pricing` |
| 20 | `/llm-api/api-tokens-vs-chatgpt-claude-team-seats-breakeven/` | `sub_1_llm_api` | **LLM API Tokens vs $25–$30/Seat ChatGPT/Claude Breakeven** | `openai api vs chatgpt team cost breakeven calculator` |
| 21 | `/voice-video-api/openai-realtime-api-vs-cascaded-voice-pipeline-cost/` | `sub_2_voice_video` | **OpenAI Realtime API ($0.06/$0.24/m) vs Cascaded Voice TCO** | `openai realtime api cost per minute calculator` |
| 22 | `/voice-video-api/bland-ai-vs-retell-vs-vapi-enterprise-voice-audit/` | `sub_2_voice_video` | **Bland AI ($0.09/m) vs Retell vs Vapi Concurrency Fee Audit** | `bland ai vs vapi vs retell pricing comparison` |
| 23 | `/voice-video-api/cartesia-sonic-vs-elevenlabs-low-latency-tts-cost/` | `sub_2_voice_video` | **Cartesia Sonic vs ElevenLabs Turbo/Flash TTS API Cost Audit** | `cartesia vs elevenlabs api pricing` |
| 24 | `/ai-infra-gpu/self-hosted-vllm-gpu-vs-managed-llm-api-breakeven/` | `sub_3_ai_infra_gpu` | **Self-Hosted GPU (vLLM) vs Managed LLM API Token Breakeven** | `self hosted llm gpu vs api cost calculator` |
| 25 | `/ai-infra-gpu/digitalocean-gpu-droplets-vs-aws-ec2-p5-g6-cost/` | `sub_3_ai_infra_gpu` | **DigitalOcean H100 GPU Droplets vs AWS EC2 P5/G6 Cost Audit** | `digitalocean gpu droplet vs aws ec2 pricing` |
| 26 | `/ai-infra-gpu/qdrant-cloud-vs-pinecone-vs-weaviate-vector-tco/` | `sub_3_ai_infra_gpu` | **Qdrant Cloud vs Pinecone vs Weaviate Vector DB Cost Audit** | `qdrant vs pinecone vs weaviate pricing calculator` |
| 27 | `/b2b-apis/plaid-api-auth-balance-signal-per-call-cost-calculator/` | `sub_4_b2b_apis` | **Plaid API Pricing Calculator: Auth, Balance & Signal Fees** | `plaid api cost per call calculator` |
| 28 | `/b2b-apis/stripe-identity-and-radar-per-verification-api-fees/` | `sub_4_b2b_apis` | **Stripe Identity ($1.50) & Radar ($0.05–$0.07) API Fee Audit** | `stripe identity verification api cost calculator` |

### C. Staged Drip Queue — Cohort 2 (Routes 29–40: 4 LLM + 3 Voice + 3 AI Infra + 2 B2B API)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 29 | `/llm-api/llm-fine-tuning-vs-rag-context-window-token-tco/` | `sub_1_llm_api` | **LLM Fine-Tuning vs Long-Context RAG Token Cost Calculator** | `fine tuning vs rag token cost calculator` |
| 30 | `/llm-api/mistral-large-codestral-vs-claude-sonnet-api-cost/` | `sub_1_llm_api` | **Mistral Large & Codestral vs Claude API Token Cost Audit** | `mistral api pricing calculator` |
| 31 | `/llm-api/cohere-embed-rerank-vs-openai-embeddings-api-cost/` | `sub_1_llm_api` | **Cohere Rerank ($2/1k) & Embed vs OpenAI Embeddings TCO** | `cohere rerank and embedding api cost calculator` |
| 32 | `/llm-api/replicate-vs-fal-ai-image-flux-generation-api-cost/` | `sub_1_llm_api` | **Replicate vs Fal.ai Flux Image Generation API Cost Audit** | `replicate vs fal ai pricing per image` |
| 33 | `/voice-video-api/assemblyai-universal-2-vs-deepgram-nova-3-stt-cost/` | `sub_2_voice_video` | **AssemblyAI ($0.15/hr) vs Deepgram Nova-3 STT Cost Audit** | `assemblyai vs deepgram pricing calculator` |
| 34 | `/voice-video-api/livekit-cloud-vs-daily-co-webrtc-voice-video-minutes/` | `sub_2_voice_video` | **LiveKit Cloud vs Daily.co WebRTC AI Agent Minute Calculator** | `livekit vs daily co pricing calculator` |
| 35 | `/voice-video-api/heygen-vs-tavus-conversational-video-avatar-api-cost/` | `sub_2_voice_video` | **HeyGen Streaming Avatar vs Tavus Video API Per-Minute TCO** | `heygen api vs tavus api cost per minute` |
| 36 | `/ai-infra-gpu/modal-vs-replicate-vs-baseten-serverless-gpu-cost/` | `sub_3_ai_infra_gpu` | **Modal vs Baseten vs Replicate Per-Second Serverless GPU TCO** | `modal vs baseten serverless gpu pricing` |
| 37 | `/ai-infra-gpu/lambda-labs-vs-coreweave-reserved-h100-cluster-cost/` | `sub_3_ai_infra_gpu` | **Lambda Labs vs CoreWeave H100/B200 GPU Cluster Cost Audit** | `lambda labs vs coreweave h100 pricing` |
| 38 | `/ai-infra-gpu/supabase-pgvector-vs-pinecone-serverless-cost-audit/` | `sub_3_ai_infra_gpu` | **Supabase pgvector Compute vs Pinecone Serverless TCO Audit** | `supabase pgvector vs pinecone cost calculator` |
| 39 | `/b2b-apis/sendgrid-vs-postmark-vs-resend-email-api-overage-cost/` | `sub_4_b2b_apis` | **SendGrid vs Postmark vs Resend Email API Overage Calculator** | `sendgrid vs postmark vs resend pricing calculator` |
| 40 | `/b2b-apis/aws-ses-vs-resend-vs-mailgun-transactional-email-tco/` | `sub_4_b2b_apis` | **AWS SES ($0.10/1k) vs Resend vs Mailgun Dedicated IP TCO** | `aws ses vs mailgun vs resend cost calculator` |

### D. Staged Drip Queue — Cohort 3 (Routes 41–52: 3 LLM + 3 Voice + 4 AI Infra + 2 B2B API)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 41 | `/llm-api/openrouter-fee-markup-vs-direct-llm-provider-api-cost/` | `sub_1_llm_api` | **OpenRouter (5.5% Credit Fee) vs Direct LLM API Cost Audit** | `openrouter fees vs direct api pricing` |
| 42 | `/llm-api/perplexity-sonar-api-vs-tavily-exa-search-api-cost/` | `sub_1_llm_api` | **Perplexity Sonar vs Tavily vs Exa AI Search API Calculator** | `tavily vs exa vs perplexity api pricing` |
| 43 | `/llm-api/firecrawl-vs-jina-reader-vs-apify-web-scraping-api-tco/` | `sub_1_llm_api` | **Firecrawl vs Jina Reader vs Apify Scraping API Credit Audit** | `firecrawl vs apify pricing calculator` |
| 44 | `/voice-video-api/mux-video-encoding-storage-delivery-per-minute-cost/` | `sub_2_voice_video` | **Mux Video API Cost Calculator: Encoding, Storage & Delivery** | `mux video api pricing calculator` |
| 45 | `/voice-video-api/twilio-vs-telnyx-vs-vonage-sip-trunking-per-minute/` | `sub_2_voice_video` | **Twilio vs Telnyx vs Vonage SIP Trunking Per-Minute Audit** | `telnyx vs twilio sip trunking cost calculator` |
| 46 | `/voice-video-api/hume-ai-empathic-voice-evi-per-minute-api-calculator/` | `sub_2_voice_video` | **Hume AI Empathic Voice (EVI) Per-Minute API Cost Calculator** | `hume ai api pricing per minute` |
| 47 | `/ai-infra-gpu/langsmith-vs-langfuse-vs-helicone-trace-ingestion-cost/` | `sub_3_ai_infra_gpu` | **LangSmith ($0.50/1k) vs Langfuse vs Helicone Trace TCO** | `langsmith vs langfuse pricing calculator` |
| 48 | `/ai-infra-gpu/datadog-llm-observability-and-custom-metrics-fee-audit/` | `sub_3_ai_infra_gpu` | **Datadog LLM Observability & Custom Metrics Cardinality TCO** | `datadog llm observability pricing calculator` |
| 49 | `/ai-infra-gpu/cloudflare-workers-ai-and-r2-zero-egress-cost-calculator/` | `sub_3_ai_infra_gpu` | **Cloudflare Workers AI Neurons & R2 ($0 Egress) vs AWS S3** | `cloudflare r2 vs aws s3 egress cost calculator` |
| 50 | `/ai-infra-gpu/milvus-zilliz-cloud-vs-turbopuffer-vector-search-tco/` | `sub_3_ai_infra_gpu` | **Zilliz Cloud (Milvus) vs Turbopuffer Vector API Cost Audit** | `zilliz cloud vs turbopuffer pricing` |
| 51 | `/b2b-apis/google-maps-places-api-vs-mapbox-per-1000-requests-tco/` | `sub_4_b2b_apis` | **Google Maps Places API ($17/1k) vs Mapbox Request Calculator** | `google maps api vs mapbox pricing calculator` |
| 52 | `/b2b-apis/auth0-vs-clerk-vs-workos-b2b-mau-and-sso-connection-tax/` | `sub_4_b2b_apis` | **Auth0 vs Clerk vs WorkOS ($125/SSO) MAU Tier Cost Calculator** | `auth0 vs clerk vs workos pricing calculator` |

### E. Staged Drip Queue — Cohort 4 (Routes 53–64: 3 LLM + 2 Voice + 3 AI Infra + 4 B2B API)

| # | Slug | Subdivision | Dollar/Rate-Anchored `seoTitle` (`<=60` chars) | Target Query |
| :---: | :--- | :--- | :--- | :--- |
| 53 | `/llm-api/vision-llm-image-token-tile-calculator-gpt4o-claude/` | `sub_1_llm_api` | **Vision LLM Image & PDF Token Tile Cost Calculator (2026)** | `gpt 4o and claude vision image token calculator` |
| 54 | `/llm-api/structured-outputs-json-schema-token-overhead-calculator/` | `sub_1_llm_api` | **Structured Outputs & Tool-Call JSON Token Overhead Audit** | `llm tool calling token overhead calculator` |
| 55 | `/llm-api/multi-agent-loop-token-amplification-cost-calculator/` | `sub_1_llm_api` | **Multi-Agent Loop Token Amplification (5x–20x) Cost Calculator** | `agentic workflow token cost calculator` |
| 56 | `/voice-video-api/whatsapp-business-api-per-conversation-fee-calculator/` | `sub_2_voice_video` | **WhatsApp Business API Per-Conversation & Utility Fee Audit** | `whatsapp business api pricing calculator` |
| 57 | `/voice-video-api/cloudflare-stream-vs-aws-ivs-live-video-api-cost/` | `sub_2_voice_video` | **Cloudflare Stream ($1/1k min) vs AWS IVS Video API TCO** | `cloudflare stream vs mux vs aws ivs pricing` |
| 58 | `/ai-infra-gpu/e2b-code-interpreter-vs-modal-sandbox-per-second-cost/` | `sub_3_ai_infra_gpu` | **E2B AI Code Sandbox ($0.00014/s) vs Modal Sandbox Cost Audit** | `e2b sandbox pricing calculator` |
| 59 | `/ai-infra-gpu/browserbase-vs-steel-headless-browser-agent-hour-cost/` | `sub_3_ai_infra_gpu` | **Browserbase vs Self-Hosted Playwright Agent Session Cost** | `browserbase pricing calculator per browser hour` |
| 60 | `/ai-infra-gpu/sentry-error-replay-event-quota-overage-cost-calculator/` | `sub_3_ai_infra_gpu` | **Sentry On-Demand Event & Session Replay Overage Calculator** | `sentry event overage pricing calculator` |
| 61 | `/b2b-apis/make-vs-n8n-cloud-vs-zapier-webhook-operation-overages/` | `sub_4_b2b_apis` | **Make.com vs n8n Cloud vs Zapier Task/Operation Cost Audit** | `make vs n8n vs zapier operation cost calculator` |
| 62 | `/b2b-apis/apollo-vs-clearbit-vs-peopledatalabs-enrichment-api-tco/` | `sub_4_b2b_apis` | **Apollo vs PeopleDataLabs vs Clay B2B Enrichment Credit TCO** | `b2b data enrichment api cost per credit` |
| 63 | `/b2b-apis/aws-api-gateway-vs-kong-vs-cloudflare-api-shield-cost/` | `sub_4_b2b_apis` | **AWS API Gateway ($1–$3.50/1M) vs Kong & Cloudflare TCO** | `aws api gateway cost per million requests` |
| 64 | `/b2b-apis/algolia-vs-typesense-cloud- vs-meilisearch-search-api-tco/`.replace(" ", "") | `sub_4_b2b_apis` | **Algolia ($0.50/1k) vs Typesense Cloud Search API Calculator** | `algolia vs typesense cloud pricing calculator` |
