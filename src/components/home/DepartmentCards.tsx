import { Section } from "@/components/ui/Section";
import { WinzLink } from "@/components/ui/WinzLink";
import { SITE } from "@/lib/site";
import Link from "next/link";

const LAB_PRESCRIPTION_PDF = "/downloads/Yu_Dental_Laboratory_Job_Sheet.pdf";

export function DepartmentCards() {
  return (
    <Section className="bg-surface-muted text-center" ariaLabelledBy="dept-heading">
      <h2
        id="dept-heading"
        className="font-sans text-2xl font-bold text-navy md:text-3xl text-balance"
      >
        Patients and Referring Dental Professionals
      </h2>
      <div className="mx-auto mt-4 max-w-3xl space-y-3 text-grey-mid">
        <p>
          Patients choose us for quality dentures, expert relines and repairs, and personalised
          denture care, while referring dental practices trust us for reliable, high-quality dental
          laboratory services.
        </p>
        <p>
          Every case is carefully planned and crafted in our Wellington clinic and laboratory, with a
          focus on quality, precision and care for every patient and dental practice we work with.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article
          className="rounded-lg border border-surface-muted bg-white p-6 text-left shadow-sm md:p-8"
        >
          <h3 className="font-sans text-xl font-bold text-navy">For Patients</h3>
          <p className="mt-2 font-semibold text-navy">New Dentures, Relines &amp; Repairs</p>
          <p className="mt-3 text-grey-mid leading-relaxed">
            Personal denture care, from new dentures and relines to repairs and same-day fixes where
            possible. SuperGold cardholders welcome. Ask us about fees and{" "}
            <WinzLink>WINZ quotes</WinzLink> at your consultation.
          </p>
          <p className="mt-3 text-grey-mid leading-relaxed">
            <Link href="/book/" className="font-semibold no-underline hover:underline">
              Book online
            </Link>{" "}
            or{" "}
            <a href={`tel:${SITE.phoneTel}`} className="font-semibold no-underline hover:underline">
              call us
            </a>{" "}
            to arrange your free consultation.
          </p>
          <Link
            href="/denture-services/"
            className="mt-4 inline-block text-sm font-semibold text-teal no-underline hover:underline"
          >
            View Denture Services →
          </Link>
        </article>
        <article
          className="rounded-lg border border-surface-muted bg-white p-6 text-left shadow-sm md:p-8"
        >
          <h3 className="font-sans text-xl font-bold text-navy">For Dentists</h3>
          <p className="mt-2 font-semibold text-navy">
            Locally Crafted. Digitally Connected. Nationwide Service.
          </p>
          <p className="mt-3 text-grey-mid leading-relaxed">
            Dental prosthetics crafted in our Wellington laboratory, with nationwide courier service
            and direct communication on every case. Selected digital denture workflows accepted.
          </p>
          <p className="mt-3 text-grey-mid leading-relaxed">
            <Link href="/denture-referrals/" className="font-semibold no-underline hover:underline">
              Refer a patient online
            </Link>{" "}
            or{" "}
            <a
              href={LAB_PRESCRIPTION_PDF}
              download="Yu_Dental_Laboratory_Job_Sheet.pdf"
              className="font-semibold no-underline hover:underline"
            >
              download our lab form
            </a>{" "}
            to send a case.
          </p>
          <Link
            href="/dental-lab-services/"
            className="mt-4 inline-block text-sm font-semibold text-teal no-underline hover:underline"
          >
            View Dental Laboratory Services →
          </Link>
        </article>
      </div>
    </Section>
  );
}
