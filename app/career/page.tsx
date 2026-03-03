import { type Metadata } from "next"

import { CareerForm } from "@/components/forms/career-form"
import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"

const opportunities = [
  {
    title: "Technical Lead",
    detail: "Biomass conversion and advanced carbon materials leadership across feasibility and pilot transition.",
  },
  {
    title: "Research & Lab Coordination",
    detail: "Sample prep, test coordination, and characterization workflow execution with partner labs.",
  },
  {
    title: "Operations & Supply Chain",
    detail: "Feedstock qualification, supplier engagement, and process operations planning for scale-up.",
  },
  {
    title: "Commercial & Partnerships",
    detail: "Customer qualification pathways, strategic partnerships, and investor/customer communication.",
  },
]

const process = [
  "Submit your profile with role interest and relevant project experience.",
  "Initial discussion focused on capability fit and execution expectations.",
  "Technical or functional interview with project leadership and advisors.",
  "Final alignment on role scope, milestones, and growth trajectory.",
]

export const metadata: Metadata = {
  title: "Career",
  description: "Career opportunities and hiring process at Atlantic BioGraphite.",
}

export default function CareerPage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Career"
        title="Build the next generation of battery-material supply"
        intro="We are assembling a team that combines materials science, industrial operations, and strategic execution to create a new regional critical-minerals pathway."
      />

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Where We Need Talent"
          title="Priority capability tracks"
          intro="Phase 1 starts lean and scales with evidence. We prioritize people who can execute rigorously under uncertainty."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {opportunities.map((opportunity) => (
            <article key={opportunity.title} className="rounded-2xl border border-border/80 bg-card/70 p-6">
              <h2 className="text-2xl">{opportunity.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{opportunity.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5 rounded-2xl border border-border/80 bg-card/70 p-6">
          <h2 className="text-3xl">Hiring Process</h2>
          <ol className="space-y-3">
            {process.map((step) => (
              <li key={step} className="rounded-xl border border-border/70 bg-background/50 p-4 text-sm leading-7 text-muted-foreground">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <CareerForm />
      </section>
    </div>
  )
}
