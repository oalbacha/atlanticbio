import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { SiteHeader } from "@/components/layout/site-header"

const mockPathname = vi.fn()

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}))

describe("SiteHeader", () => {
  beforeEach(() => {
    mockPathname.mockReturnValue("/mission")
  })

  it("highlights active Story dropdown trigger", () => {
    render(<SiteHeader />)

    const storyLinks = screen.getAllByRole("link", { name: "Story" })
    expect(
      storyLinks.some((link) => link.getAttribute("aria-current") === "page")
    ).toBe(true)
  })

  it("includes Mission and Culture inside the Story dropdown", () => {
    render(<SiteHeader />)

    expect(screen.getByRole("menuitem", { name: "Mission" })).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "Culture" })).toBeInTheDocument()
  })

  it("opens and closes mobile dialog menu", async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    await user.click(screen.getByRole("button", { name: /open menu/i }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /close menu/i }))

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })
})
