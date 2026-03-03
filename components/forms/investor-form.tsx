"use client"

import { useState } from "react"

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

export function InvestorForm() {
  const [startedAt, setStartedAt] = useState(() => Date.now())
  const [state, setState] = useState<FormState>(initialState)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    setState((current) => ({ ...current, status: "submitting", message: "", fieldErrors: {} }))

    try {
      const response = await fetch("/api/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          message: data.error ?? "Unable to submit investor inquiry.",
          fieldErrors: data.fieldErrors ?? {},
        })
        return
      }

      setState({ status: "success", message: data.message ?? "Inquiry sent.", fieldErrors: {} })
      form.reset()
      setStartedAt(Date.now())
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
        <CardTitle className="font-heading text-2xl">Investor Inquiry</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={onSubmit} noValidate>
          <input type="hidden" name="startedAt" value={startedAt} />
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="website-investors">Website</Label>
            <Input id="website-investors" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="investor-name">Full Name</Label>
              <Input
                id="investor-name"
                name="name"
                aria-invalid={Boolean(state.fieldErrors.name?.length)}
                required
              />
              {state.fieldErrors.name ? <p className="text-xs text-destructive">{state.fieldErrors.name[0]}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="investor-email">Email</Label>
              <Input
                id="investor-email"
                name="email"
                type="email"
                aria-invalid={Boolean(state.fieldErrors.email?.length)}
                required
              />
              {state.fieldErrors.email ? <p className="text-xs text-destructive">{state.fieldErrors.email[0]}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              name="organization"
              aria-invalid={Boolean(state.fieldErrors.organization?.length)}
              required
            />
            {state.fieldErrors.organization ? (
              <p className="text-xs text-destructive">{state.fieldErrors.organization[0]}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ticketRange">Ticket Range</Label>
            <select
              id="ticketRange"
              name="ticketRange"
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
              defaultValue="C$500k - C$2M"
            >
              <option>{"< C$500k"}</option>
              <option>C$500k - C$2M</option>
              <option>C$2M - C$10M</option>
              <option>{"> C$10M"}</option>
              <option>Strategic partner</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investor-message">Message</Label>
            <Textarea
              id="investor-message"
              name="message"
              rows={6}
              aria-invalid={Boolean(state.fieldErrors.message?.length)}
              required
            />
            {state.fieldErrors.message ? (
              <p className="text-xs text-destructive">{state.fieldErrors.message[0]}</p>
            ) : null}
          </div>

          <Button className="w-full sm:w-auto" size="lg" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "Sending..." : "Submit Investor Inquiry"}
          </Button>

          {state.status === "success" ? <p className="text-sm text-primary">{state.message}</p> : null}
          {state.status === "error" ? <p className="text-sm text-destructive">{state.message}</p> : null}
        </form>
      </CardContent>
    </Card>
  )
}
