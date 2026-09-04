import { MapEmbed } from "@/components/layout/MapEmbed";
import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact us — Te Aro, Wellington",
  description: "Contact Yu Dental Laboratory in Te Aro, Wellington. Phone, map, hours and parking.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        tagline="Find us on the map, check opening hours and parking notes."
      />
      <div className="mx-auto max-w-[var(--max-width-content)] space-y-8 px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-sans text-xl font-bold text-navy">Our Address</h2>
            <p className="mt-3 text-grey-mid">
              {SITE.address.street}
              <br />
              {SITE.address.suburb}, {SITE.address.city}
            </p>
            <p className="mt-3 text-grey-mid">
              <strong>Tel:</strong>{" "}
              <a href={`tel:${SITE.phoneTel}`} className="font-semibold">
                {SITE.phone}
              </a>
            </p>
            <h3 className="mt-8 font-sans text-xl font-bold text-navy">Opening Hours</h3>
            <p className="mt-3 text-grey-mid">
              {SITE.hours}
              <br />
              Saturday &amp; Sunday closed
            </p>
          </div>
          <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-sans text-xl font-bold text-navy">Parking &amp; Access</h2>
            <h3 className="mt-6 font-sans text-base font-bold text-navy">Parking</h3>
            <p className="mt-2 text-grey-mid">
              Street and paid parking are available on College Street and nearby streets. Please check
              parking signs for time limits and restrictions.
            </p>
            <h3 className="mt-6 font-sans text-base font-bold text-navy">Easy Access</h3>
            <p className="mt-2 text-grey-mid">
              Our clinic entrance is at street level for convenient access. If you require any
              assistance when visiting us, please let us know; we&apos;re happy to help.
            </p>
            <h3 className="mt-6 font-sans text-base font-bold text-navy">Prefer to call?</h3>
            <p className="mt-2 text-grey-mid">
              Call us on{" "}
              <a href={`tel:${SITE.phoneTel}`} className="font-semibold">
                {SITE.phone}
              </a>{" "}
              during opening hours.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-surface-muted bg-white p-4 shadow-sm md:p-6">
          <h2 className="mb-4 text-center font-sans text-xl font-bold text-navy">Find Us</h2>
          <MapEmbed />
        </div>
      </div>
    </>
  );
}
