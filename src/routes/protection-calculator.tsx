import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui/mona-layout";
import { ProtectionCalculator } from "@/components/widgets/protection-calculator";
import { CTABand } from "@/components/ui/cta-band";

export const Route = createFileRoute("/protection-calculator")({
  head: () => ({
    meta: [
      { title: "Protection Calculator — Mona Protect" },
      {
        name: "description",
        content:
          "Get your one-year smartphone protection price. Just brand and model — no storage, condition or value questions.",
      },
      { property: "og:title", content: "Protection Calculator — Mona Protect" },
      { property: "og:url", content: "/protection-calculator" },
    ],
    links: [{ rel: "canonical", href: "/protection-calculator" }],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Get Your One-Year Protection Price
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Just pick your brand and model. No storage, condition or value questions.
          </p>
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl mx-auto">
          <ProtectionCalculator />
        </div>
      </Section>
      <CTABand />
    </>
  );
}
