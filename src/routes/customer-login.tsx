import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/widgets/login-form";

export const Route = createFileRoute("/customer-login")({
  head: () => ({
    meta: [
      { title: "Customer Login — Mona Protect" },
      { name: "description", content: "Log in to your Mona Protect customer account." },
      { property: "og:title", content: "Customer Login — Mona Protect" },
      { property: "og:url", content: "/customer-login" },
    ],
    links: [{ rel: "canonical", href: "/customer-login" }],
  }),
  component: () => (
    <LoginForm
      kind="customer"
      title="Welcome Back"
      description="Log in to manage your protection, purchases and claims."
    />
  ),
});
