export const SITE = {
  name: "Yu Dental Laboratory",
  shortName: "Yu Dental",
  description:
    "Wellington family dental laboratory since 2000. Quality locally made dentures, lab services for clinicians, and patient denture care in Te Aro.",
  url: "https://yudental.co.nz",
  phone: "04-388 7491",
  phoneTel: "+6443887491",
  address: {
    street: "12 College Street",
    suburb: "Te Aro",
    city: "Wellington",
    country: "New Zealand",
  },
  hours: "Monday – Friday 8.30am – 5pm",
  email: "yudlab@gmail.com",
  /** Set true when a public domain referrals inbox is ready to display on the site. */
  showReferralsEmailOnSite: false,
  /** Public referrals address; only shown when showReferralsEmailOnSite is true. */
  referralsEmail: "",
} as const;

export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

const MAP_QUERY = encodeURIComponent(
  `${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}, ${SITE.address.country}`,
);

/** Google Maps iframe embed. Override with NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL (paste from Google Maps → Share → Embed). */
export const MAP_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
  (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${MAP_QUERY}`
    : `https://maps.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`);

export const MAP_GOOGLE_URL =
  `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const MAP_GOOGLE_DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
