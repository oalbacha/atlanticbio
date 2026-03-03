import { type Metadata } from "next"

import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { productSpecs } from "@/lib/content"

const valueDrivers = [
  {
    title: "Lower carbon intensity",
    detail:
      "Biomass-derived conversion with modeled 70-90% lifecycle carbon reduction versus conventional synthetic graphite pathways.",
  },
  {
    title: "Regional supply resilience",
    detail:
      "North American feedstock and processing intent to reduce exposure to concentrated overseas processing capacity.",
  },
  {
    title: "Traceability",
    detail:
      "Designed for documented chain-of-custody from certified residue input through finished material delivery.",
  },
]

export const metadata: Metadata = {
  title: "Biographite",
  description: "Product specifications and value proposition for battery-grade bio-graphite.",
}

export default function BiographitePage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Biographite"
        title="Battery-grade bio-graphite engineered for performance and traceability"
        intro="Atlantic BioGraphite targets anode-grade material that aligns electrochemical performance requirements with lower-carbon and regionally sourced production pathways."
      />

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Target Specifications"
          title="Performance profile under validation"
          intro="Technical targets are based on battery-industry requirements and are slated for staged validation in feasibility and pilot phases."
        />
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/70">
          <table className="w-full border-collapse text-left">
            <thead className="bg-background/65 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              <tr>
                <th className="px-4 py-3">Parameter</th>
                <th className="px-4 py-3">Target</th>
                <th className="px-4 py-3">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {productSpecs.map((spec) => (
                <tr key={spec.parameter} className="border-t border-border/70 align-top">
                  <td className="px-4 py-4 text-sm font-semibold text-foreground">{spec.parameter}</td>
                  <td className="px-4 py-4 text-sm text-primary">{spec.target}</td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">{spec.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Differentiation"
          title="Core value drivers for anode customers"
          intro="The strategy is to compete on performance + risk reduction, not on commodity positioning alone."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {valueDrivers.map((driver) => (
            <article key={driver.title} className="rounded-2xl border border-border/80 bg-card/70 p-6">
              <h2 className="text-2xl">{driver.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{driver.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
