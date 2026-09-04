export const PRIVACY_POLICY_LAST_UPDATED = "September 2026";

export const PRIVACY_EXTERNAL_LINKS = {
  halaxy: "https://www.halaxy.com/privacy-policy",
  cloudflare: "https://www.cloudflare.com/privacypolicy/",
  privacyCommissioner: "https://www.privacy.org.nz/",
} as const;

export type PrivacyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "externalLink"; label: string; href: keyof typeof PRIVACY_EXTERNAL_LINKS }
  | { type: "contact" };

export type PrivacySection = {
  id: string;
  number: number;
  title: string;
  blocks: readonly PrivacyBlock[];
};

export const PRIVACY_INTRO_PARAGRAPHS = [
  "Yu Dental Laboratory Ltd (“we”, “our” or “us”) is committed to protecting your privacy and ensuring that personal and health information is handled responsibly and securely.",
  "We handle personal and health information in accordance with the Privacy Act 2020, the Health Information Privacy Code 2020, and other applicable New Zealand legal and professional requirements. The Health Information Privacy Code was most recently amended with changes effective from 1 May 2026.",
  "This Privacy Policy explains how we collect, use, store, disclose and protect information when you:",
] as const;

export const PRIVACY_INTRO_LIST = [
  "visit our website;",
  "contact or make an enquiry with us;",
  "book an appointment;",
  "receive denture care from our clinic; or",
  "interact with us through a dentist or other oral health professional using our dental laboratory services.",
] as const;

export const PRIVACY_SECTIONS: readonly PrivacySection[] = [
  {
    id: "information-we-collect",
    number: 1,
    title: "Information We Collect",
    blocks: [
      {
        type: "paragraph",
        text: "Depending on how you interact with Yu Dental Laboratory Ltd, we may collect:",
      },
      {
        type: "list",
        items: [
          "Your name, address, telephone number and email address.",
          "Information you provide through our website, email, telephone or other enquiries.",
          "Appointment and consultation information.",
          "Relevant medical, dental and health information required to provide your care.",
          "Information supplied by your dentist or another health professional in connection with a laboratory case.",
          "Dental prescriptions and laboratory instructions.",
          "Dental impressions, models, photographs, digital scans and other clinical records where required for your care or the manufacture of a dental appliance.",
          "Information relating to dentures and other dental appliances being designed, manufactured, repaired, relined or modified.",
          "Payment, invoice and billing information where applicable.",
          "Limited technical and website usage information associated with visits to our website.",
        ],
      },
      {
        type: "paragraph",
        text: "Where practicable, we collect personal information directly from you.",
      },
      {
        type: "paragraph",
        text: "Where we provide dental laboratory services, relevant information may instead be supplied to us by your dentist or another health professional involved in your care.",
      },
    ],
  },
  {
    id: "how-we-use",
    number: 2,
    title: "How We Use Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We may use your personal or health information to:",
      },
      {
        type: "list",
        items: [
          "Respond to enquiries and communicate with you.",
          "Arrange, confirm and manage appointments.",
          "Assess and plan your denture treatment.",
          "Provide denture care, adjustments, repairs, relines and related services.",
          "Design, manufacture, repair or modify dentures and other dental appliances.",
          "Communicate with dentists and other health professionals involved in your care.",
          "Process dental laboratory cases submitted by referring dentists.",
          "Maintain appropriate clinical, laboratory, financial and administrative records.",
          "Process payments and manage accounts.",
          "Improve our services and patient experience.",
          "Maintain the security and functionality of our website and systems.",
          "Meet our legal, regulatory and professional obligations.",
        ],
      },
      {
        type: "paragraph",
        text: "We will use personal and health information for the purpose for which it was collected, a directly related purpose, or another purpose permitted by law.",
      },
    ],
  },
  {
    id: "sharing",
    number: 3,
    title: "Sharing Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "Yu Dental Laboratory Ltd does not sell your personal or health information.",
      },
      {
        type: "paragraph",
        text: "We may disclose information where it is reasonably necessary and lawful to do so, including:",
      },
      { type: "subheading", text: "For your care:" },
      {
        type: "paragraph",
        text: "Information may be shared with your dentist, dental technician, dental laboratory or another health professional where this is necessary for your treatment or the manufacture of a dental appliance.",
      },
      { type: "subheading", text: "With your authorisation:" },
      {
        type: "paragraph",
        text: "We may provide information to another health professional, insurer, family member or other person where you have authorised us to do so.",
      },
      { type: "subheading", text: "For administration and operation of our business:" },
      {
        type: "paragraph",
        text: "We may use trusted service providers that assist us with functions such as practice management, information technology, website operation, secure data storage, accounting and payment processing.",
      },
      { type: "subheading", text: "Where required or permitted by law:" },
      {
        type: "paragraph",
        text: "We may disclose information where disclosure is required or otherwise permitted under New Zealand law, including applicable health, professional or regulatory requirements.",
      },
      {
        type: "paragraph",
        text: "Where third-party service providers process information on our behalf, we take reasonable steps to ensure appropriate privacy and security safeguards are in place.",
      },
      {
        type: "paragraph",
        text: "We do not disclose your personal information to unrelated third parties for their own marketing purposes.",
      },
    ],
  },
  {
    id: "halaxy",
    number: 4,
    title: "Halaxy Practice Management System",
    blocks: [
      {
        type: "paragraph",
        text: "We use Halaxy as a practice-management platform.",
      },
      {
        type: "paragraph",
        text: "Depending on the services you receive from us, Halaxy may be used to manage information such as:",
      },
      {
        type: "list",
        items: [
          "Your contact and patient details.",
          "Appointments and bookings.",
          "Clinical and health records.",
          "Treatment information.",
          "Communications.",
          "Invoices and billing.",
          "Payments and other information associated with your care.",
        ],
      },
      {
        type: "paragraph",
        text: "Information stored within Halaxy may therefore include both personal information and health information.",
      },
      {
        type: "paragraph",
        text: "Halaxy states that data is protected using security and encryption measures, including encryption at rest and in transit. Halaxy also states that practice data for users outside the European Union is stored in Australia.",
      },
      {
        type: "paragraph",
        text: "Halaxy states that identifiable patient or consumer information is not sold to third parties.",
      },
      {
        type: "paragraph",
        text: "Where you use an online booking facility provided through Halaxy, information you enter may be processed through Halaxy as part of providing that service.",
      },
      { type: "externalLink", label: "Halaxy Privacy Policy", href: "halaxy" },
    ],
  },
  {
    id: "cloudflare",
    number: 5,
    title: "Cloudflare and Our Website",
    blocks: [
      {
        type: "paragraph",
        text: "Our website uses services provided by Cloudflare to assist with website delivery, performance and security.",
      },
      {
        type: "paragraph",
        text: "In providing its services, Cloudflare may process certain technical information associated with website traffic.",
      },
      {
        type: "paragraph",
        text: "Cloudflare states that its systems may process information such as IP addresses, system configuration information and referring URLs in connection with its services.",
      },
      {
        type: "paragraph",
        text: "Our website may also use Cloudflare Web Analytics to help us understand website usage and performance.",
      },
      {
        type: "paragraph",
        text: "Cloudflare states that its Web Analytics service:",
      },
      {
        type: "list",
        items: [
          "does not use cookies or local storage to collect usage metrics;",
          "does not fingerprint individual visitors for analytics purposes; and",
          "does not track individual users across its customers' websites.",
        ],
      },
      {
        type: "paragraph",
        text: "Cloudflare itself may use strictly necessary cookies for certain security and network functions depending on the Cloudflare services configured on a website.",
      },
      { type: "externalLink", label: "Cloudflare Privacy Policy", href: "cloudflare" },
    ],
  },
  {
    id: "overseas",
    number: 6,
    title: "Overseas Storage and Processing",
    blocks: [
      {
        type: "paragraph",
        text: "Some of the technology providers we use operate or store information outside New Zealand.",
      },
      {
        type: "paragraph",
        text: "In particular, Halaxy states that practice data for users outside the European Union is stored in Australia.",
      },
      {
        type: "paragraph",
        text: "Cloudflare operates a global network, and information processed through some Cloudflare services may be processed outside New Zealand. For example, Cloudflare states that certain cookie data may, by default, be processed in the United States.",
      },
      {
        type: "paragraph",
        text: "Where the disclosure of personal or health information outside New Zealand is subject to New Zealand's overseas-disclosure requirements, we will take reasonable steps to comply with those requirements.",
      },
      {
        type: "paragraph",
        text: "The Privacy Act and Health Information Privacy Code contain specific safeguards relating to disclosures outside New Zealand, including circumstances where the overseas recipient must provide comparable safeguards or the individual must give informed authorisation.",
      },
    ],
  },
  {
    id: "security",
    number: 7,
    title: "Storage and Security",
    blocks: [
      {
        type: "paragraph",
        text: "We take reasonable steps to protect the personal and health information we hold from:",
      },
      {
        type: "list",
        items: ["loss;", "unauthorised access;", "misuse;", "modification; and", "unauthorised disclosure."],
      },
      {
        type: "paragraph",
        text: "Depending on the type of information, records may be held electronically or in physical form.",
      },
      {
        type: "paragraph",
        text: "Security measures may include password protection, access controls, secure systems, physical security measures and restricting access to staff who require the information for legitimate professional or administrative purposes.",
      },
      {
        type: "paragraph",
        text: "We also expect staff and service providers handling personal and health information to maintain appropriate confidentiality and security.",
      },
    ],
  },
  {
    id: "retention",
    number: 8,
    title: "Retention of Information",
    blocks: [
      {
        type: "paragraph",
        text: "We retain clinical, laboratory, financial and other records for the periods required by applicable New Zealand laws, professional standards and our legitimate business requirements.",
      },
      {
        type: "paragraph",
        text: "The Health Information Privacy Code specifically addresses the retention of health information under Rule 9.",
      },
      {
        type: "paragraph",
        text: "When personal or health information is no longer required to be retained, we take reasonable steps to securely dispose of it or otherwise protect it from unauthorised use or disclosure.",
      },
    ],
  },
  {
    id: "rights",
    number: 9,
    title: "Your Privacy Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Under New Zealand privacy law, you may have the right to:",
      },
      {
        type: "list",
        items: [
          "Request access to personal or health information we hold about you.",
          "Ask us to correct information you believe is inaccurate or incomplete.",
          "Request that a statement of correction be attached to information where appropriate.",
          "Withdraw consent for future marketing communications where applicable.",
        ],
      },
      {
        type: "paragraph",
        text: "We may need to verify your identity before providing access to personal or health information.",
      },
      {
        type: "paragraph",
        text: "To make a request, please contact us:",
      },
      { type: "contact" },
    ],
  },
  {
    id: "electronic",
    number: 10,
    title: "Website Enquiries and Electronic Communications",
    blocks: [
      {
        type: "paragraph",
        text: "If you contact us through our website, email, telephone or an online booking system, we may collect the information you provide in order to respond to your enquiry or provide our services.",
      },
      {
        type: "paragraph",
        text: "Please be aware that ordinary email and internet communications may not always be completely secure.",
      },
      {
        type: "paragraph",
        text: "We recommend that you avoid sending unnecessary sensitive health or personal information through unsecured email or website communications.",
      },
      {
        type: "paragraph",
        text: "Where sensitive information is required, we may arrange an appropriate method for providing that information.",
      },
    ],
  },
  {
    id: "cookies",
    number: 11,
    title: "Cookies and Website Analytics",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may use cookies or similar technologies where necessary for website functionality, security or performance.",
      },
      {
        type: "paragraph",
        text: "As noted above, where we use Cloudflare Web Analytics, Cloudflare states that this particular analytics service does not use cookies or local storage to collect website usage metrics.",
      },
      {
        type: "paragraph",
        text: "Other Cloudflare security or network functionality may use strictly necessary cookies.",
      },
      {
        type: "paragraph",
        text: "You can control or remove cookies through your browser settings. Disabling certain cookies may affect the functionality or security features of some websites.",
      },
    ],
  },
  {
    id: "complaints",
    number: 12,
    title: "Privacy Concerns and Complaints",
    blocks: [
      {
        type: "paragraph",
        text: "If you have a question, concern or complaint about the way Yu Dental Laboratory Ltd has handled your personal or health information, please contact us:",
      },
      { type: "contact" },
      {
        type: "paragraph",
        text: "We will endeavour to investigate and respond appropriately.",
      },
      {
        type: "paragraph",
        text: "If you are not satisfied with our response, you may also have the right to make a complaint to the Office of the Privacy Commissioner of New Zealand.",
      },
      {
        type: "externalLink",
        label: "Office of the Privacy Commissioner — New Zealand",
        href: "privacyCommissioner",
      },
    ],
  },
  {
    id: "changes",
    number: 13,
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes to our services, technology, business practices or legal obligations.",
      },
      {
        type: "paragraph",
        text: "The most recent version will be available on our website, with the date of the latest update shown at the beginning of this policy.",
      },
    ],
  },
];
