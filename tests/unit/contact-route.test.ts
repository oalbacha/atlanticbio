import { afterEach, describe, expect, it, vi } from "vitest"

import { POST } from "@/app/api/contact/route"
import { sendInquiryEmail } from "@/lib/mailer"

vi.mock("@/lib/mailer", () => ({
  sendInquiryEmail: vi.fn(),
}))

describe("POST /api/contact", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("submits valid contact payload", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: "Taylor Reed",
          email: "taylor@example.com",
          company: "North Battery",
          inquiryType: "Partnership",
          message: "We would like to discuss pilot sample qualification and timeline alignment.",
          startedAt: Date.now() - 5000,
          website: "",
        }),
      })
    )

    const data = (await response.json()) as { ok: boolean; message?: string }

    expect(response.status).toBe(200)
    expect(data.ok).toBe(true)
    expect(sendInquiryEmail).toHaveBeenCalledTimes(1)
  })

  it("returns validation errors for invalid payload", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: "",
          email: "invalid",
          company: "",
          inquiryType: "General",
          message: "short",
          startedAt: Date.now() - 5000,
          website: "",
        }),
      })
    )

    const data = (await response.json()) as {
      ok: boolean
      fieldErrors?: Record<string, string[]>
    }

    expect(response.status).toBe(400)
    expect(data.ok).toBe(false)
    expect(data.fieldErrors?.name?.length).toBeGreaterThan(0)
  })
})
