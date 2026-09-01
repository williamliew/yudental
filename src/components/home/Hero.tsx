import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/lib/site";

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
      <div className="surface-dark relative mx-auto max-w-[var(--max-width-content)] px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-on-dark">
          Quality · craftsmanship · New Zealand made
        </p>
        <h1
          id="hero-heading"
          className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl"
        >
          Dentures, relines &amp; repairs in Wellington
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
          Family-run dental laboratory and denture clinic in Te Aro. We make NZ-made dentures,
          relines and repairs on site, and provide lab services for referring dentists across
          Wellington and New Zealand. Book a consultation online or call us during clinic hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/book/" variant="primary">
            Book online
          </ButtonLink>
          <ButtonLink href={`tel:${SITE.phoneTel}`} variant="secondary">
            Call {SITE.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
