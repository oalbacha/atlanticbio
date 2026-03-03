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
- `/mission`
- `/culture`
- `/career`
- `/biographite`
- `/investors`
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
INVESTORS_EMAIL_TO=
CAREERS_EMAIL_TO=
DISABLE_EMAIL_DELIVERY=false
```

Set `DISABLE_EMAIL_DELIVERY=true` for local testing without sending emails.

## Quality Gates

```bash
npm run typecheck
npm run lint
npm run test
npm run test:e2e
```
