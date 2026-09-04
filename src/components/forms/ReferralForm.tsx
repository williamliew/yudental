"use client";

import { Web3Form } from "@/components/forms/Web3Form";
import { SITE } from "@/lib/site";

const inputClass =
  "w-full rounded border border-grey-mid/30 bg-white px-3 py-2.5 text-grey-dark outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => currentYear - i);

function buildReferralPayload(formData: FormData): Record<string, string> {
  const data = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
  );

  const day = data.dob_day?.padStart(2, "0");
  const month = data.dob_month?.padStart(2, "0");
  const year = data.dob_year;

  if (day && month && year) {
    data.date_of_birth = `${day}/${month}/${year}`;
  }

  return {
    ...data,
    subject: `Denture referral: ${data.patient_name} (${data.surgery_name})`,
    replyto: data.patient_email,
    from_name: "Yu Dental referrals",
  };
}

function getReferralSuccessMessage(): string {
  const base =
    "Thank you. We have received your referral and will be in touch shortly to request any referral letters or supporting documents.";

  if (SITE.showReferralsEmailOnSite && SITE.referralsEmail) {
    return `${base} You can also email documents to ${SITE.referralsEmail}.`;
  }

  return base;
}

export function ReferralForm() {
  return (
    <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
      <div className="space-y-2 text-sm text-grey-mid">
        <p>
          Submit patient details below. We will contact you to request any referral letters or
          supporting documents.
        </p>
        {SITE.showReferralsEmailOnSite && SITE.referralsEmail ? (
          <p>
            You can also email documents to{" "}
            <a
              href={`mailto:${SITE.referralsEmail}?subject=${encodeURIComponent("Referral")}`}
              className="font-semibold text-teal underline-offset-2 hover:underline"
            >
              {SITE.referralsEmail}
            </a>
            .
          </p>
        ) : null}
        <p>
          For urgent enquiries, call{" "}
          <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-teal hover:underline">
            {SITE.phone}
          </a>
          .
        </p>
      </div>

      <div className="mt-6">
        <Web3Form
          id="referral-form"
          successMessage={getReferralSuccessMessage()}
          buildPayload={buildReferralPayload}
          submitLabel="Submit referral"
        >
          <fieldset className="mb-6 space-y-4">
            <legend className="mb-3 font-sans text-lg font-bold text-navy">
              Referring dentist information
            </legend>
            <div>
              <label htmlFor="ref-surgery" className="mb-1 block text-sm font-semibold text-navy">
                Dental surgery name{" "}
                <span className="text-teal" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="ref-surgery"
                name="surgery_name"
                type="text"
                required
                autoComplete="organization"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="ref-dentist" className="mb-1 block text-sm font-semibold text-navy">
                Dentist name{" "}
                <span className="text-teal" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="ref-dentist"
                name="dentist_name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>
          </fieldset>

          <fieldset className="mb-6 space-y-4">
            <legend className="mb-3 font-sans text-lg font-bold text-navy">
              Patient&apos;s information
            </legend>
            <div>
              <label
                htmlFor="ref-patient-name"
                className="mb-1 block text-sm font-semibold text-navy"
              >
                Name{" "}
                <span className="text-teal" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="ref-patient-name"
                name="patient_name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div>
              <span id="ref-dob-label" className="mb-2 block text-sm font-semibold text-navy">
                Date of birth{" "}
                <span className="text-teal" aria-hidden="true">
                  *
                </span>
              </span>
              <fieldset
                className="grid grid-cols-3 gap-3 border-0 p-0"
                aria-labelledby="ref-dob-label"
              >
                <div>
                  <label htmlFor="ref-dob-day" className="mb-1 block text-xs text-grey-mid">
                    Day
                  </label>
                  <select id="ref-dob-day" name="dob_day" required className={inputClass}>
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ref-dob-month" className="mb-1 block text-xs text-grey-mid">
                    Month
                  </label>
                  <select id="ref-dob-month" name="dob_month" required className={inputClass}>
                    <option value="">Month</option>
                    {MONTHS.map((m, i) => (
                      <option key={m} value={i + 1}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ref-dob-year" className="mb-1 block text-xs text-grey-mid">
                    Year
                  </label>
                  <select id="ref-dob-year" name="dob_year" required className={inputClass}>
                    <option value="">Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </fieldset>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ref-email" className="mb-1 block text-sm font-semibold text-navy">
                  Email{" "}
                  <span className="text-teal" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="ref-email"
                  name="patient_email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="ref-phone" className="mb-1 block text-sm font-semibold text-navy">
                  Phone{" "}
                  <span className="text-teal" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="ref-phone"
                  name="patient_phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="ref-address" className="mb-1 block text-sm font-semibold text-navy">
                Address{" "}
                <span className="text-teal" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="ref-address"
                name="patient_address"
                type="text"
                required
                autoComplete="street-address"
                className={inputClass}
              />
            </div>
          </fieldset>

          <fieldset className="mb-6 space-y-4">
            <legend className="mb-3 font-sans text-lg font-bold text-navy">
              Referral details
            </legend>
            <div>
              <label htmlFor="ref-help" className="mb-1 block text-sm font-semibold text-navy">
                How can we help?{" "}
                <span className="text-teal" aria-hidden="true">
                  *
                </span>
              </label>
              <select id="ref-help" name="help_type" required className={inputClass}>
                <option value="assessment">Assessment / consultation</option>
                <option value="new-dentures">New dentures</option>
                <option value="reline">Reline / refitting</option>
                <option value="repair">Repair</option>
                <option value="addition">Addition to existing denture</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="ref-notes" className="mb-1 block text-sm font-semibold text-navy">
                Additional notes
              </label>
              <textarea
                id="ref-notes"
                name="referral_notes"
                rows={4}
                className={inputClass}
                placeholder="Optional clinical context or timing requirements"
              />
            </div>
          </fieldset>

          <div className="mb-6">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" name="confirm_human" value="1" required className="mt-1" />
              <span>
                I confirm this referral is submitted by someone at the referring practice.
              </span>
            </label>
          </div>
        </Web3Form>
      </div>
    </div>
  );
}
