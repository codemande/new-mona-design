import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDeviceBrands } from "@/api/client";
import type { Brand, DeviceModel } from "@/data/devices";
import { Button } from "@/components/ui/mona-button";
import { Card } from "@/components/ui/mona-layout";
import { waLink, waMessages } from "@/lib/wa";
import { Check, MessageCircle } from "lucide-react";

const included = [
  "Screen damage",
  "Liquid damage",
  "Back glass damage",
  "Other accidental damage",
  "Access to authorised repair partners",
];

export function ProtectionCalculator({ dense = false }: { dense?: boolean }) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [brandId, setBrandId] = useState<string>("");
  const [model, setModel] = useState<DeviceModel | null>(null);
  const [result, setResult] = useState<{ model: DeviceModel; brand: string } | null>(null);

  useEffect(() => {
    getDeviceBrands().then(setBrands);
  }, []);

  const brand = brands.find((b) => b.id === brandId);

  return (
    <Card className={dense ? "!p-6" : ""}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-[var(--color-ink)]">Select brand</span>
          <select
            value={brandId}
            onChange={(e) => {
              setBrandId(e.target.value);
              setModel(null);
              setResult(null);
            }}
            className="mt-2 w-full border border-[var(--color-border)] px-4 py-3 bg-white text-[var(--color-ink)]"
          >
            <option value="">— Choose brand —</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[var(--color-ink)]">Select model</span>
          <select
            disabled={!brand}
            value={model?.model ?? ""}
            onChange={(e) => {
              const m = brand?.models.find((mm) => mm.model === e.target.value) ?? null;
              setModel(m);
              setResult(null);
            }}
            className="mt-2 w-full border border-[var(--color-border)] px-4 py-3 bg-white text-[var(--color-ink)] disabled:opacity-50"
          >
            <option value="">— Choose model —</option>
            {brand?.models.map((m) => (
              <option key={m.model} value={m.model}>
                {m.model}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6">
        <Button
          onClick={() => model && brand && setResult({ model, brand: brand.name })}
          disabled={!model}
          variant="primary"
          className="disabled:opacity-50 disabled:hover:!scale-100"
        >
          See My Protection Price
        </Button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 p-6 border border-[var(--color-border)] bg-[var(--color-bg-soft)]"
          >
            <p className="mona-eyebrow">Your One-Year Protection Price</p>
            <p className="text-4xl md:text-5xl font-bold mt-2 mona-gradient-text">
              ₦{result.model.price.toLocaleString()}
            </p>
            <p className="text-sm text-[var(--color-text)] mt-1">
              {result.brand} · {result.model.model}
            </p>

            <ul className="mt-5 grid gap-2 md:grid-cols-2">
              {included.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 text-[var(--color-success)] shrink-0" />
                  {it}
                </li>
              ))}
            </ul>

            <p className="text-xs text-[var(--muted-foreground)] mt-4">
              Protection is subject to a quick device inspection and the applicable protection
              terms.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button as="link" to="/partner-stores" variant="primary">
                Choose a Partner Store
              </Button>
              <Button
                as="a"
                href={waLink(waMessages.protection(result.model.model))}
                target="_blank"
                rel="noreferrer"
                variant="wa"
              >
                <MessageCircle size={18} /> Continue on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
