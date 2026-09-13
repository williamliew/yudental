import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Book Online",
  description: "Book a denture appointment online at Yu Dental Laboratory Wellington.",
  path: "/book/",
});

const HALAXY_BOOKING_URL =
  "https://www.halaxy.com/book/widget/yu-dental-laboratory-ltd/location/1321035";

export default function BookPage() {
  return (
    <>
      <PageBanner title="Book an Appointment" tagline="Book a Free Consultation" />
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <p className="text-grey-mid leading-relaxed">
          Use the booking form below to request your appointment.{" "}
          <strong>
            New patients are always welcome, and we&apos;re pleased to welcome existing patients
            back.
          </strong>{" "}
          Simply choose your preferred appointment time and submit your request online.
        </p>
        <div className="mt-8 h-[min(80vh,900px)] min-h-[600px] rounded-lg border border-surface-muted bg-white shadow-sm">
          <iframe
            src={HALAXY_BOOKING_URL}
            title="Book an appointment at Yu Dental Laboratory"
            allow="payment"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </>
  );
}
