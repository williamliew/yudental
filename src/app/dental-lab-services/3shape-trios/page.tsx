import { ScannerConnectionLayout } from "@/components/dental-lab/ScannerConnectionLayout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sending 3Shape TRIOS scans",
  description:
    "Connect Yu Dental Laboratory through 3Shape Communicate to send TRIOS digital scans from your practice.",
  path: "/dental-lab-services/3shape-trios/",
});

export default function ThreeShapeTriosPage() {
  return (
    <ScannerConnectionLayout
      bannerTitle="Sending Your 3Shape TRIOS® Scans"
      bannerTagline="Connect with Yu Dental Laboratory through 3Shape Communicate® to send your digital scans directly to us."
      sectionTitle="Connect with Us on 3Shape Communicate®"
      intro={
        <p>
          To send TRIOS® digital scans to Yu Dental Laboratory, simply connect with us through{" "}
          <strong>3Shape Communicate®</strong>.
        </p>
      }
      steps={
        <>
          <li>Log in to your <strong>3Shape Communicate®</strong> account.</li>
          <li>Go to <strong>Connections → Add Connection</strong>.</li>
          <li>Search for <strong>yudlab@gmail.com</strong>.</li>
          <li>Select <strong>Yu Dental Laboratory LTD</strong>.</li>
          <li>Accept the agreement and click <strong>Connect</strong>.</li>
          <li>Once approved, refresh your TRIOS® lab connections.</li>
          <li><strong>You&apos;re ready to send your scans to us.</strong></li>
        </>
      }
      illustrationAlt="Digital scan workflow from dentist workstation to Yu Dental Laboratory via secure transfer"
      cta={{
        label: "3Shape Communicate®",
        href: "https://portal.3shapecommunicate.com/login",
      }}
    />
  );
}
