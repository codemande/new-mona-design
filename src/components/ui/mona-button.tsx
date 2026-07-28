import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "wa" | "ghost";
type Size = "md" | "lg";

const classes = (variant: Variant, size: Size, extra?: string) =>
  cn(
    "mona-btn transition-transform active:scale-[0.97] hover:scale-[1.03]",
    variant === "primary" && "mona-btn-primary",
    variant === "secondary" && "mona-btn-secondary",
    variant === "wa" && "mona-btn-wa",
    variant === "ghost" && "mona-btn-ghost",
    size === "lg" && "text-lg px-7 py-4",
    extra,
  );

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (Common & { as?: "button" } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">)
  | (Common & { as: "link"; to: string; params?: Record<string, string> })
  | (Common & { as: "a"; href: string; target?: string; rel?: string });

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const cls = classes(variant, size, props.className);

  if (props.as === "link") {
    return (
      <Link to={props.to} params={props.params} className={cls}>
        {props.children}
      </Link>
    );
  }
  if (props.as === "a") {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={cls}>
        {props.children}
      </a>
    );
  }
  const {
    as: _as,
    variant: _v,
    size: _s,
    className: _c,
    children,
    ...rest
  } = props as Common & { as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
