import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui/mona-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Mona Protect" },
      {
        name: "description",
        content:
          "Privacy notice for Mona Protect, compliant with the Nigeria Data Protection Act 2023.",
      },
      { property: "og:title", content: "Privacy — Mona Protect" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Section>
      <div className="max-w-3xl prose">
        <h1 className="text-4xl mb-6">Privacy Notice</h1>
        <p>
          Mona Technologies Ltd processes personal data in accordance with the Nigeria Data
          Protection Act 2023.
        </p>
        <h2 className="text-2xl mt-8 mb-3">Data Protection Officer</h2>
        <p>
          Contact our DPO at dpo@monaprotect.com for any privacy-related requests, including access,
          correction and deletion.
        </p>
        <h2 className="text-2xl mt-8 mb-3">Retention</h2>
        <p>
          Personal data is retained for the period required by law and by our regulatory obligations
          (up to 10 years).
        </p>
      </div>
    </Section>
  );
}
