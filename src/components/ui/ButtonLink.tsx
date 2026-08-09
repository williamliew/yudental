import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "bg-teal text-white border border-teal hover:bg-teal-hover hover:border-teal-hover",
  secondary:
    "bg-white/10 text-white border border-white/40 hover:bg-white/20 hover:border-white/60",
  outline: "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded px-5 py-2.5 text-sm font-semibold no-underline transition-colors duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
