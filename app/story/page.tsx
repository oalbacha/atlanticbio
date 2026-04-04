import { type Metadata } from "next";

import { SiteHero } from "@/components/site-hero";
import { NewBrunswickParallax } from "@/components/sections/new-brunswick-parallax";
import { Building2, Clock, Flame, MapPin } from "lucide-react";
import VideoSection from "@/components/sections/video-section";

const storyCards = [
  {
    id: "performance-first",
    icon: Flame,
    title: "Performance First",
    copy: "Bio-graphite has to meet battery-grade specifications, purity, capacity, consistency, before any other advantage matters. That is the standard we hold ourselves to, and it is the foundation every other part is built on.",
  },
  {
    id: "built-to-integrate",
    icon: Building2,
    title: "Built to Integrate",
    copy: "We bring production of bio-graphite to Eastern North America by working with proven technology partners, established feedstock suppliers, and the research institutions that understand this science. We build with the ecosystem, not apart from it.",
  },
  {
    id: "phased-by-design",
    icon: Clock,
    title: "Phased by Design",
    copy: "Feasibility before pilot. Pilot before commercial. Capital follows proof, not projections. We earn the trust of the partners and institutions we need to scale.",
  },
  {
    id: "regional-by-conviction",
    icon: MapPin,
    title: "Regional by Conviction",
    copy: "Atlantic Canada has the feedstock, the forestry expertise, and the geographic proximity to the North American battery manufacturing corridor. The structural advantages are here. The location is the thesis.",
  },
] as const;

const storyIntro1 = `
  When we talk about lithium. We talk about cobalt. We rarely talk about graphite, even though it is the single largest mineral in every lithium-ion battery, larger by weight than all the metals that make headlines.
While the world races to build battery factories across North America, virtually all of the graphite feeding those factories is refined overseas, produced through processes that generate up to 17 tonnes of CO₂ for every tonne of material.
  `;
const storyIntro2 = `
  The industry building the future of transportation is tethered to a supply chain that belongs to the past
Atlantic BioGraphite didn’t come from another mine, but with a fundamentally different approach.
Atlantic Canada is the home of the most forested land in the country, with over 130 years of industrial forestry operations. Every year, sawmills across the region produce over a million tonnes of residues that are undervalued or landfilled. We are building the infrastructure to convert those residues into battery-grade graphite, right here, for the North American supply chain that needs it most.
  `;

const missionStatement =
  "Transform sustainably sourced forestry residues into battery-grade graphite, enabling the transition to electric mobility through lower-carbon, traceable, and regionally produced critical minerals.";

const visionStatement =
  "Establish Atlantic Canada as North America's leading producer of carbon-negative battery materials, proving that critical minerals production can be environmentally regenerative, economically sustainable, and socially beneficial.";

export const metadata: Metadata = {
  title: "Story",
  description: "Why Atlantic BioGraphite exists and how the model is built.",
};

export default function StoryPage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <SiteHero
        videoSrc="/media/ev-clean-energy-car.mov"
        videoPoster="/media/hero-poster.jpg"
        title="The clean energy transition has a blind spot"
        ctaLabel=""
        ctaHref=""
      />

      <section className="space-y-7">
        <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
        <div className="max-w-5xl space-y-5">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {storyIntro1}
          </p>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {storyIntro2}
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {storyCards.map(({ id, icon: Icon, title, copy }) => (
          <article
            key={id}
            className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm flex flex-col"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
            <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden />
            </div>
            <h2 className="mt-4 text-2xl text-foreground">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {copy}
            </p>
          </article>
        ))}
      </section>

      <VideoSection
        title="The forest economy meets the battery economy"
        videoSrc="/media/drone-footage-forest.mov"
        ariaLabel="Drone footage of a forest"
      />

      <section className="relative overflow-hidden border-y border-border/70 py-14 sm:py-18 lg:py-24 p-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(124,184,138,0.1),transparent_26%),radial-gradient(circle_at_84%_78%,rgba(190,150,83,0.08),transparent_24%)]" />
        <div className="flex w-full items-center justify-center lg:gap-12">
          <article className="pl-6 sm:pl-8">
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Our Mission
            </p>
            <p className="mt-4 font-heading text-2xl leading-[1.45] text-foreground sm:text-3xl sm:leading-[1.4]">
              {missionStatement}
            </p>
          </article>

          <article className="border-l border-white/12 pl-6 sm:pl-8">
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Our Vision
            </p>
            <p className="mt-4 font-heading text-2xl leading-[1.45] text-foreground sm:text-3xl sm:leading-[1.4]">
              {visionStatement}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
