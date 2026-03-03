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

  const recipient = process.env.CONTACT_EMAIL_TO ?? "contact@example.com"

  const text = [
    "New contact inquiry",
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Company: ${parsed.data.company}`,
    `Inquiry Type: ${parsed.data.inquiryType}`,
    "",
    "Message:",
    parsed.data.message,
  ].join("\n")

  try {
    await sendInquiryEmail({
      to: recipient,
      replyTo: parsed.data.email,
      subject: `Contact inquiry from ${parsed.data.name}`,
      text,
    })

    return Response.json(
      {
        ok: true,
        message: "Thank you. Your inquiry has been submitted.",
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
