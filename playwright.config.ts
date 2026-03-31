import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: "http://127.0.0.1:3010",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 3010",
    url: "http://127.0.0.1:3010",
    reuseExistingServer: !process.env.CI,
    env: {
      DISABLE_EMAIL_DELIVERY: "true",
      RESEND_FROM_EMAIL: "Atlantic BioGraphite <no-reply@example.com>",
      CONTACT_EMAIL_TO: "contact@example.com",
      RESEND_API_KEY: "re_test_key",
      NEXT_PUBLIC_SKIP_RECAPTCHA: "true",
      SKIP_RECAPTCHA_VERIFICATION: "true",
    },
  },
})
