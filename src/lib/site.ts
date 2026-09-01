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
  /** Set true when a public domain referrals inbox is ready to display on the site. */
  showReferralsEmailOnSite: false,
  /** Public referrals address; only shown when showReferralsEmailOnSite is true. */
  referralsEmail: "",
} as const;

export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

export const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=174.7710%2C-41.2956%2C174.7770%2C-41.2926&layer=hot&marker=-41.2941%2C174.7740";

export const MAP_GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=12+College+Street+Te+Aro+Wellington";

export const MAP_GOOGLE_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=12+College+Street+Te+Aro+Wellington";
