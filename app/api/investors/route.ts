import { sendInquiryEmail } from "@/lib/mailer"
import {
  type ApiError,
  type ApiSuccess,
  InvestorsFormSchema,
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

  const parsed = InvestorsFormSchema.safeParse(body)

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
        message: "Thank you. Your investor inquiry has been received.",
      } satisfies ApiSuccess,
      { status: 200 }
    )
  }

  const recipient = process.env.INVESTORS_EMAIL_TO ?? "investors@example.com"

  const text = [
    "New investor inquiry",
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Organization: ${parsed.data.organization}`,
    `Ticket Range: ${parsed.data.ticketRange}`,
    "",
    "Message:",
    parsed.data.message,
  ].join("\n")

  try {
    await sendInquiryEmail({
      to: recipient,
      replyTo: parsed.data.email,
      subject: `Investor inquiry from ${parsed.data.organization}`,
      text,
    })

    return Response.json(
      {
        ok: true,
        message: "Thank you. The investor relations team will follow up shortly.",
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
