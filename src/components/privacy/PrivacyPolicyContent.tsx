import {
  PRIVACY_EXTERNAL_LINKS,
  type PrivacyBlock,
} from "@/content/privacy-policy";
import { SITE } from "@/lib/site";

function ExternalPolicyLink({ label, href }: { label: string; href: string }) {
  return (
    <p className="mt-4">
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold">
        {label}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </p>
  );
}

function PrivacyContactBlock() {
  return (
    <address className="mt-4 space-y-1 not-italic text-grey-mid">
      <p className="font-semibold text-navy">{SITE.legalName}</p>
      <p>{SITE.address.street}</p>
      <p>
        {SITE.address.suburb}
        <br />
        {SITE.address.city} {SITE.address.postcode}
        <br />
        {SITE.address.country}
      </p>
      <p className="pt-2">
        Phone:{" "}
        <a href={`tel:${SITE.phoneTel}`} className="font-semibold">
          {SITE.phone}
        </a>
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${SITE.email}`} className="font-semibold">
          {SITE.email}
        </a>
      </p>
    </address>
  );
}

function PrivacyBlockView({ block }: { block: PrivacyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="leading-relaxed">{block.text}</p>;
    case "subheading":
      return <h3 className="mt-6 font-semibold text-navy">{block.text}</h3>;
    case "list":
      return (
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "contact":
      return <PrivacyContactBlock />;
    case "externalLink":
      return (
        <ExternalPolicyLink
          label={block.label}
          href={PRIVACY_EXTERNAL_LINKS[block.href]}
        />
      );
    default:
      return null;
  }
}

export function PrivacyPolicyBlocks({ blocks }: { blocks: readonly PrivacyBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => (
        <PrivacyBlockView key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  );
}
