import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui/mona-layout";
import { CTABand } from "@/components/ui/cta-band";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Mona Protect" },
      {
        name: "description",
        content:
          "Frequently asked questions about Mona Protect smartphone protection, buy-with-protection and fix-with-protection.",
      },
      { property: "og:title", content: "FAQs — Mona Protect" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQs,
});

function FAQs() {
  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Everything you need to know about Mona Protect.
          </p>
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faqs.map((f) => (
            <details key={f.q} className="py-5 group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                {f.q}
                <span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[var(--color-text)]">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
