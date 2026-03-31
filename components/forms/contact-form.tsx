"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { ContactFormSchema } from "@/lib/validation"

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (
        siteKey: string,
        options: {
          action: string
        }
      ) => Promise<string>
    }
  }
}

type FormState = {
  status: "idle" | "submitting" | "success" | "error"
  message: string
  fieldErrors: Record<string, string[]>
}

const initialState: FormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
}

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""
const skipRecaptcha = process.env.NEXT_PUBLIC_SKIP_RECAPTCHA === "true"
const recaptchaAction = "contact_form"

export function ContactForm() {
  const startedAtRef = useRef<HTMLInputElement>(null)
  const [state, setState] = useState<FormState>(initialState)
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(skipRecaptcha || !recaptchaSiteKey)

  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now())
    }
  }, [])

  function getFieldError(name: string) {
    return state.fieldErrors[name]?.[0]
  }

  function validateClientPayload(form: HTMLFormElement) {
    const result = ContactFormSchema.safeParse(Object.fromEntries(new FormData(form).entries()))

    if (result.success) {
      return true
    }

    setState({
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors: result.error.flatten().fieldErrors,
    })

    return false
  }

  function onFieldChange(event: React.FormEvent<HTMLFormElement>) {
    const target = event.target

    if (
      !(target instanceof HTMLInputElement) &&
      !(target instanceof HTMLTextAreaElement) &&
      !(target instanceof HTMLSelectElement)
    ) {
      return
    }

    if (!state.fieldErrors[target.name]) {
      return
    }

    setState((current) => {
      if (!current.fieldErrors[target.name]) {
        return current
      }

      const fieldErrors = { ...current.fieldErrors }
      delete fieldErrors[target.name]

      return {
        ...current,
        fieldErrors,
      }
    })
  }

  async function submitForm(form: HTMLFormElement, recaptchaToken?: string) {
    const formData = new FormData(form)
    const payload = {
      ...Object.fromEntries(formData.entries()),
      ...(recaptchaToken ? { recaptchaToken } : {}),
    }

    setState((current) => ({ ...current, status: "submitting", message: "", fieldErrors: {} }))

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as {
        ok: boolean
        message?: string
        error?: string
        fieldErrors?: Record<string, string[]>
      }

      if (!response.ok || !data.ok) {
        setState({
          status: "error",
          message: data.error ?? "Something went wrong. Please try again.",
          fieldErrors: data.fieldErrors ?? {},
        })
        return
      }

      setState({ status: "success", message: data.message ?? "Message sent.", fieldErrors: {} })
      form.reset()
      if (startedAtRef.current) {
        startedAtRef.current.value = String(Date.now())
      }
    } catch {
      setState({
        status: "error",
        message: "Network error. Please retry in a moment.",
        fieldErrors: {},
      })
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!validateClientPayload(form)) {
      return
    }

    if (skipRecaptcha) {
      await submitForm(form, "test-recaptcha-token")
      return
    }

    if (!recaptchaSiteKey) {
      await submitForm(form)
      return
    }

    if (!window.grecaptcha || !isRecaptchaReady) {
      setState({
        status: "error",
        message: "Spam protection is still loading. Please try again in a moment.",
        fieldErrors: {},
      })
      return
    }

    setState((current) => ({ ...current, status: "submitting", message: "", fieldErrors: {} }))

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha?.ready(() => {
          window.grecaptcha
            ?.execute(recaptchaSiteKey, { action: recaptchaAction })
            .then(resolve)
            .catch(reject)
        })
      })

      await submitForm(form, recaptchaToken)
    } catch {
      setState({
        status: "error",
        message: "Unable to verify spam protection. Please try again.",
        fieldErrors: {},
      })
    }
  }

  return (
    <Card className="border-border/80 bg-card/80">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">General Contact</CardTitle>
      </CardHeader>
      <CardContent>
        {recaptchaSiteKey ? (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="afterInteractive"
            onReady={() => setIsRecaptchaReady(true)}
          />
        ) : null}
        <form className="space-y-5" onSubmit={onSubmit} onChange={onFieldChange} noValidate>
          <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" aria-invalid={Boolean(getFieldError("name"))} required />
              {getFieldError("name") ? <p className="text-xs text-destructive">{getFieldError("name")}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                aria-invalid={Boolean(getFieldError("email"))}
                required
              />
              {getFieldError("email") ? <p className="text-xs text-destructive">{getFieldError("email")}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" aria-invalid={Boolean(getFieldError("company"))} required />
            {getFieldError("company") ? <p className="text-xs text-destructive">{getFieldError("company")}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiryType">Inquiry Type</Label>
            <select
              id="inquiryType"
              name="inquiryType"
              aria-invalid={Boolean(getFieldError("inquiryType"))}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none transition-[color,box-shadow]",
                "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                getFieldError("inquiryType") && "border-destructive ring-[3px] ring-destructive/20"
              )}
              defaultValue="General"
            >
              <option>General</option>
              <option>Partnership</option>
              <option>Media</option>
              <option>Other</option>
            </select>
            {getFieldError("inquiryType") ? (
              <p className="text-xs text-destructive">{getFieldError("inquiryType")}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} aria-invalid={Boolean(getFieldError("message"))} required />
            {getFieldError("message") ? (
              <p className="text-xs text-destructive">{getFieldError("message")}</p>
            ) : (
              <p className="text-xs text-muted-foreground">Please include context, timeline, and intended outcomes.</p>
            )}
          </div>

          {getFieldError("recaptchaToken") ? (
            <p className="text-xs text-destructive">{getFieldError("recaptchaToken")}</p>
          ) : null}

          <Button className="w-full sm:w-auto" size="lg" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "Sending..." : "Send Message"}
          </Button>

          {state.status === "success" ? <p className="text-sm text-primary">{state.message}</p> : null}
          {state.status === "error" ? <p className="text-sm text-destructive">{state.message}</p> : null}
        </form>
      </CardContent>
    </Card>
  )
}
