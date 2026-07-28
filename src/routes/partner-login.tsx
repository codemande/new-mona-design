import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/widgets/login-form";

export const Route = createFileRoute("/partner-login")({
  head: () => ({
    meta: [
      { title: "Partner Login — Mona Protect" },
      { name: "description", content: "Log in to your Mona Protect partner store account." },
      { property: "og:title", content: "Partner Login — Mona Protect" },
      { property: "og:url", content: "/partner-login" },
    ],
    links: [{ rel: "canonical", href: "/partner-login" }],
  }),
  component: () => (
    <LoginForm
      kind="partner"
      title="Welcome Back"
      description="Log in to access your partner tools and repair queue."
    />
  ),
});
