import { SiteHero } from "@/components/site-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const governanceStages = [
  {
    title: "Stage 1: Founder-led operating rhythm",
    copy: "A placeholder model describing founder-led execution with quarterly decision gates and documented accountability.",
  },
  {
    title: "Stage 2: Independent technical oversight",
    copy: "A placeholder model that introduces independent technical and industry review to de-risk qualification and scaling decisions.",
  },
  {
    title: "Stage 3: Full board governance and ESG reporting",
    copy: "A placeholder model for expanded board governance, formal ESG oversight, and repeatable reporting cadence.",
  },
];

export default function GovernanceModelPage() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <SiteHero title="Governance Model" ctaLabel="" ctaHref="" />

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Governance Model"
          title="Phased oversight"
          intro="This page is currently using placeholder content. Replace these sections with your final governance details."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {governanceStages.map((stage) => (
            <Card key={stage.title} className="border-border/80 bg-card/70">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-2xl">{stage.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  {stage.copy}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Accountability"
          title="Decision records and reporting cadence"
          intro="Placeholder guidance for how decisions are documented and how reporting is scheduled for stakeholders."
        />

        <div className="grid gap-4">
          <p className="rounded-2xl border border-border/80 bg-card/70 p-6 text-sm leading-7 text-muted-foreground">
            1) Capture key assumptions, evidence, and go/no-go criteria for each
            milestone.
            <br />
            2) Maintain a repeatable reporting cadence (quarterly operational
            updates, annual sustainability reporting).
            <br />
            3) Ensure escalation paths exist for technical quality, safety, and
            supply-chain risks.
          </p>
        </div>
      </section>
    </div>
  );
}
