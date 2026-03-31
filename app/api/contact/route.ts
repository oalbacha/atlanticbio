import { isRecaptchaVerificationEnabled, verifyRecaptchaToken } from "@/lib/recaptcha"
import { sendInquiryEmail } from "@/lib/mailer"
import {
  type ApiError,
  type ApiSuccess,
  ContactFormSchema,
  isLikelyBot,
} from "@/lib/validation"

export async function POST(request: Request): Promise<Response> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    const payload: ApiError = {
      ok: false,
      error: "Invalid payload.",
    }
    return Response.json(payload, { status: 400 })
  }

  const parsed = ContactFormSchema.safeParse(body)

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        error: "Please review the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      } satisfies ApiError,
      { status: 400 }
    )
  }

  if (isLikelyBot(parsed.data.startedAt, parsed.data.website)) {
    return Response.json(
      {
        ok: true,
        message: "Thanks for contacting Atlantic BioGraphite.",
      } satisfies ApiSuccess,
      { status: 200 }
    )
  }

  if (isRecaptchaVerificationEnabled()) {
    if (!parsed.data.recaptchaToken) {
      return Response.json(
        {
          ok: false,
          error: "Please complete the spam protection check and try again.",
          fieldErrors: {
            recaptchaToken: ["Spam protection verification is required."],
          },
        } satisfies ApiError,
        { status: 400 }
      )
    }

    try {
      const isRecaptchaValid = await verifyRecaptchaToken(parsed.data.recaptchaToken)

      if (!isRecaptchaValid) {
        return Response.json(
          {
            ok: false,
            error: "Unable to verify spam protection. Please try again.",
            fieldErrors: {
              recaptchaToken: ["Spam protection verification failed. Please try again."],
            },
          } satisfies ApiError,
          { status: 400 }
        )
      }
    } catch {
      return Response.json(
        {
          ok: false,
          error: "Spam protection is temporarily unavailable. Please try again.",
        } satisfies ApiError,
        { status: 503 }
      )
    }
  }

  const recipient = process.env.CONTACT_EMAIL_TO ?? "contact@example.com"

  const adminText = [
    "New contact inquiry",
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Company: ${parsed.data.company}`,
    `Inquiry Type: ${parsed.data.inquiryType}`,
    "",
    "Message:",
    parsed.data.message,
  ].join("\n")

  const userText = [
    `Hi ${parsed.data.name},`,
    "",
    "Thanks for contacting Atlantic BioGraphite. We received your inquiry and will follow up soon.",
    "",
    "Your submission",
    `Company: ${parsed.data.company}`,
    `Inquiry Type: ${parsed.data.inquiryType}`,
    "",
    "Message:",
    parsed.data.message,
    "",
    "Atlantic BioGraphite",
  ].join("\n")

  try {
    await Promise.all([
      sendInquiryEmail({
        to: recipient,
        replyTo: parsed.data.email,
        subject: `Contact inquiry from ${parsed.data.name}`,
        text: adminText,
      }),
      sendInquiryEmail({
        to: parsed.data.email,
        subject: "We received your Atlantic BioGraphite inquiry",
        text: userText,
      }),
    ])

    return Response.json(
      {
        ok: true,
        message: "Thank you. Your inquiry has been submitted and a confirmation email has been sent.",
      } satisfies ApiSuccess,
      { status: 200 }
    )
  } catch {
    return Response.json(
      {
        ok: false,
        error: "Unable to submit right now. Please try again.",
      } satisfies ApiError,
      { status: 500 }
    )
  }
}
