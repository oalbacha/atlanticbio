import { type Metadata } from "next";

import { SiteHero } from "@/components/site-hero";
import { Clock, Flame, Handshake, Leaf, MapPin } from "lucide-react";
import VideoSection from "@/components/sections/video-section";
import { SectionHeading } from "@/components/sections/section-heading";
import Link from "next/link";

const culturePrinciples = [
  {
    id: "operational-excellence",
    icon: Flame,
    title: "Operational Excellence",
    detail:
      "Our products target battery-grade specifications at industry-leading yield and energy efficiency.",
    className: "xl:col-span-5",
  },
  {
    id: "partnership-first",
    icon: Handshake,
    title: "Partnership First",
    detail:
      "We engage Indigenous communities as partners from project inception. We value biomass suppliers as collaborators. We work with customers as co-developers.",
    className: "xl:col-span-5",
  },
  {
    id: "regional-commitment",
    icon: MapPin,
    title: "Regional Commitment",
    detail:
      "We measure success not only in financial returns but in contribution to the kind of economy that keeps the next generation in Atlantic Canada.",
    className: "xl:col-span-4",
  },
  {
    id: "long-term-thinking",
    icon: Clock,
    title: "Long-Term Thinking",
    detail:
      "Infrastructure built today shapes opportunities for the next generation.  We design for adaptability, not quarterly performance.",
    className: "xl:col-span-3",
  },
  {
    id: "environmental-integrity",
    icon: Leaf,
    title: "Environmental Integrity",
    detail:
      "We source biomass from certified forestry operations managed for long-term ecosystem health. We pursue carbon-negative production as a technical target & we commit to publishing lifecycle assessments and environmental performance data annually.",
    className: "xl:col-span-3",
  },
];

export const metadata: Metadata = {
  title: "Culture",
  description:
    "Technology gets us to the table. Trust is what keeps us there. In every partnership we pursue and every community we operate in we earn trust that outlast a single transaction.",
};

export default function CulturePage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <SiteHero
        title="Our Culture"
        intro="Technology gets us to the table. Trust is what keeps us there. In every partnership we pursue and every community we operate in we earn trust that outlast a single transaction"
        ctaLabel=""
        videoSrc="/media/atlantic_canada_tech.mov"
      />

      <section className="space-y-7">
        <div className="h-1 w-20 bg-linear-to-r from-primary/80 via-primary to-primary/40" />
        <div className="max-w-4xl">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Building a critical minerals company means earning trust from people
            who don&apos;t hand it out easily - battery engineers who need
            consistency across ten thousand charge cycles, forestry operators
            whose livelihoods depend on sustainable harvest, Indigenous
            communities whose relationship with this land predates every policy
            framework we operate under, and funders who&apos;ve seen enough
            slide decks to know the difference between a plan and a company. How
            we operate is how we earn that trust
          </p>
        </div>
      </section>

      <section className="space-y-7">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-10">
          {culturePrinciples.map(
            ({ id, icon: Icon, title, detail, className }, index) => (
              <article
                key={id}
                className={`relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm ${className}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/80 via-primary to-primary/35" />
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h2 className="mt-4 text-2xl text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {detail}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="space-y-10">
        <VideoSection
          title="How we operate is how we earn trust"
          videoSrc="/media/operate-to-earn-trust.mov"
          ariaLabel="How we operate is how we earn trust"
        />
        <h2 className="text-center font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl capitalize">
          We would love to hear from you
        </h2>
        <div className="flex gap-5 justify-center">
          <Link
            href="/contact"
            className="w-64 text-center text-primary-foreground border border-primary/25 bg-primary px-4 py-2 rounded-full hover:bg-primary/80"
          >
            Contact us
          </Link>
          <Link
            href="/culture"
            className="w-[250px] text-center text-primary-foreground border border-primary/25 bg-primary px-4 py-2 rounded-full hover:bg-primary/80"
          >
            Learn more about our culture
          </Link>
        </div>
      </section>
    </div>
  );
}
