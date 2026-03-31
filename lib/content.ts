import {
  type InvestorHighlight,
  type MetricItem,
  type NavItem,
  type SpecItem,
  type TimelinePhase,
  type ValueCard,
} from "@/lib/types";

export const siteName = "Atlantic BioGraphite";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Story", href: "/story" },
  { label: "Culture", href: "/culture" },
  { label: "Contact", href: "/contact" },
];

export const homeMetrics: MetricItem[] = [
  {
    value: "70-90%",
    label: "Lower lifecycle CO2 than conventional synthetic graphite",
    sourceNote: "Atlantic BioGraphite plan, February 2026",
  },
  {
    value: ">90%",
    label: "Global battery-grade graphite processing concentrated in China",
    sourceNote: "Atlantic BioGraphite plan, February 2026",
  },
  {
    value: "21",
    label: "Gigafactories under construction across Canada and the U.S.",
    sourceNote: "Atlantic BioGraphite plan, February 2026",
  },
  {
    value: "2026-2030",
    label: "First-mover window to establish regional bio-graphite capacity",
    sourceNote: "Atlantic BioGraphite plan, February 2026",
  },
];

export const homeOpportunityMetrics: MetricItem[] = [
  {
    value: "Proven",
    label: "Technology",
    sourceNote: "",
  },
  {
    value: "Aligned",
    label: "Policy",
    sourceNote: "",
  },
  {
    value: "Abundant",
    label: "Feedstock",
    sourceNote: "",
  },
  {
    value: "0",
    label: "Competition",
    sourceNote: "",
  },
];

export const atlanticCanadaMetrics: MetricItem[] = [
  {
    value: "Feedstock",
    label:
      "91 Sawmill operations identified across Atlantic Canada. 100% FSC/SFI-aligned sourcing from project inception target.",
    sourceNote: "",
  },
  {
    value: "4",
    label: "Major deep-water ports with Atlantic shipping access",
    sourceNote: "",
  },
  {
    value: "130+yr",
    label: "Regional forestry and industrial operations history",
    sourceNote: "",
  },
  {
    value: "300km",
    label: "Expansion radius across the Atlantic to Maine, USA",
    sourceNote: "",
  },
];

export const roadmap: TimelinePhase[] = [
  {
    phase: "Phase 1",
    years: "2027",
    focus: "Feasibility and validation",
    outcome:
      "Confirm feedstock quality, bench-scale conversion, and market requirements for a pilot investment decision.",
  },
  {
    phase: "Phase 2",
    years: "2028-2030",
    focus: "Pilot facility",
    outcome:
      "Produce representative material for qualification, optimize processing, and secure pilot-scale offtakes.",
  },
  {
    phase: "Phase 3",
    years: "2032-2035",
    focus: "Commercial expansion",
    outcome:
      "Scale to long-term North American contracts with carbon, traceability, and regional resilience advantages.",
  },
];

export const storySections = [
  {
    title: "A battery transition with a materials bottleneck",
    copy: "As of early 2026, EV growth is constrained by a graphite supply chain that is concentrated, carbon-intensive, and geopolitically exposed. Atlantic BioGraphite starts from this contradiction: clean mobility needs cleaner anode materials.",
  },
  {
    title: "Why New Brunswick",
    copy: "New Brunswick has certified forestry residues, established industrial logistics, and practical proximity to the Eastern North American battery corridor. The opportunity is to convert local byproducts into high-value critical material.",
  },
  {
    title: "Why now",
    copy: "Policy and market timing are aligned. The EU Battery Regulation is tightening footprint disclosure. U.S. IRA domestic-content thresholds are rising toward 2029. Customers need traceable, lower-carbon graphite options now.",
  },
];

export const stakeholderBenefits: ValueCard[] = [
  {
    title: "Climate",
    description:
      "Potentially carbon-negative anode pathway when renewable energy and robust carbon accounting are integrated.",
  },
  {
    title: "Region",
    description:
      "High-value manufacturing jobs in New Brunswick tied to a renewable local resource base.",
  },
  {
    title: "Canada",
    description:
      "A renewable complement to mined graphite within critical-minerals strategy priorities.",
  },
  {
    title: "Indigenous Partnership",
    description:
      "Designed for early collaboration with Mi'kmaq and Wolastoqey communities as strategic partners.",
  },
];

export const missionStatement =
  "Transform sustainably sourced forestry residues into battery-grade graphite for lower-carbon, traceable, regionally produced critical materials.";

export const visionStatement =
  "Establish Atlantic Canada as North America's leading producer of carbon-negative battery materials by proving that critical materials can be environmentally regenerative, economically durable, and socially beneficial.";

export const valueCards: ValueCard[] = [
  {
    title: "Environmental Integrity",
    description:
      "Sourcing from certified inputs, publishing measurable impact data, and treating carbon performance as an engineering target.",
  },
  {
    title: "Operational Excellence",
    description:
      "Competing on consistent battery-grade performance through disciplined process control and quality systems.",
  },
  {
    title: "Partnership and Respect",
    description:
      "Building co-development relationships with communities, suppliers, customers, and technical partners.",
  },
  {
    title: "Regional Commitment",
    description:
      "Investing in New Brunswick talent, procurement, and long-term industrial capability.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Making decisions against multi-decade resource cycles and supply agreements rather than short-term signals.",
  },
];

export const sustainabilityHighlights: InvestorHighlight[] = [
  {
    title: "Renewable energy integration",
    detail: "80% by 2030 target, 100% by 2033 target.",
  },
  {
    title: "Certified sourcing",
    detail: "100% FSC/SFI-aligned sourcing from project inception target.",
  },
  {
    title: "Transparent reporting",
    detail:
      "Annual sustainability reporting and third-party lifecycle verification commitment.",
  },
  {
    title: "Workforce development",
    detail:
      "Structured local training partnerships and apprenticeship pipelines.",
  },
];

export const productSpecs: SpecItem[] = [
  {
    parameter: "Carbon Purity",
    target: ">=99.95% battery grade",
    rationale: "Required threshold for high-performance EV anodes.",
  },
  {
    parameter: "Particle Distribution",
    target: "D50: 15-20 um",
    rationale:
      "Supports packing density and predictable electrochemical behavior.",
  },
  {
    parameter: "Specific Capacity",
    target: ">=350 mAh/g",
    rationale: "Targets competitive anode performance for Li-ion applications.",
  },
  {
    parameter: "Tap Density",
    target: ">=1.0 g/cm3",
    rationale: "Improves volumetric energy density at the cell level.",
  },
  {
    parameter: "Graphitization Degree",
    target: ">=80% (>=90% premium target)",
    rationale:
      "Aligned with anode-grade definitions and cycle-life expectations.",
  },
  {
    parameter: "Critical Impurities",
    target: "Fe/Al <50 ppm, Ni/Cu/Co <20 ppm",
    rationale: "Protects battery safety and long-term performance stability.",
  },
];

export const footerText =
  "Atlantic BioGraphite develops a lower-carbon pathway for battery-grade graphite using sustainably sourced New Brunswick residues.";
