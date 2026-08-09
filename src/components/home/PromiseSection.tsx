import { Section } from "@/components/ui/Section";

const SERVICES = [
  "Full and partial dentures",
  "Cobalt chrome framework",
  "Relines, repairs and additions",
  "Implant overdenture / implant bar-retained prosthetics",
  "Sports mouthguards",
  "MSD sleep apnoea devices",
  "Bruxism / TMJ splints",
  "Whitening trays",
  "Denture cleaning",
  "Rest home services",
] as const;

export function PromiseSection() {
  return (
    <Section ariaLabelledBy="promise-heading">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div>
          <h2
            id="promise-heading"
            className="font-display text-2xl font-bold text-navy md:text-3xl"
          >
            Our promise
          </h2>
          <p className="mt-4 text-grey-mid leading-relaxed">
            We combine craftsmanship with modern materials so every appliance looks natural, feels
            stable and supports clear speech. Whether you are a patient or a referring clinician,
            you get the same careful technical standards.
          </p>
        </div>
        <div
          className="min-h-48 rounded-lg bg-cover bg-center lg:min-h-64"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop)",
          }}
          role="img"
          aria-label="Modern dental laboratory environment"
        />
        <div>
          <h3 className="font-display text-xl font-bold text-navy">Services</h3>
          <ul className="mt-4 space-y-2 text-grey-mid">
            {SERVICES.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-teal" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
