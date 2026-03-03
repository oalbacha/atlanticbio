import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  label: string
  title: string
  intro: string
  className?: string
}

export function PageHero({ label, title, intro, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/80 bg-[#0b1114] p-8 sm:p-10 lg:p-12",
        className
      )}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/wonderful-video-poster.jpg"
        aria-label="Atlantic BioGraphite page hero background video"
      >
        <source src="/media/wonderful-video.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-center motion-reduce:block"
        style={{ backgroundImage: "url('/media/wonderful-video-poster.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(8,12,15,0.76),rgba(10,22,17,0.68))]" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-3xl space-y-4 rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.6))] p-5 shadow-[0_20px_48px_-30px_rgba(0,0,0,0.92)] sm:p-6">
        <Badge className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-[0.65rem] tracking-[0.18em] text-primary uppercase">
          {label}
        </Badge>
        <h1 className="font-heading text-4xl leading-[1.16] text-white sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:leading-[1.08]">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-white/95 sm:text-lg">{intro}</p>
      </div>
    </section>
  )
}
