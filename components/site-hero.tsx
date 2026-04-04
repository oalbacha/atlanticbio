"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type SiteHeroProps = {
  title?: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
  videoPoster?: string;
};

export function SiteHero({
  videoSrc = "/media/wonderful-video.mp4",
  videoPoster = "/media/hero-poster.jpg",
  title = "Canada's graphite from forest biomass",
  intro,
  ctaLabel = "Start a conversation",
  ctaHref = "/contact",
}: SiteHeroProps) {
  return (
    <section className="relative left-1/2 right-1/2 -mt-8 w-screen -translate-x-1/2 overflow-hidden lg:-mt-10">
      <div className="relative min-h-[88svh] bg-[#09100d]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={videoPoster}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.18),rgba(7,10,8,0.32)_32%,rgba(7,10,8,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(207,176,109,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(108,149,96,0.14),transparent_24%)]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col px-6 pb-6 lg:px-8 lg:pb-8">
          <div className="flex-1" />

          <div className="max-w-4xl space-y-6 pb-8 lg:pb-10">
            <h1 className="capitalize max-w-4xl pb-2 font-heading text-5xl leading-[1.02] text-white [text-decoration:none] sm:text-6xl lg:text-[5.6rem]">
              {title}
            </h1>

            {intro ? (
              <p className="max-w-3xl text-base leading-7 text-white/88 sm:text-lg">
                {intro}
              </p>
            ) : null}

            {ctaLabel && ctaHref ? (
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
