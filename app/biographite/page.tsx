import {
  MapPinned,
  Plug,
  Scale,
  Flame,
  Sparkles,
  Sparkle,
  Droplet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { SiteHero } from "@/components/site-hero";

const whyItMattersCards: { id: string; icon: LucideIcon; body: string }[] = [
  {
    id: "domestic-traceable",
    icon: MapPinned,
    body: "A domestic, traceable source of anode-grade graphite that meets performance specifications without the supply chain risk of concentrated overseas processing",
  },
  {
    id: "drop-in",
    icon: Plug,
    body: "Bio-graphite integrates into existing anode manufacturing without requiring changes to cell production. The material is drop-in compatible. The difference is where the carbon comes from and how it gets to graphite",
  },
  {
    id: "regulatory",
    icon: Scale,
    body: "Bio-graphite doesn't just meet regulation-tight requirements, it's built for them",
  },
];

const howItWorksMetrics: {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  footnote: string;
}[] = [
  {
    id: "carbonize",
    icon: Flame,
    title: "Carbonize",
    body: "Biomass heated under inert atmosphere to produce carbon-rich biochar.",
    footnote: "500–1,100°C",
  },
  {
    id: "catalyze",
    icon: Sparkle,
    title: "Catalyze",
    body: "Biochar mixed with catalyst for homogeneous distribution.",
    footnote: "Iron Based",
  },
  {
    id: "graphitize",
    icon: Sparkles,
    title: "Graphitize",
    body: "Heat treatment drives crystalline transformation through dissolution-precipitation.",
    footnote: "1,200–1,300°C",
  },
  {
    id: "purify",
    icon: Droplet,
    title: "Purify",
    body: "Acid wash removes catalyst. High-purity graphite remains.",
    footnote: ">91% graphitization achieved",
  },
];

export default function BiographitePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <SiteHero
        videoSrc="/media/close-up-graphite.mov"
        videoPoster="/media/hero-poster.jpg"
        title="A different path to the same crystal"
        intro="Graphite Without Mine &amp; Without The Emissions"
      />
      <section className="space-y-7">
        <SectionHeading
          title="BIO GRAPGHITE"
          intro="Bio-graphite is crystalline graphite produced from biomass instead of mined ore or petroleum coke. Catalysts drive the conversion at temperatures below 1,300°C, less than half the energy required for conventional synthetic graphite. The result is the same material. Different origin. Different footprint"
        />
      </section>
      <section className="space-y-7">
        <SectionHeading title="How It Works" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {howItWorksMetrics.map(
            ({ id, icon: Icon, title, body, footnote }) => (
              <article
                key={id}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h2 className="mt-4 text-2xl text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {body}
                </p>
                {footnote && (
                  <p className="mt-3 text-xs leading-5 font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
                    {footnote}
                  </p>
                )}
              </article>
            ),
          )}
        </div>
      </section>
      <section className="space-y-8">
        <SectionHeading
          title="Conventional vs. Bio-Graphite"
          titleClassName="normal-case"
        />
        <div className="grid gap-5 md:grid-cols-2 md:gap-0 md:overflow-hidden md:rounded-2xl md:border md:border-border/80">
          <article className="flex flex-col gap-6 rounded-2xl border border-border/80 bg-linear-to-r from-primary/20 to-transparent p-7 md:rounded-none md:border-0 md:border-r md:border-border/50">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
                Conventional
              </p>
              <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
            </div>
            <dl className="space-y-5 text-sm leading-7 text-muted-foreground">
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground/70 uppercase">
                  Feedstock
                </dt>
                <dd className="mt-1.5 text-foreground">
                  Synthetic petroleum coke &amp; coal tar pitch
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground/70 uppercase">
                  Processing
                </dt>
                <dd className="mt-1.5 text-foreground">3,000°C processing</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground/70 uppercase">
                  Carbon intensity
                </dt>
                <dd className="mt-1.5 text-foreground">
                  12–17 t CO₂ per tonne
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground/70 uppercase">
                  Supply chain
                </dt>
                <dd className="mt-1.5 text-foreground">
                  90%+ refined overseas
                </dd>
              </div>
            </dl>
          </article>
          <article className="flex flex-col gap-6 rounded-2xl border border-primary/25 bg-linear-to-r from-primary/60 to-primary/20 p-7 md:rounded-none md:border-0">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.22em] text-primary-foreground uppercase">
                Bio-Graphite
              </p>
              <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
            </div>
            <dl className="space-y-5 text-sm leading-7 text-primary-foreground/75">
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-primary-foreground/55 uppercase">
                  Feedstock
                </dt>
                <dd className="mt-1.5 font-medium text-primary-foreground">
                  Forestry residues &amp; biomass
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-primary-foreground/55 uppercase">
                  Processing
                </dt>
                <dd className="mt-1.5 font-medium text-primary-foreground">
                  {"<1,300°C with catalyst"}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-primary-foreground/55 uppercase">
                  Carbon intensity
                </dt>
                <dd className="mt-1.5 font-medium text-primary-foreground">
                  70–90% lower carbon intensity
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-primary-foreground/55 uppercase">
                  Supply chain
                </dt>
                <dd className="mt-1.5 font-medium text-primary-foreground">
                  Producible from domestic feedstock
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading title="Why It Matters" />
        <div className="grid gap-5 md:grid-cols-3">
          {whyItMattersCards.map(({ id, icon: Icon, body }) => (
            <article
              key={id}
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
              <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 py-12 sm:py-16 lg:py-20">
        <p className="mx-auto max-w-5xl text-center font-heading text-2xl leading-[1.2] tracking-tight text-foreground sm:text-3xl">
          The science is validated. The feedstock is here. We are building the
          facility.
        </p>
      </section>
    </div>
  );
}
