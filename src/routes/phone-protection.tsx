import { createFileRoute } from "@tanstack/react-router";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { CTABand } from "@/components/ui/cta-band";
import { Check, X, MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/wa";

export const Route = createFileRoute("/phone-protection")({
  head: () => ({
    meta: [
      { title: "Smartphone Protection in Nigeria — Mona Protect" },
      {
        name: "description",
        content:
          "One-year smartphone protection for eligible iPhone, Samsung Galaxy and Google Pixel devices. Covers screen, liquid, back glass and other accidental damage.",
      },
      { property: "og:title", content: "Smartphone Protection in Nigeria — Mona Protect" },
      { property: "og:url", content: "/phone-protection" },
    ],
    links: [{ rel: "canonical", href: "/phone-protection" }],
  }),
  component: PhoneProtection,
});

function PhoneProtection() {
  return <ProtectionPage h1="Smartphone Protection in Nigeria" />;
}

export function ProtectionPage({ h1 }: { h1: string }) {
  const covered = [
    {
      title: "Screen Damage",
      body: "Cracked or shattered screens repaired through authorised partners.",
    },
    { title: "Liquid Damage", body: "Accidental spills and splash damage covered under the plan." },
    { title: "Back Glass Damage", body: "Rear panel breakage is included in your one-year plan." },
    {
      title: "Other Accidental Damage",
      body: "Ports, buttons and other components damaged in accidents.",
    },
  ];
  const notCovered = [
    "Theft",
    "Loss",
    "Wear & tear",
    "Battery degradation",
    "Intentional damage",
    "Software faults",
  ];
  const steps = [
    "Choose your brand and model",
    "See your one-year protection price",
    "Book a Mona Partner Store",
    "Bring your phone for a quick inspection",
    "Approve the plan and pay",
    "Get your protection certificate",
    "Enjoy a full year of coverage",
  ];
  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold" style={{ color: "#fff" }}>
            {h1}
          </h1>
          <p className="mt-6 text-white/90 text-lg">
            One-year smartphone protection for eligible iPhone, Samsung Galaxy and Google Pixel
            devices. Simple, single-price cover — subject to a quick inspection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="link" to="/protection-calculator" variant="primary">
              Check Protection Price
            </Button>
            <Button
              as="link"
              to="/partner-stores"
              variant="secondary"
              className="!text-white !border-white hover:!bg-white/10"
            >
              Find a Partner Store
            </Button>
            <Button
              as="a"
              href={waLink(waMessages.protection())}
              variant="wa"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Continue on WhatsApp
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl mb-10">What Does Mona Protect?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {covered.map((c) => (
            <Card key={c.title}>
              <h3 className="text-xl mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--color-text)]">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="soft">
        <h2 className="text-3xl md:text-4xl mb-8">What's Not Covered</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
          {notCovered.map((n) => (
            <li key={n} className="flex items-center gap-2 text-[var(--color-text)]">
              <X size={16} className="text-[var(--color-danger)]" /> {n}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl mb-10">How to Protect Your Phone</h2>
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
        <div className="mt-10 flex flex-wrap gap-3">
          <Button as="link" to="/protection-calculator" variant="primary">
            Check Protection Price
          </Button>
          <Button as="link" to="/partner-stores" variant="secondary">
            Find a Partner Store
          </Button>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
