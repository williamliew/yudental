import { Section } from "@/components/ui/Section";
import { HOME_PROCESS_TILES } from "@/lib/tile-images";
import Image from "next/image";
import Link from "next/link";

export function ProcessSteps() {
  return (
    <Section className="text-center" ariaLabelledBy="process-heading">
      <header>
        <h2 id="process-heading" className="font-sans text-2xl font-bold text-navy md:text-3xl">
          Your New Denture Journey
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-grey-dark">
          New dentures generally require around six appointments and can often be completed within
          approximately two to four weeks, depending on your individual treatment needs.
        </p>
      </header>
      <ol className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {HOME_PROCESS_TILES.map((step, index) => (
          <li key={step.id} className="w-full">
            <details className="group w-full rounded-lg border border-surface-muted bg-white p-4 text-left shadow-sm">
              <summary
                className="flex cursor-pointer list-none flex-col items-center text-center marker:content-none [&::-webkit-details-marker]:hidden"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-teal/20 bg-white p-3 shadow-sm md:h-28 md:w-28">
                  <Image
                    src={step.src}
                    alt=""
                    width={step.width}
                    height={step.height}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span
                  className="mt-4 flex min-h-[2.75rem] max-w-[16rem] items-start justify-center text-base font-semibold leading-snug text-navy md:min-h-[3.25rem] md:text-lg"
                >
                  <span>
                    <span className="text-teal">{index + 1}.</span> {step.label}
                  </span>
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                  What to expect
                  <span
                    className="transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </span>
              </summary>
              <p className="mt-4 border-t border-surface-muted pt-4 text-sm text-grey-mid leading-relaxed">
                {step.description}
              </p>
            </details>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-grey-mid text-balance">
        Visit our clinic: <Link href="/book/">Book online</Link>.{" "}
        <span aria-hidden="true">|</span> Referrals for practices:{" "}
        <Link href="/dental-lab-services/">For Dentists</Link>.
      </p>
    </Section>
  );
}
