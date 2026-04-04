import { SiteHero } from "@/components/site-hero";
import { MetricGrid } from "@/components/sections/metric-grid";
import { NewBrunswickParallax } from "@/components/sections/new-brunswick-parallax";
import { SectionHeading } from "@/components/sections/section-heading";
import { atlanticCanadaMetrics, homeOpportunityMetrics } from "@/lib/content";

const valueDrivers = [
  {
    title: "Performance parity",
    detail:
      "Battery-grade specifications that matches or exceeds conventional natural graphite across key metrics.",
  },
  {
    title: "Cost advantage",
    detail:
      "Competitive price from cheaper inputs and lower processing temperatures, not a green premium.",
  },
  {
    title: "Supply chain resilience",
    detail:
      "100% North American origin reduces exposure to concentrated overseas processing.",
  },
  {
    title: "Lower carbon intensity",
    detail:
      "70–90% lower lifecycle carbon versus conventional synthetic graphite.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <SiteHero />

      <section className="space-y-7">
        <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            We compete on performance + risk reduction, not on commodity
            positioning alone.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {valueDrivers.map((driver) => (
            <article
              key={driver.title}
              className="capitalize relative rounded-2xl border border-border/80 bg-card/70 p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
              <h2 className="text-2xl">{driver.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {driver.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="w-full">
          <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
          <blockquote className="mt-5 space-y-3">
            <p className="text-base leading-7 text-foreground sm:text-lg text-justify">
              Canada has been exporting its future, we are changing that. The
              materials powering electric vehicles depend on carbon-intensive
              production and concentrated supply chains. At the heart of the
              clean energy transition, the green revolution is built on a
              fragile foundation. Atlantic BioGraphite converts New
              Brunswick&apos;s forestry sustainably sourced, certified, and
              abundant byproducts into battery-grade graphite for lithium-ion
              anodes. We give OMEs a North American alternative that competes on
              performance, not just conscience. Built here. From here. For the
              batteries the world needs next.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          title="Perfect timing momentum"
          intro="Atlantic BioGraphite turns a regional byproduct stream into battery-grade material with lower carbon intensity and stronger supply security for North American customers."
        />
        <MetricGrid metrics={homeOpportunityMetrics} />
      </section>

      <section className="space-y-7">
        <NewBrunswickParallax
          title="We turn Atlantic Canada's forestry waste into battery-grade graphite."
          secondTitle="The material powering the electric vehicle revolution made here, from here."
          imageSrc="/media/new-brunswick-roadmap.png"
          imageAlt="New Brunswick shoreline with autumn trees reflected in still water"
        />
      </section>

      <section className="space-y-7">
        <SectionHeading
          title="Atlantic Canada"
          intro="Atlantic Canada location for a battery materials production company has structural advantages converge here that no other region in Eastern North America can match.
 "
        />
        <MetricGrid metrics={atlanticCanadaMetrics} />
      </section>
    </div>
  );
}
