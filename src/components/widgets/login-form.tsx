import { useState } from "react";
import { Section, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { mockLogin } from "@/api/client";

export function LoginForm({
  kind,
  title,
  description,
}: {
  kind: "customer" | "partner";
  title: string;
  description: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: wire real auth
      const res = await mockLogin(kind, email);
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section>
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl mb-2">{title}</h1>
        <p className="text-[var(--color-text)] mb-8">{description}</p>
        <Card>
          {status === "done" ? (
            <div>
              <p className="text-[var(--color-success)] font-semibold text-lg mb-2">
                You're signed in.
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                (Mock success — real auth to be wired in.)
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="text-xs font-semibold text-[var(--color-ink)]">Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-[var(--color-ink)]">Password</span>
                <input
                  required
                  type="password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full border border-[var(--color-border)] px-3 py-2 bg-white"
                />
              </label>
              {status === "error" && (
                <p className="text-[var(--color-danger)] text-sm">
                  Couldn't sign you in. Try again.
                </p>
              )}
              <Button disabled={status === "sending"} variant="primary" className="w-full">
                {status === "sending" ? "Signing in…" : "Log in"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}
