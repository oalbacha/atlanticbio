import { type Metadata } from "next";

const storyCards = [
  {
    title: "The Problem",
    copy: "Graphite is the largest mineral component in a lithium-ion battery, larger by weight than lithium, cobalt, or nickel. Global demand is projected to outpace supply by 777,000 tonnes per year by 2030. There is no path to North American battery independence without solving the graphite problem.",
  },
  {
    title: "The Feedstock",
    copy: "Every year, New Brunswick’s forest industry generates over one million bone-dry tonnes of wood residues including sawdust. These residues, sawdust, bark, and wood chips, are the same input that bio-graphite conversion requires. The supply exists. It's undervalued. And it regenerates.",
  },
  {
    title: "The Approach",
    copy: "We don't start from scratch. Bio-graphite has been commercially validated, demonstrated at battery-grade purity, backed by major battery and forestry investors, with a demonstration plant under construction in Europe. Atlantic BioGraphite applies proven conversion pathways to Atlantic Canadian feedstock, starting with a 12-month feasibility study alongside university research partners.",
  },
  {
    title: "The Model",
    copy: "This isn't a mining play with a 20-year deposit and a decommissioning plan. It's a manufacturing operation built on a renewable resource base, embedded in existing forestry supply chains, and designed to scale modularly as demand grows. The feedstock regenerates. The facility expands in steps.",
  },
] as const;

const storyIntro =
  "Every lithium-ion battery contains more graphite than any other mineral. It's the single largest component by weight and almost none of it is produced in North America. The industry that's supposed to decarbonize transportation is built on a material that generates 12-17 tonnes of CO2 per tonne produced. That contradiction is the reason Atlantic BioGraphite exists. New Brunswick sits on one of Eastern North America's largest forestry economies. Every year, sawmills generate hundreds of thousands of tonnes of residues, including sawdust, bark, and chips, that are either sold at thin margins or landfilled. We see a different endpoint for that material, battery-grade graphite.";

const missionStatement =
  "Transform sustainably sourced forestry residues into battery-grade graphite — enabling the transition to electric mobility through lower-carbon, traceable, and regionally produced critical minerals.";

const visionStatement =
  "Establish Atlantic Canada as North America's leading producer of carbon-negative battery materials, proving that critical minerals production can be environmentally regenerative, economically sustainable, and socially beneficial.";

export const metadata: Metadata = {
  title: "Story",
  description: "Why Atlantic BioGraphite exists and how the model is built.",
};

export default function StoryPage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <section className="relative left-1/2 right-1/2 -mt-8 w-screen -translate-x-1/2 overflow-hidden lg:-mt-10">
        <div className="relative min-h-[76svh] bg-[#09100d]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/wonderful-video-poster.jpg"
            aria-hidden="true"
          >
            <source src="/media/wonderful-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.22),rgba(7,10,8,0.42)_34%,rgba(7,10,8,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(207,176,109,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(108,149,96,0.14),transparent_25%)]" />

          <div className="relative mx-auto flex min-h-[76svh] max-w-7xl flex-col px-6 pb-6 lg:px-8 lg:pb-8">
            <div className="flex-1" />

            <div className="max-w-4xl space-y-5 pb-8 lg:pb-10">
              <h1 className="capitalize max-w-4xl font-heading text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[5.6rem]">
                Our story
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-7">
        <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
        <div className="max-w-5xl">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {storyIntro}
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {storyCards.map((card, index) => (
          <article
            key={card.title}
            className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              0{index + 1}
            </p>
            <h2 className="mt-4 text-2xl text-foreground">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {card.copy}
            </p>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden border-y border-border/70 py-14 sm:py-18 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(124,184,138,0.1),transparent_26%),radial-gradient(circle_at_84%_78%,rgba(190,150,83,0.08),transparent_24%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl space-y-5">
            <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">
              Mission & Vision
            </p>
            <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Built to make graphite supply cleaner, regional, and durable
            </h2>
            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Atlantic BioGraphite is designed as a long-horizon manufacturing
              platform rooted in renewable feedstock, industrial discipline, and
              a stronger North American battery supply chain.
            </p>
          </div>

          <div className="grid gap-10 lg:gap-12">
            <article className="border-l border-primary/40 pl-6 sm:pl-8">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Mission
              </p>
              <p className="mt-4 max-w-3xl font-heading text-2xl leading-[1.45] text-foreground sm:text-3xl sm:leading-[1.4]">
                {missionStatement}
              </p>
            </article>

            <article className="border-l border-white/12 pl-6 sm:pl-8">
              <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                Vision
              </p>
              <p className="mt-4 max-w-3xl font-heading text-2xl leading-[1.45] text-foreground sm:text-3xl sm:leading-[1.4]">
                {visionStatement}
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
