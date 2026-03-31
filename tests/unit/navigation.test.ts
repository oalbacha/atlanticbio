import { describe, expect, it } from "vitest"

import { navItems } from "@/lib/content"
import { getActiveNavItem, isActivePath } from "@/lib/navigation"

describe("navigation helpers", () => {
  it("matches root only on root", () => {
    expect(isActivePath("/", "/")).toBe(true)
    expect(isActivePath("/", "/story")).toBe(false)
  })

  it("matches nested routes", () => {
    expect(isActivePath("/story", "/story")).toBe(true)
    expect(isActivePath("/story", "/story/updates/q1")).toBe(true)
    expect(isActivePath("/story", "/mission")).toBe(false)
  })

  it("returns active navigation item", () => {
    expect(getActiveNavItem("/culture", navItems)?.label).toBe("Culture")
    expect(getActiveNavItem("/not-a-page", navItems)).toBeNull()
  })
})
