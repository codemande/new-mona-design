import { Section } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { waLink, waMessages } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

export function CTABand({
  heading = "Whatever Your Phone Needs, Start With Mona",
  primaryLabel = "Check Protection Price",
  primaryTo = "/protection-calculator",
  secondaryLabel = "Find a Partner Store",
  secondaryTo = "/partner-stores",
}: {
  heading?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <Section bg="gradient">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-8" style={{ color: "#fff" }}>
          {heading}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button as="link" to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          <Button
            as="link"
            to={secondaryTo}
            variant="secondary"
            className="!text-white !border-white hover:!bg-white/10"
          >
            {secondaryLabel}
          </Button>
          <Button
            as="a"
            href={waLink(waMessages.general)}
            variant="ghost"
            className="!text-white"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Continue on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
