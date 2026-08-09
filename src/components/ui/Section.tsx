import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  ariaLabelledBy?: string;
};

export function Section({ id, className = "", children, ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-12 md:px-6 md:py-16 lg:py-20 ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="mx-auto max-w-[var(--max-width-content)]">{children}</div>
    </section>
  );
}
