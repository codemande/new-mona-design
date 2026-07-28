import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { CTABand } from "@/components/ui/cta-band";
import { brands, slugify } from "@/data/devices";
import { Smartphone } from "lucide-react";

export const Route = createFileRoute("/supported-devices/")({
  head: () => ({
    meta: [
      { title: "Supported Devices — Mona Protect" },
      {
        name: "description",
        content:
          "Browse supported iPhone, Samsung Galaxy and Google Pixel models eligible for Mona Protect one-year smartphone protection.",
      },
      { property: "og:title", content: "Supported Devices — Mona Protect" },
      { property: "og:url", content: "/supported-devices" },
    ],
    links: [{ rel: "canonical", href: "/supported-devices" }],
  }),
  component: SupportedDevices,
});

function SupportedDevices() {
  const [tab, setTab] = useState(brands[0].id);
  const active = brands.find((b) => b.id === tab)!;
  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Supported Devices
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Eligible iPhone, Samsung Galaxy and Google Pixel models available for Mona Protect.
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[var(--color-border)]">
          {brands.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setTab(b.id)}
              className="px-5 py-3 text-sm font-semibold border-b-2 transition-colors"
              style={{
                color: tab === b.id ? "var(--color-primary)" : "var(--color-text)",
                borderColor: tab === b.id ? "var(--color-primary)" : "transparent",
              }}
            >
              {b.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.models.map((m) => (
            <Link
              key={m.model}
              to="/supported-devices/$brand/$model"
              params={{ brand: active.id, model: slugify(m.model) }}
              className="block"
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="text-[var(--color-primary)]" size={22} />
                  <h3 className="text-lg mb-0">{m.model}</h3>
                </div>
                <p className="text-sm text-[var(--muted-foreground)]">One-year protection from</p>
                <p className="mona-gradient-text text-2xl font-bold">₦{m.price.toLocaleString()}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand primaryLabel="Check Eligibility" primaryTo="/protection-calculator" />
    </>
  );
}
