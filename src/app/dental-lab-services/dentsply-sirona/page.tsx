import { ScannerConnectionLayout } from "@/components/dental-lab/ScannerConnectionLayout";
import { createPageMetadata } from "@/lib/metadata";

const CONNECT_CASE_CENTER_URL = "https://customer.connectcasecenter.com/register/selectType";
const DS_CORE_URL =
  "https://login.r4.dscore.com/#/login?auto_confirm_user=true&client_id=lightning-app-r4&redirect_uri=https%3A%2F%2Fr4.dscore.com%2F%2523%2Ftoken-exchange&scope=openid+r4-dscore&code_challenge=vdYb6dOUyD5MIF0nmyYPKD7TEqM17iWZs1Yc8eKEx80&state=c1b3c6cd2fc145d88b232d55bcfd8d8b9aa377d7515dad27f05f9620cb550eb2";

export const metadata = createPageMetadata({
  title: "Sending CEREC scans",
  description:
    "Connect your CEREC scanner with Yu Dental Laboratory through Sirona Connect to send digital scans for fabrication.",
  path: "/dental-lab-services/dentsply-sirona/",
});

export default function DentsplySironaPage() {
  return (
    <ScannerConnectionLayout
      bannerTitle="Connect Your CEREC® Scanner with Yu Dental Laboratory"
      bannerTagline="Connect through the Sirona Connect Online Portal to send your CEREC® digital scans directly to Yu Dental Laboratory for fabrication."
      sectionTitle="Sending Your CEREC® Scans"
      intro={<p>Once registered with CEREC® Connect:</p>}
      steps={
        <>
          <li>Scan your patient using <strong>CEREC® Connect</strong>.</li>
          <li>Upload the scan to the <strong>Connect Case Center</strong>.</li>
          <li>Select <strong>Yu Dental Laboratory LTD</strong> as your laboratory.</li>
          <li><strong>Send the case to us.</strong></li>
        </>
      }
      extraLinks={
        <p>
          New to CEREC® Connect? Register through the{" "}
          <a href={CONNECT_CASE_CENTER_URL} target="_blank" rel="noopener noreferrer" className="font-semibold">
            Connect Case Center
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          . Or find us on{" "}
          <a href={DS_CORE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold">
            DS Core
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          .
        </p>
      }
      illustrationAlt="Digital scan workflow from CEREC workstation to Yu Dental Laboratory"
    />
  );
}
