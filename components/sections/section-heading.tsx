import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl space-y-4", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl capitalize">
        {title}
      </h2>
      {intro ? (
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
