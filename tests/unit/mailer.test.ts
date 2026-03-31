import { beforeEach, describe, expect, it, vi } from "vitest"

import { sendInquiryEmail } from "@/lib/mailer"

const sendMock = vi.fn()

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(function Resend() {
    return {
      emails: {
        send: sendMock,
      },
    }
  }),
}))

describe("sendInquiryEmail", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.RESEND_API_KEY = "re_test_key"
    process.env.RESEND_FROM_EMAIL = "Atlantic BioGraphite <no-reply@example.com>"
    process.env.DISABLE_EMAIL_DELIVERY = "false"
  })

  it("throws when Resend returns an API error payload", async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: {
        name: "validation_error",
        message: "You can only send testing emails to your own email address.",
      },
      headers: null,
    })

    await expect(
      sendInquiryEmail({
        to: "contact@example.com",
        subject: "Subject",
        text: "Body",
      })
    ).rejects.toThrow("Resend email send failed")
  })

  it("resolves when Resend accepts the message", async () => {
    sendMock.mockResolvedValue({
      data: { id: "email_123" },
      error: null,
      headers: null,
    })

    await expect(
      sendInquiryEmail({
        to: "contact@example.com",
        subject: "Subject",
        text: "Body",
      })
    ).resolves.toBeUndefined()
  })
})
