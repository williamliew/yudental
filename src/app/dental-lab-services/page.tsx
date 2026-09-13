import { PromiseSection } from "@/components/dental-lab/PromiseSection";
import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Dental laboratory for dentists NZ",
  description:
    "Crown, bridge and implant lab services for referring Wellington and New Zealand dental practices.",
  path: "/dental-lab-services/",
});

const LAB_SERVICE_CATEGORIES = [
  {
    title: "Dentures & Removable Prosthetics",
    items: [
      "Full & Partial Dentures",
      "Full & Partial Immediate Dentures",
      "Precision Attachment Dentures",
      "Cobalt Chrome Frameworks",
      "Repairs, Relines & Additions",
    ],
  },
  {
    title: "Implant Prosthetics",
    items: ["Implant-Retained Overdentures", "Implant Bar-Retained Overdentures"],
  },
  {
    title: "Splints, Trays & Retainers",
    items: [
      "Bruxism Splints",
      "Sports Mouthguards",
      "Orthodontic Retainers",
      "Bleaching Trays",
      "Essix Retainers / Pontics",
      "MDSA Sleep Apnoea Devices",
    ],
  },
  {
    title: "Specialised Laboratory Services",
    items: [
      "Surgical Guides / Stents",
      "Radiographic Guides",
      "Gold Onlays / veneers for denture teeth",
      "Welding / Retention",
    ],
  },
] as const;

const LAB_PRESCRIPTION_PDF = "/downloads/Yu_Dental_Laboratory_Job_Sheet.pdf";

const ACCEPTED_SCANNERS = [
  { label: "3Shape TRIOS®", href: "/dental-lab-services/3shape-trios/" },
  { label: "iTero®", href: "/dental-lab-services/itero/" },
  { label: "Dentsply Sirona®", href: "/dental-lab-services/dentsply-sirona/" },
] as const;

const LAB_PARTNER_EMAIL = "yudlab@gmail.com";

export default function DentalLabServicesPage() {
  return (
    <>
      <PageBanner
        title="For Dentists"
        tagline="Quality dental laboratory services for referring practices, with local craftsmanship and direct communication on every case."
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/denture-referrals/" className="uppercase tracking-wide">
              Refer a patient
            </ButtonLink>
            <a
              href={LAB_PRESCRIPTION_PDF}
              download="Yu_Dental_Laboratory_Job_Sheet.pdf"
              className="inline-flex items-center justify-center rounded border border-teal bg-teal px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white no-underline transition-colors duration-200 hover:border-teal-hover hover:bg-teal-hover"
            >
              Send a case
            </a>
          </div>
          <div
            className="mt-10 overflow-hidden rounded-lg border border-surface-muted bg-white"
            aria-labelledby="accepted-scanners-heading"
          >
            <div className="flex flex-col md:flex-row">
              <div className="shrink-0 border-b border-surface-muted bg-white p-4 md:w-72 md:border-r md:border-b-0 lg:w-80 lg:p-6">
                <Image
                  src="/images/digital-scans/connect-with-us.jpg"
                  alt="Dental scanner workstation sending digital scan data through the cloud to Yu Dental Laboratory"
                  width={1024}
                  height={682}
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
                <p className="mt-4 text-grey-mid">
                  {ACCEPTED_SCANNERS.map((scanner, index) => (
                    <span key={scanner.href}>
                      {index > 0 ? <span aria-hidden="true"> | </span> : null}
                      <Link href={scanner.href} className="font-semibold no-underline hover:underline">
                        {scanner.label}
                      </Link>
                    </span>
                  ))}
                </p>
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
      <PromiseSection
        className="bg-surface-muted"
        heading="Our Commitment to Your Practice"
        promiseCopy="We combine skilled workmanship, modern materials and direct communication to support predictable clinical outcomes. From straightforward cases to more complex removable prosthodontic work, we work closely with you throughout the case."
        servicesTitle="Dental Laboratory Services"
        serviceCategories={LAB_SERVICE_CATEGORIES}
      />
      <section className="bg-white px-4 py-12 md:px-6 md:py-16" aria-labelledby="process-heading">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="process-heading"
            className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
          >
            The Process
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
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
                  <a href={LAB_PRESCRIPTION_PDF} download="Yu_Dental_Laboratory_Job_Sheet.pdf">
                    Download lab prescription form (PDF)
                  </a>
                </p>
                <p className="mt-2 text-sm">
                  <Link href="/contact/">Request a form / contact us</Link>
                </p>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
                <Image
                  src="/images/turnaround-time.png"
                  alt="Turnaround time for dental laboratory cases"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-bold text-navy">
                  Typical laboratory turnaround times
                </h3>
                <p className="mt-3 text-sm text-grey-mid">
                  The following timeframes are provided as a general guide. Turnaround may vary
                  depending on case complexity, materials and laboratory workload. We&apos;ll confirm
                  timing when your case is received.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-grey-mid">
                  <li>Full / full: 10–12 working days</li>
                  <li>Simple partial: 5 working days</li>
                  <li>Cobalt chromium framework: 12 working days</li>
                  <li>Bite blocks / special trays: 3 working days</li>
                  <li>Bruxism splints: 5 working days</li>
                </ul>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
                <Image
                  src="/images/nationwide-delivery.jpg"
                  alt="New Zealand Couriers nationwide delivery"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-bold text-navy">Nationwide Delivery</h3>
                <p className="mt-3 text-sm text-grey-mid">
                  We use overnight courier services throughout New Zealand. Referring practices are
                  responsible for cases and courier costs when sending work to our laboratory. We
                  arrange and cover the return courier of completed cases. Please allow an
                  additional working day for delivery when planning patient appointments.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-12 rounded-lg border border-surface-muted bg-white p-6 text-center shadow-sm md:p-8">
            <h3 className="font-sans text-xl font-bold text-navy md:text-2xl">
              Looking for a Dental Laboratory Partner?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-grey-mid leading-relaxed">
              Whether you&apos;re sending us your first case or looking for ongoing laboratory
              support, we&apos;d be happy to discuss your requirements. We work with dental practices
              throughout Wellington and across New Zealand.
            </p>
            <p className="mt-4 text-sm font-semibold text-navy">
              <Link href="/denture-referrals/">Refer a Patient</Link>
              <span aria-hidden="true"> | </span>
              <a href={LAB_PRESCRIPTION_PDF} download="Yu_Dental_Laboratory_Job_Sheet.pdf">
                Send a Case
              </a>
              <span aria-hidden="true"> | </span>
              <Link href="/contact/">Contact Our Lab</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
