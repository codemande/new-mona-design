import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { CTABand } from "@/components/ui/cta-band";
import { findBrand, findModel, slugify } from "@/data/devices";
import { faqs } from "@/data/faqs";
import { Check, MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/wa";

export const Route = createFileRoute("/supported-devices/$brand/$model")({
  loader: ({ params }) => {
    const brand = findBrand(params.brand);
    const model = findModel(params.brand, params.model);
    if (!brand || !model) throw notFound();
    return { brand, model };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Device not found — Mona Protect" },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${loaderData.model.model} Protection — Mona Protect`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `One-year protection for ${loaderData.model.model} from ₦${loaderData.model.price.toLocaleString()}. Eligible for Mona Protect.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:url",
          content: `/supported-devices/${slugify(loaderData.brand.id)}/${slugify(loaderData.model.model)}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `/supported-devices/${loaderData.brand.id}/${slugify(loaderData.model.model)}`,
        },
      ],
    };
  },
  component: ModelDetail,
});

function ModelDetail() {
  const { brand, model } = Route.useLoaderData();
  const related = brand.models
    .filter((m: { model: string; price: number }) => m.model !== model.model)
    .slice(0, 3);
  return (
    <>
      <Section bg="gradient">
        <p className="text-white/80 text-sm mb-3">{brand.name}</p>
        <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
          {model.model}
        </h1>
        <p className="mt-3 text-white/85">One-year Mona Protection from</p>
        <p className="text-4xl md:text-5xl text-white font-bold mt-1" style={{ color: "#fff" }}>
          ₦{model.price.toLocaleString()}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button as="link" to="/protection-calculator" variant="primary">
            Check Eligibility
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
            href={waLink(waMessages.protection(model.model))}
            variant="wa"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Continue on WhatsApp
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-2xl mb-4">Coverage summary</h2>
            <ul className="space-y-2">
              {[
                "Screen damage",
                "Liquid damage",
                "Back glass damage",
                "Other accidental damage",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <Check size={16} className="text-[var(--color-success)]" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Requires a quick device inspection at a Mona Partner Store before activation.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl mb-4">Available Mona services</h2>
            <ul className="space-y-2">
              <li>Smartphone Protection</li>
              <li>Buy Now, Get Protected & Pay Later</li>
              <li>Fix Now, Get Protected & Pay Later</li>
            </ul>
          </Card>
        </div>
      </Section>

      {related.length > 0 && (
        <Section bg="soft">
          <h2 className="text-2xl mb-6">Related {brand.name} models</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {related.map((m: { model: string; price: number }) => (
              <Link
                key={m.model}
                to="/supported-devices/$brand/$model"
                params={{ brand: brand.id, model: slugify(m.model) }}
              >
                <Card>
                  <h3 className="text-lg">{m.model}</h3>
                  <p className="mona-gradient-text text-xl font-bold mt-2">
                    ₦{m.price.toLocaleString()}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <h2 className="text-2xl mb-6">FAQ</h2>
        <div className="max-w-3xl divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faqs.slice(0, 4).map((f) => (
            <details key={f.q} className="py-4">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm text-[var(--color-text)]">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTABand primaryLabel="Check Eligibility" primaryTo="/protection-calculator" />
    </>
  );
}
