import { expect, test } from "@playwright/test"

const routes = [
  "/",
  "/story",
  "/mission",
  "/culture",
  "/career",
  "/biographite",
  "/investors",
  "/contact",
]

test("all routes render heading content", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route)
    await expect(page.getByRole("heading").first()).toBeVisible()
  }
})

test("mobile menu is full-screen and highlights active page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/mission")

  await page.getByRole("button", { name: /open menu/i }).click()
  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()

  const viewportHeight = page.viewportSize()?.height ?? 0
  const box = await dialog.boundingBox()
  expect(box?.height ?? 0).toBeGreaterThanOrEqual(viewportHeight * 0.9)

  await expect(page.getByRole("link", { name: "Mission" }).first()).toHaveAttribute("aria-current", "page")
})

test("hero video exists with fallback poster", async ({ page }) => {
  await page.goto("/")

  const video = page.locator("video[aria-label='Atlantic BioGraphite background footage']")
  await expect(video).toBeVisible()
  await expect(video).toHaveAttribute("poster", "/media/wonderful-video-poster.jpg")
  await expect(page.locator("video source[type='video/mp4']")).toHaveAttribute("src", "/media/wonderful-video.mp4")
})

test("contact form validation and successful submit path", async ({ page }) => {
  await page.goto("/contact")

  await page.getByRole("button", { name: "Send Message" }).click()
  await expect(page.getByText("Please review the highlighted fields.")).toBeVisible()

  await page.getByLabel("Full Name").fill("Jordan Lee")
  await page.getByLabel("Work Email").fill("jordan@example.com")
  await page.getByLabel("Company").fill("Grid Materials")
  await page.getByLabel("Message").fill("We want to discuss pilot sample qualification in Q3 and potential offtake pathways.")

  await page.waitForTimeout(1300)
  await page.getByRole("button", { name: "Send Message" }).click()

  await expect(page.getByText("Thank you. Your inquiry has been submitted.")).toBeVisible()
})
