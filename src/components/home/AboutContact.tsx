import { MapEmbed } from "@/components/layout/MapEmbed";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import Link from "next/link";

export function AboutTeaser() {
  return (
    <Section id="about" className="bg-navy text-white" ariaLabelledBy="about-heading">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 id="about-heading" className="font-display text-2xl font-bold md:text-3xl">
            About us
          </h2>
          <Link
            href="/about/"
            className="mt-4 inline-flex rounded border border-white/40 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-white/10"
          >
            Our story
          </Link>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Get to know us</h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            Established in 2000, Yu Dental Laboratory started as a small family business working
            from the basement of their home in the eastern suburbs of Wellington. Along with 50
            years of industry experience, our aim is to provide our clients and patients with
            quality New Zealand made dental appliances and comprehensive professional service.
          </p>
          <p className="mt-4 text-white/85 leading-relaxed">
            As a team, we are passionate about the art and skill of providing quality aesthetics,
            functionality &amp; phonetics made with materials that are certified to NZ and European
            standards. We deal with a full spectrum of complexity on a daily basis and no case is
            too difficult.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function TeamTeaser() {
  return (
    <Section id="team" ariaLabelledBy="team-heading">
      <h2 id="team-heading" className="font-display text-2xl font-bold text-navy md:text-3xl">
        Our team
      </h2>
      <p className="mt-4 max-w-3xl text-grey-mid">
        We are a close-knit laboratory family. Meet the team on the dedicated page; we focus on how
        we work together rather than long individual bios.
      </p>
      <p className="mt-6">
        <Link
          href="/team/"
          className="inline-flex rounded border border-navy px-5 py-2.5 text-sm font-semibold text-navy no-underline hover:bg-navy hover:text-white"
        >
          Our team
        </Link>
      </p>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" className="bg-surface-muted" ariaLabelledBy="contact-heading">
      <h2 id="contact-heading" className="font-display text-2xl font-bold text-navy md:text-3xl">
        Contact us
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-navy">Our address</h3>
          <p className="mt-2 text-grey-mid">
            {SITE.address.street}
            <br />
            {SITE.address.suburb}, {SITE.address.city}
          </p>
          <p className="mt-2 text-grey-mid">
            <strong>Tel:</strong>{" "}
            <a href={`tel:${SITE.phoneTel}`} className="font-semibold">
              {SITE.phone}
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Opening hours</h3>
          <p className="mt-2 text-grey-mid">{SITE.hours}</p>
          <p className="text-grey-mid">Saturday closed</p>
          <p className="text-grey-mid">Sunday closed</p>
        </div>
      </div>
      <div className="mt-8">
        <MapEmbed />
      </div>
    </Section>
  );
}
