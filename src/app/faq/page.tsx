import { AccordionItem, PageBanner } from "@/components/layout/PageBanner";
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
  answer: ReactNode;
};

const FAQS: FaqItem[] = [
  {
    question: "1. What types of dentures do you offer?",
    answer: (
      <p>
        We provide full dentures, partial dentures, and implant-retained overdentures. Our team will
        guide you to the best option for your needs. See our{" "}
        <Link href="/denture-services/">Denture Services</Link> page for more detail.
      </p>
    ),
  },
  {
    question: "2. How long does it take to get new dentures?",
    answer: (
      <p>
        Most patients can expect their new dentures within 2–4 weeks, depending on the type of
        denture and individual requirements.
      </p>
    ),
  },
  {
    question: "3. Can you repair or adjust my existing dentures?",
    answer: (
      <p>
        Yes. We offer relines and same-day repairs in most cases to restore comfort and function
        quickly.
      </p>
    ),
  },
  {
    question: "4. Do I need a referral to book a consultation?",
    answer: (
      <p>
        A referral is necessary if you have any remaining teeth. You can schedule an appointment
        with us directly, whether you are a new patient or need to replace an existing appliance.
      </p>
    ),
  },
  {
    question: "5. How much do dentures cost?",
    answer: (
      <p>
        Fees depend on the type of denture and materials. We explain costs at your consultation.
        SuperGold cardholders and WINZ quotes welcome — mention your card when you book.
      </p>
    ),
  },
  {
    question: "6. Can you repair my denture today?",
    answer: (
      <p>
        Many repairs and adjustments can be done same day if we have capacity. Call us in the
        morning with your situation; we will tell you if we can fit you in.
      </p>
    ),
  },
  {
    question: "7. Do you accept digital scans from my dentist?",
    answer: (
      <p>
        Yes. We accept digital scans from{" "}
        <strong>iTero, 3Shape, and Dentsply Sirona workflows.</strong> Dentists can visit our{" "}
        <Link href="/dental-lab-services/" className="font-semibold">
          For Dentists
        </Link>{" "}
        page for information on our laboratory services and how to send a digital case.
      </p>
    ),
  },
  {
    question: "8. Do you see patients from outside Wellington?",
    answer: (
      <p>
        Yes. Patients travel from across the Wellington region; we can discuss appointment spacing
        if you are coming from further away.
      </p>
    ),
  },
  {
    question: "9. Do you offer SuperGold card discounts?",
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
];

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        tagline="Straight answers about dentures, timing and bookings."
      />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-label="Question and answer list">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-surface-muted bg-white px-4 shadow-sm md:px-6">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} title={faq.question}>
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
