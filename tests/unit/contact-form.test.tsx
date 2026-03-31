import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { ContactForm } from "@/components/forms/contact-form"

describe("ContactForm", () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("highlights client-side validation failures before submitting", async () => {
    const user = userEvent.setup()
    const fetchSpy = vi.fn()
    vi.stubGlobal("fetch", fetchSpy)

    render(<ContactForm />)

    await user.click(screen.getByRole("button", { name: "Send Message" }))

    expect(fetchSpy).not.toHaveBeenCalled()
    expect(screen.getByText("Please review the highlighted fields.")).toBeInTheDocument()
    expect(screen.getByLabelText("Full Name")).toHaveAttribute("aria-invalid", "true")
    expect(screen.getByLabelText("Work Email")).toHaveAttribute("aria-invalid", "true")
    expect(screen.getByLabelText("Company")).toHaveAttribute("aria-invalid", "true")
    expect(screen.getByLabelText("Message")).toHaveAttribute("aria-invalid", "true")
  })

  it("surfaces backend field errors with highlighted inputs", async () => {
    const user = userEvent.setup()
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({
          ok: false,
          error: "Please review the highlighted fields.",
          fieldErrors: {
            company: ["Company is required"],
          },
        }),
      })
    )

    render(<ContactForm />)

    await user.type(screen.getByLabelText("Full Name"), "Jordan Lee")
    await user.type(screen.getByLabelText("Work Email"), "jordan@example.com")
    await user.type(screen.getByLabelText("Company"), "AB")
    await user.type(
      screen.getByLabelText("Message"),
      "We want to discuss pilot sample qualification in Q3 and potential offtake pathways."
    )

    await user.click(screen.getByRole("button", { name: "Send Message" }))

    await waitFor(() => {
      expect(screen.getByLabelText("Company")).toHaveAttribute("aria-invalid", "true")
    })

    expect(screen.getByText("Company is required")).toBeInTheDocument()
  })
})
