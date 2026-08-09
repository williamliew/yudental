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
          referring practices trust our quality dental laboratory services.
        </p>
        <p>
          Everything is meticulously planned and crafted right here in Wellington, ensuring the
          highest standards for our patients &amp; clients.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Link
          href="/denture-services/"
          className="group rounded-lg border border-surface-muted bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md md:p-8"
        >
          <h3 className="font-display text-xl font-bold text-navy group-hover:text-teal">
            Denture clinic
          </h3>
          <p className="mt-3 text-grey-mid leading-relaxed">
            For Patients and the Community: Get quality denture care with our services, including
            dentures, relines, repairs, and more. We&apos;re committed to helping you smile
            confidently and to serving our community with personalised care. Trust us for all your
            dental needs!
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
            Dental lab
          </h3>
          <p className="mt-3 text-grey-mid leading-relaxed">
            For Dentists: Discover high-quality, New Zealand-made appliances that enhance patient
            care. Enjoy fast turnaround times and reliable courier services to ensure your practice
            runs smoothly.
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-teal">
            View dental lab →
          </span>
        </Link>
      </div>
    </Section>
  );
}
