import { MapEmbed } from "@/components/layout/MapEmbed";
import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: "Contact Yu Dental Laboratory in Te Aro, Wellington. Phone, map, hours and parking.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact us"
        tagline="Find us on the map, check opening hours and parking notes."
      />
      <div className="mx-auto max-w-[var(--max-width-content)] space-y-8 px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-xl font-bold text-navy">Our address</h2>
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
            <h3 className="mt-8 font-display text-xl font-bold text-navy">Opening hours</h3>
            <p className="mt-3 text-grey-mid">
              {SITE.hours}
              <br />
              Saturday &amp; Sunday closed
            </p>
          </div>
          <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-xl font-bold text-navy">Parking &amp; access</h2>
            <ul className="mt-3 space-y-2 text-grey-mid">
              <li>Off-street parking nearby (update with your exact arrangement).</li>
              <li>Free parking options if applicable (placeholder text).</li>
            </ul>
            <p className="mt-8 text-grey-mid">
              Prefer to call? Reach us on{" "}
              <a href={`tel:${SITE.phoneTel}`} className="font-semibold">
                {SITE.phone}
              </a>{" "}
              during opening hours.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-surface-muted bg-white p-4 shadow-sm md:p-6">
          <h2 className="mb-4 font-display text-xl font-bold text-navy">Find us</h2>
          <MapEmbed />
        </div>
      </div>
    </>
  );
}
