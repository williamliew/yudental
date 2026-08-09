import { BookForm } from "@/components/forms/BookForm";
import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Book Online",
  description: "Request a denture appointment at Yu Dental Laboratory Wellington.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <PageBanner
        title="Book an appointment"
        tagline="New or existing patient, then choose your treatment."
      />
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-16">
        <p className="text-grey-mid leading-relaxed">
          Tell us whether you are new to us or returning, then choose the treatment you need. Add
          your contact details and preferred times; we will get back to you to confirm an
          appointment.
        </p>
        <div className="mt-8">
          <BookForm />
        </div>
      </div>
    </>
  );
}
