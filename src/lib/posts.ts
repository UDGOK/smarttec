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
  | { type: "stat"; items: { value: string; label: string }[] }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "sources"; items: { label: string; url: string }[] };

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const posts: Post[] = [
  {
    slug: "the-research-is-in-ai-data-centers-need-batteries-at-every-layer",
    title: "The research is in: AI data centers need batteries at every layer",
    excerpt: "A 2026 wave of peer-reviewed work — from a Nature Energy paper to arXiv reviews — converges on one finding: AI power profiles break traditional data center design, and layered energy storage is the fix.",
    category: "Engineering",
    author: "Syed Hussain",
    authorTitle: "Co-founder & CEO",
    date: "Jul 19, 2026",
    readTime: "9 min read",
    featured: true,
    body: [
      { type: "p", text: "For twenty years, a data center looked like a steady load to the grid: big, boring, predictable. AI clusters ended that. Synchronized GPU training steps swing power draw by double-digit percentages in under a second, checkpoints create rhythmic surges, and a single cluster can ramp faster than the generators feeding it were designed to follow. In 2026 the academic community caught up to what operators were seeing on their meters — and the conclusion is remarkably consistent." },
      { type: "quote", text: "AI DC load profiles differ fundamentally from traditional loads in their sub-second variability, making conventional ESS dispatch strategies insufficient.", cite: "Grid Integration of AI Data Centers, arXiv 2603.00415 (2026)" },
      { type: "h2", text: "What the 2026 literature actually says" },
      { type: "p", text: "A critical review posted to arXiv this spring (2603.00415) surveys energy storage for AI data centers across every layer of the stack: grid-scale batteries for peak shaving and arbitrage, grid-interactive UPS for millisecond ride-through and frequency support, rack-level storage to smooth cluster power swings, and even chip-level buffering for per-accelerator spikes. Its three headline findings: AI loads are different in kind, not degree; no single storage layer covers every timescale, so hierarchical coordination is required; and the field still lacks good tools for degradation modeling and multi-layer sizing." },
      { type: "img", src: "/blog/bess-layers.svg", alt: "Diagram of energy storage layers in an AI data center from grid-scale batteries to chip-level buffering", caption: "Four storage layers, four timescales — the coordination problem the 2026 literature identifies" },
      { type: "p", text: "It is not one paper. Nature Energy published a perspective this year titled AI data centres as grid-interactive assets (vol. 11, 2026), arguing that batteries let compute campuses support the grid instead of stressing it. Another arXiv paper (2605.14105) shows batteries materially increase how much AI workload a hyperscale site can credibly commit day-ahead under Australia’s connect-and-manage interconnection rules. A third (2605.16190, from researchers including Argonne’s Sungho Shin) co-optimizes battery dispatch with workload scheduling and finds the benefits grow exactly when interconnection limits bind. A fourth (2603.20564) uses distributed batteries to smooth the voltage disturbances data centers inflict on their neighbors." },
      { type: "stat", items: [ { value: "4", label: "Storage layers identified: grid, UPS, rack, chip" }, { value: "2026", label: "Nature Energy: DCs as grid-interactive assets" }, { value: "<1s", label: "Timescale of AI cluster power swings" } ] },
      { type: "h2", text: "Where SmartTec sits in this picture" },
      { type: "p", text: "We did not design our Mead, Oklahoma site from these papers — we designed it from the same physics the papers describe. z1power LFP battery systems sit behind the meter as the site-level storage layer; the UPS layer rides through grid faults with sub-10-millisecond failover as the design target; and AURA, our orchestration software, is the coordination layer the literature keeps saying is missing — it sees the batteries, the grid, and the workload in one control loop." },
      { type: "callout", title: "Why behind-the-meter matters in Oklahoma", body: "Storage only pays if the alternative is expensive. Oklahoma commercial power at roughly $0.08/kWh plus an owned 3 MVA transformer means our batteries do resilience and peak management — not rate arbitrage against a $0.25/kWh colo bill. The economics of every paper above get easier when the site starts cheap." },
      { type: "h2", text: "The honest gaps" },
      { type: "p", text: "The same review is blunt about what is unsolved: battery degradation under high-cycle AI smoothing duty is poorly modeled, forecasting AI load remains hard, and multi-layer sizing is an open research problem. Anyone selling you a solved system is ahead of the science. Our approach is to instrument everything from day one and size conservatively — the 2 spare GPUs and the battery headroom in our Phase 1 design exist precisely because the models are young." },
      { type: "faq", items: [
        { q: "Why do AI data centers need batteries more than traditional data centers?", a: "AI training clusters swing power draw in under a second as GPUs synchronize, which traditional grids and diesel generators cannot follow. Batteries respond in milliseconds, smoothing those swings, riding through grid faults, and letting sites commit more workload under constrained interconnection. Peer-reviewed work in 2026, including a Nature Energy perspective, treats battery-equipped data centers as grid assets rather than grid problems." },
        { q: "What is a grid-interactive UPS?", a: "A grid-interactive UPS is an uninterruptible power supply that does more than backup: it responds to grid signals in milliseconds to provide frequency regulation and voltage ride-through while still protecting the IT load. The 2026 arXiv review 2603.00415 identifies it as the facility-level layer of a multi-layer storage architecture for AI data centers." },
        { q: "What battery chemistry do AI data centers use?", a: "Lithium iron phosphate (LFP) dominates new data center storage because of its thermal stability, long cycle life (4,000+ cycles), and falling cost. SmartTec engineers z1power LFP modules with commercial-grade inverters and UPS into behind-the-meter storage at its Mead, Oklahoma site." },
        { q: "Can a small data center benefit from battery storage, or is this only for hyperscalers?", a: "The physics scale down. A 110 kW GPU cluster sees the same sub-second power swings per rack as a hyperscale hall — the batteries just get smaller. Smaller sites arguably benefit more, because a single grid fault takes out 100% of their capacity, and behind-the-meter storage removes that single point of failure." }
      ] },
      { type: "sources", items: [
        { label: "Grid Integration of AI Data Centers: A Critical Review of Energy Storage Solutions — arXiv 2603.00415 (2026)", url: "https://arxiv.org/abs/2603.00415" },
        { label: "AI data centres as grid-interactive assets — Nature Energy 11, 254–261 (2026)", url: "https://doi.org/10.1038/s41560-025-01927-1" },
        { label: "Battery-Assisted Operation of Hyperscale AI Data Centers — arXiv 2605.14105 (2026)", url: "https://arxiv.org/abs/2605.14105" },
        { label: "Watts vs. Bytes: Storage-Compute Co-Optimization — arXiv 2605.16190 (2026)", url: "https://arxiv.org/abs/2605.16190" },
        { label: "Online Feedback Optimization of Energy Storage to Smooth Data Center Grid Impacts — arXiv 2603.20564 (2026)", url: "https://arxiv.org/abs/2603.20564" }
      ] }
    ],
  },
  {
    slug: "what-china-s-underwater-data-centers-teach-a-landlocked-oklahoma-operator",
    title: "What China’s underwater data centers teach a landlocked Oklahoma operator",
    excerpt: "The world’s first commercial subsea data center has run 35 meters under the South China Sea for nearly three years. We operate on dry land in Mead, Oklahoma — and we’re taking notes anyway.",
    category: "Industry",
    author: "SmartTec Engineering",
    authorTitle: "Team",
    date: "Jul 17, 2026",
    readTime: "8 min read",
    body: [
      { type: "p", text: "Off Lingshui county on Hainan island, capsule-shaped steel modules the weight of a thousand cars sit 35 meters below the surface, running cloud services and, increasingly, AI workloads. Operator HiCloud reports the cluster has run for close to three years, and in May 2026 a second subsea site went live off Shanghai — this one fed by an offshore wind farm of more than 50 turbines, housing roughly 2,000 servers at up to 24 MW. China’s stated plan for Hainan alone is a network of 100 underwater cabins." },
      { type: "h2", text: "Why put servers in the ocean at all" },
      { type: "p", text: "Because the two things that dominate a data center’s operating cost — cooling energy and water — are what the ocean provides for free. Seawater is an enormous, thermally stable heat sink; subsea designs pump it through rack-back radiators instead of running chillers. The Mercator Institute for China Studies (MERICS) reports the Hainan facility is 40–60 percent more power-efficient than comparable land sites, and state media reporting puts overall efficiency more than 30 percent ahead of conventional facilities of the same scale, with the thermal plume raising water temperature less than 1°C within two meters of the modules. Those are operator-side numbers and deserve independent verification — but even discounted, they explain the bet." },
      { type: "img", src: "/blog/underwater-vs-btm.svg", alt: "Comparison diagram of China’s subsea data center design versus SmartTec’s behind-the-meter battery design in Oklahoma", caption: "Different physics, same target: cut the power-and-cooling tax that dominates data center economics" },
      { type: "h2", text: "The trade nobody escapes" },
      { type: "p", text: "Subsea buys efficiency by giving up serviceability. A failed server in a sealed pressure vessel waits for a crane and a maintenance window; Microsoft’s Project Natick — the research ancestor of these deployments — famously ran sealed nitrogen atmospheres and simply accepted that dead hardware stayed dead until retrieval. Corrosion, biofouling, and marine-heat-wave scenarios (a 2022 study flagged warmer, oxygen-poor outlet water during heat waves) are live engineering questions. Land sites pay more for cooling and get same-day, walk-in repair in exchange." },
      { type: "h2", text: "What we actually took from it" },
      { type: "ul", items: [
        "Attack the biggest operating line with siting, not gadgets. Hainan uses free seawater; Mead uses ~$0.08/kWh Oklahoma power, an owned 3 MVA transformer, and z1power LFP batteries behind the meter. Both are siting decisions that make every later choice cheaper.",
        "Pair the site with its natural energy source. Shanghai’s subsea pods plug into offshore wind; our 30 acres hold room for ~500 kW of solar feeding the same batteries.",
        "Design for the failure you can actually fix. We keep two spare B200 GPUs outside all tenant contracts and chose serviceable racks over sealed exotics — because our comparative advantage is that a technician can be at the rack in minutes."
      ] },
      { type: "callout", title: "The pattern behind both designs", body: "Subsea pods and behind-the-meter batteries are the same idea wearing different equipment: stop renting your power and cooling from the most expensive provider available, and let the site itself do the work." },
      { type: "faq", items: [
        { q: "Are underwater data centers real or experimental?", a: "Real and commercial. The Hainan facility off Lingshui, China has operated at 35 meters depth since late 2023 and is described by operators and Chinese state media as the world’s first commercial underwater data center. A second subsea site, partly wind-powered, went live off Shanghai in May 2026 with roughly 2,000 servers and a 24 MW design capacity." },
        { q: "How much energy do underwater data centers save?", a: "Operator-reported figures range from 30 percent overall efficiency gains (People’s Daily, for Hainan) to 40–60 percent better power efficiency versus comparable land facilities (MERICS analysis). The savings come from using seawater as a free heat sink instead of running chillers. Independent long-term verification is still limited." },
        { q: "What are the downsides of subsea data centers?", a: "Serviceability, corrosion, and ecosystem questions. Hardware in a sealed subsea capsule cannot be repaired until the module is lifted; seawater is corrosive; and researchers have flagged that during marine heat waves the warmer, oxygen-poor discharge water could stress local marine life. Land-based designs trade higher cooling costs for same-day repair access." },
        { q: "Does SmartTec plan anything like this?", a: "No — we take the principle, not the plumbing. Our Mead, Oklahoma site gets its cost advantage from owned land, a 3 MVA transformer, cheap Oklahoma power, and z1power LFP batteries behind the meter, while keeping every server a walk-up repair." }
      ] },
      { type: "sources", items: [
        { label: "China is commercializing energy-efficient underwater data centers — MERICS", url: "https://merics.org/en/comment/china-commercializing-energy-efficient-underwater-data-centers" },
        { label: "Subsea server cooling: pioneering green data centers in South China — People’s Daily (Mar 2026)", url: "http://en.people.cn/n3/2026/0331/c98649-20441982.html" },
        { label: "China’s wind-powered underwater data center off Shanghai — BGR (Jun 2026)", url: "https://www.bgr.com/2183251/china-underwater-data-center-wind-farm/" },
        { label: "China Powers AI Boom with Undersea Data Centers — Scientific American", url: "https://www.scientificamerican.com/article/china-powers-ai-boom-with-undersea-data-centers/" }
      ] }
    ],
  },
  {
    slug: "korea-builds-gigawatts-japan-builds-pods-and-what-110-kw-in-oklahoma-has-in-common-with-osaka",
    title: "Korea builds gigawatts, Japan builds pods — and what 110 kW in Oklahoma has in common with Osaka",
    excerpt: "Asia’s two AI-infrastructure superpowers picked opposite strategies. Korea is pouring ~550 trillion won into 18.4 GW of national AI campuses; Japan is scattering liquid-cooled GPU pods through its cities. Both are right — for their constraints.",
    category: "Industry",
    author: "Yasir Jahangir",
    authorTitle: "Co-founder & COO",
    date: "Jul 15, 2026",
    readTime: "8 min read",
    body: [
      { type: "p", text: "In June 2026, Korea’s government and its chaebols announced one of the largest infrastructure programs on earth: roughly 550 trillion won (~$400B) with SK, GS, and Naver to build 8.4 GW of AI data centers by 2029 and 18.4 GW by 2035 — SK alone targeting 5 GW including Ulsan, GS building 2.4 GW in Donghae, Naver anchoring Sejong. Separately, SK Group and AWS are building a 60,000-GPU campus in Ulsan that ramps from 41 MW in 2027 to 103 MW by 2029. Korean AI halls are being designed around 70 kW racks with PUE targets under 1.2." },
      { type: "p", text: "Japan is running the opposite play. Instead of mega-campuses on cheap land, operators are deploying modular, containerized GPU pods inside and near cities — close to demand and to renewable feed-ins. KDDI’s Osaka Sakai center, built with HPE on NVIDIA Blackwell with direct liquid cooling, opened to customers in April 2026 as exactly this kind of distributed AI factory. And underneath it all, NTT’s IOWN program is rebuilding the network in photonics, targeting 125× capacity and 100× power efficiency by 2032 so that distributed sites behave like one." },
      { type: "img", src: "/blog/asia-scale.svg", alt: "Log-scale comparison of Korea’s 18.4 GW national plan, the SK-AWS Ulsan campus, a Japanese urban GPU pod, and SmartTec’s 110 kW Mead site", caption: "Four deliberate design points on the same curve — small is a strategy, not a shortfall" },
      { type: "h2", text: "Why the strategies differ" },
      { type: "ul", items: [
        "Korea has industrial land, gigawatt grid programs, and conglomerates that can underwrite decade-long buildouts — so it optimizes for scale economics and sovereign AI capacity.",
        "Japan has scarce urban land, high power prices, and latency-sensitive customers — so it optimizes for proximity, modularity, and network efficiency (hence IOWN’s photonics bet).",
        "Both accept the same physics: dense GPU racks, liquid cooling as default, and power as the binding constraint."
      ] },
      { type: "h2", text: "Where a 110 kW site in Mead, Oklahoma fits" },
      { type: "p", text: "Phase 1 at our Mead site — 30 NVIDIA B200s at roughly 110 kW of IT load — sits unambiguously at the Japanese end of the curve, and deliberately so. Our constraints look more like Osaka’s than Ulsan’s: a defined tenant base, owned buildings, and an advantage that comes from what the site already has (a 3 MVA transformer, ~$0.08/kWh power, z1power batteries behind the meter) rather than from what a nation can build. The pod strategy’s lesson is that matching capacity to committed demand beats building capacity and praying — our 30 GPUs are 100% pre-committed to six anchor tenants before power-on, which is the small-site superpower no gigawatt campus can copy." },
      { type: "stat", items: [ { value: "18.4 GW", label: "Korea’s national AI-DC target by 2035" }, { value: "103 MW", label: "SK+AWS Ulsan campus at 2029 ramp" }, { value: "110 kW", label: "SmartTec Mead Phase 1 — 100% pre-committed" } ] },
      { type: "callout", title: "The transformer is the roadmap", body: "Our 3 MVA transformer runs Phase 1 at under 4% utilization. Korea plans in gigawatts; we plan in buildings — the same site supports roughly 20× today’s load across Buildings 2–3 before any utility upgrade, funded by cash flow instead of a national budget." },
      { type: "faq", items: [
        { q: "How big is South Korea’s AI data center buildout?", a: "Korea’s June 2026 national program targets 8.4 GW of AI data centers by 2029 and 18.4 GW by 2035, backed by roughly 550 trillion won of investment led by SK Group (5 GW including Ulsan), GS Group (2.4 GW in Donghae), and Naver (about 1 GW around Sejong). Separately, SK and AWS are building a 60,000-GPU, $4B campus in Ulsan scaling to 103 MW by 2029." },
        { q: "What is Japan’s urban GPU pod strategy?", a: "Rather than giant rural campuses, Japanese operators deploy small, modular, often containerized liquid-cooled GPU sites inside metropolitan areas, close to users and renewable interconnects. KDDI’s Osaka Sakai data center — HPE-built on NVIDIA Blackwell with direct liquid cooling, open since April 2026 — is a flagship example, and NTT’s IOWN photonics network aims to make distributed sites perform like one facility." },
        { q: "Is a small GPU data center competitive against hyperscale campuses?", a: "At the right design point, yes. Small sites win when capacity is matched to committed demand, land and power are already owned, and latency or data-residency favors proximity. They lose on $/GPU at massive scale. SmartTec’s 110 kW Phase 1 is fully pre-committed to six anchor tenants, which converts small size into contract certainty." },
        { q: "What rack densities are new Asian AI data centers designed for?", a: "Korean AI campuses are being specified around 70 kW racks with PUE targets below 1.2, per market analyses of the 2026 buildout — figures that require liquid cooling and that mirror the direct-liquid-cooled Blackwell deployments in Japan." }
      ] },
      { type: "sources", items: [
        { label: "Korea targets 550 trillion won AI data center push — Seoul Economic Daily (Jun 2026)", url: "https://en.sedaily.com/finance/2026/06/29/korea-targets-550-trillion-won-ai-data-center-push-in-ulsan" },
        { label: "South Korea data center market analyses — Mordor Intelligence (Jan 2026)", url: "https://www.mordorintelligence.com/industry-reports/south-korea-data-center-market" },
        { label: "KDDI launches Osaka Sakai data center — Data Center Dynamics (Mar 2026)", url: "https://www.datacenterdynamics.com/en/news/kddi-launches-data-center-in-osaka-japan/" },
        { label: "Japan’s urban data centre strategy — Business Weekly / Intralink (Mar 2026)", url: "https://www.businessweekly.co.uk/posts/thinking-small-japans-urban-data-centre-strategy-and-the-technologies-making-it-possible" },
        { label: "NTT IOWN photonics platform — IEEE Spectrum (Dec 2025)", url: "https://spectrum.ieee.org/silicon-photonics-data-center" }
      ] }
    ],
  },
  {
    slug: "the-thermal-wall-what-peer-reviewed-cooling-research-says-about-your-next-gpu-cluster",
    title: "The thermal wall: what peer-reviewed cooling research says about your next GPU cluster",
    excerpt: "Air cooling is hitting a physical ceiling just as the average rack jumped 69% in a year to 27 kW and single GPUs crossed 1,000 watts. Here’s what the 2025–26 research literature says each cooling method can actually hold.",
    category: "Engineering",
    author: "SmartTec Engineering",
    authorTitle: "Team",
    date: "Jul 14, 2026",
    readTime: "9 min read",
    body: [
      { type: "p", text: "European cooling manufacturer HiRef calls it the thermal wall: the point where air physically cannot carry heat away fast enough, no matter how hard the fans spin. The industry is hitting it now. Average rack density reached roughly 27 kW in 2026 — a 69% jump in a single year — and an NVIDIA B200 dissipates about 1.2 kW by itself. Industry trackers put liquid cooling’s share of data centers at ~3% in 2021 and project roughly 37% in 2026. That is not a trend; that is a phase change." },
      { type: "img", src: "/blog/thermal-wall.svg", alt: "Chart of rack density ceilings for air cooling, rear-door heat exchangers, direct-to-chip liquid, and immersion cooling", caption: "Approximate rack-density ceilings by method, synthesized from 2025–26 reviews and vendor data" },
      { type: "h2", text: "What the peer-reviewed literature covers" },
      { type: "p", text: "The academic record has matured fast. A computational study of single-phase immersion for high-density server racks appeared in Applied Thermal Engineering (vol. 264, 2025); Energy & Built Environment (vol. 7, 2026) published a systematic review of single-phase immersion research; the International Journal of Heat and Fluid Flow (2026) reviewed all four two-phase chip-cooling approaches — immersion, spray, cold plate, and heat pipe; and a 2026 paper in Energy even co-designs cooling with nuclear-powered hyperscale campuses. Meanwhile the practical guidance in the EU Code of Conduct on Data Centre Energy Efficiency and the US DOE’s best-practices guide covers the unglamorous levers: inlet temperatures, humidity windows, and containment discipline." },
      { type: "h2", text: "The numbers that matter for operators" },
      { type: "stat", items: [ { value: "27 kW", label: "Average rack density 2026 (+69% YoY)" }, { value: "~16%", label: "Node power reduction, liquid vs air (vendor benchmark)" }, { value: "1.03–1.08", label: "Reported PUE range for immersion systems" } ] },
      { type: "p", text: "Benchmark data published by Supermicro and analyzed in 2026 industry TCO work shows liquid-cooled H100 nodes drawing roughly 1 kW less per node — about 16% — while sustaining around 17% higher throughput under stress, because GPUs stop thermal-throttling. One documented case saw junction temperatures fall from 83°C to 44°C on the same hardware after a cooling-loop change, cutting a 31-hour training job back to 22 hours. Cooling is not overhead; it is performance." },
      { type: "h2", text: "How we cool 30 B200s in an Oklahoma summer" },
      { type: "p", text: "Phase 1 at Mead runs about 110 kW of IT across four HGX B200 servers — dense, but below the wall for well-executed air with hot/cold-aisle containment, which is exactly what our $150K Building 1 retrofit implements: roughly 30 tons of cooling with headroom above the Oklahoma design day. The honest engineering statement is that this is the last generation we expect to air-cool. The building design reserves the mechanical space and power for direct-to-chip liquid in Phase 2, because every roadmap — NVIDIA’s, the researchers’, and the market’s — points the same direction." },
      { type: "callout", title: "Read the guides before the vendors", body: "The EU Code of Conduct and the US DOE best-practices guide are free, vendor-neutral, and cover the containment and setpoint discipline that decides whether any cooling technology hits its rated numbers. Most cooling failures we hear about are airflow management failures wearing a technology costume." },
      { type: "faq", items: [
        { q: "At what rack density does air cooling stop working?", a: "Well-executed air cooling with hot/cold-aisle containment generally holds to roughly 30–40 kW per rack; rear-door heat exchangers extend that to about 60–80 kW; direct-to-chip liquid handles 120 kW-class racks; and immersion systems are demonstrated at 200 kW and beyond. With the 2026 average rack at ~27 kW and climbing 69% year-over-year, most new AI builds are specifying liquid from day one." },
        { q: "Does liquid cooling actually improve GPU performance?", a: "Yes, measurably. Vendor benchmark data analyzed in 2026 shows liquid-cooled H100 nodes drawing about 16% less power while sustaining roughly 17% higher throughput, because lower junction temperatures prevent thermal throttling. In one documented case, a cooling-loop change alone cut a 31-hour training job to 22 hours on identical hardware." },
        { q: "What PUE can each cooling method achieve?", a: "Industry-reported 2026 ranges: traditional air cooling around 1.45–1.60, direct-to-chip liquid roughly 1.15–1.25, and immersion cooling 1.03–1.08. Every point of PUE is overhead energy billed at your power rate for all 8,760 hours of the year." },
        { q: "How does SmartTec cool its B200 cluster?", a: "Phase 1 (30× B200, ~110 kW IT) uses engineered air cooling — about 30 tons of capacity with hot/cold-aisle containment, designed for Oklahoma summer peaks — with mechanical space and power reserved to move to direct-to-chip liquid in Phase 2 as densities rise." }
      ] },
      { type: "sources", items: [
        { label: "Computational study of single-phase immersion cooling — Applied Thermal Engineering 264 (2025), 125476", url: "https://www.sciencedirect.com/science/article/abs/pii/S1359431124007804" },
        { label: "Review of immersion liquid cooling for high-performance data centers — Energy & Built Environment 7 (2026)", url: "https://www.sciencedirect.com/science/article/abs/pii/S0142727X26000482" },
        { label: "Two-phase liquid cooling on the chip side: summary and prospects — Int. J. Heat & Fluid Flow (2026)", url: "https://www.sciencedirect.com/science/article/abs/pii/S1364032125006677" },
        { label: "Liquid Cooling — The Imperative of 2026 — HiRef white paper", url: "https://hiref.com/news/liquid-cooling-evolution" },
        { label: "Data center cooling economics 2026 — TCO analysis incl. Supermicro benchmarks", url: "https://www.adamsilvaconsulting.com/insights/data-center-cooling-economics-2026" }
      ] }
    ],
  },
  {
    slug: "pue-is-money-the-real-economics-of-cooling-choices",
    title: "PUE is money: the real economics of cooling choices",
    excerpt: "PUE 1.45 versus 1.06 sounds like a rounding error until you multiply by 8,760 hours. On one megawatt of IT load, the gap between air and immersion cooling is a quarter-million dollars a year — before you count the throughput.",
    category: "Business",
    author: "Syed Hussain",
    authorTitle: "Co-founder & CEO",
    date: "Jul 13, 2026",
    readTime: "7 min read",
    body: [
      { type: "p", text: "Power Usage Effectiveness is the most consequential number most compute buyers never ask about. It is simply total facility power divided by IT power: a PUE of 1.50 means that for every watt reaching a GPU, another half-watt goes to cooling, power conversion, and lights. That overhead watt is billed at the same rate, every hour, all year." },
      { type: "img", src: "/blog/pue-economics.svg", alt: "Bar chart of overhead power per megawatt of IT load for air, direct-to-chip, and immersion cooling", caption: "Overhead kW per 1 MW of IT load, using 2026 industry-reported PUE ranges" },
      { type: "h2", text: "The arithmetic, in the open" },
      { type: "p", text: "Take one megawatt of IT load and 2026 industry-reported PUE ranges: air at 1.45–1.60 means 450–600 kW of overhead; direct-to-chip at 1.15–1.25 means 150–250 kW; immersion at 1.03–1.08 means 30–80 kW. At Oklahoma’s ~$0.08/kWh, the air-versus-immersion gap of roughly 370–520 kW is worth about $260–360K per year, per IT-megawatt. At a coastal colo paying $0.20/kWh, the same gap costs $650–910K. This is our own calculation from published ranges — check it with your own rates; the spreadsheet is one line long." },
      { type: "stat", items: [ { value: "$260–360K", label: "Annual air-vs-immersion overhead gap per MW IT at $0.08/kWh" }, { value: "8,760", label: "Hours per year every overhead watt is billed" }, { value: "10-yr TCO", label: "One 64-rack analysis: $28M immersion vs $42M air" } ] },
      { type: "p", text: "Third-party TCO work reaches the same shape: one 2026 analysis of a 64-rack AI deployment put ten-year total cost at roughly $28M for immersion versus $42M for air — a $14M spread driven by the PUE difference plus 60–75% less real estate. And the second-order effect compounds it: cooler chips do not throttle, so the same hardware ships more tokens per dollar." },
      { type: "h2", text: "Why our number starts lower" },
      { type: "p", text: "The other factor in the bill is the rate itself. PUE multiplies your power price — which is why we put the site in Mead, Oklahoma at roughly $0.08/kWh with an owned 3 MVA transformer, and why z1power LFP batteries behind the meter handle peaks instead of demand charges. A modest PUE at a cheap rate beats a heroic PUE at a coastal one: at 110 kW of Phase-1 IT load, every 0.1 of PUE we avoid is worth about $7,700 a year — and the same discipline scales with Buildings 2 and 3." },
      { type: "callout", title: "Questions to ask any GPU provider", body: "What is your measured (not design) PUE? What power rate is baked into my $/GPU-hour? Do you throttle under thermal load, and will you show me sustained-throughput data in August? Providers with good answers volunteer them." },
      { type: "faq", items: [
        { q: "What is a good PUE for a data center in 2026?", a: "Industry-reported 2026 ranges: legacy air-cooled facilities run 1.45–1.60, modern direct-to-chip liquid designs achieve roughly 1.15–1.25, and immersion systems report 1.03–1.08. Purpose-built AI campuses in markets like South Korea are targeting under 1.2 as standard." },
        { q: "How much money does PUE actually save?", a: "Overhead scales with IT load, PUE, and power rate: on 1 MW of IT at $0.08/kWh, moving from air (PUE ~1.5) to immersion (~1.06) saves roughly $260–360K per year; at $0.20/kWh the same move saves $650–910K. Multiply your own IT kW × (PUE gap) × your rate × 8,760 hours." },
        { q: "Does low PUE mean cheaper GPU rental prices?", a: "Usually, because the provider’s largest operating cost is power and cooling overhead. But the power rate matters as much as the ratio: a PUE of 1.3 at $0.08/kWh produces cheaper GPU-hours than a PUE of 1.1 at $0.25/kWh. Ask providers for both numbers." },
        { q: "What PUE does SmartTec target?", a: "Phase 1 at Mead uses engineered air with hot/cold-aisle containment at ~110 kW IT load, with the bigger lever being Oklahoma power at ~$0.08/kWh and behind-the-meter z1power batteries. As-built PUE will be published at power-on rather than promised in advance — measured beats marketed." }
      ] },
      { type: "sources", items: [
        { label: "Data center cooling economics 2026 — air vs liquid vs immersion TCO analysis", url: "https://www.adamsilvaconsulting.com/insights/data-center-cooling-economics-2026" },
        { label: "Liquid Cooling — The Imperative of 2026 — HiRef white paper", url: "https://hiref.com/news/liquid-cooling-evolution" },
        { label: "Liquid cooling of data centers: a necessity facing challenges — ScienceDirect review", url: "https://www.sciencedirect.com/science/article/abs/pii/S1359431124007804" }
      ] }
    ],
  },

  {
    title: "Why we're building a battery-backed AI cloud",
    excerpt: "AI workloads need 10x the power of traditional compute. The grid can't keep up — interconnection queues are 4 to 7 years long. We bet that owning the power layer is the only way to ship AI compute at the pace the market needs.",
    category: "Industry",
    author: "Syed Hussain",
    authorTitle: "Co-founder & CEO",
    date: "Jun 22, 2026",
    readTime: "8 min read",
    featured: false,
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
    author: "Yasir Jahangir",
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
    author: "SmartTec Engineering",
    authorTitle: "Team",
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
    author: "SmartTec Engineering",
    authorTitle: "Team",
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
    title: "The AI infrastructure build-out is bottlenecked on power, not chips",
    excerpt: "Everyone is talking about GPU shortages. The real bottleneck is megawatt-scale power delivery. We pulled 18 months of data on interconnection queues and the picture is grim.",
    category: "Industry",
    author: "Syed Hussain",
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
    author: "Yasir Jahangir",
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
    author: "Yasir Jahangir",
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
    author: "Syed Hussain",
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
    author: "SmartTec Engineering",
    authorTitle: "Team",
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
    author: "Syed Hussain",
    authorTitle: "Co-founder & CEO",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    body: [
      { type: "p", text: "Today we're announcing SmartTec. We've been quiet about this for almost three years. Here's what we're building and why." },
      { type: "h2", text: "The problem" },
      { type: "p", text: "AI workloads need a lot of power. Training a frontier model requires 5-50 MW of continuous power for weeks. Inference at scale requires 1-100 MW sustained, 24/7. The US grid is not built for this. Interconnection queues run 4-7 years. Some markets are functionally closed to new AI tenants." },
      { type: "h2", text: "What we're building" },
      { type: "p", text: "A battery-backed AI cloud. NVIDIA and Cerebras compute behind battery storage we engineer ourselves on z1power LFP — a founder-owned partner company — deployed at our owned site in Mead, Oklahoma. When the grid drops, the batteries take over in under 10 milliseconds by design. Your training job keeps running." },
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