import { SITE } from "@/lib/site";
import type { ReactNode } from "react";

export function WinzLink({ children }: { children: ReactNode }) {
  return (
    <a
      href={SITE.workAndIncomeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold no-underline hover:underline"
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
