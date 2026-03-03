import { type Metadata } from "next"

import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { stakeholderBenefits, storySections } from "@/lib/content"

export const metadata: Metadata = {
  title: "Story",
  description: "Origin story and strategic timing for Atlantic BioGraphite.",
}

export default function StoryPage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Origin Story"
        title="From New Brunswick residues to strategic battery material"
        intro="Atlantic BioGraphite begins with a supply-chain contradiction: EV adoption requires cleaner materials, yet graphite remains concentrated and carbon-intensive."
      />

      <section className="grid gap-5 lg:grid-cols-3">
        {storySections.map((section) => (
          <Card key={section.title} className="border-border/80 bg-card/70">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-2xl">{section.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{section.copy}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Who Benefits"
          title="A regional pathway with system-level impact"
          intro="The business model is designed to align climate performance, economic development, and resilient supply across stakeholders."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stakeholderBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-border/80 bg-card/70 p-6">
              <h3 className="text-xl text-foreground">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
