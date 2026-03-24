"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const heroTabs = [
  {
    id: "future",
    index: "01",
    eyebrow: "Canada's mineral future",
    title: "Canada's battery graphite, from forest biomass.",
    description:
      "Atlantic BioGraphite is developing a new materials story for Canada: turning renewable forestry biomass into battery-grade graphite for the industries powering the next generation of mobility.",
    ctaLabel: "Explore the mission",
    ctaHref: "/mission",
    video: "/media/wonderful-video.mp4",
    poster: "/media/wonderful-video-poster.jpg",
    summary: "A Canadian pathway from biomass to advanced battery materials.",
  },
  {
    id: "jobs",
    index: "02",
    eyebrow: "Jobs and diversification",
    title: "Skilled jobs from a stronger forestry economy.",
    description:
      "The opportunity reaches beyond one product. It can support new industrial careers, strengthen regional manufacturing capability, and give forestry residues a higher-value role in Canada's economy.",
    ctaLabel: "Read the story",
    ctaHref: "/story",
    video: "/media/wonderful-video.mp4",
    poster: "/media/wonderful-video-poster.jpg",
    summary: "New industrial jobs tied to forestry, processing, and advanced manufacturing.",
  },
  {
    id: "climate",
    index: "03",
    eyebrow: "Decarbonization",
    title: "Cleaner batteries with biomass-based graphite.",
    description:
      "By starting with biomass, Atlantic BioGraphite is aiming for a lower-carbon material pathway that can support battery supply chains while aligning with the broader transition to electrification.",
    ctaLabel: "See product vision",
    ctaHref: "/biographite",
    video: "/media/wonderful-video.mp4",
    poster: "/media/wonderful-video-poster.jpg",
    summary: "A lower-carbon graphite pathway designed for batteries and EVs.",
  },
] as const

export function HomeHeroTabs() {
  const [activeTab, setActiveTab] = useState<(typeof heroTabs)[number]["id"]>(heroTabs[0].id)
  const activeIndex = heroTabs.findIndex((tab) => tab.id === activeTab)
  const currentTab = heroTabs[activeIndex] ?? heroTabs[0]

  return (
    <section className="relative left-1/2 right-1/2 -mt-8 w-screen -translate-x-1/2 overflow-hidden lg:-mt-10">
      <div className="relative min-h-[88svh] bg-[#09100d]">
        <video
          key={currentTab.video}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={currentTab.poster}
          aria-hidden="true"
        >
          <source src={currentTab.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.18),rgba(7,10,8,0.32)_32%,rgba(7,10,8,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(207,176,109,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(108,149,96,0.14),transparent_24%)]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col px-6 pb-6 lg:px-8 lg:pb-8">
          <div className="flex-1" />

          <div className="max-w-4xl space-y-6 pb-8 lg:pb-10">
            <h1 className="max-w-4xl pb-2 font-heading text-5xl leading-[1.02] text-white [text-decoration:none] sm:text-6xl lg:text-[5.6rem]">
              {currentTab.title}
            </h1>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link href={currentTab.ctaHref}>{currentTab.ctaLabel}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/25 bg-white/8 px-7 text-white hover:bg-white/16 hover:text-white"
              >
                <Link href="/contact">Start a conversation</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/15 pt-4">
            <div role="tablist" aria-label="Homepage hero stories" className="grid gap-3 lg:grid-cols-3">
              {heroTabs.map((tab) => {
                const active = tab.id === currentTab.id

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`hero-panel-${tab.id}`}
                    id={`hero-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "group rounded-[1.5rem] border p-4 text-left transition-all duration-300",
                      active
                        ? "border-white/28 bg-white/12 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm"
                        : "border-white/10 bg-black/18 hover:border-white/20 hover:bg-white/7"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[0.68rem] tracking-[0.24em] text-[#cddaa0] uppercase">
                            {tab.index}
                          </span>
                          <span className="h-px w-10 bg-white/30" />
                        </div>
                        <p className="max-w-xs text-lg font-heading leading-tight text-white">{tab.title}</p>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "mt-1 size-4 shrink-0 text-white/60 transition-transform duration-300",
                          active ? "translate-x-0 translate-y-0" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        )}
                      />
                    </div>
                    <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={cn(
                          "h-full rounded-full bg-[#d9df9b] transition-all duration-500",
                          active ? "w-full" : "w-0"
                        )}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            id={`hero-panel-${currentTab.id}`}
            aria-labelledby={`hero-tab-${currentTab.id}`}
            className="sr-only"
          >
            {currentTab.description}
          </div>
        </div>
      </div>
    </section>
  )
}
