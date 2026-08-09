import { StaticForm } from "@/components/forms/StaticForm";
import Link from "next/link";

const inputClass =
  "w-full rounded border border-grey-mid/30 bg-white px-3 py-2.5 text-grey-dark outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

export function BookForm() {
  return (
    <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
      <StaticForm
        id="book-form"
        successMessage="Thank you. Your appointment preferences are noted on this page only. Please call 04-388 7491 so we can confirm a time."
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="b-patient" className="mb-1 block text-sm font-semibold text-navy">
              Patient type
            </label>
            <select id="b-patient" name="patient_type" required className={inputClass}>
              <option value="">Select…</option>
              <option>New patient</option>
              <option>Existing patient</option>
            </select>
          </div>
          <div>
            <label htmlFor="b-treatment" className="mb-1 block text-sm font-semibold text-navy">
              Treatment
            </label>
            <select id="b-treatment" name="treatment" required className={inputClass}>
              <option value="">Select…</option>
              <option>Consultation</option>
              <option>New dentures</option>
              <option>Reline / refitting</option>
              <option>Addition to existing denture</option>
              <option>Repair</option>
            </select>
          </div>
          <div>
            <label htmlFor="b-name" className="mb-1 block text-sm font-semibold text-navy">
              Your name <span aria-hidden="true">*</span>
            </label>
            <input
              id="b-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="b-phone" className="mb-1 block text-sm font-semibold text-navy">
              Contact number <span aria-hidden="true">*</span>
            </label>
            <input
              id="b-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="b-email" className="mb-1 block text-sm font-semibold text-navy">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="b-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="b-pref" className="mb-1 block text-sm font-semibold text-navy">
              Preferred days / times
            </label>
            <textarea
              id="b-pref"
              name="preferred"
              placeholder="Optional"
              rows={4}
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="rounded bg-teal px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-hover"
          >
            Submit request
          </button>
        </div>
      </StaticForm>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="tel:+6443887491"
          className="inline-flex rounded border border-navy px-5 py-2.5 text-sm font-semibold text-navy no-underline hover:bg-navy hover:text-white"
        >
          Call 04-388 7491
        </a>
        <Link
          href="/contact/"
          className="inline-flex rounded border border-navy px-5 py-2.5 text-sm font-semibold text-navy no-underline hover:bg-navy hover:text-white"
        >
          Contact &amp; map
        </Link>
      </div>
    </div>
  );
}
