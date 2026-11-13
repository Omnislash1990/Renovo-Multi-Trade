/**
 * Brand, contact and page copy.
 * Replace the email and phone with the live desk before publishing.
 * The phone uses the Ofcom reserved drama range so it cannot reach a real line.
 */
export const site = {
  name: "Renovo Multi Trades",
  email: "enquiries@renovomultitrades.co.uk",
  phoneDisplay: "020 7946 0120",
  phoneHref: "tel:+442079460120",
  phoneSchema: "+44-20-7946-0120",
  description:
    "Commercial multi-trade contracting for property, project and facilities teams. Electrical, mechanical, plumbing, fit-out and maintenance under a single contract lead.",
  response: "Survey requests are answered within one working day.",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#sectors", label: "Sectors" },
  { href: "#scopes", label: "Scopes" },
  { href: "#faq", label: "FAQ" },
] as const;

export const services = [
  {
    id: "electrical",
    title: "Electrical",
    summary:
      "Distribution, lighting, small power and containment, planned or reactive, including out-of-hours access in occupied buildings.",
    points: ["Lighting and small power", "Containment and making good", "Faults and isolations"],
  },
  {
    id: "mechanical",
    title: "Mechanical & HVAC",
    summary:
      "Ventilation, comfort cooling, local extract and controls, coordinated so ceilings are opened once and closed once.",
    points: ["Local cooling and extract", "Controls and isolations", "Ceiling coordination"],
  },
  {
    id: "plumbing",
    title: "Plumbing",
    summary:
      "Domestic services, sanitaryware, leaks and landlord water works, isolated, tested and left ready for the next trade.",
    points: ["Sanitaryware and services", "Leak response", "Isolation and test"],
  },
  {
    id: "fitout",
    title: "Interior fit-out",
    summary:
      "Partitions, doors, joinery, ceilings and floors for offices, retail units and landlord areas.",
    points: ["Partitions and doors", "Ceilings and floors", "Joinery packages"],
  },
  {
    id: "finishes",
    title: "Decorating & finishes",
    summary:
      "Preparation and decoration for occupied floors: protection, staged areas, and a standard you can hand to a tenant.",
    points: ["Protection and staging", "Preparation", "Tenant-ready finish"],
  },
  {
    id: "maintenance",
    title: "Planned & reactive maintenance",
    summary:
      "A retained team for portfolios that want one number for jobs that do not justify a project. Logged, prioritised, closed.",
    points: ["One number for the estate", "Priority and logging", "Photo close-out"],
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Survey",
    text: "We walk the site, confirm access, and write the scope in plain language: inclusions, exclusions and assumptions.",
  },
  {
    number: "02",
    title: "Proposal",
    text: "One price or a clear schedule of rates, with programme, lead-in and what we need from you before day one.",
  },
  {
    number: "03",
    title: "Delivery",
    text: "A named contract lead sequences the trades, attends site and reports against the programme. Variations are written.",
  },
  {
    number: "04",
    title: "Handover",
    text: "Snagging, operating notes where specified, waste removed, and a close-out your team can file.",
  },
] as const;

export const standards = [
  {
    title: "RAMS before anyone starts",
    text: "Method and risk are issued for the instruction, not copied from a previous building.",
  },
  {
    title: "A named contract lead",
    text: "One person owns access, sequencing and the conversation with your team.",
  },
  {
    title: "Variations in writing",
    text: "Changes to scope or cost are confirmed before the work grows, not after.",
  },
  {
    title: "A handover you can file",
    text: "Snags, photos and what was left live. No vanishing act at practical completion.",
  },
] as const;

export const sectors = [
  {
    id: "offices",
    title: "Commercial offices",
    text: "Cat A and Cat B works, landlord areas and occupied floors that have to stay open.",
  },
  {
    id: "retail",
    title: "Retail & hospitality",
    text: "Unit handovers and refreshes against a fixed trading or opening window.",
  },
  {
    id: "development",
    title: "Residential development",
    text: "Common parts, defects and finishing packages for housebuilders and asset managers.",
  },
  {
    id: "public",
    title: "Education & healthcare",
    text: "Support spaces and back-of-house works planned around term times and clinical hours.",
  },
  {
    id: "industrial",
    title: "Industrial & logistics",
    text: "Welfare, services and making good that cannot stop the operation of the building.",
  },
  {
    id: "agents",
    title: "Managing agents",
    text: "A single contractor for multi-trade instructions across a managed portfolio.",
  },
] as const;

export const scopes = [
  {
    sector: "Offices",
    title: "Occupied floor refresh",
    text: "Lighting, small power, local cooling, partitions and decoration across two floors, nights and weekends, while the rest of the building stays open.",
    trades: ["Electrical", "HVAC", "Joinery", "Decor"],
  },
  {
    sector: "Retail",
    title: "Unit to tenant-ready",
    text: "Landlord shell brought to handover: services, floor, joinery and decoration inside an agreed access window.",
    trades: ["Electrical", "Plumbing", "Floors", "Decor"],
  },
  {
    sector: "Landlord",
    title: "Lease-end making good",
    text: "Strip redundant fittings, repair, decorate and issue a photographic close-out for the schedule of dilapidations.",
    trades: ["Strip-out", "Repairs", "Decor", "Close-out"],
  },
  {
    sector: "Portfolio",
    title: "Retained reactive cover",
    text: "One number for leaks, power faults, doors and making good, with a written close on every job.",
    trades: ["Plumbing", "Electrical", "Fabric", "Logging"],
  },
] as const;

export const faqs = [
  {
    q: "Who is Renovo appointed by?",
    a: "Property managers, managing agents, developers, main contractors and in-house facilities teams. The work is commercial. We are set up for instructions, not for a single domestic call-out.",
  },
  {
    q: "Do you replace contractors we already use?",
    a: "Only where you want one company to own a multi-trade scope. If you already have a specialist on a system, we will work beside them or leave that package with them and say so in the proposal.",
  },
  {
    q: "Can you work in an occupied building?",
    a: "Yes. Most of the programme is. We agree noisy hours, protection, isolations and how residents, tenants or staff move through the site before we mobilise.",
  },
  {
    q: "Is the appointment labour-only or supply and fix?",
    a: "Supply and fix is the usual appointment: one order, materials and labour. Labour-only is available when you are procuring the materials and want the trades sequenced under our lead.",
  },
  {
    q: "What does a proposal include?",
    a: "The scope, exclusions, assumptions, price or rates, lead-in, programme and the access we need. If something is still unknown after the survey, it is listed as an assumption rather than buried in the price.",
  },
  {
    q: "Where do you take instructions?",
    a: "Across the UK. Surveys are arranged around the site, including early mornings, evenings and weekends where access demands it.",
  },
] as const;

export const timings = [
  "As soon as access allows",
  "Within 30 days",
  "This quarter",
  "Still being scoped",
] as const;

export const nextSteps = [
  "A contract lead replies within one working day.",
  "We agree access and walk the site.",
  "You receive one proposal, with programme and exclusions.",
] as const;
