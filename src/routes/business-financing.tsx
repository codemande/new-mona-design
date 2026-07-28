import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { submitBusinessFinancing } from "@/api/client";
import { Check } from "lucide-react";

export const Route = createFileRoute("/business-financing")({
  head: () => ({
    meta: [
      { title: "Business Financing — Mona Protect" },
      {
        name: "description",
        content:
          "Working capital and inventory financing for eligible Mona partner stores. Subject to assessment and approval.",
      },
      { property: "og:title", content: "Business Financing — Mona Protect" },
      { property: "og:url", content: "/business-financing" },
    ],
    links: [{ rel: "canonical", href: "/business-financing" }],
  }),
  component: BusinessFinancing,
});

const uses = [
  "Buy inventory in bulk",
  "Fund store upgrades",
  "Cover repair parts and tools",
  "Bridge working capital",
];

function BusinessFinancing() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({ business: "", contact: "", email: "", phone: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await submitBusinessFinancing(form);
    if (res.ok) setStatus("done");
  }

  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Business Financing for Device Retailers
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Fuel growth with financing designed for phone retailers and repair partners.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl mb-6">Possible uses</h2>
            <ul className="space-y-3">
              {uses.map((u) => (
                <li key={u} className="flex gap-3">
                  <Check className="text-[var(--color-success)] mt-1" size={18} /> {u}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-[var(--muted-foreground)]">
              Financing is subject to eligibility, assessment and approval. Terms provided at
              application.
            </p>
          </div>
          <Card>
            <h3 className="text-xl mb-4">Apply for business financing</h3>
            {status === "done" ? (
              <p className="text-[var(--color-success)] font-semibold">
                Thanks — our team will reach out.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                {(["business", "contact", "email", "phone"] as const).map((k) => (
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
                  {status === "sending" ? "Submitting…" : "Apply for Business Financing"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
}
