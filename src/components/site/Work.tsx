import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight, X } from "lucide-react";

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

type CaseStudy = {
  client: string;
  title: string;
  year: string;
  url: string;
  category: "E-commerce" | "Corporate" | "Education" | "Editorial" | "SaaS" | "Brand";
  tags: string[];
  image?: string;
  swatch?: string;
  summary: string;
  design: string;
  technology: string;
  marketing: string;
  management: string;
};

const projects: CaseStudy[] = [
  {
    client: "Unit4",
    title: "Enterprise ERP web experience",
    year: "2024",
    url: "https://www.unit4.com/nl",
    category: "Corporate",
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
    client: "Evaneos",
    title: "Tailor-made travel marketplace",
    year: "2024",
    url: "https://www.evaneos.com/",
    category: "E-commerce",
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
    client: "Earworm",
    title: "Video podcast studio site",
    year: "2024",
    url: "https://earworm-dev.netlify.app/",
    category: "Brand",
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
    client: "Damaged Goodz",
    title: "Supplements e-commerce",
    year: "2024",
    url: "https://damagedgoodz.com/",
    category: "E-commerce",
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
    client: "Moroccan Rug Area",
    title: "Handwoven rugs marketplace",
    year: "2024",
    url: "https://moroccanrugarea.com/",
    category: "E-commerce",
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
    client: "Barakka Group",
    title: "Halal wellness marketplace",
    year: "2024",
    url: "https://barakkagroup.de/",
    category: "E-commerce",
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
    client: "Al Sobha Furniture",
    title: "Bespoke furniture catalogue",
    year: "2024",
    url: "https://alsobhahomefurniture.com/",
    category: "E-commerce",
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
    client: "Noon'i",
    title: "Modern furniture e-commerce",
    year: "2024",
    url: "https://alasoolfurniture.com/",
    category: "E-commerce",
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
    client: "Atlantis Cleaning Solutions",
    title: "Premium cleaning services site",
    year: "2024",
    url: "https://atlantiscleaning.co.uk/",
    category: "Corporate",
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
    client: "Orange County Roofing",
    title: "Home remodeling site",
    year: "2023",
    url: "https://orange-county-roofing.com/",
    category: "Corporate",
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
    client: "Chemsyte",
    title: "B2B chemical commerce platform",
    year: "2024",
    url: "https://chemsyte.com.bd/",
    category: "E-commerce",
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
    client: "University of Rajshahi",
    title: "University web platform",
    year: "2024",
    url: "https://ru.ac.bd",
    category: "Education",
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
    client: "AI Bangladesh",
    title: "AI academy & community",
    year: "2024",
    url: "http://aibangladesh.net/",
    category: "Education",
    tags: ["EdTech", "Community", "Brand"],
    image: aiBangladesh,
    summary:
      "A national-feeling brand and platform for an AI academy serving young learners — 'Your future begins here.'",
    design: "Documentary photography of real students, serif headlines and dual primary CTAs (Get Started / Trial Class).",
    technology: "Marketing site with academy, blog and events modules and a trial-class booking flow.",
    marketing: "Course-led SEO, events as community-building hooks and social channels integrated into the funnel.",
    management: "Worked with educators on curriculum content and event ops as the platform scaled.",
  },
  {
    client: "Noor Kids",
    title: "Islamic learning app for kids",
    year: "2024",
    url: "https://noorkids.lokhalapps.com",
    category: "SaaS",
    tags: ["Mobile", "Subscription", "EdTech"],
    image: noorkids,
    summary:
      "A subscription-based Islamic learning app for children with carrier-billed subscription via a Bangladeshi telco.",
    design: "Friendly, soft palette with feature cards aimed at parents — unlimited access, ad-free, safe screen time.",
    technology: "Subscription login by mobile number, country-code aware OTP and STOP-keyword cancellation handling.",
    marketing: "Per-day pricing framing (4 BDT/day), trust copy around safety and a clear value ladder for parents.",
    management: "Worked alongside the carrier-billing partner on compliance, SMS flows and customer-support paths.",
  },
];

const fallbackSwatches = [
  "from-orange-500 via-rose-500 to-fuchsia-600",
  "from-amber-300 via-orange-400 to-red-500",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-indigo-400 via-violet-500 to-purple-700",
];

const fallbackProjects: CaseStudy[] = [
  {
    client: "Daily Mail BD",
    title: "Bangladeshi news portal",
    year: "2023",
    url: "https://dailymail.com.bd/",
    category: "Editorial",
    tags: ["Editorial", "CMS", "Performance"],
    swatch: fallbackSwatches[0],
    summary:
      "An editorial CMS and front-end for a Bangla news portal, optimised for fast publishing and ad-supported reading.",
    design: "News-first grid with strong hierarchy across breaking, featured and section content.",
    technology: "Custom CMS, category-based templating and lightweight pages for low-bandwidth readers.",
    marketing: "Section SEO, social meta and ad-slot architecture across the article template.",
    management: "Editor workflows and approval gates built around a small in-house newsroom.",
  },
  {
    client: "Shafina College",
    title: "Higher-education website",
    year: "2023",
    url: "https://shafinacollege.edu.bd/",
    category: "Education",
    tags: ["Education", "Admissions", "CMS"],
    swatch: fallbackSwatches[1],
    summary:
      "A modern web presence for a Bangladeshi college focused on admissions, programs and student life.",
    design: "Clean academic palette with program cards and admissions front and centre.",
    technology: "CMS-driven pages for departments, news and events with a contact-to-admissions handoff.",
    marketing: "Admissions funnel, program-level SEO and news as a retention channel.",
    management: "Worked with administration on content governance and yearly admissions updates.",
  },
  {
    client: "Yingala Alchemy",
    title: "Wellness & alchemy brand",
    year: "2023",
    url: "https://yingala-alchemy.com/",
    category: "Brand",
    tags: ["Brand", "DTC", "Storytelling"],
    swatch: fallbackSwatches[2],
    summary:
      "A storytelling-led brand site for a wellness and alchemy practice, balancing mysticism with conversion.",
    design: "Atmospheric palette, custom serif pairing and ritual-led photography direction.",
    technology: "Lightweight storefront with content modules for offerings, rituals and journal entries.",
    marketing: "Email capture, journal-led SEO and Instagram storytelling integrated into the journey.",
    management: "Single-founder collaboration — fast iteration loops and a content calendar to sustain launch.",
  },
  {
    client: "Seru Online",
    title: "Online services platform",
    year: "2023",
    url: "https://seruonline.com/",
    category: "SaaS",
    tags: ["SaaS", "Dashboard", "Auth"],
    swatch: fallbackSwatches[3],
    summary:
      "A web platform delivering online services with authenticated dashboards and account management.",
    design: "Functional product UI with a focused information hierarchy and consistent component system.",
    technology: "Authenticated app with role-based access and a service catalogue powering the dashboard.",
    marketing: "Marketing pages designed to convert into sign-ups, with onboarding tuned for activation.",
    management: "Iterative roadmap shipped in two-week cycles with stakeholder demos at the end of each sprint.",
  },
];

const all = [...projects, ...fallbackProjects];

const Work = () => {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="work" ref={ref} className="reveal py-32 md:py-44 bg-secondary/40">
      <div className="container-edge">
        <div className="flex items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              02 — Selected work
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl text-balance">
              Case studies <span className="italic text-muted-foreground">in motion.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm link-underline"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {all.map((p) => (
            <button
              type="button"
              key={p.client}
              onClick={() => setActive(p)}
              className="group block text-left"
            >
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft ${
                  p.image ? "bg-muted" : `bg-gradient-to-br ${p.swatch}`
                }`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.client} — ${p.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 grain opacity-60" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
                  <span>{p.client}</span>
                  <span>{p.year}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <div className="max-w-[80%]">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 mb-2">
                      {p.category}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <span className="grid place-items-center h-12 w-12 rounded-full bg-white text-black translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                {p.tags.map((t, idx) => (
                  <span
                    key={t}
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                    {idx < p.tags.length - 1 && (
                      <span className="ml-3 text-muted-foreground/40">·</span>
                    )}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && <CaseStudyDialog item={active} onClose={() => setActive(null)} />}
    </section>
  );
};

const CaseStudyDialog = ({ item, onClose }: { item: CaseStudy; onClose: () => void }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.client} case study`}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.client} — ${item.title}`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className={`h-full w-full bg-gradient-to-br ${item.swatch} grain`} />
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors"
            aria-label="Close case study"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span>{item.category}</span>
            <span className="text-muted-foreground/40">·</span>
            <span>{item.year}</span>
            <span className="text-muted-foreground/40">·</span>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 link-underline text-foreground"
            >
              Visit live site <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
            {item.client}
          </p>
          <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
            {item.title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            {item.summary}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {[
              { label: "Design", value: item.design },
              { label: "Technology", value: item.technology },
              { label: "Marketing", value: item.marketing },
              { label: "Management", value: item.management },
            ].map((block) => (
              <div key={block.label}>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent mb-3">
                  {block.label}
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">{block.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
