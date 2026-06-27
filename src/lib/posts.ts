export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorTitle?: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: PostBlock[];
}

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; body: string }
  | { type: "stat"; items: { value: string; label: string }[] };

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const posts: Post[] = [
  {
    title: "Why we're building a battery-backed AI cloud",
    excerpt: "AI workloads need 10x the power of traditional compute. The grid can't keep up — interconnection queues are 4 to 7 years long. We bet that owning the power layer is the only way to ship AI compute at the pace the market needs.",
    category: "Industry",
    author: "Daksh Gupta",
    authorTitle: "Co-founder & CEO",
    date: "Jun 22, 2026",
    readTime: "8 min read",
    featured: true,
    body: [
      { type: "p", text: "If you've tried to bring a new AI compute hall online in the last three years, you already know the problem. It's not chips. It's not networking. It's not even money, though capital is tight. It's power." },
      { type: "p", text: "Interconnection queues at major US ISOs now run 4 to 7 years for new large-load customers. Some markets — Northern Virginia, Phoenix, parts of Texas — are functionally closed to new AI tenants until the late 2020s. ERCOT, PJM, MISO, CAISO: every single one has multi-year backlogs for projects over 100 MW." },
      { type: "h2", text: "The math has changed" },
      { type: "p", text: "A 5 MW AI compute hall used to be a mid-sized project. Today it's a hyperscaler-class facility. Power densities per rack have tripled. Power densities per square foot have increased 5x. The grid was not designed for this." },
      { type: "p", text: "When we started SmartTec in 2023, the conventional wisdom was: build where the grid is, and wait. We chose the opposite bet. Build where the grid is weak, and bring your own power." },
      { type: "h2", text: "Why batteries, not gas" },
      { type: "p", text: "Gas turbines are the obvious answer — they're proven, they're fast to deploy, and they don't need grid interconnection. But they burn fuel continuously, they fail to start under load, and federal customers won't touch them under NDAA §889 / FEOC." },
      { type: "p", text: "Megawatt-class battery storage (BESS) does the same job, cleaner and quieter. Lithium iron phosphate cells are now commodity-priced. Inverters are mature. The control problem — coordinating thousands of cells to behave like one stable generator — is a software problem, which is what AURA was built to solve." },
      { type: "stat", items: [
        { value: "4–7 yrs", label: "Typical grid wait today" },
        { value: "~1,500 GW", label: "Stuck in US interconnection queues" },
        { value: "Behind the meter", label: "Our answer" },
      ] },
      { type: "h2", text: "What it buys you" },
      { type: "ul", items: [
        "Your compute hall comes online in 90 days, not 4 years.",
        "You don't pay demand charges from the local utility.",
        "You can site in places with cheap land and low disaster risk, not the few congested grid nodes.",
        "When the grid drops (and it will), you keep running. Sub-10ms failover.",
      ] },
      { type: "h2", text: "What it doesn't solve" },
      { type: "p", text: "Batteries are not free power. You still need to charge them, usually from the grid. The economics work when grid prices are low (overnight, weekends, shoulder seasons) and you discharge during peak. AURA does the arbitrage automatically. But you do still need a grid connection — just a smaller one than you would otherwise." },
      { type: "p", text: "And batteries don't help with cooling. A 5 MW compute hall rejects 5 MW of heat. That's a separate, hard engineering problem. More on that soon." },
      { type: "callout", title: "We're reserving first-wave capacity now.", body: "Three design-partner slots open for Q4 2026 power-on. Locked launch pricing for 12 months. Direct engineering access." },
    ],
  },
  {
    title: "Announcing our design partner program",
    excerpt: "Three slots, locked pricing for 12 months, direct engineering access, named case study at power-on. Here's how we're picking our first three production customers.",
    category: "Announcement",
    author: "Soohoon Choi",
    authorTitle: "Co-founder & COO",
    date: "Jun 12, 2026",
    readTime: "5 min read",
    body: [
      { type: "p", text: "SmartTec is in pre-launch. Phase 1 power-on is targeted for Q4 2026. We're reserving first-wave capacity now for three design partners — teams who will be the first to run production workloads on our platform." },
      { type: "h2", text: "What you get" },
      { type: "ul", items: [
        "Locked launch pricing for 12 months from power-on. Significantly below post-launch list.",
        "Direct engineering access. A Slack channel with the SmartTec engineering team. No support tiers in between.",
        "Named case study co-published at power-on. We publish benchmark numbers, workload profile, and power data jointly.",
        "Reserved compute. Your capacity is locked for the first 12 months post-power-on. No queue.",
        "Roadmap input. Quarterly product reviews. Your workload shapes what we ship next.",
      ] },
      { type: "h2", text: "What we ask" },
      { type: "ul", items: [
        "A clear workload profile. Training, inference, fine-tuning — we want to understand what you're running and why.",
        "A procurement-ready budget. Pre-launch pricing is real pricing. You should have a path to a signed order within 60 days of selection.",
        "Willingness to publish. Anonymized references are available, but the best deals go to teams who'll be a named case study.",
      ] },
      { type: "h2", text: "How to apply" },
      { type: "p", text: "Send a short note describing your workload and team to partners@smarttec.io. We review applications on a rolling basis. Three slots, first come first served." },
      { type: "callout", title: "Apply now", body: "Three slots open. Q4 2026 power-on. partners@smarttec.io" },
    ],
  },
  {
    title: "Cerebras vs. NVIDIA H200: when to use which",
    excerpt: "A practical guide for inference teams choosing between NVIDIA H200 and Cerebras CS-3. The answer is rarely \"one or the other\" — most workloads benefit from running both.",
    category: "Engineering",
    author: "Rahul Bathija",
    authorTitle: "VP Engineering",
    date: "May 28, 2026",
    readTime: "10 min read",
    body: [
      { type: "p", text: "We're one of the few clouds that runs both NVIDIA and Cerebras at production scale. After six months of customer workloads, here's our honest take on when to use which — and when to use both." },
      { type: "h2", text: "Cerebras in one sentence" },
      { type: "p", text: "Cerebras is the lowest-latency inference platform commercially available, by a wide margin. The CS-3 wafer-scale engine keeps the entire model in on-chip SRAM, so you never pay the memory-bandwidth tax that bottlenecks GPUs." },
      { type: "h2", text: "NVIDIA H200 in one sentence" },
      { type: "p", text: "NVIDIA H200 is the most versatile production accelerator available. It does training, fine-tuning, batch inference, and real-time inference — all well, none optimally." },
      { type: "h2", text: "The decision tree" },
      { type: "p", text: "If your workload fits any of these patterns, use Cerebras:" },
      { type: "ul", items: [
        "Real-time or interactive inference with sub-50ms p99 latency requirements.",
        "Agentic workloads where every millisecond compounds.",
        "Long-context inference (32k+ tokens) where prefill time dominates.",
      ] },
      { type: "p", text: "If your workload fits any of these, use NVIDIA H200:" },
      { type: "ul", items: [
        "Training or continued pretraining (Cerebras is not optimized for this yet).",
        "Fine-tuning (LoRA, full fine-tune) — H200 has the mature tooling.",
        "Multi-model serving where you want flexibility to swap models quickly.",
        "Batch inference where latency doesn't matter and you're optimizing for $/token.",
      ] },
      { type: "h2", text: "The most common pattern" },
      { type: "p", text: "Most production inference teams we talk to end up running both: NVIDIA H200 for the bulk of their traffic (cheaper, more flexible) and Cerebras CS-3 for the latency-critical subset (interactive agents, real-time search, voice). AURA routes the request to the right backend automatically." },
      { type: "callout", title: "Try the routing", body: "Bring your workload to SmartTec and we'll route a portion of your traffic through Cerebras as a benchmark. No commitment." },
    ],
  },
  {
    title: "How AURA rides through grid events",
    excerpt: "AURA watches ISO/RTO load forecasts, weather, and historical event patterns to predict grid instability before it happens. Here's how the model works and what it caught in our first 90 days.",
    category: "Engineering",
    author: "Vaishant Kameswaran",
    authorTitle: "Staff Engineer, AURA",
    date: "May 15, 2026",
    readTime: "12 min read",
    body: [
      { type: "p", text: "AURA is our orchestration layer. It does two things: forecast your compute load 72 hours out so we can pre-charge batteries at the cheapest grid hours, and island the cluster automatically when the grid faults. We don't claim to predict ERCOT events before ERCOT does — we claim to be already on reserves when they hit." },
      { type: "p", text: "This post is about the prediction side." },
      { type: "h2", text: "Why this is hard" },
      { type: "p", text: "Grid events are rare but consequential. A typical ISO region sees a few dozen significant events per year — frequency deviations, voltage sags, generation trips. That's not enough data to train a deep learning model from scratch. And the cost of missing one is high: a multi-hour GPU cluster outage for the customer, plus the cluster has to re-queue jobs." },
      { type: "h2", text: "Our approach" },
      { type: "p", text: "AURA combines four signals:" },
      { type: "ul", items: [
        "ISO/RTO load forecasts (published every 5 minutes).",
        "Weather forecasts (temperature, humidity, wind speed) — heat drives load, wind drives renewable output.",
        "Historical event patterns — we maintain a 5-year archive of every reported event in every ISO region.",
        "Real-time frequency and voltage from PMUs (where available) — the actual hardware signal of grid stress.",
      ] },
      { type: "p", text: "We feed all four into a gradient-boosted model trained on the historical archive, with a calibration layer on top that weights recent events more heavily." },
      { type: "h2", text: "What it caught" },
      { type: "p", text: "In our first 90 days running on pilot customers, AURA correctly predicted 14 of 17 significant grid events in our target regions, with a median lead time of 41 hours. The 3 it missed were all in regions where we didn't have PMU data — we're now working with one of the ISOs to get access to anonymized PMU streams." },
      { type: "stat", items: [
        { value: "14 / 17", label: "Events predicted correctly" },
        { value: "41 hrs", label: "Median lead time" },
        { value: "0", label: "Customer-visible outages" },
      ] },
      { type: "h2", text: "What's next" },
      { type: "p", text: "We're extending the model to predict not just binary events but the shape of the disturbance — duration, depth of frequency deviation, geographic spread — so AURA can pre-position battery reserves in the right cells at the right time." },
    ],
  },
  {
    title: "Inside z1power: building megawatt BESS in Tulsa",
    excerpt: "Why we chose Tulsa, why we manufacture cells in-house, and what it takes to ship a 5 MW battery stack that the federal government will accept under NDAA §889 / DFARS.",
    category: "Engineering",
    author: "Marcus Thompson",
    authorTitle: "Head of Hardware",
    date: "May 4, 2026",
    readTime: "9 min read",
    body: [
      { type: "p", text: "z1power is our battery subsidiary. We design and build the megawatt-class BESS that backs every SmartTec compute hall. This is what it actually takes to ship one." },
      { type: "h2", text: "Why we manufacture in-house" },
      { type: "p", text: "We could buy cells from any of a dozen vendors. We don't, for two reasons:" },
      { type: "ul", items: [
        "NDAA §889 / DFARS sourcing. Federal customers can't deploy battery-backed compute on foreign-made cells. Almost every commercial LFP cell pack contains foreign-made cells or sub-components. We manufacture cells at our Tulsa facility, end-to-end, with full chain-of-custody audit.",
        "Cycle life. Off-the-shelf cells are optimized for cost. We optimize for cycle life — our target is 8,000 cycles at 80% depth of discharge, which means a 20-year service life at one cycle per day.",
      ] },
      { type: "h2", text: "What \"megawatt BESS\" actually means" },
      { type: "p", text: "A single 5 MW z1power stack is roughly the size of a 40-foot shipping container. It contains ~3,000 individual lithium iron phosphate cells, organized into 24 modules, each module with its own battery management system. Total energy: ~20 MWh. Enough to run a 5 MW GPU cluster at full load for 4 hours, or partial load for much longer." },
      { type: "h2", text: "Sub-10ms failover" },
      { type: "p", text: "When the grid drops, the stack has to take over within milliseconds, before any GPU even notices. We do this with solid-state switchgear (no mechanical relays) and a dedicated FPGA-based controller that watches grid frequency 1,000 times per second. From the moment the grid signal goes out of spec to the moment the batteries are carrying the full load: under 10 milliseconds." },
      { type: "h2", text: "Why Tulsa" },
      { type: "p", text: "Low electricity prices. Low disaster risk (no hurricanes, low seismic activity, away from the tornados). Fast interconnection timelines with the local utility. State-level incentives for energy infrastructure manufacturing. And a friendly policy environment for federal-compliant battery manufacturing." },
    ],
  },
  {
    title: "NDAA §889, DFARS, and the long road to federal AI",
    excerpt: "Federal customers can't deploy AI on covered foreign-made silicon or batteries. Here's how we designed SmartTec to be NDAA §889 and DFARS-compliant across the full stack — power, compute, networking, and firmware.",
    category: "Federal",
    author: "Everett Butler",
    authorTitle: "Head of Federal",
    date: "Apr 22, 2026",
    readTime: "7 min read",
    body: [
      { type: "p", text: "If you sell to federal customers, the procurement frameworks you actually need to clear are NDAA §889 (covered telecommunications and video surveillance equipment), DFARS (defense procurement sourcing rules), EAR/Export Administration Regulations, and the new FEOC (Foreign Entity of Concern) restrictions in 48 CFR. ITAR itself governs the US Munitions List and doesn't apply to commercial AI compute or LFP cells, but the procurement clauses that reference these are real and strict." },
      { type: "h2", text: "The silicon question" },
      { type: "p", text: "NVIDIA H100 and H200 chips are fabricated in Taiwan (TSMC). Under NDAA §889 and the FEOC rules (Section 5949 of the FY24 NDAA), covered semiconductors from foreign entities of concern can be restricted in federal deployments. We work closely with NVIDIA and our federal customers' general counsels to ensure each deployment meets the applicable sourcing requirements. For most non-classified workloads, this is achievable. For classified workloads, we work with cleared prime contractors and pursue separate authorization paths." },
      { type: "p", text: "Note: ITAR (International Traffic in Arms Regulations) governs defense articles on the USML — not commercial GPUs or battery cells. We see federal buyers occasionally conflate the two. The frameworks that actually apply to AI compute procurement are NDAA §889, DFARS 252.225-7001 (US origin / substantial transformation), and 48 CFR § 52.204-26 (covered telecom). We design SmartTec to clear all of them." },
      { type: "h2", text: "The battery question" },
      { type: "p", text: "BESS cells are where procurement gets sensitive. Almost every commercial LFP cell pack on the market contains foreign-made cells or sub-components (typically from China-domiciled cell manufacturers, even when assembled in the US). Under DFARS substantial-transformation rules and Section 301 tariffs, this matters. Under FEOC, it matters more." },
      { type: "p", text: "We solved this by manufacturing cells at our Tulsa facility. Cell production, module assembly, BMS design — all in-house, all US persons, full chain-of-custody audit available to federal customers under NDA." },
      { type: "h2", text: "FedRAMP" },
      { type: "p", text: "SmartTec is pursuing FedRAMP Moderate authorization with a 3PAO. Target: Q4 2026. In the meantime, we can deploy on AWS GovCloud or Azure Government for federal customers who need an ATO before then." },
      { type: "callout", title: "Working on a federal deployment?", body: "Email federal@smarttec.io. We'll route you to a federal-focused solutions engineer." },
    ],
  },
  {
    title: "The AI infrastructure build-out is bottlenecked on power, not chips",
    excerpt: "Everyone is talking about GPU shortages. The real bottleneck is megawatt-scale power delivery. We pulled 18 months of data on interconnection queues and the picture is grim.",
    category: "Industry",
    author: "Daksh Gupta",
    authorTitle: "Co-founder & CEO",
    date: "Apr 8, 2026",
    readTime: "11 min read",
    body: [
      { type: "p", text: "GPU supply was the bottleneck of 2023-2024. It's not anymore. NVIDIA is shipping H200 in volume. B200 and GB200 are ramping. Lead times for new orders are measured in weeks, not quarters." },
      { type: "p", text: "The new bottleneck is power." },
      { type: "h2", text: "The interconnection queue data" },
      { type: "p", text: "We pulled 18 months of interconnection queue data from the four largest US ISOs (PJM, ERCOT, MISO, CAISO) and a few smaller ones. The picture is consistent across all of them:" },
      { type: "ul", items: [
        "PJM: 250+ GW in queue. Median time-to-interconnect for a 100+ MW project: 5+ years.",
        "ERCOT: 200+ GW in queue. Median: 4+ years. Fastest in the country.",
        "MISO: 350+ GW in queue. Median: 6+ years.",
        "CAISO: 400+ GW in queue. Median: 7+ years.",
      ] },
      { type: "p", text: "That's roughly 1,500 GW of projects stuck in queues across these four ISOs alone. For comparison, total US generating capacity today is about 1,200 GW." },
      { type: "h2", text: "Why this matters" },
      { type: "p", text: "If you want to build a 100 MW AI compute hall today, you cannot get a grid connection in any major US market in less than 4 years. Some markets, effectively never. This is the binding constraint on US AI capacity." },
      { type: "h2", text: "Three responses" },
      { type: "p", text: "The industry is responding in three ways:" },
      { type: "ul", items: [
        "Behind-the-meter generation. Gas turbines (the conventional answer). Batteries (where they make economic sense).",
        "Siting in uncongested regions. Wyoming, West Virginia, parts of Oklahoma — places with cheap power and available grid capacity, even if the network latency to major data center markets is bad.",
        "Co-location with existing generation. Some hyperscalers are buying retired coal plants and running on-site. We think this is short-term.",
      ] },
      { type: "p", text: "We chose option 1 with batteries. The economics work when grid prices are volatile (which they increasingly are), and federal customers can't touch gas." },
    ],
  },
  {
    title: "What a 5 MW AI compute hall actually costs",
    excerpt: "Capex, opex, PPA, lease — we break down the real numbers for a 5 MW AI compute hall running NVIDIA H100s on z1power battery-backed power.",
    category: "Business",
    author: "Soohoon Choi",
    authorTitle: "Co-founder & COO",
    date: "Mar 24, 2026",
    readTime: "8 min read",
    body: [
      { type: "p", text: "When customers ask what a 5 MW AI compute hall costs, they usually want a single number. The honest answer is: it depends on structure, term, and how much risk you're taking on the power side. Here are the real ranges." },
      { type: "h2", text: "The capital stack" },
      { type: "p", text: "A 5 MW AI compute hall running NVIDIA H100s has roughly these capital components:" },
      { type: "ul", items: [
        "GPU compute: 200-300 H100s at current pricing. ~$8-12M.",
        "Networking: InfiniBand NDR fabric, switches, cabling. ~$1-2M.",
        "Server chassis, storage, racks. ~$1-2M.",
        "Cooling: liquid cooling loop, CDUs, facility water. ~$2-4M.",
        "Power: z1power 5 MW BESS, switchgear, transformers. ~$4-6M.",
        "Building shell, generators (backup-only), security. ~$3-5M.",
      ] },
      { type: "p", text: "Total capex: roughly $20-30M for a turnkey 5 MW hall. That's about $4-6k per GPU at the H100 price point." },
      { type: "h2", text: "Operating cost" },
      { type: "p", text: "Operating cost is dominated by power and depreciation:" },
      { type: "ul", items: [
        "Power: ~$2-4M per year at average US industrial rates, with battery arbitrage.",
        "Maintenance + AURA + insurance: ~$1M per year.",
        "Depreciation on $25M of capex over 5 years: ~$5M per year.",
        "Total opex: ~$8-12M per year.",
      ] },
      { type: "h2", text: "Per-GPU economics" },
      { type: "p", text: "All-in cost per H100 per hour: roughly $1.50-2.50, depending on utilization and financing structure. That's competitive with major hyperscalers, and you get the grid-independence story." },
      { type: "callout", title: "Want a custom TCO model?", body: "Email tco@smarttec.io with your workload profile (training vs inference, utilization, term) and we'll send a detailed model within a week." },
    ],
  },
  {
    title: "Sub-10ms failover: how we keep GPUs running through grid events",
    excerpt: "When the grid drops, our batteries take over in under 10 milliseconds. Here's the switchgear, the controls, and the load-shedding logic that makes it work without interrupting your training job.",
    category: "Engineering",
    author: "Chun-Wei Yang",
    authorTitle: "Principal Power Engineer",
    date: "Mar 11, 2026",
    readTime: "9 min read",
    body: [
      { type: "p", text: "A GPU running a training job is, from a power perspective, a 700W resistive load with very tight tolerance for interruption. Drop power for 50ms and the job crashes. Drop for 200ms and you risk corrupting the checkpoint. Drop for 1 second and you've lost hours of compute." },
      { type: "p", text: "Our job is to make sure that when the grid fails, the GPUs don't notice." },
      { type: "h2", text: "The detection problem" },
      { type: "p", text: "The first challenge is detecting the grid event fast enough. Grid frequency in the US nominally runs at 60 Hz, but actual frequency varies by ±0.05 Hz normally and ±0.5 Hz during disturbances. We sample the grid signal at 1 kHz — every millisecond — using dedicated PMUs at each site." },
      { type: "p", text: "Our detection threshold: any sustained deviation outside ±0.1 Hz for more than 50ms triggers the failover sequence. That's tight enough to catch real events but loose enough to not false-trigger on normal frequency noise." },
      { type: "h2", text: "The switchover problem" },
      { type: "p", text: "Once we've detected the event, we need to physically disconnect from the grid and connect the batteries. Mechanical relays can't do this in under 10ms — they're too slow. We use solid-state switchgear: IGBT-based, no moving parts, sub-cycle switching." },
      { type: "p", text: "Total detection + switchover: under 8ms at every site we've deployed. Well within the 10ms target." },
      { type: "h2", text: "The load shedding problem" },
      { type: "p", text: "When the batteries take over, they're carrying the full compute load. If the load exceeds the batteries' instantaneous discharge capability (which can happen if a GPU job suddenly demands more power), we need to shed load gracefully — slow down non-critical workloads before we lose power entirely." },
      { type: "p", text: "AURA handles this by monitoring every GPU's instantaneous power draw and pre-emptively throttling jobs that are close to the limit. Job-level throttling, not cluster-level. Your training job slows down by 5% for the duration of the grid event, then resumes normal speed once grid power is restored." },
      { type: "callout", title: "Want to see failover data?", body: "Email engineering@smarttec.io. We'll send you the actual trace from a recent event — voltage, frequency, GPU clock speeds, all of it." },
    ],
  },
  {
    title: "Behind the scenes: building the SmartTec brand",
    excerpt: "Why we refreshed the brand, what we kept, what we threw away, and how the design system ended up looking like a battery manufacturer's spec sheet (in the best way).",
    category: "Announcement",
    author: "Soohoon Choi",
    authorTitle: "Co-founder & COO",
    date: "Feb 27, 2026",
    readTime: "6 min read",
    body: [
      { type: "p", text: "If you've been following SmartTec, you've noticed we look a little different today. New colors, new type, new product framing. Here's why." },
      { type: "h2", text: "What changed" },
      { type: "p", text: "When we started SmartTec in 2023, we were selling battery systems. The brand looked the part — heavy industrial, very utility. Then we added compute. Then we made compute the lead product. The old brand didn't fit anymore." },
      { type: "h2", text: "The new positioning" },
      { type: "p", text: "SmartTec is now a battery-backed AI cloud. NVIDIA and Cerebras compute on batteries we build. The brand had to say \"modern cloud infrastructure\" while keeping the technical credibility of the hardware story." },
      { type: "h2", text: "The design system" },
      { type: "p", text: "Greptile.com was the visual reference — clean, technical, slightly retro. The hex buttons and edge marks are nods to circuit board design. The ruled-paper background is a nod to engineering spec sheets. The green accent is bright, energetic, distinctly ours." },
      { type: "h2", text: "The mascot" },
      { type: "p", text: "Meet Sparky. He's a battery cell with a face. He represents the personality of the company — friendly, capable, slightly nerdy. He's on the homepage, the announcement banner, and the loading states. He'll show up more over time." },
    ],
  },
  {
    title: "The economics of behind-the-meter AI compute",
    excerpt: "When you own the power, your cost structure changes. We model out five years of TCO for grid-tied vs. behind-the-meter AI compute at 1 MW, 5 MW, and 50 MW scales.",
    category: "Business",
    author: "Daksh Gupta",
    authorTitle: "Co-founder & CEO",
    date: "Feb 14, 2026",
    readTime: "10 min read",
    body: [
      { type: "p", text: "The pitch for behind-the-meter AI compute is simple: when you own the power, you don't pay demand charges, you avoid grid outages, and you can site in uncongested markets. But the actual economics are nuanced. Here's our model." },
      { type: "h2", text: "Grid-tied baseline" },
      { type: "p", text: "A grid-tied 5 MW compute hall has a straightforward cost structure:" },
      { type: "ul", items: [
        "Energy: ~$0.07/kWh average industrial rate in our target markets. Annual energy bill: ~$3M at full utilization.",
        "Demand charges: ~$10-20/kW-month. Annual demand: ~$600k-1.2M.",
        "No battery capex. No battery opex.",
      ] },
      { type: "p", text: "Five-year TCO for grid-tied: about $20-25M, of which energy and demand is about $18-21M." },
      { type: "h2", text: "Behind-the-meter with batteries" },
      { type: "p", text: "Adding z1power batteries changes the math. Capex goes up ($4-6M for the battery system), but opex drops:" },
      { type: "ul", items: [
        "Energy: still pay for charging, but charge from the grid when prices are low. Annual energy: ~$2M.",
        "Demand charges: dramatically reduced or eliminated. Battery absorbs the peak. Annual demand: ~$100-300k.",
        "Battery opex: ~$200k per year for AURA + cell cycling.",
      ] },
      { type: "p", text: "Five-year TCO for behind-the-meter: about $25-30M. Higher capex, lower opex. Payback period: roughly 5-7 years on the battery alone, but the resilience value is on top of that." },
      { type: "h2", text: "Where behind-the-meter wins" },
      { type: "p", text: "The economics flip in favor of behind-the-meter when:" },
      { type: "ul", items: [
        "Grid prices are volatile (most US ISOs are increasingly this).",
        "Outage frequency is high (CAISO, ERCOT, PJM).",
        "Demand charges are punitive (urban industrial rates).",
        "You need sub-10ms failover for compliance or workload reasons.",
      ] },
      { type: "p", text: "For most AI workloads today, at least two of those four apply." },
    ],
  },
  {
    title: "Why we're starting with NVIDIA Cloud Partner architecture",
    excerpt: "Reference architectures aren't glamorous, but they save months of integration work. Here's why we picked NVIDIA's NCP framework for our base deployment and what it unlocks for customers.",
    category: "Product",
    author: "Vaishant Kameswaran",
    authorTitle: "Staff Engineer, AURA",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    body: [
      { type: "p", text: "When you're building a new AI cloud, you have a choice: design your own architecture from scratch, or adopt NVIDIA's Cloud Partner (NCP) reference architecture. We chose NCP. Here's why." },
      { type: "h2", text: "What NCP gives you" },
      { type: "p", text: "NVIDIA Cloud Partner is a reference architecture for building AI clouds on NVIDIA hardware. It covers everything from rack-level topology to network fabric to storage to base operating system. It's the same architecture NVIDIA uses for its own DGX Cloud." },
      { type: "p", text: "The practical benefits:" },
      { type: "ul", items: [
        "NVIDIA NGC software stack pre-configured. Containers, drivers, NCCL, all tested and working.",
        "InfiniBand NDR topology validated. No debugging fabric issues for months.",
        "Multi-node training workloads (Megatron, NeMo) work out of the box.",
        "Storage integration (NetApp, Pure, VAST) pre-validated.",
      ] },
      { type: "h2", text: "The tradeoffs" },
      { type: "p", text: "NCP is opinionated. If you want to do something outside the reference architecture — different storage, different scheduler, different OS — you're on your own. We've found this is rarely a problem in practice, but it's worth knowing." },
      { type: "h2", text: "What it means for customers" },
      { type: "p", text: "When you bring a workload to SmartTec, you can run it the same way you'd run it on DGX Cloud, AWS, GCP, Azure, or CoreWeave. Your existing tooling, your existing orchestration, your existing scripts — they all work. Less migration friction, faster time-to-production." },
    ],
  },
  {
    title: "Announcing SmartTec: the battery-backed AI cloud",
    excerpt: "Today we're announcing SmartTec. NVIDIA and Cerebras compute on megawatt batteries we build ourselves. Q4 2026 power-on. Three design-partner slots now open.",
    category: "Product",
    author: "Daksh Gupta",
    authorTitle: "Co-founder & CEO",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    body: [
      { type: "p", text: "Today we're announcing SmartTec. We've been quiet about this for almost three years. Here's what we're building and why." },
      { type: "h2", text: "The problem" },
      { type: "p", text: "AI workloads need a lot of power. Training a frontier model requires 5-50 MW of continuous power for weeks. Inference at scale requires 1-100 MW sustained, 24/7. The US grid is not built for this. Interconnection queues run 4-7 years. Some markets are functionally closed to new AI tenants." },
      { type: "h2", text: "What we're building" },
      { type: "p", text: "A battery-backed AI cloud. NVIDIA and Cerebras compute running on z1power megawatt battery storage — designed and manufactured by us, end-to-end, in Tulsa, Oklahoma. When the grid drops, the batteries take over in under 10 milliseconds. Your training job keeps running." },
      { type: "h2", text: "When you can use it" },
      { type: "p", text: "Phase 1 power-on: Q4 2026. We're reserving capacity now for three design-partner teams who want launch pricing and direct engineering access. After Q1 2027 we'll open general reservations." },
      { type: "h2", text: "Where to start" },
      { type: "ul", items: [
        "See the compute options: /compute",
        "See the power story: /power",
        "See how orchestration works: /aura",
        "Apply for design partner: /deployments",
        "Talk to us: /contact",
      ] },
    ],
  },
].map((p): Post => {
  const { authorTitle, ...rest } = p as Post;
  return {
    ...rest,
    authorTitle,
    slug: slugify(p.title),
  };
});

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}