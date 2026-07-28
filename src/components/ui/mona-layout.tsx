import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mona-container", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  bg = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "soft" | "blue" | "gradient" | "ink";
  id?: string;
}) {
  const bgClass =
    bg === "soft"
      ? "bg-[var(--color-bg-soft)]"
      : bg === "blue"
        ? "bg-[var(--color-bg-blue)]"
        : bg === "gradient"
          ? "text-white"
          : bg === "ink"
            ? "bg-[var(--color-ink)] text-white"
            : "bg-white";
  const style = bg === "gradient" ? { background: "var(--gradient-hero)" } : undefined;
  return (
    <section id={id} className={cn("mona-section", bgClass, className)} style={style}>
      <Container>{children}</Container>
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mona-card", className)}>{children}</div>;
}
