"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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

export function ContactForm() {
  const startedAtRef = useRef<HTMLInputElement>(null)
  const [state, setState] = useState<FormState>(initialState)

  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now())
    }
  }, [])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

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

  return (
    <Card className="border-border/80 bg-card/80">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">General Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={onSubmit} noValidate>
          <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" aria-invalid={Boolean(state.fieldErrors.name?.length)} required />
              {state.fieldErrors.name ? <p className="text-xs text-destructive">{state.fieldErrors.name[0]}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                aria-invalid={Boolean(state.fieldErrors.email?.length)}
                required
              />
              {state.fieldErrors.email ? <p className="text-xs text-destructive">{state.fieldErrors.email[0]}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" aria-invalid={Boolean(state.fieldErrors.company?.length)} required />
            {state.fieldErrors.company ? <p className="text-xs text-destructive">{state.fieldErrors.company[0]}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiryType">Inquiry Type</Label>
            <select
              id="inquiryType"
              name="inquiryType"
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
              defaultValue="General"
            >
              <option>General</option>
              <option>Partnership</option>
              <option>Media</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} aria-invalid={Boolean(state.fieldErrors.message?.length)} required />
            {state.fieldErrors.message ? (
              <p className="text-xs text-destructive">{state.fieldErrors.message[0]}</p>
            ) : (
              <p className="text-xs text-muted-foreground">Please include context, timeline, and intended outcomes.</p>
            )}
          </div>

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
