import { createFileRoute } from "@tanstack/react-router";
import { ProtectionPage } from "./phone-protection";

export const Route = createFileRoute("/phone-insurance-nigeria")({
  head: () => ({
    meta: [
      { title: "Phone Insurance in Nigeria — Mona Protect" },
      {
        name: "description",
        content:
          "Phone insurance alternative in Nigeria. One-year protection against accidental damage for eligible iPhone, Samsung Galaxy and Google Pixel devices.",
      },
      { property: "og:title", content: "Phone Insurance in Nigeria — Mona Protect" },
      { property: "og:url", content: "/phone-insurance-nigeria" },
    ],
    links: [{ rel: "canonical", href: "/phone-insurance-nigeria" }],
  }),
  component: () => <ProtectionPage h1="Phone Insurance in Nigeria, Reinvented" />,
});
