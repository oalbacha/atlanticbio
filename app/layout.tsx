import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans, Oswald } from "next/font/google"

import "./globals.css"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

const heading = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: {
    default: "Atlantic BioGraphite",
    template: "%s | Atlantic BioGraphite",
  },
  description:
    "Atlantic BioGraphite is developing a low-carbon pathway to battery-grade graphite from sustainably sourced New Brunswick residues.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable} bg-background font-body text-foreground antialiased`}>
        <div className="page-texture pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
        <SiteHeader />
        <main className="mx-auto w-full max-w-7xl px-6 py-8 pb-16 lg:px-8 lg:py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
