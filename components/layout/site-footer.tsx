import Link from "next/link"

import { footerText, navItems } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[2fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-heading text-2xl tracking-wide text-foreground">ATLANTIC BIOGRAPHITE</p>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{footerText}</p>
          <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            As of February 2026 planning assumptions
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
