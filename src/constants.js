

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