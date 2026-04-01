import { type Metadata } from "next";

import { SiteHero } from "@/components/site-hero";
import { NewBrunswickParallax } from "@/components/sections/new-brunswick-parallax";
import { SectionHeading } from "@/components/sections/section-heading";

const culturePrinciples = [
  {
    title: "Operational Excellence",
    detail:
      "We compete on performance, not compromise. Our products target battery-grade specifications at industry-leading yield and energy efficiency. Batch-to-batch consistency and rigorous quality control are what earn customer requalification, not just first qualification.",
    className: "xl:col-span-5",
  },
  {
    title: "Partnership First",
    detail:
      "We engage Indigenous communities as partners from project inception - with equity participation, employment, and revenue sharing built into the business model. We treat biomass suppliers as collaborators in a shared value chain. We work with customers as co-developers, not passive buyers.",
    className: "xl:col-span-5",
  },
  {
    title: "Regional Commitment",
    detail:
      "We prioritize local hiring and procurement where quality and competitiveness allow. We invest in workforce training through partnerships with UNB and NBCC. We measure success not only in financial returns but in contribution to the kind of economy that keeps the next generation in Atlantic Canada.",
    className: "xl:col-span-4",
  },
  {
    title: "Long-Term Thinking",
    detail:
      "Forests regenerate over 60-80 year cycles. Battery industry partnerships require 5-10 year qualification timelines. We make decisions with multi-decade time horizons. Infrastructure investments made today shape opportunities for the next generation - we design for adaptability, not quarterly performance.",
    className: "xl:col-span-3",
  },
  {
    title: "Environmental Integrity",
    detail:
      "Sustainable sourcing is non-negotiable. We source biomass exclusively from certified forestry operations managed for long-term ecosystem health. We pursue carbon-negative production as a technical target, not a marketing claim. We commit to publishing lifecycle assessments and environmental performance data annually.",
    className: "xl:col-span-3",
  },
];

const backingOutcomes = [
  {
    title: "Carbon-Negative Anode",
    detail:
      "An EV battery where producing the anode material actually removes CO2 from the atmosphere - through sustainable forestry carbon sequestration and renewable energy integration. Not low-carbon. Not neutral. Negative.",
  },
  {
    title: "Jobs That Stay Home",
    detail:
      "New Brunswick has watched its natural resources leave the province as raw exports for decades. A pilot plant creates 50-100 jobs. Commercial scale: 200+. Skilled trades, engineering, R&D the work that reverses outmigration.",
  },
  {
    title: "A Renewable Critical Mineral",
    detail:
      "Canada has declared graphite critical and committed billions to domestic supply. Most projects focus on mining finite deposits. Atlantic BioGraphite offers a pathway where the resource base regenerates annually through sustainable forestry and agriculture.",
  },
  {
    title: "Economic Reconciliation",
    detail:
      "The Mi'kmaq and Wolastoqey Nations have managed these forests for millennia. Atlantic BioGraphite is structured from day one with Indigenous equity participation, employment pathways, and business opportunities. Partnership, not consultation.",
  },
];

export const metadata: Metadata = {
  title: "Culture",
  description:
    "How Atlantic BioGraphite earns trust through culture, partnership, and long-term execution.",
};

export default function CulturePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <SiteHero title="Our Culture" ctaLabel="" ctaHref="" />

      <section className="space-y-7">
        <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
        <div className="max-w-4xl">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Building a critical minerals company means earning trust from
            people who don&apos;t hand it out easily - battery engineers who
            need consistency across ten thousand charge cycles, forestry
            operators whose livelihoods depend on sustainable harvest,
            Indigenous communities whose relationship with this land predates
            every policy framework we operate under, and funders who&apos;ve seen
            enough slide decks to know the difference between a plan and a
            company. How we operate is how we earn that trust.
          </p>
        </div>
      </section>

      <section className="space-y-7">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-10">
          {culturePrinciples.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm ${pillar.className}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-2xl text-foreground">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {pillar.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <NewBrunswickParallax />
      </section>

      <section className="space-y-7">
        <SectionHeading
          title="What Backing This Produces"
          intro="Support for Atlantic BioGraphite compounds across climate impact, regional industry, supply security, and economic reconciliation."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {backingOutcomes.map((outcome, index) => (
            <article
              key={outcome.title}
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-2xl text-foreground">
                {outcome.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {outcome.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
