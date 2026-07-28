import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { getStores } from "@/api/client";
import type { Store } from "@/data/stores";
import { services as serviceOptions, nigerianStates, cities } from "@/data/stores";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { waLink } from "@/lib/wa";

export const Route = createFileRoute("/partner-stores/")({
  head: () => ({
    meta: [
      { title: "Partner Stores — Mona Protect" },
      {
        name: "description",
        content:
          "Find a Mona Partner Store for smartphone protection, purchases and repairs across Nigeria.",
      },
      { property: "og:title", content: "Partner Stores — Mona Protect" },
      { property: "og:url", content: "/partner-stores" },
    ],
    links: [{ rel: "canonical", href: "/partner-stores" }],
  }),
  component: PartnerStores,
});

function PartnerStores() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [query, setQuery] = useState("");
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    getStores({
      state: state || undefined,
      city: city || undefined,
      service: service || undefined,
      query: query || undefined,
    }).then(setStores);
  }, [state, city, service, query]);

  return (
    <>
      <Section bg="gradient">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold" style={{ color: "#fff" }}>
            Find a Mona Partner Store
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Protection, purchases and repairs — near you.
          </p>
        </div>
      </Section>

      <Section>
        <Card className="mb-8">
          <div className="grid gap-4 md:grid-cols-4">
            <label className="block">
              <span className="text-xs font-semibold text-[var(--color-ink)]">State</span>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
              >
                <option value="">All states</option>
                {nigerianStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-[var(--color-ink)]">City</span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
              >
                <option value="">All cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-[var(--color-ink)]">Service</span>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
              >
                <option value="">All services</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-[var(--color-ink)]">Store name</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
              />
            </label>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid gap-4">
            {stores.length === 0 ? (
              <Card className="text-center">
                <h3 className="text-xl mb-2">Mona Is Not Available in This City Yet</h3>
                <p className="text-[var(--color-text)] mb-4">
                  We're expanding — let us know where you are.
                </p>
                <Button
                  as="a"
                  href={waLink("Hello Mona, I'd like a partner store in my city.")}
                  variant="wa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> Chat With Mona
                </Button>
              </Card>
            ) : (
              stores.map((s) => (
                <Card key={s.id}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 shrink-0 bg-[var(--color-bg-blue)] flex items-center justify-center rounded-sm">
                      <MapPin className="text-[var(--color-primary)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{s.name}</h3>
                      <p className="text-sm text-[var(--color-text)]">
                        {s.address}, {s.city}, {s.state}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1 flex items-center gap-1">
                        <Clock size={12} /> {s.hours}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {s.services.map((sv) => (
                          <span
                            key={sv}
                            className="text-xs px-2 py-1 bg-[var(--color-bg-blue)] text-[var(--color-navy)] rounded-sm"
                          >
                            {sv}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <a
                          href={`tel:${s.phone}`}
                          className="mona-btn mona-btn-secondary !py-2 !text-sm"
                        >
                          <Phone size={14} /> Call
                        </a>
                        <a
                          href={waLink(`Hello Mona, I'm asking about ${s.name}.`)}
                          target="_blank"
                          rel="noreferrer"
                          className="mona-btn mona-btn-wa !py-2 !text-sm"
                        >
                          <MessageCircle size={14} /> WhatsApp
                        </a>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(s.address + " " + s.city)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mona-btn mona-btn-secondary !py-2 !text-sm"
                        >
                          <Navigation size={14} /> Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
          <div>
            <Card>
              <div className="aspect-square bg-[var(--color-bg-soft)] flex items-center justify-center text-[var(--muted-foreground)]">
                <MapPin size={40} />
              </div>
              <p className="mt-4 text-xs text-[var(--muted-foreground)] text-center">
                Map preview (placeholder)
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
