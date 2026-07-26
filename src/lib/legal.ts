/**
 * Legal documents for smarttec.dev.
 *
 * IMPORTANT — these are drafts prepared for review by licensed counsel.
 * They are modeled on standard US commercial practice and tailored to
 * SmartTec's actual data handling and service offering, but they have not
 * been reviewed by an attorney. Do not treat them as legal advice.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; body: string }
  | { type: "caps"; title: string; body: string };

export type LegalDoc = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  effective: string;
  blocks: LegalBlock[];
};

const ENTITY = "SmartTec, Inc.";
const EFFECTIVE = "26 July 2026";

/* ============================================================
   TERMS OF USE
   ============================================================ */

const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Use",
  shortTitle: "Terms of Use",
  summary:
    "The agreement governing your use of smarttec.dev, including warranty disclaimers, limitation of liability, and binding arbitration.",
  metaTitle: "Terms of Use | SmartTec",
  metaDescription:
    "Terms of Use for smarttec.dev — acceptable use, intellectual property, disclaimer of warranties, limitation of liability, and binding individual arbitration under Oklahoma law.",
  effective: EFFECTIVE,
  blocks: [
    {
      type: "callout",
      title: "Read this before using the site",
      body: "These Terms contain a binding arbitration provision and a class action waiver in Section 15. They affect how disputes between you and SmartTec are resolved. You may opt out of arbitration within 30 days of first accepting these Terms by following the instructions in Section 15.7.",
    },
    { type: "h2", text: "1. Acceptance of these Terms" },
    {
      type: "p",
      text: `These Terms of Use ("Terms") form a binding agreement between you and ${ENTITY}, a Delaware corporation with its principal place of business in Tulsa, Oklahoma ("SmartTec," "we," "us," or "our"), and govern your access to and use of smarttec.dev and any subdomain, page, tool, calculator, form, feed, or file made available through it (collectively, the "Site").`,
    },
    {
      type: "p",
      text: "By accessing or using the Site, you accept these Terms in full. If you do not accept them, do not access or use the Site. If you use the Site on behalf of a company or other entity, you represent that you have authority to bind that entity, and \"you\" refers to both you and that entity.",
    },
    { type: "h2", text: "2. The Site is informational" },
    {
      type: "p",
      text: "The Site describes SmartTec's business, its planned facility in Mead, Oklahoma, its design and build services, and industry information we believe to be of interest. Nothing on the Site is an offer capable of acceptance, a binding quotation, a commitment to supply capacity or services, or an agreement to enter into any transaction. No contract is formed between you and SmartTec by your use of the Site, by submitting any form, or by receiving any automated output.",
    },
    {
      type: "p",
      text: "Any commercial relationship with SmartTec arises only under a separate written agreement signed by an authorized officer of SmartTec. In the event of any conflict between these Terms and such a signed agreement, the signed agreement controls as to its subject matter.",
    },
    {
      type: "p",
      text: "These Terms are the authoritative terms for the Site. Where any other page — including any summary of terms, service description, trust centre, or security overview published elsewhere on the Site — states something inconsistent with these Terms, these Terms govern. Summaries published elsewhere are for convenience only and create no rights.",
    },
    { type: "h2", text: "3. Pre-launch status and forward-looking content" },
    {
      type: "p",
      text: "SmartTec is a pre-revenue, pre-power-on company. Statements on the Site about future capacity, timelines, performance, pricing, availability, partnerships, or financial results are forward-looking and inherently uncertain. Design targets — including power usage effectiveness, failover behavior, redundancy, and availability figures — are engineering objectives to be validated at commissioning, not measured results or performance guarantees. See our Forward-Looking Statements notice, which is incorporated into these Terms by reference.",
    },
    { type: "h2", text: "4. Scoping tools, calculators, and engineering content" },
    {
      type: "p",
      text: "The Site includes tools that generate indicative technical and commercial estimates from inputs you supply, including the scoping tool at /design/scope and the cost calculator at /calculator. These tools apply generic default assumptions to the values you enter. They do not survey your site, review your drawings, consult your utility, examine your equipment, or account for applicable codes.",
    },
    {
      type: "p",
      text: "Output from these tools is an indicative planning estimate only. It is not engineering, not a design, not a quotation, and not a professional opinion. Our Engineering & Scope Tool Disclaimer governs all such output and all design, engineering, and technical content on the Site, and is incorporated into these Terms by reference. You must read it before relying on anything the Site produces.",
    },
    { type: "h2", text: "5. No professional relationship" },
    {
      type: "p",
      text: "Your use of the Site does not create any professional relationship between you and SmartTec, including any engineer-client, architect-client, attorney-client, broker-dealer, investment advisory, or fiduciary relationship. Nothing on the Site constitutes engineering, architectural, legal, tax, accounting, investment, or financial advice. SmartTec does not offer or render professional engineering services through the Site in any jurisdiction.",
    },
    { type: "h2", text: "6. Eligibility" },
    {
      type: "p",
      text: "The Site is intended for business users aged 18 or over. It is not directed at children, and we do not knowingly collect personal information from anyone under 16. If you believe a child has provided us personal information, contact us and we will delete it.",
    },
    { type: "h2", text: "7. Intellectual property" },
    {
      type: "p",
      text: "The Site and all of its content — text, graphics, diagrams, schematics, illustrations, layout, design, software, data models, calculation logic, and the selection and arrangement of all of it — are owned by SmartTec or its licensors and are protected by United States and international copyright, trademark, trade dress, and other intellectual property laws.",
    },
    {
      type: "p",
      text: "SmartTec grants you a limited, revocable, non-exclusive, non-transferable licence to access and view the Site for your own internal business evaluation purposes. You may not copy, reproduce, republish, scrape, mirror, frame, sell, licence, or create derivative works from the Site or its content without our prior written consent, except that you may print or save individual pages for your own internal reference.",
    },
    {
      type: "p",
      text: "\"SmartTec,\" the SmartTec logo, and \"AURA\" are trademarks of SmartTec, Inc. Third-party names and marks appearing on the Site — including NVIDIA, Cerebras, AMD, and others — are the property of their respective owners and are used for identification and comparison only. Their appearance does not imply endorsement, sponsorship, affiliation, certification, or partnership unless expressly stated.",
    },
    { type: "h2", text: "8. Feedback and submissions" },
    {
      type: "p",
      text: "If you send us ideas, suggestions, or feedback about the Site or our services, you grant SmartTec a perpetual, irrevocable, worldwide, royalty-free licence to use them for any purpose without obligation or compensation to you. Do not send us information you consider confidential unless we have a signed confidentiality agreement covering it. Information you enter into the scoping tool is handled as described in our Privacy Policy.",
    },
    { type: "h2", text: "9. Acceptable use" },
    {
      type: "p",
      text: "You must not use the Site to do anything unlawful, infringing, deceptive, or harmful; attempt to gain unauthorized access to any system; probe, scan, or test the vulnerability of any system without our prior written authorization; interfere with or disrupt the Site; use automated means to extract data at a rate or volume that burdens our infrastructure; or misrepresent your identity or affiliation. Our Acceptable Use Policy applies in full and is incorporated by reference.",
    },
    {
      type: "p",
      text: "The /invest area is password-protected. Accessing or attempting to access it without authorization, or sharing credentials with anyone not authorized by SmartTec, is prohibited and may violate applicable computer fraud and securities laws.",
    },
    { type: "h2", text: "10. Third-party links and services" },
    {
      type: "p",
      text: "The Site links to third-party websites, sources, and services, and aggregates third-party news content. We do not control and are not responsible for third-party content, availability, accuracy, or practices. Links are provided for convenience and do not imply endorsement. Your dealings with third parties are solely between you and them.",
    },
    { type: "h2", text: "11. Accuracy and availability" },
    {
      type: "p",
      text: "We take reasonable care with the Site's content, but we do not warrant that it is accurate, complete, current, or error-free. Market rates, third-party specifications, industry figures, and aggregated news are drawn from sources we believe reliable but which we have not independently verified. Pricing and availability information is indicative and subject to change without notice. We may change, suspend, or discontinue any part of the Site at any time without liability.",
    },
    { type: "h2", text: "12. Privacy" },
    {
      type: "p",
      text: "Our Privacy Policy explains what personal information we collect, why, who processes it on our behalf, and what rights you have. It is incorporated into these Terms by reference.",
    },
    {
      type: "caps",
      title: "13. Disclaimer of warranties",
      body: "THE SITE AND ALL CONTENT, TOOLS, CALCULATORS, ESTIMATES, DATA, AND OUTPUT MADE AVAILABLE THROUGH IT ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY. TO THE FULLEST EXTENT PERMITTED BY LAW, SMARTTEC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, SUPPLIERS, AND LICENSORS DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, QUIET ENJOYMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. SMARTTEC DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT ANY ESTIMATE, CALCULATION, PROJECTION, DESIGN TARGET, OR TECHNICAL STATEMENT ON THE SITE IS ACCURATE, COMPLETE, SUITABLE FOR YOUR PURPOSE, OR FIT TO BE RELIED UPON. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THESE EXCLUSIONS MAY NOT APPLY TO YOU.",
    },
    {
      type: "caps",
      title: "14. Limitation of liability",
      body: "TO THE FULLEST EXTENT PERMITTED BY LAW, SMARTTEC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, SUPPLIERS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS OPPORTUNITY, CAPITAL, USE, OR ANTICIPATED SAVINGS, OR FOR ANY COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER THEORY, AND WHETHER OR NOT SMARTTEC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS EXCLUSION APPLIES WITHOUT LIMITATION TO ANY DECISION YOU MAKE, ANY CAPITAL YOU COMMIT, ANY EQUIPMENT YOU PROCURE, OR ANY DESIGN YOU ADOPT IN RELIANCE ON ANY ESTIMATE, CALCULATION, OR TECHNICAL STATEMENT ON THE SITE. SMARTTEC'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID SMARTTEC FOR ACCESS TO THE SITE IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (US$100). THESE LIMITATIONS APPLY EVEN IF A LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. NOTHING IN THESE TERMS EXCLUDES OR LIMITS LIABILITY THAT CANNOT LAWFULLY BE EXCLUDED OR LIMITED, INCLUDING LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE OR FOR FRAUD OR FRAUDULENT MISREPRESENTATION. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME OF THESE MAY NOT APPLY TO YOU.",
    },
    { type: "h2", text: "15. Dispute resolution — binding individual arbitration" },
    {
      type: "callout",
      title: "Please read this section carefully",
      body: "It requires you to arbitrate disputes with SmartTec individually rather than in court, and waives your right to a jury trial and to participate in a class action. You may opt out within 30 days under Section 15.7.",
    },
    { type: "h3", text: "15.1 Informal resolution first" },
    {
      type: "p",
      text: "Before starting arbitration, you agree to give us an opportunity to resolve the dispute informally. Send a written notice describing the dispute and the relief sought to hello@smarttec.dev and to SmartTec, Inc., Tulsa, Oklahoma. The parties will attempt in good faith to resolve the dispute for 60 days from receipt. This period tolls any applicable limitation period.",
    },
    { type: "h3", text: "15.2 Agreement to arbitrate" },
    {
      type: "p",
      text: "If the dispute is not resolved within 60 days, you and SmartTec agree that any dispute, claim, or controversy arising out of or relating to the Site, these Terms, or their breach, termination, enforcement, interpretation, or validity — including the determination of the scope or applicability of this agreement to arbitrate — will be resolved by binding individual arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, rather than in court.",
    },
    { type: "h3", text: "15.3 Seat, law, and procedure" },
    {
      type: "p",
      text: "The arbitration will be seated in Tulsa County, Oklahoma, before a single arbitrator, and conducted in English. The Federal Arbitration Act governs the interpretation and enforcement of this section. Judgment on the award may be entered in any court of competent jurisdiction. The arbitrator may award any relief available in an individual action in court, and must issue a reasoned written decision.",
    },
    { type: "h3", text: "15.4 Class action waiver" },
    {
      type: "p",
      text: "You and SmartTec agree that each may bring claims against the other only in an individual capacity, and not as a plaintiff or class member in any purported class, collective, consolidated, private attorney general, or representative proceeding. The arbitrator may not consolidate more than one person's claims and may not preside over any form of representative or class proceeding. If this class action waiver is held unenforceable as to a particular claim, that claim — and only that claim — will be severed and proceed in court, with all remaining claims arbitrated.",
    },
    { type: "h3", text: "15.5 Carve-outs" },
    {
      type: "p",
      text: "Either party may bring an individual action in small claims court for claims within that court's jurisdiction, and either party may seek injunctive or other equitable relief in a court of competent jurisdiction to protect intellectual property rights or prevent unauthorized access to systems, without first proceeding to arbitration and without waiving this section.",
    },
    { type: "h3", text: "15.6 Costs" },
    {
      type: "p",
      text: "Each party bears its own attorneys' fees and costs except where the arbitrator determines a claim was frivolous or brought for an improper purpose, or where applicable law provides otherwise. Filing, administration, and arbitrator fees are allocated under the AAA rules.",
    },
    { type: "h3", text: "15.7 Your right to opt out" },
    {
      type: "p",
      text: "You may opt out of this arbitration agreement by sending written notice to hello@smarttec.dev with the subject line \"Arbitration Opt-Out\" within 30 days of first accepting these Terms, stating your name, the entity you represent if any, and a clear statement that you decline arbitration. Opting out does not affect any other provision of these Terms, and will not affect your access to the Site.",
    },
    { type: "h2", text: "16. Governing law and venue" },
    {
      type: "p",
      text: "These Terms and any dispute arising from them are governed by the laws of the State of Oklahoma, without regard to its conflict of laws rules, and excluding the United Nations Convention on Contracts for the International Sale of Goods. For any dispute not subject to arbitration, you and SmartTec submit to the exclusive jurisdiction of the state and federal courts located in Tulsa County, Oklahoma, and each party waives any objection to venue and any right to a jury trial to the extent permitted by law.",
    },
    { type: "h2", text: "17. Indemnification" },
    {
      type: "p",
      text: "You agree to indemnify, defend, and hold harmless SmartTec and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, judgments, penalties, and expenses (including reasonable attorneys' fees) arising out of or relating to your use of the Site, your breach of these Terms or of any applicable law, your infringement of any third-party right, or any decision made or action taken by you or by a third party in reliance on Site content or tool output. SmartTec will notify you of any such claim and may participate in its defence with counsel of its choosing at its own expense. You may not settle any claim in a way that imposes obligations on SmartTec without our prior written consent.",
    },
    { type: "h2", text: "18. Changes to these Terms" },
    {
      type: "p",
      text: "We may revise these Terms at any time by posting an updated version to this page with a new effective date. Material changes take effect 14 days after posting for existing users. Your continued use of the Site after the effective date constitutes acceptance. If you do not accept a revision, stop using the Site.",
    },
    { type: "h2", text: "19. General" },
    {
      type: "ul",
      items: [
        "Severability — if any provision is held unenforceable, it will be modified to the minimum extent necessary to make it enforceable, or severed, and the remainder will continue in full force.",
        "No waiver — our failure to enforce any provision is not a waiver of that or any other provision.",
        "Assignment — you may not assign these Terms without our written consent. We may assign them in connection with a merger, acquisition, reorganization, or sale of assets.",
        "Force majeure — neither party is liable for delay or failure caused by events beyond its reasonable control, including utility or grid failure, supply chain disruption, natural disaster, labour action, war, or government action.",
        "Entire agreement — these Terms, together with the documents incorporated by reference, are the entire agreement between you and SmartTec regarding the Site and supersede all prior understandings about it.",
        "Notices — we may give notice by posting to the Site or emailing an address you provide. You may give notice to hello@smarttec.dev.",
        "Export control and sanctions — you represent that you are not located in, and are not a national or resident of, any country or on any list subject to United States embargo or sanctions, and that you will not use the Site in violation of United States export control laws.",
        "Survival — Sections 7, 8, 13, 14, 15, 16, 17, and 19 survive termination.",
      ],
    },
    { type: "h2", text: "20. Contact" },
    {
      type: "p",
      text: `${ENTITY}, Tulsa, Oklahoma, United States. Email hello@smarttec.dev. For legal notices, mark your correspondence "Legal Notice."`,
    },
  ],
};

/* ============================================================
   PRIVACY POLICY
   ============================================================ */

const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  shortTitle: "Privacy Policy",
  summary:
    "What personal information smarttec.dev collects, why, who processes it, how long we keep it, and the rights you have over it.",
  metaTitle: "Privacy Policy | SmartTec",
  metaDescription:
    "SmartTec's privacy policy for smarttec.dev — no analytics, no advertising trackers, no sale of personal information. What we collect from forms and logs, our processors, retention, and your GDPR and CCPA rights.",
  effective: EFFECTIVE,
  blocks: [
    {
      type: "callout",
      title: "The short version",
      body: "We run no analytics, no advertising trackers, and no behavioural profiling on this site. We do not sell or share your personal information. The only personal information we hold about most visitors is what you type into a form and send us, plus routine server logs our hosting provider generates.",
    },
    {
      type: "callout",
      title: "This document controls",
      body: "This is the authoritative privacy policy for smarttec.dev. Where any other page on this site — including summaries in a trust centre, security overview, or marketing material — describes our data practices differently, this document governs.",
    },
    { type: "h2", text: "1. Who we are" },
    {
      type: "p",
      text: `${ENTITY}, a Delaware corporation with its principal place of business in Tulsa, Oklahoma, United States, is the controller of personal information collected through smarttec.dev. Contact us at hello@smarttec.dev.`,
    },
    { type: "h2", text: "2. What we collect" },
    { type: "h3", text: "2.1 Information you give us" },
    {
      type: "ul",
      items: [
        "Contact form — your name, email address, company, stated power requirement, and the message you write.",
        "Scoping tool (/design/scope) — the technical inputs you enter about your site, plus your name, company, email, and optional phone number if you choose to submit the result. Your inputs stay in your browser unless you press submit; nothing is transmitted while you are answering questions.",
        "Email correspondence — anything you send us directly, including any attachments.",
        "Investor data room (/invest) — the access credential you enter, and a session cookie recording that access was granted.",
      ],
    },
    { type: "h3", text: "2.2 Information collected automatically" },
    {
      type: "ul",
      items: [
        "Server and edge logs generated by our hosting provider, which may include IP address, user agent, requested URL, referrer, and timestamp. These are used for security, abuse prevention, and diagnosing faults.",
        "A strictly necessary cookie set only if you authenticate to the investor data room. It contains an HMAC-signed access token and no personal information. It is the only cookie this site sets.",
      ],
    },
    { type: "h3", text: "2.3 What we do not collect" },
    {
      type: "p",
      text: "We do not run Google Analytics, Meta pixels, advertising tags, session recording, heatmapping, fingerprinting, or any behavioural analytics package. We do not build advertising profiles. We do not track you across other websites. We do not buy personal information from data brokers.",
    },
    { type: "h2", text: "3. Why we use it, and our legal bases" },
    {
      type: "ul",
      items: [
        "To respond to your enquiry and to prepare a scoping response — necessary to take steps at your request before entering a contract, and our legitimate interest in operating a business.",
        "To keep the Site secure and prevent abuse — our legitimate interest in protecting our systems and users.",
        "To control access to the investor data room — necessary for the performance of our confidentiality arrangements and our legitimate interest in restricting non-public material.",
        "To meet legal, regulatory, tax, and record-keeping obligations — compliance with a legal obligation.",
      ],
    },
    {
      type: "p",
      text: "We do not use your information for automated decision-making that produces legal or similarly significant effects about you. The scoping tool performs arithmetic on values you supply; it does not profile you.",
    },
    { type: "h2", text: "4. Who processes it for us" },
    {
      type: "p",
      text: "We keep our processor list deliberately short. Each of the following acts on our instructions under a data processing agreement:",
    },
    {
      type: "ul",
      items: [
        "Vercel Inc. — hosting, content delivery, and server logging.",
        "Brevo (Sendinblue) — transactional email delivery for form submissions.",
        "ImprovMX — inbound email forwarding for addresses at our domain.",
        "Google Workspace — our business email, where your correspondence is received and stored.",
      ],
    },
    {
      type: "p",
      text: "We do not sell personal information, and we do not share it for cross-context behavioural advertising. We may disclose information where required by law, court order, or lawful request from public authorities, to establish or defend legal claims, or to a successor entity in connection with a merger, acquisition, or sale of assets — in which case we will require the recipient to honour this policy.",
    },
    { type: "h2", text: "5. International transfers" },
    {
      type: "p",
      text: "We are based in the United States and our processors may store or process information in the United States and elsewhere. Where personal information is transferred out of the United Kingdom or European Economic Area, we rely on appropriate safeguards, including the European Commission's Standard Contractual Clauses and the UK International Data Transfer Addendum as applicable.",
    },
    { type: "h2", text: "6. How long we keep it" },
    {
      type: "ul",
      items: [
        "Enquiry and scoping submissions — for as long as needed to respond and to maintain a record of the commercial discussion, and then up to 24 months from last contact, unless a contract or legal obligation requires longer.",
        "Email correspondence — under our ordinary business retention practices.",
        "Server logs — retained by our hosting provider for a limited period under its standard retention schedule, typically no more than 30 days.",
        "Investor access cookie — expires with the session or on its stated expiry, whichever is sooner.",
      ],
    },
    { type: "h2", text: "7. Security" },
    {
      type: "p",
      text: "The Site is served over HTTPS. The investor area is protected by a shared credential and an HMAC-signed cookie. Access to submitted information is limited to personnel who need it. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Do not send us sensitive personal information — health data, government identifiers, payment card numbers, or financial account details — through the Site. We do not request it and do not need it.",
    },
    { type: "h2", text: "8. Your rights" },
    {
      type: "p",
      text: "Depending on where you live, you may have the right to access the personal information we hold about you, to correct it, to delete it, to restrict or object to its processing, to receive it in a portable format, and to withdraw consent where processing is based on consent. Residents of California, Colorado, Connecticut, Virginia, Utah, Texas, and other US states with comprehensive privacy laws may also have the right to opt out of sale or sharing and of targeted advertising — we do none of these, so there is nothing to opt out of.",
    },
    {
      type: "p",
      text: "To exercise any right, email hello@smarttec.dev. We will respond within the period required by applicable law, generally 30 days for UK and EU requests and 45 days for US state law requests. We will not discriminate against you for exercising a right. You may use an authorized agent where the law permits; we may ask for proof of authority. If you are in the UK or EEA and are unsatisfied with our response, you may complain to your supervisory authority.",
    },
    { type: "h2", text: "9. Children" },
    {
      type: "p",
      text: "The Site is a business-to-business site and is not directed at children. We do not knowingly collect personal information from anyone under 16. If you believe we have, contact us and we will delete it promptly.",
    },
    { type: "h2", text: "10. Third-party links" },
    {
      type: "p",
      text: "The Site links to third-party sites and aggregates third-party news headlines. Those sites have their own privacy practices, which we do not control and are not responsible for. Review their policies before providing information to them.",
    },
    { type: "h2", text: "11. Changes" },
    {
      type: "p",
      text: "We may update this policy by posting a revised version here with a new effective date. Where changes are material, we will take reasonable steps to bring them to your attention.",
    },
    { type: "h2", text: "12. Contact" },
    {
      type: "p",
      text: `Privacy enquiries: hello@smarttec.dev, or write to ${ENTITY}, Tulsa, Oklahoma, United States.`,
    },
  ],
};

/* ============================================================
   ENGINEERING & SCOPE TOOL DISCLAIMER
   ============================================================ */

const engineering: LegalDoc = {
  slug: "engineering-disclaimer",
  title: "Engineering & Scope Tool Disclaimer",
  shortTitle: "Engineering Disclaimer",
  summary:
    "Governs the scoping tool, the calculator, and all design and engineering content on this site. No professional engineering services are offered or rendered through this website.",
  metaTitle: "Engineering & Scope Tool Disclaimer | SmartTec",
  metaDescription:
    "Terms governing SmartTec's data center scoping tool and engineering content: indicative planning estimates only, no professional engineering relationship, no reliance for construction or procurement, licensed PE sign-off required.",
  effective: EFFECTIVE,
  blocks: [
    {
      type: "callout",
      title: "The one thing to take away",
      body: "Nothing this website produces may be used for construction, procurement, permitting, financing, safety, or any other decision with real consequences. It is a planning conversation starter. A licensed professional engineer must independently perform and stamp the actual design.",
    },
    { type: "h2", text: "1. What this document covers" },
    {
      type: "p",
      text: "This disclaimer governs all technical, design, and engineering content on smarttec.dev, including the scoping tool at /design/scope, the cost and power calculator at /calculator, the design and process pages under /design, all schematics and diagrams, all design targets, and any estimate, figure, chart, table, or recommendation generated from inputs you provide (together, the \"Technical Content\"). It forms part of our Terms of Use and is incorporated into them.",
    },
    { type: "h2", text: "2. No professional engineering services" },
    {
      type: "p",
      text: `${ENTITY} does not offer, render, or hold itself out as rendering professional engineering services through this website in any jurisdiction. Nothing on the Site constitutes the practice of engineering, architecture, surveying, or any other licensed profession. No engineer-client, design professional-client, or similar professional relationship is created by your use of the Site, by entering data into any tool, or by receiving any output.`,
    },
    {
      type: "p",
      text: "SmartTec may render professional services under a separate written engagement agreement, in which case the terms of that agreement — not this website — define the scope of services, the standard of care, the deliverables, the responsible licensed professional, and the allocation of risk.",
    },
    { type: "h2", text: "3. What the tool actually does" },
    {
      type: "p",
      text: "The scoping tool performs elementary arithmetic on values you enter, using generic industry default assumptions that we publish alongside each result. Specifically, and without limitation, it assumes:",
    },
    {
      type: "ul",
      items: [
        "A power usage effectiveness value inferred from a cooling approach — approximately 1.50 for air, 1.35 for rear-door heat exchangers, and 1.18 for direct-to-chip liquid. These are design targets, not measured values, and real PUE varies with climate, load factor, part-load behaviour, commissioning quality, and operating discipline.",
        "A 0.9 power factor and a redundancy multiplier of 1.0 for N, 1.25 for N+1, and 2.0 for 2N when sizing utility service. Real service sizing depends on utility standards, fault duty, harmonics, motor starting, diversity, and future load growth.",
        "Battery energy derived from 0.9 inverter efficiency and 0.9 usable depth of discharge. Real sizing depends on cell chemistry, C-rate, temperature, ageing, warranty terms, and the actual load profile through the event.",
        "Approximately 35 square feet per rack of white space and a 1.9 multiplier for electrical, mechanical, and operational support space. Real footprint depends on rack dimensions, aisle strategy, clearances, egress, equipment selection, and code.",
        "Heat rejection converted at 3,412 BTU per kW and 12,000 BTU per ton, ignoring latent load, simultaneity, ambient conditions, and equipment part-load performance.",
      ],
    },
    {
      type: "p",
      text: "These defaults are reasonable starting points for a conversation. They are not appropriate substitutes for engineering analysis of your specific site.",
    },
    { type: "h2", text: "4. What the tool does not do" },
    {
      type: "p",
      text: "The tool does not visit or survey your site. It does not review your drawings, your structural capacity, your soil, your seismic or wind exposure, your flood zone, or your existing services. It does not consult your utility, review your interconnection study, or verify available capacity. It does not review applicable codes, standards, or the requirements of your authority having jurisdiction. It does not evaluate specific equipment, verify vendor claims, or confirm availability or lead time. It does not analyse fire protection, life safety, egress, structural loading, acoustics, water treatment, or environmental compliance. It does not perform load flow, short circuit, arc flash, coordination, or computational fluid dynamics analysis. It does not consider your workload profile, your operating practices, or your commercial obligations.",
    },
    {
      type: "caps",
      title: "5. No reliance",
      body: "TECHNICAL CONTENT IS PROVIDED FOR PRELIMINARY PLANNING DISCUSSION ONLY AND IS EXPRESSLY NOT FOR CONSTRUCTION, NOT FOR PROCUREMENT, NOT FOR PERMITTING, NOT FOR BIDDING, NOT FOR FINANCING, AND NOT FOR ANY DECISION AFFECTING LIFE SAFETY OR PROPERTY. YOU MUST NOT RELY ON IT. ANY DECISION YOU MAKE, ANY CAPITAL YOU COMMIT, ANY EQUIPMENT YOU ORDER, ANY CONTRACT YOU SIGN, ANY REPRESENTATION YOU MAKE TO A THIRD PARTY, AND ANY DESIGN YOU ADOPT IS AT YOUR SOLE RISK AND ON YOUR OWN INDEPENDENT PROFESSIONAL JUDGMENT. SMARTTEC ACCEPTS NO RESPONSIBILITY FOR ANY SUCH DECISION OR ITS CONSEQUENCES, AND THE DISCLAIMERS AND LIABILITY LIMITATIONS IN SECTIONS 13 AND 14 OF THE TERMS OF USE APPLY IN FULL.",
    },
    { type: "h2", text: "6. Licensed professional sign-off is required" },
    {
      type: "p",
      text: "Any design intended for construction must be independently performed, reviewed, sealed, and signed by a professional engineer licensed in the jurisdiction where the work is to be built, and must be reviewed for compliance with all applicable codes, standards, and permit conditions by the authority having jurisdiction. That responsibility is not ours and is not discharged by anything on this website. Construction proceeds on stamped drawings, never on a planning model.",
    },
    { type: "h2", text: "7. Design targets are not guarantees" },
    {
      type: "p",
      text: "Where the Site states performance figures — power usage effectiveness, failover time, availability, redundancy class, thermal performance, or similar — these are design objectives to be validated at commissioning under real load. They are not measured results, not warranties, not service level commitments, and not representations that any particular level of performance will be achieved. Service levels, if any, arise only under a signed agreement.",
    },
    { type: "h2", text: "8. Schematics and illustrations" },
    {
      type: "p",
      text: "Diagrams, isometric illustrations, and site schematics on the Site are conceptual representations produced for communication. They are not construction documents, not to scale, not dimensionally accurate, and not photographs of built facilities unless expressly captioned as photography.",
    },
    { type: "h2", text: "9. Third-party equipment and data" },
    {
      type: "p",
      text: "References to third-party equipment, chips, systems, published specifications, market rates, or benchmark results are drawn from publicly available sources we believe reliable but have not independently verified or tested. They are provided for comparison and identification. They do not constitute a representation about that equipment, an endorsement, or evidence of any partnership, certification, or authorization. Manufacturer specifications change; verify with the manufacturer.",
    },
    { type: "h2", text: "10. Your own inputs" },
    {
      type: "p",
      text: "Output quality is bounded entirely by the accuracy of what you enter. If your stated IT load, rack density, or ride-through requirement is wrong, every figure derived from it is wrong. The tool cannot detect an incorrect input, and does not attempt to validate the values you supply against reality.",
    },
    { type: "h2", text: "11. Confidentiality of what you submit" },
    {
      type: "p",
      text: "Information you enter into the scoping tool is not treated as confidential unless a signed confidentiality agreement is in place between us covering it. Do not submit trade secrets, non-public site information you are obliged to protect, or anything a third party has entrusted to you in confidence. Handling of personal information is described in our Privacy Policy.",
    },
    { type: "h2", text: "12. Questions" },
    {
      type: "p",
      text: "If you want an engineering answer rather than a planning estimate, contact us at hello@smarttec.dev and we will explain what a proper engagement would involve.",
    },
  ],
};

/* ============================================================
   FORWARD-LOOKING STATEMENTS
   ============================================================ */

const forwardLooking: LegalDoc = {
  slug: "forward-looking-statements",
  title: "Forward-Looking Statements & Investor Notice",
  shortTitle: "Forward-Looking Statements",
  summary:
    "How to read the projections, timelines, and financial figures on this site, and what the investor area is and is not.",
  metaTitle: "Forward-Looking Statements & Investor Notice | SmartTec",
  metaDescription:
    "Notice regarding forward-looking statements on smarttec.dev — projected timelines, modeled returns, and design targets are not guarantees. Nothing on this site is an offer to sell securities.",
  effective: EFFECTIVE,
  blocks: [
    {
      type: "callout",
      title: "Not an offer",
      body: "Nothing on this website is an offer to sell, or a solicitation of an offer to buy, any security. Any offering of securities by SmartTec would be made only to qualifying investors, only through definitive offering documents, and only in compliance with applicable securities laws.",
    },
    { type: "h2", text: "1. Forward-looking statements" },
    {
      type: "p",
      text: "This website contains forward-looking statements. These include, without limitation, statements about the planned facility in Mead, Oklahoma; anticipated power-on timing; planned GPU counts and configurations; expected capacity, load, and performance; projected pricing, revenue, yields, payback periods, and cash flows; anticipated fibre, utility, and equipment arrangements; planned partnerships; and expected market conditions.",
    },
    {
      type: "p",
      text: "Forward-looking statements are identifiable by words such as expects, plans, anticipates, targets, projects, intends, believes, estimates, will, would, could, should, and similar expressions, as well as by their nature as statements about the future. They are based on assumptions and expectations current as of the date stated, and they are not statements of historical fact.",
    },
    { type: "h2", text: "2. Why they may prove wrong" },
    {
      type: "p",
      text: "SmartTec is a pre-revenue, pre-power-on company. Actual results may differ materially from any forward-looking statement for reasons including, without limitation:",
    },
    {
      type: "ul",
      items: [
        "Delay or refusal in utility interconnection, permitting, or authority-having-jurisdiction approvals.",
        "Equipment availability, allocation, lead times, or price changes, particularly for GPUs, transformers, switchgear, and battery systems.",
        "Failure of construction, commissioning, or integration to meet schedule or design targets.",
        "Failure to raise capital on acceptable terms, or at all.",
        "Loss of, or failure to convert, anticipated customer commitments; customer concentration.",
        "Changes in the price of GPU compute, which has historically been volatile.",
        "Grid, fibre, or supply chain disruption; single-carrier fibre dependency.",
        "Changes in tax, tariff, trade, export control, energy, or environmental law and policy.",
        "Key person dependency and a small operating team.",
        "Competition from far better capitalized operators.",
        "General economic conditions, interest rates, and capital market conditions.",
      ],
    },
    {
      type: "p",
      text: "This is not an exhaustive list of risks. Any investment in a company at this stage should be regarded as speculative and as carrying a risk of total loss of capital.",
    },
    { type: "h2", text: "3. Design targets and modeled figures" },
    {
      type: "p",
      text: "Performance figures on this site — power usage effectiveness, failover time, availability, and similar — are design targets to be validated at commissioning, not measured results. Financial figures described as modeled, projected, or illustrative are the output of assumptions we have chosen and stated; they are not forecasts, not guarantees, and not representations that any result will be achieved. Assumptions that are individually reasonable can compound into an outcome that does not occur.",
    },
    { type: "h2", text: "4. No duty to update" },
    {
      type: "p",
      text: "Forward-looking statements speak only as of the date they are made. We undertake no obligation to update or revise any of them, whether as a result of new information, future events, or otherwise, except as required by law. Content on this site may not reflect the most current position.",
    },
    { type: "h2", text: "5. The investor area" },
    {
      type: "p",
      text: "The password-protected area at /invest contains materials prepared for specific recipients who have requested them. Access is granted at our discretion and does not constitute an offer to that recipient or to anyone else. Materials in that area are confidential, are provided for evaluation only, and may not be reproduced or redistributed. Nothing in that area is a prospectus, an offering memorandum for public distribution, or an invitation to invest.",
    },
    {
      type: "p",
      text: "Any securities offering by SmartTec would be conducted under an available exemption from registration, would be limited to investors meeting applicable eligibility criteria, and would be documented by definitive agreements. Securities that are not registered under the Securities Act of 1933 cannot be resold except pursuant to registration or an available exemption.",
    },
    { type: "h2", text: "6. No advice" },
    {
      type: "p",
      text: "Nothing on this site is investment, legal, tax, or accounting advice, and no content should be treated as a recommendation to enter into any transaction. SmartTec is not a broker-dealer, investment adviser, or fiduciary to you. Consult your own professional advisers before making any investment decision.",
    },
    { type: "h2", text: "7. Third-party market data" },
    {
      type: "p",
      text: "Market figures, competitor pricing, and industry statistics on this site are drawn from published third-party sources cited where used. We have not independently verified them, they may be out of date, and we make no representation as to their accuracy or completeness.",
    },
  ],
};

/* ============================================================
   ACCEPTABLE USE POLICY
   ============================================================ */

const acceptableUse: LegalDoc = {
  slug: "acceptable-use",
  title: "Acceptable Use Policy",
  shortTitle: "Acceptable Use",
  summary:
    "What may and may not be done with this website and, once available, with SmartTec compute and colocation services.",
  metaTitle: "Acceptable Use Policy | SmartTec",
  metaDescription:
    "SmartTec's acceptable use policy for smarttec.dev and its compute and colocation services — prohibited content and conduct, prohibited high-risk uses, security research rules, and enforcement.",
  effective: EFFECTIVE,
  blocks: [
    {
      type: "p",
      text: "This Acceptable Use Policy (\"AUP\") applies to your use of smarttec.dev and, when they become available, to SmartTec's compute, colocation, and related services (together, the \"Services\"). It forms part of our Terms of Use. Where a signed customer agreement applies, that agreement's use restrictions apply in addition to this AUP; the stricter provision governs.",
    },
    { type: "h2", text: "1. Prohibited conduct" },
    { type: "p", text: "You must not use the Services to:" },
    {
      type: "ul",
      items: [
        "Violate any applicable law or regulation, or facilitate anyone else in doing so.",
        "Infringe any patent, copyright, trademark, trade secret, publicity, privacy, or other right.",
        "Store, transmit, or generate child sexual abuse material. We report such material to the National Center for Missing & Exploited Children and to law enforcement, and terminate the account immediately and without refund.",
        "Store or transmit material that is defamatory, harassing, threatening, or that incites violence or unlawful discrimination.",
        "Develop, produce, or support the development of nuclear, chemical, biological, or radiological weapons, missile systems, or any activity subject to United States export controls without required authorization.",
        "Distribute malware, ransomware, spyware, botnets, or any code designed to damage, disable, or gain unauthorized access to any system.",
        "Conduct denial-of-service attacks, network flooding, or any activity that degrades the Services for others.",
        "Send unsolicited bulk email, engage in phishing, spoof headers, or operate any deceptive or fraudulent scheme.",
        "Gain or attempt to gain unauthorized access to any system, account, network, or data, whether ours or a third party's.",
        "Circumvent authentication, rate limits, quotas, filtering, or any technical restriction we apply.",
        "Resell, sublicense, or provide the Services to third parties except as expressly authorized in writing.",
        "Misrepresent your identity, your affiliation, or the origin of any traffic or content.",
      ],
    },
    { type: "h2", text: "2. Prohibited high-risk uses" },
    {
      type: "p",
      text: "The Services are not designed, tested, or certified for use in applications where failure could lead to death, personal injury, or severe environmental or property damage. You must not use them in the operation of life support or other medical devices, nuclear facilities, aircraft navigation or air traffic control, weapons systems, emergency response or dispatch, or any other fail-safe or hazardous environment, unless we have expressly agreed otherwise in a signed agreement addressing that use.",
    },
    { type: "h2", text: "3. Website-specific rules" },
    {
      type: "ul",
      items: [
        "You may not scrape, crawl, mirror, or systematically extract content at a rate or volume that burdens our infrastructure, or in order to compile a competing database or product. Well-behaved search and AI crawlers acting within our robots.txt are welcome.",
        "You may not attempt to access the investor area without authorization, share credentials with unauthorized persons, or redistribute confidential materials obtained there.",
        "You may not submit false, misleading, or third-party personal information through any form.",
        "You may not use our forms or contact channels to deliver unsolicited commercial offers.",
      ],
    },
    { type: "h2", text: "4. Security research" },
    {
      type: "p",
      text: "We welcome good-faith security research and will not pursue action against researchers who act responsibly. You must not access, modify, or exfiltrate data belonging to us or anyone else; must not degrade or disrupt the Services; must not conduct social engineering against our people or vendors; must give us a reasonable opportunity to remediate before any disclosure; and must report findings to hello@smarttec.dev. Automated scanning that generates significant load, and any testing of the investor area, require our prior written authorization.",
    },
    { type: "h2", text: "5. Resource use and fair use" },
    {
      type: "p",
      text: "Where Services are provided on a shared basis, you must not consume resources in a way that materially degrades other customers' use, circumvent allocation controls, or run workloads outside the profile agreed in your order. Specific commitments on capacity, burst, and priority are set out in your customer agreement.",
    },
    { type: "h2", text: "6. Cryptocurrency mining" },
    {
      type: "p",
      text: "Cryptocurrency mining and comparable proof-of-work workloads are not permitted on shared or reserved Services without our prior written consent, which we may condition on power, cooling, commercial, and term requirements.",
    },
    { type: "h2", text: "7. Your responsibility for your users" },
    {
      type: "p",
      text: "You are responsible for the conduct of anyone who uses the Services through your account or on your behalf, including employees, contractors, and your own customers, and for ensuring they comply with this AUP.",
    },
    { type: "h2", text: "8. Enforcement" },
    {
      type: "p",
      text: "We may investigate suspected violations and may suspend, throttle, or terminate access with or without notice where we reasonably believe a violation has occurred or is imminent, where required by law, or where continued access presents a risk to our systems, our other customers, or third parties. Where circumstances allow, we will give notice and a reasonable opportunity to cure. Suspension for violation does not entitle you to a refund or a service level credit, and does not limit any other remedy available to us.",
    },
    { type: "h2", text: "9. Reporting" },
    {
      type: "p",
      text: "Report suspected abuse, security issues, or intellectual property complaints to hello@smarttec.dev. For copyright complaints, include the information required by the Digital Millennium Copyright Act, including identification of the work, identification of the material, your contact details, a good-faith statement, and a statement under penalty of perjury that you are authorized to act.",
    },
    { type: "h2", text: "10. Changes" },
    {
      type: "p",
      text: "We may update this AUP by posting a revised version with a new effective date. Continued use after the effective date constitutes acceptance.",
    },
  ],
};

export const LEGAL_DOCS: LegalDoc[] = [terms, privacy, engineering, forwardLooking, acceptableUse];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}
