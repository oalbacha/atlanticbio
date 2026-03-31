# Atlantic BioGraphite Corporate Website

Corporate portfolio website built with Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- Zod validation + Resend email delivery
- Vitest + React Testing Library
- Playwright E2E smoke tests

## Pages

- `/`
- `/story`
- `/culture`
- `/governance-model`
- `/contact`

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL=
CONTACT_EMAIL_TO=
DISABLE_EMAIL_DELIVERY=false
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
RECAPTCHA_EXPECTED_ACTION=contact_form
RECAPTCHA_MIN_SCORE=0.5
```

`CONTACT_EMAIL_TO` is the admin inbox for new inquiries. The submitting user also receives a confirmation email.

Add a Google reCAPTCHA v3 site key and secret to enforce spam protection on the contact form. The expected action defaults to `contact_form` and the minimum accepted score defaults to `0.5`.

Set `DISABLE_EMAIL_DELIVERY=true` for local testing without sending emails.

## Quality Gates

```bash
npm run typecheck
npm run lint
npm run test
npm run test:e2e
```
