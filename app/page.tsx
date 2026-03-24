import Link from "next/link";

import { HomeHeroTabs } from "@/components/home-hero-tabs";
import { MetricGrid } from "@/components/sections/metric-grid";
import { NewBrunswickParallax } from "@/components/sections/new-brunswick-parallax";
import { Roadmap } from "@/components/sections/roadmap";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { homeOpportunityMetrics, roadmap } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <HomeHeroTabs />
      <section className="grid gap-4 sm:grid-cols-3">
        <article className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/75 p-5 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/40" />
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
            Society
          </p>
          <h2 className="mt-3 text-2xl leading-tight text-foreground">
            Stronger communities through cleaner industry.
          </h2>
        </article>
        <article className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/75 p-5 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/40" />
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
            Economy
          </p>
          <h2 className="mt-3 text-2xl leading-tight text-foreground">
            Forestry diversification with higher-value output.
          </h2>
        </article>
        <article className="relative overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/75 p-5 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/40" />
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
            Environment
          </p>
          <h2 className="mt-3 text-2xl leading-tight text-foreground">
            Decarbonization built into the material pathway.
          </h2>
        </article>
      </section>

      <section className="space-y-7">
        <SectionHeading
          title="Perfect timing momentum"
          intro="Atlantic BioGraphite is designed to turn a regional byproduct stream into battery-grade material with lower carbon intensity and stronger supply security for North American customers."
        />
        <MetricGrid metrics={homeOpportunityMetrics} />
      </section>

      <section className="space-y-7">
        <NewBrunswickParallax />
        <Roadmap phases={roadmap} />
      </section>

      <section className="rounded-3xl border border-border/80 bg-card/70 p-8 lg:p-10">
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/story">Read the Origin Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
