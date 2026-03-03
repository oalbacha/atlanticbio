import { type Metadata } from "next"
import Link from "next/link"

import { ContactForm } from "@/components/forms/contact-form"
import { PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"

const channels = [
  {
    title: "General inquiries",
    detail: "Use the form for project, partnership, media, and ecosystem collaboration requests.",
  },
  {
    title: "Investor relations",
    detail: "For strategic or financial engagement, submit a dedicated investor inquiry.",
  },
  {
    title: "Careers",
    detail: "For role interest and talent pipeline conversations, use the career inquiry route.",
  },
]

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Atlantic BioGraphite for partnerships, investor relations, and project inquiries.",
}

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <PageHero
        label="Contact"
        title="Start a conversation with Atlantic BioGraphite"
        intro="We engage with customers, partners, investors, and talent aligned with low-carbon, regionally resilient battery-material supply chains."
      />

      <section className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-7">
          <SectionHeading
            eyebrow="Contact Channels"
            title="Choose the right path"
            intro="All submissions are routed through validated workflows. Placeholder destinations are configured through environment variables."
          />
          <div className="grid gap-4">
            {channels.map((channel) => (
              <article key={channel.title} className="rounded-2xl border border-border/80 bg-card/70 p-5">
                <h2 className="text-xl">{channel.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{channel.detail}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/investors">Investor Inquiry</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/career">Career Inquiry</Link>
            </Button>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  )
}
