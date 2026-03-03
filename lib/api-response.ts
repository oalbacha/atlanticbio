import { type ZodFormattedError, type ZodIssue } from "zod"

import { type ApiError } from "@/lib/validation"

function flattenIssues(issues: ZodIssue[]): Record<string, string[]> {
  return issues.reduce<Record<string, string[]>>((acc, issue) => {
    const key = issue.path[0]?.toString() ?? "form"
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(issue.message)
    return acc
  }, {})
}

export function validationErrorResponse(
  issues: ZodIssue[] | ZodFormattedError<unknown>,
  message = "Please review the highlighted fields."
): Response {
  const fieldErrors = Array.isArray(issues)
    ? flattenIssues(issues)
    : (issues as ZodFormattedError<unknown>)

  const payload: ApiError = {
    ok: false,
    error: message,
    fieldErrors: fieldErrors as Record<string, string[]>,
  }

  return Response.json(payload, { status: 400 })
}

export function serverErrorResponse(errorMessage = "Unable to submit right now. Please try again."): Response {
  const payload: ApiError = {
    ok: false,
    error: errorMessage,
  }

  return Response.json(payload, { status: 500 })
}
