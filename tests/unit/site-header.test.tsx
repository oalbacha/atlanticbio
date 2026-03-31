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
    mockPathname.mockReturnValue("/story")
  })

  it("highlights the active primary link", () => {
    render(<SiteHeader />)

    expect(screen.getAllByRole("link", { name: "Story" })[0]).toHaveAttribute(
      "aria-current",
      "page"
    )
  })

  it("includes Culture as a navigation link", () => {
    render(<SiteHeader />)

    expect(screen.getAllByRole("link", { name: "Culture" }).length).toBeGreaterThan(0)
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
