import { AccordionItem, PageBanner } from "@/components/layout/PageBanner";
import { WinzLink } from "@/components/ui/WinzLink";
import { getFaqPageJsonLd } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = createPageMetadata({
  title: "Frequently asked questions",
  description:
    "Answers about dentures, timing, bookings and SuperGold at Yu Dental Laboratory Wellington.",
  path: "/faq/",
});

type FaqItem = {
  question: string;
  plainTextAnswer: string;
  answer: ReactNode;
};

const FAQS: FaqItem[] = [
  {
    question: "What types of dentures do you offer?",
    plainTextAnswer:
      "We provide full dentures, partial dentures, cobalt chrome dentures, implant-retained overdentures and implant bar-retained overdentures. We can discuss the different options with you and help determine which may be most suitable for your needs.",
    answer: (
      <p>
        We provide full dentures, partial dentures, cobalt chrome dentures, implant-retained
        overdentures and implant bar-retained overdentures. We can discuss the different options with
        you and help determine which may be most suitable for your needs.
      </p>
    ),
  },
  {
    question: "How long does it take to get new dentures?",
    plainTextAnswer:
      "Most patients can expect their new dentures within 2–4 weeks, depending on the type of denture and individual requirements. We'll explain the expected number of appointments and timeframe at your consultation.",
    answer: (
      <p>
        Most patients can expect their new dentures within 2–4 weeks, depending on the type of
        denture and individual requirements. We&apos;ll explain the expected number of appointments
        and timeframe at your consultation.
      </p>
    ),
  },
  {
    question: "Do you repair, reline and adjust existing dentures?",
    plainTextAnswer:
      "Yes. We provide denture repairs, relines and adjustments to help restore comfort, fit and function. Many repairs can be completed on the same day, depending on the repair required and our availability.",
    answer: (
      <p>
        Yes. We provide denture repairs, relines and adjustments to help restore comfort, fit and
        function. Many repairs can be completed on the same day, depending on the repair required
        and our availability.
      </p>
    ),
  },
  {
    question: "Do I need a referral to book a consultation?",
    plainTextAnswer:
      "If you have no remaining natural teeth, you can book directly with us without a referral. If you still have natural teeth, a referral from your dentist is required. If you're unsure, simply give us a call and we'll let you know what you need before booking.",
    answer: (
      <p>
        If you have no remaining natural teeth, you can book directly with us without a referral. If
        you still have natural teeth, a referral from your dentist is required. If you&apos;re
        unsure, simply give us a call and we&apos;ll let you know what you need before booking.
      </p>
    ),
  },
  {
    question: "How much do dentures cost?",
    plainTextAnswer:
      "Fees depend on the type of denture and materials. We explain costs at your consultation. SuperGold cardholders and WINZ quotes welcome — mention your card when you book.",
    answer: (
      <p>
        Fees depend on the type of denture and materials. We explain costs at your consultation.
        SuperGold cardholders and <WinzLink>WINZ quotes</WinzLink> welcome — mention your card when
        you book.
      </p>
    ),
  },
  {
    question: "Can you repair my denture today?",
    plainTextAnswer:
      "Many repairs and adjustments can be done same day if we have capacity. Call us in the morning with your situation; we will tell you if we can fit you in.",
    answer: (
      <p>
        Many repairs and adjustments can be done same day if we have capacity. Call us in the
        morning with your situation; we will tell you if we can fit you in.
      </p>
    ),
  },
  {
    question: "Do you accept digital scans from my dentist?",
    plainTextAnswer:
      "Yes. We accept digital scans from 3Shape TRIOS®, iTero® and Dentsply Sirona® workflows. Dentists can visit our For Dentists page for information on our laboratory services and how to send a digital case.",
    answer: (
      <p>
        Yes. We accept digital scans from{" "}
        <strong>3Shape TRIOS®, iTero® and Dentsply Sirona® workflows.</strong> Dentists can visit our{" "}
        <Link href="/dental-lab-services/" className="font-semibold">
          For Dentists
        </Link>{" "}
        page for information on our laboratory services and how to send a digital case.
      </p>
    ),
  },
  {
    question: "Do you see patients from outside Wellington?",
    plainTextAnswer:
      "Yes. Patients travel from across the Wellington region; we can discuss appointment spacing if you are coming from further away.",
    answer: (
      <p>
        Yes. Patients travel from across the Wellington region; we can discuss appointment spacing
        if you are coming from further away.
      </p>
    ),
  },
  {
    question: "Do you offer SuperGold card discounts?",
    plainTextAnswer:
      "SuperGold cardholders are welcome. When you book or visit, tell us you hold a card and we will explain how our fees relate to your treatment plan. The New Zealand SuperGold card is a government-issued card for New Zealand residents aged 65 and over and eligible veterans.",
    answer: (
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="mx-auto shrink-0 rounded-md bg-white p-3 ring-1 ring-navy/10 sm:mx-0">
          <Image
            src="/images/supergold-logo.png"
            alt="SuperGold; Te kāri kōura"
            width={552}
            height={264}
            className="h-auto w-32"
            loading="lazy"
          />
        </div>
        <div className="space-y-3">
          <p>
            SuperGold cardholders are welcome. When you book or visit, tell us you hold a card and we
            will explain how our fees relate to your treatment plan.
          </p>
          <p>
            The New Zealand SuperGold card is a government-issued card for New Zealand residents
            aged 65 and over and eligible veterans. Participating businesses may offer discounts on
            goods and services; programme information is on{" "}
            <a href="https://www.supergold.govt.nz/" target="_blank" rel="noopener noreferrer">
              supergold.govt.nz
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            .
          </p>
          <p>
            You can also read more on our{" "}
            <Link href="/denture-services/">Denture Services</Link> page.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "What happens at my first denture consultation?",
    plainTextAnswer:
      "Your first consultation is an opportunity to discuss your concerns, existing dentures and what you would like to improve. We'll assess your needs, explain suitable treatment options and discuss the expected appointments, timeframe and costs before treatment begins.",
    answer: (
      <p>
        Your first consultation is an opportunity to discuss your concerns, existing dentures and
        what you would like to improve. We&apos;ll assess your needs, explain suitable treatment
        options and discuss the expected appointments, timeframe and costs before treatment begins.
      </p>
    ),
  },
  {
    question: "What should I bring to my consultation?",
    plainTextAnswer:
      "Please bring any dentures or oral appliances you currently use, along with any relevant information or referral from your dentist. If you have a SuperGold card or are seeking a WINZ quote, please let us know when booking.",
    answer: (
      <p>
        Please bring any dentures or oral appliances you currently use, along with any relevant
        information or referral from your dentist. If you have a SuperGold card or are seeking a{" "}
        <WinzLink>WINZ quote</WinzLink>, please let us know when booking.
      </p>
    ),
  },
  {
    question: "Payment & Fees",
    plainTextAnswer:
      "Payment is due at the time of treatment unless otherwise arranged. We accept EFTPOS, Visa, Mastercard, bank transfers and cash. WINZ quotes are available, and SuperGold cardholders are welcome to ask us about applicable fees. Treatment costs and payment arrangements will be discussed with you before treatment begins.",
    answer: (
      <div className="space-y-3">
        <p>
          Payment is due at the time of treatment unless otherwise arranged. We accept{" "}
          <strong>EFTPOS, Visa, Mastercard, Bank Transfers and Cash.</strong>
        </p>
        <p>
          <strong>
            <WinzLink>WINZ quotes are available</WinzLink>
          </strong>
          , and{" "}
          <strong>SuperGold Card holders</strong> are welcome to ask us about applicable fees.
        </p>
        <p>
          Treatment costs and payment arrangements will be discussed with you before treatment
          begins.
        </p>
      </div>
    ),
  },
];

const FAQ_JSON_LD = getFaqPageJsonLd(
  FAQS.map((faq) => ({
    question: faq.question,
    answer: faq.plainTextAnswer,
  })),
);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static FAQ JSON-LD for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <PageBanner
        title="Frequently Asked Questions"
        tagline="Straight answers about dentures, timing and bookings."
      />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-label="Question and answer list">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-surface-muted bg-white px-4 shadow-sm md:px-6">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} title={faq.question} headingLevel="h2">
                {faq.answer}
              </AccordionItem>
            ))}
          </div>
          <p className="mt-8 text-grey-mid">
            Still have questions? <Link href="/contact/">Contact us</Link> or{" "}
            <Link href="/book/">book online</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
