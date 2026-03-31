import { describe, expect, it } from "vitest"

import { ContactFormSchema, isLikelyBot } from "@/lib/validation"

describe("validation", () => {
  it("validates a correct contact payload", () => {
    const result = ContactFormSchema.safeParse({
      name: "Alex Morgan",
      email: "alex@example.com",
      company: "ABG Partner",
      inquiryType: "General",
      message: "We are interested in discussing qualification timelines for pilot samples.",
      startedAt: Date.now() - 5000,
      website: "",
    })

    expect(result.success).toBe(true)
  })

  it("accepts the form before reCAPTCHA is configured", () => {
    const result = ContactFormSchema.safeParse({
      name: "Alex Morgan",
      email: "alex@example.com",
      company: "ABG Partner",
      inquiryType: "General",
      message: "We are interested in discussing qualification timelines for pilot samples.",
      startedAt: Date.now() - 5000,
      website: "",
    })

    expect(result.success).toBe(true)
  })

  it("fails with missing required fields", () => {
    const result = ContactFormSchema.safeParse({
      name: "",
      email: "invalid",
      company: "",
      inquiryType: "General",
      message: "short",
      startedAt: Date.now() - 5000,
      website: "",
    })

    expect(result.success).toBe(false)
  })

  it("flags bot-like timing", () => {
    expect(isLikelyBot(Date.now() - 200, "")).toBe(true)
    expect(isLikelyBot(Date.now() - 5000, "spam-field")).toBe(true)
    expect(isLikelyBot(Date.now() - 5000, "")).toBe(false)
  })

  it("allows fast submissions when timing checks are intentionally disabled", () => {
    expect(isLikelyBot(Date.now() - 200, "", { ignoreFastSubmission: true })).toBe(false)
  })

  it("accepts autofilled honeypot fields so the route can quietly treat them as bot traffic", () => {
    const result = ContactFormSchema.safeParse({
      name: "Alex Morgan",
      email: "alex@example.com",
      company: "ABG Partner",
      inquiryType: "General",
      message: "We are interested in discussing qualification timelines for pilot samples.",
      startedAt: "",
      website: "https://example.com",
    })

    expect(result.success).toBe(true)

    if (result.success) {
      expect(isLikelyBot(result.data.startedAt, result.data.website)).toBe(true)
    }
  })
})
