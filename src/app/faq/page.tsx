import { AccordionItem, PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Frequently asked questions",
  description:
    "Answers about dentures, timing, bookings and SuperGold at Yu Dental Laboratory Wellington.",
  path: "/faq/",
});

const FAQS = [
  {
    question: "1. What types of dentures do you offer?",
    answer:
      "We provide full dentures, partial dentures, implant-retained overdentures, and All-on-4 solutions. Our team will guide you to the best option for your needs.",
  },
  {
    question: "2. How long does it take to get new dentures?",
    answer:
      "Most patients can expect their new dentures within 2–4 weeks, depending on the type of denture and individual requirements.",
  },
  {
    question: "3. Can you repair or adjust my existing dentures?",
    answer:
      "Yes. We offer relines and same-day repairs in most cases to restore comfort and function quickly.",
  },
  {
    question: "4. Do I need a referral to book a consultation?",
    answer:
      "No referral is needed. You can book directly with us whether you are a new patient or replacing an existing appliance.",
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently asked questions"
        tagline="Straight answers about dentures, timing and bookings."
      />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-label="Question and answer list">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-surface-muted bg-white px-4 shadow-sm md:px-6">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
            <AccordionItem title="5. Do you offer SuperGold card discounts?">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Image
                  src="/images/supergold-logo.png"
                  alt="SuperGold; Te kāri kōura"
                  width={180}
                  height={151}
                  className="h-auto w-32 shrink-0"
                  loading="lazy"
                />
                <div className="space-y-3">
                  <p>
                    SuperGold cardholders are welcome. When you book or visit, tell us you hold a
                    card and we will explain how our fees relate to your treatment plan.
                  </p>
                  <p>
                    The SuperGold card is a government-issued card for New Zealand residents aged 65
                    and over and eligible veterans. Participating businesses may offer discounts on
                    goods and services; programme information is on{" "}
                    <a
                      href="https://www.supergold.govt.nz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      supergold.govt.nz
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                    .
                  </p>
                  <p>
                    You can also read more on our{" "}
                    <Link href="/denture-services/">Treatment / Denture Services</Link> page.
                  </p>
                </div>
              </div>
            </AccordionItem>
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
