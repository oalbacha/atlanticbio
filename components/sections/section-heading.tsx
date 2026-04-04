import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  /** Merged onto the title element; use e.g. `normal-case` to override default capitalize. */
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <header className={cn("w-full space-y-4", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl capitalize",
          titleClassName,
        )}
      >
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
