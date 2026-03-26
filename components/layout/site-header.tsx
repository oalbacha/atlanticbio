"use client"

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/content"
import { isActivePath } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const storyDropdownItems = useMemo(
    () => [
      { label: "Mission", href: "/mission" },
      { label: "Culture", href: "/culture" },
      { label: "Governance Model", href: "/governance-model" },
    ],
    []
  )

  const storyDropdownActive = storyDropdownItems.some((item) =>
    isActivePath(item.href, pathname)
  )

  const primaryNavItems = useMemo(
    () =>
      navItems.filter(
        (item) => item.label !== "Mission" && item.label !== "Culture"
      ),
    []
  )

  const activeLabel = useMemo(() => {
    const storyActiveItem = storyDropdownItems.find((item) =>
      isActivePath(item.href, pathname)
    )

    return (
      storyActiveItem?.label ??
      navItems.find((item) => isActivePath(item.href, pathname))?.label ??
      "Home"
    )
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/65">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Atlantic BioGraphite home">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-heading text-lg text-primary">
            AB
          </span>
          <span className="hidden font-heading text-lg tracking-[0.11em] text-foreground uppercase sm:block">
            Atlantic BioGraphite
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {primaryNavItems.map((item) => {
            const active =
              item.label === "Story"
                ? storyDropdownActive
                : isActivePath(item.href, pathname)
            return (
              item.label === "Story" ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-all",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.label}
                      <ChevronDown className={cn("size-4 transition-transform", active ? "rotate-180" : "group-hover:rotate-180")} />
                    </span>
                  </Link>

                  <div
                    className={cn(
                      "absolute left-0 top-[calc(100%+10px)] z-50 hidden w-56 rounded-xl border border-border/80 bg-background/95 p-2 shadow-lg",
                      "group-hover:block group-focus-within:block"
                    )}
                    role="menu"
                    aria-label="Story menu"
                  >
                    {storyDropdownItems.map((child) => {
                      const childActive = isActivePath(child.href, pathname)
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                            childActive
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                          aria-current={childActive ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            )
          })}
        </nav>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Menu className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="inset-0 top-0 left-0 h-dvh max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-background/97 p-0"
          >
            <DialogTitle className="sr-only">Main menu</DialogTitle>
            <DialogDescription className="sr-only">
              Full-screen navigation menu for Atlantic BioGraphite pages.
            </DialogDescription>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
                <p className="font-heading text-lg tracking-widest uppercase">Menu</p>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="size-5" />
                </Button>
              </div>
              <p className="px-6 py-4 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Current page: {activeLabel}
              </p>
              <nav aria-label="Mobile" className="grid gap-1 px-3 pb-8">
                {primaryNavItems.map((item) => {
                  const active =
                    item.label === "Story"
                      ? storyDropdownActive
                      : isActivePath(item.href, pathname)
                  return (
                    item.label === "Story" ? (
                      <details key={item.href} className="group">
                        <summary
                          className={cn(
                            "list-none cursor-pointer rounded-2xl px-4 py-5 font-heading text-3xl tracking-wide transition-all",
                            "marker:hidden",
                            active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"
                          )}
                        >
                          <span className="inline-flex items-center justify-between gap-3">
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              aria-current={active ? "page" : undefined}
                            >
                              {item.label}
                            </Link>
                            <ChevronDown className={cn("size-5 transition-transform")} />
                          </span>
                        </summary>
                        <div className="mt-1 grid gap-1 pl-5">
                          {storyDropdownItems.map((child) => {
                            const childActive = isActivePath(child.href, pathname)
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "rounded-xl px-4 py-3 font-heading text-xl tracking-wide transition-all",
                                  childActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-foreground hover:bg-accent"
                                )}
                                aria-current={childActive ? "page" : undefined}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </details>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-2xl px-4 py-5 font-heading text-3xl tracking-wide transition-all",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-accent"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )
                  )
                })}
              </nav>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}
