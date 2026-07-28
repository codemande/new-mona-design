import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { submitContact } from "@/api/client";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/wa";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Mona Protect" },
      {
        name: "description",
        content:
          "Contact Mona Protect. Email, WhatsApp or phone — we're here to help throughout your ownership.",
      },
      { property: "og:title", content: "Support — Mona Protect" },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

function Support() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await submitContact(form);
      // Bug fix from prev site: only mark success after the request actually resolves ok.
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@monaprotect.com",
      href: "mailto:hello@monaprotect.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+234 704 810 0101",
      href: waLink(waMessages.general),
    },
    { icon: Phone, label: "Phone", value: "+234 704 810 0101", href: "tel:+2347048100101" },
  ];

  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Support
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            We're here throughout your ownership. Reach us the way that suits you.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contacts.map((c) => (
            <Card key={c.label} className="text-center">
              <c.icon className="mx-auto text-[var(--color-primary)] mb-3" />
              <p className="mona-eyebrow">{c.label}</p>
              <a href={c.href} className="mt-2 block font-semibold text-[var(--color-ink)]">
                {c.value}
              </a>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="text-2xl mb-4">Send us a message</h2>
          {status === "done" && (
            <p className="text-[var(--color-success)] font-semibold mb-3">
              Thanks — we've received your message.
            </p>
          )}
          {status === "error" && (
            <p className="text-[var(--color-danger)] font-semibold mb-3">
              Something went wrong. Please try again.
            </p>
          )}
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
            {(["name", "email", "subject"] as const).map((k) => (
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
            <label className="block md:col-span-2">
              <span className="text-xs font-semibold text-[var(--color-ink)]">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
              />
            </label>
            <div className="md:col-span-2">
              <Button disabled={status === "sending"} variant="primary">
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>
            </div>
          </form>
        </Card>
      </Section>
    </>
  );
}
