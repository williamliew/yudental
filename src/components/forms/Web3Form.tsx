"use client";

import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_SUBMIT_URL } from "@/lib/site";
import Script from "next/script";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";

type Web3FormProps = {
  id: string;
  children: ReactNode;
  successMessage: string;
  buildPayload?: (formData: FormData) => Record<string, string>;
  submitLabel?: string;
};

function formDataToRecord(formData: FormData): Record<string, string> {
  const record: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      record[key] = value;
    }
  }
  return record;
}

export function Web3Form({
  id,
  children,
  successMessage,
  buildPayload,
  submitLabel = "Submit",
}: Web3FormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLOutputElement>(null);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isConfigured = Boolean(WEB3FORMS_ACCESS_KEY);

  useEffect(() => {
    if (!status) {
      return;
    }

    const statusElement = statusRef.current;
    if (!statusElement) {
      return;
    }

    statusElement.scrollIntoView?.({ behavior: "smooth", block: "center" });
    statusElement.focus({ preventScroll: true });
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || !isConfigured) {
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    setStatus(null);
    setIsSubmitting(true);

    const formData = new FormData(form);
    const fieldPayload = formDataToRecord(formData);
    const extra = buildPayload?.(formData) ?? {};
    const payload = {
      ...fieldPayload,
      ...extra,
      access_key: WEB3FORMS_ACCESS_KEY,
    };

    try {
      const response = await fetch(WEB3FORMS_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        form.reset();
        setStatus({ type: "success", message: successMessage });
      } else {
        setStatus({
          type: "error",
          message: result.message ?? "Something went wrong. Please try again or call us.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script src="https://web3forms.com/client/script.js" strategy="lazyOnload" />

      {!isConfigured && (
        <output className="mb-4 block rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-navy">
          Referral form is not configured yet. Please contact the site administrator.
        </output>
      )}

      {status && (
        <output
          ref={statusRef}
          tabIndex={-1}
          role={status.type === "error" ? "alert" : "status"}
          aria-live={status.type === "error" ? "assertive" : "polite"}
          className={`mb-4 block rounded px-4 py-3 text-sm ${
            status.type === "success"
              ? "border border-teal/30 bg-teal/10 text-navy"
              : "border border-red-200 bg-red-50 text-navy"
          }`}
        >
          {status.message}
        </output>
      )}

      <form ref={formRef} id={id} onSubmit={handleSubmit} aria-busy={isSubmitting} noValidate>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          style={{ display: "none" }}
        />

        {children}

        <fieldset className="mb-6">
          <legend className="mb-3 font-sans text-lg font-bold text-navy">Security check</legend>
          <div className="h-captcha" data-captcha="true" />
        </fieldset>

        <button
          type="submit"
          disabled={!isConfigured || isSubmitting}
          className="rounded bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : submitLabel}
        </button>
      </form>
    </>
  );
}
