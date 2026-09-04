import { PromiseSection } from "@/components/dental-lab/PromiseSection";
import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Dental laboratory for dentists NZ",
  description:
    "Crown, bridge and implant lab services for referring Wellington and New Zealand dental practices.",
  path: "/dental-lab-services/",
});

const LAB_SERVICES = [
  "Full/Full and Partial Denture",
  "Implant Retained Overdenture",
  "Implant Bar Retained Overdenture",
  "Precision Attachment Dentures",
  "Gold Onlay For Dentures",
  "Surgical Guides/Stents",
  "Radiographic Guide",
  "Essex Retainer / With Pontic",
  "Cobalt Chrome Framework",
  "Welding Retention",
  "Repairs, Relines, Additions",
  "Bruxism Splints (Hard and Soft / NTI)",
  "Mouth Guards",
  "Orthodontic Retainers",
  "Bleaching Trays",
  "MDSA Sleep Apnoea Device",
  "Gold Veneer For Denture Tooth",
] as const;

const ACCEPTED_SCANNERS = ["3Shape", "Dentsply Sirona", "iTero"] as const;

const LAB_PARTNER_EMAIL = "yudlab@gmail.com";

export default function DentalLabServicesPage() {
  return (
    <>
      <PageBanner
        title="For Dentists"
        tagline="Dental appliances and services for referring practices."
        backgroundImage="/images/for-dentists.jpg"
      />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="lab-welcome-title">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="lab-welcome-title"
            className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
          >
            Welcome to the Dental Laboratory
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
            className="mt-10 overflow-hidden rounded-lg border border-surface-muted bg-white"
            aria-labelledby="accepted-scanners-heading"
          >
            <div className="flex flex-col md:flex-row">
              <div className="shrink-0 border-b border-surface-muted bg-white p-4 md:w-72 md:border-r md:border-b-0 lg:w-80 lg:p-6">
                <Image
                  src="/images/digital-scans/digitally-accepted-scans-workflow.jpg"
                  alt="Digitally accepted scans from dentist to lab via email: dentist workstation, STL file transfer, and dental lab workstation"
                  width={1024}
                  height={1024}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center p-6 md:p-8">
                <h3
                  id="accepted-scanners-heading"
                  className="font-sans text-xl font-bold text-navy md:text-2xl"
                >
                  Accepted Scanners
                </h3>
                <p className="mt-4 text-grey-mid">{ACCEPTED_SCANNERS.join(" · ")}</p>
                <p className="mt-4 text-grey-mid leading-relaxed">
                  If you would like to partner with us, you can add us via our email,{" "}
                  <a href={`mailto:${LAB_PARTNER_EMAIL}`}>{LAB_PARTNER_EMAIL}</a>, through your
                  acquisition software. Once added, it will be as simple as a few clicks for the
                  case to be sent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromiseSection servicesTitle="Dental Laboratory Services" services={LAB_SERVICES} />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="process-heading">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="process-heading"
            className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
          >
            The Process
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-40 overflow-hidden bg-surface-muted md:h-44">
                <Image
                  src="/images/lab-prescription-form.png"
                  alt="Yu Dental Laboratory lab prescription form"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-bold text-navy">Lab Prescription Form</h3>
                <p className="mt-3 text-sm text-grey-mid">
                  Download our lab prescription form (PDF) and include it with your case.
                </p>
                <p className="mt-2 text-sm">
                  <a
                    href="/downloads/lab-prescription-form.pdf"
                    download="Yu-Dental-Lab-Prescription-Form.pdf"
                  >
                    Download lab prescription form (PDF)
                  </a>
                </p>
                <p className="mt-2 text-sm">
                  <Link href="/contact/">Request a form / contact us</Link>
                </p>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-40 overflow-hidden bg-surface-muted md:h-44">
                <Image
                  src="/images/turnaround-time.png"
                  alt="Turnaround time for dental laboratory cases"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-bold text-navy">Turnaround Time</h3>
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
                <p className="mt-4 text-sm text-grey-mid">
                  The turnaround time is subject to change and serves as a general guideline only.
                </p>
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
                <h3 className="font-sans text-lg font-bold text-navy">Delivery</h3>
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
