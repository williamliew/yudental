import { ScannerConnectionLayout } from "@/components/dental-lab/ScannerConnectionLayout";
import { createPageMetadata } from "@/lib/metadata";

const ITERO_ADD_LAB_URL =
  "https://learn.itero.com/en-US/video/C0CA4199-2BC7-46F7-BD63AD9D0855CDAB";

export const metadata = createPageMetadata({
  title: "Sending iTero scans",
  description:
    "Connect your iTero account with Yu Dental Laboratory to send digital scans directly to our Wellington laboratory.",
  path: "/dental-lab-services/itero/",
});

export default function IteroPage() {
  return (
    <ScannerConnectionLayout
      bannerTitle="Sending Your iTero™ Scans"
      bannerTagline="Connect your iTero™ account with Yu Dental Laboratory to send your digital scans directly to us."
      sectionTitle="Connect with us on iTero™"
      intro={<p>Find or add Yu Dental Laboratory to your iTero™ laboratory list.</p>}
      steps={
        <>
          <li>
            <a href={ITERO_ADD_LAB_URL} target="_blank" rel="noopener noreferrer" className="font-semibold">
              Add a Lab
              <span className="sr-only"> (opens in new tab)</span>
            </a>{" "}
            and select <strong>Yu Dental Laboratory</strong>.
          </li>
          <li>Scan your patient.</li>
          <li>Review your scan.</li>
          <li><strong>Send your case to us.</strong></li>
        </>
      }
      illustrationAlt="Digital scan workflow from iTero workstation to Yu Dental Laboratory"
    />
  );
}
