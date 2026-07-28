import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui/mona-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Mona Protect" },
      {
        name: "description",
        content: "Terms of service for Mona Protect and Mona Technologies Ltd.",
      },
      { property: "og:title", content: "Terms — Mona Protect" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <Section>
      <div className="max-w-3xl prose">
        <h1 className="text-4xl mb-6">Terms</h1>
        <p>
          Mona Technologies Ltd (RC 7480610) — a NAICOM-licensed Insurtech operating under the 2025
          Insurtech Guidelines and compliant with the Nigeria Data Protection Act 2023.
        </p>
        <h2 className="text-2xl mt-8 mb-3">Fair Usage & Repeated Claims</h2>
        <p>
          Coverage is subject to fair-usage principles. Repeated claims within a short period may
          trigger a review and, where appropriate, a reassessment of eligibility.
        </p>
        <h2 className="text-2xl mt-8 mb-3">Data Retention</h2>
        <p>
          We retain customer records for 10 years in line with regulatory obligations, unless a
          longer period is required by law.
        </p>
        <h2 className="text-2xl mt-8 mb-3">Contact</h2>
        <p>
          hello@monaprotect.com · Plot 502, Dalaba Street, Off Michael Okpara Way, Wuse Zone 5,
          Abuja.
        </p>
      </div>
    </Section>
  );
}
