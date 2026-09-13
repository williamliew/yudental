import { PageBanner } from "@/components/layout/PageBanner";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const externalButtonClass =
  "inline-flex items-center justify-center rounded border border-teal bg-teal px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white no-underline transition-colors duration-200 hover:border-teal-hover hover:bg-teal-hover";

type ExternalLink = {
  label: string;
  href: string;
};

type ScannerConnectionLayoutProps = {
  bannerTitle: string;
  bannerTagline: string;
  sectionTitle: string;
  intro: ReactNode;
  steps: ReactNode;
  illustrationAlt: string;
  cta?: ExternalLink;
  extraLinks?: ReactNode;
};

export function ScannerConnectionLayout({
  bannerTitle,
  bannerTagline,
  sectionTitle,
  intro,
  steps,
  illustrationAlt,
  cta,
  extraLinks,
}: ScannerConnectionLayoutProps) {
  return (
    <>
      <PageBanner title={bannerTitle} tagline={bannerTagline} backgroundImage="/images/for-dentists.jpg" />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="scanner-connection-heading">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-start">
            <div>
              <h2
                id="scanner-connection-heading"
                className="font-sans text-2xl font-bold text-navy md:text-3xl"
              >
                {sectionTitle}
              </h2>
              <div className="mt-4 space-y-4 text-grey-mid leading-relaxed">
                <div>{intro}</div>
                <ol className="list-decimal space-y-3 pl-5">{steps}</ol>
                {extraLinks ? <div>{extraLinks}</div> : null}
                {cta ? (
                  <div className="pt-2">
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalButtonClass}
                    >
                      {cta.label}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  </div>
                ) : null}
              </div>
              <p className="mt-8 text-sm text-grey-mid">
                <Link href="/dental-lab-services/" className="font-semibold no-underline hover:underline">
                  ← Back to For Dentists
                </Link>
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-surface-muted bg-white p-4">
              <Image
                src="/images/digital-scans/connect-with-us.jpg"
                alt={illustrationAlt}
                width={1024}
                height={682}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
