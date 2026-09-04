import { ServiceSpriteIcon } from "@/components/icons/ServiceSpriteIcon";
import { AccordionHashSync } from "@/components/layout/AccordionHashSync";
import { AccordionItem, PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import type { ServiceSpriteId } from "@/lib/service-sprites";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = createPageMetadata({
  title: "Denture services Wellington",
  description:
    "Patient information on dentures, appliances and ongoing care at Yu Dental Laboratory Wellington.",
  path: "/denture-services/",
});

type Treatment = {
  title: string;
  spriteId: ServiceSpriteId;
  body: ReactNode;
};

const TREATMENTS: Treatment[] = [
  {
    title: "Full Dentures",
    spriteId: "full-dentures",
    body: (
      <div className="space-y-3">
        <p>
          Full dentures are used to replace all of the teeth in either the upper or lower jaw, and
          sometimes both.
        </p>
        <p>The process begins with taking impressions of your mouth to ensure a perfect fit.</p>
        <p>
          We also work with you to choose the colour and mould of the teeth so they look natural.
        </p>
        <p>
          You&apos;ll visit our Te Aro clinic for a total of about six appointments spread over two
          weeks to complete the process.
        </p>
        <p>After getting your dentures, we recommend coming in for annual check-ups.</p>
        <p>
          This helps ensure they remain comfortable and fit well as your mouth changes over time.
        </p>
      </div>
    ),
  },
  {
    title: "Partial Dentures",
    spriteId: "partial-denture",
    body: "Partial dentures serve as a removable solution for patients who are missing some teeth but still have remaining natural teeth. These dentures are crafted to fill in the gaps, restoring function to the bite and enhancing the smile. They consist of a gum-coloured base with artificial teeth attached and can be secured in place using clasps that attach to the remaining natural teeth. Proper care and maintenance are key to ensuring their longevity.",
  },
  {
    title: "Cobalt Chrome Frameworks",
    spriteId: "cobalt-chrome-framework",
    body: "Cobalt chrome frameworks are often used in conjunction with partial dentures. This type of framework provides a sturdy and lightweight base that offers superior strength compared to traditional acrylic bases. The metal alloy is biocompatible, ensuring that it is safe for use in the mouth, and allows for a more precise fit. Cobalt chrome frameworks are known for their durability and resistance to wear, which enhances the functionality of partial dentures.",
  },
  {
    title: "Implant Overdentures",
    spriteId: "implant-over-denture",
    body: (
      <div className="space-y-3">
        <p>
          Implant overdentures are removable dentures that are supported and retained by dental
          implants, providing{" "}
          <strong>greater stability and comfort than conventional dentures.</strong> The denture
          securely attaches to the implants, helping to reduce unwanted movement during eating,
          speaking and everyday activities.
        </p>
        <p>
          Implant overdentures can provide{" "}
          <strong>improved chewing ability, increased confidence and a more secure fit,</strong>{" "}
          particularly for patients who struggle with loose or unstable dentures. They are also
          removable, making them easy to clean and maintain.
        </p>
        <p>
          For suitable patients, implant overdentures can offer an excellent balance between{" "}
          <strong>comfort, function, stability and ease of care.</strong>
        </p>
      </div>
    ),
  },
  {
    title: "Implant Bar-Retained Overdentures",
    spriteId: "implant-bar-retained-over-denture",
    body: (
      <div className="space-y-3">
        <p>
          Implant bar-retained overdentures are removable dentures that{" "}
          <strong>clip securely onto a custom-made bar supported by dental implants.</strong> The
          bar helps distribute support across the implants, providing excellent stability and
          reducing unwanted movement during eating and speaking.
        </p>
        <p>
          For suitable patients, a bar-retained overdenture can provide{" "}
          <strong>improved chewing ability, comfort and confidence,</strong> while offering a secure
          and natural-feeling fit. The denture remains removable, allowing for{" "}
          <strong>easy cleaning and ongoing maintenance.</strong>
        </p>
      </div>
    ),
  },
  {
    title: "Relines and Repairs",
    spriteId: "relines-and-repairs",
    body: "Over time, dentures may require relining or repairs due to changes in the mouth or wear and tear. Relining involves adding new material to the base of the denture to improve the fit, ensuring that it sits securely against the gums. Repairs can involve fixing cracks or broken parts of the denture, allowing the patient to regain full function without the need for a complete replacement. Regular evaluations by a dental professional can help identify when these services are necessary.",
  },
  {
    title: "Sports Mouth Guards",
    spriteId: "sports-mouth-guard",
    body: "Sports mouth guards are protective devices worn during athletic activities to shield the teeth, gums, and jaw from injury. They are custom-made to ensure a snug and comfortable fit, promoting both safety and performance. Mouth guards can significantly reduce the risk of dental injuries and can be worn during contact sports such as football, basketball, or wrestling. Investing in a high-quality mouth guard helps to protect one's smile and avoid costly dental repairs.",
  },
  {
    title: "Sleep Apnoea Device (MDSA)",
    spriteId: "sleep-apnoea-mdsa",
    body: "A sleep apnoea device, often referred to as a mandibular advancement device (MAD), is designed to treat obstructive sleep apnoea. This custom-fitted oral appliance works by repositioning the jaw and tongue to keep the airway open during sleep, reducing snoring and improving overall sleep quality. These devices are a comfortable alternative to CPAP machines for many patients and can be tailored to fit the individual's mouth and specific needs.",
  },
  {
    title: "Whitening Trays",
    spriteId: "whitening-trays",
    body: "Whitening trays are custom-made dental trays designed to hold a bleaching agent against the teeth to achieve a brighter smile. These trays provide even distribution of the whitening solution, allowing for effective stain removal while minimising contact with the gums. The process can be done at home under the guidance of a dental professional, allowing for convenience and flexibility in achieving desired whitening results.",
  },
  {
    title: "Bruxism / TMJ Splints",
    spriteId: "bruxism-splints",
    body: "Bruxism and TMJ splints are oral appliances developed to relieve the strain on the jaw caused by teeth grinding (bruxism) and temporomandibular joint disorders (TMJ). These splints help to realign the jaw and reduce muscle tension, providing relief from associated pain and discomfort. They can prevent further wear on teeth and are often recommended for use during sleep to protect tooth surfaces and promote jaw relaxation. Regular consultations can help in adjusting the splint for optimal results.",
  },
];

export default function DentureServicesPage() {
  return (
    <>
      <AccordionHashSync />
      <PageBanner
        title="Denture Services"
        tagline="Patient information on dentures, appliances and ongoing care."
        backgroundImage="/images/denture-services-banner.png"
      />
      <div className="mx-auto max-w-[var(--max-width-content)] px-4 py-8 md:px-6">
        <aside
          className="rounded-lg bg-white p-4 md:p-6"
          aria-labelledby="supergold-denture-heading"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="mx-auto shrink-0 rounded-md bg-white p-3 md:mx-0">
              <Image
                src="/images/supergold-logo.png"
                alt="SuperGold; Te kāri kōura"
                width={552}
                height={264}
                className="h-auto w-36 md:w-44"
                loading="lazy"
              />
            </div>
            <div>
              <h2
                id="supergold-denture-heading"
                className="font-sans text-xl font-bold text-navy"
              >
                SuperGold Card
              </h2>
              <p className="mt-3 leading-relaxed text-grey-dark">
                The New Zealand SuperGold card is government-issued for residents aged 65 and over
                and eligible veterans. It can include discounts on goods and services from
                participating businesses, and other benefits such as free off-peak public transport.
              </p>
              <p className="mt-3 font-semibold text-grey-dark">
                SuperGold cardholders are welcome here. <Link href="/contact/">Contact us</Link> or
                mention your card when you <Link href="/book/">book online</Link> so we can explain
                what applies to your denture treatment.
              </p>
              <p className="mt-3 text-sm">
                <a href="https://www.supergold.govt.nz/" target="_blank" rel="noopener noreferrer">
                  More about the SuperGold card
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </aside>
        <p className="my-8 text-grey-mid">
          Open any heading below for a short overview of that service.
        </p>
        <div className="rounded-lg border border-surface-muted bg-white px-4 shadow-sm md:px-6">
          {TREATMENTS.map((treatment) => (
            <AccordionItem key={treatment.title} id={treatment.spriteId} title={treatment.title}>
              <div className="flex gap-4">
                <ServiceSpriteIcon spriteId={treatment.spriteId} size={64} />
                <div className="min-w-0 flex-1">
                  {typeof treatment.body === "string" ? <p>{treatment.body}</p> : treatment.body}
                </div>
              </div>
            </AccordionItem>
          ))}
        </div>
        <p className="mt-8 text-grey-mid">
          Ready to book? Use <Link href="/book/">Book online</Link> to choose patient type and
          treatment.
        </p>
      </div>
    </>
  );
}
