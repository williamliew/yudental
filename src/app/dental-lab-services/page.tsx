import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Dental laboratory for dentists NZ",
  description:
    "Crown, bridge and implant lab services for referring Wellington and New Zealand dental practices.",
  path: "/dental-lab-services/",
});

const LAB_SERVICES = [
  "Full/full and partial denture (Treatment/ Dental Services)",
  "Implant retained overdenture",
  "Implant bar retained overdenture",
  "Precision attachment dentures",
  "Gold Onlay for dentures",
  "Surgical Guides/Stents",
  "Radiographic Guide",
  "Essex Retainer / With Pontic",
  "Cobalt chrome framework",
  "Welding retention",
  "Repairs, relines, additions",
  "Bruxism splints (hard and soft / NTI)",
  "Mouth guards",
  "Orthodontic retainers",
  "Bleaching trays",
  "MDSA Sleep apnoea device",
  "Gold veneer for denture tooth",
] as const;

const ACCEPTED_SCANNERS = ["3Shape", "Dentsply Sirona", "iTero"] as const;

const LAB_PARTNER_EMAIL = "yudlab@gmail.com";

export default function DentalLabServicesPage() {
  return (
    <>
      <PageBanner
        title="For dentists"
        tagline="Crown, bridge & implant work for referring practices."
      />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="lab-welcome-title">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="lab-welcome-title"
            className="font-display text-2xl font-bold text-navy md:text-3xl"
          >
            Welcome to the dental lab!
          </h2>
          <p className="mt-4 text-lg text-grey-mid leading-relaxed">
            At Yu Dental Laboratory, we focus on creating high-quality aesthetic dental appliances
            designed for dental practices across New Zealand. Whether you need a single tooth
            replacement or a complete denture, we prioritise precision and care in every product we
            deliver. Based in Wellington, we provide nationwide courier services to collaborate
            effectively with dental professionals throughout the country.
          </p>
          <div className="mt-6 space-y-4 text-grey-mid leading-relaxed">
            <p>
              Our approach is all about teamwork, involving you from the first discussion of the
              case to the final delivery. This ensures that our results not only align with your
              standards but also surpass your patients&apos; expectations.
            </p>
            <p>
              We proudly handle both removable implant solutions, including overdentures and implant
              bar retainers, using materials that comply with New Zealand and European standards.
            </p>
            <p>
              Additionally, we are fully equipped for digital workflows and can easily accept
              digital scans directly from your practice, streamlining the entire process. Choose Yu
              Dental Laboratory for your dental appliance needs and witness the enhanced quality and
              service we offer to your practice.
            </p>
          </div>
          <div
            className="mt-10 rounded-lg bg-surface-muted p-6"
            aria-labelledby="accepted-scanners-heading"
          >
            <h3 id="accepted-scanners-heading" className="font-display text-xl font-bold text-navy">
              Accepted scanners
            </h3>
            <p className="mt-4 text-grey-mid">{ACCEPTED_SCANNERS.join(" · ")}</p>
            <p className="mt-4 text-grey-mid leading-relaxed">
              If you would like to partner with us, you can add us via our email,{" "}
              <a href={`mailto:${LAB_PARTNER_EMAIL}`}>{LAB_PARTNER_EMAIL}</a>, through your
              acquisition software. Once added, it will be as simple as a few clicks for the case to
              be sent.
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-surface-muted px-4 py-12 md:px-6 md:py-16"
        aria-labelledby="lab-promise-heading"
      >
        <div className="mx-auto grid max-w-[var(--max-width-content)] gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 id="lab-promise-heading" className="font-display text-xl font-bold text-navy">
                Our promise
              </h2>
              <p className="mt-4 text-grey-mid leading-relaxed">
                We combine skilled workmanship with modern materials to create appliances that look
                natural, feel stable, and help you communicate clearly. Whether you are a patient or
                a referring clinician, you can count on our high technical standards.
              </p>
            </div>
            <div
              className="min-h-48 rounded-lg bg-cover bg-center"
              role="img"
              aria-label="Modern dental laboratory interior"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop)",
              }}
            />
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2
              id="lab-denture-services-heading"
              className="font-display text-xl font-bold text-navy"
            >
              Denture services
            </h2>
            <ul className="mt-4 space-y-2 text-grey-mid">
              {LAB_SERVICES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-teal" aria-hidden="true">
                    •
                  </span>
                  <span>
                    {item.includes("Treatment") ? (
                      <>
                        Full/full and partial denture (
                        <Link href="/denture-services/">Treatment/ Dental Services</Link>)
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="process-heading">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="process-heading"
            className="font-display text-2xl font-bold text-navy md:text-3xl"
          >
            The process
          </h2>
          <p className="mt-3 text-grey-mid">
            We offer a nationwide delivery service to and from your practice.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div
                className="h-32 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop)",
                }}
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy">Lab prescription form</h3>
                <p className="mt-3 text-sm text-grey-mid">
                  Download our lab prescription form (PDF) and include it with your case.
                </p>
                <p className="mt-2 text-sm">
                  <Link href="/contact/">Request a form / contact us</Link>
                </p>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div
                className="h-32 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop)",
                }}
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy">Turnaround time</h3>
                <p className="mt-3 text-sm text-grey-mid">
                  Indicative timings from start to finish (confirm at handover):
                </p>
                <ul className="mt-2 space-y-1 text-sm text-grey-mid">
                  <li>Full / full: 10–12 working days</li>
                  <li>Simple partial: 5 working days</li>
                  <li>Cobalt chromium framework: 12 working days</li>
                  <li>Bite blocks / special trays: 3 working days</li>
                  <li>Bruxism splints: 5 working days</li>
                </ul>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div
                className="h-32 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop)",
                }}
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy">Delivery</h3>
                <p className="mt-3 text-sm text-grey-mid">
                  Please allow an extra day for our overnight courier service to avoid delivery
                  delays.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
