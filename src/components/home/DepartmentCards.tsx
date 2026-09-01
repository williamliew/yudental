import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function DepartmentCards() {
  return (
    <Section ariaLabelledBy="dept-heading">
      <h2
        id="dept-heading"
        className="font-display text-2xl font-bold text-navy md:text-3xl text-balance"
      >
        Patients and referring Dental professionals
      </h2>
      <div className="mt-4 max-w-3xl space-y-3 text-grey-mid">
        <p>
          Patients choose us for expert denture relines, repairs, and comprehensive care, while
          referring dental practices trust us for quality dental laboratory services.
        </p>
        <p>
          Every case is carefully planned and crafted right here in Wellington, ensuring the highest
          standards for our patients &amp; clients.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Link
          href="/denture-services/"
          className="group rounded-lg border border-surface-muted bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md md:p-8"
        >
          <h3 className="font-display text-xl font-bold text-navy group-hover:text-teal">
            For Patients
          </h3>
          <p className="mt-3 text-grey-mid leading-relaxed">
            New dentures, relines, repairs and same-day fixes where possible. Book online or call.
            SuperGold cardholders welcome; ask us about fees and WINZ quotes at your first visit.
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-teal">
            View denture services →
          </span>
        </Link>
        <Link
          href="/dental-lab-services/"
          className="group rounded-lg border border-surface-muted bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md md:p-8"
        >
          <h3 className="font-display text-xl font-bold text-navy group-hover:text-teal">
            For Dentist
          </h3>
          <p className="mt-3 text-grey-mid leading-relaxed">
            Locally made Dental Prosthetics, all digital scans accepted, nationwide courier, and
            direct communication on every case. Refer online or download our referral form.
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-teal">
            View lab services →
          </span>
        </Link>
      </div>
    </Section>
  );
}
