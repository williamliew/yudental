"use client";

import { StaticForm } from "@/components/forms/StaticForm";
import { type DragEvent, useRef, useState } from "react";

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

export function ReferralForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);

  const updateFileList = () => {
    const files = fileInputRef.current?.files;
    if (!files) {
      setFileList("");
      return;
    }
    const names = Array.from(files).map((f) => f.name);
    setFileList(names.length ? `Selected: ${names.join(", ")}` : "");
  };

  const validateFiles = (): boolean => {
    const files = fileInputRef.current?.files;
    if (!files) return true;
    if (files.length > 5) {
      alert("Please choose at most 5 files.");
      return false;
    }
    const maxBytes = 15 * 1024 * 1024;
    for (const file of Array.from(files)) {
      if (file.size > maxBytes) {
        alert("Each file must be 15 MB or smaller.");
        return false;
      }
    }
    return true;
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    const dt = event.dataTransfer;
    if (!dt?.files?.length || !fileInputRef.current) return;
    const buffer = new DataTransfer();
    const max = Math.min(dt.files.length, 5);
    for (let i = 0; i < max; i++) {
      buffer.items.add(dt.files[i]);
    }
    fileInputRef.current.files = buffer.files;
    updateFileList();
  };

  return (
    <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm text-grey-mid">
        This form is a front-end demo: it does not email the server yet. Submit shows a confirmation
        message; connect your backend or form service when you are ready.
      </p>
      <div className="mt-6">
        <StaticForm
          id="referral-form"
          successMessage="Thank you. Your referral details are shown here for demo purposes only. Please call 04-388 7491 or use your usual channel until this form is connected to email or your practice software."
          onValidate={validateFiles}
          onReset={() => setFileList("")}
        >
          <fieldset className="mb-6 space-y-4">
            <legend className="mb-3 font-display text-lg font-bold text-navy">
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
            <legend className="mb-3 font-display text-lg font-bold text-navy">
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
            <legend className="mb-3 font-display text-lg font-bold text-navy">
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
              <span id="ref-files-label" className="mb-2 block text-sm font-semibold text-navy">
                Referral letter / supporting documents
              </span>
              <div
                className={`rounded border-2 border-dashed p-6 text-center transition-colors ${
                  dragActive ? "border-teal bg-teal/5" : "border-grey-mid/30"
                }`}
                onDragEnter={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
              >
                <label className="cursor-pointer">
                  <input
                    ref={fileInputRef}
                    id="referral-files"
                    type="file"
                    name="documents[]"
                    accept=".pdf,application/pdf"
                    multiple
                    className="hidden"
                    aria-labelledby="ref-files-label"
                    onChange={updateFileList}
                  />
                  <span className="text-sm text-grey-mid">Drop files here or </span>
                  <span className="text-sm font-semibold text-teal">Select files</span>
                </label>
                <p className="mt-2 text-xs text-grey-mid">
                  Accepted file types: PDF. Max. file size: 15 MB per file. Max. files: 5.
                </p>
                {fileList && (
                  <p className="mt-2 text-sm text-navy" aria-live="polite">
                    {fileList}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          <div className="mb-6 space-y-3">
            <p className="text-xs text-grey-mid">
              When you go live, replace this block with Google reCAPTCHA (or your host&apos;s spam
              protection) and keep the privacy notice in your privacy policy.
            </p>
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" name="confirm_human" value="1" required className="mt-1" />
              <span>
                I confirm this referral is submitted by someone at the referring practice.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="rounded bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
          >
            Submit
          </button>
        </StaticForm>
      </div>
    </div>
  );
}
