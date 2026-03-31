import { afterEach, describe, expect, it, vi } from "vitest"

import { POST } from "@/app/api/contact/route"
import { sendInquiryEmail } from "@/lib/mailer"

vi.mock("@/lib/mailer", () => ({
  sendInquiryEmail: vi.fn(),
}))

describe("POST /api/contact", () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
    delete process.env.RECAPTCHA_SECRET_KEY
    delete process.env.RECAPTCHA_EXPECTED_ACTION
    delete process.env.RECAPTCHA_MIN_SCORE
    delete process.env.SKIP_RECAPTCHA_VERIFICATION
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
    expect(sendInquiryEmail).toHaveBeenCalledTimes(2)
    expect(sendInquiryEmail).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "contact@example.com",
        replyTo: "taylor@example.com",
        subject: "Contact inquiry from Taylor Reed",
      })
    )
    expect(sendInquiryEmail).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "taylor@example.com",
        subject: "We received your Atlantic BioGraphite inquiry",
      })
    )
  })

  it("rejects the request when reCAPTCHA verification fails", async () => {
    process.env.RECAPTCHA_SECRET_KEY = "test-secret"
    process.env.SKIP_RECAPTCHA_VERIFICATION = "false"

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            success: false,
            action: "contact_form",
            score: 0.1,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      )
    )

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
          recaptchaToken: "test-token",
        }),
      })
    )

    const data = (await response.json()) as { ok: boolean; error?: string }

    expect(response.status).toBe(400)
    expect(data.ok).toBe(false)
    expect(data.error).toBe("Unable to verify spam protection. Please try again.")
    expect(sendInquiryEmail).not.toHaveBeenCalled()
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

  it("quietly accepts requests when hidden anti-spam fields are tripped", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: "Taylor Reed",
          email: "taylor@example.com",
          company: "North Battery",
          inquiryType: "Partnership",
          message: "We would like to discuss pilot sample qualification and timeline alignment.",
          startedAt: "",
          website: "https://example.com",
        }),
      })
    )

    const data = (await response.json()) as { ok: boolean; message?: string }

    expect(response.status).toBe(200)
    expect(data.ok).toBe(true)
    expect(sendInquiryEmail).not.toHaveBeenCalled()
  })
})
