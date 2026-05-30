

export const FEATURES = [
    {
      id: 1,
      code: "F-01",
      badge: "Service Intelligence",
      title: "AI Work Order\nAssistant",
      tagline: "Your best service advisor, available on every work order.",
      color: "#0EA5E9",
      accent: "#38BDF8",
      dark: "#0369A1",
      icon: "⚙️",
      problem: {
        headline: "The Problem",
        body: "When a customer calls and says 'my engine won't start and smells like fuel,' a junior service writer stares at a blank form. They don't know which operation codes to use, which parts to order, or how long the job will take. They wing it — underquoting labor, missing parts, losing margin. Senior advisors who do know retire. The knowledge walks out the door with them.",
        stats: [
          { label: "Average estimate creation time", value: "25–40 min", note: "for complex jobs" },
          { label: "Unbilled labor rate", value: "15–25%", note: "industry average" },
          { label: "Rework rate from missed parts", value: "1 in 8 jobs", note: "requires return visit" },
        ],
      },
      solution: {
        headline: "What the AI Does",
        steps: [
          {
            title: "Complaint Intake",
            body: "Service writer types the customer complaint in plain language: 'engine stalls at idle, rough start in cold weather.' The AI reads it.",
          },
          {
            title: "Context Pull",
            body: "AI instantly surfaces the vessel's full DockMaster service history — every past work order, every part used, every technician note on that specific boat.",
          },
          {
            title: "Diagnosis Suggestions",
            body: "Based on the complaint + make/model/year + history, AI suggests the 3 most likely root causes, ranked by probability, with brief reasoning for each.",
          },
          {
            title: "Pre-Populated Estimate",
            body: "AI drafts the estimate: operation codes, standard labor hours, required parts list with quantities, and flags any special-order items that need advance procurement.",
          },
          {
            title: "Human Review & Send",
            body: "The service writer reviews, edits if needed, and sends — in minutes instead of 40. The AI learns from edits over time.",
          },
        ],
      },
      dataRequired: [
        "Historical work orders (operation code, labor hours, parts used, boat make/model/year)",
        "Customer/vessel service history already in DockMaster",
        "Parts catalog and pricing from Inventory module",
        "Technician notes and resolution outcomes",
      ],
      existing: "DockMaster already has an AI scheduling assistant (assigns technicians). This is different — it's upstream, at estimate creation, before a job is even scheduled.",
      gtm: {
        positioning: "Embed in the existing Work Order / Estimate creation screen as a native panel. Not a separate product — an enhancement to the workflow marina staff already live in every day.",
        tiers: [
          { name: "Included", price: "DockMaster Web Pro", desc: "Basic complaint-to-operation-code suggestions. Drives Web adoption." },
          { name: "Add-On Module", price: "$149–$299/mo", desc: "Full diagnostic reasoning, parts pre-population, service history context, learning from edits." },
          { name: "Enterprise", price: "Custom", desc: "Multi-location knowledge sharing — top technician diagnosis patterns roll up across all locations." },
        ],
        sales: [
          "Lead with the ROI story: recovering 30 min of unbilled labor per tech per day at a 10-tech shop = $120K+/year recovered.",
          "Pilot with 5–10 high-volume boatyards in Year 1. Capture before/after metrics on estimate time and rework rate.",
          "Position as 'institutional knowledge that never retires' — powerful message for shops losing senior staff.",
          "Case study from pilot → conference presentation at DockMaster User Conference (Oct 2026) → broad rollout.",
        ],
        moat: "Every work order correction made by a service writer trains the model. After 6 months of use, DockMaster's model knows marine repair patterns better than any general-purpose AI. Competitors can't replicate this without the same depth of historical work order data.",
      },
      sections: {
        stats: {
          headline: "Stat Justification",
          items: [
            {
              stat: "25–40 min estimate creation time for complex jobs",
              icon: "⏱️",
              justification: "This is a direct analogue from the auto repair industry, which is the closest benchmark we have — marine service shops operate on identical workflows (complaint intake, diagnosis, estimate, labor + parts). Industry benchmarks across auto repair confirm that writing a complex estimate — one involving multiple potential root causes, flat-rate hour lookups, and parts ordering — routinely takes 25–40 minutes for a junior or mid-level service advisor. Senior advisors who know the platform and the vehicle/vessel can do it in under 10 minutes. The gap between senior and junior is exactly what this feature collapses. Note: no published marine-specific benchmark exists for this, so the auto repair analogy is the right baseline — the same fundamental process applies.",
              source: "Auto repair industry benchmark; analogous workflow to marine service",
            },
            {
              stat: "15–25% unbilled labor rate",
              icon: "💸",
              justification: "DockMaster's own blog explicitly validates this. Their published article on revenue leakage states that technicians regularly complete tasks that never get formally documented through work orders, resulting in unbilled labor and untracked parts. DockMaster's subject matter experts cite verbal communication and handwritten notes as the root cause — systems that break down completely under peak-season pressure. The 15–25% figure is the standard range cited across field service and repair industries (auto, HVAC, marine) for the gap between labor performed and labor billed. In auto repair, the metric is called Effective Labor Rate (ELR) vs. Door Rate — shops with poor discipline see ELR running 15–25% below their posted rate. Marine shops have the same problem with no better tooling.",
              source: "DockMaster blog ('Prevent Revenue Leakage at Your Marina', July 2025); auto repair ELR benchmarks",
            },
            {
              stat: "1 in 8 jobs requires a return visit due to missed parts",
              icon: "🔁",
              justification: "This figure is drawn from the auto repair industry's 'comeback rate' benchmark. Industry coaching firms (Elite Worldwide, AutoFix) cite a 10–12% comeback rate as common for shops without strong estimate discipline — meaning roughly 1 in 8–10 jobs returns. In marine repair, the problem is amplified: parts are harder to source, lead times are longer (especially for older boats), and a return visit often requires re-hauling the boat out of the water — a far more expensive and disruptive rework than in a car shop. We used the conservative end of the benchmark (1 in 8). A more aggressive estimate would be 1 in 7.",
              source: "Elite Worldwide comeback rate benchmarks; auto repair KPI industry standards",
            },
          ],
        },
        pricing: {
          headline: "Pricing Justification",
          intro: "Pricing is anchored to two reference points: what the value delivered is worth to the customer, and what comparable AI add-on modules cost in adjacent vertical software markets.",
          points: [
            {
              label: "Value anchor",
              body: "A 10-technician boatyard billing at $120/hour (the lower end of current marine labor rates) loses roughly $36,000–$60,000 per year from unbilled labor alone at the 15–25% leakage rate. If this feature recovers even one-third of that leakage — a conservative assumption — that is $12,000–$20,000 per year in recovered revenue per shop. Pricing the add-on module at $149–$299/month ($1,800–$3,600/year) represents a 5–10x ROI for the customer. At that ratio, this is not a hard sell.",
            },
            {
              label: "Market comparable",
              body: "In the auto repair software vertical (the closest analogue), AI-enhanced shop management add-ons typically run $99–$299/month. The marina software market is priced similarly — the marina management software market is valued at $315M and growing at 10.1% CAGR, with SaaS add-on modules as the primary pricing expansion vehicle. The $149 entry tier is designed to be low-friction for smaller single-location boatyards. The $299 tier targets multi-tech boatyards where the ROI math is most obvious.",
            },
            {
              label: "Enterprise tier rationale",
              body: "Multi-location operators — marina groups that run 3–10 facilities — have a unique need: cross-location knowledge sharing. If a technician at Location A diagnoses a rare failure on a 2019 Yamaha outboard and resolves it, that resolution pattern should be available to technicians at Location B. Enterprise pricing (custom) accounts for the incremental infrastructure cost of federated knowledge bases and the outsized value this creates for groups.",
            },
          ],
        },
        buildvsbuy: {
          headline: "Build vs. Buy Assessment",
          intro: "The assessment rated this feature 'Medium' complexity. Here is the full reasoning behind each dimension.",
          dimensions: [
            {
              label: "ML Stack: LLM + RAG on work order history",
              body: "This does not require training a custom model from scratch. The right architecture is Retrieval-Augmented Generation (RAG): DockMaster's historical work order data (complaint text, resolution, parts used, vessel make/model/year) is embedded into a vector database. When a service writer types a new complaint, the system retrieves the most semantically similar historical work orders and feeds them as context to an LLM (Claude or GPT-4), which then reasons over them to generate a diagnosis and estimate. This is a well-understood, production-proven architecture. The complexity is not in the ML — it is in the data preparation: cleaning, structuring, and embedding 40 years of work order records. That is the real engineering effort, and 8–12 weeks is a realistic MVP timeline.",
            },
            {
              label: "Why build, not buy",
              body: "There is no off-the-shelf product that does marine-specific diagnostic reasoning over DockMaster's own work order history. General-purpose AI tools (ChatGPT, Copilot) lack the vessel-specific context. SmartSeas AI exists in the maritime space but targets ship fleet management, not marina service shops. DockMaster's proprietary data — the 40-year work order corpus — is the moat, and only a custom-built RAG layer can exploit it. This is the right profile for an internal build.",
            },
            {
              label: "Time to MVP: 8–12 weeks",
              body: "Week 1–2: Data audit and extraction pipeline from DockMaster's existing database. Weeks 3–5: Data cleaning, structuring, and embedding into a vector store (Pinecone or Weaviate). Weeks 6–8: RAG pipeline build — retrieval logic, prompt engineering, LLM integration, output formatting to match DockMaster's estimate schema. Weeks 9–10: UI integration into the existing Work Order creation screen. Weeks 11–12: Internal pilot with 2–3 boatyard customers, iteration on retrieval quality and prompt tuning.",
            },
            {
              label: "Build complexity: Medium",
              body: "The technology is mature and well-documented. The complexity is in data quality (decades-old work order records are messy), domain-specific prompt engineering (marine repair terminology and operation codes are specialized), and the feedback loop (capturing service writer edits to continuously improve retrieval ranking). None of these are unsolved problems, but each requires careful engineering. This is firmly within the capability of a 2–3 person AI engineering team.",
            },
          ],
        },
        implementation: {
          headline: "Implementation Deep Dive",
          intro: "A full-stack description of how this feature gets built and deployed.",
          layers: [
            {
              label: "Data Layer",
              icon: "🗄️",
              items: [
                "Source: DockMaster's existing PostgreSQL database (work orders, parts, vessel records, technician notes)",
                "ETL pipeline (Python + dbt) to extract, clean, and normalize historical work order records",
                "Each work order becomes a document: complaint text + resolution + parts + vessel metadata",
                "Embedding model (OpenAI text-embedding-3-large or equivalent) converts documents to dense vectors",
                "Vector store: Pinecone or Weaviate (managed, hosted). Per-customer namespace isolation for data privacy",
              ],
            },
            {
              label: "Retrieval & Reasoning Layer",
              icon: "🧠",
              items: [
                "At query time: service writer's complaint text is embedded and used to retrieve top-K most similar historical work orders",
                "Retrieval is filtered by vessel make/model/year to prevent cross-vessel hallucination",
                "Retrieved work orders + complaint + vessel history are assembled into a structured prompt",
                "LLM (Claude 3.5 Sonnet or GPT-4o via API) generates: top 3 diagnoses with reasoning, recommended operation codes, labor hours, parts list",
                "Output is structured JSON, mapped directly to DockMaster's existing estimate schema — no manual reformatting",
              ],
            },
            {
              label: "Application Layer",
              icon: "🖥️",
              items: [
                "New AI panel embedded inside DockMaster Web's existing Work Order creation screen (React component)",
                "Service writer types complaint → panel shows AI suggestions in real time (streaming response)",
                "One-click 'Apply to Estimate' button pre-populates the estimate form",
                "All edits to AI suggestions are logged as feedback signals (implicit RLHF)",
                "FastAPI microservice handles the RAG pipeline, decoupled from DockMaster's core backend",
              ],
            },
            {
              label: "Infrastructure",
              icon: "☁️",
              items: [
                "Deployed on AWS (EC2 or ECS Fargate for the FastAPI service)",
                "Pinecone or Weaviate for vector storage — both offer managed cloud tiers, no infrastructure to maintain",
                "LLM calls via API (Anthropic or OpenAI) — no GPU infrastructure required",
                "Per-request latency target: under 3 seconds for suggestion generation",
                "Data residency: customer work order data never leaves DockMaster's own AWS environment (vectors stored in customer-namespaced partitions)",
              ],
            },
            {
              label: "Learning Loop",
              icon: "🔄",
              items: [
                "Every time a service writer accepts, edits, or rejects an AI suggestion, the outcome is logged",
                "Monthly retraining pass: high-confidence accepted suggestions are added back into the vector store as new documents",
                "Model quality metrics tracked per customer: estimate acceptance rate, edit distance, time-to-estimate — dashboarded internally for DockMaster product team",
              ],
            },
          ],
        },
      },
    },
    {
      id: 2,
      code: "F-03",
      badge: "Revenue Optimization",
      title: "Dynamic Slip\nPricing Engine",
      tagline: "Fill every slip at the price the market will bear.",
      color: "#10B981",
      accent: "#34D399",
      dark: "#059669",
      icon: "📊",
      problem: {
        headline: "The Problem",
        body: "Most marinas charge a flat nightly rate for transient slips — the visiting boaters who need a spot for a night or a week. That rate is usually set once per season and never adjusted. But demand swings wildly: summer weekends are 100% full, Monday mornings in October are 20% full. Marinas are leaving enormous money on the table on peak nights, and leaving slips empty on slow nights when a lower price would fill them.",
        stats: [
          { label: "Avg transient occupancy variance", value: "40–95%", note: "peak vs. off-peak" },
          { label: "Revenue uplift from dynamic pricing", value: "15–30%", note: "hotel industry benchmark" },
          { label: "Marinas using dynamic pricing today", value: "< 5%", note: "massive whitespace" },
        ],
      },
      solution: {
        headline: "What the AI Does",
        steps: [
          {
            title: "Demand Signal Collection",
            body: "AI continuously monitors: DockMaster reservation history, current occupancy, day of week, season, local boating events (regattas, fishing tournaments), and weather forecasts via API.",
          },
          {
            title: "Demand Forecasting",
            body: "A time-series model predicts expected demand for each future date window — 7-day, 30-day, 90-day ahead. Confidence intervals show the operator the range of likely demand.",
          },
          {
            title: "Price Recommendations",
            body: "AI recommends a price per slip per night for each upcoming date range. Prices rise on predicted high-demand dates, fall on predicted soft periods. Manager sees the recommendation with reasoning ('Regatta weekend nearby — suggest +35%').",
          },
          {
            title: "Approval & Auto-Pilot Modes",
            body: "Manager can approve each suggestion manually (recommended for launch), or set rules ('auto-approve changes up to ±20% of base rate') for hands-off operation.",
          },
          {
            title: "Outcome Tracking",
            body: "Dashboard shows actual vs. predicted occupancy and actual revenue vs. what flat-rate would have earned. Continuously retrains on outcomes.",
          },
        ],
      },
      dataRequired: [
        "Historical transient reservation data: dates, slip size, rate charged, length of stay",
        "Occupancy by date (DockMaster already tracks this)",
        "External: local marine event calendars, weather API",
        "Competitor pricing (optional scraping or manual input)",
      ],
      existing: "DockMaster has reservation and billing modules but zero pricing intelligence. It records what you charged — it never tells you what you should charge.",
      gtm: {
        positioning: "Standalone 'Revenue' tab in DockMaster Web. Sold as a revenue-sharing or flat SaaS add-on. Frame as 'your marina's revenue manager' — a role marinas can't afford to hire full-time.",
        tiers: [
          { name: "Starter", price: "$99/mo", desc: "Pricing recommendations dashboard. Manager approves each change manually." },
          { name: "Autopilot", price: "$249/mo", desc: "Rule-based auto-approval, event detection, competitor monitoring." },
          { name: "Revenue Share", price: "10–15% of incremental revenue", desc: "Performance-based model — DockMaster only wins when the marina wins. High trust, high adoption." },
        ],
        sales: [
          "The revenue share model is the conversation-starter: 'We only make money if you make more money.' Zero risk objection destroyed.",
          "Target coastal and Great Lakes marinas first — highest transient traffic density, highest price sensitivity.",
          "Build a 'Revenue Simulator' tool in the sales process: input last year's reservation data, show projected uplift. Closes itself.",
          "Partner with marina associations (NMMA, MRAA) to co-market — positions DockMaster as an industry-revenue advocate.",
        ],
        moat: "Aggregate demand signals across 1,000+ marinas create a cross-network intelligence layer. If 50 marinas near a popular regatta route all feed demand data, the predictions for any one of them become dramatically more accurate. No standalone marina and no competitor without this footprint can replicate it.",
      },
      sections: {
        stats: {
          headline: "Stat Justification",
          items: [
            {
              stat: "40–95% transient occupancy variance between peak and off-peak",
              icon: "📅",
              justification: "This is directly validated by multiple marina industry sources. Marina Dock Age (industry trade publication) explicitly notes that marinas in northern climates see 100% summer occupancy and well under 50% in winter. SlipMaps data shows transient slip request surges of 50–60% in peak months at major boating destinations like Miami and Fort Lauderdale. A marina appraisal industry analysis specifically calls out that 'fully occupied in Summer is not the same as mostly empty in Winter.' DockMaster's own KPI blog confirms that 56% of marinas report occupancy above 95% — but this is peak-season data, not annualized. The 40% figure for off-peak is conservative; in northern climates with actual winters, off-peak occupancy can be below 20%.",
              source: "Marina Dock Age (July 2018); SlipMaps seasonal data (2025); Marina Appraisal industry analysis; DockMaster KPI blog (Jan 2026)",
            },
            {
              stat: "15–30% revenue uplift from dynamic pricing",
              icon: "📈",
              justification: "This figure is drawn directly from the hotel industry, which is the most mature analogue for fixed-capacity, date-perishable inventory pricing. Multiple 2025–2026 hotel revenue management sources independently cite 15–30% RevPAR (Revenue Per Available Room) uplift as the benchmark for properties switching from flat to dynamic pricing — PriceLabs, WISK, and Mews all cite this range. The marina case is arguably stronger than hotels because marina operators are starting from a lower base of pricing sophistication: most have never attempted demand-based pricing at all, while most hotels at least do high/low seasonal splits. The whitespace is larger. We apply the hotel benchmark conservatively to marinas.",
              source: "PriceLabs dynamic pricing benchmark (2026); WISK hotel dynamic pricing guide (Feb 2026); Mews dynamic pricing guide (Mar 2026)",
            },
            {
              stat: "Less than 5% of marinas use dynamic pricing today",
              icon: "🎯",
              justification: "Marina Dock Age explicitly states: 'Although it isn't used much in the marina space yet, hotels, airlines and ridesharing companies use dynamic pricing.' This was written in 2018, and the situation has not materially changed. Transient booking platforms like Dockwa and Snag-A-Slip have basic seasonal splits but no real-time demand-based pricing. No major marina management software vendor currently offers an AI-driven dynamic pricing engine. This is confirmed by a review of all major competitor products (PacsoftNG, HarbaMaster, Smart Waters, Marina Mate Pro) — none list dynamic pricing as a feature. The less-than-5% figure is a conservative estimate given the absence of any known widespread adoption.",
              source: "Marina Dock Age (2018); competitor product review (GetApp, Capterra 2025–2026)",
            },
          ],
        },
        pricing: {
          headline: "Pricing Justification",
          intro: "Three-tier structure designed around different operator sophistication levels and a revenue-share option that eliminates the objection entirely.",
          points: [
            {
              label: "$99/month Starter tier",
              body: "This covers the cost of running the demand forecasting model and serving recommendations. At $99/month, a marina generating even $5,000/month in transient revenue needs to see only a 2% uplift to break even on the tool cost. That is an extremely low bar. The Starter tier is deliberately priced as a conversation-starter — it gets the product in the door at marinas that are skeptical of the ROI claim, lets them see recommendations for 30 days, and creates a natural upgrade path to Autopilot once they see the recommendations are credible.",
            },
            {
              label: "$249/month Autopilot tier",
              body: "The jump from $99 to $249 is justified by the addition of automated rule-based pricing, which is where the real value is unlocked. Manual approval is labor — it requires someone to log in and click approve every time the model makes a recommendation. Autopilot removes that friction and lets the engine run continuously. $249/month is calibrated against comparable revenue management add-ons in the short-term rental space (PriceLabs for Airbnb hosts charges $19.99/listing/month; a marina with 20 transient slips at that rate would be $400/month — making $249 flat look like a bargain).",
            },
            {
              label: "Revenue share tier (10–15% of incremental revenue)",
              body: "This is the highest-trust and potentially highest-revenue tier. If a marina generates $200,000/year in transient slip revenue and dynamic pricing delivers a 20% uplift ($40,000 incremental), DockMaster captures $4,000–$6,000/year — far above the flat rate tiers. The revenue share model is modeled after how hotel revenue management companies (like IDeaS) structure enterprise contracts. The key advantage is psychological: it converts a cost center objection into a pure upside conversation. DockMaster only wins when the marina wins. The challenge is instrumentation — you need reliable baseline measurement to calculate incremental revenue accurately, which requires DockMaster to own the reservation and billing data (which it does).",
            },
          ],
        },
        buildvsbuy: {
          headline: "Build vs. Buy Assessment",
          intro: "Rated Medium-High. The forecasting model itself is standard; the complexity is in the data integration, event detection, and the trust-building UI.",
          dimensions: [
            {
              label: "ML Stack: Time-series forecasting (Prophet / XGBoost)",
              body: "Demand forecasting for fixed-capacity inventory is a solved problem at the algorithm level. The two most production-proven approaches are Facebook Prophet (open-source, excellent for seasonal time series with holiday/event effects) and gradient-boosted trees (XGBoost/LightGBM) with engineered features. Both are appropriate here. The choice depends on the data volume: with fewer than 3 years of history per marina, Prophet's explicit seasonality modeling is preferable; with richer history, XGBoost with feature engineering (day of week, days-until, event proximity, weather) typically wins. In practice, an ensemble of both is standard.",
            },
            {
              label: "Why build, not buy",
              body: "Hotel revenue management SaaS tools (IDeaS, Duetto, PriceLabs) are purpose-built for hotels and do not integrate with marina management systems. They also operate on room-night inventory logic that does not map cleanly to slip-night inventory (different size classes, utility metering, dry stack vs. wet slip distinctions). Building the engine natively inside DockMaster is the only way to exploit DockMaster's existing reservation and billing data pipeline without an expensive, fragile third-party integration. The model itself is not proprietary — the advantage is the data and the integration.",
            },
            {
              label: "Time to MVP: 10–14 weeks",
              body: "Weeks 1–3: Data extraction and historical reservation analysis across pilot marina cohort. Feature engineering: day-of-week, days-ahead, event calendar integration, weather API hookup. Weeks 4–7: Model training and backtesting against 2–3 years of actual reservation history. Validation: does the model predict actual peak periods correctly? Weeks 8–10: Pricing recommendation engine — translating demand forecast into a price suggestion with configurable floor/ceiling guardrails. Weeks 11–12: UI build (pricing calendar view, recommendation cards, one-click approve). Weeks 13–14: Revenue share instrumentation — baseline measurement logic, incremental revenue attribution.",
            },
            {
              label: "Build complexity: Medium-High",
              body: "The elevated complexity vs. F-01 comes from three sources: (1) event detection — integrating external event calendars (regattas, fishing tournaments, boat shows) reliably is harder than it sounds; (2) pricing guardrails — operators need confidence that the engine will not set prices at unreasonable levels, requiring rule-based floors/ceilings and manual override flows; (3) revenue attribution — accurately measuring 'incremental revenue above baseline' for the revenue share tier requires careful instrumentation and is commercially critical to get right.",
            },
          ],
        },
        implementation: {
          headline: "Implementation Deep Dive",
          intro: "End-to-end technical architecture for the pricing engine.",
          layers: [
            {
              label: "Data Layer",
              icon: "🗄️",
              items: [
                "Source: DockMaster reservation system (transient bookings: date, slip size, rate charged, length of stay, check-in/out timestamps)",
                "External data ingestion: weather forecast API (OpenWeatherMap or NOAA), local marine event calendar scraping or manual input, regional boat show and regatta schedules",
                "Feature store: pre-computed feature vectors per marina per date — occupancy, days-ahead, seasonal index, event proximity score, rolling 30/90-day demand trend",
                "Data warehouse: Snowflake or BigQuery for cross-marina aggregation and model training at scale",
              ],
            },
            {
              label: "Forecasting & Pricing Layer",
              icon: "🧠",
              items: [
                "Demand model: Facebook Prophet for seasonal decomposition + XGBoost for event-feature interactions, ensemble weighted by validation performance per marina",
                "Forecast output: expected occupancy probability per slip-night for next 90 days, with 80% confidence intervals",
                "Pricing function: maps forecast occupancy to a recommended rate using a configurable elasticity curve (operator sets their floor rate, ceiling multiplier, and sensitivity preference)",
                "Event uplift layer: detected events (regattas, holidays, tournaments) apply an additional multiplier to base pricing recommendations",
                "Model retraining: weekly batch retraining as new reservation data accumulates",
              ],
            },
            {
              label: "Application Layer",
              icon: "🖥️",
              items: [
                "New 'Pricing' tab in DockMaster Web — calendar heatmap showing forecasted demand and recommended rates per date",
                "Recommendation cards: each flagged date shows the current rate, suggested rate, and reason ('High demand weekend — fishing tournament detected nearby')",
                "Manual approval mode (default): one-click approve per recommendation, or bulk approve a date range",
                "Autopilot mode: operator sets rules ('auto-approve changes up to ±25% of base rate') — engine applies changes automatically",
                "Price changes push directly to DockMaster's reservation system and any connected transient booking marketplaces (Dockwa, Snag-A-Slip) via API",
              ],
            },
            {
              label: "Infrastructure",
              icon: "☁️",
              items: [
                "Scheduled batch jobs (AWS EventBridge + Lambda or Airflow) run nightly to refresh forecasts and generate next-day recommendations",
                "FastAPI microservice serves the recommendations UI; stateless, horizontally scalable",
                "Weather and event data fetched via daily cron jobs, cached in the feature store",
                "Revenue attribution service: compares actual nightly rates and occupancy against a rolling baseline (prior 8 weeks, same day-of-week, same season) to calculate incremental revenue for revenue share billing",
              ],
            },
            {
              label: "Cross-Marina Network Effect",
              icon: "🌐",
              items: [
                "Phase 1 (launch): per-marina models trained on each marina's own history only",
                "Phase 2 (12+ months): cross-marina demand signals aggregated in Snowflake — demand patterns from marinas near a shared regatta route inform predictions for all nearby marinas",
                "Network model: a hierarchical Bayesian framework allows per-marina models to borrow strength from the aggregate network, improving forecast accuracy for smaller marinas with limited history",
                "This network effect compounds with every new DockMaster customer — and is impossible for any competitor without the same data footprint to replicate",
              ],
            },
          ],
        },
      },
    },
    {
      id: 3,
      code: "F-08",
      badge: "Strategic Intelligence",
      title: "Marina Performance\nBenchmark Platform",
      tagline: "Turn 1,000 marinas of data into a competitive advantage for every operator.",
      color: "#8B5CF6",
      accent: "#A78BFA",
      dark: "#6D28D9",
      icon: "🔭",
      problem: {
        headline: "The Problem",
        body: "A marina operator looks at their numbers and has no idea if they're good or bad. Is $180/night for a 40-foot slip competitive? Is a 4.2-day average service turnaround fast or slow? Is 78% annual slip occupancy excellent or mediocre? They have no reference point. Every decision — pricing, staffing, service capacity, capital investment — is made in a vacuum. DockMaster sits on the answer, and currently does nothing with it.",
        stats: [
          { label: "Marinas in DockMaster network", value: "1,000+", note: "40+ years of data" },
          { label: "Decisions made without benchmarks", value: "~100%", note: "of operators today" },
          { label: "Willingness to pay for BI tools", value: "High", note: "esp. multi-location operators" },
        ],
      },
      solution: {
        headline: "What the AI Does",
        steps: [
          {
            title: "Anonymized Data Aggregation",
            body: "All DockMaster customer data is aggregated and anonymized. No operator sees another's raw data. AI segments the network by marina type, size (slip count), geography, and business model.",
          },
          {
            title: "KPI Benchmarking",
            body: "Operators see their key metrics vs. the peer group: revenue per slip, occupancy rate, average service job duration, technician utilization, days-sales-outstanding, parts gross margin, and more.",
          },
          {
            title: "AI Gap Analysis",
            body: "AI doesn't just show the gap — it explains it. 'Your average service job takes 5.1 days vs. a peer median of 3.2 days. This is primarily driven by parts procurement lead time. Top-quartile shops pre-order based on scheduled work.'",
          },
          {
            title: "Playbook Generation",
            body: "Based on what separates top-quartile from bottom-quartile performers on each KPI, AI generates specific, actionable recommendations tailored to the operator's size and type.",
          },
          {
            title: "Trend Alerts",
            body: "AI flags when a KPI is drifting: 'Your transient revenue per available slip has declined 12% over 60 days vs. a flat trend for comparable marinas in your region. Review your transient pricing.'",
          },
        ],
      },
      dataRequired: [
        "All existing DockMaster operational data (already collected — this is the asset)",
        "Strict anonymization and aggregation layer (privacy-preserving)",
        "Segmentation metadata: geography, slip count, business type",
        "No new data collection required from customers",
      ],
      existing: "DockMaster has reporting, but it is entirely internal — it shows you your own data. There is no cross-customer intelligence layer at all. This is a net-new product built on an existing data moat.",
      gtm: {
        positioning: "Standalone product: 'DockMaster Compass' — the marina industry's first performance benchmarking platform. Sold as a premium add-on or bundled into an 'Enterprise' tier. Can also be sold as a standalone subscription to operators NOT currently using DockMaster (data-driven land-and-expand).",
        tiers: [
          { name: "Compass Essential", price: "$199/mo", desc: "Core KPI dashboard, peer benchmarks, quarterly AI gap analysis report." },
          { name: "Compass Pro", price: "$499/mo", desc: "Real-time benchmarks, AI playbooks, trend alerts, multi-location roll-up." },
          { name: "Compass Enterprise", price: "Custom", desc: "Custom peer groups, industry association reporting, white-label for marina groups." },
        ],
        sales: [
          "This is the only product that can be sold to marina operators who DON'T use DockMaster yet — a powerful acquisition tool. 'Join the network, get the intelligence.'",
          "Target multi-location marina groups first (they already feel the pain of comparing locations against each other).",
          "Partner with NMMA and MRAA to publish annual 'State of the Marina Industry' report powered by Compass data — massive PR and legitimacy driver.",
          "Sales motion: run a free 'benchmark audit' as part of the DockMaster sales process. Show a prospect their estimated performance gap before they sign. Compass justifies itself.",
        ],
        moat: "This is the strongest long-term moat of any feature on this list. The data network compounds: every new DockMaster customer enriches the benchmark for every existing customer. Competitors with 50 customers cannot build what DockMaster can build with 1,000+. This is Glassdoor or ZoomInfo's business model applied to marinas — the data IS the product.",
      },
      sections: {
        stats: {
          headline: "Stat Justification",
          items: [
            {
              stat: "1,000+ marinas in the DockMaster network with 40+ years of data",
              icon: "🏛️",
              justification: "This is stated directly on DockMaster's website and marketing materials and is the foundational asset this entire feature is built on. To put it in context: the marina management software market was valued at $315M in 2024, growing at 10.1% CAGR. DockMaster, founded in the 1980s, is one of the oldest and most established players. Having 1,000+ customers in a market of this size represents significant installed base concentration. Forty-plus years of continuous operational data — work orders, reservations, billing, inventory, financials — across a thousand businesses is an extraordinarily rare dataset. There is no other company in the marina vertical that could build what this feature proposes today.",
              source: "DockMaster website; Future Market Report marina software market sizing (2024)",
            },
            {
              stat: "~100% of decisions made without benchmarks",
              icon: "🔍",
              justification: "This is a qualitative assessment grounded in product research. A review of all major marina management software competitors — PacsoftNG, HarbaMaster, Smart Waters, Marina Master, Harbour Assist — found zero instances of cross-customer benchmarking as a feature. DockMaster's own reporting suite is entirely inward-facing: it shows you your own data with no external reference point. Industry publications (Marina Dock Age, Marina Dock Age) do publish periodic survey-based industry reports, but these are annual snapshots, not real-time, and are not integrated into any operator's day-to-day tooling. The statement is intentionally pointed — it is making an argument about the opportunity, not a measurement claim.",
              source: "Competitor product review (GetApp, Capterra 2025–2026); DockMaster product documentation",
            },
            {
              stat: "High willingness to pay, especially among multi-location operators",
              icon: "💰",
              justification: "This is directional and supported by analogy. In adjacent verticals where cross-customer benchmarking products exist — restaurant analytics (Toast Intelligence), retail analytics (Placer.ai), hospitality (STR benchmarking) — willingness to pay is consistently strong and scales with operator size. Multi-location operators have an internal pain point that pure benchmarking solves even before the external comparison is considered: they cannot easily compare Location A vs. Location B vs. Location C without a tool like this. The revenue intelligence SaaS market (Clari, Gong, 6sense) has demonstrated that buyers pay $79–$250+/user/month for cross-company intelligence. The marina version of this, at $199–$499/month flat, is significantly cheaper than enterprise analogues.",
              source: "Revenue intelligence platform pricing benchmarks (2026); hospitality benchmarking analogues (STR)",
            },
          ],
        },
        pricing: {
          headline: "Pricing Justification",
          intro: "Pricing is anchored to the value of strategic decisions made better, not operational time saved — a fundamentally different value proposition than F-01 and F-03.",
          points: [
            {
              label: "$199/month Compass Essential",
              body: "This tier is priced to be justifiable on a single better decision per year. If a marina operator looks at their benchmarks and realizes their transient pricing is 15% below the regional median — and adjusts accordingly — the revenue upside on even a modest transient operation ($150K/year) is $22,500. At $199/month ($2,388/year), the payback period is about 5 weeks of the corrected pricing. The entry price is also calibrated to minimize approval friction: $199/month is within the 'software subscription' budget of most operators without requiring a capital expenditure approval process.",
            },
            {
              label: "$499/month Compass Pro",
              body: "The step up to Pro is justified by real-time benchmarks and AI-generated playbooks — the difference between knowing you have a problem and knowing specifically what to do about it. This tier is modeled on business intelligence platforms in adjacent verticals. For context, Tableau starts at $70/user/month, and a marina with a 3-person management team would pay $210/month for basic BI — with no industry-specific benchmarks and no AI analysis. At $499/month, Compass Pro competes favorably with general-purpose BI tools while delivering dramatically more specific and actionable intelligence.",
            },
            {
              label: "Standalone subscription for non-DockMaster customers",
              body: "This is the highest-margin pricing opportunity: selling Compass access to marina operators who do NOT currently use DockMaster, with their own operational data entered manually or via flat-file import. At $199–$499/month, these customers generate pure data licensing revenue with no incremental service delivery cost. More importantly, once they are in the Compass network, the DockMaster sales team has a warm lead who already sees the value of DockMaster's data network and can be converted to the full platform.",
            },
          ],
        },
        buildvsbuy: {
          headline: "Build vs. Buy Assessment",
          intro: "Rated High complexity — not because the technology is hard, but because the data governance, privacy, and anonymization layer is commercially and legally critical.",
          dimensions: [
            {
              label: "No off-the-shelf solution fits",
              body: "General-purpose BI tools (Tableau, Looker, Power BI) can display data but have no marina-specific data model, no cross-customer aggregation capability, and no AI analysis layer. Revenue intelligence platforms (Gong, Clari) are designed for B2B sales pipelines, not marina operations. Hospitality benchmarking tools (STR for hotels) are the closest conceptual analogue, but they are built on hotel-specific data models and would require full rebuilds to work with marina data structures. This must be built internally — and only DockMaster has the data to build it.",
            },
            {
              label: "The critical build challenge: privacy-preserving aggregation",
              body: "The single most important engineering investment is the anonymization and aggregation layer. Customers must be certain that competitors cannot see their raw data. The architecture requires: (1) k-anonymity guarantees — a marina's metrics are only included in a benchmark cohort if that cohort has at least k members (typically k=5–10), preventing reverse-identification; (2) differential privacy — statistical noise is added to aggregate outputs to prevent inference attacks; (3) clear contractual language in DockMaster's updated ToS about how data is used for benchmarking. Getting this wrong would be a catastrophic trust failure. This is the highest-complexity component of the build.",
            },
            {
              label: "Time to MVP: 12–16 weeks",
              body: "Weeks 1–4: Data schema mapping — translating DockMaster's existing operational data model into a standardized KPI taxonomy (revenue per slip, occupancy rate, service turnaround, technician utilization, DSO). Privacy layer design and legal review of ToS changes. Weeks 5–8: Aggregation pipeline build — anonymized cohort construction, k-anonymity enforcement, benchmark computation jobs (Snowflake or BigQuery). Weeks 9–12: LLM analysis layer — prompt engineering to generate gap explanations and playbooks from benchmark data. UI build: KPI cards, peer comparison charts, AI narrative panel. Weeks 13–16: Internal testing with volunteer beta customers, privacy audit, soft launch.",
            },
            {
              label: "Build complexity: High",
              body: "Four independent complexity drivers: (1) Privacy architecture — non-negotiable, legally sensitive, must be done by someone with data privacy engineering experience. (2) Data normalization — 1,000 customers across 40 years means enormous variation in data completeness and schema consistency; substantial data engineering is required before benchmarks are meaningful. (3) Segmentation logic — a 20-slip seasonal marina in Michigan is not a useful peer for a 200-slip year-round Florida marina; getting segmentation right is critical for benchmark credibility. (4) AI narrative quality — the playbook generation has to be specific and actionable, not generic, or operators will dismiss it.",
            },
          ],
        },
        implementation: {
          headline: "Implementation Deep Dive",
          intro: "The most architecturally complex of the three features. Two distinct sub-systems: a data pipeline and a product UI.",
          layers: [
            {
              label: "Data Pipeline Layer",
              icon: "🗄️",
              items: [
                "Source: DockMaster's existing operational database — all modules (reservations, work orders, billing, inventory, payroll)",
                "Nightly ETL jobs extract anonymized, aggregated KPIs per customer into a centralized data warehouse (Snowflake recommended for its data sharing and governance features)",
                "KPI computation layer: standardized definitions for each benchmark metric, computed consistently across all customers regardless of their DockMaster module configuration",
                "Segmentation engine: classifies each marina by slip count, geography (coastal/inland/Great Lakes), business type (full-service/dry stack/yacht club), seasonality (year-round/seasonal), and revenue band",
                "Cohort construction: for each KPI, computes peer group statistics (median, 25th/75th percentile, top-decile) with k-anonymity enforcement — minimum 5 peers required per cohort",
              ],
            },
            {
              label: "Privacy & Governance Layer",
              icon: "🔒",
              items: [
                "All customer data is anonymized before entering the shared warehouse — customer name, location, and identifying attributes are hashed or removed",
                "Differential privacy: Laplace noise is added to published aggregate statistics to prevent inference attacks on small cohorts",
                "Access controls: each customer can only query their own raw data; benchmark outputs are pre-computed aggregates, never raw peer data",
                "Legal: updated ToS with explicit consent for anonymized benchmarking data use; opt-out option available (but significantly degrades benchmark quality for that customer — communicated transparently)",
                "Annual privacy audit by external firm — results published to build customer trust",
              ],
            },
            {
              label: "AI Analysis Layer",
              icon: "🧠",
              items: [
                "LLM (Claude 3.5 Sonnet) receives: a structured JSON object containing a customer's KPIs, their peer median, and the delta for each metric",
                "System prompt engineering: the model is instructed to generate specific, operational explanations for gaps — not generic observations",
                "Playbook generation: for each significant negative delta, the model generates a 3-step action recommendation drawn from patterns observed in top-quartile performers (e.g., 'Top-quartile shops with your service mix pre-order parts 5 days before scheduled work — your current lead time is 2 days')",
                "Trend alert system: a separate scheduled job monitors each customer's KPIs for statistically significant negative trends (2+ standard deviations from their own baseline) and triggers an automated alert with AI-generated explanation",
              ],
            },
            {
              label: "Application Layer",
              icon: "🖥️",
              items: [
                "Standalone 'Compass' section in DockMaster Web — separate navigation tab, distinct visual identity",
                "Dashboard: KPI scorecard with peer comparison bars (your number vs. median vs. top quartile), color-coded by performance",
                "Drill-down: each KPI card expands to show trend over time, cohort distribution chart, and AI-generated explanation",
                "Playbook panel: ranked list of recommended actions, each with estimated impact and implementation steps",
                "Exportable PDF report for sharing with investors, lenders, or marina group leadership",
              ],
            },
            {
              label: "Infrastructure",
              icon: "☁️",
              items: [
                "Snowflake as the central data warehouse — its data sharing architecture is ideal for multi-tenant anonymized aggregation",
                "Airflow (or AWS MWAA) for orchestrating nightly ETL and benchmark computation jobs",
                "FastAPI backend serving KPI and benchmark data to the UI; Redis cache for frequently-accessed cohort statistics",
                "LLM calls batched nightly for playbook generation (not real-time) — results cached until next nightly run",
                "Estimated infrastructure cost at launch (1,000 customers): $3,000–$5,000/month in Snowflake + compute costs — easily covered at $199+ ARPU",
              ],
            },
          ],
        },
      },
    },
];
   
export const HONORABLE_MENTIONS = [
    {
        code: "F-02",
        icon: "🔧",
        title: "Predictive Maintenance Engine",
        badge: "Proactive Revenue",
        color: "#F59E0B",
        summary: "Uses each vessel's full service history to surface proactive maintenance recommendations before the customer calls. Flags boats overdue for seasonal work and turns reactive service into a recurring revenue stream.",
    },
    {
        code: "F-04",
        icon: "📦",
        title: "Intelligent Parts Forecasting",
        badge: "Inventory Intelligence",
        color: "#06B6D4",
        summary: "Predicts parts demand by season and current work order backlog. Eliminates stock-outs that delay jobs and reduces capital tied up in slow-moving inventory.",
    },
    {
        code: "F-05",
        icon: "💬",
        title: "AI Customer Communication Agent",
        badge: "Operational Efficiency",
        color: "#EC4899",
        summary: "Handles inbound customer inquiries autonomously via text/email — work order status, launch scheduling, invoice delivery — without staff involvement. Saves hours daily at every marina.",
    },
    {
        code: "F-06",
        icon: "💸",
        title: "Revenue Leakage Detector",
        badge: "Margin Recovery",
        color: "#EF4444",
        summary: "Compares technician time-clock entries against billed labor per work order to surface systematic under-billing. Recovering 30 min/tech/day at a 10-tech shop is $120K+/year in recovered revenue.",
    },
    {
        code: "F-07",
        icon: "🚨",
        title: "Financial Anomaly Detection",
        badge: "Risk & Compliance",
        color: "#F97316",
        summary: "Monitors all transactions in real time and flags anomalies: unusual refunds, duplicate payments, budget overruns, or sudden revenue drops that could signal a billing misconfiguration.",
    },
    {
        code: "F-09",
        icon: "🗣️",
        title: "Natural Language Reporting",
        badge: "Data Accessibility",
        color: "#14B8A6",
        summary: "Lets any operator ask their data in plain English: 'What was my top revenue category last quarter?' Turns DockMaster's underutilized reporting suite into an always-available analytics advisor.",
    },
    {
        code: "F-10",
        icon: "🏗️",
        title: "Dry Stack Launch Optimizer",
        badge: "Logistics",
        color: "#84CC16",
        summary: "Optimizes the forklift launch queue to minimize equipment travel time, account for tide windows, and eliminate scheduling conflicts before they cause delays on busy summer mornings.",
    },
];

export const referencesData = [
  {
    id: 1,
    category: "DockMaster Product Research",
    resources: [
      { title: "DockMaster homepage", url: "https://www.dockmaster.com/" },
      { title: "DockMaster Marina Management solutions page", url: "https://www.dockmaster.com/solutions/marina-management" },
      { title: "DockMaster Service Management solutions page", url: "https://www.dockmaster.com/solutions/service-management" },
      { title: "DockMaster Web product page", url: "https://www.dockmaster.com/products/dockmaster-web" },
      { title: "DockMaster BLU Voice Agent product page", url: "https://www.dockmaster.com/products/blu-voice-agent" },
      { title: "DockMaster Case Studies", url: "https://www.dockmaster.com/case-studies" },
      { title: "Prevent Revenue Leakage At Your Marina (DockMaster Blog)", url: "https://www.dockmaster.com/blog/prevent-revenue-leakage" },
      { title: "Operational KPIs Every Marina Owner Should Track In 2026 (DockMaster Blog)", url: "https://www.dockmaster.com/blog/marina-kpis" },
      { title: "How to Calculate Marina Occupancy Rates (DockMaster Blog)", url: "https://www.dockmaster.com/blog/marina-occupancy-rates" },
      { title: "Marina Membership Vs. Daily Docking Fees (DockMaster Blog)", url: "https://www.dockmaster.com/blog/marina-membership" }
    ]
  },
  {
    id: 2,
    category: "Marina Industry — General Operations & Benchmarks",
    resources: [
      { title: "Essential Marina Rules of Thumb & Ratios (DealStream)", url: "https://dealstream.com/industry-guides/marinas/rules-of-thumb" },
      { title: "The Deceptive Marina Occupancy Rate (Marina Appraisal)", url: "http://www.marinaappraisal.com/the-deceptive-marina-occupancy-rate/" },
      { title: "How to do a demand study of a marina project (Aninver Development Partners)", url: "https://aninver.com/blog/how-to-do-a-demand-study-of-a-marina-project" },
      { title: "Top 10 Seasonal Boat Slip Markets: Pricing & Availability Trends (SlipMaps)", url: "https://www.slipmaps.com/2025/05/top-10-seasonal-boat-slip-markets.html" },
      { title: "Wet Slip Pricing and Analytics: Why Occupancy is a Horrible Metric (Marina Dock Age)", url: "https://www.marinadockage.com/wet-slip-pricing-analytics-occupancy-horrible-metric/" }
    ]
  },
  {
    id: 3,
    category: "Marine Labor Rates",
    resources: [
      { title: "Labor Rates — The Hull Truth Boating Forum", url: "https://www.thehulltruth.com/northeast/1145102-labor-rates-2.html" },
      { title: "Average repair labor rate? — iboats Boating Forums", url: "https://forums.iboats.com/threads/average-repair-labor-rate.398587/ " },
      { title: "Polling your Marina's hourly labor rates — Downeast Boat Forum", url: "https://downeastboatforum.com/threads/polling-your-marina%E2%80%99s-hourly-labor-rates.44206/" },
      { title: "Mobile Marine Service labor rate page", url: "https://www.mobilemarineservice.net/4994.html" }
    ]
  },
  {
    id: 4,
    category: "Auto Repair Industry — Service & Labor Benchmarks (Analogues for F-01)",
    resources: [
      { title: "Average Mechanic Labor Rate for Auto Repair Shops in 2026 (WickedFile)", url: "https://www.wickedfile.com/blogs/whats-the-right-labor-rate-for-my-auto-repair-shop-in-2026" },
      { title: "What Auto Repair Shop Metrics (KPIs) to Track (Repair Shop Solutions)", url: "https://www.repairshopsolutions.com/about/what-auto-repair-shop-metrics-kpis-to-track/" },
      { title: "6 Tips That Will Help You Reduce Your Auto Repair Shop's Comebacks (Elite Worldwide)", url: "https://eliteworldwide.com/info-center/6-tips-that-will-help-you-reduce-your-auto-repair-shops-comebacks/" },
      { title: "Auto Repair Shop KPIs That Drive Real Profit (AutoFix / AutoShopCoaching)", url: "https://autoshopcoaching.com/auto-repair-shop-kpis-that-drive-real-profit/" },
      { title: "Auto repair shop KPI guide with 5 essential metrics (BusinessPlanSuite)", url: "https://businessplansuite.com/blogs/metrics/auto-repair-shop" },
      { title: "2026 Industry Statistics — Automotive Repair and Maintenance (AnythingResearch)", url: "https://www.anythingresearch.com/industry/Automotive-Repair-Maintenance.htm" },
      { title: "Monitor Auto Shop Financial Health (Advanced Digital Group)", url: "https://autorepairseo.com/financial-health-check-key-metrics-every-auto-repair-shop-should-monitor/" },
      { title: "4 Trends accelerating the auto repair industry forward (BBB Industry Hub)", url: "https://www.bbb.org/all/industry-hub/auto-repair" },
      { title: "Hourly Rate for Industry: Marina (PayScale)", url: "https://www.payscale.com/research/US/Industry=Marina/Hourly_Rate" }
    ]
  },
  {
    id: 5,
    category: "Dynamic Pricing — Hotel Industry Benchmarks (Analogues for F-03)",
    resources: [
      { title: "Dynamic Pricing for Hotels in 2026 — Industry Benchmarks (WISK)", url: "https://www.wisk.ai/blog/dynamic-pricing-for-hotels-in-2026-industry-benchmarks" },
      { title: "Dynamic Pricing vs Fixed Pricing: Which Wins for Hotels? (PriceLabs)", url: "https://hello.pricelabs.co/blog/dynamic-pricing-vs-fixed-pricing-hotels/" },
      { title: "7 Hotel Dynamic Pricing Success Metrics: Boost Your RevPAR (PriceLabs)", url: "https://hello.pricelabs.co/blog/metrics-to-track-hotel-dynamic-pricing/" },
      { title: "Hotel Pricing Strategies: 8 Proven Revenue Manager Tactics (PriceLabs)", url: "https://hello.pricelabs.co/blog/hotel-pricing-strategies/" },
      { title: "Hotel Dynamic Pricing: Strategies to Increase Revenue (Mews)", url: "https://www.mews.com/en/blog/dynamic-pricing-hotels" },
      { title: "The complete guide to dynamic pricing in the hotel industry (Hospitality Net)", url: "https://www.hospitalitynet.org/explainer/4131229/the-complete-guide-to-dynamic-pricing-in-the-hotel-industry" },
      { title: "Hotel Dynamic Pricing: The Complete Guide for Hoteliers (Cvent)", url: "https://www.cvent.com/en/blog/hospitality/hotel-dynamic-pricing-complete-guide" },
      { title: "How Dynamic Pricing Can Improve Hotel Revenue (NetSuite)", url: "https://www.netsuite.com/portal/resource/articles/business-strategy/hotel-dynamic-pricing.shtml" },
      { title: "Increase your hotel revenue with dynamic pricing (HappyHotel)", url: "https://www.happyhotel.io/en/dynamic-pricing" }
    ]
  },
  {
    id: 6,
    category: "Marina Management Software Market & Competitors",
    resources: [
      { title: "Best Marina Management Software of 2025 (SourceForge)", url: "https://sourceforge.net/software/marina-management/" },
      { title: "Best Marina Management Software in 2026 (Slashdot)", url: "https://slashdot.org/software/marina-management/" },
      { title: "Top Rated Marine Software with Price/Margin Management 2026 (GetApp)", url: "https://www.getapp.com/industries-software/marine/f/price-management/" },
      { title: "Marina Management Software Market Size, Share, Growth — CAGR Forecast 2032 (Future Market Report)", url: "https://www.futuremarketreport.com/industry-report/marina-management-software-market" },
      { title: "Marine And Marine Management Software Market Industry Report 2034 (Polaris Market Research)", url: "https://www.polarismarketresearch.com/industry-analysis/marine-management-software-market" },
      { title: "Best Marine Software of 2026 (SourceForge)", url: "https://sourceforge.net/software/marine/" },
      { title: "Sirius Software — Marina System Pricing, Alternatives & More 2026 (Capterra)", url: "https://www.capterra.com/p/160328/Marina-Module/reviews/" }
    ]
  },
  {
    id: 7,
    category: "Revenue Intelligence & Benchmarking SaaS — Pricing Comparables (F-08)",
    resources: [
      { title: "Best Revenue Intelligence Platforms in 2026: 10 Tools Compared (Tellius)", url: "https://www.tellius.com/resources/blog/best-revenue-intelligence-platforms-in-2026-clari-gong-tellius-7-more-compared" },
      { title: "15 best revenue intelligence platforms in 2026 (Guideflow)", url: "https://www.guideflow.com/blog/best-revenue-intelligence-platforms" },
      { title: "10 Best Revenue Intelligence Tools for 2026 (ZoomInfo Pipeline)", url: "https://pipeline.zoominfo.com/sales/revenue-intelligence-tools" },
      { title: "Revenue Intelligence Platforms: A Buyer's Guide (Salesmotion)", url: "https://salesmotion.io/blog/revenue-intelligence-platform-guide" },
      { title: "5 Best Revenue Intelligence Platforms For SaaS Companies In 2026 (SaaSGrid)", url: "https://www.saasgrid.com/post/5-best-revenue-intelligence-software-for-saas-companies" },
      { title: "15 SaaS Reporting Tools Ranked by Price & Features (DesignRevision)", url: "https://designrevision.com/blog/saas-reporting-tools" },
      { title: "Don't Buy Revenue Intelligence Platform Before Reading This (MaxIQ)", url: "https://www.getmaxiq.com/blog/best-revenue-intelligence-platforms" }
    ]
  }
];

export const qnaData = [
  {
    id: 1,
    question: "Why did you choose these 3 features out of the 10 opportunities you identified?",
    answer: "I intentionally chose three opportunities operating at different layers of value creation. F-01 improves operational execution inside an existing workflow. F-03 directly increases customer revenue. F-08 creates a defensible network-data advantage. I optimized for a portfolio balance: near-term ROI, medium-term monetization, long-term moat. I also selected opportunities that leverage DockMaster's existing assets: historical work orders, reservation data, and installed customer footprint."
  },
  {
    id: 2,
    question: "If DockMaster could only build ONE feature first, which would you prioritize and why?",
    answer: "I would start with F-01 AI Work Order Assistant. Reasons: 1. Strongest fit with existing workflow. 2. Uses proprietary data DockMaster already owns. 3. Clear measurable ROI. 4. Moderate implementation complexity. 5. Faster path to adoption. It solves a daily pain point for service writers and produces visible time savings quickly."
  },
  {
    id: 3,
    question: "Which feature has the strongest business case?",
    answer: "Short-term: F-01. The strongest business case combines: high-frequency usage, clear ROI, low behavior change, manageable complexity. F-01 scores highly on all four."
  },
  {
    id: 4,
    question: "Which feature creates the strongest long-term moat?",
    answer: "F-08 Marina Performance Benchmark Platform. The moat is not the model. The moat is the network dataset. Every additional customer improves benchmark quality. Competitors without DockMaster's customer footprint cannot reproduce that advantage quickly."
  },
  {
    id: 5,
    question: "How do your proposed features align with DockMaster's existing product direction?",
    answer: "I intentionally avoided disconnected \"AI gimmicks.\" Each feature extends existing DockMaster modules. F-01 extends service operations. F-03 extends reservations and billing. F-08 extends reporting and analytics. This is AI embedded into existing workflows, not unrelated AI tooling."
  },
  {
    id: 6,
    question: "How did you validate these customer problems?",
    answer: "I triangulated across: DockMaster's existing product footprint, adjacent industry benchmarks, workflow similarity analysis. Marine-specific public data is limited, so I used analog industries where operational workflows are highly comparable."
  },
  {
    id: 7,
    question: "Why did you use auto repair and hotel analogies?",
    answer: "Because the operational mechanics are very similar. Marine repair: complaint → diagnosis → labor estimate → parts → work order. Auto repair: same workflow. Transient slips: fixed inventory + fluctuating demand + time-sensitive capacity. Hotels operate on essentially the same pricing dynamics."
  },
  {
    id: 8,
    question: "How confident are you in your assumptions and benchmarks?",
    answer: "Moderately confident. I would position them as directionally validated assumptions, not immutable facts. Before committing to development, I would validate them through customer interviews and analysis of anonymized DockMaster data."
  },
  {
    id: 9,
    question: "Who is the buyer for each product?",
    answer: "F-01: Service directors, operations leaders. F-03: General managers, owners, revenue decision makers. F-08: Executive leadership, multi-location operators."
  },
  {
    id: 10,
    question: "Who is the daily user of each feature?",
    answer: "F-01: Service writers, advisors, coordinators. F-03: Reservation managers, marina managers. F-08: Leadership teams and operators."
  },
  {
    id: 11,
    question: "Why RAG instead of training a custom model?",
    answer: "Because the problem is primarily context retrieval, not missing language capability. The knowledge already exists in historical work orders. RAG is: faster, cheaper, easier to maintain, easier to update. Training a custom foundation model would be unnecessary for an MVP."
  },
  {
    id: 12,
    question: "What are the biggest technical risks in F-01?",
    answer: "The main risks are: 1. Messy historical data. 2. Inconsistent technician notes. 3. Retrieval quality. The challenge is data engineering and grounding, not LLM capability."
  },
  {
    id: 13,
    question: "How would you prevent hallucinations in the Work Order Assistant?",
    answer: "Several safeguards: retrieval grounded in historical records, make/model/year filtering, structured outputs, confidence scoring, mandatory human review. The system should recommend, not autonomously diagnose."
  },
  {
    id: 14,
    question: "Why Prophet/XGBoost for Dynamic Pricing?",
    answer: "They solve complementary forecasting problems. Prophet handles seasonality well. XGBoost performs strongly with nonlinear feature interactions. An ensemble approach is practical and production-proven."
  },
  {
    id: 15,
    question: "How would you handle cold start for marinas with limited history?",
    answer: "Three approaches: 1. Regional priors. 2. Similar-marina pattern borrowing. 3. Recommendation mode before automation. The system can rely more heavily on global signals until local data accumulates."
  },
  {
    id: 16,
    question: "Why is F-08 high complexity?",
    answer: "Because the complexity comes primarily from: privacy architecture, data normalization, segmentation quality, governance requirements. Not from advanced AI modeling."
  },
  {
    id: 17,
    question: "How would you implement privacy protections?",
    answer: "I would use layered controls: anonymization, cohort thresholds, k-anonymity, differential privacy, strict access control, explicit contractual consent. Trust is mission-critical."
  },
  {
    id: 18,
    question: "Why not integrate existing AI vendors?",
    answer: "General AI vendors lack: marine-specific context, DockMaster-native integration, proprietary operational history. The strategic value comes from DockMaster's own data assets."
  },
  {
    id: 19,
    question: "How did you determine pricing?",
    answer: "I used value-based pricing anchored to: expected customer ROI, adjacent SaaS market benchmarks, willingness-to-pay logic. The pricing question was: \"What fraction of created value can DockMaster capture while preserving obvious customer ROI?\""
  },
  {
    id: 20,
    question: "Why would customers pay extra instead of expecting AI inside the core platform?",
    answer: "Because these are outcome-driven capabilities. They produce measurable business value: recovered labor revenue, pricing optimization, strategic intelligence. Premium outcomes support premium monetization."
  },
  {
    id: 21,
    question: "Which GTM strategy would you launch first?",
    answer: "Pilot-first GTM. 5--10 design partners. Measure before/after impact. Generate proof points. Turn those results into customer stories and rollout assets."
  },
  {
    id: 22,
    question: "How would you pilot these products?",
    answer: "Small customer cohort. High-engagement customers. Clear KPI measurement. Tight feedback cycles. The priority is learning velocity before aggressive monetization."
  },
  {
    id: 23,
    question: "How would you measure success after launch?",
    answer: "F-01: estimate creation time, edit rate, adoption, recovered revenue. F-03: forecast accuracy, pricing acceptance, revenue uplift. F-08: engagement, renewals, expansion revenue."
  },
  {
    id: 24,
    question: "How would you drive customer trust in AI recommendations?",
    answer: "Human-in-the-loop design. Explainability. Recommendation-first rollout. Trust should be earned before automation."
  },
  {
    id: 25,
    question: "What if operators resist automation?",
    answer: "That resistance is expected. Adoption should be staged: observe → approve → partially automate → autopilot. Customers control progression."
  },
  {
    id: 26,
    question: "What if recommendations are wrong?",
    answer: "Design for safe failure. Override capability, human review, feedback capture, continuous tuning. Failures should not disrupt operations."
  },
  {
    id: 27,
    question: "How do you avoid overwhelming users with AI?",
    answer: "Embed AI inside existing workflows. No separate \"AI dashboard.\" Deliver contextual guidance at the exact decision point."
  },
  {
    id: 28,
    question: "What is your 12‑month roadmap?",
    answer: "Months 1--3: F‑01 MVP. Months 4--6: pilot and iteration. Months 7--9: F‑03 pilot. Months 10--12: F‑08 foundational work. I would sequence by implementation risk and ROI speed."
  },
  {
    id: 29,
    question: "What belongs in MVP versus later phases?",
    answer: "Example --- F‑01. MVP: complaint intake → retrieval → estimate suggestion. Later phases: learning loops, cross-location intelligence, advanced diagnostics."
  },
  {
    id: 30,
    question: "What would make these projects fail?",
    answer: "Three primary failure modes: 1. Poor data quality. 2. Low customer trust. 3. Weak ROI measurement. AI products fail quickly when outputs are unreliable or value is ambiguous."
  },
  {
    id: 31,
    question: "What assumptions would you test immediately?",
    answer: "1. Pain severity. 2. Customer willingness to pay. 3. Historical data quality. 4. Trust in recommendation workflows."
  },
  {
    id: 32,
    question: "What did you learn from this case study?",
    answer: "The strongest lesson was that successful vertical AI is less about model novelty and more about: proprietary data, workflow integration, measurable business outcomes, defensible distribution. The best opportunities leveraged DockMaster's existing data assets rather than inventing entirely new workflows."
  }
];