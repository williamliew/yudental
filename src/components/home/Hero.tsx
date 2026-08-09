import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[min(85vh,720px)] flex items-center text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-deep/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-[var(--max-width-content)] px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal">
          Quality · craftsmanship · New Zealand made
        </p>
        <h1
          id="hero-heading"
          className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl"
        >
          Yu Dental Laboratory
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
          Since 2000, Wellington Family Laboratory has been dedicated to crafting high-quality
          dental appliances right here in our lab. We serve both patients and referring clinicians,
          utilising materials that meet rigorous New Zealand and European standards. With an
          unwavering commitment to aesthetics, functionality, and reliable timelines, we ensure that
          your dental needs are met with excellence and transparency.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/book/" variant="primary">
            Book online
          </ButtonLink>
          <ButtonLink href="/contact/" variant="secondary">
            Let&apos;s chat
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
