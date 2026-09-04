import { ReferralForm } from "@/components/forms/ReferralForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Denture referrals",
  description:
    "Refer patients to Yu Dental Laboratory for denture assessment, new dentures, relines and repairs.",
  path: "/denture-referrals/",
});

export default function DentureReferralsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center md:px-6 md:py-16">
      <h1 className="font-sans text-3xl font-bold text-navy md:text-4xl">Denture Referrals</h1>
      <p className="mt-4 text-grey-mid leading-relaxed">
        We welcome referrals from dentists and specialists. Use this form to send patient details;
        we will contact you to request any referral letters or supporting documents.
      </p>
      <div className="mt-8 text-left">
        <ReferralForm />
      </div>
    </div>
  );
}
