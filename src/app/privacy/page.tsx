import { PrivacyPolicyBlocks } from "@/components/privacy/PrivacyPolicyContent";
import { PageBanner } from "@/components/layout/PageBanner";
import {
  PRIVACY_INTRO_LIST,
  PRIVACY_INTRO_PARAGRAPHS,
  PRIVACY_POLICY_LAST_UPDATED,
  PRIVACY_SECTIONS,
} from "@/content/privacy-policy";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy policy",
  description:
    "How Yu Dental Laboratory Ltd collects, uses, stores and protects personal and health information under New Zealand privacy law.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        lead={`Last updated: ${PRIVACY_POLICY_LAST_UPDATED}`}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-4 text-grey-mid">
          <p className="font-semibold text-navy">{SITE.legalName}</p>
          {PRIVACY_INTRO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
          <ul className="list-disc space-y-2 pl-6">
            {PRIVACY_INTRO_LIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-12">
          {PRIVACY_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-sans text-xl font-bold text-navy md:text-2xl">
                {section.number}. {section.title}
              </h2>
              <div className="mt-4">
                <PrivacyPolicyBlocks blocks={section.blocks} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
