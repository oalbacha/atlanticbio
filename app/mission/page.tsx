import { type Metadata } from "next"

import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { missionStatement, sustainabilityHighlights, valueCards, visionStatement } from "@/lib/content"

export const metadata: Metadata = {
  title: "Mission",
  description: "Mission, vision, and sustainability commitments.",
}

export default function MissionPage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Mission & Vision"
        title="Aligning battery performance with environmental accountability"
        intro="Atlantic BioGraphite is built to prove that critical materials can be technically robust, regionally anchored, and materially lower in lifecycle emissions."
      />

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border/80 bg-card/70 p-6">
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Mission</p>
          <p className="mt-4 text-lg leading-8 text-foreground">{missionStatement}</p>
        </article>
        <article className="rounded-2xl border border-border/80 bg-card/70 p-6">
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Vision</p>
          <p className="mt-4 text-lg leading-8 text-foreground">{visionStatement}</p>
        </article>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Core Values"
          title="Operating principles that guide every phase"
          intro="Execution discipline, community partnership, and long-horizon thinking are treated as core strategy, not support functions."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {valueCards.map((value) => (
            <article key={value.title} className="rounded-2xl border border-border/80 bg-card/70 p-6">
              <h3 className="text-2xl">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Accountability"
          title="Measurable sustainability commitments"
          intro="Targets are paired with reporting and verification expectations so claims remain decision-useful for customers and investors."
        />
        <ul className="grid gap-4">
          {sustainabilityHighlights.map((item) => (
            <li key={item.title} className="rounded-2xl border border-border/80 bg-card/70 p-5">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
