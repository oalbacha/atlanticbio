type RecaptchaVerifyResponse = {
  success?: boolean
  score?: number
  action?: string
  hostname?: string
  "error-codes"?: string[]
}

const defaultMinScore = 0.5
const defaultAction = "contact_form"

export function shouldSkipRecaptchaVerification(): boolean {
  return process.env.SKIP_RECAPTCHA_VERIFICATION === "true"
}

export function isRecaptchaVerificationEnabled(): boolean {
  if (shouldSkipRecaptchaVerification()) {
    return false
  }

  return Boolean(process.env.RECAPTCHA_SECRET_KEY)
}

export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY

  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY")
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("reCAPTCHA verification request failed")
  }

  const payload = (await response.json()) as RecaptchaVerifyResponse
  const expectedAction = process.env.RECAPTCHA_EXPECTED_ACTION ?? defaultAction
  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? defaultMinScore)

  return Boolean(
    payload.success &&
      payload.action === expectedAction &&
      typeof payload.score === "number" &&
      payload.score >= minScore
  )
}
