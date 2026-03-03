import { type TimelinePhase } from "@/lib/types"

export function Roadmap({ phases }: { phases: TimelinePhase[] }) {
  return (
    <ol className="grid gap-5 lg:grid-cols-3">
      {phases.map((phase) => (
        <li
          key={phase.phase}
          className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/40" />
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {phase.years}
          </p>
          <h3 className="mt-3 font-heading text-2xl text-foreground">{phase.phase}</h3>
          <p className="mt-2 text-sm font-semibold text-primary">{phase.focus}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{phase.outcome}</p>
        </li>
      ))}
    </ol>
  )
}
