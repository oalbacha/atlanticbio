import { sendInquiryEmail } from "@/lib/mailer"
import {
  type ApiError,
  type ApiSuccess,
  CareersFormSchema,
  isLikelyBot,
} from "@/lib/validation"

export async function POST(request: Request): Promise<Response> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: "Invalid payload." } satisfies ApiError, {
      status: 400,
    })
  }

  const parsed = CareersFormSchema.safeParse(body)

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
        message: "Thank you. Your career inquiry has been received.",
      } satisfies ApiSuccess,
      { status: 200 }
    )
  }

  const recipient = process.env.CAREERS_EMAIL_TO ?? "careers@example.com"

  const text = [
    "New career inquiry",
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Role interest: ${parsed.data.roleInterest}`,
    `LinkedIn/Portfolio: ${parsed.data.linkedinOrPortfolio || "Not provided"}`,
    "",
    "Message:",
    parsed.data.message,
  ].join("\n")

  try {
    await sendInquiryEmail({
      to: recipient,
      replyTo: parsed.data.email,
      subject: `Career inquiry from ${parsed.data.name}`,
      text,
    })

    return Response.json(
      {
        ok: true,
        message: "Thank you. Our team will review your profile.",
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
