import Link from "next/link"

import { HeroVideo } from "@/components/hero-video"
import { MetricGrid } from "@/components/sections/metric-grid"
import { Roadmap } from "@/components/sections/roadmap"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { homeMetrics, roadmap } from "@/lib/content"

export default function HomePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <section className="relative">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-12">
          <div className="max-w-3xl space-y-5 rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(0,0,0,0.8),rgba(0,0,0,0.72))] p-5 shadow-[0_22px_58px_-26px_rgba(0,0,0,0.95)] backdrop-blur-[2px] sm:p-7">
            <p className="font-mono text-xs tracking-[0.18em] text-emerald-300 uppercase">
              New Brunswick, Canada | As of February 2026
            </p>
            <h1 className="font-heading text-4xl leading-[1.16] text-white sm:text-5xl sm:leading-[1.12] lg:text-7xl lg:leading-[1.08]">
              Building a lower-carbon graphite supply for North American batteries.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/95 sm:text-lg">
              Atlantic BioGraphite converts sustainably sourced forestry residues into battery-grade graphite to reduce
              carbon intensity, improve traceability, and strengthen regional supply resilience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/investors">View Investment Case</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/biographite">Explore Product Specs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Strategic Signals"
          title="Why this opportunity is moving now"
          intro="Investor and partner decisions are being shaped by supply concentration risk, rising content requirements, and lifecycle carbon accountability in battery value chains."
        />
        <MetricGrid metrics={homeMetrics} />
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Execution Roadmap"
          title="Three phases from feasibility to commercial scale"
          intro="The plan is structured with gated evidence before major capital deployment, reducing technical and market uncertainty at each stage."
        />
        <Roadmap phases={roadmap} />
      </section>

      <section className="grid gap-5 rounded-3xl border border-border/80 bg-card/70 p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
        <div className="space-y-4">
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Call to Action</p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            The 2026-2030 first-mover window is open, but not for long.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Atlantic BioGraphite is designed to turn a regional byproduct stream into a strategic battery material with
            lower carbon intensity and stronger supply security for North American customers.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/story">Read the Origin Story</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
