import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { Check } from "lucide-react";
import { submitPartnerApplication } from "@/api/client";

export const Route = createFileRoute("/become-a-partner")({
  head: () => ({
    meta: [
      { title: "Become a Mona Partner Store — Mona Protect" },
      {
        name: "description",
        content:
          "Grow your business with Mona. Bring protection, purchases and repairs to your customers.",
      },
      { property: "og:title", content: "Become a Mona Partner Store" },
      { property: "og:url", content: "/become-a-partner" },
    ],
    links: [{ rel: "canonical", href: "/become-a-partner" }],
  }),
  component: Partner,
});

const benefits = [
  "Attract more customers with premium services",
  "Offer flexible payment plans to your buyers",
  "Add smartphone protection to every sale",
  "Get onboarding and training from Mona",
  "Access to authorised repair workflows",
  "Ongoing partner support",
];

function Partner() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({ store: "", contact: "", email: "", phone: "", city: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await submitPartnerApplication(form);
    if (res.ok) setStatus("done");
  }

  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Grow Your Business With Mona
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Join the Mona partner network and offer protection, purchases and repairs to your
            customers.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl mb-6">Partner benefits</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="text-[var(--color-success)] mt-1 shrink-0" size={18} /> {b}
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <h3 className="text-xl mb-4">Apply to become a partner</h3>
            {status === "done" ? (
              <p className="text-[var(--color-success)] font-semibold">
                Thanks — we'll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                {(["store", "contact", "email", "phone", "city"] as const).map((k) => (
                  <label key={k} className="block">
                    <span className="text-xs font-semibold capitalize text-[var(--color-ink)]">
                      {k}
                    </span>
                    <input
                      required
                      type={k === "email" ? "email" : "text"}
                      value={form[k]}
                      onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                      className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
                    />
                  </label>
                ))}
                <Button disabled={status === "sending"} variant="primary" className="w-full">
                  {status === "sending" ? "Submitting…" : "Apply to Become a Partner"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
}
