import { createFileRoute } from "@tanstack/react-router";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { CTABand } from "@/components/ui/cta-band";
import { Check, MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/wa";

export const Route = createFileRoute("/buy-now-get-protected-pay-later")({
  head: () => ({
    meta: [
      { title: "Buy Now, Get Protected & Pay Later — Mona Protect" },
      {
        name: "description",
        content:
          "Buy an eligible iPhone, Samsung Galaxy or Google Pixel at a Mona partner store with one-year protection included and flexible payments.",
      },
      { property: "og:title", content: "Buy Now, Get Protected & Pay Later — Mona Protect" },
      { property: "og:url", content: "/buy-now-get-protected-pay-later" },
    ],
    links: [{ rel: "canonical", href: "/buy-now-get-protected-pay-later" }],
  }),
  component: BuyPage,
});

const benefits = [
  {
    title: "Protection included",
    body: "Every eligible purchase includes one year of smartphone protection.",
  },
  {
    title: "Flexible payments",
    body: "Spread the cost of your new device with a plan that suits you.",
  },
  {
    title: "Verified partner stores",
    body: "Buy only from authorised Mona partners across Nigeria.",
  },
  {
    title: "Eligible top devices",
    body: "iPhone, Samsung Galaxy and Google Pixel — the phones people actually want.",
  },
];

const steps = [
  "Visit a participating Mona Partner Store",
  "Choose an eligible smartphone",
  "Share the basics for eligibility check",
  "Receive your approval decision",
  "Pick your payment plan",
  "Complete a quick device inspection",
  "Sign your paperwork",
  "Take the phone home",
  "Enjoy one-year protection from day one",
];

function BuyPage() {
  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold" style={{ color: "#fff" }}>
            Buy Now, Get Protected & Pay Later
          </h1>
          <p className="mt-6 text-white/90 text-lg">
            Take home an eligible iPhone, Samsung Galaxy or Google Pixel from a Mona Partner Store —
            with one-year protection included and flexible payments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="link" to="/partner-stores" variant="primary">
              Find a Participating Store
            </Button>
            <Button
              as="a"
              href={waLink(waMessages.buy())}
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
        <h2 className="text-3xl md:text-4xl mb-10">The 9-step journey</h2>
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
          <p className="text-[var(--color-text)] mb-5">Message us and we'll help you get set up.</p>
          <Button
            as="a"
            href={waLink(waMessages.buy())}
            variant="wa"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Chat with Mona
          </Button>
        </Card>
      </Section>

      <CTABand primaryLabel="Find a Participating Store" primaryTo="/partner-stores" />
    </>
  );
}
