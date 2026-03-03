import { type Metadata } from "next"

import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"

const culturePillars = [
  {
    title: "Evidence before scale",
    detail:
      "Quarterly milestones and go/no-go gates keep technical and commercial decisions grounded in validated data.",
  },
  {
    title: "Partnership-first delivery",
    detail:
      "Suppliers, communities, customers, and advisors are engaged as long-term partners with clear responsibilities.",
  },
  {
    title: "Safety and quality discipline",
    detail:
      "Process reliability, quality control, and safety culture are foundational to qualification credibility.",
  },
  {
    title: "Regional capability building",
    detail:
      "Hiring, training, and local procurement are used to build durable industrial capacity in New Brunswick.",
  },
]

const governance = [
  "Phase 1 (2027): Founder-led model with quarterly advisory oversight and formal decision gates.",
  "Phase 2 (2028-2030): Board expansion to independent technical, industry, and financial expertise.",
  "Phase 3 (2032-2035): Full executive structure with independent board majority and ESG oversight.",
]

export const metadata: Metadata = {
  title: "Culture",
  description: "How Atlantic BioGraphite operates and governs growth.",
}

export default function CulturePage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Culture"
        title="Execution rigor with long-term regional commitment"
        intro="Atlantic BioGraphite culture is built around technical depth, operational discipline, and respectful partnership across the value chain."
      />

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Operating Culture"
          title="How teams make decisions"
          intro="The organization is structured to keep engineering quality high while moving quickly toward pilot readiness."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {culturePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-border/80 bg-card/70 p-6">
              <h2 className="text-2xl">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Governance"
          title="A phased governance model"
          intro="Governance complexity increases with capital exposure and operational scale."
        />
        <ol className="grid gap-4">
          {governance.map((item) => (
            <li key={item} className="rounded-2xl border border-border/80 bg-card/70 p-5 text-sm leading-7 text-muted-foreground">
              {item}
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
