import Link from "next/link";

import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[2fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-2xl tracking-wide text-foreground">
            ATLANTIC BIOGRAPHITE
          </p>
          <p className="text-sm text-muted-foreground">
            New Brunswick, Canada{" "}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Copyright Atlantic BioGraphite.
      </p>
    </footer>
  );
}
