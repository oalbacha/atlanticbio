import { type Metadata } from "next"

import { InvestorForm } from "@/components/forms/investor-form"
import { MetricGrid } from "@/components/sections/metric-grid"
import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { homeMetrics, investorHighlights, investorRisks } from "@/lib/content"

export const metadata: Metadata = {
  title: "Investors",
  description: "Investment rationale, economics, and milestone structure.",
}

export default function InvestorsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Investors"
        title="An evidence-gated path to regional battery-material capacity"
        intro="Atlantic BioGraphite combines validated market pull, clear technical milestones, and a phased funding strategy to reduce execution risk before major capex."
      />

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Headline Signals"
          title="Strategic context for the opportunity"
          intro="Market concentration, policy alignment, and carbon accountability are converging in favor of regional graphite alternatives."
        />
        <MetricGrid metrics={homeMetrics} />
      </section>

      <section className="grid gap-7 lg:grid-cols-2">
        <article className="space-y-4 rounded-2xl border border-border/80 bg-card/70 p-6">
          <h2 className="text-3xl">Investment Highlights</h2>
          <ul className="space-y-3">
            {investorHighlights.map((highlight) => (
              <li key={highlight.title} className="rounded-xl border border-border/70 bg-background/45 p-4">
                <p className="text-sm font-semibold text-foreground">{highlight.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{highlight.detail}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-4 rounded-2xl border border-border/80 bg-card/70 p-6">
          <h2 className="text-3xl">Risk Framework</h2>
          <ul className="space-y-3">
            {investorRisks.map((risk) => (
              <li key={risk.title} className="rounded-xl border border-border/70 bg-background/45 p-4">
                <p className="text-sm font-semibold text-foreground">{risk.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{risk.detail}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <InvestorForm />
    </div>
  )
}
