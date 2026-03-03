import { Resend } from "resend"

type SendInquiryEmailParams = {
  to: string
  subject: string
  replyTo: string
  text: string
}

export async function sendInquiryEmail({
  to,
  subject,
  replyTo,
  text,
}: SendInquiryEmailParams): Promise<void> {
  const disabled = process.env.DISABLE_EMAIL_DELIVERY === "true"
  if (disabled) {
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    throw new Error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL")
  }

  const resend = new Resend(apiKey)

  await resend.emails.send({
    from,
    to,
    replyTo,
    subject,
    text,
  })
}
