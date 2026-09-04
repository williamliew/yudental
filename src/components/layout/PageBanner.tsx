import type { ReactNode } from "react";

const DEFAULT_BANNER_BACKGROUND =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=600&fit=crop";

type PageBannerProps = {
  title: string;
  tagline?: string;
  lead?: string;
  /** Path or URL for banner background; defaults to stock dental imagery. */
  backgroundImage?: string;
};

export function PageBanner({ title, tagline, lead, backgroundImage }: PageBannerProps) {
  const backgroundUrl = backgroundImage ?? DEFAULT_BANNER_BACKGROUND;
  const usesCustomBackground = Boolean(backgroundImage);

  return (
    <section
      className="relative overflow-hidden bg-navy-deep text-white"
      aria-labelledby="page-banner-heading"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          usesCustomBackground ? "opacity-45" : "opacity-35 grayscale"
        }`}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-deep/75" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--max-width-content)] px-4 py-14 text-center md:px-6 md:py-20">
        <h1
          id="page-banner-heading"
          className="font-sans text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          {title}
        </h1>
        {tagline && (
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90 md:text-xl">{tagline}</p>
        )}
        {lead && (
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/80">{lead}</p>
        )}
      </div>
    </section>
  );
}

type AccordionItemProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export function AccordionItem({ id, title, children }: AccordionItemProps) {
  return (
    <details id={id} className="group scroll-mt-28 border-b border-surface-muted last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <span className="text-teal transition-transform group-open:rotate-180" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="pb-5 text-grey-mid leading-relaxed [&_a]:font-semibold [&_a]:text-teal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-hover">
        {children}
      </div>
    </details>
  );
}
