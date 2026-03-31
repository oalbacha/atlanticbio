import { type Metadata } from "next"

import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Atlantic BioGraphite for partnerships, media, and project inquiries.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center justify-center">
      <section className="w-full">
        <ContactForm />
      </section>
    </div>
  )
}
