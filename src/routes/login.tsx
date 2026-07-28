import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Card } from "@/components/ui/mona-layout";
import { User, Store } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Mona Protect" },
      { name: "description", content: "Choose your account type to log in — customer or partner." },
      { property: "og:title", content: "Log in — Mona Protect" },
      { property: "og:url", content: "/login" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: Login,
});

function Login() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl">Log in to Mona</h1>
        <p className="mt-3 text-[var(--color-text)]">Choose your account type.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Link to="/customer-login">
          <Card className="text-center hover:shadow-md transition-shadow h-full">
            <User size={40} className="mx-auto text-[var(--color-primary)] mb-4" />
            <h2 className="text-2xl mb-2">Customer Login</h2>
            <p className="text-sm text-[var(--color-text)]">
              Manage your protection, purchases and claims.
            </p>
          </Card>
        </Link>
        <Link to="/partner-login">
          <Card className="text-center hover:shadow-md transition-shadow h-full">
            <Store size={40} className="mx-auto text-[var(--color-primary)] mb-4" />
            <h2 className="text-2xl mb-2">Partner Login</h2>
            <p className="text-sm text-[var(--color-text)]">
              Access your partner tools and repair queue.
            </p>
          </Card>
        </Link>
      </div>
    </Section>
  );
}
