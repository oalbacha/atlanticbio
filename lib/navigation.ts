import { type NavItem } from "@/lib/types"

export function isActivePath(itemHref: string, pathname: string): boolean {
  if (itemHref === "/") {
    return pathname === "/"
  }

  return pathname === itemHref || pathname.startsWith(`${itemHref}/`)
}

export function getActiveNavItem(pathname: string, items: NavItem[]): NavItem | null {
  return items.find((item) => isActivePath(item.href, pathname)) ?? null
}
