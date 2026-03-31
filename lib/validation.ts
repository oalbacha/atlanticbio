import { z } from "zod"

const antiSpamSchema = z.object({
  website: z.string().optional().default(""),
  startedAt: z.coerce.number().int().nonnegative().catch(0),
})

const emailSchema = z.email("Enter a valid email address")

const messageSchema = z
  .string()
  .min(20, "Please provide at least 20 characters")
  .max(2500, "Please keep your message under 2500 characters")

export const ContactFormSchema = antiSpamSchema.extend({
  name: z.string().min(2, "Name is required").max(120),
  email: emailSchema,
  company: z.string().min(2, "Company is required").max(150),
  inquiryType: z.enum(["General", "Partnership", "Media", "Other"]),
  message: messageSchema,
  recaptchaToken: z.string().min(1).optional(),
})

export const InvestorsFormSchema = antiSpamSchema.extend({
  name: z.string().min(2, "Name is required").max(120),
  email: emailSchema,
  organization: z.string().min(2, "Organization is required").max(180),
  ticketRange: z.enum([
    "< C$500k",
    "C$500k - C$2M",
    "C$2M - C$10M",
    "> C$10M",
    "Strategic partner",
  ]),
  message: messageSchema,
})

export const CareersFormSchema = antiSpamSchema.extend({
  name: z.string().min(2, "Name is required").max(120),
  email: emailSchema,
  roleInterest: z.string().min(2, "Role interest is required").max(150),
  linkedinOrPortfolio: z.url("Enter a valid URL").optional().or(z.literal("")),
  message: messageSchema,
})

export type ContactFormInput = z.infer<typeof ContactFormSchema>
export type InvestorsFormInput = z.infer<typeof InvestorsFormSchema>
export type CareersFormInput = z.infer<typeof CareersFormSchema>

const minHumanDelayMs = 1200
const maxSubmissionAgeMs = 1000 * 60 * 60 * 24

export function isLikelyBot(startedAt: number, website?: string): boolean {
  const now = Date.now()
  const age = now - startedAt

  if (website && website.trim().length > 0) {
    return true
  }

  if (age < minHumanDelayMs) {
    return true
  }

  if (age > maxSubmissionAgeMs) {
    return true
  }

  return false
}

export type ApiSuccess = {
  ok: true
  message: string
}

export type ApiError = {
  ok: false
  error: string
  fieldErrors?: Record<string, string[]>
}
