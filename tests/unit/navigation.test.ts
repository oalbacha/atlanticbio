import { describe, expect, it } from "vitest"

import { navItems } from "@/lib/content"
import { getActiveNavItem, isActivePath } from "@/lib/navigation"

describe("navigation helpers", () => {
  it("matches root only on root", () => {
    expect(isActivePath("/", "/")).toBe(true)
    expect(isActivePath("/", "/story")).toBe(false)
  })

  it("matches nested routes", () => {
    expect(isActivePath("/investors", "/investors")).toBe(true)
    expect(isActivePath("/investors", "/investors/updates/q1")).toBe(true)
    expect(isActivePath("/investors", "/story")).toBe(false)
  })

  it("returns active navigation item", () => {
    expect(getActiveNavItem("/mission", navItems)?.label).toBe("Mission")
    expect(getActiveNavItem("/not-a-page", navItems)).toBeNull()
  })
})
