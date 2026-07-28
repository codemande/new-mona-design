import { createFileRoute } from "@tanstack/react-router";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { CTABand } from "@/components/ui/cta-band";
import { Check, MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/wa";

export const Route = createFileRoute("/fix-now-get-protected-pay-later")({
  head: () => ({
    meta: [
      { title: "Fix Now, Get Protected & Pay Later — Mona Protect" },
      {
        name: "description",
        content:
          "Fix your damaged iPhone, Samsung Galaxy or Google Pixel at a Mona partner — spread the cost and get one-year protection after the repair.",
      },
      { property: "og:title", content: "Fix Now, Get Protected & Pay Later — Mona Protect" },
      { property: "og:url", content: "/fix-now-get-protected-pay-later" },
    ],
    links: [{ rel: "canonical", href: "/fix-now-get-protected-pay-later" }],
  }),
  component: FixPage,
});

const benefits = [
  {
    title: "Fix first, worry later",
    body: "Get your phone back to full working order without paying it all upfront.",
  },
  {
    title: "One-year protection after the fix",
    body: "Leave the store already covered against the next accident.",
  },
  { title: "Authorised partners only", body: "Repairs handled by verified Mona partner stores." },
  {
    title: "Clear, guided process",
    body: "Simple assessment, transparent decision and clear plan.",
  },
];

const steps = [
  "Visit a Mona repair partner",
  "Have your phone assessed",
  "Get a clear repair quote",
  "Complete a quick eligibility check",
  "Receive your approval decision",
  "Choose a payment plan",
  "Sign your paperwork",
  "Have your phone repaired",
  "Collect your device",
  "Enjoy one-year protection after the fix",
];

function FixPage() {
  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold" style={{ color: "#fff" }}>
            Fix Now, Get Protected & Pay Later
          </h1>
          <p className="mt-6 text-white/90 text-lg">
            Bring your damaged phone to a Mona partner. After assessment, we cover the repair on
            flexible terms and add one-year protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="link" to="/partner-stores" variant="primary">
              Find a Repair Partner
            </Button>
            <Button
              as="a"
              href={waLink(waMessages.fix())}
              variant="wa"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Continue on WhatsApp
            </Button>
          </div>
          <p className="mt-4 text-white/70 text-xs">
            Subject to eligibility, assessment and approval.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl mb-10">Why customers choose it</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <Card key={b.title}>
              <div className="flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Check size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{b.title}</h3>
                  <p className="text-sm text-[var(--color-text)]">{b.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <h2 className="text-3xl md:text-4xl mb-10">The 10-step journey</h2>
        <ol className="max-w-2xl space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4">
              <span
                className="shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-semibold"
                style={{ background: "var(--gradient-brand)" }}
              >
                {i + 1}
              </span>
              <span className="pt-1">{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <Card className="text-center">
          <h3 className="text-2xl mb-3">No Mona partner near you yet?</h3>
          <p className="text-[var(--color-text)] mb-5">
            Message us and we'll point you to the closest option.
          </p>
          <Button
            as="a"
            href={waLink(waMessages.fix())}
            variant="wa"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Chat with Mona
          </Button>
        </Card>
      </Section>

      <CTABand primaryLabel="Find a Repair Partner" primaryTo="/partner-stores" />
    </>
  );
}
