import { type MetricItem } from "@/lib/types";

export function MetricGrid({ metrics }: { metrics: MetricItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.8)] backdrop-blur"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/40" />
          {metric.sourceNote ? (
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {metric.sourceNote}
            </p>
          ) : null}
          <p className="mt-4 font-heading text-4xl text-foreground transition-colors group-hover:text-primary sm:text-5xl">
            {metric.value}
          </p>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            {metric.label}
          </p>
        </article>
      ))}
    </div>
  );
}
