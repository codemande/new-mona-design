import { MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/lib/wa";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Mona on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ background: "var(--color-success)", color: "#fff" }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
