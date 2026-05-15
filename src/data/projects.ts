import orangeCounty from "@/assets/work/orange-county-roofing.png";
import unit4 from "@/assets/work/unit4.png";
import damagedgoodz from "@/assets/work/damagedgoodz.png";
import chemsyte from "@/assets/work/chemsyte.png";
import rajshahi from "@/assets/work/rajshahi-university.png";
import aiBangladesh from "@/assets/work/ai-bangladesh.png";
import alsobha from "@/assets/work/alsobha.png";
import evaneos from "@/assets/work/evaneos.png";
import alasool from "@/assets/work/alasool.png";
import earworm from "@/assets/work/earworm.png";
import barakka from "@/assets/work/barakkagroup.png";
import atlantis from "@/assets/work/atlantiscleaning.png";
import noorkids from "@/assets/work/noorkids.png";
import moroccanrug from "@/assets/work/moroccanrug.png";
import dbSama from "@/assets/partner-dashbloom/sama.png";
import dbIshamn from "@/assets/partner-dashbloom/ishamn.png";
import dbOrion from "@/assets/partner-dashbloom/orion.png";
import dbCargoshift from "@/assets/partner-dashbloom/cargoshift.png";

export type Discipline =
  | "Web Development"
  | "Mobile App"
  | "Design"
  | "Marketing"
  | "Management";

export type Industry =
  | "E-commerce"
  | "Corporate"
  | "Education"
  | "Editorial"
  | "SaaS"
  | "Brand"
  | "EdTech";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  year: string;
  url: string;
  discipline: Discipline;
  industry: Industry;
  tags: string[];
  image?: string;
  swatch?: string;
  partner?: string;
  summary: string;
  design: string;
  technology: string;
  marketing: string;
  management: string;
};

const swatches = [
  "from-orange-500 via-rose-500 to-fuchsia-600",
  "from-amber-300 via-orange-400 to-red-500",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-indigo-400 via-violet-500 to-purple-700",
  "from-sky-400 via-blue-500 to-indigo-600",
  "from-pink-400 via-rose-500 to-red-600",
  "from-lime-400 via-emerald-500 to-teal-600",
  "from-yellow-300 via-amber-400 to-orange-500",
];

export const projects: CaseStudy[] = [
  {
    slug: "noor-kids",
    client: "Noor Kids",
    title: "Islamic learning app on bdapps",
    year: "2024",
    url: "https://noorkids.lokhalapps.com",
    discipline: "Mobile App",
    industry: "EdTech",
    tags: ["Mobile App", "Subscription", "bdapps", "Carrier billing"],
    image: noorkids,
    summary:
      "A subscription-based Islamic learning mobile app for children, published on bdapps with carrier billing through a Bangladeshi telco operator.",
    design: "Friendly, soft palette with parent-facing feature cards — unlimited access, ad-free experience, and safe screen time as the headline promises.",
    technology: "Native mobile flows with mobile-number login, country-code aware OTP, STOP-keyword cancellation handling, and a content pipeline for new lessons.",
    marketing: "Per-day pricing framing (4 BDT/day), trust copy around child safety, and a clear value ladder positioned for parents and guardians.",
    management: "Worked alongside the bdapps carrier-billing partner on compliance, SMS flows, content rating, and customer-support paths.",
  },
  {
    slug: "unit4",
    client: "Unit4",
    title: "Enterprise ERP web experience",
    year: "2024",
    url: "https://www.unit4.com/nl",
    discipline: "Web Development",
    industry: "Corporate",
    tags: ["Enterprise", "Web", "Localization"],
    image: unit4,
    summary:
      "Contributed to a multi-region marketing platform for an enterprise ERP suite, balancing performance, accessibility and a modular component system across dozens of locales.",
    design: "Modular content blocks, accessible typography scale and a calm, trust-first visual language tailored for B2B decision makers.",
    technology: "Component-driven front-end with a headless CMS pipeline, image optimisation and Core Web Vitals tuning across regional builds.",
    marketing: "SEO-friendly URL architecture per locale, structured data for solutions and industries, and conversion paths funneled into demo bookings.",
    management: "Agile delivery slots aligned with regional marketing teams, Figma source-of-truth and weekly QA gates before each release.",
  },
  {
    slug: "evaneos",
    client: "Evaneos",
    title: "Tailor-made travel marketplace",
    year: "2024",
    url: "https://www.evaneos.com/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["Marketplace", "Travel", "Performance"],
    image: evaneos,
    summary:
      "Worked on an editorial-meets-marketplace experience pairing local travel agents with travellers — a content-heavy product where every millisecond of LCP matters.",
    design: "Cinematic hero video, generous typography and a discovery flow that feels like a magazine more than a booking funnel.",
    technology: "Optimised media delivery, lazy-loaded sections and a search experience tuned for long-tail destination queries.",
    marketing: "Programmatic SEO across destinations and trip types, plus landing pages built around 'tailor-made' intent keywords.",
    management: "Cross-functional sprints with content, product and local agency operations to keep 2,000+ agency profiles in sync.",
  },
  {
    slug: "earworm",
    client: "Earworm",
    title: "Video podcast studio site",
    year: "2024",
    url: "https://earworm-dev.netlify.app/",
    discipline: "Web Development",
    industry: "Brand",
    tags: ["Brand", "Motion", "Web"],
    image: earworm,
    summary:
      "A bold, dark-mode marketing site for a London video-podcast studio, built to convert forward-thinking B2B brands into discovery calls.",
    design: "High-contrast typography, neon accent system and animated proof points that mirror the energy of the studio's content.",
    technology: "Static-first build deployed on Netlify with motion micro-interactions and a lightweight CMS for case study updates.",
    marketing: "Clear single-CTA architecture, social-proof rail of recognisable brands and a showreel-led hero to capture intent fast.",
    management: "Tight 4-week sprint from brief to launch with weekly creative reviews and async approvals.",
  },
  {
    slug: "damaged-goodz",
    client: "Damaged Goodz",
    title: "Supplements e-commerce",
    year: "2024",
    url: "https://damagedgoodz.com/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["Shopify", "DTC", "Branding"],
    image: damagedgoodz,
    summary:
      "A full DTC supplements brand built around the 'Own Your Damage' message, from packaging tone-of-voice to checkout.",
    design: "Industrial typography paired with hot-pink accents and gritty photography to stand apart from clinical wellness brands.",
    technology: "Storefront with product variants, certification badges, free-shipping logic and a content layer for blog and education.",
    marketing: "Launch positioning around an emotional brand promise, plus on-site upsells, cart thresholds and trust signals.",
    management: "Phased rollout — brand, then store, then content engine — keeping the founders unblocked at every step.",
  },
  {
    slug: "moroccan-rug-area",
    client: "Moroccan Rug Area",
    title: "Handwoven rugs marketplace",
    year: "2024",
    url: "https://moroccanrugarea.com/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["WooCommerce", "DTC", "Storytelling"],
    image: moroccanrug,
    summary:
      "An international DTC store for handwoven Moroccan rugs, blending artisan storytelling with a global checkout experience.",
    design: "Warm, earthy palette, editorial product photography and serif-led typography that places the craft front and centre.",
    technology: "WooCommerce storefront with international shipping, order tracking, multi-currency and consent-aware analytics.",
    marketing: "Discount-led promo system, abandoned-cart flows and Pinterest-first content distribution targeting interior designers.",
    management: "Direct collaboration with the Moroccan workshop on inventory, photography pipeline and fulfilment SLAs.",
  },
  {
    slug: "barakka-group",
    client: "Barakka Group",
    title: "Halal wellness marketplace",
    year: "2024",
    url: "https://barakkagroup.de/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["Shopify", "Multilingual", "B2B/B2C"],
    image: barakka,
    summary:
      "A multilingual storefront for a German halal wellness brand selling honey, supplements and natural care across DACH and beyond.",
    design: "Trust-led visual system — certificate strip, product provenance imagery and a fairtrade-forward voice.",
    technology: "Multilingual storefront with B2B wholesale gating, certification displays and category-rich navigation.",
    marketing: "SEO around 'laborzertifiziert' product claims, plus a wholesaler funnel separated from the consumer journey.",
    management: "Coordinated suppliers, lab certifications and content translation across two languages on a single release plan.",
  },
  {
    slug: "alsobha-furniture",
    client: "Al Sobha Furniture",
    title: "Bespoke furniture catalogue",
    year: "2024",
    url: "https://alsobhahomefurniture.com/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["WooCommerce", "Catalogue", "Interiors"],
    image: alsobha,
    summary:
      "A premium catalogue site for a bespoke home-furniture studio, organised around rooms and product families rather than SKUs.",
    design: "Soft neutral palette, circular category imagery and a 'smart bedroom' style hero to anchor the brand promise.",
    technology: "WooCommerce architecture with category carousels, request-a-quote flow and high-res image optimisation.",
    marketing: "Category landing pages mapped to interior-design search intent and Instagram-led visual storytelling.",
    management: "Close partnership with the in-house design team to translate physical showroom into a digital experience.",
  },
  {
    slug: "nooni-furniture",
    client: "Noon'i",
    title: "Modern furniture e-commerce",
    year: "2024",
    url: "https://alasoolfurniture.com/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["DTC", "Interiors", "Conversion"],
    image: alasool,
    summary:
      "A minimal, conversion-focused DTC furniture store featuring curated sets and collections with a strong brand wordmark.",
    design: "Typographic hero, monochrome palette and lifestyle photography that lets the products do the talking.",
    technology: "Storefront with wishlist, cart drawer, promo banner system and structured product data for sets.",
    marketing: "Launch promo (UP TO 40% OFF), bundle merchandising and a content layer for design inspiration.",
    management: "End-to-end build delivered against a fixed launch window for the seasonal sale.",
  },
  {
    slug: "atlantis-cleaning",
    client: "Atlantis Cleaning Solutions",
    title: "Premium cleaning services site",
    year: "2024",
    url: "https://atlantiscleaning.co.uk/",
    discipline: "Web Development",
    industry: "Corporate",
    tags: ["Lead-gen", "Local SEO", "Brand"],
    image: atlantis,
    summary:
      "A premium-feel lead-gen site for an extreme cleaning company in Portsmouth, designed to win trust before the quote request.",
    design: "Art-deco accents over an underwater hero — 'from the depths of disorder to the surface of clarity' brought to life.",
    technology: "Single-page site with quote flow, service routing and tracking on every CTA for attribution.",
    marketing: "Local SEO targeting Portsmouth and Hampshire, service-page architecture and clear social proof patterns.",
    management: "Quick discovery, copy-led design phase and a single-window launch — built for a small ops team to maintain.",
  },
  {
    slug: "orange-county-roofing",
    client: "Orange County Roofing",
    title: "Home remodeling site",
    year: "2023",
    url: "https://orange-county-roofing.com/",
    discipline: "Web Development",
    industry: "Corporate",
    tags: ["Lead-gen", "WordPress", "Galleries"],
    image: orangeCounty,
    summary:
      "A service site for a Southern California remodeling company covering kitchens, bathrooms, makeovers and walk-in tubs.",
    design: "Editorial galleries with a craftsmanship-first tone, designed to reassure homeowners before the free-estimate CTA.",
    technology: "WordPress build with gallery management, service taxonomy and a contact-to-CRM handoff.",
    marketing: "Free-estimate CTA above the fold, FAQ-driven SEO and testimonial integration to shorten the sales cycle.",
    management: "Photo-shoot coordination, content collection and phased rollout per service line.",
  },
  {
    slug: "chemsyte",
    client: "Chemsyte",
    title: "B2B chemical commerce platform",
    year: "2024",
    url: "https://chemsyte.com.bd/",
    discipline: "Web Development",
    industry: "E-commerce",
    tags: ["B2B", "Logistics", "WooCommerce"],
    image: chemsyte,
    summary:
      "A 24-hour chemical delivery storefront for industrial, lab, textile and pharma customers across Bangladesh.",
    design: "Bold blue commerce palette with an illustrative hero communicating the speed promise at a glance.",
    technology: "Category-rich WooCommerce storefront, wishlist, search, live chat and a 'sell your chemical' supplier flow.",
    marketing: "Hot-sale module, category SEO and a clear delivery-time promise as the primary value proposition.",
    management: "Operations + tech aligned around a 24-hour SLA inside Dhaka and 48 hours nationwide.",
  },
  {
    slug: "rajshahi-university",
    client: "University of Rajshahi",
    title: "University web platform",
    year: "2024",
    url: "https://ru.ac.bd",
    discipline: "Web Development",
    industry: "Education",
    tags: ["Education", "Public", "Information arch"],
    image: rajshahi,
    summary:
      "A modern web presence for one of Bangladesh's largest public universities, surfacing governance, academics and online services.",
    design: "Cinematic campus hero with quick-access cards for the most-searched tasks: faculty, admission, students and Facebook.",
    technology: "Information-architecture overhaul with mega-menu navigation, online services portal and accessible mark-up.",
    marketing: "Admission funnel front-and-centre, plus News & Read More patterns to keep returning students engaged.",
    management: "Coordination across faculties, IQAC and IT to consolidate content and governance into a single platform.",
  },
  {
    slug: "ai-bangladesh",
    client: "AI Bangladesh",
    title: "AI academy & community",
    year: "2024",
    url: "http://aibangladesh.net/",
    discipline: "Web Development",
    industry: "EdTech",
    tags: ["EdTech", "Community", "Brand"],
    image: aiBangladesh,
    summary:
      "A national-feeling brand and platform for an AI academy serving young learners — 'Your future begins here.'",
    design: "Documentary photography of real students, serif headlines and dual primary CTAs (Get Started / Trial Class).",
    technology: "Marketing site with academy, blog and events modules and a trial-class booking flow.",
    marketing: "Course-led SEO, events as community-building hooks and social channels integrated into the funnel.",
    management: "Worked with educators on curriculum content and event ops as the platform scaled.",
  },

  // Editorial / additional web
  {
    slug: "daily-mail-bd",
    client: "Daily Mail BD",
    title: "Bangladeshi news portal",
    year: "2023",
    url: "https://dailymail.com.bd/",
    discipline: "Web Development",
    industry: "Editorial",
    tags: ["Editorial", "CMS", "Performance"],
    swatch: swatches[0],
    summary:
      "An editorial CMS and front-end for a Bangla news portal, optimised for fast publishing and ad-supported reading.",
    design: "News-first grid with strong hierarchy across breaking, featured and section content.",
    technology: "Custom CMS, category-based templating and lightweight pages for low-bandwidth readers.",
    marketing: "Section SEO, social meta and ad-slot architecture across the article template.",
    management: "Editor workflows and approval gates built around a small in-house newsroom.",
  },
  {
    slug: "shafina-college",
    client: "Shafina College",
    title: "Higher-education website",
    year: "2023",
    url: "https://shafinacollege.edu.bd/",
    discipline: "Web Development",
    industry: "Education",
    tags: ["Education", "Admissions", "CMS"],
    swatch: swatches[1],
    summary:
      "A modern web presence for a Bangladeshi college focused on admissions, programs and student life.",
    design: "Clean academic palette with program cards and admissions front and centre.",
    technology: "CMS-driven pages for departments, news and events with a contact-to-admissions handoff.",
    marketing: "Admissions funnel, program-level SEO and news as a retention channel.",
    management: "Worked with administration on content governance and yearly admissions updates.",
  },
  {
    slug: "seru-online",
    client: "Seru Online",
    title: "Online services platform",
    year: "2023",
    url: "https://seruonline.com/",
    discipline: "Web Development",
    industry: "SaaS",
    tags: ["SaaS", "Dashboard", "Auth"],
    swatch: swatches[3],
    summary:
      "A web platform delivering online services with authenticated dashboards and account management.",
    design: "Functional product UI with a focused information hierarchy and consistent component system.",
    technology: "Authenticated app with role-based access and a service catalogue powering the dashboard.",
    marketing: "Marketing pages designed to convert into sign-ups, with onboarding tuned for activation.",
    management: "Iterative roadmap shipped in two-week cycles with stakeholder demos at the end of each sprint.",
  },

  // Design works
  {
    slug: "yingala-alchemy-brand",
    client: "Yingala Alchemy",
    title: "Wellness brand identity",
    year: "2023",
    url: "https://yingala-alchemy.com/",
    discipline: "Design",
    industry: "Brand",
    tags: ["Brand identity", "Logo", "Art direction"],
    swatch: swatches[2],
    summary:
      "A storytelling-led brand identity for a wellness and alchemy practice, balancing mysticism with conversion.",
    design: "Atmospheric palette, custom serif pairing and ritual-led photography direction across web, print and social.",
    technology: "Lightweight storefront extending the identity into product, journal and ritual modules.",
    marketing: "Email capture, journal-led SEO and Instagram storytelling integrated into the brand world.",
    management: "Single-founder collaboration — fast iteration loops and a content calendar to sustain launch.",
  },
  {
    slug: "earworm-brand",
    client: "Earworm",
    title: "Studio visual identity",
    year: "2024",
    url: "https://earworm-dev.netlify.app/",
    discipline: "Design",
    industry: "Brand",
    tags: ["Identity", "Motion", "Web design"],
    image: earworm,
    summary:
      "Visual identity and web art direction for a London video-podcast studio — bold, dark and unmistakably theirs.",
    design: "High-contrast wordmark, neon accent system and a motion language that ties the site to the studio's content.",
    technology: "Design tokens implemented in code for parity between Figma and the live site.",
    marketing: "Identity tuned for the showreel-led pitch, with assets carried through to social and decks.",
    management: "4-week creative sprint with weekly reviews and async sign-off cycles.",
  },
  {
    slug: "alsobha-art-direction",
    client: "Al Sobha Furniture",
    title: "Furniture catalogue art direction",
    year: "2024",
    url: "https://alsobhahomefurniture.com/",
    discipline: "Design",
    industry: "E-commerce",
    tags: ["Art direction", "Catalogue", "Interiors"],
    image: alsobha,
    summary:
      "Art direction for a bespoke furniture studio — translating a physical showroom into an editorial digital catalogue.",
    design: "Soft neutral palette, circular category imagery and serif headlines to anchor the premium positioning.",
    technology: "Design system mapped to a WooCommerce theme to keep the storefront on-brand release after release.",
    marketing: "Category-led visual storytelling tuned for interior-design search intent and Instagram reuse.",
    management: "Coordinated with the in-house design team on the photography and styling pipeline.",
  },

  // Marketing engagements
  {
    slug: "halal-wellness-growth",
    client: "Barakka Group",
    title: "DACH growth & SEO program",
    year: "2024",
    url: "https://barakkagroup.de/",
    discipline: "Marketing",
    industry: "E-commerce",
    tags: ["SEO", "Performance ads", "CRO"],
    image: barakka,
    summary:
      "Ongoing growth program for a halal wellness brand: SEO, paid acquisition and conversion optimisation across DACH markets.",
    design: "Landing page system tuned for ad creative, with modular hero variants for testing.",
    technology: "Server-side analytics, consent-aware tracking and product-feed automation across channels.",
    marketing: "Keyword strategy around certified-claim queries, plus paid social funnels into bestseller bundles.",
    management: "Monthly growth reviews tying spend to ROAS, LTV and category-level contribution margin.",
  },
  {
    slug: "edtech-launch-campaign",
    client: "AI Bangladesh",
    title: "Launch campaign & funnel",
    year: "2024",
    url: "http://aibangladesh.net/",
    discipline: "Marketing",
    industry: "EdTech",
    tags: ["Launch", "Funnel", "Content"],
    image: aiBangladesh,
    summary:
      "End-to-end launch campaign for an AI academy — from positioning and messaging to trial-class funnel and community ops.",
    design: "Campaign visual system anchored on documentary photography of real students.",
    technology: "Trial-class booking flow, lead routing and a lightweight CRM for follow-up.",
    marketing: "Course-led SEO, paid social and event marketing converted into the trial-class funnel.",
    management: "Aligned curriculum, ops and marketing on a single weekly cadence through the launch quarter.",
  },
  {
    slug: "supplements-dtc-launch",
    client: "Damaged Goodz",
    title: "DTC launch playbook",
    year: "2024",
    url: "https://damagedgoodz.com/",
    discipline: "Marketing",
    industry: "E-commerce",
    tags: ["Brand launch", "Email", "Paid social"],
    image: damagedgoodz,
    summary:
      "Go-to-market playbook for the Damaged Goodz launch — positioning, lifecycle email, paid social and influencer seeding.",
    design: "Campaign creative system that extended the gritty brand into ad units, email and packaging inserts.",
    technology: "Klaviyo flows, attribution modelling and a creative testing cadence wired into the storefront.",
    marketing: "Founder-led narrative, UGC-first paid creative and bundle-led AOV expansion in week one.",
    management: "Weekly war-room cadence with the founders through the first 90 days of trading.",
  },

  // Management engagements
  {
    slug: "edu-platform-delivery",
    client: "University of Rajshahi",
    title: "Delivery management",
    year: "2024",
    url: "https://ru.ac.bd",
    discipline: "Management",
    industry: "Education",
    tags: ["Program management", "Stakeholders", "Governance"],
    image: rajshahi,
    summary:
      "Program-managed the rebuild of a national university web platform across faculties, IQAC and IT, landing on time despite a complex stakeholder map.",
    design: "Facilitated design reviews aligning faculties, communications and IT on a single information architecture.",
    technology: "Coordinated migration windows, content QA and accessibility sign-off across a multi-vendor build.",
    marketing: "Aligned admission and communication teams on a single editorial calendar tied to the academic year.",
    management: "Weekly steering with the VC's office, risk register, and a phased go-live to de-risk launch.",
  },
  {
    slug: "marketplace-program-mgmt",
    client: "Barakka Group",
    title: "Marketplace program management",
    year: "2024",
    url: "https://barakkagroup.de/",
    discipline: "Management",
    industry: "E-commerce",
    tags: ["Roadmap", "Vendor mgmt", "Localization"],
    image: barakka,
    summary:
      "Embedded program management across product, suppliers and translation vendors to keep a multilingual marketplace on a single release plan.",
    design: "Owned the design ↔ engineering critique cadence and the source-of-truth in Figma.",
    technology: "Sprint planning, release notes and QA gates across web and ops integrations.",
    marketing: "Aligned merchandising calendar, supplier onboarding and growth roadmap into one quarterly plan.",
    management: "Risk and dependency tracking across three time zones and two languages.",
  },
  {
    slug: "atlantis-delivery",
    client: "Atlantis Cleaning Solutions",
    title: "Lead-gen site delivery",
    year: "2024",
    url: "https://atlantiscleaning.co.uk/",
    discipline: "Management",
    industry: "Corporate",
    tags: ["Delivery", "Discovery", "Launch"],
    image: atlantis,
    summary:
      "Managed end-to-end delivery of a premium lead-gen site for a cleaning company — discovery, content, build and launch in one window.",
    design: "Owned creative reviews and copy approvals to keep the brand voice intact through every page.",
    technology: "Single-window release with tracking, quote flow and CRM hand-off validated before go-live.",
    marketing: "Aligned local SEO, service-page architecture and CTA tracking with the operations team.",
    management: "Weekly status with the founders, scoped change-control and a clean handover for the in-house team.",

  // Partner work — Dashbloom
  {
    slug: "sama-booking-app",
    client: "Samā",
    title: "Booking app UI & branding",
    year: "2024",
    url: "https://dashbloom.design/",
    discipline: "Design",
    industry: "Brand",
    tags: ["UI/UX Design", "Branding", "Mobile"],
    image: dbSama,
    partner: "Dashbloom",
    summary:
      "A booking app experience pairing a calm visual identity with a frictionless reservation flow — designed to feel premium from first tap.",
    design: "Soft, hospitality-leaning palette, custom iconography and a typographic system tuned for quick scanning across listing, detail and checkout.",
    technology: "Component library aligned with native patterns so engineering can ship the same flows on iOS and Android without duplicating work.",
    marketing: "Onboarding screens and empty states written as conversion surfaces — every moment nudges toward the first booking.",
    management: "Delivered in partnership with Dashbloom on a fixed creative sprint, with weekly reviews and a clean handoff to the in-house product team.",
  },
  {
    slug: "ishamn-apparel",
    client: "IsHamn",
    title: "Apparel e-commerce site",
    year: "2024",
    url: "https://dashbloom.design/",
    discipline: "Design",
    industry: "E-commerce",
    tags: ["Website Design", "Branding", "Apparel"],
    image: dbIshamn,
    partner: "Dashbloom",
    summary:
      "A modern apparel storefront pairing editorial photography with a clean conversion path — built to grow a young fashion brand into a category contender.",
    design: "Editorial grid, oversized typography and product-led colour stories that let each drop own the page.",
    technology: "Storefront patterns mapped to a headless commerce backend with structured product data and fast PDPs.",
    marketing: "Lookbook-led merchandising, drop campaigns and email capture woven into the browsing experience.",
    management: "Co-delivered with Dashbloom against a launch window, with art direction and engineering tracked on one plan.",
  },
  {
    slug: "orion-saas",
    client: "Orion",
    title: "SaaS product & dashboard",
    year: "2024",
    url: "https://dashbloom.design/",
    discipline: "Design",
    industry: "SaaS",
    tags: ["Product Design", "Dashboard", "SaaS"],
    image: dbOrion,
    partner: "Dashbloom",
    summary:
      "A SaaS product UI and dashboard system designed to make complex data feel calm — with a component library scaling to dozens of views.",
    design: "Information-dense yet airy: a clear typographic hierarchy, accent-led data viz and patterns for tables, filters and detail drawers.",
    technology: "Design tokens and a component spec ready for engineering to drop into a React + Tailwind stack.",
    marketing: "Marketing site patterns aligned with the in-product tone so the leap from landing page to trial feels seamless.",
    management: "Partnered with Dashbloom on the product-design track while the in-house team owned engineering and roadmap.",
  },
  {
    slug: "cargoshift-logistics",
    client: "CargoShift",
    title: "Logistics visual identity",
    year: "2024",
    url: "https://dashbloom.design/",
    discipline: "Design",
    industry: "Brand",
    tags: ["Visual Identity", "Branding", "Logistics"],
    image: dbCargoshift,
    partner: "Dashbloom",
    summary:
      "A bold, motion-forward visual identity for a logistics platform — built to feel as fast and dependable as the service it represents.",
    design: "Wordmark, iconography and a high-contrast colour system extended across web, app and operational collateral.",
    technology: "Brand tokens packaged for the product team so identity and UI stay in sync release after release.",
    marketing: "Identity carried through to landing pages, sales decks and operator-facing comms with one consistent voice.",
    management: "Delivered in partnership with Dashbloom across discovery, identity and rollout, with stakeholder reviews at each milestone.",
  },
];

export const disciplines: Discipline[] = [
  "Web Development",
  "Mobile App",
  "Design",
  "Marketing",
  "Management",
];

export const industries: Industry[] = [
  "E-commerce",
  "Corporate",
  "Education",
  "EdTech",
  "Editorial",
  "SaaS",
  "Brand",
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
